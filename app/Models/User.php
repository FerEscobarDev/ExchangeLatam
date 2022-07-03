<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Spatie\Permission\Traits\HasRoles;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    /*protected $fillable = [
        'name',
        'email',
        'password',
    ];*/

    protected $guarded = [];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array
     */
    protected $hidden = [
        'password',
        'remember_token',
        'two_factor_recovery_codes',
        'two_factor_secret',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array
     */
    protected $casts = [
        'email_verified_at' => 'datetime',
    ];

    /**
     * The accessors to append to the model's array form.
     *
     * @var array
     */
    protected $appends = [
        'profile_photo_url',
        /*'picture', Da error al querer mostrar en la tabla de usuarios con datatables*/
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

    // Relación uno a uno
    public function requirementUser()
    {
        return $this->hasOne(RequirementUser::class);
    }

    // Relación uno a uno
    public function dataUser()
    {
        return $this->hasOne(DataUser::class);
    }

    // Relación uno a uno
    public function financialDataUser()
    {
        return $this->hasOne(FinancialDataUser::class);
    }

    //Relacion de uno a muchos con tabla transactions
    public function transactions(){
        return $this->hasMany(Transaction::class);
    }

    //Relación 1 a muchos con tabla TradingAccounts
    public function tradingAccounts(){
        return $this->hasMany(TradingAccount::class);
    }

    // Relación uno a uno
    public function formFund()
    {
        return $this->hasOne(FormFund::class);
    }

    // Relación uno a uno
    public function formKnowledgeClient()
    {
        return $this->hasOne(FormKnowledgeClient::class);
    }
}
