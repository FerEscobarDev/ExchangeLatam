@extends('layouts.header_page')

@section('title', 'Tasa de retiro')

@section('description',  'Somos un exchanger en Colombia para el broker FBS Markets Inc. desde marzo del 2017, operamos 100% de manera virtual y como persona jurídica bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6.')

@section('content')
    <body class="landing-page sidebar-collapse">

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

    <div class="page-header header-filter header-small" data-parallax="true" style="background-image: url('{{asset('img_web/background.jpg')}}');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <h1 class="title">Histórico de tasas</h1>
                    <p class="text-description">
                        Histórico del precio del dólar para retiros de FBS.
                    </p>
                </div>
            </div>
        </div>
    </div>
    <div class="main main-raised">
        <div class="container p-5"> 
            <table class="table">
                <thead>
                    <tr>                        
                        <th class="title">Fecha</th>
                        <th class="text-right title">Precio Dólar</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach ($dollarPrices as $dollarPrice)
                        <tr>
                            <td>{{ $dollarPrice->date }}</td>
                            <td class="text-right">{{ $dollarPrice->dollar_sell }}</td>
                        </tr>
                    @endforeach
                </tbody>
            </table>
            <div class="text-center">
                {{ $dollarPrices->links() }}
            </div>
        </div>
    </div>

    @include('includes.footer_page')

    <!--   Core JS Files   -->
    <script src="{{asset('js/core/jquery.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/popper.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/bootstrap-material-design.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/plugins/moment.min.js')}}"></script>
    <script src="{{asset('js/material-kit.js?v=2.2.0')}}" type="text/javascript"></script>

    </body>

</html>
@endsection