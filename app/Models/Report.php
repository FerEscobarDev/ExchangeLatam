<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Report extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación 1 a muchos
    public function transactions(){
        return $this->hasMany(Transaction::class);
    }
    
    //Relación uno a muchos (invertida)
    public function reportType()
    {
        return $this->belongsTo(ReportType::class);
    }

    //Relación uno a muchos (invertida)
    public function month()
    {
        return $this->belongsTo(Month::class);
    }
}
