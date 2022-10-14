<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\FormFund;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Notifications\AdminVerification;
use Illuminate\Support\Facades\Redirect;

class FormFundController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
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
        $dataUser = Auth::user()->dataUser;
        return Inertia::render('Profile/FormFund', [
            'dataUser' => $dataUser,
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
        $request->validate([
            'expeditionPlace' => ['required', 'string', 'max:100', 'min:3'],
            'citySign' => ['required', 'string', 'max:100', 'min:3'],
            'sign' => ['required', 'accepted']
        ]);

        $hoy = date('Y-m-d');

        $user = User::find(Auth::user()->id);

        $user->dataUser()->update([
            'expeditionPlace' => ucwords(strtolower($request['expeditionPlace'])),
        ]);

        $formFund = $user->formFund()->create([
            'date' => $hoy,
            'citySign' => ucwords(strtolower($request['citySign'])),
            'sign' => $request['sign']
        ]);

        if($formFund)
        {
            $user->requirementUser()->update([
                'formFunds' => 1,
            ]);
        }

        if($user->requirementUser->document >= 1 && $user->requirementUser->formFunds >= 1 && $user->requirementUser->formKnowledge >= 1)
        {
            $user->requirementUser()->update([
                'verified' => 1,
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

        return Redirect::route('formFund.show', $formFund->id)->with('success', 'Formulario diligenciado y firmado correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormFund  $formFund
     * @return \Illuminate\Http\Response
     */
    public function show(FormFund $formFund)
    {
        $this->authorize('view', $formFund);
        $dataUser = Auth::user()->dataUser;
        return Inertia::render('Profile/FormFundShow',[
            'formFund' => $formFund,
            'dataUser' => $dataUser,
        ]);
    }

    public function showAdmin(FormFund $formFund)
    {
        $dataUser = User::where('id', $formFund->user_id)->with('formFund', 'dataUser')->get();
        return Inertia::render('Admin/Forms/FormFundShow',[
            'dataUser' => $dataUser,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FormFund  $formFund
     * @return \Illuminate\Http\Response
     */
    public function edit(FormFund $formFund)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FormFund  $formFund
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FormFund $formFund)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormFund  $formFund
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormFund $formFund)
    {
        //
    }
}
