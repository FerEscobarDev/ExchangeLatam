<?php

namespace App\Exports;

use App\Models\User;
use Illuminate\Contracts\View\View;
use Maatwebsite\Excel\Concerns\Exportable;
use Maatwebsite\Excel\Concerns\FromView;

class UsersExport implements FromView
{
    use Exportable;

    public function users()
    {
        $this->users = User::where(function ($query) {
            $query->where(function ($query) {
                $query->select('status')
                    ->from('deposits')
                    ->whereColumn('user_id', 'users.id')
                    ->where('completed_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, 'Realizado')->orWhere(function ($query) {
                $query->select('status')
                    ->from('withdrawals')
                    ->whereColumn('user_id', 'users.id')
                    ->where('application_date', '>=', '2021-01-01 00:00:00')
                    ->limit(1);
            }, '!=', 'Cancelado');
        })->where('exported', 0)->get();
    }
    
    public function view(): View
    {
        return view('exports.users', [
            'users' => $this->users
        ]);
    }
}
