@extends('layouts.header_page')

@section('title', 'Acerca de nosotros')

@section('description',  'Somos un exchanger en Colombia para el broker FBS Markets Inc. desde marzo del 2017, operamos 100% de manera virtual y como persona jurídica bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6.')

@section('content')
    <body class="landing-page sidebar-collapse">
    
    @include('includes.navbar_page')

    <div class="page-header header-filter header-small" data-parallax="true" style="background-image: url('{{asset('img_web/background.jpg')}}');">
        <div class="container">
            <div class="row">
                <div class="col-md-8 ml-auto mr-auto text-center">
                    <h1 class="title">Aviso Legal</h1>
                    <h4>ExchangeLatam</h4>
                </div>
            </div>
        </div>
    </div>
    <div class="main main-raised">
        <div class="container">      
            <div class="about-services features-2">
                <div class="about-contact">
	                <div class="row">
	                    <div class="col-md-12">
	                        <h2 class="text-center title">POLÍTICA DE GESTIÓN PARA LA PREVENCIÓN DEL CONTROL DEL RIESGO DE LAVADO DE ACTIVOS, FINANCIACIÓN DEL TERRORISMO Y FINANCIAMIENTO DE LA PROLIFERACIÓN DE ARMAS DE DESTRUCCIÓN MASIVA</h2>
							<div id="collapse">
				                <div class="row">
				                    <div class="col-md-12 text-justify">
                                        <h3>1. OBJETIVO</h3>
				                        <p>
                                            Establecer los lineamientos en materia de gestión para la prevención y control del riesgo de lavado de activos,
                                            financiación del terrorismo y financiamiento de la proliferación de armas de destrucción masiva, con el fin de
                                            minimizar la posibilidad de que, a través de las actividades propias del objeto de la empresa y del desarrollo
                                            de sus operaciones, sean introducidos recursos provenientes del lavado de activos o se financie el terrorismo. A
                                            su vez, busca minimizar los riesgos de ser un instrumento para el ocultamiento, manejo, inversión, o
                                            aprovechamiento de cualquier forma de dinero y/o bienes provenientes de actividades ilícitas.
                                        </p>
                                        <h3>2. ALCANCE</h3>
                                        <p>
                                            Esta Política está basada en la Circular 100-000016 de la Superintendencia de Sociedades, para la Prevención
                                            del Riesgo de Lavado de Activos , Financiación del Terrorismo y el Financiamiento de la Proliferación de Armas de
                                            Destrucción Masiva y es aplicable para todos los empleados de EXCHANGE LATAM, sus clientes, proveedores y/o
                                            terceros relacionados, quienes serán puestos en conocimiento del contenido de la misma.
                                        </p>
                                        <h3>3. DEFINICIONES</h3>
                                        <p>
                                            Lavado de Activos: Artículo 323 del Código Penal. El que adquiera, resguarde, invierta, transporte, transforme,
                                            custodie o administre bienes que tengan su origen mediato o inmediato en actividades de tráfico de migrantes,
                                            trata de personas, extorsión, enriquecimiento ilícito, secuestro extorsivo, rebelión, tráfico de armas,
                                            financiación del terrorismo, tráfico de drogas tóxicas, estupefacientes o sustancias psicotrópicas, delitos
                                            contra el sistema financiero, delitos contra la administración pública o vinculados con el producto de delitos
                                            ejecutados bajo concierto para delinquir, o les dé a los bienes provenientes de dichas actividades apariencia de
                                            legalidad o los legalice, oculte o encubra la verdadera naturaleza, origen, ubicación, destino, movimiento o
                                            derecho sobre tales bienes o realice cualquier otro acto para ocultar o encubrir su origen ilícito, incurrirá por
                                            esa sola conducta, en prisión de ocho (08) a veintidós (22) años y multa de seiscientos cincuenta (650) a
                                            cincuenta mil salarios mínimos mensuales legales vigentes.
                                            Administración de Recursos Relacionados con Actividades Terroristas: Artículo 345 del Código Penal. El que
                                            directa o indirectamente provea, recolecte, entregue, reciba, administre, aporte, custodie o guarde fondos,
                                            bienes o recursos, o realice cualquier otro acto que promueva, organice, apoye, mantenga, financie o sostenga
                                            económicamente a grupos armados al margen de la ley o a sus integrantes, o a grupos terroristas nacionales o
                                            extranjeros, o a actividades terroristas, incurrirá en prisión de trece (13) a veintidós (22) años y multa de mil
                                            trescientos (1.300) a quince mil (15.000) salarios mínimos mensuales legales vigentes.
                                            <br>
                                            Listas Internacionales: Relación de personas y empresas que de acuerdo con el organismo que las publica, están
                                            vinculadas de alguna manera con las actividades delictivas objeto de la lista. Estas listas son la OFAC, la ONU,
                                            y la INTERPOL.
                                            <br>
                                            Reporte de Operación Sospechosa (ROS): Son operaciones sospechosas realizadas por alguna persona natural o
                                            jurídica, ya sea empleado, accionista, proveedor cliente y/o tercero relacionado, que, por su número, cantidad o
                                            características, no se enmarcan dentro de los sistemas y prácticas normales de una industria o sector
                                            determinado, y que de acuerdo con los usos y costumbres de la actividad que se trate, no hayan podido ser
                                            razonablemente justificadas, por lo tanto, deben ser reportadas.
                                            Fuentes de Riesgo: Son los distintos componentes que debe tener en cuenta una empresa para identificar las
                                            operaciones, negocios o contratos que le generen riesgo de Lavado de Activos o Financiación del
                                            Terrorismo, entre los cuales pueden enunciarse:
                                            <br>
                                            a. Clientes y proveedores: Personas naturales y jurídicas con las cuales la empresa establece y mantiene una
                                            relación comercial, contractual o legal para la venta o compra de cualquier bien o servicio.
                                            <br>
                                            b. Productos: Bienes y servicios que ofrece o compra una empresa en desarrollo de su objeto social.
                                            <br>
                                            c. Canales de distribución: Medios que utiliza la empresa para ofrecer y comercializar sus bienes y
                                            servicios, como por ejemplo establecimientos comerciales, venta puerta a puerta, internet o por
                                            teléfono.
                                            <br>
                                            d. Jurisdicción Territorial: Zonas geográficas identificadas como expuestas al riesgo de Lavado de Activos y
                                            Financiación del Terrorismo.
                                            <br>
                                            Gestión de Riesgos: Es un enfoque estructurado para manejar la incertidumbre relativa a una amenaza, a
                                            través de una secuencia de actividades humanas que incluyen una evaluación de riesgo, estrategias de desarrollo
                                            para manejarlo y mitigación del riesgo utilizando recursos gerenciales. Las estrategias incluyen transferir el
                                            riesgo a otra parte, evadir el riesgo, reducir los efectos negativos del riesgo y aceptar alguna o todas las
                                            consecuencias de un riesgo particular.
                                            <br>
                                            Riesgo Legal: Es la posibilidad de pérdida en que incurre una empresa al ser sancionada, multada u obligada a
                                            indemnizar daños como resultado del incumplimiento de normas o regulaciones y obligaciones
                                            contractuales.
                                            <br>
                                            Riesgo Reputacional: Es la posibilidad de pérdida en que incurre una empresa por desprestigio, mala imagen,
                                            publicidad negativa, cierta o no, respecto de la institución y sus prácticas de negocios, que pueda causar pérdida
                                            de clientes, disminución de ingresos o procesos judiciales.
                                            <br>
                                            Riesgo Operativo: Es la posibilidad de incurrir en pérdidas por deficiencias, fallas o inadecuaciones, en el recurso
                                            humano, los procesos, la tecnología, la infraestructura o por la incurrencia de acontecimientos externos.

                                            Riesgo de Contagio: Es la posibilidad de pérdida que una empresa pueda sufrir, directa o indirectamente, por
                                            una acción o experiencia de un asociado o relacionado. Estos incluyen personas naturales o jurídicas que tienen
                                            posibilidad de ejercer influencia sobre la empresa.
                                        </p>

                                        <h3>4. PRINCIPIOS Y CONDICIONES GENERALES</h3>
                                        <p>
                                            • EXCHANGE LATAM está comprometida con la lucha contra el lavado de activos y la financiación del
                                            terrorismo por lo tanto dará estricto cumplimiento a las normas que le apliquen.
                                            <br>
                                            • EXCHANGE LATAM impulsará internamente un abierto rechazo hacia cualquier actividad delictiva o
                                            conducta que implique actividades de lavado de activos o financiación del terrorismo
                                            (LA/FT/FPADM). El cumplimiento de las metas comerciales de EXCHANGE LATAM está supeditado al
                                            cumplimiento de las normas de prevención y control de lavado de activos y financiación del
                                            terrorismo.
                                            <br>
                                            • Todas las operaciones, negocios y contratos que adelante o suscriba EXCHANGE LATAM se ajustarán a
                                            las políticas y procedimientos dispuestos en sus políticas, manuales y demás normas internas que
                                            regulen el control del riesgo de lavado de activos y financiación del terrorismo, de lo contrario no
                                            se tramitarán.
                                            <br>
                                            • El sistema diseñado se integra a las directrices impartidas en este documento y de esta forma, los
                                            controles que aquí se implementan deben ser aplicados por todos los empleados, en consonancia con
                                            los principios y valores de EXCHANGE LATAM .
                                            <br>
                                            • Esta Política es de obligatorio cumplimiento al igual que todos los procedimientos relacionados en
                                            ella y aplica para todos los empleados, accionistas, clientes y/o terceros relacionados.
                                        </p>

                                        <h3>5. SISTEMA INTEGRAL PARA LA GESTIÓN DE LA PREVENCIÓN Y CONTROL DE LAVADO DE ACTIVOS Y DE LA FINANCIACIÓN DEL TERRORISMO </h3>

                                        <p>
                                            <h4>a) CONOCIMIENTO</h4>
                                            Clientes: Los clientes de EXCHANGE LATAM se identificarán y cumplirán un proceso de vinculación mediante el
                                            lleno de un formulario y la entrega de documentación soporte que será objeto de verificación y
                                            confirmación. De acuerdo con su perfil durante su vinculación y las transacciones relevantes que realicen, se
                                            adelantarán los correspondientes análisis para establecer la coherencia con su actividad económica y con la
                                            información por ella suministrada. EXCHANGE LATAM se abstendrá de registrar clientes anónimos y velará
                                            para que no figuren bajo nombres ficticios o inexactos. Así mismo, EXCHANGE LATAM incluye en el
                                            clausulado de sus contratos cláusulas anticorrupción y de prevención de lavado de activos y financiación del
                                            terrorismo.
                                            <br>
                                            Proveedores: Las personas naturales o jurídicas que deseen hacer parte del registro de proveedores de EXCHANGE
                                            LATAM se identificarán y cumplirán un proceso de vinculación mediante el lleno de un formulario y la entrega de
                                            documentación soporte. Aprobado el proceso de vinculación, podrán ser registrados como aptos para que
                                            EXCHANGE LATAM pueda negociar con ellos. De acuerdo con su perfil de vinculación y los negocios que realicen
                                            con EXCHANGE LATAM, se adelantarán análisis para establecer que los precios de los bienes y servicios son
                                            acordes con el mercado y cualquier otro análisis que resulte necesario para prevenir un posible contagio de
                                            actividades relacionadas con Lavado de Activos o Financiación del Terrorismo. Así mismo, EXCHANGE LATAM
                                            incluye en el clausulado de sus contratos cláusulas anticorrupción y de prevención de lavado de activos y
                                            financiación del terrorismo.
                                            <br>
                                            Empleados: Las personas naturales que aspiren a desempeñar un cargo en EXCHANGE LATAM, deberán cumplir
                                            con el suministro de los requisitos dispuestos en los reglamentos internos a fin de poder contar con la
                                            información que permita a EXCHANGE LATAM verificar sus antecedentes. Por lo menos anualmente los
                                            empleados deberán actualizar la información que sea susceptible de modificación. De acuerdo con el cargo y
                                            responsabilidades asignadas al empleado, EXCHANGE LATAM adelantará análisis para detectar comportamientos
                                            inusuales en cualquier persona que labore en EXCHANGE LATAM, a fin de tomar las medidas que resulten
                                            pertinentes.
                                            <br>
                                            Accionistas: EXCHANGE LATAM es una sociedad por acciones simplificadas. En caso de vinculación de un nuevo
                                            accionista se le deberán realizar procedimientos de debida diligencia para el origen de los aportes.
                                            - Con respecto a la verificación de listas: EXCHANGE LATAM no establecerá relaciones contractuales con
                                            clientes, empleados, proveedores o terceros que se encuentren registrados en las listas vinculantes para
                                            Colombia. Por otra parte, la coincidencia con otras listas o información negativa de carácter público
                                            relacionada con LAFT se considerará un criterio importante para denegar o terminar una relación
                                            contractual.

                                            <h4>b) CAPACITACIÓN</h4>
                                            EXCHANGE LATAM establece como mecanismo de divulgación de las políticas y procedimientos para la
                                            prevención y control del lavado de activos, la financiación del terrorismo y el financiamiento de la proliferación
                                            de armas de destrucción masiva, el diseño y desarrollo de un programa de capacitación que permitirá la
                                            sensibilización a los accionistas y la sensibilización y entrenamiento a empleados en el inicio y durante el
                                            tiempo que dure la relación contractual.

                                            <h4>C) OFICIAL DE CUMPLIMIENTO</h4>
                                            La Asamblea de Accionistas designará al Oficial de Cumplimiento y eventualmente, de ser necesario, un suplente.

                                            <h4>D) CONTROL</h4>
                                            Es necesario monitorear los riesgos, la efectividad del plan de tratamiento de los riesgos y el sistema de
                                            administración que se establece para controlar la implementación, de acuerdo con lo establecido en el
                                            Manual SAGRILAFT/FPADM.
                                        </p>
                                        <h3>6. DEBER DE RESERVA</h3>
                                        <p>
                                            Reserva sobre la información de contrapartes: EXCHANGE LATAM, solo levantará la reserva sobre la información
                                            recaudada de sus contrapartes como consecuencia de las solicitudes formuladas por escrito y de manera
                                            específica por las autoridades competentes, de acuerdo a lo establecido en la Política de Protección de Datos
                                            Personales.
                                            Reserva sobre la solicitud de información por autoridades: Los empleados de EXCHANGE LATAM guardarán
                                            reserva sobre los requerimientos y las inspecciones judiciales realizadas por las autoridades, así como los
                                            reportes realizados a la UIAF. Dar a conocer dichas solicitudes puede conllevar sanciones administrativas y
                                            penales.
                                        </p>
				                    </div>
				                </div>
				            </div>	                        
	                    </div>
	                </div>
            	</div>
            </div>
        </div>
    </div>

    @include('includes.footer_page')

    <!--   Core JS Files   -->
    <script src="{{asset('js/core/jquery.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/popper.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/core/bootstrap-material-design.min.js')}}" type="text/javascript"></script>
    <script src="{{asset('js/plugins/moment.min.js')}}"></script>
    <script src="{{asset('js/material-kit.js?v=2.2.0')}}" type="text/javascript"></script>

    </body>

</html>
@endsection