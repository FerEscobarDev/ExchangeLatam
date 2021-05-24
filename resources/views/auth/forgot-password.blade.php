@extends('layouts.header_page')

@section('title', 'Recuperar contraseña')

@section('description', '')

@section('content')
    <body class="login-page sidebar-collapse">
        @include('includes.navbar_page')
        <div class="page-header header-filter" style="background-image: url('{{asset('img_web/background.jpg')}}'); background-size: cover; background-position: top center;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                        <form class="form" method="POST" action="{{route('password.email')}}">
                            @csrf
                            <div class="card card-login card-hidden">
                            <div class="card-body login-card">
                                <h4 class="card-title text-center">Recuperar Contraseña</h4>
                                <hr>
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text">
                                          <i class="material-icons">email</i>
                                      </span>
                                    </div>
                                    <input type="email" name="email" class="form-control input-register" placeholder="Email..." value="{{old('email')}}">
                                    @error('email')
                                            <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                    @if (session('status'))
                                        <span class="error text-success" role="alert"><b>{{ session('status') }} </b></span>
                                    @endif  
                                </div>
                            </div>
                            <div class="card-footer justify-content-center footer-login">
                                <button type="submit" class="btn btn-success"><i class="material-icons">lock</i> Recuperar</a>
                            </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            @include('includes.footer_page')
        </div>
        <script src="{{asset('js/core/jquery.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/core/popper.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/core/bootstrap-material-design.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/plugins/moment.min.js')}}"></script>
        <script src="{{asset('js/material-kit.js?v=2.2.0')}}" type="text/javascript"></script>
    </body>
</html>
@endsection