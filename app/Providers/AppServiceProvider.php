<?php

namespace App\Providers;

use Illuminate\Auth\Notifications\ResetPassword;
use Illuminate\Auth\Notifications\VerifyEmail;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Support\ServiceProvider;

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
    }
}
