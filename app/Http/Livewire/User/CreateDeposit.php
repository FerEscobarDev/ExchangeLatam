<?php

namespace App\Http\Livewire\User;

use App\Models\Account;
use Livewire\Component;

class CreateDeposit extends Component
{

    public $open = true;

    public $fbs_account, $amount_usd, $account_id;

    public function render()
    {   
        $accounts = Account::where('user_id', 298)->where('active', 'Activa')->get();

        return view('livewire.user.create-deposit', compact('accounts'));
    }
}
