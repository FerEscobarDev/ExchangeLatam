<?php

namespace App\Http\Controllers;

use App\Models\Broker;
use App\Http\Requests\StoreBrokerRequest;
use App\Http\Requests\UpdateBrokerRequest;

class BrokerController extends Controller
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
     * @param  \App\Http\Requests\StoreBrokerRequest  $request
     * @return \Illuminate\Http\Response
     */
    public function store(StoreBrokerRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function show(Broker $broker)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function edit(Broker $broker)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \App\Http\Requests\UpdateBrokerRequest  $request
     * @param  \App\Models\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function update(UpdateBrokerRequest $request, Broker $broker)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Broker  $broker
     * @return \Illuminate\Http\Response
     */
    public function destroy(Broker $broker)
    {
        //
    }
}
