<?php

namespace App\Http\Controllers;

use App\Models\Contact;
use Illuminate\Http\Request;

class CampaignController extends Controller
{
    public function pautaVip()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return view('campaigns.pautaVip', compact('contact'));
    }

    public function sorteoAniversario()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return view('campaigns.sorteoAniversario', compact('contact'));
    }
}
