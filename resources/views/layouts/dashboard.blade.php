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
            <div class="sidebar" data-color="green" data-background-color="black"
                data-image="{{asset('img_web/city-sidebar.jpg')}}">
                <div class="logo">
                    <a href="{{route('company.index')}}" class="simple-text logo-mini">
                        <img src="{{asset('img_web/logo-mini.png')}}" class="img-fluid">
                    </a>
                    <a href="{{route('user.dashboard')}}" class="simple-text logo-normal">
                        ExchangeLatam
                    </a>
                </div>
                <div class="sidebar-wrapper">
                    <div class="user">
                        <div class="photo">
                            @isset(auth()->user->picture)
                                <img src="{{asset('storage/'.auth()->user->picture)}}">
                            @else
                                <img src="{{asset('img_web/default-avatar.png')}}">
                            @endisset
                        </div>
                        <div class="user-info">
                            <a data-toggle="collapse" href="#collapseProfile" class="username">
                                <span>
                                    {{ strtok(auth()->user()->name, " ")." ".strtok(auth()->user()->lastname, " ") }}
                                    <b class="caret"></b>
                                </span>
                            </a>
                            <div class="collapse" id="collapseProfile">
                                <ul class="nav">        
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            @isset(auth()->user->picture)
                                                <span class="sidebar-mini"> CF </span>
                                                <span class="sidebar-normal"> Cambiar Foto </span>
                                            @else
                                                <span class="sidebar-mini"> SF </span>
                                                <span class="sidebar-normal"> Subir Foto </span>
                                            @endisset
                                        </a>
                                    </li>{{-- 
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="sidebar-mini"> EP </span>
                                            <span class="sidebar-normal"> Edit Profile </span>
                                        </a>
                                    </li>
                                    <li class="nav-item">
                                        <a class="nav-link" href="#">
                                            <span class="sidebar-mini"> S </span>
                                            <span class="sidebar-normal"> Settings </span>
                                        </a>
                                    </li> --}}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <ul class="nav">
                        <li class="nav-item active ">
                            <a class="nav-link" href="{{route('user.dashboard')}}">
                                <i class="material-icons">dashboard</i>
                                <p> Dashboard </p>
                            </a>
                        </li>                   
                    </ul>
                </div>
                <div class="sidebar-background"></div>
            </div>
            <div class="main-panel">
                <!-- Navbar -->
                <nav class="navbar navbar-expand-lg navbar-transparent navbar-absolute fixed-top">
                    <div class="container-fluid">
                        <div class="navbar-wrapper">
                            <div class="navbar-minimize">
                                <button id="minimizeSidebar" class="btn btn-just-icon btn-white btn-fab btn-round">
                                    <i class="material-icons text_align-center visible-on-sidebar-regular">more_vert</i>
                                    <i class="material-icons design_bullet-list-67 visible-on-sidebar-mini">view_list</i>
                                </button>
                            </div>
                            <a class="navbar-brand" href="{{route('user.dashboard')}}">Dashboard</a>
                        </div>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" aria-controls="navigation-index"
                            aria-expanded="false" aria-label="Toggle navigation">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                            <span class="navbar-toggler-icon icon-bar"></span>
                        </button>
                        <div class="collapse navbar-collapse justify-content-end">
                            <form class="navbar-form">
                                <!-- <div class="input-group no-border">
                                    <input type="text" value="" class="form-control" placeholder="Search...">
                                    <button type="submit" class="btn btn-white btn-round btn-just-icon">
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                </div> -->
                            </form>
                            <ul class="navbar-nav">
                                <!-- <li class="nav-item">
                                    <a class="nav-link" href="javascript:;">
                                        <i class="material-icons">dashboard</i>
                                        <p class="d-lg-none d-md-block">
                                            Stats
                                        </p>
                                    </a>
                                </li> -->
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="#" id="navbarDropdownMenuLink"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">notifications</i>
                                        <span class="notification">5</span>
                                        <p class="d-lg-none d-md-block">
                                            Notificaciones
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownMenuLink">
                                        <a class="dropdown-item" href="#">Depósito pendiente</a>
                                    </div>
                                </li>
                                <li class="nav-item dropdown">
                                    <a class="nav-link" href="javascript:;" id="navbarDropdownProfile"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i class="material-icons">person</i>
                                        <p class="d-lg-none d-md-block">
                                            Cuenta
                                        </p>
                                    </a>
                                    <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdownProfile">
                                        <a class="dropdown-item" href="#">Cambiar contraseña</a>
                                        <a class="dropdown-item" href="#">Contactenos</a>
                                        <div class="dropdown-divider"></div>
                                        <a class="dropdown-item" href="{{ route('logout') }}"
                                            onclick="event.preventDefault();
                                            document.getElementById('logout-form').submit();">
                                            {{ __('Logout') }}
                                        </a>

                                        <form id="logout-form" action="{{ route('logout') }}" method="POST" class="d-none">
                                            @csrf
                                        </form>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <!-- End Navbar -->
                <div class="content">
                    <div class="container-fluid">
                        <div class="row">
                            @yield('content')
                        </div>                
                    </div>
                </div>
                <footer class="footer">
                    <div class="container-fluid">
                        <nav class="float-left">
                            <ul>
                                <li>
                                    <a href="{{route('company.index')}}">
                                        ExchangeLatam
                                    </a>
                                </li>
                                <li>
                                    <a href="{{route('company.about')}}">
                                        Acerca de nosotros
                                    </a>
                                </li>
                                <li>
                                    <a href="{{route('company.faq')}}">
                                        Faq
                                    </a>
                                </li>
                            </ul>
                        </nav>
                        <div class="copyright float-right">
                            &copy;
                            <script>
                                document.write(new Date().getFullYear())
                            </script>, Todos los derechos reservados.
                        </div>
                    </div>
                </footer>
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