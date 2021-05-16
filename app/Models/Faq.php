<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Faq extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación de uno a muchos (invertida)
    public function company(){
        return $this->belongsTo(Company::class);
    }
}
