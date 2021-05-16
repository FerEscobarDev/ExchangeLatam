<?php

namespace Database\Seeders;

use App\Models\Contact;
use Illuminate\Database\Seeder;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $facebook = Contact::created([
            'company_id' => 1,
            'means' => 'Facebook',
            'link' => 'https://www.facebook.com/ExchangeLatam/',
            'icon' => 'fa fa-facebook'
        ]);

    }
}
