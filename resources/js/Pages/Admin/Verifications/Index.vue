<template>
    <AppLayoutAdmin title="Verification">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Verificación del Usuario
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible grid grid-cols-8 gap-4">   

                        <div class="col-span-8">
                            <ShowDocument :verification="client.verification"/>
                        </div>                    
                        
                        <div class="col-span-8">
                            <update-data :client="client"/>
                        </div>

                        <div class="col-span-8">
                            <FormVerification :client="client"/>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </AppLayoutAdmin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import UpdateData from '@/Pages/Admin/Verifications/Partials/UpdateData.vue';
    import ShowDocument from '@/Pages/Admin/Verifications/Partials/ShowDocument.vue';    
    import FormVerification from '@/Pages/Admin/Verifications/Partials/FormVerification.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            UpdateData,
            ShowDocument,
            FormVerification,
            Link,
        },

        props: {
            sessions: Object, 
            client: Object,
        },
    })
</script>
