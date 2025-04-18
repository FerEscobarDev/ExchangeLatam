<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class RebateDescription extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function deposit(){
        return $this->belongsTo(Deposit::class);
    }
}
