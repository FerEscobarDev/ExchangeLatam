<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class PendingWithdrawal extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación uno a muchos (invertida)
    public function user(){
        return $this->belongsTo(User::class);
    }
}
