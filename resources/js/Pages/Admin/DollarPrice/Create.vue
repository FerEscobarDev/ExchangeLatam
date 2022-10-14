<template>
    <app-layout-admin title="Registrar Precio">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Registrar Precio
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg p-8 overflow-visible">                   
                        
                        <PriceCreateForm/>
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import PriceCreateForm from '@/Pages/Admin/DollarPrice/Partials/PriceCreateForm.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            PriceCreateForm,
            Link,
        },
    })
</script>