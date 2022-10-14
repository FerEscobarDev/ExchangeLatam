<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Contact;
use App\Models\DollarPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Redirect;

class DollarPriceController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $dollarPrices = DollarPrice::orderBy('id', 'desc')->paginate(10);
        //$hoy = date('Y-m-d');

        return Inertia::render('Admin/DollarPrice/Index', [
            'dollarPrices' => $dollarPrices,
        ]);

        //return view('admin.dollarPriceIndex', compact('dollarPrices', 'contact', 'hoy'));
    }

    public function indexPublic(){
        $dollarPrices = DollarPrice::orderBy('id', 'desc')->paginate(7);
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('public.pricesDollar', compact('dollarPrices', 'contact'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        return Inertia::render('Admin/DollarPrice/Create');
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
            'date' => 'required',
            'dollar_buy' => 'required',
            'dollar_sell' => 'required',
        ]);

        $exist = DollarPrice::where('date', $request->date)->get();

        if(!empty($exist[0]))
        {
            if($exist[0]->date == $request->date)
            {
                return Redirect::back()->with('error', 'Ya existe un precio del dolar definido para esta fecha.');
            }
        }
        DollarPrice::create($request->all());

        return Redirect::route('admin.dollarPriceIndex')->with('success', 'El precio del dolar para el día '.$request->date.' se ha registrado correctamente.');

    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\DollarPrice  $dollarPrice
     * @return \Illuminate\Http\Response
     */
    public function show(DollarPrice $dollarPrice)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\DollarPrice  $dollarPrice
     * @return \Illuminate\Http\Response
     */
    public function edit(DollarPrice $dollarPrice)
    {
        return Inertia::render('Admin/DollarPrice/Edit', [
            'dollarPrice' => $dollarPrice,
        ]);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\DollarPrice  $dollarPrice
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, DollarPrice $dollarPrice)
    {
        $request->validate([
            'date' => 'required',
            'dollar_buy' => 'required',
            'dollar_sell' => 'required',
        ]);

        $hoy = date('Y-m-d');

        $exist = DollarPrice::where('date', $request->date)->get();

        if(!empty($exist[0]))
        {
            if($request->date <= $hoy || $exist[0]->date <= $hoy)
            {
                return Redirect::back()->with('error', 'No es posible cambiar los datos del precio para una fecha pasada o en curso.');
            }
        }
        
        $dollarPrice->update($request->all());

        return Redirect::route('admin.dollarPriceIndex')->with('success', 'El precio del dolar para el día '.$request->date.' se ha actualizado correctamente.');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\DollarPrice  $dollarPrice
     * @return \Illuminate\Http\Response
     */
    public function destroy(DollarPrice $dollarPrice)
    {   
        $hoy = date('Y-m-d');
        $date = $dollarPrice->date;
        
        if($dollarPrice->date <= $hoy)
        {
            return Redirect::back()->with('error', 'No es posible eliminar el precio seleccionado, corresponde a una fecha pasada o que está en curso.');
        }

        $dollarPrice->delete();

        return Redirect::back()->with('success', 'El precio del dolar para el día '.$date.' se ha eliminado correctamente.');
    }
}
