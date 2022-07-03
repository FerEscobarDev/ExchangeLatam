@extends('layouts.layoutAdminOld')
@section('titulo', 'User Verification - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    <div class="tab-pane work" id="datos">
        <div class="row">
            <div class="col-md-12 text-center">
                <h3 class="title">Verificación de identidad</h3>
            </div>
            <div class="card">
                <div class="card-content">
                    <div class="row text-center">
                        <div class="col-md-6">
                            <h4>Documento - Frontal</h4>
                            <img src="{{ asset('storage/'.$user->verification->front) }}" class="img-responsive">
                        </div>
                        <div class="col-md-6">
                            <h4>Documento - Reverso</h4>
                            <img src="{{ asset('storage/'.$user->verification->back) }}" class="img-responsive">
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="card-content">
                            <h5 class="card-title">Datos registrados</h5>
                            <form class="form" method="POST" action="{{ route('admin.userUpdate', $user) }}">
                                @method('put')
                                @csrf
                                <input type="hidden" name="verification" value="true">
                                <div class="form-group label-floating">
                                    <label for="name" class="control-label">Nombre</label>
                                    <input type="text" class="form-control" name="name" value="{{ old('name', $user->name) }}">
                                    @error('name') 
                                        <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                    @enderror
                                </div>
                                <div class="form-group label-floating">
                                    <label for="lastname" class="control-label">Apellido</label>
                                    <input type="text" class="form-control" name="lastname" value="{{ old('lastname', $user->lastname) }}">
                                    @error('lastname') 
                                        <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                    @enderror
                                </div>
                                <div class="form-group">                                    
                                    <label for="doc_num" class="control-label">Tipo de documento</label>
                                    <select class="selectpicker " data-style="select-with-transition" name="doc_type">
                                        <option value="1" {{ old('doc_type', $user->dataUser->doc_type) == '1' ? 'selected' : '' }}>Cedula de ciudadania</option>
                                        <option value="3" {{ old('doc_type', $user->dataUser->doc_type) == '3' ? 'selected' : '' }}>Pasaporte</option>
                                        <option value="2" {{ old('doc_type', $user->dataUser->doc_type) == '2' ? 'selected' : '' }}>Cedula de extranjería</option>
                                    </select>
                                    @error('doc_type') 
                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                    @enderror
                                </div>                                                        
                                <div class="form-group label-floating">
                                    <label for="doc_num" class="control-label">Número de documento</label>
                                    <input type="number" class="form-control" name="doc_num" value="{{ old('doc_num', $user->dataUser->doc_num) }}">
                                    @error('doc_num') 
                                        <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                    @enderror
                                </div> 
                                <button type="submit" class="btn btn-primary">Actualizar <i class="material-icons">arrow_upward</i></button>
                            </form>
                            </div>
                        </div> 
                        <div class="col-md-6">
                            <div class="card-content mb-0">
                                <h5 class="card-title">Revisar Formularios</h5>
                                <h6 class="title ml-5">
                                    <a target="_blank" href="{{ route('formFund.showAdmin', $user->formFund->id) }}" class="btn-link">
                                        Declaración de fondos
                                    </a>  
                                </h6>
                                <h6 class="title ml-5 mb-0">
                                    <a target="_blank" href="{{ route('formKnowledgeClient.showAdmin', $user->formKnowledgeClient->id) }}" class="btn-link">
                                        Conocimiento del cliente
                                    </a>  
                                </h6>
                            </div>
                            <div class="card-content">
                                <h5 class="card-title mt-0">Aprobación de verificación</h5>
                                <form class="form" method="POST" action="{{ route('admin.userVerified', $user) }}">
                                    @method('put')
                                    @csrf
                                    <div class="form-group">
                                        <select class="selectpicker " data-style="select-with-transition" data-title="Aprobar verificación?" name="verified">
                                            <option value="1">Si</option>
                                            <option value="0">No</option>
                                        </select>
                                    </div>                                                         
                                    <div class="form-group">
                                        <label for="note"></label>
                                        <textarea class="form-control" name="note" placeholder="En caso de no aprobar verificación, escriba aquí los motivos para notificar al cliente."></textarea>
                                    </div>
                                    <button type="submit" class="btn btn-success">Finalizar</button>
                                </form>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('js')
    
@endpush