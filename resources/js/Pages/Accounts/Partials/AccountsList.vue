<template>
    <div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mx-auto">
        <span class="font-semibold">{{ account.user.name + ' ' + account.user.lastname }}</span>
        <span class="flex">
            <span class="text-sm text-gray-600 mr-1">Documento: </span><span class="text-sm font-semibold text-dark-brand">{{ account.user.data_user.doc_num }}</span>
        </span>
        <span class="flex">
            <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{ account.bank.name }}</span>
        </span>                                    
        <span class="flex">
            <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{ account.number }}</span>
        </span>                                                                        
        <span class="flex mb-2">
            <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{ account.type }}</span>
        </span>
        
        <div class="max-w-max mx-auto mt-2">
            <Link :href="route('accounts.create.user')" class="inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                Cambiar
            </Link>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Link } from '@inertiajs/inertia-vue3';


    export default {
        props: ['account'],

        components: {
            AppLayout,
            Link
        }
    }
</script>