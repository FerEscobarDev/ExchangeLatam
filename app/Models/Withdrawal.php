<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Withdrawal extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación uno a muchos (invertida)
    public function user(){
        return $this->belongsTo(Users::class);
    }

    //Relación de uno a muchos (invertida)
    public function account(){
        return $this->belongsTo(Accounts::class);
    }
}
