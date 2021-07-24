<div class="col-md-12 ml-auto mr-auto">
    @if(session()->has('success-login'))
        @if(isset(auth()->user()->notices) || isset($noticesAll))
            <div class="row">
                <div class="col-md-8 mr-auto ml-auto alert alert-dismissible fade show" role="alert">
                    <div class="card">
                        <div class="card-header card-header-primary text-center">
                            <h4 class="card-title">Hola,
                                {{ strtok(auth()->user()->name, ' ') . ' ' . strtok(auth()->user()->lastname, ' ') }}</h4>
                        </div>
                        @isset($noticesAll)
                            @foreach ($noticesAll as $notice)
                                <div class="card-body">
                                    <h4 class="card-title"> <b>{{$notice->title}}</b> </h4>
                                    <hr>
                                    <p class="card-text">
                                        {{$notice->content}}
                                    </p>
                                </div>
                            @endforeach
                        @endisset
                        @isset(auth()->user()->notices)
                            @foreach (auth()->user()->notices as $notice)
                            <div class="card-body">
                                <h4 class="card-title"> <b>{{$notice->title}}</b> </h4>
                                <hr>
                                <p class="card-text">
                                    {{$notice->content}}
                                </p>
                            </div>
                            @endforeach
                        @endisset
                        <div class="card-footer">
                            <button type="button" class="btn btn-link btn-danger ml-auto mr-auto"
                                data-dismiss="alert">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        @endif
    @endif
    

    <div class="card">
        <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
                <i class="material-icons">autorenew</i>
            </div>
            <h4 class="card-title">Últimas transacciones</h4>
        </div>
        <div class="card-body">
            <div class="toolbar">
                {{--        Here you can write extra buttons/actions for the toolbar              
                <div class="card">
                    <div class="card-body">
                        <div class="row">
                            <div class="col-md-6 m-auto text-center">
                                <form method="POST" action="{{ route('generar_reporte') }}">
                                    @csrf
                                    <label for="fecha" class="label">Hasta</label>
                                    <input type="text" name="fecha" class="form-control datepicker col-md-4 m-auto">
                                    <button type="submit" class="btn btn-info">Generar reporte de transacciones</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div> --}}
            </div>
            <div class="material-datatables">
                <table id="clientes" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                    <thead class="text-center">
                        <tr>
                            <th>Tipo</th>
                            <th>Cuenta</th>
                            <th>Monto USD</th>
                            <th>Monto COP</th>
                            <th>Total</th>
                            <th>Fecha Solicitud</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        @foreach ($lastTransactions as $transaction)
                            <tr>
                                <td>{{$transaction->type}}</td>
                                <td>{{$transaction->fbs_account}}</td>
                                <td>{{$transaction->amount_usd}}</td>
                                <td>{{$transaction->amount_cop}}</td>
                                <td>{{$transaction->total}}</td>
                                <td>{{$transaction->application_date}}</td>
                                @if ($transaction->status == 'Realizado')
                                    <td class="text-success">Realizado</td>
                                @elseif($transaction->status == 'Pendiente')
                                    <td class="text-warning">Pendiente</td>
                                @elseif($transaction->status == 'Cancelado')
                                    <td class="text-danger">Cancelado</td>
                                @endif
                            </tr>
                        @endforeach
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    
</div>
