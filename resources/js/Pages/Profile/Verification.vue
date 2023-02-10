<template>
    <app-layout title="Verificación de cuenta">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Verificación de cuenta
            </h2>
        </template>
        <div class="lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">   

            <forms-data :user="$page.props.user" />
                        
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import { Link } from '@inertiajs/inertia-vue3';
    import FormsData from '@/Pages/Profile/Partials/FormsData.vue'

    export default defineComponent({
        props: [],

        components: {
            AppLayout,
            FormsData,
            Link
        },
    })
</script>
