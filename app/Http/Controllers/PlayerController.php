<?php

namespace App\Http\Controllers;

use App\Models\Player;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class PlayerController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return JsonResource::collection(Player::all());
    }

    public function create(Request $request)
    {
        $player = new Player;

        $player->save();
    }

    /**
     * @param $uuid
     * @return AnonymousResourceCollection
     */
    public function read($uuid): AnonymousResourceCollection
    {
        return JsonResource::collection(Player::find($uuid));
    }

    /**
     * @param Request $request
     * @return array
     */
    public function update(Request $request): array
    {
        $player = Player::find($request->input('uuid'));

        if (!$player) return ['error' => trans('player.not_found')];

        $player->save();

        return ['success' => trans('player.updated')];
    }

    /**
     * @param $uuid
     * @return array
     */
    public function delete($uuid): array
    {
        $player = Player::find($uuid);

        if (!$player) return ['error' => trans('player.not_found')];

        $player->delete();

        return ['success' => trans('player.removed')];
    }
}
