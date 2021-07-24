@if($errors->any())
    @foreach($errors->all() as $error)
        <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger">
                <div class="container-fluid">
                    <div class="alert-icon">
                        <i class="material-icons">error</i>
                    </div>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="material-icons">clear</i></span>
                    </button>
                    <b>Error!</b> {{ $error }}
                </div>
            </div>
        </div> 
        </div>
    @endforeach
@endif

@if (session()->has('error'))
    <div class="row">
        <div class="col-md-12">
            <div class="alert alert-danger">
                <div class="container-fluid">
                    <div class="alert-icon">
                        <i class="material-icons">error</i>
                    </div>
                    <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true"><i class="material-icons">clear</i></span>
                    </button>
                    <b>Error!</b> {{ session()->get('error') }}
                </div>
            </div>
        </div>
    </div>
@endif
