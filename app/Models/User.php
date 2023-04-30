<?php

namespace App\Models;

use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Fortify\TwoFactorAuthenticatable;
use Laravel\Jetstream\HasProfilePhoto;
use Laravel\Jetstream\HasTeams;
use Laravel\Sanctum\HasApiTokens;
use Spatie\Permission\Traits\HasRoles;

class User extends Authenticatable implements MustVerifyEmail
{
    use HasApiTokens;
    use HasFactory;
    use HasProfilePhoto;
    use HasTeams;
    use Notifiable;
    use TwoFactorAuthenticatable;
    use HasRoles;

    /**
     * The attributes that are mass assignable.
     *
     * @var string[]
     */
    /* protected $fillable = [
        'name', 'email', 'password',
    ]; */

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
    ];

    //Relación 1 a muchos con tabla Accounts
    public function accounts()
    {
        return $this->hasMany(Account::class);
    }

    //Relacion de uno a mucho con tabla deposits
    public function deposits()
    {
        return $this->hasMany(Deposit::class);
    }

    //Relacion de uno a mucho con tabla deposits
    public function withdrawals()
    {
        return $this->hasMany(Withdrawal::class);
    }

    //Relación de uno a muchos tabla dollar purchases
    public function dollarPurchases()
    {
        return $this->hasMany(DollarPurchase::class);
    }

    //Relación de uno a muchos tabla pending withdrawals
    public function pendingWithdrawals()
    {
        return $this->hasMany(PendingWithdrawal::class);
    }

    //Relación de muchos a muchos tabla notices
    public function notices()
    {
        return $this->belongsToMany(Notice::class);
    }

    //Relación uno a uno
    public function verification()
    {
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
    public function transactions()
    {
        return $this->hasMany(Transaction::class);
    }

    //Relación 1 a muchos con tabla TradingAccounts
    public function tradingAccounts()
    {
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

    // Relación uno a muchos
    public function walletAccounts()
    {
        return $this->hasMany(WalletAccount::class);
    }

    // Query Scope
    public function scopeFilter(Builder $query){

        if(empty(request('search'))) return;

        $search = request('search');

        $query->where('name','like', '%'.$search.'%')
                    ->orWhere('lastname','like', '%'.$search.'%')
                    ->orWhere('email','like', '%'.$search.'%')
                    ->orWhere('mobil','like', '%'.$search.'%')
                    ->orWhere('id','like', '%'.$search.'%')
                    ->orWhereRelation('dataUser', 'doc_num', 'like', '%'.$search.'%');
    }
}
