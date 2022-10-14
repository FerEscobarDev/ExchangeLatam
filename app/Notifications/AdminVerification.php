<?php

namespace App\Notifications;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Notifications\Messages\MailMessage;
use Illuminate\Notifications\Notification;

class AdminVerification extends Notification
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
        $this->user_id = $obj->user_id;
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
                        ->subject('Verificación de usuario - ExchangeLatam')
                        ->view('emails.AdminVerification',[
                            'name' => $this->name,
                            'lastname' => $this->lastname,
                            'user_id' => $this->user_id,
                        ]);
    }

    public function toDatabase($notifiable)
    {

        return[
            'user_id' => $this->user_id,
            'mensaje' => '<span class="text-orange-500">Verificación</span> pendiente del usuario #'.$this->user_id.' '.$this->name.' '.$this->lastname,
            'link' => $this->user_id.'/verification'
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
