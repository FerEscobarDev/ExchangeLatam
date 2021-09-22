@if (session()->has('success-login'))
    <div class="modal fade" id="modalAniversary" role="dialog">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-body">
                    <div class="card">
                        <div class="header header-primary text-center">
                            <h4 class="modal-title">Hola! {{ Auth::user()->name }}</h4>
                        </div>
                        <div class="card">
                            <div class="card-body">
                                {{-- <h4 class="card-title">!Participa en el sorteo de 300 USD!</h4>
                              <p class="card-text">Encuentra toda la información sobre este sorteo <a href="" class="btn-link btn-success">aquí</a> y pierdas esta gran oportunidad.</p> --}}
                            </div>
                            <img class="card-img-bottom" src="{{ asset('img_web/aniversario.jpg') }}"
                                alt="Imagen promo aniversario">
                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <a type="button" target="_blank" href="{{ route('campaign.sorteoAniversario') }}" class="btn btn-info">Términos y condiciones</a>
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>
        </div>
    </div>
    <script type="text/javascript">
        $(window).on('load', function() {
            $('#modalAniversary').modal('show');
        });
    </script>
@endif
