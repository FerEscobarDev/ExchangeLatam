<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Broker extends Model
{
    use HasFactory;
    protected $guarded = [];

    //Relación uno a muchos
    public function TradingAccounts(){
        return $this->hasMany(TradingAccount::class);
    }
}
