<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\Account;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;

class AccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return view('user.accountsIndex');
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
