@extends('layouts.layoutOld')
@section('titulo', 'Change password - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="contact-page">
        <div class="row">
            <h2 class="title">Cambiar contraseña</h2>
            <div class="col-md-6">
                <form class="form" method="POST" action="{{ route('user-password.update') }}">
                    @method('PUT')
                    @csrf
                    <div class="form-group label-floating">
                        <label class="control-label">Digite la contraseña actual:</label>
                        <input type="password" name="current_password" class="form-control">                                          
                        @error('current_password', 'updatePassword') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                        @enderror
                    </div>
                    <div class="form-group label-floating">
                        <label class="control-label">Digite la nueva contraseña:</label>
                        <input type="password" name="password" class="form-control">                                          
                        @error('password', 'updatePassword') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                        @enderror
                    </div>
                    <div class="form-group label-floating">
                        <label class="control-label">Confirme la nueva contraseña:</label>
                        <input type="password" name="password_confirmation" class="form-control">                                          
                        @error('password_confirmation', 'updatePassword') 
                            <span class="text-danger" role="alert"><b>{{ $message }} </b></span> 
                        @enderror
                    </div>
                    <div class="submit text-center">
                        <input type="submit" class="btn btn-primary" value="Cambiar" /><br><br>
                    </div>
                </form>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <div class="info info-horizontal">
                    <div class="icon icon-primary">
                        <i class="material-icons">lock</i>
                    </div>
                    <div class="description">
                        <h4 class="info-title">Por su seguridad</h4>
                        <p>Enviaremos una notificación a su correo electrónico informando sobre el cambio de la contraseña de su cuenta.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection