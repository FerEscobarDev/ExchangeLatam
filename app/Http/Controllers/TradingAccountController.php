<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use Illuminate\Http\Request;
use App\Models\TradingAccount;
use Illuminate\Support\Facades\Redirect;

class TradingAccountController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(User $user)
    {   
        $tradingAccounts = TradingAccount::where('user_id', $user->id)->with('user')->orderBy('id', 'desc')->paginate(5);

        return Inertia::render('Admin/TradingAccounts/Index', [
            'tradingAccounts' => $tradingAccounts,
            'client' => $user
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create(User $user)
    {
    
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTradingAccountRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $request->validate([
            'number' => ['required', 'numeric', 'unique:trading_accounts,number'],
            'vip' => ['required', 'numeric'],
        ]);

        TradingAccount::create($request->all());

        return Redirect::back()->with('success', 'Se registró la cuenta correctamente');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\TradingAccount  $tradingAccount
     * @return \Illuminate\Http\Response
     */
    public function show(TradingAccount $tradingAccount)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\TradingAccount  $tradingAccount
     * @return \Illuminate\Http\Response
     */
    public function edit(TradingAccount $tradingAccount)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateTradingAccountRequest  $request
     * @param  \App\Models\TradingAccount  $tradingAccount
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, TradingAccount $tradingAccount)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\TradingAccount  $tradingAccount
     * @return \Illuminate\Http\Response
     */
    public function destroy(TradingAccount $tradingAccount)
    {
        //
    }
}
