<?php

namespace App\Http\Controllers;

use App\Models\Rate;
use App\Models\Contact;
use Illuminate\Http\Request;

class RateController extends Controller
{
    public function index()
    {
        $rates = Rate::orderBy('id', 'desc')->paginate(7);   
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $hoy = date('Y-m-d');

        return view('admin.rates', compact('rates', 'contact', 'hoy'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'date' => 'required',
            'comission_all' => 'required',
            'vip_rate' => 'required',
        ]);

        $exist = Rate::where('date', $request->date)->get();

        if(!empty($exist[0]))
        {
            if($exist[0]->date == $request->date)
            {
                return back()->with('error', 'Ya existe oferta definida para esta fecha.');
            }
        }
        Rate::create([
            'company_id' => 1,
            'comission_all' => $request->comission_all,
            'vip_rate' => $request->vip_rate,
            'date' => $request->date
        ]);

        return back()->with('success', 'Oferta para le día '.$request->date.' actualizada correctamente.');

    }

    public function update(Request $request, Rate $rate)
    {
        $request->validate([
            'date' => 'required',
            'comission_all' => 'required',
            'vip_rate' => 'required',
        ]);

        $hoy = date('Y-m-d');

        $exist = Rate::where('date', $request->date)->get();

        if(!empty($exist[0]))
        {
            if($request->date <= $hoy || $exist[0]->date <= $hoy)
            {
                return back()->with('error', 'No es posible cambiar los datos de la oferta para una fecha pasada o en curso.');
            }
        }
        $rate->update([
            'comission_all' => $request->comission_all,
            'vip_rate' => $request->vip_rate,
            'date' => $request->date
        ]);

        return back()->with('success', 'Oferta para le día '.$request->date.' actualizada correctamente.');
    }

    public function destroy(Rate $rate)
    {   
        $hoy = date('Y-m-d');
        $date = $rate->date;
        
        if($rate->date <= $hoy)
        {
            return back()->with('error', 'No es posible eliminar la oferta seleccionada, corresponde a una fecha pasada o que está en curso.');
        }

        $rate->delete();

        return back()->with('success', 'Oferta para le día '.$date.' eliminada correctamente.');
    }

}
