<?php

namespace App\Http\Controllers;

use App\Models\User;
use Inertia\Inertia;
use App\Models\Wallet;
use App\Models\Account;
use App\Models\DollarBalance;
use App\Models\DollarPrice;
use App\Models\PesoBalance;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Notifications\UserRequestBuyBalance;
use App\Notifications\AdminRequestBuyBalance;
use App\Notifications\UserRequestSellBalance;
use App\Notifications\AdminRequestSellBalance;
use App\Notifications\UserStatusChangeBuyBalance;
use App\Notifications\UserStatusChangeSellBalance;

class WalletExchangeController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('user.data.completed')->only('store');
    }
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function userIndex()
    {
        $transactions = Transaction::where('user_id', Auth::user()->id)->where('transactionable_type', 'App\Models\WalletAccount')->with('transactionable', 'transactionable.wallet')->orderBy('id', 'desc')->paginate(5);    
    
        return Inertia::render('WalletExchange/Index', [
            'transactions' => $transactions,            
        ]);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function createDepositWallet()
    {
        $hoy = date('Y-m-d');
        $dollarBalance = DollarBalance::where('company_id', 3)->orderBy('id', 'desc')->first();
        $walletAccount = Auth::user()->walletAccounts;
        $accounts = Account::where('user_id', 8)->where('active', 'Activa')->get();
        $wallets = Wallet::where('status', 1)->get();
        $dataUser = auth()->user()->dataUser;
        $priceDeposit = priceBuyBalance();

        return Inertia::render('WalletExchange/CreateDepositWallet', [
            'walletAccount' => $walletAccount,       
            'exchangeRate' => $priceDeposit,
            'hoy' => $hoy,
            'accounts' => $accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'name' => $account->bank->name,
                ];
            }),
            'wallets' => $wallets,
            'dataUser' => $dataUser,
            'dollarBalance' => $dollarBalance,
        ]);
    }

    public function createWithdrawalWallet()
    {
        $hoy = date('Y-m-d');
        $walletAccount = Auth::user()->walletAccounts;
        $account = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->with('user', 'user.dataUser', 'bank')->get();
        $wallets = Wallet::where('status', 1)->get();
        $dataUser = auth()->user()->dataUser;
        $priceWithdrawal = priceSellBalance();

        return Inertia::render('WalletExchange/CreateWithdrawalWallet', [
            'walletAccount' => $walletAccount,
            'hoy' => $hoy,
            'account' => $account,
            'wallets' => $wallets,
            'data_user' => $dataUser,
            'exchangeRate' => $priceWithdrawal,
        ]);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function storeDepositWallet(Request $request)
    {
        $request->validate([
            'amount_usd' => ['required', 'numeric', 'min:10', 'max:2500'],
            'wallet' => ['required'],
            'account' => ['required'],
        ]);

        $walletAccount = Auth::user()->walletAccounts->where('wallet_id', $request['wallet']['id']);

        if(empty($walletAccount[0])){
            return Redirect::back()->with('error', 'Debes registrar tu cuenta de skrill para continuar con la solicitud');
        }

        $dollarPrice = priceBuyBalance();
        $rebate = 0;
        $amount_usd = $request['amount_usd'];
        $amount_cop = $amount_usd * $dollarPrice;
        $dollarBalance = DollarBalance::where('company_id', 3)->orderBy('id', 'desc')->first();
        $user = Auth::user();

        if( $amount_usd > $dollarBalance->amount )
        {
            return Redirect::back()->with('error', 'En este momento sólo podemos procesar tu solicitud por '.$dollarBalance->amount.' USD');
        }

        if($walletAccount[0]->vip > 0)
        {
            if($amount_usd >= 500)
            {
                $dollarPrice -= 10;
                $rebate = $amount_usd * 10;
            }
        }

        $total = $amount_cop + $rebate; // Se suma el descuento porque ya ha sido aplicado con anterioridad

        $transaction = Transaction::create([
            'user_id' => $user->id,
            'account_id' => $request['account']['id'],
            'transactionable_id' => $walletAccount[0]->id,
            'transactionable_type' => 'App\Models\WalletAccount',
            'type' => 2,
            'price' => $dollarPrice,
            'amount_usd' => $amount_usd,
            'amount_cop' => $amount_cop,
            'comission' => 0,
            'cuatro_por_mil' => 0,
            'iva' => 0,
            'rebate' => $rebate,
            'total' => $total,
            'application_date' => date('Y-m-d H:i:s'),
            'expiration_date' => date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i:s').'+ 1 days')),
        ]);   

        $obj = new \stdClass();
        $obj->name = $user->name;
        $obj->lastname = $user->lastname;
        $obj->transaction_id = $transaction->id;
        $obj->user_id = $user->id;
        $obj->amount_usd = $transaction->amount_usd;
        $obj->wallet = $walletAccount[0]->wallet->name;

        $user->notify(new UserRequestBuyBalance($obj));         

        return Redirect::route('users.showWalletExchange', $transaction)->with('success', 'solicitud realizada correctamente, por favor realice el pago a la cuenta indicada en detalles.');
    }

    public function storeWithdrawalWallet(Request $request)
    {
        $request->validate([
            'amount_usd' => ['required', 'numeric', 'min:10', 'max:2500'],
            'wallet' => ['required'],
        ]);

        
        $user = User::find(Auth::user()->id);

        $walletAccount = $user->walletAccounts->where('wallet_id', $request['wallet']['id']);

        if(empty($walletAccount[0])){
            return Redirect::back()->with('error', 'Debes registrar tu cuenta de skrill para continuar con la solicitud');
        }

        $account = $user->accounts->where('active', 'Activa')->first();
        $dollarPrice = priceSellBalance();
        $rebate = 0;
        $copBalance = PesoBalance::orderBy('id', 'desc')->first();
        $purchasingPower = round($copBalance->amount / $dollarPrice, 2);

        if( $purchasingPower < $request['amount_usd'] )
        {
            return Redirect::back()->with('error', 'En este momento sólo podemos procesar tu solicitud por '.$purchasingPower.' USD');
        }

        if($walletAccount[0]->vip > 0)
        {
            if($request['amount_usd'] >= 500)
            {
                $dollarPrice += 10;
                $rebate = $request['amount_usd'] * 10;
            }
        }
        
        $amount_cop = $request['amount_usd'] * $dollarPrice;
        $total = $amount_cop - $rebate; // Se resta el descuento porque ya ha sido aplicado con anterioridad

        $transaction = Transaction::create([
            'user_id' => $user->id,
            'account_id' => $account->id,
            'transactionable_id' => $walletAccount[0]->id,
            'transactionable_type' => 'App\Models\WalletAccount',
            'type' => 3,
            'price' => $dollarPrice,
            'amount_usd' => $request['amount_usd'],
            'amount_cop' => $amount_cop,
            'comission' => 0,
            'cuatro_por_mil' => 0,
            'iva' => 0,
            'rebate' => $rebate,
            'total' => $total,
            'application_date' => date('Y-m-d H:i:s'),
            'expiration_date' => date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i:s').'+ 1 days')),
        ]);   

        $obj = new \stdClass();
        $obj->name = $user->name;
        $obj->lastname = $user->lastname;
        $obj->transaction_id = $transaction->id;
        $obj->user_id = $user->id;
        $obj->amount_usd = $transaction->amount_usd;
        $obj->wallet = $walletAccount[0]->wallet->name;
        $obj->account = $account->number;

        $user->notify(new UserRequestSellBalance($obj));

        $users = User::role('Deposits')->get();

        foreach($users as $user){
            $user->notify(new AdminRequestSellBalance($obj));
        }
         

        return Redirect::route('users.showWalletExchange', $transaction)->with('success', 'solicitud realizada correctamente, por favor realice el pago a la cuenta indicada en detalles.');
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show(Transaction $transaction)
    {
        $this->authorize('view', $transaction);

        $transaction = Transaction::where('id', $transaction->id)->with('account', 'account.bank', 'transactionable', 'transactionable.wallet')->first();

        if(empty($transaction->voucher)){
            $voucher = null;
        }else{
            $voucher = asset('storage/'.$transaction->voucher);
        }

        return Inertia::render('WalletExchange/Show', [
            'transaction' => $transaction,
            'voucher' => $voucher,
        ]);
    }

    public function showAdmin(Transaction $transaction)
    {
        $transaction = Transaction::where('id', $transaction->id)->with('account', 'account.bank', 'transactionable', 'transactionable.wallet', 'user')->first();

        if(empty($transaction->voucher)){
            $voucher = null;
        }else{
            $voucher = asset('storage/'.$transaction->voucher);
        }

        return Inertia::render('Admin/WalletExchange/Show', [
            'transaction' => $transaction,
            'voucher' => $voucher,
        ]);
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
    public function destroy(Transaction $transaction)
    {   
        $user_id = $transaction->user_id;
        if(!empty($transaction->voucher))
        {
            Storage::delete('public/'.$transaction->voucher);
        }        
        $transaction->delete();

        return Redirect::route('admin.userShow', $user_id)->with('success', 'Transacción eliminada.');
    }

    public function voucherUp(Request $request, Transaction $transaction)
    {
        $voucher = $request->validate([
            'voucherUp' => 'required|image'
        ]);        

        $ruta_img = $voucher['voucherUp']->store('deposit_support', 'public');

        $image = Image::make(public_path('storage/'.$ruta_img));
        $image->widen(700);/* 
        $image->rotate(-90); */
        $image->save();

        $cargado = $transaction->update(['voucher' => $ruta_img]);
 
        if($cargado){

            $user = User::find(Auth::user()->id);
            $wallet = $transaction->transactionable->name;
            $account = $transaction->account->number;

            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->transaction_id = $transaction->id;
            $obj->user_id = $user->id;
            $obj->amount_usd = $transaction->amount_usd;
            $obj->wallet = $wallet;
            $obj->account = $account;

            if($transaction->type === 2)
            {
                $users = User::role('Deposits')->get();

                foreach($users as $user){
                    $user->notify(new AdminRequestBuyBalance($obj));
                }

                $voucher = asset('storage/'.$transaction->voucher);

                return Redirect::back()->with($voucher)->with('success','Comprobante cargado correctamente, los dolares serán transferidos a tu billetera en 10 a 20 minutos o máximo 24 horas en días laborales.'); 
            }
            else if($transaction->type === 3)
            {
                $voucher = asset('storage/'.$transaction->voucher);

                return Redirect::back()->with($voucher)->with('success','Comprobante cargado correctamente.'); 
            }


        }

        return Redirect::back()->with('error','El comprobante no pudo ser cargado.');  
    }

    public function status(Request $request, Transaction $transaction)
    {
        $updating = $transaction->update([
            'status'=>$request->status['name'], 
            'comment'=>$request->comments, 
            'completed_date'=>date('Y-m-d H:i:s')
        ]);

        $dollarBalance = DollarBalance::where('company_id', 3)->orderBy('id', 'desc')->first();
        $copBalance = PesoBalance::orderBy('id', 'desc')->first();
        $user = Auth::user();

        if($updating){

            if($request->status['name'] == 'Pendiente'){
                return Redirect::back()->with('success', 'El estado de la transacción se ha cambiado a pendiente sin enviar notificación al usuario.');
            }

            $user = $transaction->user;

            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->comment = $transaction->comment;
            $obj->status = $request->status['name'];
            $obj->wallet = $transaction->transactionable->wallet->name;            
            $obj->wallet_email = $transaction->transactionable->email;
            $obj->transaction_id = $transaction->id;

            if($transaction->type === 2)
            {     
                $user->notify(new UserStatusChangeBuyBalance($obj));

                if($request->status['name'] == 'Procesando')
                {                
                    $newBalance = $dollarBalance->amount - $transaction->amount_usd;
                    $newCopBalance = $copBalance->amount + $transaction->total;

                    $NewDollarBalance = DollarBalance::create([
                        'company_id' => 3,
                        'date' => date('Y-m-d H:i:s'),
                        'amount' => $newBalance,
                        'averagePrice' => $dollarBalance->averagePrice
                    ]);  

                    $newBalanceCop = PesoBalance::create([
                        'company_id' => 1,
                        'date' => date('Y-m-d H:i:s'),
                        'amount' => $newCopBalance,
                    ]);  
                }       
                
            }
            else if($transaction->type === 3)
            {
                $user->notify(new UserStatusChangeSellBalance($obj));

                if($request->status['name'] == 'Procesando')
                {
                    $newBalance = $dollarBalance->amount + $transaction->amount_usd;                    
                    $newCopBalance = $copBalance->amount - $transaction->total;
                    $averagePrice = ($dollarBalance->amount * $dollarBalance->averagePrice) + $transaction->total;
                    $averagePrice = $averagePrice / $newBalance;

                    $NewDollarBalance = DollarBalance::create([
                        'company_id' => 3,
                        'date' => date('Y-m-d H:i:s'),
                        'amount' => $newBalance,
                        'averagePrice' => $averagePrice
                    ]);

                    $newBalanceCop = PesoBalance::create([
                        'company_id' => 1,
                        'date' => date('Y-m-d H:i:s'),
                        'amount' => $newCopBalance,
                    ]);
                }
            }

            return Redirect::back()->with('success', 'Se ha cambiado el estado de la transacción.');
        }else{

            return Redirect::back()->with('error', 'Ocurrió un error al intentar cambiar el estado.');
        }
    }
}
