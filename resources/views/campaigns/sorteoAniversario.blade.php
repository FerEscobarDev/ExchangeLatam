@extends('layouts.header_page')

@section('title', 'Sorteo de Aniversario')
@section('description',  'Participa en el sorteo de 300 USD por tus depósitos realizados al broker FBS con ExchangeLatam.')

@section('content')
    <body class="landing-page sidebar-collapse">

    @production
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GWTZ55"
                height="0" width="0" style="display:none;visibility:hidden"
            ></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endproduction
    
    @include('includes.navbar_page')

    <div class="page-header header-filter header-small" data-parallax="true" style="background-image: url('{{asset('img_web/background.jpg')}}');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <h1 class="title">!Gana 300 USD con ExchangeLatam!</h1>
                    {{-- <h4>
                        <a target="_blank" href="{{ route('company.policy') }}" class="btn btn-link btn-lg">
                            <i class="fa fa-gavel"></i> Política de tratamiento de datos
                        </a>  
                    </h4> --}}
                </div>
            </div>
        </div>
    </div>
    <div class="main main-raised">
        <div class="container">      
            <div class="about-services features-2">
                <div class="row">
                    <div class="col-md-10 ml-auto mr-auto">
                        <div class="card mb-3">
                            <img class="card-img-top" src="{{ asset('img_web/sorteoaniversario.jpg') }}" alt="Imagen sorteo de aniversario">
                            <div class="card-body">
                                <h4 class="card-title text-center">Términos y condiciones del sorteo.</h4>
                                <p class="card-text">
                                    De esta manera participas por el sorteo de 300 USD abonados a tu cuenta de FBS: <br> <br>
                                    <b>1. </b> Acumular 500 USD o más en depósitos a FBS por medio de ExchangeLatam del 1 al 30 de septiembre. <br>
                                    <b>2. </b> Cada usuario podrá participar solo una vez. <br>
                                    <b>3. </b> Dar like a la publicación en nuestro instagram oficial <a target="_blank" href="{{ $contact[1]->link }}" class="text-danger"><i class="fa fa-instagram"></i> @exchangelatam</a> de nuestro aniversario y  comentar con el Hashtag #SoyExchangeLatam contándonos por qué haces tus depósitos y retiros con nosotros. <br> <br>
                                </p>
                                <p class="card-text">
                                    <h6>IMPORTANTE:</h6> 
                                    <b>a) </b> El premio de 300 USD será depositado en la cuenta de FBS del trader ganador y NO A CUENTAS DE TERCEROS.  <br>
                                    <b>b) </b> El sorteo será vía Instagram el día 6 de octubre a partir de las 6:00 p.m
                                </p>
                                {{-- <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p> --}}
                            </div>
                        </div>
                    </div>
                </div>
                {{-- <div class="row">
                    <div class="col-md-7">
                        <div class="info info-horizontal mision">
                            <div class="icon icon-success">
                                <i class="material-icons">star_rate</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Misión</h4>
                                <p>Trabajamos para ofrecer un servicio de excelente calidad en el intercambio de divisas en Colombia manejando depósitos y retiros para el broker FBS Markets INC. 
                                    buscando diariamente la optimización de los procesos y los tiempos de gestión informados a nuestros clientes, garantizando seguridad en cada transacción, 
                                    siendo para nosotros un eje fundamental la atención personalizada en nuestros canales de contacto con los miles de inversores que hoy confían en nosotros. 
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-5">
                    <div class="info info-horizontal">
                        <div class="icon icon-primary">
                            <i class="material-icons">timeline</i>
                        </div>
                        <div class="description">
                            <h4 class="info-title">Visión</h4>
                            <p>Para el año 2024 seremos la empresa líder en intercambio para Colombia y Latinoamerica. Ampliando nuestra cobertura a otros brokers y monederos virtuales. Logrando un impacto positivo en el servicio ofrecido a nuestros clientes.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="row text-center">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="title">Horario de atención</h2>
                        <h4 class="description">Horario de atención al usuario de 8:00 am a 06:00 pm en días hábiles de lunes a viernes.</h4>
                        <h4 class="description">Horario de procesamiento de transacciones de 7:00 am a 10:00 pm.</h4>
                    </div>
                    <div class="col-md-8 ml-auto mr-auto">
                        <h2 class="text-center title">Contáctenos</h2>
                        <h4>
                            <a target="_blank" href="{{$contact[2]->link}}" class="btn btn-success btn-link btn-lg">
                                <i class="fa fa-whatsapp"></i> +57 320 924 00 56
                             </a> 
                        </h4>
                        <h4>
                            <a target="_blank" href="{{$contact[3]->link}}" class="btn btn-warning btn-link btn-lg">
                                <i class="fa fa-envelope-o"></i> support@exchangelatam.com
                            </a> 
                        </h4>                    
                    </div>
                </div> <div class="row">
                    <div class="col-md-8">
                        <h4 class="title ml-5">
                            <a target="_blank" href="{{ route('company.policy') }}" class="btn btn-link btn-lg">
                                <i class="fa fa-gavel"></i> Política de tratamiento de datos
                            </a>  
                        </h4>
                        <h4 class="title ml-5">
                            <a target="_blank" href="# route('company.policy') " class="btn btn-link btn-lg">
                                <i class="fa fa-gavel"></i> Términos y condiciones
                            </a>  
                        </h4>              
                    </div>
                </div> --}}
            </div>
        </div>
    </div>

    @include('includes.footer_page')

    <!--   Core JS Files   -->
    <script src="{{asset('js/core/jquery.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/popper.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/bootstrap-material-design.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/plugins/moment.min.js')}}"></script>
    <script src="{{asset('js/material-kit.js?v=2.2.0')}}" type="text/javascript"></script>

    </body>

</html>
@endsection