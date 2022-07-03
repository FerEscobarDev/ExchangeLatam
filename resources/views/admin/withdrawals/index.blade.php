@extends('layouts.dashboard')
@section('title', 'Withdrawals')
@section('content')<h3 class="title">Listado de retiros</h3>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="card pt-2">
            <div class="nav-wrapper position-relative end-0">
                <ul class="nav nav-pills nav-fill p-1" role="tablist">
                    <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1 active" href="{{route('withdrawal.index')}}" role="tab" aria-controls="index" aria-selected="true">
                            <span class="material-icons align-middle mb-1 text-warning">
                                query_builder
                            </span>
                            Pendientes
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1" href="{{route('withdrawal.indexPendientes')}}" role="tab" aria-controls="today" aria-selected="false">
                            <span class="material-icons align-middle mb-1 text-info">
                                published_with_changes
                            </span>
                            Para hoy
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1" href="{{route('withdrawal.indexVoucher')}}" role="tab" aria-controls="voucher" aria-selected="false">
                            <span class="material-icons align-middle mb-1 text-danger">
                                upcoming
                            </span>                        
                            Sin comprobante
                        </a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link mb-0 px-0 py-1" href="{{route('withdrawal.indexAll')}}" role="tab" aria-controls="all" aria-selected="false">
                            <span class="material-icons align-middle mb-1 text-success">
                                published_with_changes
                            </span>
                            Todos
                        </a>
                    </li> 
                </ul>
            </div>
            <div class="table-responsive pt-3">
                <table class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Id</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Usuario</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Broker</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Cuenta Trading</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Cuenta Bancaria</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Monto USD</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Monto COP</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Fecha Límite</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Estado</th>{{-- 
                            <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th> --}}
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($withdrawals as $withdrawal)
                            <tr>
                                <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->id }}</td>
                                <td class="text-sm font-weight-normal align-middle">
                                    <a href="{{route('admin.usersShowWithdrawals', $withdrawal->user_id)}}" target="_blank" class="text-info">
                                        {{  strtok($withdrawal->user->name, " ")." ".strtok($withdrawal->user->lastname, " ") }}
                                    </a>
                                </td>
                                <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->tradingAccount->broker->name }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $withdrawal->tradingAccount->number }}</td>                            
                                <td class="text-sm font-weight-normal align-middle">
                                    <button 
                                        type="button" 
                                        data-bs-toggle="popover" 
                                        {{-- data-trigger="focus"  --}}
                                        data-bs-title="{{$withdrawal->user->name." ".$withdrawal->user->lastname}}"
                                        data-bs-placement="top"
                                        data-bs-html="true"
                                        @if ($withdrawal->user->dataUser->doc_type == 1)
                                            data-bs-content='<p><b>Documento:</b> Cédula de ciudadanía </p><p><b>Documento #:</b> {{$withdrawal->user->dataUser->doc_num}}</p><p><b>Cuenta #:</b> {{$withdrawal->account->number}}</p><p><b>Tipo Cuenta:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                        @elseif($withdrawal->user->dataUser->doc_type == 2)
                                            data-bs-content='<p><b>Documento:</b> Cédula de extranjería </p><p><b>Documento #:</b> {{$withdrawal->user->dataUser->doc_num}}</p><p><b>Cuenta #:</b> {{$withdrawal->account->number}}</p><p><b>Tipo Cuenta:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                        @elseif($withdrawal->user->dataUser->doc_type == 3)
                                            data-bs-content='<p><b>Documento:</b> Pasaporte </p><p><b>Documento #:</b> {{$withdrawal->user->dataUser->doc_num}}</p><p><b>Cuenta #:</b> {{$withdrawal->account->number}}</p><p><b>Tipo Cuenta:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                        @endif
                                        
                                        @if ($withdrawal->account->enrolled == 0)
                                            class="btn btn-danger btn-sm mb-0">
                                            No Inscrita
                                        @else
                                            class="btn btn-success btn-sm mb-0">
                                            Inscrita
                                        @endif
                                    </button>
                                </td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->amount_usd,2) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->amount_cop,0) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ number_format($withdrawal->total,0) }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ date('d-M-Y',strtotime($withdrawal->expiration_date)) }}</td>
                                <td class="text-sm font-weight-normal align-middle text-warning">{{ $withdrawal->status }}</td>
                                {{-- <td class="text-sm font-weight-normal align-middle">
                                    <a target="_blank" href="{{route('admin.usersShowWithdrawals', $withdrawal->user_id)}}" type="button" class="btn btn-icon btn-2 btn-info mb-0">
                                        <span class="btn-inner--icon"><i class="material-icons">visibility</i></span>
                                    </a>
                                </td> --}}
                            </tr>
                        @endforeach                    
                    </tbody>
                </table>            
                {{$withdrawals->links()}}
            </div>
        </div>
    </div>  
@endsection