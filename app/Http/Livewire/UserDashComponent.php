<?php

namespace App\Http\Livewire;

use App\Models\Deposit;
use App\Models\Notice;
use App\Models\Withdrawal;
use Illuminate\Support\Facades\DB;
use Livewire\Component;

class UserDashComponent extends Component
{
    public function render()
    {   
        $noticesAll = Notice::where('type', 'general')->get();

        $table = DB::table("withdrawals")
            ->select("fbs_account", "amount_usd", "amount_cop", "application_date", "status", "total", "user_id", DB::raw('IF(amount_usd > -1, "Retiro", "Retiro") as "type"'))
            ->where("user_id", "=", auth()->user()->id);

        $lastTransactions = DB::table("deposits")
            ->select("fbs_account", "amount_usd", "amount_cop", "application_date", "status", "total", "user_id", DB::raw('IF(amount_usd > -1, "Depósito", "Depósito") as "type"'))
            ->where("user_id", "=", auth()->user()->id)
            ->unionAll($table)
            ->orderBy("application_date","desc")
            ->limit(5) 
            ->get();

        return view('livewire.user-dash-component', compact('noticesAll', 'lastTransactions'));
    }
}
