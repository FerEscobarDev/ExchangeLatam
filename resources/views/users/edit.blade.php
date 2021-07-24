@extends('layouts.layoutOld')
@section('titulo', 'Edit Profile - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.modalCompletedDataOld')
    <x-tabOld />

    <div class="tab-pane active work" id="informacion">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title">Información del usuario</h3>
                <div class="row">
                    <div class="table-responsive">
                    <table class="table table-striped">
                        <tr>
                            <th class="text-center">Nombres</th>
                            <td>{{ Auth::user()->name }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Apellidos</th>
                            <td>{{ Auth::user()->lastname }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Tipo de documento</th>
                            <td>{{ Auth::user()->doc_type }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Número de documento</th>
                            <td>{{ Auth::user()->doc_num }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Correo</th>
                            <td>{{ Auth::user()->email }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Celular</th>
                            <td>{{ Auth::user()->mobil }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Departamento</th>
                            <td>{{ Auth::user()->departament }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Ciudad</th>
                            <td>{{ Auth::user()->city }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Dirección</th>
                            <td>{{ Auth::user()->address }}</td>
                        </tr>
                        <tr>
                            <th class="text-center">Verificación de cuenta</th>
                            <td>
                                @if (Auth::user()->verified == 0)
                                    <a class="btn-sm btn-danger" data-toggle="modal" data-target="#checkedaccount">Verificar ahora</a>
                                @elseif(Auth::user()->verified == 1)
                                    <span class="text-warning">Pendiente de verificación</span>
                                @else
                                    <span class="text-success">Cuenta verificada</span>
                                @endif
                            </td>
                        </tr>
                        <tr>
                            <td></td>
                            <td><a data-toggle="modal" data-target="#updateinfo" class="btn btn-info btn-sm">Actualizar</a></td>
                        </tr>
                    </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div id="updateinfo" class="modal fade" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Actualizar información</h4>
                </div>
                <form class="form" method="POST" action="{{ route('users.updateProfile') }}">
                    @csrf
                    <div class="modal-body">
                        @if( isset( Auth::user()->doc_type) )
                            <div class="form-group label-floating">
                            <label for="doc_type" class="control-label">Tipo de documento</label>
                            <input readonly type="text" class="form-control" id="doc_type" name="doc_type" value="{{ Auth::user()->doc_type }}">                     
                            </div>
                        @else
                            <div class="form-group">
                            <select class="selectpicker " data-style="select-with-transition" title="Seleccionar tipo de documento" id="doc_type" name="doc_type">
                                <option value="Cedula de ciudadania" {{ old('doc_type') == 'Cedula de ciudadania' ? 'selected' : '' }}>Cedula de ciudadania</option>
                                <option value="Pasaporte" {{ old('doc_type') == 'Pasaporte' ? 'selected' : '' }}>Pasaporte</option>
                                <option value="Cedula de extranjería" {{ old('doc_type') == 'Cedula de extranjería' ? 'selected' : '' }}>Cedula de extranjería</option>
                            </select>
                            @error('doc_type') 
                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
                            </div>
                        @endif
                        <div class="form-group label-floating">
                            <label for="doc_num" class="control-label">Número de documento</label>
                            <input {{ isset( Auth::user()->doc_num ) ? 'readonly' : '' }} type="number" class="form-control" id="doc_num" name="doc_num" value="{{ old('doc_num', Auth::user()->doc_num) }}">
                            @error('doc_num') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
                        </div>
                        <div class="form-group label-floating">
                            <label for="mobil" class="control-label">Celular</label>
                            <input type="number" class="form-control" id="mobil" name="mobil" value="{{ old('mobil', Auth::user()->mobil) }}">
                            @error('mobil') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
                        </div>
                        <div class="form-group">
                            <select class="selectpicker" data-style="select-with-transition" title="Seleccionar departamento" id="departament" name="departament">
                            @foreach($departaments as $departament)
                                <option value="{{ $departament->id }}" {{ old('departament', Auth::user()->departament) == $departament->id ? 'selected' : '' }}>{{ $departament->name }}</option>
                            @endforeach
                            </select>
                            @error('departament') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
                        </div>
                        <div class="form-group">
                            <select class="selectpicker" data-style="select-with-transition" title="Seleccionar ciudad" id="city" name="city">
                            </select>
                            @error('city') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
                        </div>                  
                        <div class="form-group label-floating">
                            <label for="address" class="control-label">Dirección requerida para facturación</label>
                            <input type="text" class="form-control" id="address" name="address" value="{{ old('address', Auth::user()->address) }}">
                            @error('address') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                            @enderror
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
    {{-- Modal validación de identidad --}}
    <div class="modal fade" id="checkedaccount" tabindex="-1" role="dialog" aria-labelledby="#checkedac" aria-hidden="true">
        <div class="modal-dialog modal-lg" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="checkedac"><strong>VERIFICACIÓN DE CUENTA</strong></h5>
                </div>
                @if( Auth::user()->info_ok == 1 )
                    <form action="{{ route('users.verification') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="form-group ">
                                <h4>Fotografía frontal del documento de identidad</h4>
                            <input type="file" name="front" id="inputFilefront">
                            <div class="input-group">
                                <span class="input-group-btn input-group-sm">
                                <button type="button" class="btn btn">
                                    <i class="material-icons">attach_file</i>
                                </button>
                                </span>
                                <input type="text" readonly="" class="form-control" placeholder="Seleccionar archivo...">
                            </div>
                        </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group ">
                                <h4>Fotografía del reverso del documento de identidad</h4>
                            <input type="file" name="back" id="inputFileback">
                            <div class="input-group">
                                <span class="input-group-btn input-group-sm">
                                <button type="button" class="btn btn">
                                    <i class="material-icons">attach_file</i>
                                </button>
                                </span>
                                <input type="text" readonly="" class="form-control" placeholder="Seleccionar archivo...">
                            </div>
                        </div>
                            </div>
                        </div>
                        <br>
                            <p class="text-muted text-primary">
                                Debe subir el documento con el que abrió su cuenta bancaria. <br>
                                Sólo se admite fotografía de la cédula, pasaporte o cédula de extranjería. <br> 
                                Todos los bordes del documento deben ser visibles. <br>
                                El documento debe ser perfectamente legible. <br>
                                <strong>No se admite escaner ni fotocopia</strong>
                            </p>
                            <p class="text-muted"><small>Se permiten archivos con extensión JPG, JPEG o PNG.</small></p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                        <button type="submit" class="btn btn-primary"><i class="fa fa-user"></i> Verificar</button>
                    </div>
                    </form>
                @else
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-md-10">
                                <h4 class="text-primary">Antes de verificar su identidad debe actualizar sus datos personales.</h4>
                            </div>
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-dismiss="modal">Entendido</button>
                    </div>
                @endif
            </div>
        </div>
    </div>
@endsection
@push('js')
    <script src="{{ asset('js/jsOld/main.js') }}" type="text/javascript"></script>
@endpush