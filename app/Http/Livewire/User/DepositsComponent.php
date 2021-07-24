<?php

namespace App\Http\Livewire\User;

use App\Models\Deposit;
use Livewire\Component;
use Livewire\WithPagination;

class DepositsComponent extends Component
{

    use WithPagination;
    protected $paginationTheme = 'bootstrap';

    public function render()
    {
        $deposits = Deposit::where('user_id', auth()->user()->id)->paginate(5);

        return view('livewire.user.deposits-component', compact('deposits'));
    }
}
