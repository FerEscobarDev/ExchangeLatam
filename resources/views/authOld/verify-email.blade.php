@extends('layouts.layoutOld')
@section('titulo', 'Verify email - ')
@section('content')
    <div class="cd-section" id="features">
        <div class="container">
            @if (session('status') == 'verification-link-sent')
                <div class="row">
                    <div class="col-md-12">
                        <div class="alert alert-success">
                            <div class="container-fluid">
                                <div class="alert-icon">
                                    <i class="material-icons">check</i>
                                </div>
                                <b>Realizado!</b>
                                {{ __('A fresh verification link has been sent to your email address.') }}
                            </div>
                        </div>
                    </div>
                </div>
            @endif

            <div class="features-1">
                <div class="row">
                    <div class="col-md-8 col-md-offset-2">
                        <h2 class="title">Confirme su correo electrónico</h2>
                        <h5 class="description">
                            Antes de poder continuar, por favor, confirme su correo electrónico, hemos enviado un enlace de verificación a {{Auth::user()->email}}.
                        </h5>
                    </div>
                </div>

                <div class="row">
                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-info">
                                <i class="material-icons">cached</i>
                            </div>
                            <h4 class="info-title">Corregir correo electrónico</h4>
                            <p>
                                Si ha escrito mal su correo electrónico no se preocupe, contáctenos a nuestro
                                <a class="text-success" href="{{$contact[2]->link}}"><i
                                        class="fa fa-whatsapp"></i> whatsapp</a>
                                y lo solucionaremos rápidamente.
                            </p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-success">
                                <i class="material-icons">verified</i>
                            </div>
                            <h4 class="info-title">Verifique su correo electrónico</h4>
                            <p>Para acceder a nuestros servicios es necesario verificar su correo electrónico por medio del
                                link que hemos enviado, sino lo ha recibido solicite otro.
                            <form class="d-inline" method="POST" action="{{ route('verification.send') }}">
                                @csrf
                                <button type="submit" class="btn btn-warning p-0 m-0 align-baseline">Solicitar</button>.
                            </form>.</p>
                        </div>
                    </div>

                    <div class="col-md-4">
                        <div class="info">
                            <div class="icon icon-danger">
                                <i class="material-icons">fingerprint</i>
                            </div>
                            <h4 class="info-title">Validar su identidad</h4>
                            <p>Una vez verifique su correo electrónico recomendamos que complemente o actualice sus datos
                                personales y cargue los documentos para validar su identidad, así será más ágil procesar sus
                                retiros.</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>

@endsection