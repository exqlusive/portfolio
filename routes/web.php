<?php

use App\Http\Controllers\MenuController;
use App\Http\Controllers\PlayerController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\QueueController;
use App\Http\Controllers\TeamController;
use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Cookie;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Session;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return Inertia::render('Index');
});

Route::get('/about', function () {
    return Inertia::render('About');
});

Route::get('/skills', function () {
    return Inertia::render('Skills');
});

Route::get('/journey', function () {
    return Inertia::render('Journey');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::get('/{locale}', function ($locale) {
    Session::put('locale', $locale);
    return redirect()->to('/');
});

//leander - 7 hele rido  amagard
//weprovide
// socialdeal
