@extends('layouts.header_page')

@section('title', 'Depositar y retirar de su cuenta de trading nunca fue tan fácil')

@section('description',
    'Consiga un exchanger para depositar y retirar sus ganancias de trading que le
    ayude a encargarse de todos los trámites con los bancos, cuenta con la facilidad de
    realizar todos los movimientos de su inversión desde cualquier cuenta bancaria en
    Colombia, siendo ExchangeLatam el exchanger oficial para el broker FBS.',)

@section('facebook')
    <meta name="facebook-domain-verification" content="dyd6abo3shrqxcwntkk3f89qey5h1g" />
@endsection

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

        <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carousel" data-slide-to="0" class="active"></li>
                <li data-target="#carousel" data-slide-to="1"></li>
                <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="page-header header-filter"
                        style="background-image: url('{{ asset('img_web/corusel-1.jpg') }}');">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto text-center">
                                    <h1 class="title">ExchangeLatam</h1>
                                    <h4>Exchanger en Colombia para el broker FBS Markets INC.</h4>
                                    <br>
                                    <div class="buttons">
                                        <div class="card mr-auto ml-auto" style="width: 100px;">
                                            <img class="img" src="{{ asset('img_web/logo-fbs.png') }}" alt="">
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="page-header header-filter"
                        style="background-image: url('{{ asset('img_web/carousel-2.jpg') }}');">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-6 ml-auto mr-auto text-center">
                                    <h1 class="title">Programa <span class="text-warning">VIP</span></h1>
                                    <h4>Sea parte del programa VIP y disfrute de depósitos y retiros sin comisión, prioridad
                                        en todas sus solicitudes recibiendo sus retiros en 24 horas.</h4>
                                    <br>
                                    <div class="buttons">
                                        <a href="" data-scroll="true" data-id="#vip" class="btn btn-white btn-link btn-lg">
                                            <i class="material-icons">play_for_work</i> Conocer más...
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="page-header header-filter"
                        style="background-image: url('{{ asset('img_web/carousel-3.jpg') }}');">
                        <div class="container">
                            <div class="row">
                                <div class="col-md-7 ml-auto mr-auto text-center">
                                    <h1 class="title">Sin tarjetas de crédito</h1>
                                    <h4>Realice el depósito y retiro de su inversión en forex sin necesidad de tarjetas de
                                        crédito, todo desde la comodidad de su cuenta bancaria.</h4>
                                    <br>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
                <i class="material-icons">keyboard_arrow_left</i>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carousel" role="button" data-slide="next">
                <i class="material-icons">keyboard_arrow_right</i>
                <span class="sr-only">Next</span>
            </a>
        </div>
        <div class="main main-raised">
            <div class="container">
                <div class="section">
                    <div class="row text-center">
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="title">Nuestro servicio</h2>
                            <h5 class="description" id="vip">
                                Prestamos el servicio de intercambio de divisas desde y hacia la plataforma del broker FBS
                                para que pueda administrar su inversión sin necesidad de transferencias internacionales
                                costosas o tarjetas de crédito,
                                todas sus transacciones serán de manera local y con medios de pago locales o directamente
                                desde la app de su banco.
                            </h5>
                        </div>
                        <div class="col-md-8 ml-auto mr-auto">
                            <h2 class="title">Cliente VIP</h2>
                            <h5 class="description">
                                Haga parte de nuestro programa VIP, para esto sólo debe abrir su cuenta de trading con
                                nuestro link de referido haciendo click <a target="_blank" class="btn-info btn-link"
                                    href="https://fbs.partners?ibl=16847&ibk=exchangelatam">aquí</a>,
                                realizar su depósito y mantener su cuenta de trading activa.
                            </h5>
                            <h6>Beneficios:</h6>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <div class="info info-horizontal">
                                <div class="icon icon-info">
                                    <i class="material-icons">price_check</i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Transacciones sin comisión</h4>
                                    <p>Todo depósito superior a 500 USD y todos los retiros sin importar el monto estarán
                                        libres de comisión.</p>
                                    <a href="{{ url('/faq#heading4') }}">Leer más...</a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="info info-horizontal">
                                <div class="icon icon-danger">
                                    <i class="material-icons">access_time</i>
                                </div>
                                <div class="description">
                                    <h4 class="info-title">Prioridad en sus retiros</h4>
                                    <p>Tendrá trato preferencial en sus retiros los cuales se procesarán durante las
                                        primeras 24 horas después de ser aprobado por el broker.</p>
                                    <a href="{{ url('/faq#heading4') }}">Leer más...</a>
                                </div>
                            </div>
                        </div>
                    </div>


                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h2 class="title">Aliados comerciales</h2>
                    </div>

                    <div class="row">
                        <div class="col-md-6">
                            <div class="card card-profile card-plain">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="card-header card-header-image">
                                            <a target="_blank" href="https://www.up-trading.com/">
                                                <img class="img"
                                                    src="{{ asset('img_web/UpTrading_Vertical_Amarillo.jpg') }}" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h4 class="card-title">Up Trading</h4>
                                            <h6 class="card-category text-muted">Academia</h6>
                                            <p class="card-description text-left">
                                                UP Trading es una academia de educación en mercados bursátiles que tiene
                                                como propósito superior mejorar la calidad de vida por
                                                medio de las inversiones inteligentes en Trading digital.
                                            </p>
                                            <p class="card-description text-left">
                                                Desde 2014 llevamos brindando educación en Universidades locales y en más de
                                                18 paises por medios digitales en donde hemos
                                                capacitado más de 1200 estudiantes.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <a target="_blank" href="https://www.instagram.com/up.trading/"
                                                class="btn btn-just-icon btn-link btn-danger"><i
                                                    class="fa fa-instagram"></i></a>
                                            <a target="_blank" href="https://es-la.facebook.com/uptrading.edu/"
                                                class="btn btn-just-icon btn-link btn-facebook"><i
                                                    class="fa fa-facebook-square"></i></a>
                                            <a target="_blank" href="https://www.up-trading.com/" class="btn btn-link"><i
                                                    class="fa fa-globe"></i> www.up-trading.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="card card-profile card-plain">
                                <div class="row">
                                    <div class="col-md-5">
                                        <div class="card-header card-header-image">
                                            <a target="_blank" href="https://www.divitradefx.com/">
                                                <img class="img" src="{{ asset('img_web/divitrade.jpg') }}" />
                                            </a>
                                        </div>
                                    </div>
                                    <div class="col-md-7">
                                        <div class="card-body">
                                            <h4 class="card-title">Divitrade FX</h4>
                                            <h6 class="card-category text-muted">Academia</h6>
                                            <p class="card-description text-left">
                                                Somos una academia enfocada en la educación de una nueva generación de
                                                traders que sienta sus bases en la alta precisión y el smart money.
                                                Legalmente estamos constituidos como Divitradefx desde 2017 con el NIT
                                                1110542113-1.
                                            </p>
                                            <p class="card-description text-left">Divitade Fx emplea recursos virtuales para
                                                facilitar el
                                                acceso a la educación a personas de todo el mundo.
                                            </p>
                                        </div>
                                        <div class="card-footer">
                                            <a target="_blank" href="https://www.instagram.com/divitrade.fx/"
                                                class="btn btn-just-icon btn-link btn-danger"><i
                                                    class="fa fa-instagram"></i></a>
                                            <a target="_blank" href="https://www.facebook.com/divitrade.fx/"
                                                class="btn btn-just-icon btn-link btn-facebook"><i
                                                    class="fa fa-facebook-square"></i></a>
                                            <a target="_blank" href="https://www.divitradefx.com/" class="btn btn-link"><i
                                                    class="fa fa-globe"></i> www.divitradefx.com</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('includes.footer_page')

        <!--   Core JS Files   -->
        <script src="{{ asset('js/core/jquery.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/core/popper.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/core/bootstrap-material-design.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/plugins/moment.min.js') }}"></script>
        <script src="{{ asset('js/material-kit.js?v=2.2.0') }}" type="text/javascript"></script>

        <script>
            var scroll;
            scroll = (2500 - $(window).width()) / $(window).width();

            var $ScrollTop;
            var $ScrollBot;
            $('[data-scroll="true"]').click(function(e) {
                var scroll_target = $(this).data('id');
                var scroll_trigger = $(this).data('scroll');

                if (scroll_trigger == true && scroll_target !== undefined) {
                    e.preventDefault();

                    $('html, body').animate({
                        scrollTop: $(scroll_target).offset().top - 50
                    }, 1000);
                }
            });

        </script>
    </body>

    </html>

@endsection
