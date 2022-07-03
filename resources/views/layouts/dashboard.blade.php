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
        <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
        <!-- Nucleo Icons -->
        <link href="{{asset('css/cssDash/nucleo-icons.css')}}" rel="stylesheet" />
        <link href="{{asset('css/cssDash/nucleo-svg.css')}}" rel="stylesheet" />
        <!-- Font Awesome Icons -->
        <script src="https://kit.fontawesome.com/42d5adcbca.js" crossorigin="anonymous"></script>
        <!-- Material Icons -->
        <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
        <!-- CSS Files -->
        <link href="{{asset('css/cssDash/material-dashboard.css')}}" rel="stylesheet" />
        <!-- CSS personalizado -->
        <link href="{{asset('css/app2.css')}}" rel="stylesheet" />
        {{-- CSS opcional --}}
        @yield('css')

        {{-- Alpine --}}
        {{-- <script src="https://cdn.jsdelivr.net/gh/alpinejs/alpine@v2.8.2/dist/alpine.min.js" defer></script> --}}
        {{-- @production
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
            <noscript><img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=1006698386813427&ev=PageView&noscript=1" /></noscript>
            <!-- End Facebook Pixel Code -->
        @endproduction --}}
        {{-- @livewireStyles --}}
    </head>
    <body class="g-sidenav-show  bg-gray-100">
        {{-- Aside --}}
        <x-sidebarDash/>

        <main class="main-content border-radius-lg ">
            <!-- Navbar -->
            @include('includes.navbar_dash')
            <!-- End Navbar -->
            <div class="container-fluid py-4">
                <div class="row">
                    @yield('content')
                </div>
            </div>
            {{-- Footer --}}
            @include('includes.footer_dash')
        </main>

        {{-- js adicional --}}
        @stack('scripts')
        <script src="{{ asset('js/jsDash/core/popper.min.js') }}"></script>
        <script src="{{ asset('js/jsDash/core/bootstrap.min.js') }}"></script>
        <script src="{{ asset('js/jsDash/plugins/perfect-scrollbar.min.js') }}"></script>
        <script src="{{ asset('js/jsDash/plugins/smooth-scrollbar.min.js') }}"></script>
        <script>
            var win = navigator.platform.indexOf('Win') > -1;
            if (win && document.querySelector('#sidenav-scrollbar')) {
                var options = {
                    damping: '0.5'
                }
                Scrollbar.init(document.querySelector('#sidenav-scrollbar'), options);
            }
        </script>
        <!-- Github buttons -->
        <script async defer src="https://buttons.github.io/buttons.js"></script>
        <script src="{{ asset('js/jsDash/material-dashboard.js') }}"></script>

        {{-- @if($errors->any())
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
        @endif --}}
        {{-- @livewireScripts --}}
        @stack('script-plus')
    </body>

</html>
