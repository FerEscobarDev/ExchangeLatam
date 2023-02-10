<template>
    <app-layout title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('accounts.index.user')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Datos bancarios/</Link>Registro cuenta bancaria
            </h2>
        </template>
        <div class="px-3 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">                    
                        
            <account-form :bank="bank" :banks="banks" :account="account"/>

            <p class="text-lg md:text-xl text-black/40 font-medium text-center my-5">
                La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y será donde recibirás los fondos de los retiros que realices desde tu broker.
            </p> 
            
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import AccountForm from '@/Pages/Accounts/Partials/AccountForm.vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: ['bank', 'banks', 'account'],

        components: {
            AppLayout,
            AccountForm,
            Link
        },
    })
</script>