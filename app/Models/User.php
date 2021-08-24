<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasFactory, Notifiable, HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */

    protected $guarded = [];

    /* protected $fillable = [
        'name',
        'email',
        'password',
    ]; */

    /**
     * The attributes that should be hidden for arrays.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
    ];

    /**
     * The attributes that should be cast to native types.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    //Relación 1 a muchos con tabla Accounts
    public function accounts(){
        return $this->hasMany(Account::class);
    }

    //Relacion de uno a mucho con tabla deposits
    public function deposits(){
        return $this->hasMany(Deposit::class);
    }

    //Relacion de uno a mucho con tabla deposits
    public function withdrawals(){
        return $this->hasMany(Withdrawal::class);
    }

    //Relación de uno a muchos tabla dollar purchases
    public function dollarPurchases(){
        return $this->hasMany(DollarPurchase::class);
    }

    //Relación de uno a muchos tabla pending withdrawals
    public function pendingWithdrawals(){
        return $this->hasMany(PendingWithdrawal::class);
    }

    //Relación de muchos a muchos tabla notices
    public function notices(){
        return $this->belongsToMany(Notice::class);
    }

    //Relación uno a uno
    public function verification(){
        return $this->hasOne(Verification::class);
    }

}
