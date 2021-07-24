@extends('layouts.layoutAdminOld')
@section('titulo', 'Roles - ')
@section('content')
    <h3 class="title">Lista de roles</h3><br>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="row">
        <button data-toggle="modal" data-target="#addRole" class="btn btn-success pull-right">
            Crear Rol
        </button>                                                        
    </div>
    <div class="row">
        <div class="table-responsive">
            <table id="deposits_table" class="table table-striped table-bordered texto-centrado">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Role</th>
                        {{-- <th>Permisos</th> --}}
                        <th class="action"><i class="fa fa-cog"></i> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($roles as $role)
                        <tr class="text-center">
                            <td>{{ $role->id }}</td>
                            <td>{{ $role->name }}</td>
                            {{-- <td>
                                <p>
                                    @foreach ($role->permissions as $permission)
                                        <small>-{{$permission->description}}-</small>
                                    @endforeach
                                </p>
                            </td> --}}
                            <td class="action">
                                <button data-toggle="modal" data-target="#addRole{{ $role->id }}" class="btn btn-warning">Editar</button>
                                <button data-toggle="modal" data-target="#destroyRole{{ $role->id }}" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        {{-- Modal update --}}
                        <div class="modal fade" id="addRole{{ $role->id }}" tabindex="-1" role="dialog" aria-labelledby="#rgretiro" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="rgretiro"><strong>Editar Rol</strong></h5>
                                    </div>
                                    <form class="form" method="POST" action="{{route('admin.roleUpdate', $role)}}">
                                        @method('PUT')
                                        @csrf
                                        <div class="modal-body text-left">
                                            <div class="form-group">
                                                <label class="control-label">Nombre</label>
                                                <input required="required" type="text" class="form-control" name="name" value="{{old('name' ,$role->name)}}">
                                            </div>
                                            <div>
                                                <h6 class="title">Permisos</h6>
                                                @foreach ($permissions as $permission)
                                                    <div class="form-check">
                                                        <label class="form-check-label">
                                                            <input class="form-check-input" type="checkbox" name="permissions[]" value="{{$permission->id}}"                                                                 
                                                                @foreach ($role->permissions as $roleperm)
                                                                    @if($permission->id == $roleperm->id)
                                                                        checked
                                                                        @break
                                                                    @endif
                                                                    
                                                                @endforeach                                                                
                                                            >
                                                            {{$permission->description}}
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
                                            <button type="submit" class="btn btn-primary">Actualizar <i class="material-icons">arrow_upward</i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        {{-- Modal destroy --}}
                        <div class="modal fade" id="destroyRole{{ $role->id }}" tabindex="-1" role="dialog" aria-labelledby="#destroyRole{{ $role->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-small" role="document">
                                <div class="modal-content">
                                    <form class="form" method="POST" action="{{ route('admin.roleDestroy', $role) }}">
                                        @method('delete')
                                        @csrf
                                        <div class="modal-body">
                                            <div class="text-center">
                                                <h5>Esta seguro de que desea eliminar este rol?</h5>
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
        </div>
    </div> <br><br>
    {{-- Modal create --}}
    <div class="modal fade" id="addRole" tabindex="-1" role="dialog" aria-labelledby="#rgretiro" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="rgretiro"><strong>Crear Rol</strong></h5>
                </div>
                <form class="form" method="POST" action="{{route('admin.roleStore')}}">
                    @csrf
                    <div class="modal-body text-left">
                        <div class="form-group">
                            <label class="control-label">Nombre</label>
                            <input required="required" type="text" class="form-control" name="name">
                        </div>
                        <div>
                            <h6 class="title">Permisos</h6>
                            @foreach ($permissions as $permission)
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input class="form-check-input" type="checkbox" name="permissions[]" value="{{$permission->id}} {{ old('permissions') ? 'checked' : '' }}">
                                        {{$permission->description}}
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
                        <button type="submit" class="btn btn-primary">Registrar <i class="material-icons">arrow_upward</i></button>
                    </div>
                </form>
            </div>
        </div>
    </div>
@endsection