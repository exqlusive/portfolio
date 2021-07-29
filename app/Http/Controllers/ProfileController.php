<?php

namespace App\Http\Controllers;

use App\Models\Discord\Connection;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ProfileController extends Controller
{
    public function index()
    {
        return Inertia::render('Profile', [
            'data' => [
                'user' => User::with(['guilds', 'connections'])->find(Auth::user()->id),
            ]
        ]);
    }
}
