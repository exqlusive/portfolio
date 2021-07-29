<?php

namespace App\Models;

use App\Traits\Guid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * @method static where(string $string, $uuid)
 */
class Team extends Model
{
    use HasFactory, Guid;

    public $incrementing = false;

    public function players()
    {
        return $this->hasMany(Player::class);
    }

    public function queue()
    {
        return $this->belongsTo(Queue::class);
    }
}
