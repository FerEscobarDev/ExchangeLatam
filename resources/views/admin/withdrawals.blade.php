@extends('layouts.layoutAdminOld')
@section('titulo', 'Withdrawals - ')
@section('content')
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
    <h3 class="title">Listado de retiros</h3>
    <div class="row">
        <div class="table-responsive">
            <table id="withdrawals_table" class="table table-striped table-bordered text-center">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Usuario</th>
                        <th>Cuenta</th>
                        <th>Monto USD</th>
                        <th>Monto COP</th>
                        <th>Total</th>
                        <th>Fecha limite</th>
                        <th>Estado</th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody class="td-actions">

                </tbody>
            </table>
        </div>
    </div> 
@endsection
@push('js-1')
    <script type="text/javascript">
        $(document).ready(function() {
            $('#withdrawals_table').DataTable({   
                dom: 'Blfrtip',
                buttons: [
                    {
                        extend: 'excelHtml5',
                        exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
                        }
                    },
                    {
                        extend: 'pdfHtml5',
                        exportOptions: {
                            columns: [ 0, 1, 2, 3, 4, 5, 6, 7 ]
                        }
                    }
                ],
                language: {
                    "sProcessing":     "Procesando...",
                    "sLengthMenu":     "Mostrar _MENU_ registros",
                    "sZeroRecords":    "No se encontraron resultados",
                    "sEmptyTable":     "Ningún dato disponible en esta tabla",
                    "sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_ registros",
                    "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0 registros",
                    "sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
                    "sInfoPostFix":    "",
                    "sSearch":         "Buscar:",
                    "sUrl":            "",
                    "sInfoThousands":  ",",
                    "sLoadingRecords": "Cargando...",
                    "oPaginate": {
                            "sFirst":    "Primero",
                            "sLast":     "Último",
                            "sNext":     "Siguiente",
                            "sPrevious": "Anterior"
                    },
                    "oAria": {
                            "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
                            "sSortDescending": ": Activar para ordenar la columna de manera descendente"
                    }
                },
                "ordering": true,
                order: [[ 0, "asc" ]],
                processing: true,
                responsive: true,
                autoWidth: false,
                serverSide: true,
                ajax: "{{route('admin.withdrawalsData')}}",
                columns: [
                    {data: 'id', name: 'withdrawals.id'},
                    {data: 'name', name: 'users.name'},
                    {data: 'fbs_account', name: 'withdrawals.fbs_account'},
                    {data: 'amount_usd', name: 'withdrawals.amount_usd'},
                    {data: 'amount_cop', name: 'withdrawals.amount_cop'},
                    {data: 'total', name: 'withdrawals.total'},
                    {data: 'expiration_date', name: 'withdrawals.expiration_date'},
                    {data: 'status', name: 'withdrawals.status'},
                    {data: 'buttons', name: 'buttons'},
                ],
            });
        });
        
        $(document).ready(function() {
            $("div.dataTables_length select").removeClass("form-control");
            $("div.dataTables_filter input").removeClass("form-control");
        });
    </script>
@endpush