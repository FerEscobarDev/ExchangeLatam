@extends('layouts.header_page')

@section('title', 'Cambiar contraseña')

@section('description', '')

@section('content')
    <body class="login-page sidebar-collapse">
        @include('includes.navbar_page')
        <div class="page-header header-filter" style="background-image: url('{{asset('img_web/background.jpg')}}'); background-size: cover; background-position: top center;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                        <form class="form" method="POST" action="{{route('password.update')}}">
                            @csrf
                            <div class="card card-login card-hidden">
                            <div class="card-body login-card">
                                <h4 class="card-title text-center">Cambiar contraseña</h4>
                                <hr>
                                <input type="hidden" name="token" value="{{request()->route('token')}}">
                                <div class="input-group">
                                    <div class="input-group-prepend">
                                      <span class="input-group-text">
                                          <i class="material-icons">email</i>
                                      </span>
                                    </div>
                                    <input type="email" name="email" class="form-control input-register" placeholder="Email..." value="{{old('email', request()->email)}}">
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
                                    <input type="password" name="password" class="form-control input-register" placeholder="Nueva contraseña..." value="{{old('password')}}">
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
                                    <input type="password" name="password_confirmation" class="form-control input-register" placeholder="Confirmar contraseña..." value="{{old('password_confirmation')}}">
                                    @error('password_confirmation')
                                            <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                    @enderror
                                </div>
                            </div>
                            <div class="card-footer justify-content-center footer-login">
                                <button type="submit" class="btn btn-success">Cambiar contraseña</a>
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