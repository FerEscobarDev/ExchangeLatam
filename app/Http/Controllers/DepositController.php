<?php

namespace App\Http\Controllers;

use App\Models\Rate;
use App\Models\User;
use App\Models\Contact;
use App\Models\Deposit;
use App\Models\DollarPrice;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Intervention\Image\Facades\Image;
use Illuminate\Support\Facades\Storage;
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

    public function index()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.deposits', compact('contact'));
    }

    public function depositsData()
    {
        $deposits = Deposit::join('users', 'deposits.user_id', '=', 'users.id')
                    ->select(
                        'deposits.user_id',
                        'deposits.id', 
                        'users.name',
                        'deposits.fbs_account', 
                        'deposits.amount_usd', 
                        'deposits.amount_cop', 
                        'deposits.total',
                        'deposits.application_date', 
                        'deposits.status',
                    );

        return datatables()->eloquent($deposits)
                            ->addColumn('buttons', function($deposits){
                                return '<a target="_blank" href="'.url('admin/user/'.$deposits->user_id.'/deposits').'" type="button" class="btn btn-warning">
                                <i class="fa fa-eye"></i> Ver
                            </a>';
                            })
                            ->rawColumns(['buttons'])
                            ->toJson();
    }

    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'fbs_account' => 'required|numeric|integer|digits_between:5,12',
            'amount_usd' => 'required|numeric|integer|min:10|max:10000',
            'account' => 'required|numeric'
        ]);

        $hoy = date('Y-m-d');
        $dollar_price = DollarPrice::where('date', $hoy)->get();
        $dollar_price = $dollar_price[0]->dollar_buy;
        $amount_cop = ((int)$dollar_price*$data['amount_usd']);
        $comission_iva_inclu = ($amount_cop*0.015);
        $comission = $comission_iva_inclu / 1.19;
        $iva = $comission*0.19;
        $total = $amount_cop+$comission+$iva;
        $application_date = date('Y-m-d H:i:s');
        $expiration_date = date('Y-m-d H:i:s', strtotime($application_date.'+ 1 days'));
        $rate = Rate::where('date', $hoy)->get();
        $rebate_rate = 0;

        if(empty($rate[0]))
        {
            if(auth()->user()->vip == 'yes')
            {
                if($data['amount_usd'] >= 500)
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
            } 
        }
        else
        { 
            $rebate_vip = $rate[0]->vip_rate;
            $comission_all = $rate[0]->comission_all;

            if(auth()->user()->vip == 'yes')
            {
                $rebate_rate = $amount_cop - (($dollar_price - $rebate_vip)*$data['amount_usd']);
            }
            else
            {
                $rebate_rate = 0;
            }

            $rebate_comission = $comission - ((((int)$comission_all/100)*$amount_cop)/1.19);
            $rebate = $rebate_comission + $rebate_rate;

            $total = $total - $rebate;
        }        
        
        $deposit = auth()->user()->deposits()->create([
            'fbs_account' => $data['fbs_account'],
            'account_id' => $data['account'],
            'price' => $dollar_price,
            'amount_usd' => $data['amount_usd'],
            'amount_cop' => $amount_cop,
            'comission' => $comission,
            'cuatro_por_mil' => 0,
            'iva' => $iva,
            'rebate' => $rebate,
            'total' => $total,
            'application_date' => $application_date,
            'expiration_date' => $expiration_date
        ]); 
        
        if(isset($rebate_vip) && isset($comission_all))
        {
            $deposit->rebateDescription()->create([
                'rebate_comission' => $rebate_comission,
                'rebate_rate' => $rebate_rate
            ]);
        }
        
        return redirect('profile/deposits')->with('info', $deposit)->with('success', 'Depósito solicitado correctamente.');
        
    }

    public function voucherUp(Request $request, Deposit $deposit)
    {
        $voucher = $request->validate([
            'voucher' => 'required|image'
        ]);        

        $ruta_img = $voucher['voucher']->store('deposit_support', 'public');

        /* $image = Image::make(public_path('storage/'.$ruta_img));
        $image->widen(700);
        $image->rotate(-90);
        $image->save(); */

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

            return redirect('profile/deposits')->with('success','Comprobante cargado correctamente, su depósito se verá reflejado en un plazo de 10 a 20 minutos, máximo 48 horas.'); 

        }

        return redirect('profile/deposits')->with('error','El comprobante no pudo ser cargado.');  
    }

    public function show(Deposit $deposit)
    {
        //
    }

    public function edit(Deposit $deposit)
    {
        //
    }

    public function update(Request $request, Deposit $deposit)
    {
        dd($deposit);
    }

    public function destroy(Deposit $deposit)
    {   
        if(!empty($deposit->voucher))
        {
            Storage::delete('public/'.$deposit->voucher);
        }
        $deposit->delete();

        return back()->with('success', 'Deposito eliminado correctamente.');
    }

    public function cancel(Deposit $deposit)
    {
        $deposit->update([
            'status' => 'Cancelado',
            'completed_date' => date('Y-m-d H:i:s')
        ]);

        return redirect('profile/deposits')->with('success', 'Depósito cancelado exitosamente.');
    }

    public function status(Request $request, Deposit $deposit)
    {
        $updating = $deposit->update([
            'status'=>$request->status, 
            'comment'=>$request->comments, 
            'completed_date'=>date('Y-m-d H:i:s')
        ]);

        if($updating){

            if($request->status == 'Pendiente'){
                return back()->with('success', 'Estado del depósito cambiado correctamente sin enviar notificación al usuario.');
            }

            $user = $deposit->user;

            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;
            $obj->comment = $deposit->comment;
            $obj->status = $request->status;
            $obj->fbs_account = $deposit->fbs_account;

            $user->notify(new UserStatusChangeDeposit($obj));

            return back()->with('success', 'Estado del depósito cambiado correctamente.');
        }else{

            return back()->with('error', 'Ocurrió un error al intentar cambiar el estado del depósito.');
        }
    }
}
