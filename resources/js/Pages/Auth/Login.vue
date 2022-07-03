<template>
    <Head title="Iniciar Sesión"/>

    <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <jet-validation-errors class="mb-4" />

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <form @submit.prevent="submit">
            <div>
                <jet-label for="email" value="Correo Electrónico" />
                <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
            </div>

            <div class="mt-4">
                <jet-label for="password" value="Contraseña" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" />
            </div>

            <div class="block mt-4">
                <label class="flex items-center">
                    <jet-checkbox name="remember" v-model:checked="form.remember" />
                    <span class="ml-2 text-sm text-gray-600">Remember me</span>
                </label>
            </div>

            <div class="grid grid-cols-1 items-center mt-4">

                <jet-button class="mx-auto mb-4 max-w-max" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Iniciar Sesión
                </jet-button>

                <Link :href="route('password.request')" class="underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-4">
                    ¿Olvidaste tu contraseña?
                </Link>

                <Link :href="route('register')" class="underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8">
                    ¿No te has registrado?
                </Link>
            </div>
        </form>
    </jet-authentication-card>
</template>

<script>
    import { defineComponent } from 'vue'
    import JetAuthenticationCard from '@/Jetstream/AuthenticationCard.vue'
    import JetAuthenticationCardLogo from '@/Jetstream/AuthenticationCardLogo.vue'
    import JetButton from '@/Jetstream/Button.vue'
    import JetInput from '@/Jetstream/Input.vue'
    import JetCheckbox from '@/Jetstream/Checkbox.vue'
    import JetLabel from '@/Jetstream/Label.vue'
    import JetValidationErrors from '@/Jetstream/ValidationErrors.vue'
    import { Head, Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Head,
            JetAuthenticationCard,
            JetAuthenticationCardLogo,
            JetButton,
            JetInput,
            JetCheckbox,
            JetLabel,
            JetValidationErrors,
            Link,
        },

        props: {
            canResetPassword: Boolean,
            status: String
        },

        data() {
            return {
                form: this.$inertia.form({
                    email: '',
                    password: '',
                    remember: false
                })
            }
        },

        methods: {
            submit() {
                this.form
                    .transform(data => ({
                        ... data,
                        remember: this.form.remember ? 'on' : ''
                    }))
                    .post(this.route('login'), {
                        onFinish: () => this.form.reset('password'),
                    })
            }
        }
    })
</script>
