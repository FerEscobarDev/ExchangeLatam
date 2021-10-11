<?php

namespace App\Http\Controllers;

use App\Models\DollarPurchase;
use Illuminate\Http\Request;

class DollarPurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dollarPurchases = DollarPurchase::paginate(10);
        return view('admin.dollarPurchase.index', compact('dollarPurchases'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return view('admin.dollarPurchase.create');
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
            'doc_num' => ['required','numeric','integer','digits_between:6,30'],
        ]);

        return redirect()->route('admin.dollarPurchaseIndez')->with('success', 'Transacción de compra de USD registrada correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function show(DollarPurchase $dollarPurchase)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function edit(DollarPurchase $dollarPurchase)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DollarPurchase $dollarPurchase)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(DollarPurchase $dollarPurchase)
    {
        //
    }
}
