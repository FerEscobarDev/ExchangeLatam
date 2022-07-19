<?php

namespace App\Jobs;

use App\Mail\MassiveEmail;
use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldBeUnique;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Foundation\Bus\Dispatchable;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Queue\SerializesModels;
use Illuminate\Support\Facades\Mail;
use Illuminate\Queue\Middleware\RateLimited;

class SedEmail implements ShouldQueue
{
    use Dispatchable, InteractsWithQueue, Queueable, SerializesModels;

    protected $email;

    /**
     * Create a new job instance.
     *
     * @return void
     */
    public function __construct($email)
    {
        $this->email = $email;
    }

    /**
     * Execute the job.
     *
     * @return void
     */
    public function handle()
    {
        $email = new MassiveEmail($this->email);
        Mail::to($this->email['email'])->send($email);
    }

    /**
    * Get the middleware the job should pass through.
    *
    * @return array
    */
    public function middleware()
    {
        return [new RateLimited('SedEmail')];
    }

    public function retryUntil()
    {
        return now()->addMinutes(180);
    }
}
