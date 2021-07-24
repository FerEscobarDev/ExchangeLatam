{{-- Se imprimen las alertas --}}
@if (isset(Auth::user()->notices))
    @foreach (Auth::user()->notices as $notice)
        @if ($notice->type == 'alert')
            <div class="row">
                <div class="col-md-12">
                    <div class="alert alert-warning">
                        <div class="container-fluid">
                            <div class="alert-icon">
                                <i class="material-icons">notification_important</i>
                            </div>
                            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true"><i class="material-icons">clear</i></span>
                            </button>
                            <b>Atención!</b> {{ $notice->content }}
                        </div>
                    </div>
                </div>
            </div>
        @endif
    @endforeach
@endif
