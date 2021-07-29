<?php

namespace App\Models\Discord;

use App\Models\User;
use App\Traits\Guid;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsToMany;
use Illuminate\Database\Eloquent\Relations\Pivot;

class GuildUser extends Pivot
{
    use HasFactory, Guid;

    /**
     * @return BelongsToMany
     */
    public function users(): BelongsToMany
    {
        return $this->belongsToMany(User::class);
    }

    /**
     * @return BelongsToMany
     */
    public function guilds(): BelongsToMany
    {
        return $this->belongsToMany(Guild::class);
    }
}
