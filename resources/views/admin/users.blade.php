@extends('layouts.layoutAdminOld')
@section('titulo', 'Users - ')
@section('content')
    <h3 class="title">Listado de usuarios</h3>
    @include('includes.successNotificationOld')
    @include('includes.errorsNotificationOld')
        <div class="row">
            <div class="table-responsive">
                <table id="users_table" class="table table-striped table-bordered text-center">
                    <thead>
                        <tr>
                            <th><i class="fa fa-hashtag"></i> Id</th>
                            <th><i class="fa fa-address-card"></i> Documento</th>
                            <th><i class="fa fa-user-circle"></i> Nombres</th>
                            <th><i class="fa fa-user-circle"></i> Apellidos</th>
                            <th><i class="fa fa-envelope"></i> Correo</th>
                            <th><i class="fa fa fa-map-marker"></i> Ciudad</th>
                            <th><i class="fa fa-mobile"></i> Celular</th>
                        </tr>
                    </thead>
                    <tbody class="td-actions">
                </table>
            </div>
        </div>
@endsection
@push('js-1')
    <script type="text/javascript">
        $(document).ready(function() {
            $('#users_table').DataTable({
                "processing": true,
                "serverSide": true,
                "ajax": "{{ route('admin.usersData') }}",
                "columns": [
                    {data: 'id', name: 'id'},
                    {data: 'doc_num', name: 'doc_num'},
                    {data: 'name', name: 'name'},
                    {data: 'lastname', name: 'lastname'},
                    {data: 'email', name: 'email'},
                    {data: 'city', name: 'city'},
                    {data: 'mobil', name: 'mobil'},
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
                "stateSave": true,
                "order": [[ 0, "asc" ]],
                "responsive": true,
                "autoWidth": false,
            });
        });
        
        $(document).ready(function() {
            $("div.dataTables_length select").removeClass("form-control");
            $("div.dataTables_filter input").removeClass("form-control");
        });
    </script>
@endpush