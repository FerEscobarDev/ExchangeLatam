<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use App\Models\FormKnowledgeClient;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use App\Notifications\AdminVerification;
use Illuminate\Support\Facades\Redirect;

class FormKnowledgeClientController extends Controller
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
        return Inertia::render('Profile/FormClient',[
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
            'citySign' => ['required', 'string', 'max:30'],
            'expeditionDate' => ['required', 'date'],
            'expeditionPlace' => ['required', 'string', 'max:30'],
            'birthDate' => ['required', 'date'],
            'birthPlace' => ['required', 'string', 'max:30'],
            'nationality' => ['required', 'string', 'max:30'],
            'countries' => [Rule::requiredIf($request['tributeCountry']), 'nullable', 'string', 'min:6', 'max:200'],
            'income' => ['required', 'integer'],
            'expenses' => ['required', 'integer'],
            'assets' => ['required', 'integer'],
            'liabilities' => ['required', 'integer'],
            'heritage' => ['required', 'integer'],
            'incomeOther' => ['nullable', 'integer'],
            'descriptionIncome' => [Rule::requiredIf(!empty($request['incomeOther']) || ($request['incomeOther'] != 0)), 'nullable', 'string', 'min:6', 'max:200'],
            'auth_1' => ['required', 'accepted'],
            'auth_2' => ['required', 'accepted'],
            'sign' => ['required', 'accepted'],
        ]);

        $hoy = date('Y-m-d');

        $user = Auth::user();

        $user->dataUser()->update([
            'expeditionDate' => $request['expeditionDate'],
            'expeditionPlace' => ucwords(strtolower($request['expeditionPlace'])),
            'birthDate' => $request['birthDate'],
            'birthPlace' => ucwords(strtolower($request['birthPlace'])),
            'nationality' => ucwords(strtolower($request['nationality']))
        ]);

        $formKnowledgeClient = $user->formKnowledgeClient()->create([
            'date' => $hoy,
            'citySign' => ucwords(strtolower($request['citySign'])),
            'pep' => $request['pep'],
            'publicFunds' => $request['publicFunds'],
            'tributeCountry' => $request['tributeCountry'],
            'countries' => $request['countries'],
            'transactionsForeignMoney' => $request['transactionsForeignMoney'],
            'productsFinancialExt' => $request['productsFinancialExt'],
            'accountsForeignMoney' => $request['accountsForeignMoney'],
            'auth_1' => $request['auth_1'],
            'auth_2' => $request['auth_2'],
            'sign' => $request['sign']
        ]);

        $user->financialDatauser()->create([
            'income' => $request['income'],
            'expenses' => $request['expenses'],
            'assets' => $request['assets'],
            'liabilities' => $request['liabilities'],
            'heritage' => $request['heritage'],
            'incomeOther' => $request['incomeOther'],
            'descriptionIncome' => $request['descriptionIncome']
        ]);

        if($formKnowledgeClient){
            $user->requirementUser()->update([
                'formKnowledge' => 1,
            ]);
        }

        if(($user->requirementUser->verified == 1 || $user->requirementUser->verified == 2) && $user->requirementUser->formFunds == 1 && $user->requirementUser->formKnowledge == 1)
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

        return Redirect::route('formKnowledgeClient.show', $formKnowledgeClient->id)->with('success', 'Formulario diligenciado y firmado correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\FormKnowledgeClient  $formKnowledgeClient
     * @return \Illuminate\Http\Response
     */
    public function show(FormKnowledgeClient $formKnowledgeClient)
    {
        $this->authorize('view', $formKnowledgeClient);
        $dataUser = Auth::user()->dataUser;
        $financialDataUser = Auth::user()->financialDataUser;
        return Inertia::render('Profile/FormClientShow',[
            'formKnowledgeClient' => $formKnowledgeClient,
            'dataUser' => $dataUser,
            'financialDataUser' => $financialDataUser
        ]);
    }

    public function showAdmin(FormKnowledgeClient $formKnowledgeClient)
    {
        $dataUser = User::where('id',$formKnowledgeClient->user_id)->with('formKnowledgeClient','financialDataUser', 'dataUser')->get();

        return Inertia::render('Admin/Verifications/FormClientShow',[
            'dataUser' => $dataUser,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\FormKnowledgeClient  $formKnowledgeClient
     * @return \Illuminate\Http\Response
     */
    public function edit(FormKnowledgeClient $formKnowledgeClient)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\FormKnowledgeClient  $formKnowledgeClient
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, FormKnowledgeClient $formKnowledgeClient)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\FormKnowledgeClient  $formKnowledgeClient
     * @return \Illuminate\Http\Response
     */
    public function destroy(FormKnowledgeClient $formKnowledgeClient)
    {
    }

}
