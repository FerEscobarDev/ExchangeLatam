<footer class="footer">
    <div class="container">
        <nav class="pull-left">
            <ul>
                <li>
                    <a href="{{route('company.welcome')}}">
                        ExchangeLatam
                    </a>
                </li>
                <li>
                    <a href="{{route('company.about')}}">
                        Acerca de nosotros
                    </a>
                </li>
                <li>
                    <a href="{{route('company.faq')}}">
                        Faq
                    </a>
                </li>
            </ul>
        </nav>
        <div class="copyright pull-right">
            &copy; <script>document.write(new Date().getFullYear())</script> - Todos los derechos reservados.
        </div>
        <a target="_blank" href="{{ $contact[0]->link }}" class="btn btn-just-icon btn-simple btn-info"><i class="fa fa-facebook"></i></a>
        <a target="_blank" href="{{ $contact[2]->link }}" class="btn btn-just-icon btn-simple btn-success"><i class="fa fa-whatsapp"></i></a>
        <a target="_blank" href="{{ $contact[1]->link }}" class="btn btn-just-icon btn-simple btn-danger"><i class="fa fa-instagram"></i></a>
        <a href="mailto:{{ $contact[3]->link }}" class="btn btn-just-icon btn-simple btn-warning"><i class="fa fa-envelope-o"></i></a>
    </div>
</footer>