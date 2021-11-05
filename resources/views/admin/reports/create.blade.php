@extends('layouts.dashboard')
@section('title', 'New Report')
@section('content')
    <h3 class="title">Generar Nuevo Reporte</h3>
    @include('includes.successNotification')
    @include('includes.errorsNotification')
    <div class="row">
        <div class="col-6 col-lg-3 mt-lg-0 mt-4 mx-auto">
            <div class="card">
                <div class="card-body p-3">
                    <form method="POST" action="{{ route('admin.reportStore') }}" >
                        @csrf
                        <div class="input-group input-group-static mb-4">
                            <label for="reportType" class="ms-0">Tipo de reporte</label>
                            <select class="form-control" id="reportType" name="reportType">
                                @foreach ($types as $type)                            
                                    <option value="{{ $type->id }}"
                                        {{ old('reportType') == $type->id ? 'selected' : '' }}>
                                        {{ $type->name }} 
                                    </option>
                                @endforeach
                            </select>
                        </div>                        
                        <div class="input-group input-group-static my-3">
                            <label for="month">Periodo</label>
                            <input type="month" class="form-control" name="month">
                        </div>
                        <div class="d-flex justify-content-center">                            
                            <button class="btn bg-gradient-dark mb-0" type="submit">Generar Reporte</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>  
@endsection