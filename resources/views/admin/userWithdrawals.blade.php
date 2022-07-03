@extends('layouts.layoutAdminOld')
@section('titulo', 'User Withdrawals - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    <div class="tab-pane work" id="retiros">
        <div class="row">
            <div class="col-md-12">

                <h3 class="title">Listado de retiros</h3>
                <div class="row">
                    <button data-toggle="modal" data-target="#rg_retiro_modal" class="btn btn-success pull-right">
                        Registrar retiro
                    </button>                                                        
                </div>
                <div class="row">
                    <div class="table-responsive">
                        <table id="retiros_table" class="table table-striped table-bordered texto-centrado">
                            <thead>
                                <tr>
                                    <th><i class="fa fa-hashtag"></i> Id</th>
                                    <th>Broker</th>
                                    <th><i class="fa fa-hashtag"></i> Cuenta</th>
                                    <th><i class="fa fa-usd"></i> Monto USD</th>
                                    <th><i class="fa fa-usd"></i> Monto COP</th>
                                    <th><i class="fa fa-usd"></i> Total</th>
                                    <th><i class="fa fa-bank"></i> Banco</th>
                                    <th><i class="fa fa-calendar"></i> Fecha limite</th>
                                    <th><i class="fa fa-exclamation-triangle"></i> Estado</th>
                                    <th><i class="fa fa-cog"></i> Acciones</th>
                                </tr>
                            </thead>
                            <tbody>
                                @foreach($withdrawals as $withdrawal)
                                    <tr class="text-center">
                                        <td>{{ $withdrawal->id }}</td>
                                        <td>{{$withdrawal->tradingAccount->broker->name}}</td>
                                        <td>{{$withdrawal->tradingAccount->number}}</td>
                                        <td><b>$</b> {{ number_format($withdrawal->amount_usd,2)}}</td>
                                        <td><b>$</b> {{ number_format($withdrawal->amount_cop,0)}}</td>
                                        <td><b>$</b> {{ number_format($withdrawal->total,0)}}</td>
                                        <td class="td-actions">
                                            @if($withdrawal->account->type != 'No_disponible')
                                                <button 
                                                    type="button" 
                                                    data-toggle="popover" 
                                                    {{-- data-trigger="focus"  --}}
                                                    data-placement="top" 
                                                    @if($withdrawal->account->enrolled == '1') data-title='<p class="text-success"><b>Cuenta inscrita</b></p>' @else data-title='<p class="text-danger"><b>Cuenta no inscrita</b></p>' @endif
                                                    @if ($withdrawal->user->dataUser->doc_type == 1)
                                                        data-content='<p class="text-primary"><b>{{$user->name." ".$user->lastname}}</b><p><b>Documento:</b>Cédula de ciudadanía</p></p><p><b>Número:</b> {{$user->dataUser->doc_num}}</p><p><b>Cuenta:</b> {{$withdrawal->account->number}}</p><p><b>Tipo:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                                    @elseif($withdrawal->user->dataUser->doc_type == 2)
                                                        data-content='<p class="text-primary"><b>{{$user->name." ".$user->lastname}}</b><p><b>Documento:</b>Cédula de extranjería</p></p><p><b>Número:</b> {{$user->dataUser->doc_num}}</p><p><b>Cuenta:</b> {{$withdrawal->account->number}}</p><p><b>Tipo:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                                    @elseif($withdrawal->user->dataUser->doc_type == 3)
                                                        data-content='<p class="text-primary"><b>{{$user->name." ".$user->lastname}}</b><p><b>Documento:</b>Pasaporte</p></p><p><b>Número:</b> {{$user->dataUser->doc_num}}</p><p><b>Cuenta:</b> {{$withdrawal->account->number}}</p><p><b>Tipo:</b> {{$withdrawal->account->type}}</p><p><b>Banco:</b> {{$withdrawal->account->bank->name}}</p>'
                                                    @endif
                                                    class="btn btn-info"> 
                                                        {{$withdrawal->account->bank->name}} 
                                                </button>
                                            @else
                                                <button 
                                                    type="button" 
                                                    data-toggle="popover" 
                                                    {{-- data-trigger="focus" --}} 
                                                    data-placement="top" 
                                                    data-title='<p class="text-danger"><b>No disponible</b></p>' 
                                                    data-content="No hay datos de cuenta disponibles para este retiro" 
                                                    class="btn btn-info"> 
                                                        {{$withdrawal->account->type}} 
                                                </button>
                                            @endif
                                        </td>
                                        <td>{{date('Y-m-d', strtotime(date($withdrawal->expiration_date)))}}</td>
                                        @if ($withdrawal->status == "Realizado")
                                            <td class="text-success"><i class="fa fa-check"></i> Realizado</td>
                                        @elseif ($withdrawal->status == "Cancelado")
                                            <td class="text-danger"><i class="fa fa-times"></i> Cancelado</td>
                                        @else
                                            <td class="text-warning"><i class="fa fa-clock-o"></i> Pendiente</td>
                                        @endif
                                        <td class="td-actions">
                                            <button data-toggle="modal" data-target="#showdetailsmodal{{$withdrawal->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-info" title="Ver más detalles">
                                                <i class="fa fa-info-circle"></i>
                                            </button>
                                            @if (empty($withdrawal->voucher))
                                                <button data-toggle="modal" data-target="#retiroupload{{$withdrawal->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-info" title="Subir comprobante">
                                                    <i class="fa fa-upload"></i>
                                                </button>
                                            @else
                                                <button data-toggle="modal" data-target="#vercomprobante{{$withdrawal->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-primary" title="Ver comprobante">
                                                    <i class="fa fa-eye"></i>
                                                </button>
                                            @endif
                                            <button data-toggle="modal" data-target="#change_status_retiro{{$withdrawal->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-warning" title="Cambiar estado">
                                                <i class="fa fa-refresh"></i>
                                            </button>
                                            <button data-toggle="modal" data-target="#del_retiro{{$withdrawal->id}}" type="button" rel="tooltip" data-placement="top" class="btn btn-danger" title="Eliminar retiro">
                                                <i class="fa fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                    <div class="modal fade" id="showdetailsmodal{{$withdrawal->id}}" tabindex="-1" role="dialog" aria-labelledby="#uploadsupportlabel{{$withdrawal->id}}" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <div class="card">
                                                        <div class="header header-info text-center">
                                                        <h6 class="card-title">DETALLES RETIRO</h6>
                                                        </div>
                                                        <div class="card-content">
                                                            <p><b>Fecha de aprobación por FBS:</b> {{$withdrawal->application_date}} {{--date('Y-m-d', strtotime(date($retiro->fecha_solicitud)))--}}</p><hr>
                                                            <p><b>Fecha de realización:</b> {{$withdrawal->completed_date}}</p><hr>
                                                            <p><b>comisión:</b> - $ {{ number_format($withdrawal->comission,0)}}</p><hr>
                                                            <p><b>4 X 1000:</b> - $ {{ number_format($withdrawal->cuatro_por_mil,0)}}</p><hr>
                                                            <p><b>Reembolso VIP:</b> + $ {{ number_format($withdrawal->rebate,0)}}</p><hr>
                                                            <p><b>Comentarios:</b>
                                                                @if (empty($withdrawal->comment))
                                                                    No existen comentarios para este retiro.
                                                                @else
                                                                    {{ $withdrawal->comment }}
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
                                    {{-- Modal subir comprobante --}}
                                    <div class="modal fade" id="retiroupload{{$withdrawal->id}}" tabindex="-1" role="dialog" aria-labelledby="#uploadsupportlabel{{$withdrawal->id}}" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h5 class="modal-title" id="uploadsupportlabel{{$withdrawal->id}}"><strong>SUBIDA DE COMPROBANTE</strong></h5>
                                                </div>
                                                <form action="{{ route('admin.voucherUpWithdrawal', $withdrawal) }}" method="POST" enctype="multipart/form-data">
                                                    @csrf
                                                    <div class="modal-body">
                                                        <div class="form-group ">
                                                        <input type="file" name="voucher" id="inputFile{{$withdrawal->id}}">
                                                        <div class="input-group">
                                                            <span class="input-group-btn input-group-sm">
                                                                <button type="button" class="btn btn">
                                                                    <i class="material-icons">attach_file</i>
                                                                </button>
                                                            </span>
                                                            <input type="text" readonly="" class="form-control" placeholder="Seleccionar archivo...">
                                                        </div>
                                                        </div>
                                                        <p class="text-muted"><small>Sólo se permiten archivos de imagen con extension JPG, JPEG o PNG.</small></p>
                                                    </div>
                                                    <div class="modal-footer">
                                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                                        <button type="submit" class="btn btn-primary"><i class="fa fa-upload"></i> Subir</button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>

                                    {{-- Modal ver comprobante --}} 
                                    <div class="modal fade" id="vercomprobante{{$withdrawal->id}}" tabindex="-1" aria-labelledby="#vercomprobantelabel{{$withdrawal->id}}" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <div class="modal-body">
                                                <div class="card">
                                                    <div class="header header-info text-center">
                                                    <h6 class="card-title">COMPROBANTE</h6>
                                                    </div>
                                                    <div class="card-content">
                                                    @if( isset($withdrawal->voucher) )
                                                        @if(substr($withdrawal->voucher, -4) === '.pdf')                                                                     
                                                            <object data="{{ asset('storage/'.$withdrawal->voucher.'#zoom=150') }}" type="application/pdf" width="100%" height="700px">

                                                                <p>Tu navegador no tiene el plugin para previsualizar documentos pdf.</p>
                                                                <p>Puedes descargarte el archivo desde <a href="{{ asset('storage/'.$withdrawal->voucher) }}">aquí</a></p>
                                                                
                                                            </object>
                                                        @else
                                                            <img src="{{ asset('storage/'.$withdrawal->voucher) }}" alt="" title="" />
                                                        @endif
                                                    @endif
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                    {{-- Modal cambio de estado --}}
                                    <div class="modal fade" id="change_status_retiro{{$withdrawal->id}}" tabindex="-1" role="dialog" aria-labelledby="#change_status_retiro_label{{$withdrawal->id}}" aria-hidden="true">
                                        <div class="modal-dialog" role="document">
                                        <div class="modal-content">
                                            <form class="form" method="POST" action="{{ route('admin.statusWithdrawal', $withdrawal) }}">
                                                @csrf
                                                <div class="modal-body">
                                                    <div class="card">
                                                    <div class="header header-info text-center">
                                                        <h6 class="card-title">cambio de estado retiro</h6>
                                                    </div>
                                                    <div class="card-content">
                                                        <div class="form-group">
                                                            <select required="required" class="form-control" name="status" id="status{{$withdrawal->id}}">
                                                                <option value="">Seleccionar estado</option>
                                                                <option value="Cancelado">Cancelado</option>
                                                                <option value="Realizado">Realizado</option>
                                                                <option value="Pendiente">Pendiente</option>
                                                            </select>
                                                        </div>
                                                        <div class="form-group">
                                                            <label for="comment"></label>
                                                            <textarea class="form-control" id="comment{{$withdrawal->id}}" name="comment" placeholder="Escribe un comentario (opcional)"></textarea>
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
                                    <div class="modal fade" id="del_retiro{{$withdrawal->id}}" tabindex="-1" role="dialog" aria-labelledby="#del_retiro_label{{$withdrawal->id}}" aria-hidden="true">
                                        <div class="modal-dialog modal-small" role="document">
                                            <div class="modal-content">
                                                <form class="form" method="POST" action="{{ route('admin.destroyWithdrawal', $withdrawal) }}">
                                                    @method('delete')
                                                    @csrf
                                                    <div class="modal-body">
                                                        <div class="text-center">
                                                        <h5>Estas seguro de que deseas eliminar este retiro?</h5>
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
                            {{ $withdrawals->links() }}
                        </div>
                    </div>
                </div>
                {{-- Modal registrar retiro --}}
                <div class="modal fade" id="rg_retiro_modal" tabindex="-1" role="dialog" aria-labelledby="#rgretiro" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="rgretiro"><strong>REGISTRO RETIRO</strong></h5>
                            </div>
                            <form class="form" method="POST" action="{{route('admin.storeWithdrawal')}}">
                                @csrf
                                <div class="modal-body text-left">
                                    <input type="hidden" name="user_id" value="{{ $user->id }}">
                                    <div class="form-group">
                                        <label class="control-label">Broker</label>
                                        <select required="required" class="form-control" name="broker_id" id="broker_id">
                                            <option value="2" selected>Pepperstone</option>
                                            <option value="1">FBS</option>
                                            <option value="2">Pepperstone</option>
                                        </select>
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Cuenta de Trading</label>
                                        <input required="required" type="text" class="form-control" id="tradingAccount" name="tradingAccount">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Monto en USD</label>
                                        <input required="required" type="text" class="form-control" name="amount_usd">
                                    </div>
                                    {{-- <div class="form-group">
                                        <label class="control-label">Monto en COP</label>
                                        <input required="required" type="text" class="form-control" id="monto_cop" name="monto_cop">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">4x1000</label>
                                        <input required="required" type="text" class="form-control" id="comision" name="cuatropormil">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Reembolso VIP</label>
                                        <input required="required" type="text" class="form-control" id="descuento" name="descuento">
                                    </div>
                                    <div class="form-group">
                                        <label class="control-label">Total</label>
                                        <input required="required" type="number" class="form-control" id="total" name="total">
                                    </div> --}}
                                    <div class="form-group">
                                        <label class="control-label">Fecha de aprobación</label>
                                        <input required="required" type="datetime-local" class="form-control" id="application_date" name="application_date">
                                    </div>
                                    {{-- <div class="form-group">
                                        <label class="control-label">Hora de aprobación</label>
                                        <input required="required" type="time" class="form-control" id="hora_solicitud" name="hora_solicitud">
                                    </div> --}}
                                    <div class="form-group">
                                        <label class="control-label">Fecha plazo de entrega</label>
                                        <input required="required" type="date" class="form-control" id="expiration_date" name="expiration_date">
                                    </div>
                                    <div class="form-group">
                                        <select required="required" class="form-control" name="status" id="status">
                                            <option value="Pendiente" selected>Pendiente</option>
                                            <option value="Cancelado">Cancelado</option>
                                            <option value="Realizado">Realizado</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" class="btn btn-primary">Registrar <i class="material-icons">arrow_upward</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
@endsection
@push('js-1')
    <script type="text/javascript">
        $(function () {
            $('[data-toggle="popover"]').popover({
                html:true,
            })
        })
    </script>
@endpush