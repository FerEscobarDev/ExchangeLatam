<template>
    <jet-form @submitted="priceStore">
        <template #form>
            
            <!-- Numero Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="date" value="Fecha" />
                <jet-input id="date" type="date" class="mt-1 block w-full" v-model="form.date"/>
                <jet-input-error :message="form.errors.date" class="mt-2" />
            </div>

            <!-- Banco Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="dollar_buy" value="Precio Depósitos" />
                <jet-input id="dollar_buy" type="text" class="mt-1 block w-full" v-model="form.dollar_buy"/>
                <jet-input-error :message="form.errors.dollar_buy" class="mt-2" />
            </div>

            <!-- Tipo Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="dollar_sell" value="Precio Retiros" />
                <jet-input id="dollar_sell" type="text" class="mt-1 block w-full" v-model="form.dollar_sell"/>
                <jet-input-error :message="form.errors.dollar_sell" class="mt-2" />
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

        data() {
            return {
                form: this.$inertia.form({
                    date: null,
                    dollar_buy: null,
                    dollar_sell: null,
                }),
            }
        },

        methods: {
            priceStore() {  
                this.form.post(route('admin.dollarPriceStore'), {
                    preserveScroll: true,
                });
            },
        },
    })
</script>