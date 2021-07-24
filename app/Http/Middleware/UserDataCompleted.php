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
        if(Auth::user()->info_ok == 0){
            return redirect('profile/deposits')->with('error', 'Es necesario que complete sus datos personales para emitir su factura por nuestros servicios.');
        }

        if(Auth::user()->verified == 0 ){
            return redirect('profile/deposits')->with('error', 'Es necesario que suba los documentos para la verificación de identidad antes de usar nuestros servicios.');
        }elseif(Auth::user()->verified == 1 ){
            return redirect('profile/deposits')->with('error', 'Su cuenta está en proceso de verificación, una vez finalice podrá usar nuestros servicios.');
        }elseif(Auth::user()->verified != 2){
            return redirect('profile/deposits')->with('error', 'Se ha producido un error durante el proceso de solicitud, por favor comuniquese a nuestro whatsapp o intente más tarde.');
        }
        
        return $next($request);
    }
}
