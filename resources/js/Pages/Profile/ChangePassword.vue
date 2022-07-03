<template>
    <app-layout title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Cambiar contraseña
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">                         
                        
                        <update-password-form :user="$page.props.user" />
                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import UpdatePasswordForm from '@/Pages/Profile/Partials/UpdatePasswordForm.vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: ['sessions', 'departaments', 'cities'],

        components: {
            AppLayout,
            UpdatePasswordForm,
            Link
        },
    })
</script>