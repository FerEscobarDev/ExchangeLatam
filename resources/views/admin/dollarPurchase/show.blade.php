@extends('layouts.dashboard')
@section('title', 'Detalles de la transacción')
@section('content')
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="col-lg-8 mx-auto">
            <div class="card mb-4">
                <div class="card-header p-3 pb-0">
                    <div class="d-flex justify-content-between align-items-center">
                        <div class="w-50">
                            <h6>Detalles de la transacción</h6>
                            <p class="text-sm mb-0">
                                Orden no. <b>{{ $dollarPurchase->id }}</b> de <b>{{ date('d-M-Y',strtotime($dollarPurchase->date)) }}</b>
                            </p>
                            <p class="text-sm">
                                Tipo de transacción: <b>{{ $dollarPurchase->type }}</b>
                            </p>
                        </div>
                        <a href="{{ route('admin.dollarPurchaseEdit', $dollarPurchase) }}" class="btn btn-warning ms-auto mb-0">Editar</a>
                        <button type="button" class="btn btn-danger ms-auto mb-0" data-bs-toggle="modal" data-bs-target="#destroy">
                            Eliminar
                        </button>
                        <div class="modal fade" id="destroy" tabindex="-1" role="dialog" aria-labelledby="destroy" aria-hidden="true">
                            <div class="modal-dialog modal-danger modal-dialog-centered modal-" role="document">
                                <div class="modal-content">
                                    <form class="form" method="POST" action="{{ route('admin.dollarPurchaseDestroy', $dollarPurchase) }}">
                                        @method('delete')
                                        @csrf
                                        <div class="modal-header">
                                            <h6 class="modal-title font-weight-normal text-uppercase" id="modal-title-notification">Su atención es requerida</h6>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">
                                                <span aria-hidden="true">×</span>
                                            </button>
                                        </div>
                                        <div class="modal-body">
                                            <div class="py-3 text-center">
                                                <i class="material-icons h1 text-secondary">
                                                    notifications_active
                                                </i>
                                                <h4 class="text-gradient text-danger mt-4">¿Desea eliminar esta transacción?</h4>
                                                <p>Una vez eliminada esta transacción no se puede recuperar por favor asegurese de que está realizando la acción correcta.</p>
                                            </div>
                                        </div>
                                        <div class="modal-footer">
                                            <button type="submit" class="btn btn-danger">Eliminar</button>
                                            <button type="button" class="btn btn-link text-dark ml-auto" data-bs-dismiss="modal">Close</button>
                                        </div>                        
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div class="card-body p-3 pt-0">
                    <hr class="horizontal dark mt-0 mb-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                        <div class="d-flex">
                            <div>
                                @if (isset($dollarPurchase->user->picture))
                                    <img src="{{ asset('storage/' . $dollarPurchase->user->picture) }}" class="avatar avatar-xxl me-3" alt="foto cliente">
                                @else
                                    <img src="{{ asset('img_web/default.png') }}" class="avatar avatar-xxl me-3" alt="foto cliente">
                                @endif
                            </div>
                            <div>
                                <h6 class="text-lg mb-0 mt-2">Usuario:</h6>
                                <p class="text-sm mb-3">
                                    <a href="{{route('admin.usersShowDeposits', $dollarPurchase->user_id)}}" target="_blank" class="text-info">
                                        {{  strtok($dollarPurchase->user->name, " ")." ".strtok($dollarPurchase->user->lastname, " ") }}
                                    </a>
                                </p>
                                @if (isset($dollarPurchase->voucher))                                
                                    <span class="badge badge-sm bg-gradient-success">Pago</span>
                                @else
                                    <span class="badge badge-sm bg-gradient-danger">Por pagar</span>
                                @endif
                            </div>
                        </div>
                        </div>
                        <div class="col-lg-6 col-md-6 col-12 my-auto text-end">
                            <a href="{{route('admin.usersEditData', $dollarPurchase->user_id)}}" class="btn bg-gradient-dark btn-sm mb-0">Datos de contacto</a>
                        </div>
                    </div>
                    <hr class="horizontal dark mt-4 mb-4">
                    <div class="row">
                        <div class="col-lg-6 col-md-6 col-12">
                            <h6 class="mb-3">Detalles de pago</h6>
                            <ul class="list-group">
                                <li class="list-group-item border-0 d-flex p-4 mb-2 bg-gray-100 border-radius-lg">
                                <div class="d-flex flex-column">
                                    <h6 class="mb-3 text-sm">{{  strtok($dollarPurchase->user->name, " ")." ".strtok($dollarPurchase->user->lastname, " ") }}</h6>
                                    <span class="mb-2 text-xs">Documento: <span class="text-dark font-weight-bold ms-2">{{ $dollarPurchase->user->dataUser->doc_num }}</span></span>
                                    <span class="mb-2 text-xs">Banco: <span class="text-dark font-weight-bold ms-2">{{ $dollarPurchase->account->bank->name }}</span></span>
                                    <span class="text-xs">Cuenta: <span class="text-dark ms-2 font-weight-bold">{{ $dollarPurchase->account->number }}</span></span>
                                </div>
                                </li>
                            </ul>{{-- 
                            <h6 class="mb-3 mt-4">Payment details</h6>
                            <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                <img class="w-10 me-3 mb-0" src="../../../assets/img/logos/mastercard.png" alt="logo">
                                <h6 class="mb-0">****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;****&nbsp;&nbsp;&nbsp;7852</h6>
                                <button type="button" class="btn btn-icon-only btn-rounded btn-outline-secondary mb-0 ms-2 btn-sm d-flex align-items-center justify-content-center ms-auto" data-bs-toggle="tooltip" data-bs-placement="bottom" title="" data-bs-original-title="We do not store card details">
                                <i class="material-icons text-sm" aria-hidden="true">priority_high</i>
                                </button>
                            </div> --}}
                        </div>
                        <div class="col-lg-5 col-md-6 col-12 ms-auto">
                            <h6 class="mb-3">Resumen de la transacción</h6>
                            <div class="d-flex justify-content-between">
                                <span class="mb-2 text-sm">
                                Monto USD:
                                </span>
                                <span class="text-dark font-weight-bold ms-2">${{ number_format($dollarPurchase->amount_usd, 2) }}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="mb-2 text-sm">
                                Monto COP:
                                </span>
                                <span class="text-dark ms-2 font-weight-bold">${{ number_format($dollarPurchase->amount_cop, 2) }}</span>
                            </div>
                            <div class="d-flex justify-content-between">
                                <span class="text-sm">
                                4 X 1000:
                                </span>
                                <span class="text-dark ms-2 font-weight-bold">${{ number_format($dollarPurchase->cuatro_por_mil, 2) }}</span>
                            </div>                            
                            <div class="d-flex justify-content-between">
                                <span class="text-sm">
                                Precio USD:
                                </span>
                                <span class="text-dark ms-2 font-weight-bold">${{ number_format($dollarPurchase->price_usd, 2) }}</span>
                            </div>
                            <div class="d-flex justify-content-between mt-4">
                                <span class="mb-2 text-lg">
                                Total:
                                </span>
                                <span class="text-dark text-lg ms-2 font-weight-bold">${{ number_format($dollarPurchase->total, 2) }}</span>
                            </div>
                        </div>                        
                        <div class="col-12 ms-auto">
                            <h6 class="mb-3 mt-4">Comprobante</h6>
                            @if (empty($dollarPurchase->voucher))
                                <form action="{{ route('admin.dollarPurchaseUpdate', $dollarPurchase) }}" method="POST" enctype="multipart/form-data">
                                    @method('PUT')
                                    @csrf
                                    <input hidden type="text" name="voucherUp" value="true">
                                    <div class="my-3">
                                        <label class="form-label" for="voucher">No se ha agregado un comprobante</label>                            
                                        <input class="form-control border" name="voucher" type="file" />                               
                                    </div>
                                    <div class="d-flex justify-content-center">                            
                                        <button class="btn bg-gradient-dark mb-0" type="submit">Subir</button>
                                    </div>
                                </form>
                            @else                                
                                <div class="card card-body border card-plain border-radius-lg d-flex align-items-center flex-row">
                                    <a target="_blank" href="{{ url('storage/'.$dollarPurchase->voucher) }}"> <img class="w-100 me-3 mb-0" src="{{ asset('storage/'.$dollarPurchase->voucher) }}" alt="comprobante"> </a>
                                </div>
                            @endif
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection