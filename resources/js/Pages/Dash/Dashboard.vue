<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="px-3 py-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"  v-if="$page.props.user.requirement_user.verified === 2 && $page.props.user.accounts[0] && transactions[0]">
            
            <div class="flex justify-center items-center mb-6">
                <h1 class="text-3xl text-black/75 font-semibold text-center">Últimas Transacciones</h1>
            </div>

            <div class="min-w-full overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tipo
                            </th>
                            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Company
                            </th>
                            <th scope="col" class="hidden md:block px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cuenta
                            </th>
                            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Monto USD
                            </th>
                            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" v-if="transactions[0]">
                        <tr v-for="transaction in transactions" :key="transaction.id">
                            <td :class="{'text-blue-brand-gradient2' :transaction.type === 1, 'text-red-400' :transaction.type === 0, 'text-green-400' :transaction.type === 2, 'text-purple-400' :transaction.type === 3}" class="px-4 py-4 text-center whitespace-nowrap text-sm">
                                {{transactionType(transaction)}}
                            </td>
                            <td v-if="transaction.type < 2" :class="{'text-green-500' :transaction.transactionable.broker_id === 1, 'text-blue-800' :transaction.transactionable.broker_id === 2}" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold">
                                {{transaction.transactionable.broker_id === 1 ? 'FBS' : 'Pepperstone'}}
                            </td>                                                    
                            <td v-if="transaction.type > 1" :class="{'text-rose-800' :transaction.transactionable.wallet_id === 1, 'text-green-500' :transaction.transactionable.wallet_id === 2}" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold">
                                {{transaction.transactionable.wallet_id === 1 ? 'Skrill' : 'Neteller'}}
                            </td>
                            <td v-if="transaction.type < 2" class="hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{transaction.transactionable.id === 1 ? 'No disponible' : transaction.transactionable.number}}
                            </td>
                            <td v-if="transaction.type > 1" class="hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{transaction.transactionable.email}}
                            </td>
                            <td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{transaction.amount_usd}}
                            </td>
                            <td :class="{'text-green-500' :transaction.status === 'Realizado', 'text-red-500' :transaction.status === 'Cancelado', 'text-orange-500' :transaction.status === 'Pendiente'}"  class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{transaction.status}}
                            </td>
                        </tr>
                    </tbody>                                            
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="4">No tienes transacciones</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div class="px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white" v-else>
            
            <div class="flex flex-col justify-center items-center mb-6">
                <h1 class="text-3xl text-black/75 font-semibold p-3 text-center">Primeros pasos</h1>
                <p class="text-lg md:text-xl text-black/40 font-medium px-4 md:px-8 text-justify mb-5">
                    Gracias por registrarte en ExchangeLatam, debes realizar los siguientes pasos para poder hacer uso de nuestros servicios de depósitos y retiros:
                </p>
            </div>

            <div class="grid grid-cols-5 w-full my-5">
                <div class="col-span-5 lg:col-start-2 lg:col-span-3 grid grid-cols-10 lg:grid-cols-5 gap-y-3">
                    <div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center ">
                        <div :class="{'bg-slate-200 border-2 border-blue-brand text-dark-brand' : $page.props.user.requirement_user.info_ok === 0, 'bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none' : $page.props.user.requirement_user.info_ok === 1}" class="w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl">
                            1
                        </div>
                    </div>
                    <div class="col-span-5 lg:col-span-3 flex justify-start items-center">
                        <span class="text-lg md:text-xl text-black/40 font-medium">Completar tu información personal</span>
                    </div>                                 
                    <div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center ">   
                        <Link v-if="$page.props.user.requirement_user.info_ok !== 1" :href="route('user.edit')" class="inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                            Completar
                        </Link>
                        <span v-else class="text-blue-brand inline-flex items-center">
                            <CheckIcon class="h-10 w-10" aria-hidden="true" />
                        </span>
                    </div>
                    <div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center ">
                        <div :class="{'bg-slate-200 border-2 border-blue-brand text-dark-brand' : $page.props.user.requirement_user.verified !== 2, 'bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none' : $page.props.user.requirement_user.verified === 2}"  class="w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl">
                            2
                        </div>
                    </div>
                    <div class="col-span-5 lg:col-span-3 flex justify-start items-center">
                        <span class="text-lg md:text-xl text-black/40 font-medium">Verifica tu cuenta</span>
                    </div> 
                    <div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center ">   
                        <Link v-if="$page.props.user.requirement_user.verified === 0" :href="route('verification.create')" class="inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                            Verificar
                        </Link>
                        <span v-else-if="$page.props.user.requirement_user.verified === 1" class="text-orange-500 inline-flex items-center">
                            <ClockIcon class="h-10 w-10" aria-hidden="true" />
                        </span>
                        <span v-else class="text-blue-brand inline-flex items-center">
                            <CheckIcon class="h-10 w-10" aria-hidden="true" />
                        </span>
                    </div>
                    <div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center ">
                        <div :class="{'bg-slate-200 border-2 border-blue-brand text-dark-brand' : $page.props.user.accounts[0] == null, 'bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none' : $page.props.user.accounts[0]}"  class="w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl">
                            3
                        </div>
                    </div>
                    <div class="col-span-5 lg:col-span-3 flex justify-start items-center">
                        <span class="text-lg md:text-xl text-black/40 font-medium">Registrar cuenta bancaria para retiros</span>
                    </div> 
                    <div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center ">   
                        <Link v-if="$page.props.user.accounts[0] == null" :href="route('accounts.create.user')" class="inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                            Registrar
                        </Link>
                        <span v-else class="text-blue-brand inline-flex items-center">
                            <CheckIcon class="h-10 w-10" aria-hidden="true" />
                        </span>
                    </div>
                </div>
            </div>                        
            <p v-if="$page.props.user.requirement_user.verified === 2 && $page.props.user.accounts[0]" class="text-lg md:text-xl text-blue-brand font-medium pt-2 text-center md:px-8 my-6">
                Tu cuenta está lista, ya puedes realizar tus transacciones con ExchangeLatam
            </p>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Link } from '@inertiajs/inertia-vue3';   
    import { CheckIcon } from '@heroicons/vue/solid';
    import { ClockIcon } from '@heroicons/vue/outline';

    export default defineComponent({
        components: {
            AppLayout,
            CheckIcon,
            ClockIcon,
            Link,
        },
        props: ['transactions', 'accounts', 'requirement_user'],

        methods: {
            transactionType(transaction){
                if(transaction.type === 0)
                {
                    return 'Retiro';
                }
                else if(transaction.type === 1)
                {
                    return 'Depósito';
                }
                else if(transaction.type === 2)
                {
                    return 'Compra de saldo';
                }
                else if(transaction.type === 3)
                {
                    return 'Venta de saldo';
                }
            }
        }
    })
</script>
