<?php

namespace App\Http\Controllers;

use App\Models\Team;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;
use Illuminate\Http\Resources\Json\JsonResource;

class TeamController extends Controller
{
    /**
     * @return AnonymousResourceCollection
     */
    public function index(): AnonymousResourceCollection
    {
        return JsonResource::collection(Team::all());
    }

    public function create(Request $request)
    {
        $team = new Team;

        $team->save();
    }

    /**
     * @param $uuid
     * @return AnonymousResourceCollection
     */
    public function read($uuid): AnonymousResourceCollection
    {
        return JsonResource::collection(Team::find($uuid));
    }

    /**
     * @param Request $request
     * @return array
     */
    public function update(Request $request): array
    {
        $team = Team::find($request->input('uuid'));

        if (!$team) return ['error' => trans('team.not_found')];

        $team->save();

        return ['success' => trans('team.updated')];
    }

    /**
     * @param $uuid
     * @return array
     */
    public function delete($uuid): array
    {
        $team = Team::find($uuid);

        if (!$team) return ['error' => trans('team.not_found')];

        $team->delete();

        return ['success' => trans('team.removed')];
    }
}
