<?php

namespace App\Http\Controllers;

use App\Models\TradingAccount;
use App\Http\Requests\StoreTradingAccountRequest;
use App\Http\Requests\UpdateTradingAccountRequest;

class TradingAccountController extends Controller
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
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \App\Http\Requests\StoreTradingAccountRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreTradingAccountRequest $request)
    {
        //
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
    public function update(UpdateTradingAccountRequest $request, TradingAccount $tradingAccount)
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
