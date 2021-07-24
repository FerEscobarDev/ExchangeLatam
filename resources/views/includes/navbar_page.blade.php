<nav class="navbar navbar-color-on-scroll navbar-transparent    fixed-top  navbar-expand-lg " color-on-scroll="100"
    id="sectionsNav">
    <div class="container">
        <div class="navbar-translate">
            <a class="navbar-brand" href="{{ route('company.index') }}">
                <div class="logo-image">
                    <img src="{{ asset('img_web/logo.png') }}" class="img-fluid">
                </div>
            </a>
            <button type="button" class="ml-auto navbar-toggler" data-toggle="collapse"
                data-target="#navigation-example4">
                <span class="sr-only">Toggle navigation</span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
                <span class="navbar-toggler-icon"></span>
            </button>
        </div>
        <div class="collapse navbar-collapse" id="navigation-example4">
            <ul class="navbar-nav ml-auto">
                @auth
                    <li class="nav-item">
                        <a href="{{ route('users.deposits') }}" class="nav-link">
                            Dashboard
                        </a>
                    </li>
                @else
                    <li class="nav-item">
                        <a href="{{ route('register') }}" class="nav-link">
                            Registrese
                        </a>
                    </li>
                    <li class="nav-item">
                        <a href="{{ route('login') }}" class="nav-link">
                            Iniciar sesión
                        </a>
                    </li>
                @endauth
            </ul>
            <ul class="navbar-nav navbar-center ml-auto">
                <li class="nav-item">
                    <a target="_blank" href="{{ $contact[2]->link }}" class="nav-link text-success">
                        <i class="fa fa-whatsapp"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="{{ $contact[0]->link }}" class="nav-link text-info">
                        <i class="fa fa-facebook-square"></i>
                    </a>
                </li>
                <li class="nav-item">
                    <a target="_blank" href="{{ $contact[1]->link }}" class="nav-link text-danger">
                        <i class="fa fa-instagram"></i>
                    </a>
                </li>
            </ul>
        </div>
    </div>
</nav>
