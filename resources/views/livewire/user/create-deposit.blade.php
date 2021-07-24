<div>
    <x-button type="button" color="primary" class="float-right">
        Solicitar depósito
    </x-button>

    <x-modal wire:model='open'>
        <x-slot name="title">
            Solicitud de depósito
        </x-slot>

        <x-slot name="content">
            <div class="input-group">
                <input type="number" wire:model="fbs_account" class="form-control input-register" placeholder="# Cuenta FBS">
            </div>
            <div class="input-group">
                <input type="number" wire:model="amount_usd" class="form-control input-register" placeholder="Monto en USD">
            </div>
            <div wire:ignore>  
                <select class="select" data-style="btn btn-link" title="Seleccionar banco" name="account_id">
                    <option disabled selected>Seleccione un banco</option>
                    @foreach ($accounts as $account)
                        <option value="{{$account->id}}">{{$account->bank->name}}</option>
                    @endforeach
                </select>
            </div>
            <div class="text-center mt-5">
                <table class="table table-condensed table-bordered">
                   <tr>
                      <th>Valor en COP</th>
                      <td>nn</td>
                   </tr>
                   <tr>
                      <th>Comisión 1.5% IVA incl</th>
                      <td>{{$fbs_account}}</td>
                   </tr>
                   <tr>
                      <th>Descuento VIP</th>
                      <td>{{$amount_usd}}</td>
                   </tr>
                   <tr>
                      <th>Total</th>
                      <td>{{$account_id}}</td>
                   </tr>
                </table>
             </div>
        </x-slot>

        <x-slot name="footer">
            <x-button type="button" color="default">
                Cancelar
            </x-button>
            <x-button type="button" color="primary">
                Solicitar
            </x-button>
        </x-slot>
    </x-modal>
    @push('scripts')        
        <script src="{{asset('js-dash/plugins/bootstrap-selectpicker.js')}}" type="text/javascript"></script>

    @endpush
</div>
