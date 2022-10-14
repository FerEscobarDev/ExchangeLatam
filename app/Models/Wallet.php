<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Wallet extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación de uno a muchos
    public function walletAccounts()
    {
        return $this->hasMany(WalletAccount::class);
    }
}
