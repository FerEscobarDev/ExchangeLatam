@extends('layouts.dashboard')
@section('titulo', 'Withdrawals - ')
@section('content')<h3 class="title">Listado de retiros</h3>
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
                        <th class="text-uppercase text-secondary text-sm opacity-7">Cuenta Bancaria</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Monto USD</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Monto COP</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Fecha Límite</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Estado</th>
                        <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($withdrawals as $withdrawal)
                        <tr>
                            <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->id }}</td>
                            <td class="text-sm font-weight-normal align-middle">
                                <a href="{{route('admin.usersShowDeposits', $withdrawal->user_id)}}" target="_blank" class="text-info">
                                    {{  strtok($withdrawal->user->name, " ")." ".strtok($withdrawal->user->lastname, " ") }}
                                </a>
                            </td>
                            <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->fbs_account }}</td>                            
                            <td class="text-sm font-weight-normal align-middle">
                                <button 
                                    type="button" 
                                    data-bs-toggle="popover" 
                                    {{-- data-trigger="focus"  --}}
                                    data-bs-title="{{$withdrawal->user->name." ".$withdrawal->user->lastname}}"
                                    data-bs-placement="top"
                                    data-bs-html="true"
                                    data-bs-content='<p><b>Documento:</b> {{$withdrawal->user->doc_type}}</p><p><b>Documento #:</b> {{$withdrawal->user->doc_num}}</p><p><b>Cuenta #:</b> {{$withdrawal->account->number}}</p><p><b>Tipo Cuenta:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                     
                                    @if ($withdrawal->account->enrolled == 0)
                                        class="btn btn-danger btn-sm mb-0">
                                        No Inscrita
                                    @else
                                        class="btn btn-success btn-sm mb-0">
                                        Inscrita
                                    @endif
                                </button>
                            </td>
                            <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->amount_usd,0) }}</td>
                            <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->amount_cop,0) }}</td>
                            <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->total,0) }}</td>
                            <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->application_date }}</td>
                            <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->status }}</td>
                            <td class="text-sm font-weight-normal align-middle">
                                <a target="_blank" href="{{route('admin.usersShowWithdrawals', $withdrawal->user_id)}}" type="button" class="btn btn-icon btn-2 btn-info mb-0">
                                    <span class="btn-inner--icon"><i class="material-icons">visibility</i></span>
                                </a>
                            </td>
                        </tr>
                    @endforeach                    
                </tbody>
            </table>            
            {{$withdrawals->links()}}
        </div>
    </div>
</div>  
@endsection