<div>
    <div class="sidebar" data-color="green" data-background-color="black" data-image="{{ asset('img_web/city-sidebar.jpg') }}">
        <div class="logo">
            <a href="{{ route('company.index') }}" class="simple-text logo-mini">
                <img src="{{ asset('img_web/logo-mini.png') }}" class="img-fluid">
            </a>
            <a href="{{ route('user.dashboard') }}" class="simple-text logo-normal">
                ExchangeLatam
            </a>
        </div>
        <div class="sidebar-wrapper">
            <div class="user">
                <div class="photo">
                    @isset(auth()->user->picture)
                        <img src="{{ asset('storage/' . auth()->user->picture) }}">
                    @else
                        <img src="{{ asset('img_web/default-avatar.png') }}">
                    @endisset
                </div>
                <div class="user-info">
                    <a data-toggle="collapse" href="#collapseProfile" class="username">
                        <span>
                            {{ strtok(auth()->user()->name, ' ') . ' ' . strtok(auth()->user()->lastname, ' ') }}
                            <b class="caret"></b>
                        </span>
                    </a>
                    <div class="collapse" id="collapseProfile">
                        <ul class="nav">
                            <li class="nav-item">
                                <a class="nav-link" href="#">
                                    @isset(auth()->user->picture)
                                        <span class="sidebar-mini"> CF </span>
                                        <span class="sidebar-normal"> Cambiar Foto </span>
                                    @else
                                        <span class="sidebar-mini"> SF </span>
                                        <span class="sidebar-normal"> Subir Foto </span>
                                    @endisset
                                </a>
                            </li>{{-- <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="sidebar-mini"> EP </span>
                                <span class="sidebar-normal"> Edit Profile </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#">
                                <span class="sidebar-mini"> S </span>
                                <span class="sidebar-normal"> Settings </span>
                            </a>
                        </li> --}}
                        </ul>
                    </div>
                </div>
            </div>
            <ul class="nav">
                <li class="nav-item {{ request()->routeIs('user.dashboard') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('user.dashboard') }}">
                        <i class="material-icons">dashboard</i>
                        <p> Dashboard </p>
                    </a>
                </li>
                <li class="nav-item {{ request()->routeIs('deposits.index') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('deposits.index') }}">
                        <i class="material-icons">arrow_upward</i>
                        <p> Depósitos a FBS </p>
                    </a>
                </li>
                <li class="nav-item {{ request()->routeIs('withdrawals.index') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('withdrawals.index') }}">
                        <i class="material-icons">arrow_downward</i>
                        <p>Retiros de FBS </p>
                    </a>
                </li>
                <li class="nav-item {{ request()->routeIs('accounts.index') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('accounts.index') }}">
                        <i class="material-icons">account_balance</i>
                        <p>Datos bancarios</p>
                    </a>
                </li>
                <li class="nav-item {{ request()->routeIs('verification.create') ? 'active' : '' }}">
                    <a class="nav-link" href="{{ route('verification.create') }}">
                        <i class="material-icons">fingerprint</i>
                        <p>Verificar cuenta</p>
                    </a>
                </li>
            </ul>
        </div>
        <div class="sidebar-background"></div>
    </div>
</div>
