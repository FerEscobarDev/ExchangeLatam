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
                                <th class="text-uppercase text-secondary text-sm opacity-7">Id</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Tipo</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo documento</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Numero</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Fecha factura</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Monto USD</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Precio USD</th>                                
                                <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($transactions as $index => $transaction)
                                <tr>
                                    <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
                                    @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')                                        
                                        <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->type }}</td>
                                    @else
                                        <td class="text-sm font-weight-normal align-middle">{{ substr($transaction->transactionable_type, 11) }}</td>
                                    @endif
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
                                    <td class="text-sm font-weight-normal align-middle">{{ number_format($transaction->transactionable->amount_usd, 2) }}</td>
                                    @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')                                          
                                        <td class="text-sm font-weight-normal align-middle">{{ number_format($transaction->transactionable->price_usd, 2) }}</td>
                                    @else
                                        <td class="text-sm font-weight-normal align-middle">{{ number_format($transaction->transactionable->total / $transaction->transactionable->amount_usd, 2) }}</td>
                                    @endif
                                    <td class="text-sm font-weight-normal align-middle">{{ number_format($transaction->transactionable->total) }}</td>
                                    <td class="text-sm font-weight-normal align-middle">    
                                        <button type="button" class="btn btn-info btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#details{{$transaction->id}}">Detalles de pago</button>
                                    </td>
                                    <div class="modal fade" id="details{{$transaction->id}}" tabindex="-1" role="dialog" aria-labelledby="details{{$transaction->id}}" aria-hidden="true">
                                        <div class="modal-dialog voucher" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title font-weight-normal">Detalles del pago</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body font-weight-light">
                                                    <div class="card mt-4">
                                                        <!-- Card image -->
                                                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                                            @if(substr($transaction->transactionable->voucher, -4) === '.pdf')                                                                     
                                                                    <object data="{{ asset('storage/' . $transaction->transactionable->voucher).'#zoom=150' }}" type="application/pdf" width="100%" height="700px">

                                                                    <p>Tu navegador no tiene el plugin para previsualizar documentos pdf.</p>
                                                                    <p>Puedes descargarte el archivo desde <a target="_blank" href="{{ asset('storage/' . $transaction->transactionable->voucher).'#zoom=150' }}">aquí</a></p>
                                                                    
                                                                    </object>
                                                                @else
                                                                    <img class="border-radius-lg w-100" src="{{ asset('storage/' . $transaction->transactionable->voucher) }}" alt="Comprobante">
                                                                @endif
                                                            <!-- List group -->
                                                            <ul class="list-group list-group-flush mt-2">
                                                                <li class="list-group-item"><b>Banco:  </b>{{$transaction->transactionable->account->bank->name}}</li>
                                                                <li class="list-group-item"><b>Cuenta:  </b>{{$transaction->transactionable->account->number}}</li> 
                                                                <li class="list-group-item"><b>Tipo:  </b>{{$transaction->transactionable->account->type}}</li> 
                                                                @if (substr($transaction->transactionable_type, 11) == 'Withdrawal') 
                                                                    @if (!empty($transaction->transactionable->comment))
                                                                        <li class="list-group-item"><b>Comentarios:  </b>{{$transaction->transactionable->comment}}</li>
                                                                    @endif
                                                                @endif
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </tr>
                            @endforeach                    
                        </tbody>
                    </table> 
                @elseif($report->report_type_id == 3) 
                    <table id="report" class="table table-striped" style="width:100%">                       
                        <thead class="thead-light">
                            <tr>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Id</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo documento</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Numero</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Nombres</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Fecha factura</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Acciones</th>
                                <th class="text-uppercase text-secondary text-sm opacity-7">Descripción</th>
                            </tr>
                        </thead>
                        <tbody>
                            @foreach ($transactions as $index => $transaction)
                                <tr>                                    
                                    <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
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
                                    <td class="text-sm font-weight-normal align-middle">
                                        <a href="{{route('admin.usersEditData', $transaction->transactionable->user->id)}}" target="_blank" class="text-info">
                                            {{ strtok($transaction->transactionable->user->name, " ")." ".strtok($transaction->transactionable->user->lastname, " ") }}
                                        </a>
                                    </td>
                                    <td class="text-sm font-weight-normal align-middle text-center">{{ date('d/m/Y', strtotime($transaction->transactionable->completed_date)) }}</td>
                                    <td class="text-sm font-weight-normal align-middle">{{ $transaction->transactionable->comission }}</td>
                                    <td class="text-sm font-weight-normal align-middle">
                                        <button type="button" class="btn btn-info btn-sm mb-0" data-bs-toggle="modal" data-bs-target="#details{{$transaction->id}}">Detalles de pago</button>
                                    </td>
                                    <td class="text-sm font-weight-normal align-middle">Venta de {{ number_format($transaction->transactionable->amount_usd, 2) }} USD, Comisión 1.5%</td>
                                    <div class="modal fade" id="details{{$transaction->id}}" tabindex="-1" role="dialog" aria-labelledby="details{{$transaction->id}}" aria-hidden="true">
                                        <div class="modal-dialog voucher" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title font-weight-normal">Detalles del pago</h5>
                                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                        <span aria-hidden="true">&times;</span>
                                                    </button>
                                                </div>
                                                <div class="modal-body font-weight-light">
                                                    <div class="card mt-4">
                                                        <!-- Card image -->
                                                        <div class="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                                            @if(substr($transaction->transactionable->voucher, -4) === '.pdf')                                                                     
                                                                    <object data="{{ asset('storage/' . $transaction->transactionable->voucher).'#zoom=150' }}" type="application/pdf" width="100%" height="700px">

                                                                    <p>Tu navegador no tiene el plugin para previsualizar documentos pdf.</p>
                                                                    <p>Puedes descargarte el archivo desde <a target="_blank" href="{{ asset('storage/' . $transaction->transactionable->voucher).'#zoom=150' }}">aquí</a></p>
                                                                    
                                                                    </object>
                                                                @else
                                                                    <img class="border-radius-lg w-100" src="{{ asset('storage/' . $transaction->transactionable->voucher) }}" alt="Comprobante">
                                                                @endif
                                                            <!-- List group -->
                                                            <ul class="list-group list-group-flush mt-2">
                                                                <li class="list-group-item"><b>Banco:  </b>{{$transaction->transactionable->account->bank->name}}</li>
                                                                <li class="list-group-item"><b>Cuenta:  </b>{{$transaction->transactionable->account->number}}</li> 
                                                                <li class="list-group-item"><b>Tipo:  </b>{{$transaction->transactionable->account->type}}</li> 
                                                                @if (substr($transaction->transactionable_type, 11) == 'Withdrawal') 
                                                                    @if (!empty($transaction->transactionable->comment))
                                                                        <li class="list-group-item"><b>Comentarios:  </b>{{$transaction->transactionable->comment}}</li>
                                                                    @endif
                                                                @endif
                                                            </ul>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="modal-footer">
                                                <button type="button" class="btn bg-gradient-secondary" data-bs-dismiss="modal">Close</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
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