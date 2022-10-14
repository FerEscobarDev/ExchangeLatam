<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdminDepositVoucher extends Notification
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
        $this->deposit_id = $obj->deposit_id;
        $this->user_id = $obj->user_id;
        $this->amount_usd = $obj->amount_usd;
    }

    /**
     * Get the notification's delivery channels.
     *
     * @param  mixed  $notifiable
     * @return array
     */
    public function via($notifiable)
    {
        return ['mail', 'database'];
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
                    ->subject('Comprobante cargado - ExchangeLatam')
                    ->view('emails.AdminDepositVoucher',[
                        'name' => $this->name,
                        'lastname' => $this->lastname,
                        'deposit_id' => $this->deposit_id,
                        'user_id' => $this->user_id,
                        'amount_usd' => $this->amount_usd
                    ]);
    }

    public function toDatabase($notifiable){

        return[
            'user_id' => $this->user_id,
            'mensaje' => '<span class="text-green-500">Depósito</span> pendiente #'.$this->deposit_id.' del usuario '.$this->name.' '.$this->lastname,
            'link' => $this->user_id.'/deposits',
        ];
    }

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
