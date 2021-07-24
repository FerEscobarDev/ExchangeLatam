@extends('layouts.layoutAdminOld')
@section('titulo', 'User Notices - ')
@section('content')
    @include('includes.profileAdminOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    @include('includes.tabAdminOld')
    <div class="tab-pane work" id="datos">
        <div class="row">
            <div class="col-md-12">
                <h3 class="title">Alertas del usuario</h3>
                <div class="row">
                    <div class="col-md-12">
                        {{-- Se imprimen las alertas--}}
                        @if (isset($user->notices))
                            @php $isset_modal = false; @endphp
                            @foreach ($user->notices as $alert)
                                @if($alert->type == 'alert')
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="alert alert-warning">
                                                <div class="container-fluid">
                                                    <div class="alert-icon">
                                                        <i class="material-icons">notification_important</i>
                                                    </div>
                                                    <button type="button" class="close" data-toggle="modal" data-target="#del_alerta{{$alert->id}}" type="button" rel="tooltip" data-placement="top" title="Eliminar alerta">
                                                        <span aria-hidden="true"><i class="material-icons">delete</i></span>
                                                    </button>
                                                    <b>Atención!</b> {{ $alert->content }}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <!--Modal eliminar alerta-->
                                    <div class="modal fade" id="del_alerta{{$alert->id}}" tabindex="-1" role="dialog" aria-labelledby="#del_alerta_label{{$alert->id}}" aria-hidden="true">
                                        <div class="modal-dialog modal-small" role="document">
                                            <div class="modal-content">
                                                <form class="form" method="POST" action="{{ route('admin.destroyNotice', $alert) }}">
                                                    @method('delete')
                                                    @csrf
                                                    <div class="modal-body">
                                                        <div class="text-center">
                                                        <h5>Está seguro de querer eliminar esta alerta?</h5>
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
                                    
                                @elseif ($isset_modal == false)
                                    @php $isset_modal = true; @endphp                     
                                @endif
                            @endforeach
                        @endif
                    </div>
                </div>
                <div class="row">
                    {{-- Se imprimen los modals --}} 
                    @if( (isset($user->notices) && $isset_modal) || (!empty($notices)) )
                        <div class="col-md-6">
                            <div class="text-center card-title">
                                <h6 class="card-title">Vista previa del modal</h6>
                            </div>
                            <div class="card">
                                <div class="header header-primary text-center">
                                    <h4 class="card-title">Hola! {{ $user->name }}</h4>
                                </div>
                                @foreach ($notices as $alert)
                                    <div class="card-content">
                                        <h4 class="card-title">{{ $alert->title }}</h4>
                                        <p>{{ $alert->content }}</p>
                                    </div>
                                @endforeach  
                                @foreach ($user->notices as $alert)
                                    @if($alert->type == 'modal')
                                        <div class="card-content">
                                            <h4 class="card-title">{{ $alert->title }}</h4>                                            
                                            <p>{{ $alert->content}}</p>
                                            <button type="button" class="close text-danger" data-toggle="modal" data-target="#del_alerta{{$alert->id}}" type="button" rel="tooltip" data-placement="top" title="Eliminar modal">
                                                <span aria-hidden="true"><i class="material-icons">delete</i></span>
                                            </button>
                                        </div>
                                        <!--Modal eliminar modal-->
                                        <div class="modal fade" id="del_alerta{{$alert->id}}" tabindex="-1" role="dialog" aria-labelledby="#del_alerta_label{{$alert->id}}" aria-hidden="true">
                                            <div class="modal-dialog modal-small" role="document">
                                                <div class="modal-content">
                                                    <form class="form" method="POST" action="{{ route('admin.destroyNotice', $alert) }}">
                                                        @method('delete')
                                                        @csrf
                                                        <div class="modal-body">
                                                            <div class="text-center">
                                                            <h5>Está seguro de querer eliminar esta sección del modal?</h5>
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
                                    @endif
                                @endforeach  
                            </div>
                        </div>
                    @endif

                    <div class="col-md-6">
                        <div class="card">
                            <div class="header header-success text-center">
                                <h5 class="card-title">Registrar alerta - modal</h5>
                            </div>
                            <div class="card-content">
                                <div class="row">                                                   
                                    <div class="col-md-8 col-md-offset-2">
                                        <form class="form" method="POST" action="{{ route('admin.storeNotice', $user) }}">
                                            @csrf
                                            <input type="hidden" name="user_id" value="{{ $user->id }}">
                                            <div class="form-group">
                                                <label for="title">Titulo:</label>
                                                <input type="text" class="form-control" required value="{{ old('title') }}" name="title">
                                                @error('title') 
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                <label>Seleccionar tipo:</label>
                                                <select required="required" class="form-control" name="type">
                                                    <option value="alert">Alerta</option>
                                                    <option value="modal">Modal</option>
                                                </select>
                                                @error('type') 
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                                                @enderror
                                            </div>                                                                
                                            <div class="form-group">
                                                <label for="content"></label>
                                                <textarea class="form-control" name="content" placeholder="Escriba el contenido"></textarea>
                                            </div>
                                            <div class="form-group">
                                                <input class="btn btn-info" type="submit" value="Registrar">
                                            </div>
                                        </form>
                                    </div>
                                </div>
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