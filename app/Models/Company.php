<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Company extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación de uno a muchos
    public function contacts(){
        return $this->hasMany(Contact::class);
    }

    //Relación de uno a muchos
    public function faqs(){
        return $this->hasMany(Faq::class);
    }

    //Relación de uno a muchos
    public function dollarPrices(){
        return $this->hasMany(DollarPrice::class);
    }

    //Relación de uno a muchos
    public function fbsBalances(){
        return $this->hasMany(FbsBalance::class);
    }
}
