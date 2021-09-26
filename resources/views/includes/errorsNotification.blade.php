@if($errors->any())
    @foreach($errors->all() as $error)
        <div class="row">
            <div class="col-md-12">
                <div class="alert alert-danger alert-dismissible fade show" role="alert">
                    <span class="alert-icon align-middle">
                      <span class="material-icons text-md"> thumb_up_off_alt </span>
                    </span>
                    <span class="alert-text"><strong>Error!</strong>  {{ $error }}</span>
                    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            </div> 
        </div>
    @endforeach
@endif

@if (session()->has('error'))
    <div class="row">
        <div class="col-md-12"> 
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <span class="alert-icon align-middle">
                  <span class="material-icons text-md">
                  thumb_up_off_alt
                  </span>
                </span>
                <span class="alert-text"><strong>Error!</strong>  {{ session()->get('error') }}</span>
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </div>
    </div>
@endif
