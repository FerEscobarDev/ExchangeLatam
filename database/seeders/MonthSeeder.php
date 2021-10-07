<?php

namespace Database\Seeders;

use App\Models\Month;
use Illuminate\Database\Seeder;

class MonthSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $enero = Month::create([
            'name' => 'Enero'
        ]);

        $febrero = Month::create([
            'name' => 'Febrero'
        ]);
        
        $marzo = Month::create([
            'name' => 'Marzo'
        ]);
        
        $abril = Month::create([
            'name' => 'Abril'
        ]);
        
        $mayo = Month::create([
            'name' => 'Mayo'
        ]);
        
        $junio = Month::create([
            'name' => 'Junio'
        ]);
        
        $julio = Month::create([
            'name' => 'Julio'
        ]);
        
        $agosto = Month::create([
            'name' => 'Agosto'
        ]);

        $septiembre = Month::create([
            'name' => 'Septiembre'
        ]);

        $octubre = Month::create([
            'name' => 'Octubre'
        ]);

        $noviembre = Month::create([
            'name' => 'Noviembre'
        ]);

        $diciembre = Month::create([
            'name' => 'Diciembre'
        ]);
    }
}
