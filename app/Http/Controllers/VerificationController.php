<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Contact;
use App\Models\Verification;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\UserVerification;
use Illuminate\Support\Facades\Storage;
use App\Notifications\AdminVerification;
use Illuminate\Support\Facades\Redirect;

class VerificationController extends Controller
{
    public function verificationUser($id)
    {
        $user = User::where('id', $id)->with('verification', 'dataUser', 'requirementUser', 'formFund', 'formKnowledgeClient')->first();
        
        return Inertia::render('Admin/Verifications/Index', [
            'client' => $user,

        ]);
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

        $user = User::find(Auth::user()->id);

        Verification::create([
            'user_id' => $user->id,
            'front' => $route_front,
            'back' => $route_back
        ]);

        $user->requirementUser()->update([
            'document' => 1
        ]);

        if($user->requirementUser->document >= 1 && $user->requirementUser->formFunds >= 1 && $user->requirementUser->formKnowledge >= 1)
        {
            $user->requirementUser()->update([
                'verified' => 1
            ]);

            $obj = new \stdClass();
            $obj->name = Auth::user()->name;
            $obj->lastname = Auth::user()->lastname;
            $obj->user_id = Auth::user()->id;

            $users = User::role('Verification')->get();

            foreach($users as $user){
                $user->notify(new AdminVerification($obj));
            }
        }

        return Redirect::back()->with('success', 'Tus documentos han sido subidos, el proceso de verificación puede tomar hasta 48 horas.');
    }

    public function verified(Request $request, User $user)
    {   
        $request->validate([ 
            'verified' => ['required'],
            'formClient' => ['required'],
            'formFund' => ['required'],
        ]);

        $obj = new \stdClass();
        $comments = new \stdClass();

        //Validando el documento de identidad
        if($request->verified['name']  == "No" && $user->requirementUser->document == 1)
        {
            $request->validate([
                'commentVerified' => 'Required',
            ]);

            $comments->commentVerified = $request->commentVerified;

            $user->requirementUser->update([
                'verified' => 0,
                'document' => 0,
            ]);

            $verification = $user->verification;

            Storage::delete(['public/'.$verification->front, 'public/'.$verification->back]);

            $verification->delete(); 
        }
        else if($request->verified['name']  == "Si" && $user->requirementUser->document == 1)
        {
            $user->requirementUser->update([
                'document' => 2,
            ]);
        }

        //Validando el formulario de conocimiento del cliente
        if($request->formClient['name']  == "No" && $user->requirementUser->formKnowledge == 1)
        {
            $request->validate([
                'commentFormClient' => 'Required',
            ]);

            $comments->commentFormClient = $request->commentFormClient;

            $user->requirementUser->update([
                'formKnowledge' => 0,
                'verified' => 0,
            ]);

            $formClient = $user->formKnowledgeClient;
            $formClient->delete();
        }
        else if($request->formClient['name']  == "Si" && $user->requirementUser->formKnowledge == 1)
        {
            $user->requirementUser->update([
                'formKnowledge' => 2,
            ]);
        }

        //Validando el formulario de declaración de fondos
        if($request->formFund['name']  == "No" && $user->requirementUser->formFunds == 1)
        {
            $request->validate([
                'commentFormFund' => 'Required',
            ]);

            $comments->commentFormFund = $request->commentFormFund;

            $user->requirementUser->update([
                'formFunds' => 0,
                'verified' => 0,
            ]);

            $formClient = $user->formFund;
            $formClient->delete();
        }
        else if($request->formFund['name']  == "Si" && $user->requirementUser->formFunds == 1)
        {
            $user->requirementUser->update([
                'formFunds' => 2,
            ]);
        }
        
        $obj->name = $user->name;
        $obj->lastname = $user->lastname;

        //Si todos los requisitos están completados la cuenta se verifica y se envía notificación de confirmación
        if($user->requirementUser->formFunds == 2 && $user->requirementUser->formKnowledge == 2 && $user->requirementUser->document == 2)
        {
            $user->requirementUser->update([
                'verified' => 2,
            ]);

            if(!empty($user->notices))
            {
                foreach($user->notices as $notice)
                {
                    if($notice->title == 'verify')
                    {
                        $notice->delete();
                    }
                }
            }

            $obj->verified = true;

            $user->notify(new UserVerification($obj, $comments));

            return Redirect::route('admin.userShow', $user->id)->with('success', 'Cuenta verificada, se ha enviado notificación al usuario.');
        }
        else
        {
            $user->notify(new UserVerification($obj, $comments));
            return Redirect::route('admin.userShow', $user->id)->with('success', 'Cuenta con novedades, se ha enviado notificación al usuario.');
        }
        
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
