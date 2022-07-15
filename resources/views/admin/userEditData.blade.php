@extends('layouts.layoutAdminOld')
@section('titulo', 'User Edit - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    <div class="tab-pane work" id="datos">
        <div class="row">
            <div class="col-md-12">
                <div class="row">
                    <div class="col-md-6 col-md-offset-3 text-center">
                        <h3 class="title">Información del usuario</h3>
                    </div>
                </div>                                
                <div class="row">
                    <div class="col-md-10 col-md-offset-1">
                        <hr>
                        <div class="row">
                            <div class="col-md-3"><p><b>Nombre:</b></p></div><div class="col-md-3"><p>{{ $user->name }}</p></div>
                            <div class="col-md-3"><p><b>Apellido:</b></p></div><div class="col-md-3"><p>{{ $user->lastname }}</p></div>
                        </div>  <hr>  
                        <div class="row">
                            @if( isset($user->dataUser) )
                                @if ($user->dataUser->doc_type == 1)
                                    <div class="col-md-3"><p><b>Tipo de documento:</b></p></div><div class="col-md-3"><p>Cédula de ciudadanía</p></div> 
                                @elseif ($user->dataUser->doc_type == 2)
                                    <div class="col-md-3"><p><b>Tipo de documento:</b></p></div><div class="col-md-3"><p>Cédula de extranjería</p></div>
                                @elseif ($user->dataUser->doc_type == 3)
                                    <div class="col-md-3"><p><b>Tipo de documento:</b></p></div><div class="col-md-3"><p>Pasaporte</p></div>
                                @endif
                            @else
                                <div class="col-md-3"><p><b>Tipo de documento:</b></p></div><div class="col-md-3"><p>Sin documento</p></div>
                            @endif
                            
                            <div class="col-md-3"><p><b>Número de documento:</b></p></div><div class="col-md-3">
                                @if (isset($user->dataUser))
                                    <p>{{ $user->dataUser->doc_num }}</p>
                                @endif
                            </div>
                        </div>  <hr>  
                        <div class="row">
                            <div class="col-md-3"><p><b>Correo:</b></p></div><div class="col-md-3"><p>{{ $user->email }}</p></div>
                            <div class="col-md-3"><p><b>Celular:</b></p></div><div class="col-md-3"><p>{{ $user->mobil }}</p></div>
                        </div>  <hr>       
                        <div class="row">
                            <div class="col-md-3"><p><b>Departamento:</b></p></div><div class="col-md-3">
                                @if (isset($user->dataUser))
                                    <p>{{ $user->dataUser->departament }}</p>
                                @endif
                            </div>
                            <div class="col-md-3"><p><b>Ciudad:</b></p></div><div class="col-md-3">
                                @if (isset($user->dataUser))
                                    <p>{{ $user->dataUser->city }}</p>
                                @endif
                            </div>
                        </div>  <hr>    
                        <div class="row">
                            <div class="col-md-3"><p><b>Dirección:</b></p></div><div class="col-md-9">
                                @if (isset($user->dataUser))
                                    <p>{{ $user->dataUser->address }}</p>
                                @endif
                            </div>
                        </div>  <hr>        
                        <div class="row">
                            <div class="col-md-3"><p><b>Información Completa:</b></p></div>
                            <div class="col-md-3">
                                <p>
                                    @if ($user->requirementUser->info_ok == 1)
                                        <span class="text-success">Información completa</span>
                                    @else
                                        <span class="text-danger">Información incompleta</span>
                                    @endif
                                </p>
                            </div>                            
                            <div class="col-md-3"><p><b>Verificación de cuenta:</b></p></div>
                            <div class="col-md-3">
                                <p>
                                    @if ($user->requirementUser->verified == 0)
                                        <span class="text-danger">Cuenta sin verificar</span>
                                    @elseif($user->requirementUser->verified == 1)
                                        <span class="text-warning">Pendiente de verificación</span>
                                    @else
                                        <span class="text-success">Cuenta verificada</span>
                                    @endif
                                </p>
                            </div>
                        </div>  <hr>  
                        <div class="row">
                            <div class="col-md-3"><p><b>Roles:</b></p></div>
                            <div class="col-md-3">
                                <p>
                                    @foreach ($user->roles as $role)
                                        - {{ $role->name }}
                                    @endforeach
                                </p>
                            </div>
                            <div class="col-md-3"><p><b>Tipo de cliente:</b></p></div>
                            <div class="col-md-3">
                                <p>
                                    @if(isset($user->dataUser))
                                        @if ($user->dataUser->vip == 'yes')
                                            <span class="text-primary">Cliente VIP</span>
                                        @else
                                            <span class="text-warning">Cliente Normal</span>
                                        @endif
                                    @else
                                        <span class="text-warning">Cliente Normal</span>
                                    @endif
                                </p>
                            </div> 
                        </div>  <hr> 
                        <div class="row">
                            <div class="col-md-12 text-center">
                                <button type="button" data-toggle="modal" data-target="#typeChange" class="btn btn-primary btn-sm">Cambiar Tipo</button>

                                <button type="button" data-toggle="modal" data-target="#addRole" class="btn btn-success btn-sm ">Asignar Rol</button>
                            
                                <button type="button" data-toggle="modal" data-target="#updateinfo" class="btn btn-info btn-sm">Actualizar datos personales</button>
                            
                                <button type="button" data-toggle="modal" data-target="#destroyUser" class="btn btn-danger btn-sm">Eliminar Usuario</button>
                            </div>
                        </div>  <hr>   
                    </div>
                </div>
                {{-- Modal registro y actualización de datos personales --}}
                <div id="updateinfo" class="modal fade" role="dialog">
                    <div class="modal-dialog">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                <h4 class="modal-title">Actualizar información</h4>
                            </div>
                            @if(isset($user->dataUser))
                                <form class="form" method="POST" action="{{ route('admin.userUpdate', $user) }}">
                                    @method('put')
                                    @csrf
                                    <div class="modal-body">
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
                                        <div class="form-group label-floating">
                                            <label for="email" class="control-label">Correo electrónico</label>
                                            <input type="text" class="form-control" name="email" value="{{ old('email', $user->email) }}" >                     
                                            @error('email') 
                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                            @enderror
                                        </div>
                                        <div class="form-group">
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
                                        <div class="form-group label-floating">
                                            <label for="mobil" class="control-label">Celular</label>
                                            <input type="number" class="form-control" name="mobil"  value="{{ old('mobil', $user->mobil) }}">
                                            @error('mobil') 
                                                <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                            @enderror
                                        </div> 
                                        <div class="form-group label-floating">
                                            <label for="address" class="control-label">Dirección de correspondencia (opcional)</label>
                                            <input type="text" class="form-control" name="address" value="{{ old('address', $user->dataUser->address) }}">
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
                            @else
                                <div class="modal-body">
                                    <div class="modal-content">
                                        <p>No se puede actualizar la información debido a que el cliente aún no registra alguna.</p>
                                    </div>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>

                {{-- Modal asignar Rol --}}
                <div class="modal fade" id="addRole" tabindex="-1" role="dialog" aria-labelledby="#addRole" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><strong>Asignar Rol</strong></h5>
                            </div>
                            <form class="form" method="POST" action="{{route('admin.roleAssing', $user)}}">
                                @method('PUT')
                                @csrf
                                <div class="modal-body text-left">
                                    <div>
                                        <h6 class="title">Roles</h6>
                                        @foreach ($roles as $role)
                                            <div class="form-check">
                                                <label class="form-check-label">
                                                    <input class="form-check-input" type="checkbox" name="roles[]" value="{{$role->id}}"                                                                 
                                                        @foreach ($user->roles as $userol)
                                                            @if($role->id == $userol->id)
                                                                checked
                                                                @break
                                                            @endif
                                                            
                                                        @endforeach                                                                
                                                    >
                                                    {{$role->name}}
                                                    <span class="form-check-sign">
                                                        <span class="check"></span>
                                                    </span>
                                                </label>
                                            </div> 
                                        @endforeach
                                    </div>
                                </div>
                                <div class="modal-footer">
                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                    <button type="submit" class="btn btn-primary">Asignar <i class="material-icons">arrow_upward</i></button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {{-- Modal Cambiar tipo de cliente --}}
                <div class="modal fade" id="typeChange" tabindex="-1" role="dialog" aria-labelledby="#typeChange" aria-hidden="true">
                    <div class="modal-dialog" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title"><strong>Asignar Tipo de Cliente</strong></h5>
                            </div>
                            <form class="form" method="POST" action="{{route('admin.typeChange', $user)}}">
                                @method('PUT')
                                @csrf
                                <div class="modal-body text-left">
                                    <div class="card">
                                        <div class="header header-info text-center">
                                           <h6 class="card-title">Tipo de cliente</h6>
                                        </div>
                                        <div class="card-content">
                                           <div class="form-group">
                                              <select required="required" class="form-control" name="vip" >
                                                 <option value="">Seleccionar tipo</option>
                                                 <option value="no">Normal</option>
                                                 <option value="yes">VIP</option>
                                              </select>
                                           </div>
                                        </div>
                                     </div>
                                </div>
                                @if(isset($user->dataUser))
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancelar</button>
                                        <button type="submit" class="btn btn-primary">Asignar <i class="material-icons">arrow_upward</i></button>
                                    </div>
                                @endif
                            </form>
                        </div>
                    </div>
                </div>
                {{-- Modal destroy --}}
                <div class="modal fade" id="destroyUser" tabindex="-1" role="dialog" aria-labelledby="#destroyUser" aria-hidden="true">
                    <div class="modal-dialog modal-small" role="document">
                        <div class="modal-content">
                            <form class="form" method="POST" action="{{ route('admin.userDestroy', $user) }}">
                                @method('delete')
                                @csrf
                                <div class="modal-body">
                                    <div class="text-center">
                                        <h5>Esta seguro de que desea eliminar este usuario?</h5>
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


            </div>
        </div>
    </div>
@endsection
@push('js')
    <script src="{{ asset('js/jsOld/main.js') }}" type="text/javascript"></script>
@endpush