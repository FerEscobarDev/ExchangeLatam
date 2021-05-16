<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notices extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación de muchos a muchos
    public function users(){
        return $this->belongsToMany(User::class);
    }
}
