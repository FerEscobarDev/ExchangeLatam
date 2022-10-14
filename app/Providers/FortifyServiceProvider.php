<?php

namespace App\Providers;

use Illuminate\Http\Request;
use Laravel\Fortify\Fortify;
use App\Actions\Fortify\CreateNewUser;
use Illuminate\Support\ServiceProvider;
use Illuminate\Cache\RateLimiting\Limit;
use App\Actions\Fortify\ResetUserPassword;
use App\Actions\Fortify\UpdateUserPassword;
use Illuminate\Support\Facades\RateLimiter;
use Laravel\Fortify\Contracts\LoginResponse;
use App\Actions\Fortify\UpdateUserProfileInformation;
use Laravel\Fortify\Contracts\PasswordUpdateResponse;

class FortifyServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->instance(LoginResponse::class, new class implements LoginResponse {
            public function toResponse($request)
            {
                return redirect(RouteServiceProvider::HOME)->with('success-login', 'Inicio de sesión correcto.');
            }
        });
        $this->app->instance(PasswordUpdateResponse::class, new class implements PasswordUpdateResponse {
            public function toResponse($request)
            {
                return back()->with('success', 'Contraseña cambiada correctamente.');
            }
        });
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Fortify::createUsersUsing(CreateNewUser::class);
        Fortify::updateUserProfileInformationUsing(UpdateUserProfileInformation::class);
        Fortify::updateUserPasswordsUsing(UpdateUserPassword::class);
        Fortify::resetUserPasswordsUsing(ResetUserPassword::class);

        RateLimiter::for('login', function (Request $request) {
            $email = (string) $request->email;

            return Limit::perMinute(5)->by($email.$request->ip());
        });

        RateLimiter::for('two-factor', function (Request $request) {
            return Limit::perMinute(5)->by($request->session()->get('login.id'));
        });

        /* Fortify::loginView(function () {
            return Inertia::render('Auth/Login');
        });

        Fortify::registerView(function () {
            return Inertia::render('Auth/Register');
        });

        Fortify::requestPasswordResetLinkView(function () {
            $contact = Contact::select('link')->where('company_id', 1)->get();
            return view('auth.forgot-password', compact('contact'));
        });

        Fortify::resetPasswordView(function ($request) {
            $contact = Contact::select('link')->where('company_id', 1)->get();
            return view('auth.reset-password', ['request' => $request, 'contact' => $contact]);
        });

        Fortify::verifyEmailView(function () {            
            return Inertia::render('Auth/VerifyEmail');
        });

        Fortify::confirmPasswordView(function () {
            return view('auth.confirm-password');
        }); */
    }
}
