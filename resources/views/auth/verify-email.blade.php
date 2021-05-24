@extends('layouts.dashboard')

@section('title', 'Verificar email')

@section('content')
    <div class="col-md-12 ml-auto mr-auto">
        <div class="card">
            <div class="card-body">
                <div class="row">
                    <div class="col-md-6 ml-auto mr-auto">
                        <div class="card text-center">
                            <h3 class="card-header">
                                Confirme su correo electrónico
                            </h3>
                            <div class="card-body">
                                <p class="card-text">
                                    Antes de poder continuar, por favor, confirme su correo electrónico
                                    con el enlace que hemos enviado.
                                </p>
                            </div>
                        </div>
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
                                <a class="text-success" target="_blank" href="{{$contact[2]->link}}"><i class="fa fa-whatsapp"></i> whatsapp</a> 
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
                                si no lo ha recibido solicite otro.
                            </p>
                            <div class="ml-auto mr-auto text-center">
                                <form class="d-inline" method="POST" action="{{ route('verification.send') }}">
                                    @csrf
                                    <button type="submit" class="btn btn-warning ml-auto mr-auto">Solicitar link</button>
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
                            <p>
                                Una vez verifique su correo electrónico, por favor, complete sus datos personales y 
                                cargue los documentos para validar su identidad, así será más ágil procesar sus transacciones.
                            </p>
                        </div>
                    </div>
                </div>  
            </div>  
        </div>        
    </div>
@endsection

@push('script-plus')
    @if (session('status') == 'verification-link-sent')
        <script>
            $(window).on('load',function(){
                var mensaje = "{{ __('A fresh verification link has been sent to your email address.') }}";
                console.log(mensaje);
                md.showNotification('top','right', mensaje, 'success');
            });
        </script>
    @endif
@endpush