<template>
    <div>
        <Head :title="title" >
            <meta name="description" :content="description">
        </Head>
        
        <!-- Sidebar -->
        <aside :class="{'block p-2 pr-0 w-64': showingNavigationDropdown, 'hidden lg:block': ! showingNavigationDropdown}" class="bg-gray-100 h-screen sm:w-72 sm:p-4 float-left lg:fixed  overflow-hidden">
            <div class="bg-dark-brand rounded-lg h-full w-full p-1">
                <!-- Logo -->
                <div class="flex items-center content-center mx-auto h-16">
                    <Link class="mx-auto" :href="route('company.welcome')">
                        <jet-application-mark class="block h-12 w-auto" />
                    </Link>
                </div>
                <div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[0.5px] my-1"></div>
                <!-- Settings Dropdown -->
                <div class="mx-3 relative py-2">
                    <jet-dropdown-sidebar width="full" align="center" contentClasses="bg-transparent" :openSide="openDropdown()">
                        <template #trigger>
                            <div class="w-10">
                                <button  class="flex items-center text-sm">
                                    <img class="h-8 w-8 rounded-full object-cover" :src="url+'/storage/'+$page.props.user.picture" :alt="$page.props.user.name" v-if="$page.props.user.picture"/>
                                    <img class="h-8 w-8 rounded-full object-cover" :src="$page.props.user.profile_photo_url" :alt="$page.props.user.name" v-else/>
                                </button>
                            </div> 
                            <div class="pl-2 w-full">
                                <span class="inline-flex w-full items-center">
                                    <button type="button" class="flex justify-between items-center w-full py-2 text-base leading-4 font-medium text-gray-300 transition">
                                        {{ $page.props.user.name.split(" ", 1) + " " + $page.props.user.lastname.split(" ", 1) }}

                                        <svg class="ml-2 -mr-0.5 h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                            <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </span>
                            </div>

                        </template>

                        <template #content>
                            <!-- <jet-dropdown-link-sidebar :href="route('user.edit')" :active="route().current('user.edit')">
                                Perfil
                            </jet-dropdown-link-sidebar>

                            <jet-dropdown-link-sidebar :href="route('verification.create')" :active="activeVerification()">
                                Verificar Cuenta
                            </jet-dropdown-link-sidebar>

                            <jet-dropdown-link-sidebar :href="route('accounts.index.user')" :active="activeAccounts()">
                                Datos Bancarios
                            </jet-dropdown-link-sidebar>

                            <div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[1px] my-1"></div> -->
                            
                            <jet-dropdown-link-sidebar :href="route('users.changePassword')" :active="route().current('users.changePassword')">
                                Cambiar Contraseña
                            </jet-dropdown-link-sidebar>
                            <!-- Authentication -->
                            <form @submit.prevent="logout">
                                <jet-dropdown-link-sidebar as="button">
                                    Cerrar Sesión
                                </jet-dropdown-link-sidebar>
                            </form>
                        </template>
                    </jet-dropdown-sidebar>
                </div>
                <div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[1px] my-1"></div>

                <div class="mx-3 relative py-2">
                    <jet-nav-link-sidebar :href="route('admin.dashboard')" :active="route().current('admin.dashboard')">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fab', 'microsoft']" size="lg" />
                        <span>Dashboard</span>
                    </jet-nav-link-sidebar>

                    <div class="bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[0.5px] my-1"></div>
                     
                    <jet-nav-link-sidebar :href="route('deposit.index')" :active="activeDeposits()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'arrow-circle-up']" size="lg" />
                        <span>Depósitos</span>
                    </jet-nav-link-sidebar>
                    <jet-nav-link-sidebar :href="route('withdrawal.index')" :active="activeWithdrawals()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'arrow-circle-down']" size="lg" />
                        <span>Retiros</span>
                    </jet-nav-link-sidebar>
                    <jet-nav-link-sidebar :href="route('user.index')" :active="activeUsers()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'users']" size="1x"/>
                        <span>Usuarios</span>
                    </jet-nav-link-sidebar>
                    <jet-nav-link-sidebar :href="route('admin.dollarPriceIndex')" :active="activeDollarPrice()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'dollar-sign']" size="lg"/>
                        <span>Precio Dolar</span>
                    </jet-nav-link-sidebar>
                    <jet-nav-link-sidebar :href="route('admin.roleIndex')" :active="activeRole()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'user-shield']" size="1x"/>
                        <span>Roles</span>
                    </jet-nav-link-sidebar>
                    <jet-nav-link-sidebar :href="route('admin.permissionIndex')" :active="activePermission()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'user-lock']" size="1x"/>
                        <span>Permisos</span>
                    </jet-nav-link-sidebar>                    
                    <jet-nav-link-sidebar :href="route('admin.messagingIndex')" :active="activeMassiveEmail()">
                        <font-awesome-icon class="text-gray-300 ml-2 mr-4 h-8" :icon="['fas', 'envelope']" size="1x"/>
                        <span>Mensajería Masiva</span>
                    </jet-nav-link-sidebar>
                </div>
            </div>
        </aside>

        <div class="bg-gray-100 pt-4 lg:ml-72 min-h-screen">
            <nav class="bg-transparent w-full rounded-md">
                <!-- Primary Navigation Menu -->
                <div class="px-4 sm:px-6 lg:px-8">
                    <div class="flex justify-between h-16">
                        <div class="flex items-center">
                            <!-- Page Heading -->
                            <div class="hidden lg:block" v-if="$slots.header">
                                <div class="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                    <slot name="header"></slot>
                                </div>
                            </div>  

                            <!-- Hamburger -->
                            <div class="-mr-2 flex items-center lg:hidden">
                                <button @click="showingNavigationDropdown = ! showingNavigationDropdown" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition">
                                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                        <path :class="{'hidden': showingNavigationDropdown, 'inline-flex': ! showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                        <path :class="{'hidden': ! showingNavigationDropdown, 'inline-flex': showingNavigationDropdown }" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>                                                  
                        </div>

                        <div class="flex items-center ml-6">
                            <div class="static mr-2">
                                <font-awesome-icon class="text-gray-600" :icon="['fas', 'bell']" size="lg" />
                                <div class="ml-3 absolute top-7">
                                    <Link v-if="$page.props.notifications.countNotifications > 0" :href="route('admin.dashboard')" class="flex h-5 w-5">
                                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                                        <span class="rounded-full h-5 w-5 bg-sky-500 text-sm text-black flex items-center pt-0 pb-[3px] justify-center">
                                            {{$page.props.notifications.countNotifications}}
                                        </span>
                                    </Link>
                                    <div v-else class="flex h-5 w-5">                                    
                                        <span class="rounded-full h-5 w-5 bg-yellow-brand bg-opacity-60 text-sm text-black flex items-center pt-0 pb-[3px] justify-center">
                                            0
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <!-- Page Content -->
            <main :class="{'hidden': showingNavigationDropdown}" class="md:block overflow-y-auto min-h-[90vh]">
                <jet-banner/>
                <slot></slot>
            </main>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';
    import JetApplicationMark from '@/Components/ApplicationMark.vue';
    import JetBanner from '@/Components/Banner.vue';
    import JetDropdownSidebar from '@/Components/DropdownSidebar.vue';
    import JetDropdownLinkSidebar from '@/Components/DropdownLinkSidebar.vue';
    import JetNavLinkSidebar from '@/Components/NavLinkSidebar.vue';
    import JetNavLink from '@/Components/NavLink.vue';
    import JetResponsiveNavLink from '@/Components/ResponsiveNavLink.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faBell } from '@fortawesome/free-solid-svg-icons';
    import { faArrowCircleUp } from '@fortawesome/free-solid-svg-icons';
    import { faArrowCircleDown } from '@fortawesome/free-solid-svg-icons';
    import { faMicrosoft } from '@fortawesome/free-brands-svg-icons';    
    import { faUsers } from '@fortawesome/free-solid-svg-icons';
    import { faDollarSign } from '@fortawesome/free-solid-svg-icons';
    import { faUserShield } from '@fortawesome/free-solid-svg-icons';
    import { faUserLock } from '@fortawesome/free-solid-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';


    library.add(faBell, faMicrosoft, faArrowCircleUp, faArrowCircleDown, faUsers, faDollarSign, faUserShield, faUserLock, faEnvelope);

    export default defineComponent({

        props: {
            title: String,
            description: String,
        },

        components: {
            Head,
            JetApplicationMark,
            JetBanner,
            JetDropdownSidebar,
            JetDropdownLinkSidebar,
            JetNavLink,
            JetNavLinkSidebar,
            JetResponsiveNavLink,
            Link,
            FontAwesomeIcon,
        },

        data() {
            return {
                showingNavigationDropdown: false,
                url: location.origin,
            }
        },

        methods: {
            switchToTeam(team) {
                this.$inertia.put(route('current-team.update'), {
                    'team_id': team.id
                }, {
                    preserveState: false
                })
            },

            logout() {
                this.$inertia.post(route('logout'));
            },

            activeDollarPrice(){
                if(route().current('admin.dollarPriceIndex'))
                {
                    return true;
                }
                else
                {
                    return false;
                }
            },

            activeMassiveEmail(){
                if(route().current('admin.messagingIndex'))
                {
                    return true;
                }
                else 
                {
                    return false;
                }
            },

            activeRole(){
                if(route().current('admin.roleIndex'))
                {
                    return true;
                }
                else 
                {
                    return false;
                }
            },

            activePermission(){
                if(route().current('admin.permissionIndex'))
                {
                    return true;
                }
                else 
                {
                    return false;
                }
            },

            activeUsers(){
                if(route().current('user.index'))
                {
                    return true
                }
                else 
                {
                    return false
                }
            },

            activeWithdrawals(){
                if(route().current('withdrawal.index') || route().current('withdrawal.show'))
                {
                    return true
                }
                else 
                {
                    return false
                }
            },

            activeDeposits(){
                if(route().current('deposit.index') || route().current('admin.depositShow') || route().current('deposit.show'))
                {
                    return true
                }
                else 
                {
                    return false
                }
            },

            activeVerification(){
                if(route().current('verification.create') || route().current('formFund.create') || route().current('formKnowledgeClient.create') || route().current('formKnowledgeClient.show') || route().current('formFund.show'))
                {
                    return true
                }
                else 
                {
                    return false
                }
            },

            activeAccounts(){
                if(route().current('accounts.index.user') || route().current('accounts.create.user'))
                {
                    return true
                }
                else 
                {
                    return false
                }
            },

            openDropdown(){
                if(route().current('user.edit') || this.activeVerification() || this.activeAccounts() || route().current('users.changePassword')){
                    return true
                }else{
                    return false
                }
            }
        },
    })
</script>