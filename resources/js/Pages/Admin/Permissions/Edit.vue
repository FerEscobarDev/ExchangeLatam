<template>
    <app-layout-admin title="Editar Permiso">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Editar Permiso
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg p-8 overflow-visible">                   
                        
                        <PermissionEditForm :permission="permission"/>
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import PermissionEditForm from '@/Pages/Admin/Permissions/Partials/PermissionEditForm.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: {
            permission: Object,
        },

        components: {
            AppLayoutAdmin,
            PermissionEditForm,
            Link,
        },
    })
</script>