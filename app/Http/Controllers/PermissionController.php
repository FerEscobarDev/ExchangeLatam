<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;
use Spatie\Permission\Models\Permission;

class PermissionController extends Controller
{
    public function index()
    {
        $permissions = Permission::all();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.permissions.index', compact('contact', 'permissions'));
    }


    public function create()
    {
        //
    }


    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        Permission::create($request->all());

        return back()->with('success', 'Permiso creado con éxito.');
    }


    public function show($id)
    {
        //
    }


    public function edit($id)
    {
        //
    }


    public function update(Request $request, Permission $permission)
    {
        $request->validate([
            'name' => 'required|string',
            'description' => 'required|string',
        ]);

        $permission->update($request->all());

        return back()->with('success', 'Permiso actualizado con éxito.');
    }


    public function destroy(Permission $permission)
    {
        $permission->delete();

        return back()->with('success', 'Permiso eliminado con éxito.');
    }
}
