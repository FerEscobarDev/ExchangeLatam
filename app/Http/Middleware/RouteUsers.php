<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

class RouteUsers
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
