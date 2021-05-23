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
        $facebook = Contact::create([
            'company_id' => 1,
            'means' => 'facebook',
            'link' => 'https://www.facebook.com/ExchangeLatam/'
        ]);

        $instagram = Contact::create([
            'company_id' => 1,
            'means' => 'instagram',
            'link' => 'https://www.instagram.com/Exchangelatam/'
        ]);

        $whatsapp = Contact::create([
            'company_id' => 1,
            'means' => 'whatsapp',
            'link' => 'https://api.whatsapp.com/send?phone=573223105578'
        ]);

        $email = Contact::create([
            'company_id' => 1,
            'means' => 'email',
            'link' => 'mailto:support@exchangelatam.com'
        ]);

    }
}
