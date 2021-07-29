<?php

namespace App\Http\Controllers;

use App\Models\Menu;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class MenuController extends Controller
{
    public function index()
    {
        return JsonResource::collection(Menu::all());
    }
}
