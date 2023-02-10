<template>
    <app-layout title="Solicitud de depósito">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('users.deposits')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Depósitos a broker/</Link>Solicitud de depósito
            </h2>
        </template>

        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="grid grid-cols-12">
                <div class="col-span-12 flex justify-center items-center p-4">
                    <div class="h-16 w-32 shadow-lg bg-dark-brand rounded-l-lg border border-gray-300 flex items-center justify-center">
                        <span class="text-white font-semibold text-lg">USD</span>
                    </div>
                    <div class="h-16 w-32 shadow-lg bg-opacity-10 bg-dark-brand hover:bg-opacity-20 hover:shadow-xl rounded-r-lg border border-gray-300 flex items-center justify-center transition">
                        <span class="text-dark-brand font-semibold text-lg">COP</span>
                    </div>
                </div>
                <div class="col-span-12 md:col-start-2 md:col-span-10 p-4">
                    <form @submit.prevent="submit">                                    
                        <div class="grid grid-cols-8 gap-1">
                            <div class="col-span-8 md:col-span-4 xl:col-span-2">
                                <jet-select :selectable="brokers" :selected="form.broker" v-model="form.broker">
                                    <template #title>
                                        Broker                          
                                    </template>
                                </jet-select>
                            </div>

                            <div class="col-span-8 md:col-span-4 xl:col-span-2">
                                <jet-label for="tradingAccount" value="Cuenta Broker" />
                                <jet-input id="tradingAccount" type="number" class="mt-1 block w-full" v-model="form.tradingAccount" />
                                <jet-input-error :message="form.errors.tradingAccount" class="mt-2" />
                            </div>

                            <div class="col-span-8 md:col-span-4 xl:col-span-2">
                                <jet-label for="amount_usd" value="Monto USD" />
                                <jet-input id="amount_usd" type="number" step="0.01" class="mt-1 block w-full" v-model="form.amount_usd" />
                                <jet-input-error :message="form.errors.amount_usd" class="mt-2" />
                            </div>

                            <!-- <div class="col-span-1">
                                <jet-label for="amount_cop" value="Monto COP" />
                                <jet-input id="amount_cop" type="number" class="mt-1 block w-full" v-model="form.amount_usd" />
                            </div> -->

                            <div class="col-span-8 md:col-span-4 xl:col-span-2">
                                <jet-select :selectable="accounts" :selected="form.account" v-model="form.account">
                                    <template #title>
                                        Seleccione el banco                           
                                    </template>
                                </jet-select>
                            </div>
                            
                            <div class="col-span-8 lg:col-start-3 lg:col-span-4">
                                <jet-calculate-deposit :amountUsd="form.amount_usd" :amountCop="amount_cop" :dollarPrice="exchange" :tradingVip="tradingAccountVip" :user="$page.props.user" />
                            </div>
                        </div>

                        <div class="grid grid-cols-1 items-center mt-4">
                            <jet-button class="mx-auto mb-4 max-w-max" :class="{ 'opacity-25': form.processing }" :disabled="true">
                                Solicitar
                            </jet-button>
                        </div>
                    </form>
                </div>
            </div>                        
        </div>
    </app-layout>  
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import JetButton from '@/Components/Button.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';
    import JetSelect from '@/Components/Select.vue';
    import JetCalculateDeposit from '@/Components/CalculateDeposit.vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            AppLayout,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
            JetSelect,
            JetCalculateDeposit,
            Link,
        },
        
        props: [
            'exchange', 
            'accounts',
            'brokers',
            'tradingAccounts',
            'dataUser'       
        ],   

        data() {
            return {
                form: this.$inertia.form({
                    broker: this.brokers[0],
                    tradingAccount: null,
                    amount_usd: 10,
                    account: this.accounts[0],
                })
            }
        },
        setup() {
            const amount_cop = 0

            return {
                amount_cop
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('deposit.store'))
            }
        },

        computed: {
            tradingAccountVip()
            {
                let vip = false;
                if(this.tradingAccounts[0] && this.form.tradingAccount)
                {

                    this.tradingAccounts.forEach(element => {
                        
                        if(this.form.tradingAccount === element.number)
                        {
                            if(this.form.broker.id === element.broker_id)
                            {  
                                if(element.vip === 1)
                                { 
                                    console.log('Si es cuenta VIP');
                                    return vip = true;
                                }
                            }
                        }
                    });
                }

                return vip;
            },
        },
        
    })
</script>