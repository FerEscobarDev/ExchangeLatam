<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Month extends Model
{
    use HasFactory;

    protected $guarded = [];

    //Relación de uno a muchos
    public function reports()
    {
        return $this->hasMany(Report::class);
    }
}
