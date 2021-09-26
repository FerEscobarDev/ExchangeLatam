<?php

namespace App\Http\Controllers;

use datatables;
use Carbon\Carbon;
use App\Models\Bank;
use App\Models\City;
use App\Models\Rate;
use App\Models\User;
use App\Models\Notice;
use App\Models\Account;
use App\Models\Contact;
use App\Models\Deposit;
use App\Models\Withdrawal;
use App\Notifications\Vip;
use App\Models\Departament;
use App\Models\DollarPrice;
use App\Mail\contactMessage;
use App\Models\Verification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Intervention\Image\Facades\Image;
use App\Notifications\UserVerification;
use Illuminate\Support\Facades\Storage;
use App\Notifications\AdminVerification;

class UserController extends Controller
{
    public function __construct()
    {
        $this->middleware(['auth']);
    }

    public function index()
    {
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.users', compact('contact'));
    }

    public function usersData()
    {
        return datatables()
                ->eloquent(User::query())                
                ->editColumn('name', function($user){
                    return '<a target="_blank" href="'.url('admin/user/'.$user['id'].'/deposits').'">'.$user['name'].'</a>';
                })                
                ->editColumn('lastname', function($user){
                    return '<a target="_blank" href="'.url('admin/user/'.$user['id'].'/deposits').'">'.$user['lastname'].'</a>';
                })
                ->rawColumns(['name', 'lastname'])
                ->toJson();
    }

    public function admin()
    {
        //Se edita la clase Illuminate\Notifications\Notifiable del modelo Users

        return view('admin.notifications.index');
    }

    public function deposits()
    {   
        $hoy = date('Y-m-d');
        $priceUsdDeposit = DollarPrice::where('date', $hoy)->get();
        $accounts = Account::where('user_id', 8)->where('active', 'Activa')->get();
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $deposits = Deposit::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->paginate(5);
        $rate = Rate::where('date', $hoy)->get();
        if(empty($rate[0]))
        {
            $rate = false;
        }

        return view('users.deposits', compact('contact', 'noticesAll', 'noticeModal', 'accounts', 'priceUsdDeposit', 'deposits', 'rate'));
    }

    public function withdrawals()
    {   
        $hoy = date('Y-m-d');
        $priceUsdWithdrawal = DollarPrice::where('date', $hoy)->get();
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $withdrawals = Withdrawal::where('user_id', Auth::user()->id)->orderBy('id', 'desc')->paginate(5);

        return view('users.withdrawals', compact('contact', 'noticesAll', 'noticeModal', 'priceUsdWithdrawal', 'withdrawals'));
    }

    public function picture(Request $request)
    {
        $picture = $request->validate([
            'picture' => 'required|image'
        ]);

        $ruta_img = $picture['picture']->store('img_profile', 'public');

       /*  $img = Image::make(public_path('storage/'.$ruta_img))->fit(400,400);
        $img->save(); */
        
        if(!empty(Auth::user()->picture))
        {
            Storage::delete('public/'.Auth::user()->picture);
        }

        Auth::user()->update([
            'picture' => $ruta_img
        ]);

        return redirect('profile/deposits')->with('success', 'Foto de perfil subida correctamente');
    }

    public function contact()
    {   
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();
  
        return view('users.contact', compact('noticeModal', 'noticesAll', 'contact'));
    }

    public function contactMessage(Request $request)
    {
        $data = $request->validate([
            'subject' => 'required|string|max:50',
            'message' => 'required|string|max:300'
        ]);

        $data['from'] = Auth::user()->email;
        $data['name'] = Auth::user()->name;
        $data['lastname'] = Auth::user()->lastname;
        $data['user_id'] = Auth::user()->id;

        $email = $data;

        Mail::to('support@exchangelatam.com')->send(new contactMessage($email));

        return redirect('profile/contact')->with('success', 'Mensaje enviado a soporte correctamente.');
    }

    public function edit()
    {   
        $departaments = Departament::all();
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('users.edit', compact('noticeModal', 'noticesAll', 'contact', 'departaments'));
    }

    public function updateProfile(Request $request)
    {  
        $data = $request->validate([
            'doc_type' => 'required|string|max:22',
            'doc_num' => ['required',Rule::unique('users','doc_num')->ignore(Auth::user()->id),'numeric','integer','digits_between:6,30'],
            'mobil' => ['required',Rule::unique('users')->ignore(Auth::user()->id),'numeric','integer','digits:10'],
            'departament' => 'required|numeric|integer|digits_between:1,2',
            'city' => 'required|numeric|integer|digits_between:1,4',
            'address' => 'required|max:190',
        ]);

        $departament = Departament::select('name')->where('id', $data['departament'])->get();
        $city = City::select('name')->where('id', $data['city'])->get();

        Auth::user()->update([
            'doc_type' => $data['doc_type'],
            'doc_num' => $data['doc_num'],
            'mobil' => $data['mobil'],
            'departament' => $departament[0]->name,
            'city' => ucwords($city[0]->name),
            'address' => $data['address'],
            'info_ok' => 1
        ]);

        return redirect('profile/edit')->with('success', 'Datos actualizados correctamente.');
    }

    public function changePassword()
    {
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('authOld.passwordUpdate', compact('noticeModal', 'noticesAll', 'contact'));
    }

    public function verification(Request $request)
    {
        $data = $request->validate([
            'front' => 'required|image',
            'back' => 'required|image'
        ]);

        $route_front = $data['front']->store('verified_support', 'public');
        $route_back = $data['back']->store('verified_support', 'public');

        Verification::create([
            'user_id' => Auth::user()->id,
            'front' => $route_front,
            'back' => $route_back
        ]);

        Auth::user()->update([
            'verified' => 1
        ]);

        $obj = new \stdClass();
        $obj->name = Auth::user()->name;
        $obj->lastname = Auth::user()->lastname;
        $obj->user_id = Auth::user()->id;

        $users = User::role('Verification')->get();

        foreach($users as $user){
            $user->notify(new AdminVerification($obj));
        }

        return redirect('profile/edit')->with('success', 'Documentos subidos correctamente, la verificación puede tardar hasta 48 horas.');
    }

    public function accounts()
    {
        $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $account = Auth::user()->accounts->where('active', 'Activa')->first();
        $banks = Bank::all();

        return view('users.accounts', compact('noticeModal', 'noticesAll', 'contact', 'account', 'banks'));
    }

    public function registerAccount(Request $request)
    {
        $data = $request->validate([
            'number' => 'required|unique:accounts,number|numeric|digits_between:9,16',
            'bank' => 'required|numeric|integer|digits_between:1,2',
            'type' => 'required|string'
        ]);

        $update_auth = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->orderBy('id' , 'desc')->select('updated_at')->get();

        if(count($update_auth) > 0)
        {
            $date_auth = date('Y-m-d H:i:s', strtotime($update_auth[0]->updated_at.'+ 6 months'));
        }        

        if(isset($date_auth) && date('Y-m-d H:i:s') < $date_auth){

            $date = Carbon::createFromDate($date_auth);

            return redirect('profile/accounts')->with('error', 'La cuenta sólo puede cambiarla una vez cada 6 meses, puede agregar una nueva cuenta a partir del '.$date->isoFormat('dddd D [de] MMMM [del] Y'));

        }else{

            $newaccount = Account::create([
                'user_id' => Auth::user()->id,
                'bank_id' => $data['bank'],
                'number' => $data['number'],
                'type' => $data['type'],
                'active' => 'Activa'
            ]);            

            $accounts = Account::where('user_id', Auth::user()->id)->where('active', 'Activa')->get();

            foreach( $accounts as $account ){
                if( $account->id != $newaccount->id ){
                    $account->update([
                        'active' => 'Inactiva'
                    ]);
                }
            }

            if(!empty(Auth::user()->notices))
            {
                foreach(Auth::user()->notices as $notice)
                {
                    if($notice->title == 'account')
                    {
                        $notice->delete();
                    }
                }
            }
            
            return redirect('profile/accounts')->with('success', 'Cuenta bancaria registrada y seleccionada para retiros.');

        }
    }

    public function getCity(Request $request)
    {

        if($request->ajax()){

            $citiesPre = City::where('departament_id', $request->city_id)->get();

            foreach($citiesPre as $city){
                $cities[$city->id] = ucwords($city->name);
            }
            
            return response()->json( $cities );
        }
    }

    public function notificationRead(Request $request)
    {
        
        $user = Auth::user();
        $user->unreadNotifications->find($request->idnotification)->markAsRead();

        return back()->with('success', 'Tarea realizada con exito');
    }


    public function create()
    {
        //
    }

    public function store(Request $request)
    {
        //
    }

    public function showDeposits($id)
    {
        $user = User::find($id);
        $deposits = $user->deposits()->orderBy('id', 'desc')->paginate(5);
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userDeposits', compact('user', 'contact', 'deposits'));
    }   
    
    public function showWithdrawals($id)
    {
        $user = User::find($id);
        $withdrawals = $user->withdrawals()->orderBy('id', 'desc')->paginate(5);
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userWithdrawals', compact('user', 'contact', 'withdrawals'));
    } 

    public function editData($id)
    {
        $user = User::find($id);
        $departaments = Departament::all();
        $contact = Contact::select('link')->where('company_id', 1)->get();
        $roles = Role::all();

        return view('admin.userEditData', compact('user', 'contact', 'departaments', 'roles'));
    }

    public function showAccounts($id)
    {
        $user = User::find($id);
        $banks = Bank::all();
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userAccounts', compact('user', 'contact', 'banks'));
    }

    public function assingRole(Request $request, User $user)
    {
        $user->roles()->sync($request->roles);

        return back()->with('success', 'Asignación de roles realizado correctamente.');
    }

    public function typeChange(Request $request, User $user)
    {
        $change = $user->update([
            'vip' => $request->vip
        ]);

        if($change && $request->vip == 'yes'){
            
            $obj = new \stdClass();
            $obj->name = $user->name;
            $obj->lastname = $user->lastname;

            $user->Notify(new Vip($obj));

            return back()->with('success', 'Tipo de cliente cambiado a VIP correctamente.');

        }elseif($change && $request->vip == 'no'){

            return back()->with('success', 'Tipo de cliente cambiado a Normal correctamente.');

        }

        return back()->with('success', 'Ocurrió un error al realizar el cambio de tipo de cliente.');
    }
    
    public function destroy(User $user)
    {
        if((count($user->deposits) > 0) || (count($user->withdrawals)  > 0))
        {
            return back()->with('error', 'No es posible eliminar el usuario, tiene transacciones las cuales deben ser revisadas.');
        }
        
        $user->delete();

        return redirect()->route('user.index')->with('success', 'Usuario eliminado correctamente.');
    }

    public function update(Request $request, User $user)
    {
        if(isset($request->verification)){

            $data = $request->validate([
                'name' => 'required|string|min:3',
                'lastname' => 'required|string|min:3',
                'doc_type' => 'required|string|max:22',
                'doc_num' => ['required',Rule::unique('users','doc_num')->ignore($user->id),'numeric','integer','digits_between:6,30']
            ]);

            $user->update([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'doc_type' => $data['doc_type'],
                'doc_num' => $data['doc_num']
            ]);

        }else{

            $data = $request->validate([
                'name' => 'required|string|min:3',
                'lastname' => 'required|string|min:3',
                'doc_type' => 'required|string|max:22',
                'doc_num' => ['required',Rule::unique('users','doc_num')->ignore($user->id),'numeric','integer','digits_between:7,30'],
                'mobil' => ['required',Rule::unique('users')->ignore($user->id),'numeric','integer','digits:10'],
                'departament' => 'required|numeric|integer|digits_between:1,2',
                'city' => 'required|numeric|integer|digits_between:1,4',
                'address' => 'max:190',
                'email' => ['required',Rule::unique('users')->ignore($user->id),'string','email','max:200']
            ]);

            $departament = Departament::select('name')->where('id', $data['departament'])->get();
            $city = City::select('name')->where('id', $data['city'])->get();

            $user->update([
                'name' => $data['name'],
                'lastname' => $data['lastname'],
                'doc_type' => $data['doc_type'],
                'doc_num' => $data['doc_num'],
                'mobil' => $data['mobil'],
                'departament' => $departament[0]->name,
                'city' => ucwords($city[0]->name),
                'address' => $data['address'],
                'email' => $data['email']
            ]);
        }

        return back()->with('success', 'Se han actualizado los datos del cliente correctamente.');
    }

    public function verified(Request $request, User $user)
    {
        $data = $request->validate([ 
            'verified' => 'required'
        ]);

        $obj = new \stdClass();
        $obj->name = $user->name;
        $obj->lastname = $user->lastname;
        $obj->note = $request->note;
        $obj->verified = $data['verified'];

        if($data['verified'] == 1)
        {
            $user->update([
                'verified' => '2'
            ]);

            if(!empty($user->notices))
            {
                foreach($user->notices as $notice)
                {
                    if($notice->title == 'verify')
                    {
                        $notice->delete();
                    }
                }
            }

            $user->notify(new UserVerification($obj));

            return redirect('/admin/user/'.$user->id.'/edit')->with('success', 'Cuenta verificada correctamente, se ha enviado notificación al usuario.');
        }else
        {
            if(empty($request->note))
            {
                return back()->with('error', 'Debe proporcionar un motivo por el cual no se aprueba la verificación.');
            }else
            {            
                $user->update([
                    'verified' => '0'
                ]);

                $verification = $user->verification;

                Storage::delete(['public/'.$verification->front, 'public/'.$verification->back]);

                $verification->delete(); 

                $user->notify(new UserVerification($obj));

                return redirect('/admin/user/'.$user->id.'/edit')->with('success', 'Cuenta no verificada, se ha notificado al usuario los motivos del rechazo.');
            }
        }
    }

    /*  
        public function dashboard()
        {
            

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

            return view('user.dashboard', compact('lastTransactions'));
        } 
    */
}
