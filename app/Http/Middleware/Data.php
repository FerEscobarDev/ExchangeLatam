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
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle(Request $request, Closure $next)
    {   
        if(auth()->user()->info_ok != 1)
        {
            return redirect('/profile/edit');
        }else
        {
            return $next($request);
        }
    }
}
