<template>
    <div>
        <div class="flex flex-wrap justify-center md:justify-start bg-white overflow-hidden shadow-xl sm:rounded-lg p-5 my-5">
            <div v-html="notification.data.mensaje">
            </div> 
            <span> - </span>
            <Link class="text-blue-brand underline" :href="url + '/admin/dashboard/user/' + notification.data.link" >
                Ir al perfil
            </Link>
            <span> - </span>
            <form @submit.prevent="submit">
                <Input type="hidden" name="idnotification" :v-model="form.idnotification"></Input>
                <ButtonPrimary class="p-1" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">Realizado</ButtonPrimary>
            </form>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import ButtonPrimary from '@/Components/ButtonPrimary.vue';
    import Input from '@/Components/Input.vue';

    export default defineComponent({
        components: {
            Link,
            ButtonPrimary,
            Input
        },

        props: {
            notification: Object,
            url: String,
        },

        data() {
            return {
                form: this.$inertia.form({
                    idnotification: this.notification.id,
                })
            }
        },

        methods: {
            submit()
            {
                this.form.post(route('admin.notificationRead'));
            }
        },
    })
</script>
