@extends('layouts.layoutAdminOld')
@section('titulo', 'Rates - ')
@section('content')
    <h3 class="title">Listado de ofertas</h3><br>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="row">
        <button data-toggle="modal" data-target="#addRate" class="btn btn-success pull-right">
            Add Oferta
        </button>                                                        
    </div>
    <div class="row">
        <div class="table-responsive">
            <table id="rate_table" class="table table-striped table-bordered texto-centrado">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Comisión</th>
                        <th>Tasa de cambio VIP</th>
                        <th class=""><i class="fa fa-cog"></i> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($rates as $rate)
                        <tr class="text-center">
                            <td>{{ $rate->id }}</td>
                            <td>{{ $rate->date }}</td>
                            <td>{{ $rate->comission_all }}</td>
                            <td>{{ $rate->vip_rate }}</td>
                            <td class="">
                                @if ($rate->date <= $hoy)
                                    <button disabled type="button" data-toggle="modal" data-target="#updateRate{{ $rate->id }}" class="btn btn-warning">Editar</button>
                                    <button disabled type="button" data-toggle="modal" data-target="#destroyRate{{ $rate->id }}" class="btn btn-danger">Eliminar</button>
                                @else
                                    <button type="button" data-toggle="modal" data-target="#updateRate{{ $rate->id }}" class="btn btn-warning">Editar</button>
                                    <button type="button" data-toggle="modal" data-target="#destroyRate{{ $rate->id }}" class="btn btn-danger">Eliminar</button>
                                @endif
                            </td>
                        </tr>
                        {{-- Modal update --}}
                        <div class="modal fade" id="updateRate{{ $rate->id }}" tabindex="-1" role="dialog" aria-labelledby="#updateRate" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"><strong>Editar Oferta</strong></h5>
                                    </div>
                                    <form class="form" method="POST" action="{{ route('admin.rateUpdate', $rate) }}">
                                        @method('PUT')
                                        @csrf
                                        <div class="modal-body text-left">
                                            <div class="form-group">
                                                <label class="control-label">Fecha</label>
                                                <input required="required" type="date" class="form-control" name="date" value="{{old('date' ,$rate->date)}}">
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">Comisión</label>
                                                <input required="required" type="text" class="form-control" name="comission_all" value="{{old('comission_all' ,$rate->comission_all)}}">
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">Tasa de Cambio VIP</label>
                                                <input required="required" type="number" class="form-control" name="vip_rate" value="{{old('vip_rate' ,$rate->vip_rate)}}">
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btn-primary">Actualizar <i class="material-icons">arrow_upward</i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {{-- Modal destroy --}}
                        <div class="modal fade" id="destroyRate{{ $rate->id }}" tabindex="-1" role="dialog" aria-labelledby="#destroyRate{{ $rate->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-small" role="document">
                                <div class="modal-content">
                                    <form class="form" method="POST" action="{{ route('admin.rateDestroy', $rate) }}">
                                        @method('delete')
                                        @csrf
                                        <div class="modal-body">
                                            <div class="text-center">
                                                <h5>Esta seguro de que desea eliminar esta oferta?</h5>
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
                {{ $rates->links() }}
            </div>
        </div>
    </div> <br><br>
    {{-- Modal create --}}
    <div class="modal fade" id="addRate" tabindex="-1" role="dialog" aria-labelledby="#addRate" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><strong>Agregar Oferta</strong></h5>
                </div>
                <form class="form" method="POST" action="{{ route('admin.rateStore') }}">
                    @csrf
                    <div class="modal-body text-left">
                        <div class="form-group">
                            <label class="control-label">Fecha</label>
                            <input required="required" type="date" class="form-control" name="date">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Comisión</label>
                            <input required="required" type="text" class="form-control" name="comission_all">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Tasa de cambio VIP</label>
                            <input required="required" type="number" class="form-control" name="vip_rate">
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
@endsection