<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class Data
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure(\Illuminate\Http\Request): (\Illuminate\Http\Response|\Illuminate\Http\RedirectResponse)  $next
     * @return \Illuminate\Http\Response|\Illuminate\Http\RedirectResponse
     */
    public function handle(Request $request, Closure $next)
    {
        if(auth()->user()->requirementUser->info_ok != 1)
        {
            return redirect(route('dashboard'))->with('error', 'Completa tus datos personales para poder continuar.');
        }else
        {
            return $next($request);
        }
    }
}
