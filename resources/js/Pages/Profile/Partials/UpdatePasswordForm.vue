<template>
    <jet-form @submitted="updatePassword">
        <template #form>
            <div class="col-span-6 md:col-span-2">
                <jet-label for="current_password" value="Contraseña actual" />
                <jet-input id="current_password" type="password" class="mt-1 block w-full" v-model="form.current_password" ref="current_password" autocomplete="current-password" />
                <jet-input-error :message="form.errors.current_password" class="mt-2" />
            </div>

            <div class="col-span-6 md:col-span-2">
                <jet-label for="password" value="Nueva contraseña" />
                <jet-input id="password" type="password" class="mt-1 block w-full" v-model="form.password" ref="password" autocomplete="new-password" />
                <jet-input-error :message="form.errors.password" class="mt-2" />
            </div>

            <div class="col-span-6 md:col-span-2">
                <jet-label for="password_confirmation" value="Confirmar contraseña" />
                <jet-input id="password_confirmation" type="password" class="mt-1 block w-full" v-model="form.password_confirmation" autocomplete="new-password" />
                <jet-input-error :message="form.errors.password_confirmation" class="mt-2" />
            </div>

            <div class="col-span-6">
                <div class="max-w-max mx-auto">
                    <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                        Guardar
                    </jet-button>
                </div>
            </div> 
        </template>
    </jet-form>
</template>

<script>
    import { defineComponent } from 'vue'
    import JetActionMessage from '@/Components/ActionMessage.vue'
    import JetButton from '@/Components/Button.vue'
    import JetForm from '@/Components/Form.vue'
    import JetInput from '@/Components/Input.vue'
    import JetInputError from '@/Components/InputError.vue'
    import JetLabel from '@/Components/Label.vue'

    export default defineComponent({
        components: {
            JetActionMessage,
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
        },

        data() {
            return {
                form: this.$inertia.form({
                    current_password: '',
                    password: '',
                    password_confirmation: '',
                }),
            }
        },

        methods: {
            updatePassword() {
                this.form.put(route('user-password.update'), {
                    errorBag: 'updatePassword',
                    preserveScroll: true,
                    onSuccess: () => this.form.reset(),
                    onError: () => {
                        if (this.form.errors.password) {
                            this.form.reset('password', 'password_confirmation')
                            this.$refs.password.focus()
                        }

                        if (this.form.errors.current_password) {
                            this.form.reset('current_password')
                            this.$refs.current_password.focus()
                        }
                    }
                })
            },
        },
    })
</script>
