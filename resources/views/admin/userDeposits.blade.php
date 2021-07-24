@extends('layouts.layoutAdminOld')
@section('titulo', 'User Deposits - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    {{-- Sección depósitos --}}
    <div class="tab-content">
        <div class="tab-pane active work">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="title">Listado de depositos</h3>
                    <div class="row">
                        <div class="table-responsive">
                            <table id="deposits_table" class="table table-striped table-bordered texto-centrado">
                                <thead>
                                    <tr>
                                        <th><i class="fa fa-hashtag"></i> Id</th>
                                        <th><i class="fa fa-hashtag"></i> Cuenta</th>
                                        <th><i class="fa fa-usd"></i> Monto USD</th>
                                        <th><i class="fa fa-usd"></i> Monto COP</th>
                                        <th><i class="fa fa-usd"></i> Total</th>
                                        <th><i class="fa fa-bank"></i> Banco</th>
                                        <th><i class="fa fa-calendar"></i> Fecha Solicitud</th>
                                        <th><i class="fa fa-exclamation-triangle"></i> Estado</th>
                                        <th><i class="fa fa-cog"></i> Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach($deposits as $deposit)
                                        <tr class="text-center">
                                            <td>{{ $deposit->id }}</td>
                                            <td>{{$deposit->fbs_account}}</td>
                                            <td><b>$</b> {{ number_format($deposit->amount_usd,0)}}</td>
                                            <td><b>$</b> {{ number_format($deposit->amount_cop,0)}}</td>
                                            <td><b>$</b> {{ number_format($deposit->total,0)}}</td>
                                            <td>{{$deposit->account->bank->name}}</td>
                                            <td>{{$deposit->application_date}}</td>
                                            @if ($deposit->status == "Realizado")
                                                <td class="text-success"><i class="fa fa-check"></i> Realizado</td>
                                            @elseif ($deposit->status == "Cancelado")
                                                <td class="text-danger"><i class="fa fa-times"></i> Cancelado</td>
                                            @else
                                                <td class="text-warning"><i class="fa fa-clock-o"></i> Pendiente</td>
                                            @endif
                                            <td class="td-actions">
                                                <button data-toggle="modal" data-target="#showdetailsmodal{{$deposit->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-info" title="Ver más detalles">
                                                    <i class="fa fa-info-circle"></i>
                                                </button>
                                                @if (isset($deposit->voucher))
                                                    <button data-toggle="modal" data-target="#vercomprobante{{$deposit->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-primary" title="Ver comprobante">
                                                        <i class="fa fa-eye"></i>
                                                    </button>
                                                @else
                                                    <button type="button" disabled rel="tooltip" data-placement="top" class="btn btn-primary">
                                                        <i class="fa fa-eye"></i>
                                                    </button>
                                                @endif
                                                <button data-toggle="modal" data-target="#change_status_deposit{{$deposit->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-warning" title="Cambiar estado">
                                                    <i class="fa fa-refresh"></i>
                                                </button>
                                                <button data-toggle="modal" data-target="#del_deposit{{$deposit->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-danger" title="Eliminar deposito">
                                                    <i class="fa fa-trash"></i>
                                                </button>
                                            </td>
                                        </tr>
                                        {{-- Modal detalles del depósito --}}
                                        <div class="modal fade" id="showdetailsmodal{{$deposit->id}}" tabindex="-1" role="dialog" aria-labelledby="#uploadsupportlabel{{$deposit->id}}" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <div class="card">
                                                            <div class="header header-info text-center">
                                                                <h6 class="card-title">DETALLES DEPOSITO</h6>
                                                            </div>
                                                            <div class="card-content">
                                                                <p><b>Fecha cambio de estado:</b> {{$deposit->completed_date}}</p><hr>
                                                                <p><b>Comisión:</b> + $ {{ number_format($deposit->comission,0)}}</p><hr>
                                                                <p><b>IVA:</b> + $ {{ number_format($deposit->iva,0)}}</p><hr>                                                                                
                                                                <p><b>Descuento VIP:</b> - $ {{ number_format($deposit->rebate,0)}}</p><hr>
                                                                <p><b>Comentarios:</b>
                                                                    @if (empty($deposit->comment))
                                                                        No existen comentarios para este deposito.
                                                                    @else
                                                                        {{ $deposit->comment }}
                                                                    @endif
                                                                </p><hr>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {{-- Modal ver comprobante --}} 
                                        <div class="modal fade" id="vercomprobante{{$deposit->id}}" tabindex="-1" aria-labelledby="#vercomprobantelabel{{$deposit->id}}" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <div class="card">
                                                            <div class="header header-info text-center">
                                                            <h6 class="card-title">COMPROBANTE</h6>
                                                            </div>
                                                            <div class="card-content">
                                                            @if( isset($deposit->voucher) )
                                                                @if(substr($deposit->voucher, -4) === '.pdf')                                                                     
                                                                    <object data="{{ asset('storage/'.$deposit->voucher.'#zoom=150') }}" type="application/pdf" width="100%" height="700px">

                                                                        <p>Tu navegador no tiene el plugin para previsualizar documentos pdf.</p>
                                                                        <p>Puedes descargarte el archivo desde <a href="{{ asset('storage/'.$deposit->voucher) }}">aquí</a></p>
                                                                        
                                                                    </object>
                                                                @else
                                                                    <img src="{{ asset('storage/'.$deposit->voucher) }}" alt="" title="" />
                                                                @endif
                                                            @endif
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <!--MODAL CHANGE STATUS DEPOSIT-->
                                        <div class="modal fade" id="change_status_deposit{{$deposit->id}}" tabindex="-1" role="dialog" aria-labelledby="#change_status_deposit_label{{$deposit->id}}" aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <form class="form" method="POST" action="{{ route('admin.statusDeposit', $deposit) }}">
                                                        @csrf
                                                        <div class="modal-body">
                                                            <div class="card">
                                                                <div class="header header-info text-center">
                                                                    <h6 class="card-title">cambio de estado deposito</h6>
                                                                </div>
                                                                <div class="card-content">
                                                                    <input type="hidden" value="{{$deposit->id}}" name="idd">
                                                                    <div class="form-group">
                                                                        <select required="required" class="form-control" name="status" id="status{{$deposit->id}}">
                                                                            <option value="">Seleccionar estado</option>
                                                                            <option value="Cancelado">Cancelado</option>
                                                                            <option value="Realizado">Realizado</option>
                                                                            <option value="Pendiente">Pendiente</option>
                                                                        </select>
                                                                    </div>
                                                                    <div class="form-group">
                                                                        <label for="comments"></label>
                                                                        <textarea class="form-control" id="comments{{$deposit->id}}" name="comments" placeholder="Escribe un comentario (opcional)"></textarea>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                            <button type="submit" class="btn btn-primary">Cambiar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        <!--MODAL ELIMINAR-->
                                        <div class="modal fade" id="del_deposit{{$deposit->id}}" tabindex="-1" role="dialog" aria-labelledby="#del_deposit_label{{$deposit->id}}" aria-hidden="true">
                                            <div class="modal-dialog modal-small" role="document">
                                                <div class="modal-content">
                                                    <form class="form" method="POST" action="{{ route('admin.destroyDeposit', $deposit) }}">
                                                        @method('delete')
                                                        @csrf
                                                        <div class="modal-body">
                                                            <div class="text-center">
                                                            <h5>Estas seguro de que deseas eliminar este deposito?</h5>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer text-center">
                                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                            <button type="submit" class="btn btn-danger">Eliminar</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="text-center">
                            {{$deposits->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js-1')
    
@endpush