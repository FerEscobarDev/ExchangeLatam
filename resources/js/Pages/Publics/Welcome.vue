<template>
    <Head title="Exchanger para Brokers en Colombia.">
        <meta 
            name="description" 
            content="Obten un Exchanger con el cual podrás realizar depósitos y retiros de tu broker o billetera virtual desde y hacia tu cuenta bancaria con bajas comisiones, agilidad y confianza.
                    Con ExchangeLatam empresa colombiana con 5 años de experiencia, Preocúpate solo por operar, nosotros hacemos el resto." 
            head-key="description">
    </Head>

    <div>
        <div class="static">
            <nav class="h-16 bg-dark-brand z-50 fixed top-0 left-0 right-0">
                <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px:8">
                    <div class="h-16">
                        <div class="flex justify-between h-16">
                            <!-- Logo -->
                            <div class="flex-shrink-0 flex items-center">
                                <Link :href="route('dashboard')">
                                    <jet-application-mark class="block h-auto w-auto" />
                                </Link>
                            </div>

                            <!-- Navigation Links -->
                            <div v-if="canLogin" class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
                                <Link v-if="$page.props.user" :href="route('dashboard')" class="uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition">
                                    Dashboard
                                </Link>

                                <template v-else>
                                    <Link :href="route('login')" class="uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition">
                                        Iniciar Sesión
                                    </Link>

                                    <Link v-if="canRegister" :href="route('register')" class="uppercase inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 text-white hover:text-gray-300 transition">
                                        Registrarse
                                    </Link>
                                </template>                                
                            </div>

                            <!-- Navigation Links -->
                            <div class="hidden space-x-4 sm:-my-px sm:ml-10 sm:flex">
                                <a :href="contact[0].link" class="inline-flex items-center px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">
                                    <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                                </a>

                                <a :href="contact[1].link" class="inline-flex items-center px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">
                                    <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                                </a>

                                <a :href="contact[2].link" class="inline-flex items-center px-1 pt-1 text-lg text-whatsapp hover:opacity-60 transition">
                                    <font-awesome-icon :icon="['fab', 'whatsapp']" size="lg" />
                                </a>
                            </div>
                            <!-- Hamburger -->
                            <div class="-mr-2 flex items-center sm:hidden">
                                <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-dark-brand hover:bg-yellow-brand transition">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Responsive Navigation Menu -->
                <div :class="{'block': showingNavigationDropdown, 'hidden': ! showingNavigationDropdown}" class="sm:hidden">
                    <!-- Responsive Settings Options -->
                    <div class="pb-1 bg-opacity-60 bg-dark-brand">
                        <div class="space-y-1">
                            <!-- Navigation Links -->
                            <div v-if="canLogin">
                                <jet-responsive-nav-link v-if="$page.props.user" :href="route('dashboard')"  class="uppercase">
                                    <span>Dashboard</span>
                                </jet-responsive-nav-link>

                                <template v-else>
                                    <jet-responsive-nav-link :href="route('login')" class="uppercase">
                                        <span>Iniciar Sesión</span>
                                    </jet-responsive-nav-link>
                                    <jet-responsive-nav-link :href="route('register')" class="uppercase">
                                        <span>Registrarse</span>
                                    </jet-responsive-nav-link>
                                </template>

                                  
                                <div>
                                   <!--  <hr class="hr"> -->   
                                    <jet-responsive-nav-link :href="route('company.faq')" class="uppercase">
                                    <span>Faq</span>
                                    </jet-responsive-nav-link>
                                    <jet-responsive-nav-link :href="route('company.about')" class="uppercase">
                                        <span>Acerca de Nosotros</span>
                                    </jet-responsive-nav-link>
                                </div> 

                                

                                <hr class="hr">  

                                

                                <a :href="contact[0].link" class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">
                                    <font-awesome-icon class="text-blue-500" :icon="['fab', 'facebook']" size="lg" /><span>  Facebook</span>
                                </a>   
                                <a :href="contact[1].link" class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">
                                    <font-awesome-icon class="text-instagram" :icon="['fab', 'instagram']" size="lg" /><span>  Instagram</span>
                                </a>
                                <a :href="contact[2].link" class="uppercase block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-300 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition">
                                    <font-awesome-icon class="text-whatsapp" :icon="['fab', 'whatsapp']" size="lg" /><span>  Whatsapp</span>
                                </a>                       
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <header class="min-h-screen flex items-center bg-fixed bg-cover bg-center relative left-0 top-0 text-white" style="background-image: url(../images/fondo.jpg)">
            <div class="bg-black/50 min-h-screen w-screen"></div>
            <div class="container absolute mx-auto left-0 right-0 content-center text-center">
                <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-widest mb-3">EXCHANGELATAM</h1>
                <p class="text-lg md:text-2xl">
                    Exchanger para brokers en Colombia.
                </p>
                <p class="text-lg md:text-2xl">
                    Preocúpate solo por operar, nosotros hacemos el resto.
                </p>
                <!-- <div class="w-20 md:w-28 h-max mx-auto mt-5">
                    <img class="w-20 md:w-28 rounded-xl object-contain" src="../../../img/logo-fbs.png" alt="FBS">                
                </div> -->
            </div>
        </header>
        <!-- <header class="h-screen flex justify-center items-center overflow-hidden">
            <video class="fixed right-0 bottom-0 min-h-screen min-w-full inline-block align-baseline object-fill object-center box-border z-[-1]" autoplay="autoplay" loop="loop" muted="muted" >
                <source src="/images/v.mp4" type="video/mp4">
            </video>
            <div class="container mx-auto left-0 right-0 content-center text-center h-2/4">
                <h1 class="text-4xl sm:text-6xl md:text-7xl text-white font-extrabold">EXCHANGELATAM</h1>
            </div>
        </header> -->
        <!-- <div class="min-h-screen flex items-center bg-gradient-to-b from-dark-brand via-blue-brand to-dark-brand">
            <div class="container absolute mx-auto left-0 right-0 content-center text-center">
                <h1 class="text-5xl sm:text-6xl md:text-8xl text-white font-bold">EXCHANGELATAM</h1>
            </div>
        </div> -->
        <div class="relative z-[3] bg-white -mt-14 w-11/12 mx-auto content-center rounded-md shadow-lg block mb-4">
            <div class="container mx-auto py-8">
                <section class="w-full lg:max-w-4xl text-center mx-auto mb-10">
                    <h2 class="text-4xl md:text-5xl text-black/75 font-bold p-5">Nuestro servicio</h2>
                    <p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify">
                        Prestamos el servicio de intercambio de divisas desde y hacia su broker para que pueda administrar su inversión sin necesidad de 
                        transferencias internacionales costosas o tarjetas de crédito, todas sus transacciones serán de manera local y con medios de pago 
                        locales o directamente desde la app de su banco.
                    </p>
                </section>
                <!-- <section class="w-full lg:max-w-4xl text-center mx-auto mt-10 mb-10">
                    <h2 class="text-4xl md:text-5xl text-black/75 font-bold p-5">Cliente VIP</h2>
                    <p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify sm:text-center">
                        Puedes ser parte de nuestro programa VIP, para esto sólo debes abrir tu cuenta de trading con
                        nuestro link de referido haciendo click <a target="_blank" class="underline decoration-blue-600 text-blue-brand"
                        href="https://fbs.partners?ibl=16847&ibk=exchangelatam">aquí</a>,
                        realizar tu depósito y mantener tu cuenta de trading activa.
                    </p>
                    <h4 class="text-xl md:text-2xl text-black/75 font-semibold pt-5">Beneficios:</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 mt-10 mb-10 px-5">
                        <section class="flex">
                            <div class="flex-none w-14 pt-5 text-green-500">
                                <font-awesome-icon :icon="['fab', 'creative-commons-nc']" size="lg" />
                            </div>
                            <div class="flex-auto text-left">
                                <h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Transacciones sin comisión</h4>
                                <p class="text-base text-black/40 font-normal">Todo depósito superior a 500 USD y todos los retiros sin importar el monto estarán
                                    libres de comisión.</p>
                                <a class="underline decoration-blue-600 text-blue-brand" href="{{ url('/faq#heading4') }}">Leer más...</a>
                            </div>
                        </section>
                        <section>
                            <div class="flex">
                                <div class="flex-none w-14 pt-5 text-yellow-600">
                                    <font-awesome-icon :icon="['fas', 'business-time']" size="lg" />
                                </div>
                                <div class="flex-auto w-full text-left">
                                    <h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Prioridad en tus retiros</h4>
                                    <p class="text-base text-black/40 font-normal">Tendrás trato preferencial en tus retiros los cuales se procesarán en
                                        24 horas después de ser aprobado por el broker.</p>
                                    <a class="underline decoration-blue-600 text-blue-brand" href="{{ url('/faq#heading4') }}">Leer más...</a>
                                </div>
                            </div>
                        </section>
                    </div>
                </section> -->
                
                <div class="text-center lg:max-w-5xl mx-auto">
                    <h2 class="text-4xl md:text-5xl text-black/75 font-bold mb-5 p-5">Aliados Comerciales</h2>
                    <div class="grid grid-cols-1 md:grid-cols-2 pt-2">
                        <section class="flex flex-col md:flex-row mx-8 md:mx-auto">
                            <div class="grow w-full md:w-1/3 h-max rounded-xl shadow-2xl mb-5 md:ml-3">
                                <a target="_blank" href="https://www.up-trading.com/">
                                    <img class="w-full md:w-[211px] rounded-xl object-contain" src="../../../img/UpTrading_Vertical_Amarillo.jpg" />
                                </a>
                            </div>
                            <div class="flex-none w-full md:w-2/3 px-5">
                                <div class="">
                                    <h5 class="text-lg md:text-xl text-black/75 pt-5 font-bold">Up Trading</h5>
                                    <h6 class="text-sm md:text-normal text-black/50 py-2 font-bold uppercase">Academia</h6>
                                    <p class="text-justify text-base text-black/40 font-normal pb-3">
                                        UP Trading es una academia de educación en mercados bursátiles que tiene
                                        como propósito superior mejorar la calidad de vida por
                                        medio de las inversiones inteligentes en Trading digital.
                                    </p>
                                    <p class="text-justify text-base text-black/40 font-normal">
                                        Desde 2014 llevamos brindando educación en Universidades locales y en más de
                                        18 paises por medios digitales en donde hemos
                                        capacitado más de 1200 estudiantes.
                                    </p>
                                </div>
                                <div class="mb-10 py-10">
                                    <a target="_blank" href="https://www.instagram.com/up.trading/" class="px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">
                                        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                                    </a>
                                    <a target="_blank" href="https://es-la.facebook.com/uptrading.edu/" class="px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">
                                        <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                                    </a>
                                    <a target="_blank" href="https://www.up-trading.com/" class="text-base text-black/50 font-bold">
                                        <font-awesome-icon :icon="['fas', 'globe']" size="lg" /> www.up-trading.com
                                    </a>
                                </div>
                            </div>
                        </section>
                        <section class="flex flex-col md:flex-row mx-8 md:mx-auto">
                            <div class="grow w-full md:w-1/3 h-max rounded-xl shadow-2xl mb-5 md:ml-3">
                                <a target="_blank" href="https://www.divitradefx.com/">
                                    <img class="w-full md:w-[211px] rounded-xl object-contain" src="../../../img/divitrade.jpg" />
                                </a>
                            </div>
                            <div class="flex-none w-full md:w-2/3 px-5">
                                <div class="">
                                    <h5 class="text-lg md:text-xl text-black/75 pt-5 font-bold">Divitrade FX</h5>
                                    <h6 class="text-sm md:text-normal text-black/50 py-2 font-bold uppercase">Academia</h6>
                                    <p class="text-justify text-base text-black/40 font-normal pb-3">
                                        Somos una academia enfocada en la educación de una nueva generación de
                                        traders que sienta sus bases en la alta precisión y el smart money.
                                        Legalmente estamos constituidos como Divitradefx desde 2017 con el NIT
                                        1110542113-1.
                                    </p>
                                    <p class="text-justify text-base text-black/40 font-normal">
                                        Divitade Fx emplea recursos virtuales para facilitar el
                                        acceso a la educación a personas de todo el mundo.
                                    </p>
                                </div>
                                <div class="mb-10 py-10">
                                    <a target="_blank" href="https://www.instagram.com/divitrade.fx/" class="px-1 pt-1 text-lg text-instagram hover:opacity-60 transition">
                                        <font-awesome-icon :icon="['fab', 'instagram']" size="lg" />
                                    </a>
                                    <a target="_blank" href="https://www.facebook.com/divitrade.fx/" class="px-1 pt-1 text-lg text-blue-500 hover:opacity-60 transition">
                                        <font-awesome-icon :icon="['fab', 'facebook']" size="lg" />
                                    </a>
                                    <a target="_blank" href="https://www.divitradefx.com/" class="text-base text-black/50 font-bold">
                                        <font-awesome-icon :icon="['fas', 'globe']" size="lg" /> www.divitradefx.com
                                    </a>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            </div>       
        </div>

        <footer class=" bg-transparent text-black/75 p-5">
            <div class="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                
                <div class="flex flex-col md:flex-row">
                    <div class="md:flex-auto md:inline-flex w-64 mx-auto">
                        <Link :href="route('company.faq')" class="px-4 inline-flex text-sm font-semibold uppercase items-center">
                            Faq
                        </Link>
                        <Link :href="route('company.about')" class="px-4 inline-flex text-sm font-semibold uppercase items-center">
                            Acerca de nosotros
                        </Link>  
                    </div>                      
                    <div class="md:inline-flex text-base items-center mx-auto">
                        &copy; 2022, Todos los derechos reservados.
                    </div>
                </div>

            </div>
        </footer>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import JetApplicationMark from '@/Jetstream/ApplicationMark.vue';
    import JetResponsiveNavLink from '@/Jetstream/ResponsiveNavLink.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faFacebook } from '@fortawesome/free-brands-svg-icons';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
    import { faBusinessTime } from '@fortawesome/free-solid-svg-icons';
    import { faCreativeCommonsNc } from '@fortawesome/free-brands-svg-icons';
    import { faGlobe } from '@fortawesome/free-solid-svg-icons';

    library.add(faFacebook, faInstagram, faWhatsapp, faBusinessTime, faCreativeCommonsNc, faGlobe)

    export default defineComponent({
        components: {
            Head,
            Link,
            JetApplicationMark,
            FontAwesomeIcon,
            JetResponsiveNavLink,
        },

        data() {
            return {
                showingNavigationDropdown: false,
            }
        },

        props: {
            canLogin: Boolean, 
            canRegister: Boolean,
            contact: Array,
        },
    
    })
</script>
