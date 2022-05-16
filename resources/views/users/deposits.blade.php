@extends('layouts.layoutOld')
@section('titulo', 'Deposits - ')
@section('content')
    @include('includes.alertsOld')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <x-tabOld />
    {{-- Sección depósitos --}}
    <div class="tab-content">
        <div class="tab-pane active work">
            <div class="row">
                <div class="col-md-12">
                    <h3 class="title">Listado de depósitos</h3>
                    <div class="row">
                        {{-- Modal solicitud deposito --}}
                        <button type="button" disabled class="btn btn-success pull-right" data-toggle="modal"
                            data-target="#rg_deposit_modal">
                            Solicitar depósito
                        </button>
                        @error('fbs_account')
                            <script type="text/javascript">
                                $(window).on('load', function() {
                                    $('#rg_deposit_modal').modal('show');
                                });

                            </script>
                        @enderror
                        @error('amount_usd')
                            <script type="text/javascript">
                                $(window).on('load', function() {
                                    $('#rg_deposit_modal').modal('show');
                                });

                            </script>
                        @enderror
                        @error('accounts')
                            <script type="text/javascript">
                                $(window).on('load', function() {
                                    $('#rg_deposit_modal').modal('show');
                                });

                            </script>
                        @enderror
                        {{-- Modal solicitud depósito --}}
                        <div class="modal fade" id="rg_deposit_modal" tabindex="-1" role="dialog"
                            aria-labelledby="#rgdepositmodal" aria-hidden="true">
                            <div class="modal-dialog" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="rgdepositmodal"><strong>SOLICITUD DEPÓSITO</strong></h5>
                                    </div>
                                    <form class="form" method="POST" action="{{ route('deposit.store') }}">
                                        @csrf
                                        <div class="modal-body">
                                            <div class="form-group label-floating">
                                                <label class="control-label"># Cuenta FBS</label>
                                                <input value="{{ old('fbs_account') }}" type="number" class="form-control"
                                                    id="fbs_account" name="fbs_account">
                                                @error('fbs_account')
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span>
                                                @enderror
                                            </div>
                                            <div class="form-group label-floating">
                                                <label class="control-label">Monto en USD a depósitar</label>
                                                <input value="{{ old('amount_usd') }}" type="number" class="form-control"
                                                    id="amount_usd" name="amount_usd" onkeypress="calculate();"
                                                    onkeyup="calculate();">
                                                @error('amount_usd')
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span>
                                                @enderror
                                            </div>
                                            <div class="form-group">
                                                <select required="required" class="selectpicker "
                                                    data-style="select-with-transition" title="Seleccionar banco"
                                                    id="account" name="account">
                                                    @foreach ($accounts as $account)
                                                        <option value="{{ $account->id }}"
                                                            {{ old('account') == $account->id ? 'selected' : '' }}>
                                                            {{ $account->bank->name }}</option>
                                                    @endforeach
                                                </select>
                                                @error('account')
                                                    <span class="text-danger" role="alert"><b>{{ $message }} </b></span>
                                                @enderror
                                            </div>
                                            <br>
                                            <div class="card-content content-center" style="display: none;" id="calculate_deposit">
                                                <div class="row">
                                                    <div class="col-md-8 col-md-offset-2">
                                                        <div class="row">
                                                            <div class="col-md-8"><p><b>Valor en COP:</b></p></div><div class="col-md-4"><p id="totalcop"></p></div>
                                                            <div class="col-md-8"><p><b>Comisión sin IVA:</b></p></div><div class="col-md-4"><p id="totalcomision"></p></div>
                                                            <div class="col-md-8"><p><b>IVA:</b></p></div><div class="col-md-4"><p id="iva"></p></div>
                                                            @if ($rate != false)                                                        
                                                                <div class="col-md-8"><p><b>Descuento comisión por promo:</b></p></div><div class="col-md-4"><p id="rebate_comission"></p></div>
                                                                <div class="col-md-8"><p><b>Descuento tasa de cambio VIP:</b></p></div><div class="col-md-4"><p id="rebate_rateVip"></p></div>
                                                                <div class="col-md-8"><p><b>Descuento total:</b></p></div><div class="col-md-4"><p class="text-success" id="totaldescuento"></p></div>
                                                            @else                                                        
                                                                <div class="col-md-8"><p><b>Descuento VIP:</b></p></div><div class="col-md-4"><p class="text-success" id="totaldescuento"></p></div>
                                                            @endif
                                                                <div class="col-md-8"><p><b>Total:</b></p></div><div class="col-md-4"><p id="totaldeposit"></p></div>                                                    
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <div class="modal-footer">
                                            <button type="button" class="btn btn-secondary"
                                                data-dismiss="modal">Cancelar</button>
                                            <button type="submit" class="btn btn-primary">Solicitar <i
                                                    class="material-icons">arrow_upward</i></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="table-responsive">
                            <table id="deposits_table" class="table table-striped table-bordered texto-centrado">
                                <thead>
                                    <tr>
                                        <th><i class="fa fa-hashtag"></i> Cuenta</th>
                                        <th><i class="fa fa-usd"></i> Monto en USD</th>
                                        <th><i class="fa fa-usd"></i> Monto en COP</th>
                                        <th><i class="fa fa-usd"></i> Total</th>
                                        <th><i class="fa fa-bank"></i> Banco</th>
                                        <th><i class="fa fa-calendar"></i> Fecha solicitud</th>
                                        <th><i class="fa fa-exclamation-triangle"></i> Estado</th>
                                        <th><i class="fa fa-cog"></i> Acciones</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    @foreach ($deposits as $deposit)
                                        <tr class="text-center">
                                            <td>{{ $deposit->fbs_account }}</td>
                                            <td><strong>$ </strong>{{ number_format($deposit->amount_usd, 0) }}</td>
                                            <td><strong>$ </strong>{{ number_format($deposit->amount_cop, 0) }}</td>
                                            <td><strong>$ </strong>{{ number_format($deposit->total, 0) }}</td>
                                            <td class="td-actions">
                                                <div class="banco-container">
                                                    <div class="banco">
                                                        {{ $deposit->account->bank->name }}
                                                    </div>
                                                    <div class="icono-banco">
                                                        <button data-toggle="modal"
                                                            data-target="#datapay{{ $deposit->id }}" type="button"
                                                            rel="tooltip" data-placement="top" class="btn btn-primary"
                                                            title="Ver datos de pago">
                                                            <i class="fa fa-info-circle"></i>
                                                        </button>
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{{ $deposit->application_date }}</td>
                                            @if ($deposit->status == 'Realizado')
                                                <td class="text-success"><i class="fa fa-check"></i> Realizado</td>
                                            @elseif ($deposit->status == "Cancelado")
                                                <td class="text-danger"><i class="fa fa-times"></i> Cancelado</td>
                                            @else
                                                <td class="text-warning"><i class="fa fa-clock-o"></i> Pendiente</td>
                                            @endif
                                            <td class="td-actions">
                                                <button data-toggle="modal"
                                                    data-target="#showdetailsmodal{{ $deposit->id }}" type="button"
                                                    rel="tooltip" data-placement="top" class="btn btn-info"
                                                    title="Ver más detalles">
                                                    <i class="fa fa-info-circle"></i>
                                                </button>
                                                @if ($deposit->status == 'Pendiente')
                                                    @if (empty($deposit->voucher))
                                                        <button data-toggle="modal"
                                                            data-target="#uploadsupport{{ $deposit->id }}" type="button"
                                                            rel="tooltip" data-placement="top" class="btn btn-success"
                                                            title="Subir comprobante">
                                                            <i class="fa fa-upload"></i>
                                                        </button>
                                                        <button data-toggle="modal"
                                                            data-target="#cancelardeposit{{ $deposit->id }}"
                                                            type="button" rel="tooltip" data-placement="top"
                                                            class="btn btn-danger" title="Cancelar depósito">
                                                            <i class="fa fa-times"></i>
                                                        </button>
                                                    @else
                                                        <button disabled data-toggle="modal"
                                                            data-target="#cancelardeposit{{ $deposit->id }}"
                                                            type="button" rel="tooltip" data-placement="top"
                                                            class="btn btn-danger" title="Cancelar depósito">
                                                            <i class="fa fa-times"></i>
                                                        </button>
                                                    @endif
                                                @endif
                                            </td>
                                        </tr>
                                        {{-- Modal información de consignación depósitos --}}
                                        <div class="modal fade" id="datapay{{ $deposit->id }}" tabindex="-1" role="dialog"
                                            aria-labelledby="#datamodal{{ $deposit->id }}" aria-hidden="true">
                                            <div class="modal-dialog">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <div class="card">
                                                            <div class="header header-info text-center">
                                                                <h6 class="card-title">Datos para consignación - {{$deposit->account->bank->name}}</h6>
                                                            </div>
                                                            <div class="card-content">
                                                                <div class="row">
                                                                    <div class="col-md-6"><p><b>Transferir a:</b></p></div><div class="col-md-6"><p>@if($deposit->account->id != 3) Jeison Fernando Escobar Bermudez @else ExchangeLatam S.A.S. @endif</p></div>
                                                                    <div class="col-md-6"><p><b>Documento para inscripción:</b></p></div><div class="col-md-6"><p>@if($deposit->account->bank->name != 'Bancolombia') C.C. 1.111.198.204 @else NIT. 901-422-406 @endif</p></div>
                                                                    <div class="col-md-6"><p><b>Banco:</b></p></div><div class="col-md-6"><p>{{$deposit->account->bank->name}}</p></div>
                                                                    <div class="col-md-6"><p><b>Numero de cuenta:</b></p></div><div class="col-md-6"><p>{{$deposit->account->number}}</p></div>
                                                                    <div class="col-md-6"><p><b>Tipo de cuenta:</b></p></div><div class="col-md-6"><p>{{$deposit->account->type}}</p></div>
                                                                    <div class="col-md-6"><p><b>Total a transferir:</b></p></div><div class="col-md-6"><p>{{number_format($deposit->total, 0)}}</p></div>
                                                                    <div class="col-md-12 text-justify">
                                                                        <p class="text-danger">
                                                                            <b>Importante: </b>Si consigna en oficina o por cajero electrónico fuera del departamento del Tolima, debe incluir $15.000 COP adicionales por comisión de consignación 
                                                                            nacional cobrada por el banco, para ahorrarse dicha comisión se recomienda realizar transferencia bancaria o consignar desde un corresponsal de Bancolombia.
                                                                        </p>
                                                                    </div>
                                                                </div>
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
                                        {{-- Modal cancelar deposito --}}
                                        <div class="modal fade" id="cancelardeposit{{ $deposit->id }}" tabindex="-1"
                                            role="dialog" aria-labelledby="#cancelardepositlabel{{ $deposit->id }}"
                                            aria-hidden="true">
                                            <div class="modal-dialog modal-small ">
                                                <div class="modal-content">
                                                    <form action="{{ route('deposit.cancel', $deposit) }}" method="POST">
                                                        @csrf
                                                        <div class="modal-body text-center">
                                                            <h5>¿Desea cancelar la solicitud de depósito? </h5>
                                                        </div>
                                                        <div class="modal-footer text-center">
                                                            <button type="button" class="btn" data-dismiss="modal">No</button>
                                                            <button type="submit" class="btn btn-danger">Si</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {{-- Modal subir comprobante --}}
                                        <div class="modal fade" id="uploadsupport{{ $deposit->id }}" tabindex="-1"
                                            role="dialog" aria-labelledby="#uploadsupportlabel{{ $deposit->id }}"
                                            aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-header">
                                                        <h5 class="modal-title"
                                                            id="uploadsupportlabel{{ $deposit->id }}">
                                                            <strong>SUBIDA DE COMPROBANTE</strong>
                                                        </h5>
                                                    </div>
                                                    <form action="{{ route('deposit.voucherUp', $deposit) }}" method="POST" enctype="multipart/form-data">
                                                        @csrf
                                                        <div class="modal-body">
                                                            <div class="form-group ">                                                                
                                                                <input type="file" name="voucher" id="inputFile{{ $deposit->id }}">
                                                                <div class="input-group">
                                                                    <span class="input-group-btn input-group-sm">
                                                                        <button type="button" class="btn btn">
                                                                            <i class="material-icons">attach_file</i>
                                                                        </button>
                                                                    </span>
                                                                    <input type="text" readonly="" class="form-control"
                                                                        placeholder="Seleccionar archivo...">
                                                                </div>
                                                            </div>
                                                            @error('voucher')
                                                                <span class="text-danger" role="alert"><b>{{ $message }}</b></span>
                                                            @enderror
                                                            <p class="text-muted"><small>Sólo se permiten archivos de imagen con extension JPEG, JPG, PNG.</small></p>
                                                        </div>
                                                        <div class="modal-footer">
                                                            <button type="button" class="btn btn-secondary"
                                                                data-dismiss="modal">Cancelar</button>
                                                            <button type="submit" class="btn btn-primary"><i
                                                                    class="fa fa-upload"></i> Subir</button>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                        {{-- Modal detalles del depósito --}}                                        
                                        <div class="modal fade" id="showdetailsmodal{{ $deposit->id }}" tabindex="-1"
                                            role="dialog" aria-labelledby="#uploadsupportlabel{{ $deposit->id }}"
                                            aria-hidden="true">
                                            <div class="modal-dialog" role="document">
                                                <div class="modal-content">
                                                    <div class="modal-body">
                                                        <div class="card">
                                                            <div class="header header-info text-center">
                                                                <h6 class="card-title">DETALLES DEPÓSITO</h6>
                                                            </div>
                                                            <div class="card-content">
                                                                <div class="row">
                                                                    @if(!empty($deposit->completed_date)) <div class="col-md-6"><p><b>Fecha de realización:</b></p></div><div class="col-md-6"><p>{{ $deposit->completed_date }}</p></div> @endif
                                                                    <div class="col-md-6"><p><b>Comisión:</b></p></div><div class="col-md-6"><p>+ $ {{ number_format($deposit->comission, 0) }}</p></div>
                                                                    <div class="col-md-6"><p><b>IVA:</b></p></div><div class="col-md-6"><p>+ $ {{ number_format($deposit->iva, 0) }}</p></div>
                                                                    @isset($deposit->rebateDescription)
                                                                        <div class="col-md-6"><p><b>Descuento comisión por promo:</b></p></div><div class="col-md-6"><p>- $ {{ number_format($deposit->rebateDescription->rebate_comission, 0) }}</p></p></div>
                                                                        <div class="col-md-6"><p><b>Descuento tasa de cambio VIP:</b></p></div><div class="col-md-6"><p>- $ {{ number_format($deposit->rebateDescription->rebate_rate, 0) }}</p></p></div>
                                                                        <div class="col-md-6"><p><b>Total descuento:</b></p></div><div class="col-md-6"><p>- $ {{ number_format($deposit->rebate, 0) }}</p></p></div>
                                                                    @else
                                                                        <div class="col-md-6"><p><b>Descuento VIP:</b></p></div><div class="col-md-6"><p>- $ {{ number_format($deposit->rebate, 0) }}</p></p></div>
                                                                    @endisset
                                                                    @if (!empty($deposit->comment))
                                                                        <div class="col-md-6"><p><b>Comentarios:</b></p></div><div class="col-md-6">
                                                                            <p>                                                                       
                                                                                {{strip_tags($deposit->comment)}}
                                                                            </p>
                                                                        </div>
                                                                    @endif
                                                                    <div class="col-md-6"><p><b>Comprobante:</b></p></div>
                                                                                                                                            
                                                                    @if (empty($deposit->voucher))
                                                                        <div class="col-md-6"><p>No ha subido un comprobante para este depósito.</p></div>
                                                                    @else
                                                                        <div class="col-md-12">
                                                                            <p>
                                                                                @if (substr($deposit->voucher, -4) === '.pdf')
                                                                                    <object
                                                                                        data="{{ asset('storage/' . $deposit->voucher . '#zoom=150') }}"
                                                                                        type="application/pdf" width="100%"
                                                                                        height="700px">

                                                                                        <p>Tu navegador no tiene el plugin para
                                                                                            previsualizar documentos pdf.</p>
                                                                                        <p>Puedes descargarte el archivo desde <a
                                                                                                href="{{ asset('storage/' . $deposit->voucher) }}">aquí</a>
                                                                                        </p>

                                                                                    </object>
                                                                                @else
                                                                                    <img src="{{ asset('storage/' . $deposit->voucher) }}"
                                                                                        alt="" title="" />
                                                                                @endif                                                                                
                                                                            </p>
                                                                        </div>
                                                                    @endif
                                                                    
                                                                </div>
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
                                    @endforeach
                                </tbody>
                            </table>
                            <div class="text-center">
                                {{$deposits->links()}}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {{-- Si el registro del depósito es satisfactorio se muestra modal con datos de consignación --}}
    @if (session()->has('info'))
        <script type="text/javascript">
            $(window).on('load',function(){
                $('#datapay'+{{session()->get('info')->id}}).modal('show');
            });
        </script>
    @endif
@endsection

@push('js')
    @if ($rate != false)
        <script>
            function calculate() {
                var comission_all = {{ $rate[0]->comission_all }};
                comission_all = parseFloat(comission_all/100);
                var val_comission = 0.015;
                var rebate_rateVip = 0;
                var price_dollar = {{$priceUsdDeposit[0]->dollar_buy}};
                var vip_rate = {{$rate[0]->vip_rate}};
                var amount_usd = $('input#amount_usd').val();
                var amount_cop = parseInt(amount_usd)*parseInt(price_dollar);
                var comission = Math.round((parseInt(amount_cop)*val_comission)/1.19);
                var iva = Math.round(comission*0.19);
                var rebate_comission = comission - Math.round(((comission_all*amount_cop)/1.19));
                var vip = '{{ auth()->user()->vip }}';
                var rebateTotal = 0;

                if(vip == 'yes')
                {   
                    price_dollar = price_dollar - vip_rate;                    
                    rebate_rateVip = amount_cop - (parseInt(amount_usd)*parseInt(price_dollar));
                }

                rebateTotal = rebate_comission + rebate_rateVip;

                var total = (parseInt(amount_cop)+parseInt(comission)+parseInt(iva)-parseInt(rebateTotal));

                if(isNaN(amount_cop) || isNaN(comission) || isNaN(total)) {
                amount_cop = 0;
                rebate_rateVip = 0;
                iva = 0;
                comission = 0;
                rebate_comission = 0;
                rebateTotal = 0;
                total = 0;
                $("div#calculate_deposit").hide();
                }else{
                $("div#calculate_deposit").show();
                amount_cop = amount_cop.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                amount_cop = amount_cop.split('').reverse().join('').replace(/^[\.]/,'');
                comission = comission.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                comission = comission.split('').reverse().join('').replace(/^[\.]/,'');
                iva = iva.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                iva = iva.split('').reverse().join('').replace(/^[\.]/,'');
                rebate_rateVip = rebate_rateVip.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                rebate_rateVip = rebate_rateVip.split('').reverse().join('').replace(/^[\.]/,'');
                rebate_comission = rebate_comission.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                rebate_comission = rebate_comission.split('').reverse().join('').replace(/^[\.]/,'');
                rebateTotal = rebateTotal.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                rebateTotal = rebateTotal.split('').reverse().join('').replace(/^[\.]/,'');
                total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                total = total.split('').reverse().join('').replace(/^[\.]/,'');
                }
                $('p#totalcop').text('$ '+amount_cop);
                $('p#totalcomision').text('$ + '+comission);
                $('p#iva').text('$ + '+iva);
                $('p#rebate_comission').text('$ - '+rebate_comission);
                $('p#rebate_rateVip').text('$ - '+rebate_rateVip);
                $('p#totaldescuento').text('$ - '+rebateTotal);
                $('p#totaldeposit').text('$ '+total);

            }

        </script> 
    @else
        <script>
            function calculate() {
                var val_comission = 0.015;
                var rebate = 0;
                var price_dollar = {{$priceUsdDeposit[0]->dollar_buy}};
                var amount_usd = $('input#amount_usd').val();
                var amount_cop = (parseInt(amount_usd)*parseInt(price_dollar));
                var comission = Math.round((parseInt(amount_cop)*val_comission)/1.19);
                var iva = Math.round(comission*0.19);
                var vip = '{{ auth()->user()->vip }}';

                if(vip == 'yes'){
                    if(amount_usd >= 500){
                        rebate = comission;
                    }else{
                        rebate = 0;
                    }
                }else{
                    rebate = 0;
                }

                var total = (parseInt(amount_cop)+parseInt(comission)+parseInt(iva)-parseInt(rebate));

                if(isNaN(amount_cop) || isNaN(comission) || isNaN(total)) {
                amount_cop = 0;
                comission = 0;
                total = 0;
                $("div#calculate_deposit").hide();
                }else{
                $("div#calculate_deposit").show();
                amount_cop = amount_cop.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                amount_cop = amount_cop.split('').reverse().join('').replace(/^[\.]/,'');
                comission = comission.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                comission = comission.split('').reverse().join('').replace(/^[\.]/,'');
                iva = iva.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                iva = iva.split('').reverse().join('').replace(/^[\.]/,'');
                rebate = rebate.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                rebate = rebate.split('').reverse().join('').replace(/^[\.]/,'');
                total = total.toString().split('').reverse().join('').replace(/(?=\d*\.?)(\d{3})/g,'$1.');
                total = total.split('').reverse().join('').replace(/^[\.]/,'');
                }
                $('p#totalcop').text('$ '+amount_cop);
                $('p#totalcomision').text('$ + '+comission);
                $('p#iva').text('$ + '+iva);
                $('p#totaldescuento').text('$ - '+rebate);
                $('p#totaldeposit').text('$ '+total);

            }

        </script> 
    @endif
@endpush
