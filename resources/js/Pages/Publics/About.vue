<template>
    <Head title="Acerca de nosotros">
        <meta 
            name="description" 
            content="Somos un exchanger en Colombia para el brokers desde marzo del 2017, operamos 100% de manera virtual y como persona jurídica bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6." 
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
                                <Link :href="route('company.welcome')">
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
        <header class="min-h-[60vh] h-2/3 flex items-center bg-fixed bg-cover bg-center relative left-0 top-0 text-white" style="background-image: url(../images/fondo.jpg)">
            <div class="bg-black/50 min-h-[60vh] h-2/3 w-screen"></div>
            <div class="container absolute mx-auto left-0 right-0 content-center text-center">
                <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-3">Acerca de Nosotros</h1>
                <!-- <p class="p-5 text-lg md:text-xl">
                    Exchanger en Colombia para el broker FBS Markets INC.
                </p>
                <div class="w-20 md:w-28 h-max mx-auto mt-5">
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
                    <h2 class="text-4xl md:text-5xl text-black/75 font-bold p-5">¿Quienes somos?</h2>
                    <p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify">
                        Somos un exchanger para brokers en Colombia desde septiembre del 2017, operamos 100% de manera virtual y como persona jurídica 
                        bajo la razón social de ExchangeLatam SAS con NIT. 901.422.406-6. En ExchangeLatam nos encargamos de todo el proceso correspondiente al 
                        intercambio de divisas al momento de depositar o retirar su inversión, de esta manera facilitamos que pueda realizar todas las transacciones 
                        desde su cuenta bancaria evitando todo el tramite de las transferencias internacionales ya que nosotros lo hacemos por usted.
                    </p>
                    <div class="grid grid-cols-1 md:grid-cols-10 mt-10 mb-10 px-5">
                        <section class="flex col-span-6">
                            <div class="flex-none w-14 pt-5 text-green-500">
                                <font-awesome-icon :icon="['fab', 'sketch']" size="lg" />
                            </div>
                            <div class="flex-auto text-left">
                                <h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Misión</h4>
                                <p class="text-base text-black/40 font-normal">
                                    Trabajamos para ofrecer un servicio de excelente calidad en el intercambio de divisas en Colombia manejando 
                                    depósitos y retiros para brokers buscando diariamente la optimización de los procesos y los tiempos de gestión 
                                    informados a nuestros clientes, garantizando seguridad en cada transacción, siendo para nosotros un eje fundamental la 
                                    atención personalizada en nuestros canales de contacto con los miles de inversores que hoy confían en nosotros.
                                </p>
                            </div>
                        </section>
                        <section class="flex col-span-4">
                            <div class="flex-none w-14 pt-5 text-yellow-600">
                                <font-awesome-icon :icon="['fas', 'compass']" size="lg" />
                            </div>
                            <div class="flex-auto w-full text-left">
                                <h4 class="text-xl md:text-2xl text-black/75 font-semibold py-5">Visión</h4>
                                <p class="text-base text-black/40 font-normal">
                                    Para el año 2024 seremos la empresa líder en intercambio para Colombia y Latinoamerica. 
                                    Ampliando nuestra cobertura a monederos virtuales. Logrando un impacto positivo en el servicio ofrecido a nuestros clientes.
                                </p>
                            </div>
                        </section>
                    </div>
                </section>
                
                <section class="w-full lg:max-w-4xl text-center mx-auto mb-10">
                    <h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Horario de atención</h3>
                    <p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify sm:text-center">
                        Horario de atención al usuario de 8:00 am a 06:00 pm en días hábiles de lunes a viernes.
                    </p>
                    <p class="text-lg md:text-xl text-black/40 font-medium pt-2 px-4 text-justify sm:text-center">
                        Horario de procesamiento de transacciones de 7:00 am a 10:00 pm.
                    </p>
                </section>

                <section class="w-full lg:max-w-4xl text-center mx-auto mb-10">
                    <h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Contáctenos</h3>                    
                    <div class="grid grid-cols-1 md:grid-cols-2 text-center mb-10 py-10">                        
                        <a target="_blank" :href="contact[2].link" class="px-1 pt-1 text-lg hover:opacity-60 transition">
                            <font-awesome-icon class="text-whatsapp" :icon="['fab', 'whatsapp']" size="lg" /><span class="text-base text-black/70 font-normal">  +57 322 310 55 78</span>
                        </a> 
                        <a target="_blank" :href="contact[3].link" class="px-1 pt-1 text-lg hover:opacity-60 transition">
                            <font-awesome-icon class="text-blue-600" :icon="['fas', 'envelope']" size="lg" /><span class="text-base text-black/70 font-normal">  support@exchangelatam.com</span>
                        </a>
                    </div>
                </section>

                <section class="w-full lg:max-w-4xl text-center mx-auto mb-10">
                    <h3 class="text-4xl md:text-4xl text-black/75 font-bold p-5">Políticas</h3>                    
                    <div class="grid grid-cols-1 md:grid-cols-2 text-center mb-10 py-10">
                        <a target="_blank" :href="route('terms.show')" class="underline text-lg text-dark-brand hover:text-blue-brand">
                            Términos y Condiciones
                        </a>  
                        <a target="_blank" :href="route('policy.show')" class="underline text-lg text-dark-brand hover:text-blue-brand">
                            Política de Tratamiendo de Datos
                        </a>                          
                        <a target="_blank" :href="route('company.policy')" class="underline text-lg text-dark-brand hover:text-blue-brand">
                            SAGRILAFT
                        </a>
                    </div>
                </section>
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
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
    import { faSketch } from '@fortawesome/free-brands-svg-icons';
    import { faCompass } from '@fortawesome/free-solid-svg-icons';

    library.add(faFacebook, faInstagram, faWhatsapp, faEnvelope, faSketch, faCompass)

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
