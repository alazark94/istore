<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Relations\Pivot;

class CustomerStore extends Pivot
{
    /**
     * @var bool
     */
    public $incrementing = true;
}
