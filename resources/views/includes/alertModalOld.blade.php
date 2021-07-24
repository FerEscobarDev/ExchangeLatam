{{-- Se imprimen los modals --}}
@if (session()->has('success-login'))
    @if( (!empty($noticeModal) || !empty($noticesAll)) )
        <div class="modal fade" id="alertinfo" role="dialog">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <div class="card">
                            <div class="header header-primary text-center">
                                <h4 class="modal-title">Hola! {{ Auth::user()->name }}</h4>
                            </div>
                            @foreach ($noticesAll as $notice)
                                <div class="card-content">
                                    <h4 class="card-title">{{ $notice->title }}</h4>
                                    {!! $notice->content !!}
                                </div>
                            @endforeach
                            @foreach ($noticeModal as $notice)
                                @if ($notice->type == 'modal')
                                    <div class="card-content">
                                        <h4 class="card-title">{{ $notice->title }}</h4>
                                        {!! $notice->content !!}
                                    </div>
                                @endif
                            @endforeach
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript">
            $(window).on('load', function() {
                $('#alertinfo').modal('show');
            });

        </script>
    @endif
@endif
