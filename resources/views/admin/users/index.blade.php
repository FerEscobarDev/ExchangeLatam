@extends('layouts.dashboard')
@section('title', 'Usuarios')
@section('content')
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="card pt-2">
            <div class="card-header">
                <div class="d-flex justify-content-between">
                    <h5 class="mb-0">Listado de clientes</h5>
                    <div class="d-flex justify-content-between"> 
                        <form action="{{ route('admin.userCheckRegister') }}" method="POST">  
                            @csrf
                            <button type="submit" class="btn btn-icon btn-outline-info ms-2">
                                <i class="material-icons text-xs position-relative">how_to_reg</i>
                                Registrados
                            </button>
                        </form>  
                        <a class="btn btn-icon btn-outline-dark ms-2" href="{{ route('admin.usersExport') }}">
                            <i class="material-icons text-xs position-relative">archive</i>
                            Export Excel
                        </a>
                    </div>
                </div>
            </div>
            <div class="table-responsive">
                <table class="table table-flush">
                    <thead class="thead-light">
                        <tr>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Documento</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Número</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Nombre</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Ciudad</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Dirección</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Correo</th>
                            <th class="text-uppercase text-secondary text-sm opacity-7">Celular</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach ($users as $user)
                            <tr>
                                <td class="text-sm font-weight-normal align-middle text-center">
                                    @if($user->doc_type == 'Cedula de ciudadania')
                                        CC
                                    @elseif($user->doc_type == 'Cedula de extranjería')
                                        CE
                                    @elseif($user->doc_type == 'Pasaporte')
                                        PS
                                    @elseif($user->doc_type == 'NIT')
                                    NIT
                                    @else
                                        No tiene
                                    @endif
                                </td>
                                <td class="text-sm font-weight-normal align-middle">{{ $user->doc_num }}</td>
                                <td class="text-sm font-weight-normal align-middle">
                                    <a href="{{route('admin.usersEditData', $user->id)}}" target="_blank" class="text-info">
                                        {{  $user->name." ".$user->lastname }}
                                    </a>
                                </td>
                                <td class="text-sm font-weight-normal align-middle">{{ $user->city }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $user->address }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $user->email }}</td>
                                <td class="text-sm font-weight-normal align-middle">{{ $user->mobil }}</td>
                            </tr>
                        @endforeach                    
                    </tbody>
                </table>            
                {{$users->links()}}
            </div>
        </div>
    </div>  
@endsection