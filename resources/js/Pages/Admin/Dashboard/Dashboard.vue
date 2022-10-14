<template>
    <app-layout-admin title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8" v-if="$page.props.notifications.countNotifications > 0">
                    <NotificationCard v-for="notificationObj in $page.props.notifications.unreadNotifications" :key="notificationObj.id" :notification="notificationObj" :url="$page.props.ziggy.url"/>
                </div>
                <div class="container mx-auto sm:px-6 lg:px-8" v-else>
                    <div class="flex flex-col items-center justify-center bg-white overflow-hidden shadow-xl sm:rounded-lg p-5 my-5">
                        <h5 class="text-2xl font-semibold text-blue-brand-gradient1">¡Felicitaciones!</h5>
                        <h6 class="text-lg text-black/40 font-medium">Excelente trabajo, no tienes tareas pendientes.</h6>
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import { Link } from '@inertiajs/inertia-vue3';    
    import { CheckIcon } from '@heroicons/vue/solid';
    import NotificationCard from '@/Components/Notification.vue';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            CheckIcon,
            NotificationCard,
            Link,
        },
    })
</script>
