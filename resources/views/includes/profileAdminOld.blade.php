<div class="row">
    <div class="col-xs-6 col-xs-offset-3">
        <div class="text-center">
            <div class="name">
                <h3 class="title">{{ $user->name. ' ' .$user->lastname }}
                </h3>
                <h6 class="text-warning">
                    @if ($user->vip == 'yes')
                        Cliente VIP
                    @else
                        Cliente
                    @endif
                </h6>
            </div>
        </div>
    </div>
</div>