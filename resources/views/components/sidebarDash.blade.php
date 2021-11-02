<aside class="sidenav navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3   bg-gradient-dark" id="sidenav-main">
    <div class="sidenav-header">
        <i class="fas fa-times p-3 cursor-pointer text-white opacity-5 position-absolute end-0 top-0 d-none d-xl-none" aria-hidden="true" id="iconSidenav"></i>
        <a class="navbar-brand m-0" href="{{route('admin.dashboard')}}" target="_blank">
            <img src="{{ asset('img_web/logo-mini.png') }}" class="navbar-brand-img h-100" alt="main_logo">
            <span class="ms-1 font-weight-bold text-white">ExchangeLatam</span>
        </a>
    </div>
    <hr class="horizontal light mt-0 mb-2">
    <div class="collapse navbar-collapse  w-auto h-auto max-height-vh-100 h-100" id="sidenav-collapse-main">
        <ul class="navbar-nav">
            <li class="nav-item mb-2 mt-0">
                <a data-bs-toggle="collapse" href="#ProfileNav" class="nav-link text-white" aria-controls="ProfileNav" role="button" aria-expanded="false">    
                    @isset(Auth::user()->picture)
                        <img src="{{asset('storage/'.Auth::user()->picture)}}" class="avatar">
                    @else
                        <img src="{{asset('img_web/default.png')}}" class="avatar">
                    @endisset
                    <span class="nav-link-text ms-2 ps-1">{{ strtok(Auth::user()->name, " ")." ".strtok(Auth::user()->lastname, " ") }}</span>
                </a>
                <div class="collapse" id="ProfileNav">
                    <ul class="nav ">
                        <li class="nav-item">
                            <a class="nav-link text-white" href="{{ route('admin.changePassword') }}">
                                <span class="sidenav-mini-icon"> <i class="material-icons">lock</i> </span>
                                <span class="sidenav-normal  ms-3  ps-1"> Cambiar Contraseña </span>
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link text-white "  href="{{ route('logout') }}" onclick="event.preventDefault(); document.getElementById('logout-form').submit();">
                                <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">@csrf</form>
                                <span class="sidenav-mini-icon"> <i class="material-icons">logout</i> </span>
                                <span class="sidenav-normal  ms-3  ps-1"> Cerrar Sesión </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </li>
            <hr class="horizontal light mt-0">
            <li class="nav-item">
                <a href="" class="nav-link text-white">
                    <i class="material-icons-round opacity-10">dashboard</i>
                    <span class="nav-link-text ms-2 ps-1">Dashboard</span>
                </a>
            </li>
            <li class="nav-item">
                <hr class="horizontal light" />
                <h6 class="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">Transacciones</h6>
            </li>
            @can('deposit.index')
                <li class="nav-item">
                    <a href="{{route('deposit.index')}}" class="nav-link text-white {{ request()->routeIs('deposit.index') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">arrow_upward</i>
                        <span class="nav-link-text ms-2 ps-1">Depósitos</span>
                    </a>
                </li>                
            @endcan
            @can('withdrawal.index')
                <li class="nav-item">
                    <a href="{{route('withdrawal.index')}}" 
                        class="
                            nav-link text-white
                            @if(request()->routeIs('withdrawal.index') || request()->routeIs('withdrawal.indexPendientes') || request()->routeIs('withdrawal.indexRealizados'))
                                active
                            @endif
                        ">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">arrow_downward</i>
                        <span class="nav-link-text ms-2 ps-1">Retiros</span>
                    </a>
                </li>
            @endcan
            @can('admin.dollarPurchaseIndex')
                <li class="nav-item">
                    <a href="{{route('admin.dollarPurchaseIndex')}}" 
                        class="
                            nav-link text-white
                            @if(request()->routeIs('admin.dollarPurchaseIndex') || request()->routeIs('admin.dollarPurchaseIndex') || request()->routeIs('admin.dollarPurchaseIndex'))
                                active
                            @endif
                        ">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">currency_exchange</i>
                        <span class="nav-link-text ms-2 ps-1">Compra y Venta USD</span>
                    </a>
                </li>
            @endcan
            <li class="nav-item">
                <hr class="horizontal light" />
                <h6 class="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">Consultas</h6>
            </li>
            @can('admin.dashboard')                 
                <li class="nav-item">
                    <a href="{{route('admin.dashboard')}}" class="nav-link text-white {{ request()->routeIs('admin.dashboard') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">notification_important</i>
                        <span class="nav-link-text ms-2 ps-1">Notificaciones</span>
                    </a>
                </li>
            @endcan                
            @can('user.index')  
                <li class="nav-item">
                    <a href="{{route('user.index')}}" class="nav-link text-white  {{ request()->routeIs('user.index') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">supervised_user_circle</i>
                        <span class="nav-link-text ms-2 ps-1">Usuarios</span>
                    </a>
                </li>
            @endcan
            @can('user.exportIndex')  
                <li class="nav-item">
                    <a href="{{route('user.exportIndex')}}" class="nav-link text-white  {{ request()->routeIs('user.exportIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">supervised_user_circle</i>
                        <span class="nav-link-text ms-2 ps-1">Exportar usuarios</span>
                    </a>
                </li>
            @endcan                                                 
            @can('admin.reportIndex')  
                <li class="nav-item">
                    <a href="{{route('admin.reportIndex')}}" class="nav-link text-white  {{ request()->routeIs('admin.reportIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">leaderboard</i>
                        <span class="nav-link-text ms-2 ps-1">Reportes Contables</span>
                    </a>
                </li>
            @endcan              
            <li class="nav-item">
                <hr class="horizontal light" />
                <h6 class="ps-4  ms-2 text-uppercase text-xs font-weight-bolder text-white">Configuración web</h6>
            </li>                               
            @can('admin.dollarPriceIndex')  
                <li class="nav-item">
                    <a href="{{route('admin.dollarPriceIndex')}}" class="nav-link text-white  {{ request()->routeIs('admin.dollarPriceIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">paid</i>
                        <span class="nav-link-text ms-2 ps-1">Precio Dolar</span>
                    </a>
                </li>
            @endcan                                   
            @can('admin.roleIndex')  
                <li class="nav-item">
                    <a href="{{route('admin.roleIndex')}}" class="nav-link text-white  {{ request()->routeIs('admin.roleIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">manage_accounts</i>
                        <span class="nav-link-text ms-2 ps-1">Roles</span>
                    </a>
                </li>
            @endcan                                  
            @can('admin.permissionIndex')  
                <li class="nav-item">
                    <a href="{{route('admin.permissionIndex')}}" class="nav-link text-white  {{ request()->routeIs('admin.permissionIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">how_to_reg</i>
                        <span class="nav-link-text ms-2 ps-1">Permisos</span>
                    </a>
                </li>
            @endcan                                    
            @can('admin.rateIndex')  
                <li class="nav-item">
                    <a href="{{route('admin.rateIndex')}}" class="nav-link text-white  {{ request()->routeIs('admin.rateIndex') ? 'active' : '' }}">
                        <i class="material-icons-round {% if page.brand == 'RTL' %}ms-2{% else %} me-2{% endif %}">card_giftcard</i>
                        <span class="nav-link-text ms-2 ps-1">Ofertas</span>
                    </a>
                </li>
            @endcan
        </ul>
    </div>
</aside>
