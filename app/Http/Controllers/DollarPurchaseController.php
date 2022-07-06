<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Models\DataUser;
use Illuminate\Http\Request;
use App\Models\DollarPurchase;
use Illuminate\Support\Facades\Storage;

class DollarPurchaseController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dollarPurchases = DollarPurchase::orderBy('date', 'desc')->paginate(10);
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
            'doc_num' => ['required','numeric','integer','digits_between:6,30', 'exists:App\Models\DataUser,doc_num'],
            'type_transaction' => ['required','string','max:30'],/* 
            'price_usd' => ['numeric','integer'], */
            'amount_usd' => ['required','numeric'],
            'amount_cop' => ['required','numeric'],
            'cuatro_por_mil' => ['required','numeric'],
            'voucher' => ['image'],
            'date' => ['required','date']
        ]);

        //Se añade el 4x1000 pero no se debe tener en cuenta para reporte y contabilidad

        $dataUser = DataUser::where('doc_num', $request->doc_num)->get();
        $user = User::find($dataUser[0]->user_id);
        $account = $user->accounts->where('active', 'Activa')->first();
        $price_usd = $request->amount_cop / $request->amount_usd;
        $total = $request->amount_cop;

        $transaction = DollarPurchase::create([
            'user_id' => $user->id,
            'account_id' => $account->id,
            'type' => $request->type_transaction,
            'price_usd' => $price_usd,
            'amount_usd' => $request->amount_usd,
            'amount_cop' => $request->amount_cop,
            'iva' => 0,
            'cuatro_por_mil' => $request->cuatro_por_mil,
            'total' => $total,
            'date' => $request->date,
        ]);

        if(!empty($request->voucher))
        {
            $ruta_img = $request->voucher->store('compra_usd_support', 'public');
            $transaction->update([                
                'voucher' => $ruta_img
            ]);
        }

        return redirect()->route('admin.dollarPurchaseShow', $transaction)->with('success', 'Transacción de '.$request->type_transaction.' registrada correctamente.');
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function show(DollarPurchase $dollarPurchase)
    {
        return view('admin.dollarPurchase.show', compact('dollarPurchase'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function edit(DollarPurchase $dollarPurchase)
    {
        return view('admin.dollarPurchase.edit', compact('dollarPurchase'));
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
        if(isset($request->voucherUp))
        {
            $request->validate([
                'voucher' => ['required', 'image']
            ]);

            if(!empty($dollarPurchase->voucher))
            {
                Storage::delete('public/'.$dollarPurchase->voucher);
            }

            $ruta_img = $request->voucher->store('compra_usd_support', 'public');
            $dollarPurchase->update([                
                'voucher' => $ruta_img
            ]);

            return redirect()->route('admin.dollarPurchaseShow', $dollarPurchase)->with('success', 'Comprobante cargado.');
        }

        $request->validate([
            'doc_num' => ['required','numeric','integer','digits_between:6,30', 'exists:App\Models\DataUser,doc_num'],
            'type_transaction' => ['required','string','max:30'],/* 
            'price_usd' => ['numeric','integer'], */
            'amount_usd' => ['required','numeric'],
            'amount_cop' => ['required','numeric'],
            'cuatro_por_mil' => ['required','numeric'],
            'voucher' => ['image'],
            'date' => ['required','date']
        ]);

        //Se añade el 4x1000 pero no se debe tener en cuenta para reporte y contabilidad

        $dataUser = DataUser::where('doc_num', $request->doc_num)->get();
        $user = User::find($dataUser[0]->user_id);
        $account = $user->accounts->where('active', 'Activa')->first();
        $price_usd = $request->amount_cop / $request->amount_usd;
        $total = $request->amount_cop;

        $dollarPurchase->update([
            'user_id' => $user->id,
            'account_id' => $account->id,
            'type' => $request->type_transaction,
            'price_usd' => $price_usd,
            'amount_usd' => $request->amount_usd,
            'amount_cop' => $request->amount_cop,
            'iva' => 0,
            'cuatro_por_mil' => $request->cuatro_por_mil,
            'total' => $total,
            'date' => $request->date,
        ]);

        if(!empty($request->voucher))
        {
            if(!empty($dollarPurchase->voucher))
            {
                Storage::delete('public/'.$dollarPurchase->voucher);
            }

            $ruta_img = $request->voucher->store('compra_usd_support', 'public');
            $dollarPurchase->update([                
                'voucher' => $ruta_img
            ]);
        }

        return redirect()->route('admin.dollarPurchaseShow', $dollarPurchase)->with('success', 'Transacción de '.$dollarPurchase->type.' actualizada correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DollarPurchase  $dollarPurchase
     * @return \Illuminate\Http\Response
     */
    public function destroy(DollarPurchase $dollarPurchase)
    {
        $dollarPurchase->delete();

        return redirect()->route('admin.dollarPurchaseIndex')->with('success', 'Transacción eliminada correctamente.');
    }
}
