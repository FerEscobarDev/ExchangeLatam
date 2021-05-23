@extends('layouts.dashboard')

@section('Verificar email')

@section('content')
    @if (session('status') == 'verification-link-sent')
            <div class="col-md-12">
                <div class="alert alert-success">
                    <div class="container-fluid">
                        <div class="alert-icon">
                        <i class="material-icons">check</i>
                        </div>
                        <b>Realizado!</b> {{ __('A fresh verification link has been sent to your email address.') }}
                    </div>
                </div>
            </div>
    @endif

    <div class="col-md-10 ml-auto mr-auto">
        <div class="card">
            <div class="row">
                <div class="col-md-8">
                    <h2 class="title">{{ __('Verify Your Email Address') }}</h2>
                    <h5 class="description">{{ __('Before proceeding, please check your email for a verification link.') }}</h5>
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
                            <a class="text-success" href="https://api.whatsapp.com/send?phone=573223105578"><i class="fa fa-whatsapp"></i> whatsapp</a> 
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
                        <p>
                            Para acceder a nuestros servicios es necesario verificar su correo electrónico por medio del link que hemos enviado, 
                            sino lo ha recibido solicite otro.
                        </p>
                        <div class="ml-auto mr-auto text-center">
                            <form class="d-inline" method="POST" action="{{ route('verification.send') }}">
                                @csrf
                                <button type="submit" class="btn btn-warning ml-auto mr-auto">Solicitar</button>
                            </form>
                        </div>
                    </div>
                </div>
    
                <div class="col-md-4">
                    <div class="info">
                        <div class="icon icon-danger">
                            <i class="material-icons">fingerprint</i>
                        </div>
                        <h4 class="info-title">Validar su identidad</h4>
                        <p>Una vez verifique su correo electrónico recomendamos que complemente o actualice sus datos personales y cargue los documentos para validar su identidad, así será más ágil procesar sus retiros.</p>
                    </div>
                </div>
            </div>
    
        </div>        
    </div>
@endsection