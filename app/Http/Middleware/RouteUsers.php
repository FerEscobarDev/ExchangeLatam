<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;

class RouteUsers
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
        $route = $request->server->all()['HTTP_HOST'];

        if($route != 'admin.exchangelatam.com' && $route != 'www.admin.exchangelatam.com')
        { 
            return $next($request);
        }else
        {
            return redirect()->route('admin.dashboard');
        }
    }
}
