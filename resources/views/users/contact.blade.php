@extends('layouts.layoutOld')
@section('titulo', 'Contact - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.alertModalOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <div class="contact-page">
        <div class="row">
            <h2 class="title">Formulario de contacto</h2>
            <div class="col-md-6">
                <p class="description">Responderemos a la brevedad posible dentro de nuestro horario laboral.<br><br>
                </p>
                <form class="form" action="{{ route('users.contactMessage') }}" method="POST">
                    @csrf
                    <div class="form-group label-floating">
                        <label class="control-label">Asunto:</label>
                        <input type="text" name="subject" class="form-control" value="{{ old('subject') }}">
                    </div>
                    <div class="form-group label-floating">
                        <label class="control-label">Escriba su solicitud:</label>
                        <textarea name="message" class="form-control" id="message" rows="6">{{ old('message') }}</textarea>
                    </div>
                    <div class="submit text-center">
                        <input type="submit" class="btn btn-primary" value="Enviar mensaje" /><br><br>
                    </div>
                </form>
            </div>
            <div class="col-md-4 col-md-offset-2">
                <div class="info info-horizontal">
                    <div class="icon icon-primary">
                        <i class="material-icons">phone_android</i>
                    </div>
                    <div class="description">
                        <h4 class="info-title">Numero de contacto</h4>
                        <p>Whatsapp de atención al cliente<br>
                            <a href="{{ $contact[2]->link }}">+57 322 310 55 78</a><br>
                            Días laborales de Lunes a Viernes, 8:00 - 18:00
                        </p>
                    </div>
                </div>
                <div class="info info-horizontal">
                    <div class="icon icon-primary">
                        <i class="material-icons">email</i>
                    </div>
                    <div class="description">
                        <h4 class="info-title">Correo de contacto</h4>
                        <p>
                            Equipo de soporte<br><a href="mailto:{{ $contact[3]->link }}">support@exchangelatam.com</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection