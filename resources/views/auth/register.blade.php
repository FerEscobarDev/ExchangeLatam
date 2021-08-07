@extends('layouts.header_page')

@section('title', 'Registro')

@section('description', 'Registrarse en ExchangeLatam')

@section('content')
    <body class="signup-page sidebar-collapse"> 

        @production
            <!-- Google Tag Manager (noscript) -->
            <noscript>
                <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5GWTZ55"
                    height="0" width="0" style="display:none;visibility:hidden"
                ></iframe>
            </noscript>
            <!-- End Google Tag Manager (noscript) -->
        @endproduction
         
        @include('includes.navbar_page')
        <div class="page-header header-filter" style="background-image: url('{{asset('img_web/background.jpg')}}'); background-size: cover; background-position: top center;">
            <div class="container">
                <div class="row">
                    <div class="col-lg-4 col-md-6 col-sm-8 ml-auto mr-auto">
                        <form class="form" method="POST" action="{{route('register')}}">
                            @csrf
                            <div class="card card-login card-hidden">
                                <div class="card-body login-card">
                                    <h4 class="card-title text-center">Registro</h4>
                                    <hr>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                              <i class="material-icons">person</i>
                                          </span>
                                        </div>
                                        <input type="text" name="name" class="form-control input-register" placeholder="Nombres..." value="{{old('name')}}">
                                        @error('name')
                                                <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                        @enderror
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                              <i class="material-icons">person_outline</i>
                                          </span>
                                        </div>
                                        <input type="text" name="lastname" class="form-control input-register" placeholder="Apellidos..." value="{{old('lastname')}}">
                                        @error('lastname')
                                                <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                        @enderror
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                              <i class="material-icons">phone_android</i>
                                          </span>
                                        </div>
                                        <input type="number" name="mobil" class="form-control input-register" placeholder="Celular..." value="{{old('mobil')}}">
                                        @error('mobil')
                                                <span class="error text-danger" role="alert"><b>{{ $message }} </b></span>
                                        @enderror
                                    </div>
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
                                    </div>
                                    <div class="input-group">
                                        <div class="input-group-prepend">
                                          <span class="input-group-text">
                                              <i class="material-icons">lock_outline</i>
                                          </span>
                                        </div>
                                        <input type="password" name="password" class="form-control input-register" placeholder="Contraseña..." value="{{old('password')}}">
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
                                    <div class="form-check">
                                        <label class="form-check-label">
                                            <input name="policy" class="form-check-input" type="checkbox">
                                            Aceptar <a target="_blank" href="{{ route('company.policy') }}">política de tratamiento de datos</a>.
                                            <span class="form-check-sign">
                                                <span class="check"></span>
                                            </span>
                                        </label>                                        
                                        @error('policy') 
                                            <span class="error text-danger" role="alert"><b>{{ $message }} </b></span> 
                                        @enderror
                                    </div>
                                </div>
                                <div class="card-footer justify-content-center footer-login">
                                    <button type="submit" class="btn btn-success">Registrarse</a>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
           {{--  @include('includes.footer_page') --}}
        </div>
        <script src="{{asset('js/core/jquery.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/core/popper.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/core/bootstrap-material-design.min.js')}}" type="text/javascript"></script>
        <script src="{{asset('js/plugins/moment.min.js')}}"></script>
        <script src="{{asset('js/material-kit.js?v=2.2.0')}}" type="text/javascript"></script>
    </body>
</html>  
@endsection