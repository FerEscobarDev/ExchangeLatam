<template>
    <app-layout title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Perfil
            </h2>
        </template>
        <div class="px-3 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">                         
                        
            <update-photo :user="$page.props.user" />
                        
        </div>
        <div class="mt-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">                      
                        
            <update-data :user="$page.props.user" :departaments="departaments" :cities="cities" />
                        
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import UpdatePhoto from '@/Pages/Profile/Partials/UpdatePhoto.vue'
    import UpdateData from '@/Pages/Profile/Partials/UpdateData.vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: ['sessions', 'departaments', 'cities'],

        components: {
            AppLayout,
            UpdatePhoto,
            UpdateData,
            Link
        },
    })
</script>
