<table>
    <thead>
        <tr>
            <th class="text-uppercase text-secondary text-sm opacity-7">Id</th>
            <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo</th>
            <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Tipo documento</th>
            <th class="text-uppercase text-secondary text-sm opacity-7">Numero</th>
            <th class="text-uppercase text-secondary text-sm opacity-7 text-center">Nombres</th>
            <th class="text-uppercase text-secondary text-sm opacity-7">Fecha factura</th>
            <th class="text-uppercase text-secondary text-sm opacity-7">Total</th>
            <th class="text-uppercase text-secondary text-sm opacity-7">Monto USD</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($transactions as $index => $transaction)
            <tr>                                    
                <td class="text-sm font-weight-normal align-middle">{{ $index + 1 }}</td>
                @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')                                        
                    <td>{{ $transaction->transactionable->type }}</td>
                @else
                    <td>{{ substr($transaction->transactionable_type, 11) }}</td>
                @endif
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
                <td class="text-sm font-weight-normal align-middle">
                    {{ strtok($transaction->transactionable->user->name, " ")." ".strtok($transaction->transactionable->user->lastname, " ") }}
                </td>
                @if (substr($transaction->transactionable_type, 11) == 'DollarPurchase')
                    <td>{{ date('d/m/Y', strtotime($transaction->transactionable->date)) }}</td>
                @elseif(substr($transaction->transactionable_type, 11) == 'Deposit')
                    <td>{{ date('d/m/Y', strtotime($transaction->transactionable->completed_date)) }}</td>
                @else
                    <td>{{ date('d/m/Y', strtotime($transaction->transactionable->application_date)) }}</td>
                @endif
                @if(substr($transaction->transactionable_type, 11) == 'Deposit')
                    <td>{{ $transaction->transactionable->amount_cop }}</td>
                @else
                    <td>{{ $transaction->transactionable->total }}</td>
                @endif
                <td>{{ $transaction->transactionable->amount_usd }}</td>
            </tr>
        @endforeach                    
    </tbody>
</table>