<?php

namespace App\Models\Discord;

use App\Traits\Guid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Guild extends Model
{
    use HasFactory, Guid;

    public $incrementing = false;
}
