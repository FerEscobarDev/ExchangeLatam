<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Contact;
use App\Models\Notice;
use Illuminate\Http\Request;

class NoticeController extends Controller
{
    public function noticesUser($id)
    {   
        $user = User::find($id);
        $notices = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userNotices', compact('user', 'notices', 'contact'));
    }

    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request, User $user)
    {
        $request->validate([
            'type' => 'required|string',
            'title' => 'required|string',
            'content' => 'required|string'
        ]);

        $user->notices()->create([
            'type' => $request->type,
            'title' => $request->title,
            'content' => $request->content
        ]);

        return back()->with('success', $request->type.' registrada correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Notices  $notices
     * @return \Illuminate\Http\Response
     */
    public function show(Notice $notice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Notices  $notices
     * @return \Illuminate\Http\Response
     */
    public function edit(Notice $notice)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Notices  $notices
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Notice $notice)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Notices  $notices
     * @return \Illuminate\Http\Response
     */
    public function destroy(Notice $notice)
    {
        $notice->delete();

        return back()->with('success', 'Alerta eliminada correctamente.');
    }
}
