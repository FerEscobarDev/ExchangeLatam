<template>
    <Head title="SAGRILAFT Policy" />

    <div class="font-sans text-gray-900 antialiased">
        <div class="pt-4 bg-gradient-to-t from-blue-brand to-dark-brand">
            <div class="min-h-screen flex flex-col items-center pt-6 sm:pt-0">
                <div>
                    <jet-authentication-card-logo />
                </div>

                <div v-html="policy" class="w-full sm:max-w-4xl mt-6 p-6 bg-white shadow-md overflow-hidden sm:rounded-lg prose">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent } from 'vue';
import { Head } from '@inertiajs/inertia-vue3';
import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue';

export default defineComponent({
    props: ['policy'],

    components: {
        Head,
        JetAuthenticationCardLogo,
    },
})
</script>
