<?php


namespace App\Services;

use App\Models\Discord\Connection;
use App\Models\Discord\Guild;
use App\Models\User;
use GuzzleHttp\Client;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Database\Eloquent\Model;

class DiscordOAuthService
{
    /**
     * @param $code
     * @return mixed
     * @throws GuzzleException
     */
    public function token($code): mixed
    {
        $client = new Client();

        $response = $client->request('POST', config('services.discord.uri') . 'token', [
            'form_params' => [
                'client_id' => config('services.discord.client_id'),
                'client_secret' => config('services.discord.client_secret'),
                'grant_type' => config('services.discord.grant_type'),
                'code' => $code,
                'redirect_uri' => config('services.discord.redirect_uri'),
            ]
        ]);

        $response = json_decode($response->getBody(), false);

        $user = $this->getUser($response);

        $userGuilds = $this->getUserGuilds($response, $user);
        $userConnections = $this->getUserConnections($response, $user);

        if ($user && $userGuilds && $userConnections) {
            return User::where('discord_id', $user)->first();
        } else {
            return false;
        }
    }

    /**
     * @param $auth
     * @return mixed
     * @throws GuzzleException
     */
    private function getUser($auth): mixed
    {
        $client = new Client();

        $response = $client->request('GET', 'https://discord.com/api/v8/users/@me', [
            'headers' => [
                'Authorization' => 'Bearer ' . $auth->access_token,
            ]
        ]);

        $response = json_decode($response->getBody(), false);

        $user = User::where('discord_id', $response->id)->first() ?? new User;

        $user->discord_id = $response->id;
        $user->username = $response->username;
        $user->email = $response->email;
        $user->avatar = $response->avatar ?? null;
        $user->discriminator = $response->discriminator ?? null;
        $user->public_flags = $response->public_flags ?? null;
        $user->flags = $response->flags ?? null;
        $user->banner = $response->banner ?? null;
        $user->banner_color = $response->banner_color ?? null;
        $user->locale = $response->locale ?? null;
        $user->mfa_enabled = $response->mfa_enabled ?? null;
        $user->premium_type = $response->premium_type ?? null;
        $user->verified = $response->verified ?? null;

        $user->access_token = $auth->access_token;
        $user->refresh_token = $auth->refresh_token;

        $stored = $user->save();

        if ($stored) {
            return $response->id;
        } else {
            return (bool)$stored;
        }
    }

    /**
     * @param $auth
     * @param $userId
     * @return bool
     * @throws GuzzleException
     */
    private function getUserGuilds($auth, $userId): bool
    {
        $stored = false;

        $client = new Client();

        $response = $client->request('GET', 'https://discord.com/api/v8/users/@me/guilds', [
            'headers' => [
                'Authorization' => 'Bearer ' . $auth->access_token,
            ]
        ]);

        $response = json_decode($response->getBody(), false);

        foreach ($response as $server) {
            $guild = Guild::where('guild_id', $server->id)->first() ?? new Guild;

            $guild->guild_id = $server->id;
            $guild->name = $server->name;
            $guild->icon = $server->icon;

            $stored = $guild->save();
        }

        $user = User::where('discord_id', $userId)->first();
        $user->guilds()->detach();

        foreach ($response as $server) {
            $guild = Guild::where('guild_id', $server->id)->first();

            $user->guilds()->attach($guild->id);
        }

        return (bool)$stored;
    }

    /**
     * @param $auth
     * @param $discordId
     * @return bool
     * @throws GuzzleException
     */
    private function getUserConnections($auth, $discordId): bool
    {
        $stored = false;

        $client = new Client();

        $response = $client->request('GET', 'https://discord.com/api/v8/users/@me/connections', [
            'headers' => [
                'Authorization' => 'Bearer ' . $auth->access_token,
            ]
        ]);

        $response = json_decode($response->getBody(), false);

        Connection::where('discord_id', $discordId)->delete();
        $user = User::where('discord_id', $discordId)->first() ?? new User;

        foreach ($response as $social) {
            $connection = new Connection;

            $connection->user_id = $user->id;
            $connection->discord_id = $discordId;
            $connection->type = $social->type;
            $connection->uuid = $social->id;
            $connection->name = $social->name;
            $connection->visibility = $social->visibility;
            $connection->friend_sync = $social->friend_sync;
            $connection->show_activity = $social->show_activity;
            $connection->verified = $social->verified;

            $stored = $connection->save();
        }

        return (bool)$stored;
    }
}
