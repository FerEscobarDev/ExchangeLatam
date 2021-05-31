<?php

namespace App\Http\Livewire;

use App\Models\Deposit;
use Livewire\Component;

class UserDepositsComponent extends Component
{
    public function render()
    {
        $deposits = Deposit::where('user_id', auth()->user()->id)->paginate(5);

        return view('livewire.user-deposits-component', compact('deposits'));
    }
}
