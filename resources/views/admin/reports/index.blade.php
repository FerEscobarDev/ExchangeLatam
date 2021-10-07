@extends('layouts.dashboard')
@section('title', 'Reports Accounting - ')
@section('content')
    <div class="d-flex justify-content-between">
        <h3 class="title">Listado de Reportes</h3>
        <div class="card mb-4">
            <div class="card-body p-2">
                <a class="btn bg-gradient-dark mb-0" href="{{ route('admin.reportCreate') }}"><i class="material-icons text-sm">add</i>&nbsp;&nbsp;Add reporte</a>
            </div>
        </div>
    </div>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        @foreach ($years as $year)
            <div class="col-lg-4 mt-lg-0 mt-4">
                <div class="card">
                    <div class="card-header pb-0 p-3">
                        <div class="d-flex justify-content-between">
                            <h6 class="mb-0">Reportes {{ $year->year }}</h6>
                        </div>
                    </div>
                    <div class="card-body p-3">
                        <ul class="list-group list-group-flush list my--3">
                            @foreach ($reports as $report)
                                @if ($report->year == $year->year)                                
                                    <li class="list-group-item px-0 border-0">
                                        <div class="row align-items-center">
                                            <div class="col">
                                                <p class="text-xs font-weight-bold mb-0">Facturas {{ $report->reportType->name }}:</p>
                                                <h6 class="text-sm font-weight-normal mb-0">{{ $report->month->name.' '.$report->year }}</h6>
                                            </div>
                                            <div class="col text-center">
                                                <p class="text-sm mb-1 text-capitalize font-weight-bold">
                                                    <a href="{{ route('admin.reportShow', [$report]) }}" class="mx-5"> 
                                                        <span class="text-sm text-end text-success font-weight-bolder mt-auto mb-0">ver </span>
                                                    </a>
                                                </p>
                                            </div>
                                        </div>
                                        <hr class="horizontal dark mt-3 mb-1">
                                    </li>
                                @endif
                            @endforeach
                        </ul>
                    </div>
                </div>
            </div>
        @endforeach
    </div>  
@endsection