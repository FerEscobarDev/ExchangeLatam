<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class DollarPurchase extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación uno a muchos (invertida)
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Relación de uno a muchos (invertida)
    public function account(){
        return $this->belongsTo(Account::class);
    }

    //Relación uno a uno polimorfica
    public function transaction()
    {
        return $this->morphOne(Transaction::class, 'transactionable');
    }
}
