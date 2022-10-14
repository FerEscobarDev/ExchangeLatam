<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class WalletAccount extends Model
{
    use HasFactory;
    protected $guarded = [];

    //Relación uno a muchos (inversa)
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Relación de uno a muchos (inversa)
    public function wallet()
    {
        return $this->belongsTo(Wallet::class);
    }

    //Relación uno a muchos polimorfica
    public function transactions()
    {
        return $this->morphMany(Transaction::class, 'transactionable');
    }

    /* // Relación uno a muchos
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    } */
}
