@extends('layouts.dashboard')
@section('titulo', 'Norifications - ')
@section('content')
    <h3 class="title">Notificaciones</h3><br>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="col-md-12">
            @if(count(Auth::user()->unreadNotifications) > 0)
                @foreach(Auth::user()->unreadNotifications as $notification)
                    <div class="card card-frame mb-2">
                        <div class="card-body">                        
                            {!! $notification->data['mensaje'] !!} - <a target="_blank" class="text-info" href="{{ url('admin/user/'.$notification->data['link']) }}">Ir al perfil</a>  - <button type="button" class="btn btn-success btn-sm mb-0" onclick="event.preventDefault(); document.getElementById('notification{{ $notification->id }}').submit();" >Realizado
                            <form id="notification{{ $notification->id }}" action="{{ route('admin.notificationRead') }}" method="POST">@csrf
                                <input type="hidden" name="idnotification" value="{{ $notification->id }}">
                            </form>
                        </button>
                        </div>
                    </div>
                @endforeach
            @else
                <div class="card card-frame">
                    <div class="card-body text-center">
                        <h5 class="text-success">!Felicitaciones...! </h5>
                        <h6 class="text-info">Excelente trabajo, no tienes tareas pendientes.</h6>
                    </div>
                </div>
            @endif            
        </div>
    </div> <br><br>
@endsection