<template>
    <app-layout-admin title="Registrar Retiro">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Registrar Retiro
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg p-8 overflow-visible">

                        <SearchAccount :search="search"/>             
                        
                        <CreateForm v-if="account" :account="account" :dollarPrice="dollarPrice"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import CreateForm from '@/Pages/Admin/Withdrawals/Partials/CreateForm.vue';
    import SearchAccount from '@/Pages/Admin/Withdrawals/Partials/SearchAccount.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            CreateForm,
            Link,
            SearchAccount,
        },

        props:{
            account: Object,
            search: String,
            dollarPrice: Number,
        }
    })
</script>