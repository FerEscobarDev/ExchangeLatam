<?php

namespace App\Http\Controllers;

use App\Models\DollarPurchase;
use App\Models\User;
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
            'type' => ['required','string','max:30'],/* 
            'price_usd' => ['numeric','integer'], */
            'amount_usd' => ['required','numeric','integer'],
            'amount_cop' => ['required','numeric','integer'],
            'cuatro_por_mil' => ['required','numeric','integer'],
            'voucher' => ['required','image'],
            'date' => ['required','date']
        ]);

        //Se añade el 4x1000 pero no se debe tener en cuenta para reporte y contabilidad

        $user = User::where('doc_num', $request->doc_num)->get();
        $account = $user->accounts->where('active', 'Activa')->first();
        $price_usd = $request->amount_cop / $request->amount_usd;
        $total = $request->amount_cop + $request->cuatro_por_mil;

        $transaction = DollarPurchase::create([
            'user_id' => $user->id,
            'account_id' => $account->id,
            'type' => $request->type,
            'price_usd' => $price_usd,
            'amount_usd' => $request->amount_usd,
            'amount_cop' => $request->amount_cop,
            'iva' => 0,
            'cuatro_por_mil' => $request->cuatro_por_mil,
            'total' => $total
        ]);

        return redirect()->route('admin.dollarPurchaseIndez')->with('success', 'Transacción de '.$request->type.' registrada correctamente.');
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
