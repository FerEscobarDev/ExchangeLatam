<?php

namespace App\Http\Controllers;

use Inertia\Inertia;
use App\Models\Broker;
use App\Models\TradingAccount;
use App\Models\Wallet;
use App\Models\Transaction;
use Illuminate\Http\Request;
use App\Models\WalletAccount;
use Illuminate\Support\Facades\Auth;

class TransactionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $transactions = Transaction::where('transactionable_type', 'App\Models\WalletAccount')
                                    ->with('transactionable', 'transactionable.wallet')
                                    ->orderBy('id', 'desc')
                                    ->paginate(10);

        return Inertia::render('Admin/WalletExchange/Index', [
            'transactions' => $transactions
        ]); 
    }

    
    public function dashboard()
    {        
        /* $table = DB::table("withdrawals")
            ->select("fbs_account", "amount_usd", "amount_cop", "application_date", "status", "total", "user_id", DB::raw('IF(amount_usd > -1, "Retiro", "Retiro") as "type"'))
            ->where("user_id", "=", auth()->user()->id);

        $lastTransactions = DB::table("deposits")
            ->select("fbs_account", "amount_usd", "amount_cop", "application_date", "status", "total", "user_id", DB::raw('IF(amount_usd > -1, "Depósito", "Depósito") as "type"'))
            ->where("user_id", "=", auth()->user()->id)
            ->unionAll($table)
            ->orderBy("application_date","desc")
            ->limit(5) 
            ->get(); */
        //LAS TRANSACCIONES SE MUESTRAN PARA LOS USUARIOS POR FECHA DE SOLICITUD, PARA EFECTOS CONTABLES DEBE SER POR FECHA DE REALIZACIÓN
        $transactions = Transaction::where('user_id', Auth::user()->id)->with('transactionable')->orderBy("application_date","desc")->limit(5)->get();
        $accounts = Auth::user()->accounts;
        $requirementUser = Auth::user()->requirementUser;

        return Inertia::render('Dash/Dashboard', [
            'transactions' => $transactions,
            'accounts' => $accounts,
            'requirementUser' => $requirementUser,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
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
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
