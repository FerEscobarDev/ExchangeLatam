<template>
    <jet-form @submitted="withdrawalCreate">
        <template #form>
            <!-- Numero Cuenta -->
            <div class="col-span-6 flex justify-center items-end">
                <div class="w-full mx-5">
                    <jet-label for="search" value="Número de cuenta" />
                    <jet-input id="search" type="search" class="mt-1 block w-full" v-model="form.search"/>
                    <jet-input-error :message="form.errors.search" class="mt-2" />
                </div>

                <div class="max-w-max mx-5">
                    <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                        Buscar
                    </jet-button>
                </div>
            </div>
        </template>
    </jet-form>
</template>

<script>
    import { defineComponent } from 'vue';
    import JetButton from '@/Components/Button.vue';
    import JetForm from '@/Components/Form.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';

    export default defineComponent({
        components: {
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
        },

        props: {
            search: String,
        },

        data() {
            return {
                form: this.$inertia.form({
                    search: this.search,
                }),
            }
        },

        methods: {
            withdrawalCreate() {  
                this.form.get(route('admin.createWithdrawal'), {
                    preserveScroll: true,
                });
            },
        },
    })
</script>