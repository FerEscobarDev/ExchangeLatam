@extends('layouts.dashboard')
@section('title', 'Registro de transacción')
@section('content')
    <div class="row">
        <div class="col-md-6 mx-auto">
            <div class="card mb-4">
                <div class="card-body p-3 pt-0">
                    <div class="card-header text-center">
                        <h4 class="font-weight-normal">
                            Registrar transacción
                        </h4>
                    </div>
                    <form action="{{ Route('admin.dollarPurchaseStore') }}" method="POST" enctype="multipart/form-data">
                        @csrf
                        
                        <div class="input-group input-group-outline mb-3 @error('doc_num') is-invalid focused is-focused @enderror @if(empty($errors->has('doc_num')) && !empty(old('doc_num'))) is-valid focused is-focused @endif">
                            <label class="form-label" for="doc_num">Número de documento</label>
                            <input type="number" class="form-control" name="doc_num" value="{{ old('doc_num') }}">
                        </div>
                        <div class="input-group input-group-outline my-3 @error('type_transaction') is-invalid focused is-focused @enderror @if(empty($errors->has('type_transaction')) && !empty(old('type_transaction'))) is-valid focused is-focused @endif">
                            <select class="form-control" name="type_transaction">
                                <option value=" ">Seleccione tipo de transacción</option>
                                <option value="Compra TC" {{ old('type_transaction') == 'Compra TC' ? 'selected' : '' }}>Compra TC</option>
                                <option value="Retiro TC" {{ old('type_transaction') == 'Retiro TC' ? 'selected' : '' }}>Retiro TC</option>
                                <option value="Compra Socio" {{ old('type_transaction') == 'Compra Socio' ? 'selected' : '' }}>Compra Socio</option>
                                <option value="Compra Skrill" {{ old('type_transaction') == 'Compra Skrill' ? 'selected' : '' }}>Compra Skrill</option>
                            </select>
                        </div>
                        <div class="input-group input-group-outline my-3 @error('amount_usd') is-invalid focused is-focused @enderror @if(empty($errors->has('amount_usd')) && !empty(old('amount_usd'))) is-valid focused is-focused @endif">
                            <label class="form-label" for="amount_usd">Monto USD</label>
                            <input type="text" class="form-control" name="amount_usd" value="{{ old('amount_usd') }}">
                        </div>
                        <div class="input-group input-group-outline my-3 @error('amount_cop') is-invalid focused is-focused @enderror @if(empty($errors->has('amount_cop')) && !empty(old('amount_cop'))) is-valid focused is-focused @endif">
                            <label class="form-label" for="amount_cop">Monto COP</label>
                            <input type="text" class="form-control" name="amount_cop" value="{{ old('amount_cop') }}">
                        </div>
                        <div class="input-group input-group-outline my-3 @error('cuatro_por_mil') is-invalid focused is-focused @enderror @if(empty($errors->has('cuatro_por_mil')) && !empty(old('cuatro_por_mil'))) is-valid focused is-focused @endif">
                            <label class="form-label" for="cuatro_por_mil">4 X 1000</label>
                            <input type="text" class="form-control" name="cuatro_por_mil" value="{{ old('cuatro_por_mil') }}">
                        </div>
                        <div class="input-group input-group-static my-3 @error('date') is-invalid focused is-focused @enderror @if(empty($errors->has('date')) && !empty(old('date'))) is-valid focused is-focused @endif">
                            <label>Fecha</label>
                            <input type="date" class="form-control" name="date" value="{{ old('date') }}">
                        </div>
                        <div class="my-3">
                            <label class="form-label" for="voucher">Comprobante</label>                            
                            <input class="form-control border" name="voucher" type="file" />                               
                        </div>
                        <div class="d-flex justify-content-center">                            
                            <button class="btn bg-gradient-dark mb-0" type="submit">Registrar</button>
                        </div>
                    </form>
                    @if($errors->any())
                        <ul class="pt-3">
                            @foreach($errors->all() as $message)    
                                <li class="text-danger">
                                    <span class="text-sm"><b>{{ $message }} </b></span> 
                                </li>
                            @endforeach
                        </ul>
                    @endif
                </div>
            </div>
        </div>
    </div>
@endsection