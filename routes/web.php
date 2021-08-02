<?php

use App\Http\Controllers\ContactFormController;
use Illuminate\Support\Facades\Route;
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

Route::get('/curriculum-vitae', function () {
    return Inertia::render('CV');
});

Route::get('/contact', function () {
    return Inertia::render('Contact');
});

Route::post('/contact', [ContactFormController::class, 'create']);
