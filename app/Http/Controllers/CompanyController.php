<?php

namespace App\Http\Controllers;

use App\Models\Faq;
use Inertia\Inertia;
use App\Models\Company;
use App\Models\Contact;
use Illuminate\Support\Str;
use Illuminate\Http\Request;
use Laravel\Jetstream\Jetstream;
use Illuminate\Support\Facades\Route;

class CompanyController extends Controller
{

    public function index()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return Inertia::render('Publics/Welcome', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'contact' => $contact
        ]);
    }

    public function about()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        return Inertia::render('Publics/About', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'contact' => $contact
        ]);
    }

    public function faq()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $faqs = Faq::all();
        return Inertia::render('Publics/Faq', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'contact' => $contact,
            'faqs' => $faqs
        ]);
    }

    public function config()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.config', compact('contact'));
    }

    public function policyData()
    {
        $policyFile = Jetstream::localizedMarkdownPath('sagrilaft.md');

        return Inertia::render('SagrilaftPolicy', [
            'policy' => Str::markdown(file_get_contents($policyFile)),
        ]);
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
