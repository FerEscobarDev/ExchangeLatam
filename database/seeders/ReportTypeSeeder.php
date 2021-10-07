<?php

namespace Database\Seeders;

use App\Models\ReportType;
use Illuminate\Database\Seeder;

class ReportTypeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        ReportType::create([
            'name' => 'Compras'
        ]);

        ReportType::create([
            'name' => 'Ventas'
        ]);
    }
}
