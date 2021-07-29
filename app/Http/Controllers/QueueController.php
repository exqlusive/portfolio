<?php

namespace App\Http\Controllers;

use App\Models\Player;
use App\Models\Queue;
use App\Models\Team;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Inertia\Response;

class QueueController extends Controller
{
    /**
     * @return Response
     */
    public function index(): Response
    {
        return Inertia::render('Index', ['data' => ['queues' => Queue::all()]]);
    }

    public function create(Request $request)
    {
        $queue = new Queue;

        $queue->save();
    }

    /**
     * @param $uuid
     * @return array|Response
     */
    public function read($uuid): array|Response
    {
        $queue = Queue::find($uuid);

        if (!$queue) {
            return [
                'data' => [
                    'status' => __('queue.not_found'),
                ]
            ];
        } else {
            $teams = Team::where('queue_id', $uuid)->get();

            $teams->players = 0;

            foreach ($teams as $team) {
                $teams->players += Player::where('team_id', $team->id)->get()->count();
            }

            return Inertia::render('Queues/Read', [
                'data' => [
                    'status' => 'success',
                    'queue' => Queue::find($uuid),
                    'data' => [
                        'total_teams' => $teams->count(),
                        'total_players' => $teams->players,
                        'teams' => Team::with(['players'])
                            ->select(['teams.id'])
                            ->where('queue_id', $uuid)
                            ->get()
                    ]
                ]
            ]);
        }
    }

    /**
     * @param $uuid
     * @return
     */
    public function players($uuid)
    {
        $queue = Team::where('queue_id', $uuid)->get()->count();

        if (!$queue) {
            return [
                'data' => [
                    'status' => __('queue.not_found'),
                ]
            ];
        } else {
            return [
                'data' => [
                    'status' => 'success',
                    'players' => Queue::find($uuid)->players()
                ]
            ];
        }
    }

    /**
     * @param Request $request
     * @return array
     */
    public function update(Request $request): array
    {
        $queue = Queue::find($request->input('uuid'));

        if (!$queue) return ['error' => __('queue.not_found')];

        $queue->save();

        return ['success' => __('queue.updated')];
    }

    /**
     * @param $uuid
     * @return array
     */
    public function delete($uuid): array
    {
        $queue = Queue::find($uuid);

        if (!$queue) return ['error' => __('queue.not_found')];

        $queue->delete();

        return ['success' => __('queue.removed')];
    }
}
