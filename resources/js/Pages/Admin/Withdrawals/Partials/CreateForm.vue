<template>
    <jet-form @submitted="withdrawalStore">
        <template #form>
            
            <!-- Banco Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="tradingAccount" value="Tradding Account" />
                <jet-input id="traddingAccount" type="text" class="mt-1 block w-full" v-model="form.tradingAccount"/>
                <jet-input-error :message="form.errors.tradingAccount" class="mt-2" />
            </div>

            <!-- Tipo Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="amount_usd" value="Monto USD" />
                <jet-input id="amount_usd" type="number" step="0.01" class="mt-1 block w-full" v-model="form.amount_usd"/>
                <jet-input-error :message="form.errors.amount_usd" class="mt-2" />
            </div>

            <!-- Numero Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="application_date" value="Fecha Aprobación" />
                <jet-input id="application_date" type="datetime-local" class="mt-1 block w-full" v-model="form.application_date"/>
                <jet-input-error :message="form.errors.application_date" class="mt-2" />
            </div>


            <div class="col-span-6">
                <div class="max-w-max mx-auto">
                    <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                        Registrar
                    </jet-button>
                </div>
            </div> 
        </template>
    </jet-form>

    <CalculateWithdrawal :amountUsd="form.amount_usd" :dollarPrice="dollarPrice"/>

</template>

<script>
    import { defineComponent } from 'vue';
    import JetButton from '@/Components/Button.vue';
    import JetForm from '@/Components/Form.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';
    import CalculateWithdrawal from '@/Components/CalculateWithdrawal.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
            CalculateWithdrawal
        },

        props: {
            account: Object,
            dollarPrice: Number,
        },

        setup(props) {
            //const dateNow = new Date().toISOString().slice(0, 16);
            const dateNow = dayjs().format('YYYY-MM-DDTHH:mm');

            return {
                dateNow,
            }
        },

        data() {
            return {
                form: this.$inertia.form({
                    tradingAccount: this.account.number,
                    amount_usd: 0.00,
                    application_date: this.dateNow,
                    tradingAccount_id: this.account.id,
                    user_id: this.account.user.id,
                }),
            }
        },

        methods: {
            withdrawalStore() {  
                this.form.post(route('admin.storeWithdrawal'), {
                    preserveScroll: true,
                });
            },
        },
    })
</script>