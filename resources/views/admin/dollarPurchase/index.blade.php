@extends('layouts.dashboard')
@section('title', 'Dollar Buy & Sell')
@section('content')    
    <div class="d-flex justify-content-between">
        <h3 class="title">Compra y venta de USD</h3>
        <div class="card mb-4">
            <div class="card-body p-2">
                <a class="btn bg-gradient-dark mb-0" href="{{ route('admin.dollarPurchaseCreate') }}"><i class="material-icons text-sm">add</i>&nbsp;&nbsp;Add transacción</a>
            </div>
        </div>
    </div>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="col-md-12">
            @foreach($dollarPurchases as $dollarPurchase)
                <div class="card card-frame mb-2">
                    <div class="card-body px-2 d-flex align-items-center justify-content-evenly">
                        <div class="ms-0">
                            <p class="text-xs font-weight-bold mb-0 ">Fecha:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">{{  date('d-M-Y', strtotime($dollarPurchase->date)) }}</h6>
                        </div>
                        <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0 ">Tipo de transacción:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">{{  $dollarPurchase->type }}</h6>
                        </div>
                        <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0 ">Usuario:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">
                                <a href="{{route('admin.usersShowDeposits', $dollarPurchase->user_id)}}" target="_blank" class="text-info">
                                    {{  strtok($dollarPurchase->user->name, " ")." ".strtok($dollarPurchase->user->lastname, " ") }}
                                </a>
                            </h6>
                        </div>
                        <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0 ">Cuenta bancaria:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">{{  $dollarPurchase->account->number." - ".$dollarPurchase->account->bank->name }}</h6>
                        </div>
                        <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0 ">Monto USD:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">{{  number_format($dollarPurchase->amount_usd, 2) }}</h6>
                        </div>
                        <div class="ms-4">
                            <p class="text-xs font-weight-bold mb-0 ">Monto COP:</p>
                            <h6 class="text-sm font-weight-normal mb-0 ">{{  number_format($dollarPurchase->amount_cop, 2) }}</h6>
                        </div>                        
                        <div class="ms-4">
                            <a target="_blank" href="{{route('admin.dollarPurchaseShow', $dollarPurchase->id)}}" type="button" class="btn btn-icon btn-info m-0">
                                <span class="btn-inner--icon"><i class="material-icons">visibility</i></span>
                                {{-- <span class="btn-inner--text">Ver</span> --}}
                            </a>
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
        {{$dollarPurchases->links()}}
    </div>
@endsection