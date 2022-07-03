<template>
    <app-layout title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Datos bancarios
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-8">   
                        <h1 class="text-2xl text-black/75 font-semibold text-center mb-4">Cuenta Bancaria</h1>

                        <p v-if="account == null" class="text-lg md:text-xl text-black/40 font-medium text-justify my-5">
                            La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y será donde recibirás los fondos de los retiros que realices desde tu broker.
                        </p>                     
                        
                        <accounts-list v-if="account" :account="account"/>

                        <div v-else class=" max-w-max mx-auto">
                            <Link :href="route('accounts.create.user')" class="inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                Registrar Cuenta Bancaria
                            </Link>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import AccountsList from '@/Pages/Accounts/Partials/AccountsList.vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: ['account'],
        components: {
            AppLayout,
            AccountsList,
            Link
        },
    })
</script>