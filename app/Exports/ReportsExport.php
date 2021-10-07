<?php

namespace App\Exports;

use App\Models\Report;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\FromView;
use Maatwebsite\Excel\Concerns\Exportable;

class ReportsExport implements FromView
{
    use Exportable;    

    public function transactions(Report $report)
    {
        $this->report = $report;
        $this->transactions = $report->transactions;
        
        return $this;
    }

    public function view(): View
    {
        if($this->report->report_type_id == 1)
        {
            return view('exports.reportsBuy', [
                'transactions' => $this->transactions
            ]);
        }
        elseif($this->report->report_type_id == 2)
        {
            return view('exports.reportsSell', [
                'transactions' => $this->transactions
            ]);
        }
    }
}