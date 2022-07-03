@extends('layouts.layoutAdminOld')
@section('titulo', 'User Accounts - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    <div class="tab-pane work" id="bancos">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title">Cuentas para retiros</h3>
                <div class="row">
                    <button data-toggle="modal" data-target="#registro_account" class="btn btn-success pull-right">
                        Añadir
                    </button>                                                        
                </div>
                <div class="row">
                    <div class="table-responsive">
                        <table class="table table-striped">
                            @if (count($user->accounts) == 0)
                                <tr>
                                    <th class="text-center">Sin Datos Bancarios</th>
                                </tr>
                            @else
                                @foreach ($user->accounts as $account)                                  
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
                                    <tr>
                                        <th class="text-center">Cuenta inscrita</th>
                                        @if($account->enrolled == 1)
                                           <td class="text-success">SI</td>
                                        @else
                                           <td class="text-danger">
                                                NO - 
                                                <a class="text-muted" onclick="event.preventDefault(); document.getElementById('registered-in-bank').submit();">
                                                    <form id="registered-in-bank" action="{{ route('admin.enrolledAccount', $account) }}" method="POST" style="display: none;">@method('put') @csrf </form>
                                                    <strong>INSCRIBIR</strong>
                                                </a>
                                            </td>
                                        @endif
                                        
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td><a data-toggle="modal" data-target="#update_account{{ $account->id }}" class="btn btn-warning btn-sm">Editar</a></td>
                                    </tr>
                                    {{-- Modal actualización de cuenta bancaria --}}
                                    <div class="modal fade" id="update_account{{ $account->id }}" tabindex="-1" role="dialog" aria-labelledby="#update_account_label{{ $account->id }}" aria-hidden="true">
                                        <div class="modal-dialog modal-lg" role="document">
                                            <div class="modal-content">
                                                <div class="modal-body">
                                                    <div class="card">
                                                        <div class="header header-info text-center">
                                                            <h6 class="card-title">Actualización de cuenta bancaria</h6>
                                                        </div>
                                                        <div class="card-content">
                                                            <div class="row">
                                                                <div class="col-md-8 col-md-offset-2">
                                                                    <form class="form" method="POST" action="{{ route('admin.updateAccount', $account) }}">
                                                                        @csrf
                                                                        <div class="form-group">
                                                                            <label for="number">Número de cuenta bancaria:</label>
                                                                            <input type="number" class="form-control" required value="{{ old('number', $account->number) }}" name="number">
                                                                            @error('number') 
                                                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                                            @enderror
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Seleccionar banco:</label>
                                                                            <select required="required" class="form-control" name="bank_id">
                                                                                {{-- <option value="{{ $account->bank_id }}">Actual - {{ $account->bank->name }}</option> --}}
                                                                                @foreach($banks as $bank)
                                                                                    <option value="{{ $bank->id }}" {{ old('bank_id', $account->bank_id) == $bank->id ? 'selected' : '' }}>{{ $bank->name }}</option>
                                                                                @endforeach
                                                                            </select>                                    
                                                                            @error('bank_id') 
                                                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                                            @enderror
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Seleccionar tipo de cuenta:</label>
                                                                            <select required="required" class="form-control" name="type">
                                                                                {{-- <option value="{{ $account->type }}">Actual - {{ $account->type }}</option> --}}
                                                                                <option value="Cuenta de Ahorros" {{ old('type', $account->type) == 'Cuenta de Ahorros' ? 'selected' : '' }}>Cuenta de Ahorros</option>
                                                                                <option value="Cuenta corriente" {{ old('type', $account->type) == 'Cuenta corriente' ? 'selected' : '' }}>Cuenta corriente</option>
                                                                            </select>
                                                                            @error('tipo_cuenta') 
                                                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                                            @enderror
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <label>Estado de la cuenta:</label>
                                                                            <select required="required" class="form-control" name="active">
                                                                                <option value="{{ $account->active }}">Actual - {{ $account->active }}</option>
                                                                                <option value="Activa" {{ old('active') == 'Activa' ? 'selected' : '' }}>Activar</option>
                                                                            </select>
                                                                        </div>
                                                                        <div class="form-group">
                                                                            <input class="btn btn-info" type="submit" value="Actualizar">
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
                                                                                    <p><b>Recuerde señor administrador que la información solo se debe actualizar por un error en la cuenta, no para cambiarla por una nueva.</b></p>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
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
                                        
                                @endforeach
                            @endif                                    
                        </table>
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
                                            @if ( !($user->requirementUser->verified == 0) )
                                                <div class="col-md-8 col-md-offset-2">
                                                    <form class="form" method="POST" action="{{ route('admin.storeAccount') }}">
                                                        @csrf
                                                        <input type="hidden" name="user_id" value="{{ $user->id }}">
                                                        <div class="form-group">
                                                            <label for="number">Número de cuenta:</label>
                                                            <input type="number" class="form-control" required value="{{ old('number') }}" name="number">
                                                            @error('number') 
                                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                            @enderror
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Seleccionar banco:</label>
                                                            <select required="required" class="form-control" name="bank_id">
                                                                <option value="">Seleccione el banco</option>
                                                                @foreach($banks as $bank)
                                                                    <option value="{{ $bank->id }}" {{ old('bank_id') == $bank->id ? 'selected' : '' }}>{{ $bank->name }}</option>
                                                                @endforeach
                                                            </select>
                                                            @error('bank_id') 
                                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                            @enderror
                                                        </div>
                                                        <div class="form-group">
                                                            <label>Seleccionar tipo de cuenta:</label>
                                                            <select required="required" class="form-control" name="type">
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
                                                                <p><b>Recuerde señor administrador que sólo debe registrar una cuenta nueva si es requerido y debidamente justificado por el cliente.</b></p>
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
                                                            <p class="text-center"> <b>Atención!</b> Para poder registrar una cuenta bancaria el cliente debe actualizar los datos personales y subir los documentos de validación de identidad.</p>
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
            </div>
        </div>
    </div>

@endsection
@push('js-1')
    
@endpush