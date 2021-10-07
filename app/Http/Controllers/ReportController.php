<?php

namespace App\Http\Controllers;

use App\Exports\ReportsExport;
use App\Models\Deposit;
use App\Models\DollarPurchase;
use App\Models\Month;
use App\Models\Report;
use App\Models\ReportType;
use App\Models\Withdrawal;
use Illuminate\Http\Request;

class ReportController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $years = Report::select('year')->groupBy('year')->get();
        $reports = Report::all();

        return view('admin.reports.index', compact('reports', 'years'));
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {   
        $types = ReportType::all();
        return view('admin.reports.create', compact('types'));
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
            'reportType' => 'required|numeric|integer',
            'month' => 'required'
        ]);

        $month = date('m', strtotime($request->month));
        $month_id = Month::find($month);
        $year = date('Y', strtotime($request->month));
        $day = '01';

        if($request->month == '2020-10')
        {
            $day = '16';
        }
            

        /* if($request->month_id < 10)
        {
            $month = $request->month_id;
        }
        else
        {
            $month = $request->month_id;
        } */

        if($request->reportType == 1)
        {
            $report = Report::create([
                'report_type_id' => $request->reportType,
                'month_id' => $month_id->id,
                'year' => $year
            ]);
   
            $transactions = Withdrawal::where('status', '!=', 'Cancelado')->where('application_date', '>=', $year.'-'.$month.'-'.$day.' 00:00:00')->where('application_date', '<=', $year.'-'.$month.'-31 23:59:59')->orderBy('application_date', 'ASC')->get();

            foreach($transactions as $transaction)
            {
                $transaction->transaction()->create([
                    'report_id' => $report->id
                ]);
            }            

            $transactions = DollarPurchase::where('date', '>=', $year.'-'.$month.'-'.$day.' 00:00:00')->where('date', '<=', $year.'-'.$month.'-31 23:59:59')->orderBy('date', 'ASC')->get();

            foreach($transactions as $transaction)
            {
                $transaction->transaction()->create([
                    'report_id' => $report->id
                ]);
            }

            return redirect()->route('admin.reportShow', [$report])->with('success', 'Reporte generado correctamente.');

        }
        elseif ($request->reportType == 2) 
        {
            $report = Report::create([
                'report_type_id' => $request->reportType,
                'month_id' =>  $month_id->id,
                'year' => $year
            ]);

            $transactions = Deposit::where('status', 'Realizado')->where('completed_date', '>=', $year.'-'.$month.'-'.$day.' 00:00:00')->where('completed_date', '<=', $year.'-'.$month.'-31 23:59:59')->orderBy('completed_date', 'ASC')->get();

            foreach($transactions as $transaction)
            {
                $transaction->transaction()->create([
                    'report_id' => $report->id
                ]);
            }

            return redirect()->route('admin.reportShow', [$report])->with('success', 'Reporte generado correctamente.');

        }

        return back()->with('error', 'No se ha podido generar el reporte, por favor verifique que toda la información sea correcta.');        
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function show(Report $report)
    {
        $transactions = $report->transactions;
        return view('admin.reports.show', compact('report', 'transactions'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function edit(Report $report)
    {
        
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Report $report)
    {
        //
    }

    public function export(Report $report)
    {
        $export = new ReportsExport;
        $export->transactions($report);
        return $export->download('Reporte facturas de '.$report->reportType->name.' '.$report->month->name.' del '.$report->year.'.xlsx');
    }



    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Report  $report
     * @return \Illuminate\Http\Response
     */
    public function destroy(Report $report)
    {
        $report->delete();

        return redirect()->route('admin.reportIndex')->with('success', 'Retiro eliminado correctamente.');
    }
}
