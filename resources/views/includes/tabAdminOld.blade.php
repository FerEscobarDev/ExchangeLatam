<div class="row">
    <div class="col-md-8 col-md-offset-2">
        <div class="profile-tabs">
            <div class="nav-align-center">
                <ul class="nav nav-pills nav-pills-icons" role="tablist">
                    <li class="{{ request()->routeIs('admin.usersShowDeposits', ['id' => $user]) ? 'active' : '' }}">
                        <a href="{{route('admin.usersShowDeposits', ['id' => $user])}}">
                            <i class="material-icons">arrow_upward</i>
                            Depósitos a FBS
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('admin.usersShowWithdrawals', ['id' => $user]) ? 'active' : '' }}">
                        <a href="{{route('admin.usersShowWithdrawals', ['id' => $user])}}">
                            <i class="material-icons">arrow_downward</i>
                            Retiros de FBS
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('admin.usersEditData', ['id' => $user]) ? 'active' : '' }}">
                        <a href="{{route('admin.usersEditData', ['id' => $user])}}">
                            <i class="material-icons">account_circle</i>
                            Datos Personales
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('admin.usersShowAccounts', ['id' => $user]) ? 'active' : '' }}">
                        <a href="{{route('admin.usersShowAccounts', ['id' => $user])}}">
                            <i class="material-icons">account_balance</i>
                            Datos Bancarios
                        </a>
                    </li>
                    <li class="{{ request()->routeIs('admin.usersNotices', ['id' => $user]) ? 'active' : '' }}">
                        <a href="{{route('admin.usersNotices', ['id' => $user])}}">
                            <i class="material-icons">notification_important</i>
                            Alertas
                        </a>
                    </li>
                    @if($user->verified == 1)
                        <li class="{{ request()->routeIs('admin.usersVerification', ['id' => $user]) ? 'active' : '' }}">
                            <a href="{{route('admin.usersVerification', ['id' => $user])}}">
                                <i class="material-icons">verified_user</i>
                                Verificación pendiente
                            </a>
                        </li>
                    @endif
                </ul>
            </div>
        </div>
    </div>
</div>