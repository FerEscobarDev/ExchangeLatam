<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $guarded = [];

    public function transactionable()
    {
        return $this->morphTo();
    }

    //Relación uno a muchos (invertida)
    public function report(){
        return $this->belongsTo(Report::class);
    }
}
