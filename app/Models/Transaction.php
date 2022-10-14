<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $guarded = [];

    /* public function transactionable()
    {
        return $this->morphTo();
    } */

    //Relación uno a muchos (invertida)
   /*  public function report(){
        return $this->belongsTo(Report::class);
    } */

    //Relación uno a muchos (invertida)
    public function user(){
        return $this->belongsTo(User::class);
    }

    //Relación de uno a muchos (invertida)
    public function account(){
        return $this->belongsTo(Account::class);
    }

    public function transactionable()
    {
        return $this->morphTo();
    }

    //Relación uno a muchos (invertida)
    /* public function exchangeAccount()
    {
        return $this->belongsTo(ExchangeAccount::class);
    } */
 
    /* //Relación de uno a muchos (invertida)
    public function tradingAccount(){
        return $this->belongsTo(TradingAccount::class);
    } */
/*
    // Relación de uno a muchos (invertida)
    public function walletAccount()
    {
        return $this->belongsTo(WalletAccount::class);
    } */
}
