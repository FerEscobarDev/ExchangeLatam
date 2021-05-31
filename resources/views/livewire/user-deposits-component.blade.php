<div class="col-md-12 ml-auto mr-auto" wire:model="$refresh()">
    <div class="card">
        <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
                <i class="material-icons">autorenew</i>
            </div>
            <h4 class="card-title">Listado de depósitos</h4>
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
                <table id="deposits" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                    <thead>
                        <tr>
                            <th>Cuenta</th>
                            <th>Monto USD</th>
                            <th>Monto COP</th>
                            <th>Total</th>
                            <th>Fecha Solicitud</th>
                            <th>Estado</th>
                        </tr>
                    </thead>
                    <tbody class="text-center">
                        @foreach ($deposits as $deposit)
                            <tr>
                                <td>{{$deposit->fbs_account}}</td>
                                <td>{{$deposit->amount_usd}}</td>
                                <td>{{$deposit->amount_cop}}</td>
                                <td>{{$deposit->total}}</td>
                                <td>{{$deposit->application_date}}</td>
                                @if ($deposit->status == 'Realizado')
                                    <td class="text-success">Realizado</td>
                                @elseif($deposit->status == 'Pendiente')
                                    <td class="text-warning">Pendiente</td>
                                @elseif($deposit->status == 'Cancelado')
                                    <td class="text-danger">Cancelado</td>
                                @endif
                            </tr>
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

