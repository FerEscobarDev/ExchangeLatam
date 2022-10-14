{{-- @extends('errors::minimal')

@section('title', __('Service Unavailable'))
@section('code', '503')
@section('message', __('Service Unavailable')) --}}
<!DOCTYPE html>
<html lang="es">

<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
  <link rel="apple-touch-icon" sizes="76x76" href="{{asset('img_web/apple-icon.png')}}">
  <link rel="icon" type="image/png" href="{{asset('img_web/favicon.png')}}">
  <title>
    Estamos trabajando para mejorar
  </title>
  <!--     Fonts and icons     -->
  <link rel="stylesheet" type="text/css" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700,900|Roboto+Slab:400,700" />
  <!-- CSS Files -->
  <link id="pagestyle" href="{{asset('css/cssDash/material-dashboard.css?v=3.0.1')}}" rel="stylesheet" />
</head>

<body class="error-page">
  <main class="main-content  mt-0">
    <div class="page-header align-items-start min-vh-100" style="background-image: url('{{asset('img_web/bg.jpg')}}');">
      <span class="mask bg-gradient-dark opacity-6"></span>
      <div class="container my-auto">
        <div class="row">
          <div class="col-lg-12 m-auto text-center">
            <h1 class="display-1 text-bolder text-white">Trabajamos por mejorar</h1>
            <h2 class="text-white">Estamos implementando nuevos servicios para ti</h2>
            <p class="lead text-white">En unas horas podrás ingresar a nuestro sitio web.</p>
          </div>
        </div>
      </div>
    </div>
  </main>
  <!--   Core JS Files   -->
  <script src="{{asset('js/jsDash/core/popper.min.js')}}"></script>
  <script src="{{asset('js/jsDash/core/bootstrap.min.js')}}"></script>
  <script src="{{asset('js/jsDash/plugins/perfect-scrollbar.min.js')}}"></script>
  <script src="{{asset('js/jsDash/plugins/smooth-scrollbar.min.js')}}"></script>
  <!-- Kanban scripts -->
  <script src="{{asset('js/jsDash/plugins/dragula/dragula.min.js')}}"></script>
  <script src="{{asset('js/jsDash/plugins/jkanban/jkanban.js')}}"></script>

  <script src="{{asset('js/jsDash/material-dashboard.min.js?v=3.0.1')}}"></script>
</body>

</html>
