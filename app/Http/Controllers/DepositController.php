<?php

namespace App\Http\Controllers;

use App\Models\Bank;
use App\Models\Rate;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Broker;
use App\Models\Account;
use App\Models\Contact;
use App\Models\Deposit;
use App\Models\DollarPrice;
use App\Models\TradingAccount;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Redirect;
use App\Notifications\AdminDepositVoucher;
use App\Notifications\UserStatusChangeDeposit;
use App\Notifications\UserStatusChangeWithdrawal;

class DepositController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth', 'verified']);
        $this->middleware('user.data.completed')->only('store');
    }

    public function adminIndex()
    {        
        $deposits = Transaction::where('type', 1)->where('application_date','>=','2020-10-16 00:00:00')->with('transactionable', 'transactionable.broker', 'user')->orderBy('id', 'desc')->paginate(10);
        
        return Inertia::render('Admin/Deposits/Index', [
            'deposits' => $deposits,
        ]);
    }

    public function userIndex()
    {   
        $deposits = Transaction::where('user_id', Auth::user()->id)->where('type', 1)->with('transactionable', 'transactionable.broker')->orderBy("application_date","desc")->paginate(5);

        return Inertia::render('Deposits/Index',[
            'deposits' => $deposits,
        ]);
    }


    public function create()
    {
        $trm = getTrm();
        $exchange = $trm[0]->valor + 150;
        $accounts = Account::where('user_id', 8)->where('active', 'Activa')->get();
        $tradingAccounts = auth()->user()->tradingAccounts;
        $brokers = Broker::where('status', 1)->get();
        $dataUser = auth()->user()->dataUser;

        return Inertia::render('Deposits/Create',[            
            'exchange' => $exchange,
            'accounts' => $accounts->map(function ($account) {
                return [
                    'id' => $account->id,
                    'name' => $account->bank->name,
                ];
            }),
            'tradingAccounts' => $tradingAccounts,
            'brokers' => $brokers,
            'dataUser' => $dataUser,
        ]);
    }

    public function store(Request $request)
    {   
        $request->validate([
            'broker' => ['required', 'array:id,name,status,created_at,updated_at'],
            'tradingAccount' => ['required', 'numeric', 'integer', 'digits_between:5,12'],
            'amount_usd' => 'required|numeric|integer|min:10|max:10000',
            'account' => ['required', 'array:id,name']
        ]);

        $trm = getTrm();
        $dollar_price = $trm[0]->valor + 150;
        $amount_cop = ((int)$dollar_price*$request['amount_usd']);
        /* $comission_iva_inclu = ($amount_cop*0.015);
        $comission = $comission_iva_inclu / 1.19;
        $iva = $comission*0.19; */
        $total = $amount_cop;
        $application_date = date('Y-m-d H:i:s');
        $expiration_date = date('Y-m-d H:i:s', strtotime($application_date.'+ 1 days'));
        $tradingAccount = TradingAccount::where('number', $request['tradingAccount'])->where('broker_id', $request['broker']['id'])->first();

        if(empty($tradingAccount))
        {   
            $tradingAccount = TradingAccount::create([
                'user_id' => Auth::user()->id,
                'broker_id' => $request['broker']['id'],
                'number' => $request['tradingAccount'],
            ]);
        }
        else
        {
            if($tradingAccount->user_id != Auth::user()->id)
            {
                return Redirect::back()->with('error', 'La cuenta de trading ingresada pertenece a otro usuario, si es un error comunícate con soporte.');
            }

            if( $tradingAccount->vip == 0 )
            {
                return Redirect::back()->with('error', 'La cuenta de trading debe estár bajo nuestro referido por favor contacta con soporte.');
            }
        }

        /* if(auth()->user()->dataUser->vip == 'yes' || $tradingAccount->vip == 1)
        {
            if($request['amount_usd'] >= 500)
            {
                $rebate = $comission;
                $total = $total - $rebate;
            }
            else
            {
                $rebate = 0;
            }
        }
        else
        {
            $rebate = 0;
        }    */  
        
        $deposit = Transaction::create([
            'user_id' => Auth::user()->id,
            'account_id' => $request->account['id'],
            'transactionable_id' => $tradingAccount->id,
            'transactionable_type' => 'App\Models\TradingAccount',
            'type' => 1,
            'price' => $dollar_price,
            'amount_usd' => $request['amount_usd'],
            'amount_cop' => $amount_cop,
            'comission' => 0,
            'cuatro_por_mil' => 0,
            'iva' => 0,
            'rebate' => 0,
            'total' => $total,
            'application_date' => $application_date,
            'expiration_date' => $expiration_date
        ]); 
        
        /* if(isset($rebate_vip) && isset($comission_all))
        {
            $deposit->rebateDescription()->create([
                'rebate_comission' => $rebate_comission,
                'rebate_rate' => $rebate_rate
            ]);
        } */
        
        return Redirect::route('deposit.show', $deposit->id)->with('success', 'Solicitud de depósito realizada.');
        
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

        $deposit = $transaction;

        $cargado = $deposit->update(['voucher' => $ruta_img]);
 
        if($cargado){

            $obj = new \stdClass();
            $obj->name = Auth::user()->name;
            $obj->lastname = Auth::user()->lastname;
            $obj->deposit_id = $deposit->id;
            $obj->user_id = Auth::user()->id;
            $obj->amount_usd = $deposit->amount_usd;

            $users = User::role('Deposits')->get();

            foreach($users as $user){
                $user->notify(new AdminDepositVoucher($obj));
            }

            $voucher = asset('storage/'.$deposit->voucher);

            return Redirect::back()->with($voucher)->with('success','Comprobante cargado correctamente, tu depósito se verá reflejado en la cuenta de trading en un plazo de 10 a 20 minutos, máximo 48 horas.'); 

        }

        return Redirect::back()->with('error','El comprobante no pudo ser cargado.');  
    }

    public function show(Transaction $transaction)
    {   
        $this->authorize('view', $transaction);

        $deposit = Transaction::where('id', $transaction->id)->with('account', 'account.bank', 'transactionable', 'transactionable.Broker')->first();

        if(empty($deposit->voucher)){
            $voucher = null;
        }else{
            $voucher = asset('storage/'.$deposit->voucher);
        }

        return Inertia::render('Deposits/Show', [
            'deposit' => $deposit,
            'voucher' => $voucher,
        ]);
    }

    public function showAdmin(Transaction $transaction)
    {   
        $deposit = Transaction::where('id', $transaction->id)->with('user', 'account', 'account.bank', 'transactionable', 'transactionable.Broker')->first();

        if(empty($deposit->voucher)){
            $voucher = null;
        }else{
            $voucher = asset('storage/'.$deposit->voucher);
        }

        return Inertia::render('Admin/Deposits/Show', [
            'deposit' => $deposit,
            'voucher' => $voucher,
        ]);
    }

    public function edit(Deposit $deposit)
    {
        //
    }

    public function update(Request $request, Deposit $deposit)
    {
        dd($deposit);
    }

    public function destroy(Transaction $deposit)
    {   
        if(!empty($deposit->voucher))
        {
            Storage::delete('public/'.$deposit->voucher);
        }
        $deposit->delete();

        return Redirect::route('deposit.index')->with('success', 'Deposito eliminado correctamente.');
    }

    public function cancel(Deposit $deposit)
    {
        $deposit->update([
            'status' => 'Cancelado',
            'completed_date' => date('Y-m-d H:i:s')
        ]);

        return redirect('profile/deposits')->with('success', 'Tu solicitud de depósito ha sido cancelada.');
    }

    public function status(Request $request, Transaction $transaction)
    {
        $updating = $transaction->update([
            'status'=>$request->status['name'], 
            'comment'=>$request->comments, 
            'completed_date'=>date('Y-m-d H:i:s')
        ]);

        if($updating){

            if($request->status == 'Pendiente'){
                return Redirect::back()->with('success', 'Estado del depósito cambiado correctamente sin enviar notificación al usuario.');
            }

            $user = $transaction->user;

            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->comment = $transaction->comment;
            $obj->status = $request->status['name'];
            $obj->fbs_account = $transaction->transactionable->number;

            $user->notify(new UserStatusChangeDeposit($obj));

            return Redirect::back()->with('success', 'Estado del depósito cambiado correctamente.');
        }else{

            return Redirect::back()->with('error', 'Ocurrió un error al intentar cambiar el estado del depósito.');
        }
    }
}
