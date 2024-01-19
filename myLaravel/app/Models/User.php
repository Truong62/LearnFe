<?php
namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Auth\Authenticatable as AuthenticatableTrait;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class User extends Model implements Authenticatable
{
    use AuthenticatableTrait;
    use HasFactory;

    protected $table = 'user';
    protected $fillable = [
        'account', 
        'password', 
        'nameUser',
    ];
    public $timestamps = false;
}

