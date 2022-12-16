<template>
    <app-layout title="Vender Saldo">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>
                <Link :href="route('users.indexWalletExchange')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Wallet Exchange/</Link>Solicitud Venta Saldo De Skrill
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg">
                        <DialogModal :show="show" @close="closeModal">
                            <template #title>
                                Registra tu cuenta de Skrill
                            </template>
                            <template #content>
                                <form @submit.prevent="walletStore" class="grid grid-cols-8">
                                    <div class="col-span-6 col-start-2 mt-4">
                                        <jet-label for="email" value="Email registrado en Skrill" />
                                        <jet-input id="email" type="email" class="mt-1 block w-full" v-model="formWallet.email" />
                                        <jet-input-error :message="formWallet.errors.email" class="mt-2" />
                                    </div>
                                    <div class="col-span-6 col-start-2 mt-2">
                                        <jet-label for="mobil" value="Celular registrado en Skrill" />
                                        <jet-input id="mobil" type="tel" class="mt-1 block w-full" v-model="formWallet.mobil" />
                                        <jet-input-error :message="formWallet.errors.mobil" class="mt-2" />
                                    </div>`
                                    <div class="col-span-6 col-start-2 mt-4">
                                        <ul class="list-disc">
                                            <li>
                                                <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                                    Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo.
                                                </span>
                                            </li>
                                            <li>
                                                <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                                    La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                    <div class="col-span-8 flex justify-center items-center mt-4">
                                        <jet-button class="mx-auto mb-4 max-w-max" :class="{ 'opacity-25': formWallet.processing }">
                                            Registrar
                                        </jet-button>
                                    </div>
                                </form>
                            </template>
                            <template #footer>
                                <SecondaryButton @click="closeModal">
                                    Cerrar
                                </SecondaryButton>
                            </template>
                        </DialogModal>
                        <div class="grid grid-cols-12 p-4">
                            <div v-if="!issetWallet" class="col-span-12 flex justify-center items-center p-4">
                                <jet-button @click="showModal" class="mx-auto">
                                    Registrar Cuenta Skrill
                                </jet-button>
                            </div>
                            <div class="col-span-12 flex justify-center items-center p-4">
                                <div class="rounded-lg bg-slate-200 text-dark-brand p-4 w-auto flex flex-col items-start mx-auto">
                                    <span class="text-sm text-gray-600 font-semibold">El pago será realizado a la siguiente cuenta bancaria registrada.</span>
                                    <span class="font-semibold">{{ account[0].user.name + ' ' + account[0].user.lastname }}</span>
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Documento: </span><span class="text-sm font-semibold text-dark-brand">{{ account[0].user.data_user.doc_num }}</span>
                                    </span>
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{ account[0].bank.name }}</span>
                                    </span>                                    
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{ account[0].number }}</span>
                                    </span>                                                                        
                                    <span class="flex mb-2">
                                        <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{ account[0].type }}</span>
                                    </span>
                                    
                                    <div class="max-w-max mx-auto mt-2">
                                        <Link :href="route('accounts.create.user')" class="inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                            Cambiar
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div class="col-span-12 md:col-start-2 md:col-span-10 p-4">
                                <form @submit.prevent="submit">                                    
                                    <div class="grid grid-cols-6 gap-1">
                                        <div class="col-span-6 md:col-span-3">
                                            <jet-select :selectable="wallets" :selected="form.wallet" v-model="form.wallet">
                                                <template #title>
                                                    Wallet                          
                                                </template>
                                            </jet-select>
                                            <jet-input-error :message="form.errors.wallet" class="mt-2" />
                                        </div>

                                        <div class="col-span-6 md:col-span-3">
                                            <jet-label for="amount_usd" value="Monto USD" />
                                            <jet-input id="amount_usd" type="number" step="0.01" class="mt-1 block w-full" v-model="form.amount_usd" />
                                            <jet-input-error :message="form.errors.amount_usd" class="mt-2" />
                                        </div>

                                        <!-- <div class="col-span-1">
                                            <jet-label for="amount_cop" value="Monto COP" />
                                            <jet-input id="amount_cop" type="number" class="mt-1 block w-full" v-model="form.amount_usd" />
                                        </div> -->

                                        <!-- <div class="col-span-6 md:col-span-2">
                                            <jet-select :selectable="accounts" :selected="form.account" v-model="form.account">
                                                <template #title>
                                                    Medio de pago:                           
                                                </template>
                                            </jet-select>
                                            <jet-input-error :message="form.errors.account" class="mt-2" />
                                        </div> -->
                                        
                                        <div class="col-span-6">
                                            <CalculateSellBalance v-if="issetWallet" :amountUsd="form.amount_usd" :amountCop="amount_cop" :dollarPrice="exchangeRate" :walletVip="walletAccount[0].vip" :user="$page.props.user" />

                                            <CalculateSellBalance v-else="issetWallet" :amountUsd="form.amount_usd" :amountCop="amount_cop" :dollarPrice="exchangeRate" :walletVip="0" :user="$page.props.user" />
                                        </div>
                                    </div>

                                    <div class="grid grid-cols-1 items-center mt-4">
                                        <jet-button class="mx-auto mb-4 max-w-max" :class="{ 'opacity-25': form.processing }">
                                            Solicitar
                                        </jet-button>
                                    </div>
                                </form>

                            </div>
                        </div>                        
                    </div>
                </div>
            </div>
        </div>
    </app-layout>  
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import JetButton from '@/Components/Button.vue';
    import SecondaryButton from '@/Components/SecondaryButton.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';
    import JetSelect from '@/Components/Select.vue';
    import CalculateSellBalance from '@/Pages/WalletExchange/Partials/CalculateSellBalance.vue';
    import DialogModal from '@/Components/DialogModal.vue';    

    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            AppLayout,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
            JetSelect,
            CalculateSellBalance,
            DialogModal,
            Link,
            SecondaryButton,
        },
        
        props: [ 
            'account',
            'wallets',
            'walletAccount',
            'dataUser',
            'exchangeRate',    
        ],   

        data() {
            return {
                form: this.$inertia.form({
                    wallet: this.wallets[0],
                    amount_usd: 10,
                }),
                formWallet: this.$inertia.form({
                    wallet: this.wallets[0],
                    email: null,
                    mobil: null,
                }),
                show: this.issetWallet ? false : true,
            }
        },

        setup(props) {
            const amount_cop = 0;
            const issetWallet = props.walletAccount.length > 0 ? true : false;

            return {
                amount_cop,
                issetWallet
            }
        },

        methods: {
            submit() {
                this.form.post(this.route('users.storeWalletExchangeWithdrawal'));
            },

            walletStore(){
                this.formWallet.post(this.route('users.storeWalletAccount'), {
                    onSuccess: () => (this.closeModal(), this.issetWallet = true),
                });
            },

            closeModal(){
                this.show = false;
            },

            showModal(){
                this.show = true;
            },

        },





        /* 
        aos3ty5gbzyu6hkibboyiov5l IDAPI
        5j5hzi1ngzm63f1dn30mowbimmca2yc9h7ymhwk58522fvgie9 CLAVESECRETAAPI
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
        }, */
        
    })
</script>