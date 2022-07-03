<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title inertia>{{ config('app.name', 'Laravel') }}</title>
        <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img_web/apple-icon.png')}}">
        <link rel="icon" type="image/png" href="{{asset('img_web/favicon.png')}}">
        <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />        
        <meta content='width=device-width, initial-scale=1.0, shrink-to-fit=no' name='viewport' />

        <!-- Fonts -->
        {{-- <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap">
 --}}
        <!-- Styles -->
        <link rel="stylesheet" href="{{ mix('css/app.css') }}">

        <!-- Scripts -->
        @routes
        <script src="{{ mix('js/app.js') }}" defer></script>
        @production

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
    <body class="font-brand antialiased bg-slate-200 select-none">
        @inertia

        @env ('local')
            <script src="http://localhost:3000/browser-sync/browser-sync-client.js"></script>
        @endenv
    </body>
</html>
