<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8" />
    <!-- CSRF Token -->
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="apple-touch-icon" sizes="76x76" href="{{ asset('img_web/apple-icon.png') }}">
    <link rel="icon" type="image/png" href="{{ asset('img_web/favicon.png') }}">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1" />
    <title>ExchangeLatam | @yield('title')</title>
    <meta name="description" content="@yield('description')">
    <meta content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0, shrink-to-fit=no'
        name='viewport' />
    <!--     Fonts and icons     -->
    <link rel="stylesheet" type="text/css"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Roboto+Slab:400,700|Material+Icons" />
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css">
    <!-- CSS Files -->
    <link href="{{ asset('css/material-kit.css?v=2.2.0') }}" rel="stylesheet" />
    <!-- CSS personalizado -->
    <link href="{{ asset('css/style.css') }}" rel="stylesheet" />
    
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
    @endproduction
</head>

@yield('content')
