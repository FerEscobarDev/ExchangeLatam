<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Bank;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Redirect;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $account = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->with('user.dataUser', 'bank')->first();
        
        return Inertia::render('Accounts/Index',[
            'account' => $account,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Accounts/Create',[   
            'banks' => Bank::all(),
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
            'number' => 'required|unique:accounts,number|numeric|digits_between:9,14',
            'bank_id' => 'required|numeric|integer|digits_between:1,2',
            'type' => 'required|string'
        ]);

        $newaccount = Account::create([
            'user_id' => $request->user_id,
            'bank_id' => $data['bank_id'],
            'number' => $data['number'],
            'type' => $data['type'],
            'active' => 'Activa'
        ]);

        $accounts = Account::where('user_id', $request->user_id)->where('active', 'Activa')->get();

        foreach( $accounts as $account ){
            if( $account->id != $newaccount->id ){
                $account->update([
                    'active' => 'Inactiva'
                ]);
            }
        }
        
        return back()->with('success', 'La cuenta del cliente ha sido registrada correctamente.');
    }

    public function storeUser(Request $request)
    {
        $data = $request->validate([
            'number' => 'required|unique:accounts,number|numeric|digits_between:9,16',
            'bank' => 'required|array:id,name,created_at,updated_at',
            'type' => 'required|array:id,name'
        ]);

        $update_auth = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->orderBy('id' , 'desc')->select('updated_at')->get();

        if(count($update_auth) > 0)
        {
            $date_auth = date('Y-m-d H:i:s', strtotime($update_auth[0]->updated_at.'+ 6 months'));
        }        

        if(isset($date_auth) && date('Y-m-d H:i:s') < $date_auth){

            $date = Carbon::createFromDate($date_auth);

            return Redirect::route('accounts.create.user')->with('error', 'La cuenta puede ser cambiada cada 6 meses, puedes hacerlo el '.$date->isoFormat('dddd D [de] MMMM [del] Y'));

        }else{

            $newaccount = Account::create([
                'user_id' => Auth::user()->id,
                'bank_id' => $data['bank']['id'],
                'number' => $data['number'],
                'type' => $data['type']['name'],
                'active' => 'Activa'
            ]);            

            $accounts = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->get();

            foreach( $accounts as $account ){
                if( $account->id != $newaccount->id ){
                    $account->update([
                        'active' => 'Inactiva'
                    ]);
                }
            }

            if(!empty(Auth::user()->notices))
            {
                foreach(Auth::user()->notices as $notice)
                {
                    if($notice->title == 'account')
                    {
                        $notice->delete();
                    }
                }
            }
            
            return Redirect::route('accounts.index.user')->with('success', 'Cuenta bancaria registrada para retiros.');

        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function show(Account $account)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function edit(Account $account)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Account $account)
    {
        $data = $request->validate([
            'number' => ['required',Rule::unique('accounts','number')->ignore($account->id),'numeric','digits_between:9,16'], //Ignora sólo la cuenta que está siendo actualizada
            'bank_id' => 'required|numeric|integer|digits_between:1,2',
            'type' => 'required|string'
        ]);

        $account->update([
            'bank_id' => $data['bank_id'], 
            'number' => $data['number'],
            'type' => $data['type'],
            'active' => $request->active
        ]);

        if($request->active == 'Activa'){

            $accounts = Account::where('user_id', $account->user_id)->where('active', 'Activa')->get();

            foreach( $accounts as $accountb ){
                if( $accountb->id != $account->id ){
                    $accountb->update([
                        'active' => 'Inactiva'
                    ]);
                }
            }
        }

        return back()->with('success', 'La cuenta del cliente ha sido actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Account  $account
     * @return \Illuminate\Http\Response
     */
    public function destroy(Account $account)
    {
        //
    }

    public function enrolled(Account $account)
    {
        $account->update([
            'enrolled'=>'1', 
            'updated_at'=>$account->updated_at
        ]);

        return back()->with('success', 'La cuenta del cliente ha sido inscrita correctamente.');
    }
}
