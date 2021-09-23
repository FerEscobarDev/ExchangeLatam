@extends('layouts.dashboard')
@section('titulo', 'Dashboard - ')
{{-- @section('content')
    <h3 class="title">Notificaciones</h3><br>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="row">
        <div class="col-md-12">
            @if(count(Auth::user()->unreadNotifications) > 0)
                @foreach(Auth::user()->unreadNotifications as $notification)
                    {!! $notification->data['mensaje'] !!} - <a target="_blank" class="text-info" href="{{ url('admin/user/'.$notification->data['link']) }}">Ir al perfil</a>  - <a class="btn btn-success btn-sm" onclick="event.preventDefault(); document.getElementById('notification{{ $notification->id }}').submit();" >Realizado
                    <form id="notification{{ $notification->id }}" action="{{ route('admin.notificationRead') }}" method="POST">@csrf
                        <input type="hidden" name="idnotification" value="{{ $notification->id }}">
                    </form>
                    </a>
                    <hr>
                @endforeach
            @else
                <p class="text-center"><h4>No tiene notificaciones pendientes</h4></p>
            @endif            
        </div>
    </div> <br><br>
@endsection --}}