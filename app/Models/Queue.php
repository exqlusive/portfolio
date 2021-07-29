<?php

namespace App\Models;

use App\Traits\Guid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static find($uuid)
 */
class Queue extends Model
{
    use HasFactory, Guid;

    public $incrementing = false;

    public function teams()
    {
        return $this->hasMany(Team::class);
    }
}
