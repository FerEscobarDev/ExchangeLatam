@if (session()->has('success'))
    <div class="row">
        <div class="col-md-12">
        <div class="alert alert-success">
            <div class="container-fluid">
                <div class="alert-icon">
                    <i class="material-icons">check</i>
                </div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"><i class="material-icons">clear</i></span>
                </button>
                <b>Realizado!</b> {{ session()->get('success') }}
            </div>
        </div>
        </div>
    </div>
@endif

@if (session('status'))
    <div class="row">
        <div class="col-md-12">
        <div class="alert alert-success">
            <div class="container-fluid">
                <div class="alert-icon">
                    <i class="material-icons">check</i>
                </div>
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true"><i class="material-icons">clear</i></span>
                </button>
                <b>Realizado!</b> Contraseña actualizada correctamente.
            </div>
        </div>
        </div>
    </div>
@endif