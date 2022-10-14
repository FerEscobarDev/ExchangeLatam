<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Permission;

class RoleController extends Controller
{

    public function index()
    {
        $roles = Role::paginate(10);

        return Inertia::render('Admin/Roles/Index',[
            'roles' => $roles,
        ]);
    }


    public function create()
    {
        $permissions = Permission::all();
        return Inertia::render('Admin/Roles/Create', [
            'permissions' => $permissions,
        ]);
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $role = Role::create($request->all());

        $role->permissions()->sync($request->permissions);

        return Redirect::route('admin.roleIndex')->with('success', 'Rol creado con éxito.');
    }


    public function show($id)
    {
        //
    }


    public function edit(Role $role)
    {
        $permissions = Permission::all();
        return Inertia::render('Admin/Roles/Edit', [
            'role' => $role,
            'permissions' => $role->permissions,
            'permissionsAll' => $permissions,
        ]);
    }


    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $role->update($request->all());

        $role->permissions()->sync($request->permissions);

        return Redirect::back()->with('success', 'Rol actualizado con éxito.');
    }


    public function destroy(Role $role)
    {
        $role->delete();

        return back()->with('success', 'Rol eliminado con éxito.');
    }
}
