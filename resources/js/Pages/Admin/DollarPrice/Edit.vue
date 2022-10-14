<template>
    <app-layout-admin title="Editar Precio">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Editar Precio
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg p-8 overflow-visible">                   
                        
                        <PriceEditForm :dollarPrice="dollarPrice"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import PriceEditForm from '@/Pages/Admin/DollarPrice/Partials/PriceEditForm.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: {
            dollarPrice: Object,
        },

        components: {
            AppLayoutAdmin,
            PriceEditForm,
            Link,
        },
    })
</script>