@extends('layouts.dashboard')
@section('titulo', 'Deposits - ')
@section('content')
    <h3 class="title">Listado de depositos</h3>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="card pt-2">
            <div class="table-responsive">
                <table class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Id</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Usuario</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Cuenta FBS</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Monto USD</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Monto COP</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Fecha Solicitud</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Estado</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($deposits as $deposit)
                            <tr>
                                <td class="text-sm font-weight-normal align-middle">{{ $deposit->id }}</td>
                                <td class="text-sm font-weight-normal align-middle">
                                    <a href="{{route('admin.usersShowDeposits', $deposit->user_id)}}" target="_blank" class="text-info">
                                        {{  strtok($deposit->user->name, " ")." ".strtok($deposit->user->lastname, " ") }}
                                    </a>
                                </td>
                                <td class="text-sm font-weight-normal align-middle">{{ $deposit->fbs_account }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($deposit->amount_usd,0) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($deposit->amount_cop,0) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($deposit->total,0) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $deposit->application_date }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $deposit->status }}</td>
                                <td class="text-sm font-weight-normal align-middle">
                                    <a target="_blank" href="{{route('admin.usersShowDeposits', $deposit->user_id)}}" type="button" class="btn btn-icon btn-3 btn-warning mb-0">
                                        <span class="btn-inner--icon"><i class="material-icons">visibility</i></span>
                                        <span class="btn-inner--text">Ver</span>
                                    </a>
                                </td>
                            </tr>
                        @endforeach                    
                    </tbody>
                </table>            
                {{$deposits->links()}}
            </div>
        </div>
    </div>  
@endsection
