<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8" />
        <meta name="csrf-token" content="{{ csrf_token() }}">
        <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img_web/apple-icon.png')}}">
        <link rel="icon" type="image/png" href="{{asset('img_web/favicon.png')}}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <title>ExchangeLatam | @yield('title')</title>
        <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />
        <!--     Fonts and icons     -->
        <link rel="stylesheet" type="text/css"
            href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
        <!-- CSS Files -->
        <link href="{{asset('css/material-dashboard.css?v=2.2.2')}}" rel="stylesheet" />
        <!-- CSS personalizado -->
        <link href="{{asset('css/style.css')}}" rel="stylesheet" />

        <!-- Global site tag (gtag.js) - Google Analytics -->
        <script async src="https://www.googletagmanager.com/gtag/js?id=UA-174915949-1"></script>
        <script>
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'UA-174915949-1');
        </script>
    </head>
    <body class="">
        <div class="wrapper ">
            @include('includes.sidebar_dash')
            <div class="main-panel">
                <!-- Navbar -->
                @include('includes.navbar_dash')
                <!-- End Navbar -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            @yield('content')
                        </div>                
                    </div>
                </div>
                @include('includes.footer_dash')
            </div>
        </div>
        <!--   Core JS Files   -->
        <script src="{{asset('js-dash/core/jquery.min.js')}}"></script>
        <script src="{{asset('js-dash/core/popper.min.js')}}"></script>
        <script src="{{asset('js-dash/core/bootstrap-material-design.min.js')}}"></script>
        <script src="{{asset('js-dash/plugins/perfect-scrollbar.min.js')}}"></script>
        @stack('scripts')
        <!--  Notifications Plugin    -->
        <script src="{{asset('js-dash/plugins/bootstrap-notify.j')}}s"></script>
        <!-- Control Center for Material Dashboard: parallax effects, scripts for the example pages etc -->
        <script src="{{asset('js-dash/material-dashboard.js?v=2.2.2')}}" type="text/javascript"></script>

        @if($errors->any())
            @foreach($errors->all() as $error)
                <script>
                    $(window).on('load',function(){
                        var mensaje = "{{ $error }}";
                        console.log(mensaje);
                        md.showNotification('top','right', mensaje, 'danger');
                    });
                </script>
            @endforeach
        @endif

        @if(session()->has('success'))
            <script>
                $(window).on('load',function(){
                    var mensaje = "{{ session()->get('success') }}";
                    console.log(mensaje);
                    md.showNotification('top','right', mensaje, 'success');
                });
            </script>
        @endif

        @stack('script-plus')
    </body>
    
</html>