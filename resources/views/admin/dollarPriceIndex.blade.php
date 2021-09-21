@extends('layouts.layoutAdminOld')
@section('titulo', 'Dollar Price - ')
@section('content')
    <h3 class="title">Listado del precio del dólar</h3><br>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="row">
        <button data-toggle="modal" data-target="#addPrice" class="btn btn-success pull-right">
            Add Price
        </button>                                                        
    </div>
    <div class="row">
        <div class="table-responsive">
            <table id="deposits_table" class="table table-striped table-bordered texto-centrado">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Fecha</th>
                        <th>Depósitos</th>
                        <th>Retiros</th>
                        <th class=""><i class="fa fa-cog"></i> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($dollarPrices as $dollarPrice)
                        <tr class="text-center">
                            <td>{{ $dollarPrice->id }}</td>
                            <td>{{ $dollarPrice->date }}</td>
                            <td>{{ $dollarPrice->dollar_buy }}</td>
                            <td>{{ $dollarPrice->dollar_sell }}</td>
                            <td class="">
                                @if ($dollarPrice->date <= $hoy)
                                    <button disabled type="button" data-toggle="modal" data-target="#addPrice{{ $dollarPrice->id }}" class="btn btn-warning">Editar</button>
                                    <button disabled type="button" data-toggle="modal" data-target="#destroyDollarPrice{{ $dollarPrice->id }}" class="btn btn-danger">Eliminar</button>
                                @else
                                    <button type="button" data-toggle="modal" data-target="#addPrice{{ $dollarPrice->id }}" class="btn btn-warning">Editar</button>
                                    <button type="button" data-toggle="modal" data-target="#destroyDollarPrice{{ $dollarPrice->id }}" class="btn btn-danger">Eliminar</button>
                                @endif
                            </td>
                        </tr>
                        {{-- Modal update --}}
                        <div class="modal fade" id="addPrice{{ $dollarPrice->id }}" tabindex="-1" role="dialog" aria-labelledby="#addPrice" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"><strong>Editar Precio</strong></h5>
                                    </div>
                                    <form class="form" method="POST" action="{{ route('admin.dollarPriceUpdate', $dollarPrice) }}">
                                        @method('PUT')
                                        @csrf
                                        <div class="modal-body text-left">
                                            <div class="form-group">
                                                <label class="control-label">Fecha</label>
                                                <input required="required" type="date" class="form-control" name="date" value="{{old('date' ,$dollarPrice->date)}}">
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">Precio depósitos</label>
                                                <input required="required" type="number" class="form-control" name="dollar_buy" value="{{old('dollar_buy' ,$dollarPrice->dollar_buy)}}">
                                            </div>
                                            <div class="form-group">
                                                <label class="control-label">Precio retiros</label>
                                                <input required="required" type="number" class="form-control" name="dollar_sell" value="{{old('dollar_sell' ,$dollarPrice->dollar_sell)}}">
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
                        <div class="modal fade" id="destroyDollarPrice{{ $dollarPrice->id }}" tabindex="-1" role="dialog" aria-labelledby="#destroyDollarPrice{{ $dollarPrice->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-small" role="document">
                                <div class="modal-content">
                                    <form class="form" method="POST" action="{{ route('admin.dollarPriceDestroy', $dollarPrice) }}">
                                        @method('delete')
                                        @csrf
                                        <div class="modal-body">
                                            <div class="text-center">
                                                <h5>Esta seguro de que desea eliminar este precio?</h5>
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
                {{ $dollarPrices->links() }}
            </div>
        </div>
    </div> <br><br>
    {{-- Modal create --}}
    <div class="modal fade" id="addPrice" tabindex="-1" role="dialog" aria-labelledby="#addPrice" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><strong>Agregar Precio del Dolar</strong></h5>
                </div>
                <form class="form" method="POST" action="{{ route('admin.dollarPriceStore') }}">
                    @csrf
                    <div class="modal-body text-left">
                        <div class="form-group">
                            <label class="control-label">Fecha</label>
                            <input required="required" type="date" class="form-control" name="date">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Precio depósitos</label>
                            <input required="required" type="number" class="form-control" name="dollar_buy">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Precio retiros</label>
                            <input required="required" type="number" class="form-control" name="dollar_sell">
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