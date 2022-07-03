<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class TradingAccount extends Model
{
    use HasFactory;
    protected $guarded = [];

    //Realación uno a muchos (inversa)
    public function user(){
        return $this->belongsTo(User::class);
    }
    
    //Realación uno a muchos (inversa)
    public function broker(){
        return $this->belongsTo(Broker::class);
    }

    //Relación de uno a muchos
    public function transactions(){
        return $this->hasMany(Transaction::class);
    }
}
