<div class="row">
    <div class="col-md-6 col-md-offset-3">
        <div class="profile-tabs">
            <div class="nav-align-center">
                <ul class="nav nav-pills nav-pills-icons" role="tablist">
                    <li class="{{ request()->routeIs('users.deposits') ? 'active' : '' }}">
                        <a href="{{route('users.deposits')}}">
                            <i class="material-icons">arrow_upward</i>
                            Depósitos a FBS
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('users.withdrawals') ? 'active' : '' }}">
                        <a href="{{route('users.withdrawals')}}">
                            <i class="material-icons">arrow_downward</i>
                            Retiros de FBS
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('users.edit') ? 'active' : '' }}">
                        <a href="{{route('users.edit')}}">
                            <i class="material-icons">account_circle</i>
                            Datos Personales
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('users.accounts') ? 'active' : '' }}">
                        <a href="{{route('users.accounts')}}">
                            <i class="material-icons">account_balance</i>
                            Datos Bancarios
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>