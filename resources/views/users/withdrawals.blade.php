@extends('layouts.layoutOld')
@section('titulo', 'Withdrawals - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.alertModalOld')
    <x-tabOld />
    {{-- Sección withdrawals --}}
    <div class="tab-content">
        <div class="">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="title">Listado de retiros</h3>
                    <div class="row">
                        <div class="col-md-3 col-md-offset-9">
                            <div class="rotating-card-container">
                                <div class="card ">
                                    <div class="front" style="width: 100%;">
                                        <div class="card-content">
                                            <h5 class="category-social text-success">
                                                <i class="material-icons">arrow_downward</i> Tasa para retiros hoy:
                                            </h5>
                                            <h3 class="card-title text-center">
                                                {{ $priceUsdWithdrawal[0]->dollar_sell }}
                                            </h3>
                                        </div>
                                    </div>
                                    <div class="back" style="width: 100%;">
                                        <div class="card-content">
                                            <p class="card-description">
                                                Esta es la tasa a la que se pagarán todos los retiros aprobados por FBS el
                                                día de hoy.
                                            </p>
                                            <p class="card-description">
                                                Puede consultar el histórico <a href="{{ route('public.dollarPrices') }}" target="_blank" class="text-info">aquí</a>.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive">
                            <table id="retiros_table" class="table table-striped table-bordered texto-centrado">
                                <thead>
                                    <tr>
                                        <th><i class="fa fa-hashtag"></i> Cuenta</th>
                                        <th><i class="fa fa-usd"></i> Monto en USD</th>
                                        <th><i class="fa fa-usd"></i> Monto en COP</th>
                                        <th><i class="fa fa-usd"></i> Total</th>
                                        <th><i class="fa fa-bank"></i> Banco</th>
                                        <th><i class="fa fa-calendar"></i> Plazo de entrega</th>
                                        <th><i class="fa fa-exclamation-triangle"></i> Estado</th>
                                        <th><i class="fa fa-cog"></i> Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($withdrawals as $withdrawal)
                                        <tr class="text-center">
                                            <td>{{ $withdrawal->fbs_account }}</td>
                                            <td><strong>$ </strong>{{ number_format($withdrawal->amount_usd, 2) }}</td>
                                            <td><strong>$ </strong>{{ number_format($withdrawal->amount_cop, 0) }}</td>
                                            <td><strong>$ </strong>{{ number_format($withdrawal->total, 0) }}</td>
                                            <td class="td-actions">
                                                @if ($withdrawal->account_id == 1)
                                                    No disponible
                                                @else
                                                    <button type="button" data-toggle="popover" data-trigger="focus"
                                                        data-placement="top"
                                                        data-title='<p class="text-success"><b>Cuenta para retiros</b></p>'
                                                        data-content="<p><b>Cuenta:</b> {{ $withdrawal->account->number }}</p><p><b>Tipo:</b> {{ $withdrawal->account->type }}</p><p><b>Banco:</b> {{ $withdrawal->account->bank->name }}</p>"
                                                        class="btn btn-info">
                                                        {{ $withdrawal->account->bank->name }}
                                                    </button>
                                                @endif
                                            </td>
                                            <td>{{ date('Y-m-d', strtotime(date($withdrawal->expiration_date))) }}</td>
                                            @if ($withdrawal->status == 'Realizado')
                                                <td class="text-success"><i class="fa fa-check"></i> Realizado</td>
                                            @elseif ($withdrawal->status == "Cancelado")
                                                <td class="text-danger"><i class="fa fa-times"></i> Cancelado</td>
                                            @else
                                                <td class="text-warning"><i class="fa fa-clock-o"></i> Pendiente</td>
                                            @endif
                                            <td class="td-actions">
                                                <button data-toggle="modal"
                                                    data-target="#showdetailsmodalrt{{ $withdrawal->id }}" type="button"
                                                    rel="tooltip" data-placement="top" class="btn btn-warning"
                                                    title="Ver más detalles">
                                                    <i class="fa fa-info-circle"></i>
                                                </button>
                                               {{--  @if (empty($withdrawal->voucher))
                                                    <button type="button" class="btn btn-info" disabled>
                                                        <i class="fa fa-eye"></i>
                                                    </button>
                                                @else
                                                    <button data-toggle="modal"
                                                        data-target="#vercomprobanteretiro{{ $withdrawal->id }}"
                                                        type="button" rel="tooltip" data-placement="top"
                                                        class="btn btn-primary" title="Ver comprobante">
                                                        <i class="fa fa-eye"></i>
                                                    </button>
                                                @endif --}}
                                            </td>
                                            {{-- Modal detalles retiro --}}
                                            <div class="modal fade" id="showdetailsmodalrt{{ $withdrawal->id }}"
                                                tabindex="-1" role="dialog"
                                                aria-labelledby="#uploadsupportlabe{{ $withdrawal->id }}"
                                                aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <div class="card">
                                                                <div class="header header-info text-center">
                                                                    <h6 class="card-title">DETALLES RETIRO</h6>
                                                                </div>
                                                                <div class="card-content">
                                                                    <p><b>Fecha de aprobación por FBS:</b>
                                                                        {{ date('Y-m-d', strtotime(date($withdrawal->application_date))) }}
                                                                    </p>
                                                                    <hr>
                                                                    <p><b>Comisión:</b> - $
                                                                        {{ number_format($withdrawal->comission, 0) }}</p>
                                                                    <hr>
                                                                    <p><b>Impuesto 4x1000:</b> - $
                                                                        {{ number_format($withdrawal->cuatro_por_mil, 0) }}</p>
                                                                    <hr>
                                                                    <p><b>Reembolso VIP:</b> + $
                                                                        {{ number_format($withdrawal->rebate, 0) }}
                                                                    </p>
                                                                    <hr>
                                                                    <p><b>Comentarios:</b>
                                                                        @if (empty($withdrawal->comment))
                                                                            No existen comentarios para este retiro.
                                                                        @else
                                                                            <?php echo
                                                                            strip_tags($withdrawal->comment); ?>
                                                                        @endif
                                                                    </p>
                                                                    <hr>
                                                                    <p><b>Comprobante de retiro:</b>
                                                                        @if (empty($withdrawal->voucher))
                                                                            No existe un comprobante.
                                                                        @else
                                                                            @if (substr($withdrawal->voucher, -4) === '.pdf')
                                                                                <object
                                                                                    data="{{ asset('storage/' . $withdrawal->voucher . '#zoom=150') }}"
                                                                                    type="application/pdf" width="100%"
                                                                                    height="700px">

                                                                                    <p>Tu navegador no tiene el plugin para
                                                                                        previsualizar documentos pdf.</p>
                                                                                    <p>Puedes descargarte el archivo desde
                                                                                        <a
                                                                                            href="{{ asset('storage/' . $withdrawal->voucher) }}">aquí</a>
                                                                                    </p>

                                                                                </object>
                                                                            @else
                                                                                <img src="{{ asset('storage/' . $withdrawal->voucher) }}"
                                                                                    alt="" title="" />
                                                                            @endif
                                                                        @endif
                                                                    </p>
                                                                    <hr>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {{-- Modal ver comprobante retiros --}}
                                            {{-- <div class="modal fade" id="vercomprobanteretiro{{ $withdrawal->id }}"
                                                tabindex="-1"
                                                aria-labelledby="#vercomprobanteretirolabel{{ $withdrawal->id }}"
                                                aria-hidden="true">
                                                <div class="modal-dialog" role="document">
                                                    <div class="modal-content">
                                                        <div class="modal-body">
                                                            <div class="card">
                                                                <div class="header header-info text-center">
                                                                    <h6 class="card-title">COMPROBANTE</h6>
                                                                </div>
                                                                <div class="card-content">
                                                                    @if (isset($withdrawal->comprobante))
                                                                        @if (substr($withdrawal->comprobante, -4) === '.pdf')
                                                                            <object
                                                                                data="{{ asset('storage/' . $withdrawal->comprobante . '#zoom=150') }}"
                                                                                type="application/pdf" width="100%"
                                                                                height="700px">

                                                                                <p>Tu navegador no tiene el plugin para
                                                                                    previsualizar documentos pdf.</p>
                                                                                <p>Puedes descargarte el archivo desde <a
                                                                                        href="{{ asset('storage/' . $withdrawal->comprobante) }}">aquí</a>
                                                                                </p>

                                                                            </object>
                                                                        @else
                                                                            <img src="{{ asset('storage/' . $withdrawal->comprobante) }}"
                                                                                alt="" title="" />
                                                                        @endif
                                                                    @endif
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">Cerrar</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div> --}}
                                        </tr>
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="text-center">
                                {{$withdrawals->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
@endsection

@push('js-1')
    <script type="text/javascript">
        $(function () {
            $('[data-toggle="popover"]').popover({
                html:true,
            })
        })
    </script>
@endpush
