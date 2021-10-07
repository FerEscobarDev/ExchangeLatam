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
                @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')                                        
                    <td>{{ $transaction->transactionable->type }}</td>
                @else
                    <td>{{ substr($transaction->transactionable_type, 11) }}</td>
                @endif
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
                @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')
                    <td>{{ date('d/m/Y', strtotime($transaction->transactionable->date)) }}</td>
                @else
                    <td>{{ date('d/m/Y', strtotime($transaction->transactionable->application_date)) }}</td>
                @endif
                <td>{{ $index + 1 }}</td>
                <td>003</td>
                <td>Compra de {{ $transaction->transactionable->amount_usd}} USD</td>
                <td>1</td>
                <td>{{ $transaction->transactionable->amount_cop }}</td>
            </tr>
        @endforeach                    
    </tbody>
</table>