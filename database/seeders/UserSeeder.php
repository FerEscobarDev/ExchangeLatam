<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $users = User::all();

        foreach($users as $user){
            $user->syncRoles('Usuario');
        }

        $admin = User::find(1);
        $admin->syncRoles('Admin', 'Usuario');
    }
}
