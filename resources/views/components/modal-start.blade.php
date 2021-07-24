<div>
    <x-modal>
        <x-slot name="content">
            <div class="card">
                <div class="card-header card-header-primary text-center">
                    <h4 class="card-title">
                        Hola, {{ strtok(auth()->user()->name, ' ') . ' ' . strtok(auth()->user()->lastname, ' ') }}
                    </h4>
                </div>
                @if(!empty($noticesAll))
                    @foreach ($noticesAll as $notice)
                        <div class="card-body">
                            <h4 class="card-title"> <b>{{$notice->title}}</b> </h4>
                            <hr>
                            <p class="card-text">
                                {{$notice->content}}
                            </p>
                        </div>
                    @endforeach
                @endif
                @isset(auth()->user()->notices)
                    @foreach (auth()->user()->notices as $notice)
                    <div class="card-body">
                        <h4 class="card-title"> <b>{{$notice->title}}</b> </h4>
                        <hr>
                        <p class="card-text">
                            {{$notice->content}}
                        </p>
                    </div>
                    @endforeach
                @endisset
            </div>
        </x-slot>
        <x-slot name="footer">
            <x-button type="button" dismiss="modal" color="secundary">
        </x-slot>
    </x-modal>
</div>