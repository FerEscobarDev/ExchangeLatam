<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" /><!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img_web/apple-icon.png') }}">
    <link rel='shortcut icon' type='image/x-icon' href="{{ asset('img_web/favicon.png') }}" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>@yield('titulo') ExchangeLatam</title>
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0' name='viewport' />
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css" />
    <!-- CSS Files -->
    <link href="{{ asset('css/cssOld/bootstrap.min.css') }}" rel="stylesheet" />
    <link href="{{ asset('css/cssOld/material-kit.css?v=1.2.1') }}" rel="stylesheet" />
    <link href="https://cdn.datatables.net/1.10.19/css/dataTables.bootstrap.min.css" rel="stylesheet">
    <link href="https://cdn.datatables.net/select/1.3.0/css/select.dataTables.min.css" rel="stylesheet">
    <link href="{{ asset('css/cssOld/style.css') }}" rel="stylesheet" />
    <script src="{{ asset('js/jsOld/jquery.min.js') }}" type="text/javascript"></script>
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
            fbq('init', '1006698386813427');
            fbq('track', 'PageView');
        </script>
        <noscript><img height="1" width="1" style="display:none"
                src="https://www.facebook.com/tr?id=1006698386813427&ev=PageView&noscript=1" /></noscript>
        <!-- End Facebook Pixel Code -->
    @endproduction

</head>

<body class="profile-page">

    @production
        <!-- Google Tag Manager (noscript) -->
        <noscript>
            <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GWTZ55" height="0" width="0"
                style="display:none;visibility:hidden"></iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
    @endproduction

    <x-navOld />
    <div class="page-header header-filter" data-parallax="true"
        style="background-image: url('{{ asset('img_web/city.jpg') }}');"></div>
    <div class="main main-raised">
        <div class="profile-content">
            <div class="container">
                {{-- @include('includes.alertModalOld') --}}
                @include('includes.aniversaryModal')
                @include('includes.profileOld')
                @yield('content')
            </div>
        </div>
    </div>
    @include('includes.footerOld')
    @stack('js-1')
    <!--    Control Center for Material Kit: activating the ripples, parallax effects, scripts from the example pages etc    -->
    {{-- <script src="{{ asset('js/jsOld/main.js') }}" type="text/javascript"></script> --}}
    <!-- Plugin for Date Time Picker and Full Calendar Plugin -->
    <script src="{{ asset('js/jsOld/moment.min.js') }}" type="text/javascript"></script>
    <!--  Plugin for the Sliders, full documentation here: http://refreshless.com/nouislider/   -->
    <script src="{{ asset('js/jsOld/nouislider.min.js') }}" type="text/javascript"></script>
    <!--  Plugin for the Datepicker, full documentation here: https://github.com/Eonasdan/bootstrap-datetimepicker   -->
    <script src="{{ asset('js/jsOld/bootstrap-datetimepicker.js') }}" type="text/javascript"></script>
    <!--  Plugin for Select, full documentation here: http://silviomoreto.github.io/bootstrap-select   -->
    <script src="{{ asset('js/jsOld/bootstrap-selectpicker.js') }}" type="text/javascript"></script>
    <!--  Plugin for Tags, full documentation here: http://xoxco.com/projects/code/tagsinput/   -->
    <script src="{{ asset('js/jsOld/bootstrap-tagsinput.js') }}"></script>
    <!--  Plugin for Fileupload, full documentation here: http://www.jasny.net/bootstrap/javascript/#fileinput   -->
    <script src="{{ asset('js/jsOld/jasny-bootstrap.min.js') }}"></script>
    <!--  Plugin for Tags, full documentation here: http://xoxco.com/projects/code/tagsinput/   -->
    <script src="{{ asset('js/jsOld/bootstrap-tagsinput.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jsOld/bootstrap.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jsOld/material.min.js') }}" type="text/javascript"></script>
    <script src="{{ asset('js/jsOld/material-kit.js?v=1.2.1') }}" type="text/javascript"></script>

    @stack('js')
</body>

</html>
