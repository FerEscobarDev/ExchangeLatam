@extends('layouts.layoutAdminOld')
@section('titulo', 'Permisos - ')
@section('content')
    <h3 class="title">Lista de permisos</h3><br>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="row">
        <button data-toggle="modal" data-target="#addPermission" class="btn btn-success pull-right">
            Crear Permiso
        </button>                                                        
    </div>
    <div class="row">
        <div class="table-responsive">
            <table id="permissions_table" class="table table-striped table-bordered texto-centrado">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Permiso</th>
                        <th>Ruta</th>
                        <th class="action"><i class="fa fa-cog"></i> Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($permissions as $permission)
                        <tr class="text-center">
                            <td>{{ $permission->id }}</td>
                            <td>{{ $permission->description }}</td>
                            <td>{{ $permission->name }}</td>
                            <td class="action">
                                <button data-toggle="modal" data-target="#updatePermission{{ $permission->id }}" class="btn btn-warning">Editar</button>
                                <button data-toggle="modal" data-target="#destroyPermission{{ $permission->id }}" class="btn btn-danger">Eliminar</button>
                            </td>
                        </tr>
                        {{-- Modal update --}}
                        <div class="modal fade" id="updatePermission{{ $permission->id }}" tabindex="-1" role="dialog" aria-labelledby="#updatePermission{{ $permission->id }}" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title"><strong>Editar Permiso</strong></h5>
                                    </div>
                                    <form class="form" method="POST" action="{{route('admin.permissionUpdate', $permission)}}">
                                        @method('PUT')
                                        @csrf
                                        <div class="modal-body text-left">
                                            <div class="form-group">
                                                <label class="control-label">Nombre</label>
                                                <input required="required" type="text" class="form-control" name="description" value="{{old('description' ,$permission->description)}}">
                                            </div class="form-group">
                                                <label class="control-label">Ruta</label>
                                                <input required="required" type="text" class="form-control" name="name" value="{{old('name' ,$permission->name)}}">
                                            <div>
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
                        <div class="modal fade" id="destroyPermission{{ $permission->id }}" tabindex="-1" role="dialog" aria-labelledby="#destroyPermission{{ $permission->id }}" aria-hidden="true">
                            <div class="modal-dialog modal-small" role="document">
                                <div class="modal-content">
                                    <form class="form" method="POST" action="{{ route('admin.permissionDestroy', $permission) }}">
                                        @method('delete')
                                        @csrf
                                        <div class="modal-body">
                                            <div class="text-center">
                                                <h5>Esta seguro de que desea eliminar este permiso?</h5>
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
    <div class="modal fade" id="addPermission" tabindex="-1" role="dialog" aria-labelledby="#addPermission" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><strong>Crear Permiso</strong></h5>
                </div>
                <form class="form" method="POST" action="{{route('admin.permissionStore')}}">
                    @csrf
                    <div class="modal-body text-left">
                        <div class="form-group">
                            <label class="control-label">Nombre</label>
                            <input required="required" type="text" class="form-control" name="description">
                        </div>
                        <div class="form-group">
                            <label class="control-label">Ruta</label>
                            <input required="required" type="text" class="form-control" name="name">
                        </div>
                        <input type="hidden" name="guard_name" value="web">
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