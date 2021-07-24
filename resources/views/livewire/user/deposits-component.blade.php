<div class="col-md-12 ml-auto mr-auto">
    <div class="card">
        <div class="card-header card-header-primary card-header-icon">
            <div class="card-icon">
                <i class="material-icons">autorenew</i>
            </div>
            <h4 class="card-title">Listado de depósitos</h4>
        </div>
        <div class="card-body">
            <div class="toolbar">
                <livewire:user.create-deposit />
            </div>
            <div class="material-datatables">
                <table id="deposits" class="table table-striped table-no-bordered table-hover" cellspacing="0" width="100%" style="width:100%">
                    <thead class="text-center">
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

