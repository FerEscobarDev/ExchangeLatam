<?php

namespace App\Http\Controllers;

use Carbon\Carbon;
use App\Models\Bank;
use App\Models\City;
use App\Models\Rate;
use App\Models\User;
use Inertia\Inertia;
use App\Models\Notice;
use App\Models\Account;
use App\Models\Contact;
use App\Models\Deposit;
use App\Models\DataUser;
use App\Models\Withdrawal;
use App\Notifications\Vip;
use App\Models\Departament;
use App\Models\DollarPrice;
use App\Models\Transaction;
use App\Exports\UsersExport;
use App\Mail\contactMessage;
use App\Models\Verification;
use Illuminate\Http\Request;
use Illuminate\Validation\Rule;
use Illuminate\Support\Facades\DB;
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
        $users = User::with('requirementUser', 'dataUser', 'formFund', 'formKnowledgeClient');
        $search = '';

        if(request()->has('search'))
        {
            $search = request('search');
            $users = $users->where('name','like', '%'.$search.'%')
                        ->orWhere('lastname','like', '%'.$search.'%')
                        ->orWhere('email','like', '%'.$search.'%')
                        ->orWhere('mobil','like', '%'.$search.'%')
                        ->orWhere('id','like', '%'.$search.'%')
                        ->orWhereRelation('dataUser', 'doc_num', 'like', '%'.$search.'%');
        }

        $users = $users->paginate(10)->appends(request()->except('page'));

        return Inertia::render('Admin/Users/Index', [
            'users' => $users,
            'search' => $search,
        ]);
    }

    public function exportIndex()
    {
        $users = User::where(function ($query) {
            $query->where(function ($query) {
                $query->select('status')
                    ->from('deposits')
                    ->whereColumn('user_id', 'users.id')
                    ->where('completed_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, 'Realizado')->orWhere(function ($query) {
                $query->select('status')
                    ->from('withdrawals')
                    ->whereColumn('user_id', 'users.id')
                    ->where('application_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, '!=', 'Cancelado');
        })->where('exported', 0)->paginate(10);

        return view('admin.users.index', compact('users'));
    }

    public function admin()
    {
        //Se edita la clase Illuminate\Notifications\Notifiable del modelo Users
        //return view('admin.notifications.index');
        return Inertia::render('Admin/Dashboard/Dashboard');
    }

    public function picture(Request $request)
    {
        $picture = $request->validate([
            'picture' => 'required|image'
        ]);

        $ruta_img = $picture['picture']->store('img_profile', 'public');

        $img = Image::make(public_path('storage/'.$ruta_img))->fit(400,400);
        $img->save();
        
        if(!empty(Auth::user()->picture))
        {
            Storage::delete('public/'.Auth::user()->picture);
        }

        Auth::user()->update([
            'picture' => $ruta_img
        ]);

        return back()->with('success', 'Tu foto de perfil se ha subido.');
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

        return redirect('profile/contact')->with('success', 'Tu mensaje ha sido ha enviado.');
    }

    public function edit()
    {   
        $departaments = Departament::all();
        $cities = City::all();
        $dataUser = Auth::user()->dataUser;
        $requirementUser = Auth::user()->requirementUser;
        /* $noticeModal = Auth::user()->notices->where('type', 'modal');
        $noticesAll = Notice::where('type', 'general')->get();
        $contact = Contact::select('link')->where('company_id', 1)->get(); */

        return Inertia::render('Profile/Show', [
            'departaments' => $departaments,
            'cities' => $cities,
            'dataUser' => $dataUser,
            'requirementUser' => $requirementUser,
        ]);
    }

    public function updateProfile(Request $request)
    {  
        if(empty(Auth::user()->dataUser)){
            $ignore = 'nothing';
        }
        else
        {
            $ignore = Auth::user()->dataUser->id;
        }

        $data = $request->validate([
            'name' => 'required|string|min:3',
            'lastname' => 'required|string|min:3',
            'doc_type' => 'required|array:id,name',
            'doc_num' => ['required',Rule::unique('data_users','doc_num')->ignore($ignore),'numeric','integer','digits_between:6,30'],
            'mobil' => ['required',Rule::unique('users')->ignore(Auth::user()->id),'numeric','integer','digits:10'],
            'departament' => 'required|array:id,name,created_at,updated_at',
            'city' => 'required|array:id,departament_id,name,created_at,updated_at',
            'address' => 'required|string|max:190|min:4',
            'email' => ['required',Rule::unique('users')->ignore(Auth::user()->id),'string','email','max:200']
        ]);

        $user = User::find(Auth::user()->id);

        $user->update([
            'name' => ucwords(strtolower($data['name'])),
            'lastname' => ucwords(strtolower($data['lastname'])),
            'mobil' => $data['mobil'],
            'email' => $data['email'],
        ]);

        if(empty($user->dataUser))
        {
            $user->dataUser()->create([
                'doc_type' => $data['doc_type']['id'],
                'doc_num' => $data['doc_num'],
                'departament' => $data['departament']['name'],
                'city' => ucwords($data['city']['name']),
                'address' => $data['address'],
            ]);
        }
        else
        {
           $user->dataUser()->update([
                'doc_type' => $data['doc_type']['id'],
                'doc_num' => $data['doc_num'],
                'departament' => $data['departament']['name'],
                'city' => ucwords($data['city']['name']),
                'address' => $data['address'],
            ]); 
        }

        $user->requirementUser()->update([
            'info_ok' => 1,
        ]);

        return back()->with('success', 'Tus datos personales se han actualizado correctamente.');
    }

    public function changePassword()
    {
        return Inertia::render('Profile/ChangePassword');
    }

    public function notificationRead(Request $request)
    {
        
        $user = Auth::user();
        $user->unreadNotifications->find($request->idnotification)->markAsRead();

        return back()->with('success', 'Tarea realizada con exito');
    }

    public function show(User $user)
    {
        $dataUser = $user->dataUser;
        $requirementUser = $user->requirementUser;
        $roles = $user->roles;
        $account = Account::where('user_id', $user->id)->where('active', 'Activa')->with('bank')->first();
        $transactions = Transaction::where('user_id', $user->id)->with('transactionable')->orderBy("application_date","desc")->limit(5)->get();

        return Inertia::render('Admin/Users/Show',[
            'client' => $user,
            'dataUser' => $dataUser,
            'requirementUser' => $requirementUser,
            'account' => $account,
            'transactions' => $transactions,
            'roles' => $roles,
        ]);
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
        $deposits = Transaction::where('type', 1)->where('user_id', $user->id)->orderBy('id', 'desc')->paginate(5);
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userDeposits', compact('user', 'contact', 'deposits'));
    }   
    
    public function showWithdrawals($id)
    {
        $user = User::find($id);
        $withdrawals = Transaction::where('type', 0)->where('user_id', $user->id)->orderBy('id', 'desc')->paginate(5);
        $contact = Contact::select('link')->where('company_id', 1)->get();

        return view('admin.userWithdrawals', compact('user', 'contact', 'withdrawals'));
    } 

    public function editProfile(User $user)
    {
        $departaments = Departament::all();
        $cities = City::all();
        $dataUser = $user->dataUser;
        $requirementUser = $user->requirementUser;

        return Inertia::render('Admin/Users/Edit', [
            'departaments' => $departaments,
            'cities' => $cities,
            'client' => $user,
            'dataUser' => $dataUser,
            'requirementUser' => $requirementUser,
        ]);
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
        $change = $user->dataUser->update([
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
        if(empty($user->dataUser)){
            $ignore = 'nothing';
        }
        else
        {
            $ignore = $user->dataUser->id;
        }

        if(isset($request->verification)){

            $data = $request->validate([
                'name' => 'required|string|min:3',
                'lastname' => 'required|string|min:3',
                'doc_type' => 'required|array:id,name',
                'doc_num' => ['required',Rule::unique('data_users','doc_num')->ignore($ignore),'numeric','integer','digits_between:6,30'],
            ]);

            $user->update([
                'name' => ucwords(strtolower($data['name'])),
                'lastname' => ucwords(strtolower($data['lastname'])),
            ]);

            $user->dataUser()->update([
                'doc_type' => $data['doc_type']['id'],
                'doc_num' => $data['doc_num'],
            ]); 

        }else{

            $data = $request->validate([
                'name' => 'required|string|min:3',
                'lastname' => 'required|string|min:3',
                'doc_type' => 'required|array:id,name',
                'doc_num' => ['required',Rule::unique('data_users','doc_num')->ignore($ignore),'numeric','integer','digits_between:6,30'],
                'mobil' => ['required',Rule::unique('users')->ignore($user->id),'numeric','integer','digits:10'],
                'departament' => 'required|array:id,name,created_at,updated_at',
                'city' => 'required|array:id,departament_id,name,created_at,updated_at',
                'address' => 'required|string|max:190|min:4',
                'email' => ['required',Rule::unique('users')->ignore($user->id),'string','email','max:200']
            ]);

            $user->update([
                'name' => ucwords(strtolower($data['name'])),
                'lastname' => ucwords(strtolower($data['lastname'])),
                'mobil' => $data['mobil'],
                'email' => $data['email'],
            ]);

            if(empty($user->dataUser))
            {
                return back()->with('error', 'El cliente debe haber realizado al menos la primer actualización de datos.');
            }
            else
            {
                $user->dataUser()->update([
                    'doc_type' => $data['doc_type']['id'],
                    'doc_num' => $data['doc_num'],
                    'departament' => $data['departament']['name'],
                    'city' => ucwords($data['city']['name']),
                    'address' => $data['address'],
                ]); 
            }

        }

        return back()->with('success', 'Se han actualizado los datos del cliente correctamente.');
    }

    

    public function export()
    {
        $export = new UsersExport;
        $export->users();
        return $export->download('Clientes ExchangeLatam.xlsx');
    }

    public function checkRegister()
    {
        $users = User::where(function ($query) {
            $query->where(function ($query) {
                $query->select('status')
                    ->from('deposits')
                    ->whereColumn('user_id', 'users.id')
                    ->where('completed_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, 'Realizado')->orWhere(function ($query) {
                $query->select('status')
                    ->from('withdrawals')
                    ->whereColumn('user_id', 'users.id')
                    ->where('application_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, '!=', 'Cancelado');
        })->where('exported', 0)->get();

        foreach($users as $user)
        {
            $user->update([
                'exported' => 1
            ]);
        }

        return back()->with('success', 'Usuarios marcados cómo registrados en loggro.');
    }     
}
