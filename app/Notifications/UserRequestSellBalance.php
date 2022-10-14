<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class UserRequestSellBalance extends Notification
{
    use Queueable;

    /**
     * Create a new notification instance.
     *
     * @return void
     */
    public function __construct($obj)
    {
        $this->name = $obj->name;
        $this->lastname = $obj->lastname;
        $this->transaction_id = $obj->transaction_id;
        $this->amount_usd = $obj->amount_usd;
        $this->wallet = $obj->wallet;
        $this->account = $obj->account;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail'];
    }

    /**
     * Get the mail representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return \Illuminate\Notifications\Messages\MailMessage
     */
    public function toMail($notifiable)
    {
        return (new MailMessage)
                    ->subject('Solicitud Venta de Saldo - ExchangeLatam')
                    ->view('emails.UserRequestSellBalance',[
                        'name' => $this->name,
                        'lastname' => $this->lastname,
                        'transaction_id' => $this->transaction_id,
                        'amount_usd' => $this->amount_usd,
                        'wallet' => $this->wallet,
                        'account' => $this->account,
                    ]);
    }

    /* public function toDatabase($notifiable){

        return[
            'user_id' => $this->user_id,
            'mensaje' => '<span class="text-green-500">Depósito</span> pendiente #'.$this->deposit_id.' del usuario '.$this->name.' '.$this->lastname,
            'link' => $this->user_id.'/deposits',
        ];
    } */

    /**
     * Get the array representation of the notification.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function toArray($notifiable)
    {
        return [
            //
        ];
    }
}
