<template>
    <Head title="Faqs">
        <meta 
            name="description" 
            content="Resuelve todas tus inquietudes en nuestra sección FAQ, aquí encontrarás guías de cada uno de nuestros servicios." 
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
                <h1 class="text-4xl sm:text-6xl md:text-7xl font-extrabold mb-3">FAQS</h1>
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
    import JetApplicationMark from '@/Components/ApplicationMark.vue';
    import JetResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faFacebook } from '@fortawesome/free-brands-svg-icons';
    import { faInstagram } from '@fortawesome/free-brands-svg-icons';
    import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

    library.add(faFacebook, faInstagram, faWhatsapp)

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
            faqs: Array,
        },
    
    })
</script>
