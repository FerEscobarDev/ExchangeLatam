<?php

namespace App\Http\Controllers;

use App\Models\User;
use App\Jobs\SedEmail;
use App\Models\DataUser;
use Illuminate\Http\Request;

class MessagingController extends Controller
{
    public function index()
    {
        return view('admin.messaging.index');
    }

    public function massive(Request $request)
    {
        $request->validate([
            'subject' => ['required', 'string', 'max:100', 'min:3'],
            'addressee' => ['required','numeric','integer','integer','min:0','max:3'],
            
        ]);

        if($request->addressee == 0)
        {
            $users = User::cursor()->where('id', '>', 1032)->where('email_verified_at', '>', '2017-01-01 00:00:00');
            $chunks = $users->chunk(20);
            $chunksUsers = $chunks->all();
        }
        elseif($request->addressee == 1)
        {
            $users = DataUser::cursor()->filter(function ($dataUser) {
                return $dataUser->vip === 'yes';
            });
            $chunks = $users->chunk(20);
            $chunksUsers = $chunks->all();

            foreach($chunksUsers as $users)
            {
                foreach($users as $vip)
                {
                    $email['email'] = $vip->user->email;
                    $email['name'] = $vip->user->name;
                    $email['lastname'] = $vip->user->lastname;        
                    $email['subject'] = $request->subject;
                    $email['content'] = $request->content;

                    SedEmail::dispatch($email);
                }  
            }      

            return back()->with('success', 'Los mensajes estan siendo enviados a los destinatarios.');
        }
        elseif($request->addressee == 2)
        {
            $users = DataUser::cursor()->filter(function ($dataUser) {
                return $dataUser->vip === 'yes';
            });
            $chunks = $users->chunk(20);
            $chunksUsers = $chunks->all();
        }
        elseif($request->addressee == 3)
        {
            $users = User::cursor()->filter(function ($user) {
                return $user->created_at >= date('Y-m-d H:i:s', strtotime(date('Y-m-d H:i:s').'- 2 months'));
            });
            $chunks = $users->chunk(20);
            $chunksUsers = $chunks->all();
        }
        foreach($chunksUsers as $users)
        {
            foreach($users as $user)
            {
                $email['email'] = $user->email;
                $email['name'] = $user->name;
                $email['lastname'] = $user->lastname;        
                $email['subject'] = $request->subject;
                $email['content'] = $request->content;

                SedEmail::dispatch($email);
            }  
        }      

        return back()->with('success', 'Los mensajes estan siendo enviados a los destinatarios.');
    }
}
