@extends('layouts.dashboard')
@section('title', 'Reporte '.$report->month->name.' '.$report->year)
@section('content')
    <div class="d-flex justify-content-between">{{-- 
        <h3 class="title">Listado de Transacciones</h3> --}}
        {{-- <div class="card mb-4">
            <div class="card-body p-2">
                <a class="btn btn-danger mb-0" href="{{ route('admin.reportCreate') }}"><i class="material-icons text-sm">add</i>&nbsp;&nbsp;Eliminar Reporte</a>
            </div>
        </div> --}}
    </div>
    <div class="d-sm-flex justify-content-between">
        <div>   
            <a class="btn btn-icon btn-outline-dark ms-2" href="{{ route('admin.reportExport', [$report]) }}">
                <i class="material-icons text-xs position-relative">archive</i>
                Export Excel
            </a>
        </div>
        <div>
            <button type="button" class="btn btn-icon bg-gradient-primary" data-bs-toggle="modal" data-bs-target="#destroy">
                Eliminar Reporte
            </button>
            <div class="modal fade" id="destroy" tabindex="-1" role="dialog" aria-labelledby="destroy" aria-hidden="true">
                <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                    <div class="modal-content">
                        <form class="form" method="POST" action="{{ route('admin.reportDestroy', $report) }}">
                            @method('delete')
                            @csrf
                            <div class="modal-header">
                                <h6 class="modal-title font-weight-normal text-uppercase" id="modal-title-notification">Su atención es requerida</h6>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="py-3 text-center">
                                    <i class="material-icons h1 text-secondary">
                                        notifications_active
                                    </i>
                                    <h4 class="text-gradient text-danger mt-4">¿Deseas eliminar este reporte?</h4>
                                    <p>Una vez eliminado este reporte no se puede recuperar por favor asegurate de que estás realizando la acción correcta.</p>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button type="submit" class="btn btn-danger">Eliminar</button>
                                <button type="button" class="btn btn-link text-dark ml-auto" data-bs-dismiss="modal">Close</button>
                            </div>                        
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="col-12">
        <div class="card">
            <div class="card-header">
                <h5 class="mb-0">Reporte {{ $report->reportType->name.' de '.$report->month->name.' del '.$report->year }}</h5>
                <p class="text-sm mb-0">
                    Listado de transacciones del mes de {{ $report->month->name.' del '.$report->year }}
                </p>
            </div> 
            <div class="table-responsive">                    
                @if ($report->report_type_id == 1 || $report->report_type_id == 2 || $report->report_type_id == 4)
                    <table id="report" class="table table-flush" style="width:100%">
                        <thead class="thead-light">
                            <tr>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Tipo</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Encabezado</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo documento</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Numero</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Fecha factura</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Encabezado</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Ítem</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Descripción</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Cant</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Vr Unitario</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($transactions as $index => $transaction)
                                <tr>
                                    @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')                                        
                                        <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->type }}</td>
                                    @else
                                        <td class="text-sm font-weight-normal align-middle">{{ substr($transaction->transactionable_type, 11) }}</td>
                                    @endif
                                    <td class="text-sm font-weight-normal align-middle text-center">{{ $index + 1 }}</td>
                                    <td class="text-sm font-weight-normal align-middle text-center">
                                        @if($transaction->transactionable->user->doc_type == 'Cedula de ciudadania')
                                            CC
                                        @elseif($transaction->transactionable->user->doc_type == 'Cedula de extranjería')
                                            CE
                                        @elseif($transaction->transactionable->user->doc_type == 'Pasaporte')
                                            PS
                                        @elseif($transaction->transactionable->user->doc_type == 'NIT')
                                        NIT
                                        @else
                                            No tiene
                                        @endif
                                    </td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->user->doc_num }}</td>
                                    @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')
                                        <td class="text-sm font-weight-normal align-middle text-center">{{ date('d/m/Y', strtotime($transaction->transactionable->date)) }}</td>
                                    @else
                                        <td class="text-sm font-weight-normal align-middle text-center">{{ date('d/m/Y', strtotime($transaction->transactionable->application_date)) }}</td>
                                    @endif
                                    <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
                                    <td class="text-sm font-weight-normal align-middle">003</td>
                                    <td class="text-sm font-weight-normal align-middle">Compra de {{ $transaction->transactionable->amount_usd}} USD</td>
                                    <td class="text-sm font-weight-normal align-middle">1</td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->amount_cop }}</td>
                                    <td class="text-sm font-weight-normal align-middle">
                                        <button class="btn btn-info btn-sm mb-0">Ver Detalles</button>
                                    </td>
                                </tr>
                            @endforeach                    
                        </tbody>
                    </table> 
                @elseif($report->report_type_id == 2) 
                    <table id="report" class="table table-striped" style="width:100%">                       
                        <thead class="thead-light">
                            <tr>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Tipo</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Encabezado</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo documento</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Numero</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Fecha factura</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Encabezado</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Ítem</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Descripción</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Cant</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Vr Unitario</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($transactions as $index => $transaction)
                                <tr>
                                    <td class="text-sm font-weight-normal align-middle">{{ substr($transaction->transactionable_type, 11) }}</td>
                                    <td class="text-sm font-weight-normal align-middle text-center">{{ $index + 1 }}</td>
                                    <td class="text-sm font-weight-normal align-middle text-center">
                                        @if($transaction->transactionable->user->doc_type == 'Cedula de ciudadania')
                                            CC
                                        @elseif($transaction->transactionable->user->doc_type == 'Cedula de extranjería')
                                            CE
                                        @elseif($transaction->transactionable->user->doc_type == 'Pasaporte')
                                            PS
                                        @elseif($transaction->transactionable->user->doc_type == 'NIT')
                                        NIT
                                        @else
                                            No tiene
                                        @endif
                                    </td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->user->doc_num }}</td>
                                    <td class="text-sm font-weight-normal align-middle text-center">{{ date('d/m/Y', strtotime($transaction->transactionable->completed_date)) }}</td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
                                    <td class="text-sm font-weight-normal align-middle">002</td>
                                    <td class="text-sm font-weight-normal align-middle">Venta de {{ $transaction->transactionable->amount_usd}} USD</td>
                                    <td class="text-sm font-weight-normal align-middle">1</td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->amount_cop }}</td>
                                    <td class="text-sm font-weight-normal align-middle">
                                        <button class="btn btn-info btn-sm mb-0">Ver Detalles</button>
                                    </td>
                                </tr>
                                <tr>
                                    <td class="text-sm font-weight-normal align-middle"></td>
                                    <td class="text-sm font-weight-normal align-middle text-center"></td>
                                    <td class="text-sm font-weight-normal align-middle text-center"></td>
                                    <td class="text-sm font-weight-normal align-middle"></td>
                                    <td class="text-sm font-weight-normal align-middle text-center"></td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
                                    <td class="text-sm font-weight-normal align-middle">001</td>
                                    <td class="text-sm font-weight-normal align-middle">Comisión 1.5% por servicio de intercambio</td>
                                    <td class="text-sm font-weight-normal align-middle">1</td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->comission }}</td>
                                    <td class="text-sm font-weight-normal align-middle"></td>
                                </tr>
                            @endforeach                    
                        </tbody>
                    </table> 
                @endif
            </div>
        </div>
    </div>
@endsection

@push('scripts')
<script src="{{ asset('js/jsDash/plugins/datatables.js') }}"></script>
@endpush

@push('script-plus')
    <script type="text/javascript">

        const dataTableSearch = new simpleDatatables.DataTable("#report", {
            searchable: true,
            fixedHeight: false,
            sortable: false
        });
        
        
        
    </script>
@endpush