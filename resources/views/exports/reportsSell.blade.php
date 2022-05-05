<table>                       
    <thead>
        <tr>
            <th>Tipo</th>
            <th>Tipo documento</th>
            <th>Numero</th>
            <th>Fecha</th>
            <th>Descripción</th>
            <th>Valor</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($transactions as $index => $transaction)
            <tr>
                <td>{{ substr($transaction->transactionable_type, 11) }}</td>
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
                <td>Venta de {{ $transaction->transactionable->amount_usd}} USD</td>
                <td>{{ $transaction->transactionable->amount_cop }}</td>
            </tr>
        @endforeach                    
    </tbody>
</table>