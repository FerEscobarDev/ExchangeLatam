<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\User;
use App\Models\Notice;
use App\Models\Contact;
use App\Models\Withdrawal;
use App\Models\DollarPrice;
use Illuminate\Http\Request;
use App\Models\PendingWithdrawal;
use App\Notifications\UserWithdrawal;
use Illuminate\Support\Facades\Storage;
use App\Notifications\UserStatusChangeWithdrawal;

class WithdrawalController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $withdrawals = Withdrawal::where('application_date','>=','2020-10-16 00:00:00')->where('status', 'Pendiente')->orderBy('application_date', 'asc')->paginate(10);        
        return view('admin.withdrawals.index', compact('withdrawals'));
    }

    public function indexPendientes()
    {
        $withdrawals = Withdrawal::where('expiration_date', date('Y-m-d'))->where('status', 'Pendiente')->orderBy('application_date', 'asc')->paginate(10);        
        return view('admin.withdrawals.indexPendientes', compact('withdrawals'));
    }

    public function indexRealizados()
    {
        $withdrawals = Withdrawal::where('application_date','>=','2020-10-16 00:00:00')->where('status', 'Realizado')->orderBy('application_date', 'desc')->paginate(10);        
        return view('admin.withdrawals.indexRealizados', compact('withdrawals'));
    }

    public function withdrawalsData()
    {
        $withdrawals = Withdrawal::join('users', 'withdrawals.user_id', '=', 'users.id')
                    ->select(
                        'withdrawals.user_id',
                        'withdrawals.id', 
                        'users.name',
                        'withdrawals.fbs_account', 
                        'withdrawals.amount_usd', 
                        'withdrawals.amount_cop', 
                        'withdrawals.total', 
                        'withdrawals.expiration_date', 
                        'withdrawals.status',
                    );

        return datatables()->eloquent($withdrawals)
                            ->addColumn('buttons', function($withdrawals){
                                return '<a target="_blank" href="'.url('admin/user/'.$withdrawals->user_id.'/withdrawals').'" type="button" class="btn btn-warning">
                                <i class="fa fa-eye"></i> Ver
                            </a>';
                            })
                            ->rawColumns(['buttons'])
                            ->toJson();
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
        $fecha_tasa = date('Y-m-d', strtotime($request->application_date));
        $user = User::find($request->user_id);
        $application_date = date('Y-m-d H:i:s', strtotime($request->application_date));
        $account = $user->accounts->where('active', 'Activa')->first();
        $dollar_price = DollarPrice::where('date', $fecha_tasa)->get();
        $dollar_price = $dollar_price[0]->dollar_sell;
        $amount_cop = $request->amount_usd * $dollar_price;
        $basePrice = $amount_cop / 1.004;
        $cuatropormil = $basePrice*0.004;
        $total = $amount_cop - $cuatropormil;
        $date = Carbon::createFromDate($application_date);

        if(empty($account) || $user->verified != 2)
        {
            $withdrawal = PendingWithdrawal::create([
                'user_id' => $request->user_id,
                'fbs_account' => $request->fbs_account,
                'amount_usd' => $request->amount_usd,
                'price_usd' => $dollar_price,
                'application_date' => $application_date
            ]);
            
            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->fbs_account = $withdrawal->fbs_account;
            $obj->application_date = $date->isoFormat('dddd D [de] MMMM [del] Y');
            $obj->content = 'Para cumplir con el plazo antes mencionado es necesario resolver las siguientes novedades:';
            $obj->message = '';

            if($user->verified != 2)
            {
                $obj->message = '- Debe realizar la verificación de identidad para procesar su retiro.</br>';

                $user->notices()->create([
                    'type' => 'alert',
                    'title' => 'verify',
                    'content' => 'Estamos procesando su retiro, para poder procesar su solicitud sin retrasos por favor suba su documento de identidad para la verificación de su cuenta.'
                ]);
            }
            if(empty($account))
            {                
                $obj->message = $obj->message.'- Debe registrar una cuenta bancaria a su nombre, a la cual se hará la transferencia.</br>';

                $user->notices()->create([
                    'type' => 'alert',
                    'title' => 'account',
                    'content' => 'Estamos procesando su retiro, para poder procesar su solicitud sin retrasos por favor registre una cuenta bancaria a su nombre.'
                ]);
            }
            if($withdrawal->amount_usd < 10)
            {
                $obj->message = $obj->message.'- Su retiro es inferior al mínimo permitido, quedará en estado pendiente hasta que acumule 10 USD o solicite la devolución a su cuenta de trading.</br>';

                $user->notices()->create([
                    'type' => 'alert',
                    'title' => $withdrawal->id,
                    'content' => 'Estimado usuario, tiene un retiro pendiente por '.$withdrawal->amount_usd.' USD del '.$date->isoFormat('dddd D [de] MMMM [del] Y').', este es inferior al mínimo permitido, por lo que estará en estado pendiente hasta que acumule un mínimo de 10 USD y se pagará al precio del día en que fue aprobado o puede solicitar la devolución a su cuenta de trading por nuestro whatsapp.'
                ]);
            }
            
            
            
            $user->notify(new UserWithdrawal($obj));            

            return back()->with('success','Retiro registrado en pendientes, se ha enviado notificación al usuario');
        }
        
        if($user->vip == 'yes'){
            $rebate = $cuatropormil;
            $total = $total + $rebate;
        }else{
            $rebate = 0;
        }

        $withdrawal = Withdrawal::create([
            'user_id' => $request->user_id,
            'fbs_account' => $request->fbs_account,
            'account_id' => $account->id,
            'price' => $dollar_price,
            'amount_usd' => $request->amount_usd,
            'amount_cop' => $amount_cop,            
            'comission' => 0,
            'cuatro_por_mil' => $cuatropormil,
            'iva' => 0,
            'rebate' => $rebate,
            'total' => $total,
            'status' => $request->status,
            'application_date' => $application_date,
            'expiration_date' => $request->expiration_date,
        ]);

        if ($withdrawal->id) {
            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->fbs_account = $withdrawal->fbs_account;
            $obj->application_date = $date->isoFormat('dddd D [de] MMMM [del] Y');
            
            if($withdrawal->amount_usd < 10){
                
                $obj->content = 'Para cumplir con el plazo antes mencionado es necesario alcanzar el límite mínimo de procesamiento de 10 USD, por lo que quedará en estado pendiente hasta que acumule 10 USD o solicite la devolución a su cuenta de trading.';

                $user->notices()->create([
                    'type' => 'alert',
                    'title' => $withdrawal->id,
                    'content' => 'Estimado usuario, tiene un retiro pendiente por '.$withdrawal->amount_usd.' USD del '.$date->isoFormat('dddd D [de] MMMM [del] Y').', este es inferior al mínimo permitido, por lo que estará en estado pendiente hasta que acumule un mínimo de 10 USD y se pagará al precio del día en que fue aprobado o puede solicitar la devolución a su cuenta de trading por nuestro whatsapp.'
                ]);
                
                $user->notify(new UserWithdrawal($obj));

                return back()->with('success','Retiro registrado correctamente');
            }else{
                
                $user->notify(new UserWithdrawal($obj));

                return back()->with('success','Retiro registrado correctamente');
            }

        }else{
            return back()->with('error','Ocurrió un error al registrar el retiro');
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Models\Withdrawal  $withdrawal
     * @return \Illuminate\Http\Response
     */
    public function show(Withdrawal $withdrawal)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  \App\Models\Withdrawal  $withdrawal
     * @return \Illuminate\Http\Response
     */
    public function edit(Withdrawal $withdrawal)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Models\Withdrawal  $withdrawal
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Withdrawal $withdrawal)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Models\Withdrawal  $withdrawal
     * @return \Illuminate\Http\Response
     */
    public function destroy(Withdrawal $withdrawal)
    {   
        if(!empty($withdrawal->voucher))
        {
            Storage::delete('public/'.$withdrawal->voucher);
        }        
        $withdrawal->delete();

        return back()->with('success', 'Retiro eliminado correctamente.');
    }

    public function voucherUp(Request $request, Withdrawal $withdrawal)
    {
        $data = $request->validate([
            'voucher' => 'required|image'
        ]);        

        $ruta_img = $data['voucher']->store('retiro_support', 'public');

        $updating = $withdrawal->update(['voucher' => $ruta_img]);
 
        if($updating){

            return back()->with('success','Comprobante de retiro cargado correctamente.'); 
        }else{

            return back()->with('error','El comprobante de retiro no pudo ser cargado.');    
        }
    }

    public function status(Request $request, Withdrawal $withdrawal)
    {
        if($withdrawal->account->number != 1935)
        {    
            if($withdrawal->account->enrolled != 1 && $request->status == 'Realizado'){
                return back()->with('error', 'No puede cambiar el estado a realizado si la cuenta para el retiro no ha sido inscrita');
            }
        }
        
        $updating = $withdrawal->update([
            'status'=>$request->status, 
            'comment'=>$request->comment, 
            'completed_date'=>date('Y-m-d H:i:s')
        ]);

        if($updating){

            if($request->status == 'Pendiente'){
                return back()->with('success', 'Estado del retiro cambiado correctamente sin enviar notificación al usuario.');
            }

            $alert = Notice::where('title', $withdrawal->id)->get();
            if(!empty($alert[0]))
            {
                $alert[0]->delete();
            }

            $date = date('Y-m-d H:i:s', strtotime($withdrawal->application_date));
            $date = Carbon::createFromDate($date);

            $user = $withdrawal->user;

            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->comment = $withdrawal->comment;
            $obj->status = $request->status;
            $obj->fbs_account = $withdrawal->fbs_account;
            $obj->application_date = $date->isoFormat('dddd D [de] MMMM [del] Y');

            $user->notify(new UserStatusChangeWithdrawal($obj));

            return back()->with('success', 'Estado del retiro cambiado correctamente.');
        }else{

            return back()->with('error', 'Ocurrió un error al intentar cambiar el estado del retiro.');
        }
    }
}
