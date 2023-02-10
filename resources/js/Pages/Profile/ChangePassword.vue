<template>
    <app-layout title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Cambiar contraseña
            </h2>
        </template>
        <div class="px-3 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">                         
                        
            <update-password-form :user="$page.props.user" />
            
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