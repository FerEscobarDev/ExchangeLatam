<table>
    <thead>
        <tr>
            <th>Tipo documento</th>
            <th>Número</th>
            <th>Primer Nombre</th>
            <th>Segundo Nombre</th>
            <th>Primer Apellido</th>
            <th>Segundo Apellido</th>
            <th>Ciudad</th>
            <th>Dirección</th>
            <th>Correo</th>
            <th>Celular</th>
        </tr>
    </thead>
    <tbody>
        @foreach ($users as $user)
            <tr>
                <td>
                    @if($user->doc_type == 'Cedula de ciudadania')
                        CC
                    @elseif($user->doc_type == 'Cedula de extranjería')
                        CE
                    @elseif($user->doc_type == 'Pasaporte')
                        PS
                    @elseif($user->doc_type == 'NIT')
                    NIT
                    @else
                        No tiene
                    @endif
                </td>
                <td>{{ $user->doc_num }}</td>
                <td>{{ strtok($user->name, " ") }}</td>
                <td>{{ strtok(" ") }}</td>
                <td>{{ strtok($user->lastname, " ") }}</td>
                <td>{{ strtok(" ") }}</td>
                <td>{{ $user->city }}</td>
                <td>{{ $user->address }}</td>
                <td>{{ $user->email }}</td>
                <td>{{ $user->mobil }}</td>
            </tr>
        @endforeach                    
    </tbody>
</table>