@if (session()->has('success'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-success alert-dismissible fade show text-white" role="alert">
                <span class="alert-icon align-middle">
                    <span class="material-icons text-md"> thumb_up_off_alt </span>
                </span>
                <span class="alert-text"><strong>Realizado!</strong>  {{ session()->get('success') }}</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
@endif