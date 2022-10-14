<template>
    <Head title="Registro">
        <meta 
            name="description" 
            content="Registrate y empieza a ahorrar dinero en el cambio de tus inversiones." 
            head-key="description">
    </Head>

    <jet-authentication-card>
        <template #logo>
            <jet-authentication-card-logo />
        </template>

        <jet-validation-errors class="mb-4" />

        <form @submit.prevent="submit">
            <div>
                <jet-label for="name" value="Nombres" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name" />
            </div>

            <div class="mt-4">
                <jet-label for="lastname" value="Apellidos" />
                <jet-input id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname" />
            </div>

            <div class="mt-4">
                <jet-label for="mobil" value="Celular" />
                <jet-input id="mobil" type="number" class="mt-1 block w-full" v-model="form.mobil" />
            </div>

            <div class="mt-4">
                <jet-label for="email" value="Correo Electrónico" />
                <jet-input id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
            </div>

            <div class="mt-4">
                <jet-label for="password" value="Contraseña" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" />
            </div>

            <div class="mt-4">
                <jet-label for="password_confirmation" value="Confirmar Constraseña" />
                <jet-input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" />
            </div>

            <div class="mt-4" v-if="$page.props.jetstream.hasTermsAndPrivacyPolicyFeature">
                <jet-label for="terms">
                    <div class="flex items-center">
                        <jet-checkbox name="terms" id="terms" v-model:checked="form.terms" />

                        <div class="ml-2">
                            Aceptar los <a target="_blank" :href="route('terms.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Términos y Condiciones</a> y nuestra <a target="_blank" :href="route('policy.show')" class="underline text-sm text-gray-600 hover:text-gray-900">Política de Tratamiendo de Datos</a>
                        </div>
                    </div>
                </jet-label>
            </div>

            <div class="grid grid-cols-1 items-center mt-4">
                <jet-button class="mx-auto mb-4 max-w-max" :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                    Registrarse
                </jet-button>
                <Link :href="route('login')" class="underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8">
                    ¿Ya estás registrado?
                </Link>
            </div>
        </form>
    </jet-authentication-card>
</template>

<script>
    import { defineComponent } from 'vue'
    import JetAuthenticationCard from '@/Components/AuthenticationCard.vue'
    import JetAuthenticationCardLogo from '@/Components/AuthenticationCardLogo.vue'
    import JetButton from '@/Components/Button.vue'
    import JetInput from '@/Components/Input.vue'
    import JetCheckbox from '@/Components/Checkbox.vue'
    import JetLabel from '@/Components/Label.vue'
    import JetValidationErrors from '@/Components/ValidationErrors.vue'
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

        data() {
            return {
                form: this.$inertia.form({
                    name: '',
                    lastname: '',                    
                    mobil: '',
                    email: '',
                    password: '',
                    password_confirmation: '',
                    terms: false,
                })
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('register'), {
                    onFinish: () => this.form.reset('password', 'password_confirmation'),
                })
            }
        }
    })
</script>
