<?php

namespace App\Traits;

use Illuminate\Database\Eloquent\Model;
use Webpatser\Uuid\Uuid;

trait Guid
{
    /** @return bool */
    public function getIncrementing(): bool
    {
        return false;
    }

    /** @return string */
    public function getKeyType(): string
    {
        return 'string';
    }

    /** @return void */
    public static function bootGuid()
    {
        self::creating(function (Model $model) {
            $model->id = (string) Uuid::generate(4);
        });
    }
}
