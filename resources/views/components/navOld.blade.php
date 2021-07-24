<nav class="navbar navbar-exchange navbar-transparent navbar-fixed-top navbar-color-on-scroll">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="{{ route('users.deposits') }}">
                <div class="logo-image">
                    <img src="{{asset('img_web/logo.png')}}" style="width: auto; height: 46px; padding: 6px; overflow: hidden; margin-top: -20px;" class="img-fluid">
                </div>
            </a>
        </div>
        <div class="collapse navbar-collapse">
            <ul class="nav navbar-nav navbar-right">
                @can('admin.dashboard')
                    <li>
                        <a target="_blank" href="{{route('admin.dashboard')}}">
                            <i class="material-icons">stars</i> Admin
                        </a>
                    </li>
                @endcan
                <li class="dropdown">
                    <a href="#" class="dropdown-toggle" data-toggle="dropdown">
                    <i class="material-icons">account_circle</i> {{ strtok(Auth::user()->name, " ")." ".strtok(Auth::user()->lastname, " ") }}
                    <b class="caret"></b>
                    </a>
                    <ul class="dropdown-menu dropdown-with-icons">
                    <li>
                        <a href="{{ route('users.changePassword') }}">
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
                <li>
                    <a href="{{ route('users.contact') }}">
                    <i class="material-icons">email</i> Contacto
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>