<nav class="navbar navbar-exchange navbar-fixed-top">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ route('admin.dashboard') }}">
                <div class="logo-image">
                    <img src="{{asset('img_web/logo.png')}}" style="width: auto; height: 46px; padding: 6px; overflow: hidden; margin-top: -20px;" class="img-fluid">
                </div>
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                @can('admin.dashboard')                    
                    <li class="{{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                        <a href="{{route('admin.dashboard')}}">
                            <i class="material-icons">notification_important</i>
                            Notificaciones
                        </a>
                    </li>
                @endcan
                @can('user.index')                    
                    <li class="{{ request()->routeIs('user.index') ? 'active' : '' }}">
                        <a href="{{route('user.index')}}">
                            <i class="material-icons">supervised_user_circle</i>
                            Usuarios
                        </a>
                    </li>
                @endcan
                @can('deposit.index')
                    <li class="{{ request()->routeIs('deposit.index') ? 'active' : '' }}">
                        <a href="{{route('deposit.index')}}">
                            <i class="material-icons">arrow_upward</i>
                            Depósitos a FBS
                        </a>
                    </li>
                @endcan
                @can('withdrawal.index')
                    <li class="{{ request()->routeIs('withdrawal.index') ? 'active' : '' }}">
                        <a href="{{route('withdrawal.index')}}">
                            <i class="material-icons">arrow_downward</i>
                            Retiros de FBS
                        </a>
                    </li>
                @endcan
                {{-- <li class="{{ request()->routeIs('company.config') ? 'active' : '' }}">
                    <a href="{{route('company.config')}}">
                        <i class="material-icons">settings</i>
                        Configuración
                    </a>
                </li> --}}
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                        <i class="material-icons">settings</i>
                        Configuración
                        <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-with-icons">
                        @can('admin.dollarPriceIndex')
                            <li>
                                <a href="{{ route('admin.dollarPriceIndex') }}">
                                    <i class="material-icons">paid</i> Precio Dolar
                                </a>
                            </li>
                        @endcan
                        @cannot('admin.dollarPriceIndex')
                            <li>
                                <a class="disabled" href="#">
                                    <i class="material-icons">paid</i> Precio Dolar
                                </a>
                            </li>
                        @endcannot
                        @can('admin.roleIndex')
                            <li>
                                <a href="{{ route('admin.roleIndex') }}">
                                    <i class="material-icons">manage_accounts</i> Roles
                                </a>
                            </li>
                        @endcan
                        @cannot('admin.roleIndex')
                            <li>
                                <a class="disabled" href="#">
                                    <i class="material-icons">manage_accounts</i> Roles
                                </a>
                            </li>
                        @endcannot
                        @can('admin.permissionIndex')
                            <li>
                                <a href="{{ route('admin.permissionIndex') }}">
                                    <i class="material-icons">how_to_reg</i> Permisos
                                </a>
                            </li>
                        @endcan
                        @cannot('admin.permissionIndex')
                            <li>
                                <a class="disabled" href="#">
                                    <i class="material-icons">how_to_reg</i> Permisos
                                </a>
                            </li>
                        @endcannot
                        @can('admin.rateIndex')
                            <li>
                                <a href="{{ route('admin.rateIndex') }}">
                                    <i class="material-icons">card_giftcard</i> Ofertas
                                </a>
                            </li>
                        @endcan
                        @cannot('admin.rateIndex')
                            <li>
                                <a class="disabled" href="#">
                                    <i class="material-icons">card_giftcard</i> Ofertas
                                </a>
                            </li>
                        @endcannot            
                    </ul>
                </li>
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="material-icons">account_circle</i> {{ strtok(Auth::user()->name, " ")." ".strtok(Auth::user()->lastname, " ") }}
                    <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-with-icons">
                    <li>
                        <a href="{{ route('admin.changePassword') }}">
                        <i class="material-icons">lock</i> Cambiar contraseña
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                        <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
                        <i class="material-icons">logout</i> Cerrar sesión
                        </a>
                    </li>
                    </ul>
                </li>
            </ul>
        </div>
    </div>
</nav>