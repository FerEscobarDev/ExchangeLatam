<?php

namespace App\Providers;

use Carbon\Carbon;
use Illuminate\Pagination\Paginator;
use Illuminate\Support\ServiceProvider;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Cache\RateLimiting\Limit;
use Illuminate\Support\Facades\RateLimiter; 

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        //
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        Carbon::setLocale('es');
        setlocale(LC_TIME, 'es_ES.utf8');


        Paginator::useBootstrap();

        VerifyEmail::$toMailCallback = function($notifiable, $verificationUrl)
        {
            return(new MailMessage)
                ->subject('Verificación de email - ExchangeLatam')
                ->view('emails.verifyEmail',[
                    'name' => $notifiable->name,
                    'lastname' => $notifiable->lastname,
                    'url' => $verificationUrl
                ]);
        };

        ResetPassword::$toMailCallback = function($notifiable, $token)
        {
            return(new MailMessage)
                ->subject('Restablecer contraseña - ExchangeLatam')
                ->view('emails.resetPasswordEmail', [
                    'name' => $notifiable->name,
                    'lastname' => $notifiable->lastname,
                    'email' => $notifiable->email,
                    'token' => $token
                ]);
        };

        RateLimiter::for('SedEmail', function () {
            return Limit::perMinute(20);
        });
    }
}
