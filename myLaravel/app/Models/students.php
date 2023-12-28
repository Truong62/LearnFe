<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class students extends Model
{
    protected $table = 'students';

    protected $fillable = [
        'id',
        'name',
        'birthday',
        'gender',
        'address',
        'phone',
        'email',
    ];
}
