<?php

namespace App\Http\Livewire\User;

use App\Models\Withdrawal;
use Livewire\Component;
use Livewire\WithPagination;

class WithdrawalsComponent extends Component
{
    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $withdrawals = Withdrawal::where('user_id', auth()->user()->id)->paginate(5);

        return view('livewire.user.withdrawals-component', compact('withdrawals'));
    }
}
