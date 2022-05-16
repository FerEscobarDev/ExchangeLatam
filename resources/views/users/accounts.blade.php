@extends('layouts.layoutOld')
@section('titulo', 'Bank accounts - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.alertModalOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <x-tabOld />
    <div class="tab-pane work" id="bancos">
        <div class="row">
            @if (count(Auth::user()->accounts) > 0)
                <button data-toggle="modal" data-target="#registro_account" class="btn btn-success pull-right">
                        Cambiar
                </button>
            @endif
            <div class="col-md-12">
                <h3 class="title">Cuenta para retiros</h3>
                <div class="row">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            @if (count(Auth::user()->accounts) == 0)
                                <tr>
                                    <th class="text-center">Sin Datos Bancarios</th>
                                    <td>                                                   
                                        <a class="btn-sm btn-danger" data-toggle="modal" data-target="#registro_account">Añadir cuenta</a>
                                    </td>
                                </tr>
                            @else                               
                                <tr>
                                    <th class="text-center">Número de cuenta bancaria</th>
                                    <td>
                                        {{ $account->number }}
                                    </td>
                                    </tr>
                                    <tr>
                                    <th class="text-center">Tipo de cuenta</th>
                                    <td>
                                        {{ $account->type }}
                                    </td>
                                    </tr>
                                    <tr>
                                    <th class="text-center">Banco</th>
                                    <td>
                                        {{ $account->bank->name }}
                                    </td>
                                    </tr>
                                    <tr>
                                    <th class="text-center">Estado</th>
                                    <td>
                                        @if($account->active == 'Activa')
                                            <span class="text-success">Activa</span>
                                        @else
                                            <span class="text-danger">Inactiva</span>
                                        @endif
                                    </td>
                                </tr>
                            @endif                                    
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {{-- Modal registro de cuenta bancaria --}}
    <div class="modal fade" id="registro_account" tabindex="-1" role="dialog" aria-labelledby="#registro_account_label" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="card">
                        <div class="header header-info text-center">
                            <h6 class="card-title">Registro de cuenta bancaria</h6>
                        </div>
                        <div class="card-content">
                            <div class="row">
                                @if ( !(Auth::user()->verified == 0) )
                                    <div class="col-md-8 col-md-offset-2">
                                        <form class="form" method="POST" action="{{ route('users.registerAccount') }}">
                                            @csrf
                                            <div class="form-group">
                                                <label for="number">Número de cuenta:</label>
                                                <input type="number" class="form-control" required value="{{ old('number') }}" name="number">
                                                @error('number') 
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                <label>Seleccionar banco:</label>
                                                <select required="required" class="form-control" id="bank" name="bank">
                                                    <option value="">Seleccione el banco</option>
                                                    @foreach($banks as $bank)
                                                        <option value="{{ $bank->id }}" {{ old('bank') == $bank->id ? 'selected' : '' }}>{{ $bank->name }}</option>
                                                    @endforeach
                                                </select>
                                                @error('bank') 
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                <label>Seleccionar tipo de cuenta:</label>
                                                <select required="required" class="form-control" id="type" name="type">
                                                    <option value="">Seleccione el tipo de cuenta</option>
                                                    <option value="Cuenta de Ahorros" {{ old('type') == 'Cuenta de Ahorros' ? 'selected' : '' }}>Cuenta de Ahorros</option>
                                                    <option value="Cuenta corriente" {{ old('type') == 'Cuenta corriente' ? 'selected' : '' }}>Cuenta corriente</option>
                                                </select>                                          
                                                @error('type') 
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                <input class="btn btn-info" type="submit" value="Registrar">
                                            </div>
                                        </form>
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="alert alert-warning">
                                                    <div class="container-fluid text-center">
                                                        <div class="alert-icon">
                                                            <i class="material-icons">notification_important</i>
                                                        </div>
                                                        <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                                            <span aria-hidden="true"><i class="material-icons">clear</i></span>
                                                        </button>
                                                        <p><b>La información proporcionada sólo podrá ser actualizada cada 6 meses, por favor verifique que los datos sean correctos.</b></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @else
                                    <div class="col-md-8 col-md-offset-2">
                                        <div class="row">
                                            <div class="col-md-12">
                                                <div class="alert alert-warning">
                                                    <div class="container-fluid">
                                                        <div class="alert-icon">
                                                            <i class="material-icons">notification_important</i>
                                                        </div>
                                                        <p class="text-center"> <b>Atención!</b> Para poder registrar una cuenta bancaria debe actualizar sus datos personales y subir los documentos de validación de identidad.</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                @endif
                            </div>
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>

@endsection