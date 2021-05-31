@extends('layouts.header_page')

@section('title', 'Preguntas frecuentes')

@section('description', '¿Cómo depositar al broker?, ¿Cómo retirar del broker?, ¿Cómo ser cliente VIP?')

@section('content')

    <body class="landing-page sidebar-collapse">

        @include('includes.navbar_page')

        <div class="page-header header-filter header-small" data-parallax="true"
            style="background-image: url('{{ asset('img_web/background.jpg') }}');">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto text-center">
                        <h1 class="title">Preguntas frecuentes</h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="main main-raised">
            <div class="container">
                <div class="about-services features-2">
                    <div class="row">
                        <div class=" col-md-8 ml-auto mr-auto">
                            <div id="accordion" role="tablist" aria-multiselectable="true" class="card-collapse">
                                @foreach ($faqs as $faq)
                                    <div class="card card-plain">
                                        <div class="card-header" role="tab" id="heading{{ $faq->id }}">
                                            <a data-toggle="collapse" data-parent="#accordion"
                                                href="#collapse{{ $faq->id }}" aria-expanded="false"
                                                aria-controls="collapse{{ $faq->id }}">
                                                {{ $faq->question }}
                                                <i class="material-icons">keyboard_arrow_down</i>
                                            </a>
                                        </div>

                                        <div id="collapse{{ $faq->id }}" class="collapse" role="tabpanel"
                                            aria-labelledby="heading{{ $faq->id }}">
                                            <div class="card-body">
                                                {!! $faq->answer !!}
                                            </div>
                                        </div>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        @include('includes.footer_page')

        <!--   Core JS Files   -->
        <script src="{{ asset('js/core/jquery.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/core/popper.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/core/bootstrap-material-design.min.js') }}" type="text/javascript"></script>
        <script src="{{ asset('js/plugins/moment.min.js') }}"></script>
        <script src="{{ asset('js/material-kit.js?v=2.2.0') }}" type="text/javascript"></script>

    </body>

    </html>
@endsection
