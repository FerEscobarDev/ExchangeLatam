<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::paginate(10);

        return Inertia::render('Admin/Permissions/Index', [
            'permissions' => $permissions,
        ]);
    }


    public function create()
    {
        return Inertia::render('Admin/Permissions/Create');
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        Permission::create($request->all());

        return Redirect::route('admin.permissionIndex')->with('success', 'Permiso creado con éxito.');
    }


    public function show($id)
    {
        //
    }


    public function edit(Permission $permission)
    {
        return Inertia::render('Admin/Permissions/Edit', [
            'permission' => $permission,
        ]);
    }


    public function update(Request $request, Permission $permission)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        $permission->update($request->all());

        return Redirect::route('admin.permissionIndex')->with('success', 'Permiso actualizado con éxito.');
    }


    public function destroy(Permission $permission)
    {
        $permission->delete();

        return Redirect::back()->with('success', 'Permiso eliminado con éxito.');
    }
}
