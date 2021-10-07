<table>                       
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Encabezado</th>
            <th>Tipo documento</th>
            <th>Numero</th>
            <th>Fecha factura</th>
            <th>Encabezado</th>
            <th>Ítem</th>
            <th>Descripción</th>
            <th>Cant</th>
            <th>Vr Unitario</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($transactions as $index => $transaction)
            <tr>
                <td>{{ substr($transaction->transactionable_type, 11) }}</td>
                <td>{{ $index + 1 }}</td>
                <td>
                    @if($transaction->transactionable->user->doc_type == 'Cedula de ciudadania')
                        CC
                    @elseif($transaction->transactionable->user->doc_type == 'Cedula de extranjería')
                        CE
                    @elseif($transaction->transactionable->user->doc_type == 'Pasaporte')
                        PS
                    @else
                        No tiene
                    @endif
                </td>
                <td>{{ $transaction->transactionable->user->doc_num }}</td>
                <td>{{ date('d/m/Y', strtotime($transaction->transactionable->completed_date)) }}</td>
                <td>{{ $index + 1 }}</td>
                <td>002</td>
                <td>Venta de {{ $transaction->transactionable->amount_usd}} USD</td>
                <td>1</td>
                <td>{{ $transaction->transactionable->amount_cop }}</td>
            </tr>
            <tr>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{ $index + 1 }}</td>
                <td>001</td>
                <td>Comisión 1.5% por servicio de intercambio</td>
                <td>1</td>
                <td>{{ $transaction->transactionable->comission }}</td>
            </tr>
        @endforeach                    
    </tbody>
</table>