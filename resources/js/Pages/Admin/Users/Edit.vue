<template>
    <AppLayoutAdmin title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Editar Perfil del Usuario
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <!-- <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">                         
                        
                        <update-photo :user="$page.props.user" />
                        
                    </div> -->
                    <div class="bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible">                       
                        
                        <update-data :client="client" :departaments="departaments" :cities="cities" />
                        
                    </div>
                </div>
            </div>
        </div>
    </AppLayoutAdmin>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue'
    //import UpdatePhoto from '@/Pages/Profile/Partials/UpdatePhoto.vue'
    import UpdateData from '@/Pages/Admin/Users/Partials/UpdateData.vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        props: ['sessions', 'departaments', 'cities', 'client'],

        components: {
            AppLayoutAdmin,
            UpdateData,
            Link
        },
    })
</script>
