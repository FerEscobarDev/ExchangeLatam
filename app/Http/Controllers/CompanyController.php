<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Contact;
use App\Models\Faq;
use Illuminate\Http\Request;

class CompanyController extends Controller
{

    public function index()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return view('public.index', compact('contact'));
    }

    public function about()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return view('public.about', compact('contact'));
    }

    public function faq()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $faqs = Faq::all();
        return view('public.faq', compact('contact', 'faqs'));
    }

    public function config()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.config', compact('contact'));
    }

    public function policy()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return view('public.policy', compact('contact'));
    }
    
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function show(Company $company)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function edit(Company $company)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Company $company)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Company  $company
     * @return \Illuminate\Http\Response
     */
    public function destroy(Company $company)
    {
        //
    }
}
