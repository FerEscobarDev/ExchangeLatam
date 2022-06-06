@extends('layouts.header_page')

@section('title', 'Acerca de nosotros')

@section('description',  'Somos un exchanger en Colombia para brokers desde marzo del 2017, operamos 100% de manera virtual y como persona jurídica bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6.')

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
                    <h1 class="title">Acerca de nosotros</h1>
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
                    <div class="col-md-10 ml-auto mr-auto text-center">
                        <h2 class="title">¿Quienes somos?</h2>
                        <h5 class="description">
                            Somos un exchanger para brokers en Colombia desde septiembre del 2017, operamos 100% de manera virtual y como persona jurídica bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6. 
                            En ExchangeLatam nos encargamos de todo el proceso correspondiente al intercambio de divisas al momento de depositar o retirar su inversión, de esta manera facilitamos que pueda realizar todas las transacciones desde su cuenta bancaria 
                            evitando todo el tramite de las transferencias internacionales ya que nosotros lo hacemos por usted.
                        </h5>
                    </div>
                </div>
                <div class="row">
                    <div class="col-md-7">
                        <div class="info info-horizontal mision">
                            <div class="icon icon-success">
                                <i class="material-icons">star_rate</i>
                            </div>
                            <div class="description">
                                <h4 class="info-title">Misión</h4>
                                <p>Trabajamos para ofrecer un servicio de excelente calidad en el intercambio de divisas en Colombia manejando depósitos y retiros para brokers 
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
                            <p>Para el año 2024 seremos la empresa líder en intercambio para Colombia y Latinoamerica. Ampliando nuestra cobertura a monederos virtuales. Logrando un impacto positivo en el servicio ofrecido a nuestros clientes.</p>
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
                                <i class="fa fa-whatsapp"></i> +57 322 310 55 78
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
                        <h4 class="title ml-5 mb-0">
                            <a target="_blank" href="{{ route('company.policyData') }}" class="btn btn-link btn-lg">
                                <i class="fa fa-gavel"></i> Política de tratamiento de datos
                            </a>  
                        </h4>
                        <h4 class="title ml-5 mt-0">
                            <a target="_blank" href="{{ route('company.policyMoney') }}" class="btn btn-link btn-lg">
                                <i class="fa fa-gavel"></i> Política SAGRILAFT
                            </a>  
                        </h4>
                        {{-- 
                        <h6 class="title ml-5">
                            <a target="_blank" href="{{ route('company.policy') }}" class="">
                                Política de tratamiento de datos
                            </a>   
                        </h2>  --}}               
                    </div>
                </div>
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