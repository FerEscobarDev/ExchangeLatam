<?php

namespace App\Http\Middleware;

use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use PHPUnit\Framework\Constraint\Count;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            }, 

            'notifications' => [
                'unreadNotifications' => empty(Auth::user()->unreadNotifications) ? '' : Auth::user()->unreadNotifications,
                'countNotifications' => empty(Auth::user()->unreadNotifications) ? 0 : Count(Auth::user()->unreadNotifications),
            ],

            'flash' => [
                'error' => fn () => $request->session()->get('error'),
                'success' => fn () => $request->session()->get('success')
            ],
        ]);
    }
}
