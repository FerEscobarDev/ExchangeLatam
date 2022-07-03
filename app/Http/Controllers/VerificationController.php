<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Verification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\AdminVerification;

class VerificationController extends Controller
{
    public function verificationUser($id)
    {
        $user = User::find($id);
        $contact = Contact::select('link')->where('company_id', 1)->get();
        
        return view('admin.userVerification', compact('user', 'contact'));
    }

    public function index()
    {
        return Inertia::render('Profile/Verification');
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        $requirementUser = Auth::user()->requirementUser;
        $formFund = Auth::user()->formFund;
        $formKnowledgeClient = Auth::user()->formKnowledgeClient;

        return Inertia::render('Profile/Verification', [
            'requirementUser' => $requirementUser,
            'formFund' => $formFund,
            'formKnowledgeClient' => $formKnowledgeClient,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $data = $request->validate([
            'front' => 'required|image|max:5000',
            'back' => 'required|image|max:5000'
        ]);

        $route_front = $data['front']->store('verified_support', 'public');
        $route_back = $data['back']->store('verified_support', 'public');

        $user = Auth::user();

        Verification::create([
            'user_id' => $user->id,
            'front' => $route_front,
            'back' => $route_back
        ]);

        $user->requirementUser()->update([
            'verified' => 1
        ]);

        if(($user->requirementUser->verified == 1 || $user->requirementUser->verified == 0) && $user->requirementUser->formFunds == 1 && $user->requirementUser->formKnowledge == 1)
        {
            $obj = new \stdClass();
            $obj->name = Auth::user()->name;
            $obj->lastname = Auth::user()->lastname;
            $obj->user_id = Auth::user()->id;

            $users = User::role('Verification')->get();

            foreach($users as $user){
                $user->notify(new AdminVerification($obj));
            }
        }

        return back()->with('success', 'Tus documentos han sido subidos, el proceso de verificación puede tomar hasta 48 horas.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Verification  $verification
     * @return \Illuminate\Http\Response
     */
    public function show(Verification $verification)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Verification  $verification
     * @return \Illuminate\Http\Response
     */
    public function edit(Verification $verification)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Verification  $verification
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Verification $verification)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Verification  $verification
     * @return \Illuminate\Http\Response
     */
    public function destroy(Verification $verification)
    {
        //
    }
}
