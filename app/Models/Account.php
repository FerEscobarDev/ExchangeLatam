<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Account extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Realación uno a muchos (inversa)
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Realación uno a muchos (inversa)
    public function bank(){
        return $this->belongsTo(Bank::class);
    }

    //Relación de uno a muchos
    public function deposits(){
        return $this->hasMany(Deposit::class);
    }

    //Relación de uno a muchos
    public function withdrawals(){
        return $this->hasMany(Withdrawal::class);
    }

    //Relación de uno a muchos
    public function dollarPurchases(){
        return $this->hasMany(DollarPurchase::class);
    }

    //Relación de uno a muchos
    public function transactions(){
        return $this->hasMany(Transaction::class);
    }
}
