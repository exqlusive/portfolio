<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Services\DiscordOAuthService;
use GuzzleHttp\Exception\GuzzleException;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;
use JetBrains\PhpStorm\NoReturn;

class UserController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return JsonResource::collection(User::all());
    }

    public function create(Request $request)
    {
        $user = new User;

        $user->save();
    }

    /**
     * @param $uuid
     * @return AnonymousResourceCollection
     */
    public function read($uuid): AnonymousResourceCollection
    {
        return JsonResource::collection(User::find($uuid));
    }

    /**
     * @param Request $request
     * @return array
     */
    public function update(Request $request): array
    {
        $user = User::find($request->input('uuid'));

        if (!$user) return ['error' => trans('user.not_found')];

        $user->save();

        return ['success' => trans('user.updated')];
    }

    /**
     * @param $uuid
     * @return array
     */
    public function delete($uuid): array
    {
        $user = User::find($uuid);

        if (!$user) return ['error' => trans('user.not_found')];

        $user->delete();

        return ['success' => trans('user.removed')];
    }

    /**
     * @param Request $request
     * @param DiscordOAuthService $discordOAuthService
     * @return RedirectResponse
     * @throws GuzzleException
     */
    public function login(Request $request, DiscordOAuthService $discordOAuthService): RedirectResponse
    {
        $user = $discordOAuthService->token($request->query('code'));

        Auth::login($user);

        if (Auth::check()) {
            return redirect()->to('/profile');
        } else {
            return redirect()->to('/');
        }
    }
}
