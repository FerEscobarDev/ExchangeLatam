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
           
</head>

<body class="profile-page">
    <x-navAdminOld />
    <div class="main main-raised main-admin">
        <div class="profile-content">
            <div class="container">
                @yield('content')
            </div>
        </div>
    </div>
    @include('includes.footerOld')
    @stack('js-1')
    <script src="{{ asset('js/jsOld/jquery.min.js') }}" type="text/javascript"></script>
    <script src="https://cdn.datatables.net/1.10.12/js/jquery.dataTables.min.js"></script>
    <script src="https://cdn.datatables.net/select/1.3.0/js/dataTables.select.min.js"></script>
    <script src="https://cdn.datatables.net/1.10.19/js/dataTables.bootstrap.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.7/js/dataTables.responsive.min.js"></script>
    <script src="https://cdn.datatables.net/responsive/2.2.7/js/responsive.bootstrap4.min.js"></script>
    <!--    Control Center for Material Kit: activating the ripples, parallax effects, scripts from the example pages etc    -->
    <script src="{{ asset('js/jsOld/main.js') }}" type="text/javascript"></script>
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
