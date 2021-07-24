<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RolesSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $roleUser = Role::create(['name' => 'Usuario']);
        $roleAdmin = Role::create(['name' => 'Admin']);
        $roleContador = Role::create(['name' => 'Contador']);
        $roleWithdrawals = Role::create(['name' => 'Withdrawals']);

        Permission::create(['name' => 'panel.user', 'description' => 'Ver Panel de Usuario'])->syncRoles([$roleAdmin, $roleUser]);
        Permission::create(['name' => 'admin.dashboard', 'description' => 'Ver Dash de Admin'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'user.index', 'description' => 'Ver Lista de Usuarios'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'deposit.index', 'description' => 'Ver Lista de Depositos'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'withdrawal.index', 'description' => 'Ver Lista de Retiros'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'admin.dollarPriceIndex', 'description' => 'Ver Lista de Precio Dolar'])->syncRoles([$roleAdmin]);
        Permission::create(['name' => 'admin.roleIndex', 'description' => 'Ver Lista de Roles'])->syncRoles([$roleAdmin]);
    }
}
