<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class UserDataCompleted
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {
        if(Auth::user()->requirementUser->info_ok == 0)
        {
            return redirect(route('dashboard'))->with('error', 'Completa tus datos personales para poder continuar.');
        }

        if(Auth::user()->requirementUser->verified == 0 )
        {
            return redirect(route('dashboard'))->with('error', 'Es necesario que verifiques tu cuenta antes de usar nuestros servicios.');
        }
        elseif(Auth::user()->requirementUser->verified == 1 )
        {
            return redirect(route('dashboard'))->with('error', 'Tu identidad está en proceso de verificación, una vez finalice podrás usar nuestros servicios.');
        }
        elseif(Auth::user()->requirementUser->formFunds == 0 || Auth::user()->requirementUser->formKnowledge == 0)
        {
            return redirect(route('dashboard'))->with('error', 'Debes diligenciar los formularios que se encuentran en la pestaña inferior en verificación de cuenta, una vez realizado podrás usar nuestros servicios.');
        }
        elseif(Auth::user()->requirementUser->verified != 2)
        {
            return redirect(route('dashboard'))->with('error', 'Se ha producido un error, por favor comunicate con nuestro whatsapp o intenta más tarde.');
        }
        
        return $next($request);
    }
}
