@extends('layouts.dashboard')
@section('title', 'Mensajería masiva')
@section('css')
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix.min.css" integrity="sha512-5m1IeUDKtuFGvfgz32VVD0Jd/ySGX7xdLxhqemTmThxHdgqlgPdupWoSN8ThtUSLpAGBvA8DY2oO7jJCrGdxoA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
@endsection
@section('content')`

@include('includes.successNotification')
    <div class="row">
        <div class="col-12 col-xxl-5 mx-auto">
            <div class="card mb-4">
                <div class="card-body p-3 pt-0">
                    <div class="card-header text-center">
                        <h4 class="font-weight-normal">
                            Mensajería Masiva
                        </h4>
                    </div>
                    <form action="{{ Route('admin.messagingMassive') }}" method="POST" enctype="multipart/form-data">
                        @csrf

                        <div class="input-group input-group-outline mb-3 @error('subject') is-invalid focused is-focused @enderror @if(empty($errors->has('subject')) && !empty(old('subject'))) is-valid focused is-focused @endif">
                            <label class="form-label" for="subject">Asunto</label>
                            <input type="text" class="form-control" name="subject" value="{{ old('subject') }}">
                        </div>
                        <div class="input-group input-group-outline my-3 @error('addressee') is-invalid focused is-focused @enderror @if(empty($errors->has('addressee')) && !empty(old('addressee'))) is-valid focused is-focused @endif">
                            <select class="form-control" name="addressee">
                                <option value=" ">Seleccione...</option>
                                <option value="0" {{ old('addressee') == '0' ? 'selected' : '' }}>Todos</option>
                                <option value="1" {{ old('addressee') == '1' ? 'selected' : '' }}>VIP</option>
                                {{-- <option value="2" {{ old('addressee') == '2' ? 'selected' : '' }}>Inactivos</option> --}}
                                <option value="3" {{ old('addressee') == '3' ? 'selected' : '' }}>Nuevos</option>
                            </select>
                        </div> 
                        <div class="my-3">
                            <label class="form-labe" for="content">Mensaje</label>
                            <input id="content" name="content" type="hidden" value="{{ old('content') }}">
                            <trix-editor input="content"></trix-editor>
                        </div>
                        <div class="d-flex justify-content-center">                            
                            <button class="btn bg-gradient-dark mb-0" type="submit">Enviar</button>
                        </div>
                    </form>
                    @if($errors->any())
                        <ul class="pt-3">
                            @foreach($errors->all() as $message)    
                                <li class="text-danger">
                                    <span class="text-sm"><b>{{ $message }} </b></span> 
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        </div>
        <div class="col-12 col-xxl-5 mx-auto">
            <div class="card mb-4">
                <div class="card-body p-3 pt-0">
                    <div class="card-header text-center">
                        <h4 class="font-weight-normal">
                            Vista previa
                        </h4>
                    </div>
                    <div class="header" style="background-color: #2c3e50;">
                        <a href="https://exchangelatam.com/" style="display: inline-block;">
                            <img src="{{ asset('img_web/logo.png') }}" class="logo">
                        </a>	
                    </div>
                    <div class="body" style="-webkit-text-size-adjust: none; max-width: 100%; background-color: #2c3e50;-webkit-text-size-adjust: none; height: 100%; line-height: 1.4; margin: 0; padding: 0; width: 100% !important; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol'; ">
                        <div class="inner-body">
                            <div class="content-cell">
                                <h1>Hola {{ strtok(Auth::user()->name, " ")." ".strtok(Auth::user()->lastname, " ") }},</h1><br>
                                
                                <div id="preview">

                                </div>
                
                                <p class="mt-3">Puede acceder al área de usuario desde el siguiente botón.</p>
                
                                <div class="action">
                                    <a class="button button-primary" style="color: #fff;" href="https://exchangelatam.com/profile" target="_blank">Acceder</a>
                                </div>
                
                                <p>Gracias por elegirnos como su medio de depósitos y retiros para el broker FBS Markets INC.</p><br>
                
                                <p>Saludos y buen trading,</p><br>
                
                                <p>
                                    <span class="subtitle">
                                        ExchangeLatam
                                    </span><br> 
                                    <a class="whatsapp" style="text-decoration: none; font-size: 14px; color: #718096;"href="https://api.whatsapp.com/send?phone=573223105578">
                                        Whatsapp: 3223105578
                                    </a>
                                </p>
                
                
                                <div class="subcopy">
                                    <p><span class="break-all">Registrese <a href="https://fbs.partners?ibl=16847&ibk=exchangelatam">aquí</a> y conviertase en cliente VIP para realizar depósitos y retiros sin comisión.</span></p>
                                    <p><span class="break-all">Vísite nuestra sección <a href="https://exchangelatam.com/faq">FAQ</a> y resuelva todas sus dudas antes de usar nuestros servicios.</span></p>
                                    <p><span class="break-all">Si tiene problemas haciendo click en el botón "Acceder", copie y pegue el siguiente enlace en su navegador: <a href="https://www.exchangelatam.com/profile/deposits">https://www.exchangelatam.com/profile/deposits</a></span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div style="background-color: #2c3e50; margin: 0px auto; padding: 0; text-align: center; border: none; border-color: #2c3e50;">
                        <div class="footer"   style="background-color: #2c3e50; margin: 0 auto; padding: 0; text-align: center; width: 570px; ">
                            <div class="content-cell">
                                <p>© {{ date('Y') }} {{ config('app.name') }}. @lang('All rights reserved.')</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection
@push('scripts')
    <script src="https://cdnjs.cloudflare.com/ajax/libs/trix/1.3.1/trix-core.min.js" integrity="sha512-lyT4F0/BxdpY5Rn1EcTA/4OTTGjvJT9SxWGxC1boH9p8TI6MzNexLxEuIe+K/pYoMMcLZTSICA/d3y0ColgiKg==" crossorigin="anonymous" referrerpolicy="no-referrer"></script>
@endpush

@push('script-plus')
    <script src="{{ asset('js/messaging.js') }}"></script>
@endpush
