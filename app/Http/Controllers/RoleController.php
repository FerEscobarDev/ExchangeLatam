<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;
use Spatie\Permission\Models\Role;

class RoleController extends Controller
{

    public function index()
    {
        $roles = Role::all();
        $permissions = Permission::all();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.roles.index', compact('roles', 'contact', 'permissions'));
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $role = Role::create($request->all());

        $role->permissions()->sync($request->permissions);

        return back()->with('success', 'Rol creado con éxito.');
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, Role $role)
    {
        $request->validate([
            'name' => 'required|string',
        ]);

        $role->update($request->all());

        $role->permissions()->sync($request->permissions);

        return back()->with('success', 'Rol actualizado con éxito.');
    }


    public function destroy(Role $role)
    {
        $role->delete();

        return back()->with('success', 'Rol eliminado con éxito.');
    }
}
