<template>
    <Head title="Forgot Password" />

    <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <div class="mb-4 text-sm text-gray-600">
            ¿Olvidaste tu contraseña? No hay problema. Simplemente puedes hacernos saber tu dirección de correo 
            electrónico y te enviaremos un enlace de restablecimiento de contraseña que te permitirá elegir 
            una nueva.
        </div>

        <div v-if="status" class="mb-4 font-medium text-sm text-green-600">
            {{ status }}
        </div>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <jet-label for="email" value="Correo Electrónico" />
                <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
            </div>

            <div class="flex items-center justify-end mt-4">
                <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Recuperar contraseña
                </jet-button>
            </div>
        </form>
    </jet-authentication-card>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Head } from '@inertiajs/inertia-vue3';
    import JetAuthenticationCard from '@/Components/AuthenticationCard.vue'
    import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue'
    import JetButton from '@/Components/Button.vue'
    import JetInput from '@/Components/Input.vue'
    import JetLabel from '@/Components/Label.vue'
    import JetValidationErrors from '@/Components/ValidationErrors.vue'

    export default defineComponent({
        components: {
            Head,
            JetAuthenticationCard,
            JetAuthenticationCardLogo,
            JetButton,
            JetInput,
            JetLabel,
            JetValidationErrors
        },

        props: {
            status: String
        },

        data() {
            return {
                form: this.$inertia.form({
                    email: ''
                })
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('password.email'))
            }
        }
    })
</script>
