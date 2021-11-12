<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img_web/apple-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('img_web/favicon.png') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>ExchangeLatam | Sé usuario VIP</title>
    <meta name="description"
        content="Con ExchangeLatam V.I.P tus depósitos  y retiros en FBS son gratis.
        Somos un medio de pago en Colombia para traders de FBS, 100 % online. Depósitos y retiros seguros y confiables con ExchangeLatam">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        name='viewport' />
    <meta property="og:image" content="{{ asset('img_web/apple-icon.png') }}">
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link href="{{ asset('css/material-kit.css?v=2.2.0') }}" rel="stylesheet" />
    <!-- CSS personalizado -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />

    @production
        <!-- Google Tag Manager -->
        <script>
            (function(w, d, s, l, i) {
                w[l] = w[l] || [];
                w[l].push({
                    'gtm.start': new Date().getTime(),
                    event: 'gtm.js'
                });
                var f = d.getElementsByTagName(s)[0],
                    j = d.createElement(s),
                    dl = l != 'dataLayer' ? '&l=' + l : '';
                j.async = true;
                j.src =
                    'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
                f.parentNode.insertBefore(j, f);
            })(window, document, 'script', 'dataLayer', 'GTM-5GWTZ55');
        </script>
        <!-- End Google Tag Manager -->

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174915949-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];

            function gtag() {
                dataLayer.push(arguments);
            }
            gtag('js', new Date());

            gtag('config', 'UA-174915949-1');
        </script>


        <!-- Facebook Pixel Code -->
        <script>
            ! function(f, b, e, v, n, t, s) {
                if (f.fbq) return;
                n = f.fbq = function() {
                    n.callMethod ?
                        n.callMethod.apply(n, arguments) : n.queue.push(arguments)
                };
                if (!f._fbq) f._fbq = n;
                n.push = n;
                n.loaded = !0;
                n.version = '2.0';
                n.queue = [];
                t = b.createElement(e);
                t.async = !0;
                t.src = v;
                s = b.getElementsByTagName(e)[0];
                s.parentNode.insertBefore(t, s)
            }(window, document, 'script',
                'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '3341788526047762');
            fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=3341788526047762&ev=PageView&noscript=1" /></noscript>
        <!-- End Facebook Pixel Code -->
    @endproduction
</head>

<body class="signup-page sidebar-collapse">

    @production
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GWTZ55" height="0" width="0"
                style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endproduction

    <div class="features-4 pt-2 pb-2"
        style="background-image: url('{{ asset('img_web/background.jpg') }}'); background-size: cover; background-position: top center;">
        <div class="container pt-2 pb-2">
            <div class="row">
                <div class="col-md-12 ml-auto mr-auto text-center">
                    <div class="content-center hidden-xs hidden-sm visible-md-block visible-lg-block">
                        <img class="" src="{{asset('campaigns/header.png')}}" alt="ExchangeLatam" style="max-width: 100%">
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-12 ml-auto">
                    <div class="info info-horizontal hidden-xs hidden-sm visible-md-block visible-lg-block">
                        <div class="icon icon-success">
                            <i class="material-icons">arrow_downward</i>
                        </div>
                        <div class="description">
                            <h4 class="info-title text-white">Abre tu cuenta de trading aquí</h4>
                        </div>
                        <script type="text/javascript"
                                                   src="https://my.fbs.com/js/fbsReg?language=es&cabinet=https://fbs.com&tariff=cent&currency=USD&partnerId=1184898">
                        </script></p>
                    </div>
                    <div class="info info-horizontal">
                        <img class="" src="{{asset('campaigns/sidebar-left.png')}}" alt="ExchangeLatam" style="max-width: 100%">
                    </div>
                    <div class="info info-horizontal visible-xs-block visible-sm-block">
                        <div class="icon icon-success">
                            <i class="material-icons">arrow_downward</i>
                        </div>
                        <div class="description">
                            <h4 class="info-title text-white">Abre tu cuenta de trading aquí</h4>
                        </div>
                        <script src="https://fbs.partners/banner/7898714c0e29bdc04dc0c006b4636528bd9cddb91b6f0d0cccfc6b1fe2db3485/1552/script.js?ibp=1184898" id="7898714c0e29bdc04dc0c006b4636528bd9cddb91b6f0d0cccfc6b1fe2db3485" async></script>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12">
                    <form class="form" method="POST" action="{{ route('register') }}">
                        @csrf
                        <div class="card card-login card-hidden">
                            <div class="card-body login-card">
                                <h4 class="card-title text-center">Registro ExchangeLatam</h4>
                                <hr>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">person</i>
                                        </span>
                                    </div>
                                    <input type="text" name="name" class="form-control input-register"
                                        placeholder="Nombres..." value="{{ old('name') }}">
                                    @error('name')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">person_outline</i>
                                        </span>
                                    </div>
                                    <input type="text" name="lastname" class="form-control input-register"
                                        placeholder="Apellidos..." value="{{ old('lastname') }}">
                                    @error('lastname')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">phone_android</i>
                                        </span>
                                    </div>
                                    <input type="number" name="mobil" class="form-control input-register"
                                        placeholder="Celular..." value="{{ old('mobil') }}">
                                    @error('mobil')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">email</i>
                                        </span>
                                    </div>
                                    <input type="email" name="email" class="form-control input-register"
                                        placeholder="Email..." value="{{ old('email') }}">
                                    @error('email')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">lock_outline</i>
                                        </span>
                                    </div>
                                    <input type="password" name="password" class="form-control input-register"
                                        placeholder="Contraseña..." value="{{ old('password') }}">
                                    @error('password')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                        <span class="input-group-text">
                                            <i class="material-icons">lock</i>
                                        </span>
                                    </div>
                                    <input type="password" name="password_confirmation"
                                        class="form-control input-register" placeholder="Confirmar contraseña..."
                                        value="{{ old('password_confirmation') }}">
                                    @error('password_confirmation')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                                <div class="form-check">
                                    <label class="form-check-label">
                                        <input name="policy" class="form-check-input" type="checkbox">
                                        Aceptar <a target="_blank" href="{{ route('company.policy') }}">política de
                                            tratamiento de datos</a>.
                                        <span class="form-check-sign">
                                            <span class="check"></span>
                                        </span>
                                    </label>
                                    @error('policy')
                                        <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                            </div>
                            <div class="card-footer justify-content-center footer-login">
                                <button type="submit" class="btn btn-success">Registrarse</a>
                            </div>
                        </div>
                    </form>
                    
                    <div class="info text-center">
                        <div class="icon icon-success">
                            <i class="fa fa-whatsapp"></i>
                        </div>
                        <h4 class="info-title text-white">Contáctanos</h4>
                        <p>Si necesitas mayor información, puedes escribirnos a nuestro <a target="_blank"  class="info-title text-success" href="{{ $contact[2]->link }}">WhatsApp: 3223105578 </a>.</p>
                        <p>Conoce más sobre nosotros en nuestro sitio web <a target="_blank"  class="info-title text-info" href="{{ route('company.about') }}">www.exchangelatam.com</a>.</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-12 mr-auto">
                    <div class="info info-horizontal">
                        <div class="icon icon-info">
                            
                        </div>
                        <img class="" src="{{asset('campaigns/sidebar-right.png')}}" alt="ExchangeLatam" style="max-width: 100%">
                    </div>
                    
                </div>
            </div>
        </div>

        <footer class="footer">
            <div class="container">
                <div class="content-center hidden-xs hidden-sm visible-md-block visible-lg-block">
                    <img class="" src="{{asset('campaigns/footer.png')}}" alt="ExchangeLatam" style="max-width: 100%">
                </div>
                <div class="content-center visible-xs-block visible-sm-block">
                    <script src="https://fbs.partners/banner/6c70d1f6f9cdc25e15da8e13d69c415c6977928d48b361c661fd3f58045fed01/2113/script.js?ibp=1184898" id="6c70d1f6f9cdc25e15da8e13d69c415c6977928d48b361c661fd3f58045fed01" async></script>
                </div>
            </div>
        </footer>

    </div>
    <script src="{{ asset('js/core/jquery.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/core/popper.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/core/bootstrap-material-design.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/plugins/moment.min.js') }}"></script>
    <script src="{{ asset('js/material-kit.js?v=2.2.0') }}" type="text/javascript"></script>
</body>

</html>
