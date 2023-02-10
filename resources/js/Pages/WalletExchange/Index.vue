<template>
    <app-layout title="Wallet Exchange">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Wallet Exchange
            </h2>
        </template>

        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="flex justify-evenly items-center mb-6">
                <Link :href="route('users.createWalletExchangeDeposit')" class="inline-flex items-center text-center px-4 py-2 mr-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                    Comprar Saldo De Skrill
                </Link>
                <Link :href="route('users.createWalletExchangeWithdrawal')" class="inline-flex items-center text-center  px-4 py-2 ml-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                    Vender Tu Saldo Skrill
                </Link>
            </div>
            
            <div class="min-w-full overflow-x-scroll xl:overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Billetera
                            </th>
                            <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Tipo
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Monto USD
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Monto COP
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Total
                            </th>                                                  
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Fecha Solicitud
                            </th>                                                    
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>                                                    
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" v-if="transactions.data[0]">
                        <tr v-for="transaction in transactions.data" :key="transaction.id" class="odd:bg-white even:bg-gray-50">
                            <td :class="{'text-rose-800' :transaction.transactionable.wallet.id === 1, 'text-green-600' :transaction.transactionable.wallet.id === 2}" class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                {{transaction.transactionable.wallet.name}}
                            </td><td :class="{'text-blue-brand-gradient2' :transaction.type === 1, 'text-red-400' :transaction.type === 0, 'text-green-400' :transaction.type === 2, 'text-purple-400' :transaction.type === 3}" class="px-4 py-4 text-center whitespace-nowrap text-sm">
                                {{transactionType(transaction)}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{transaction.amount_usd.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{transaction.amount_cop.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{transaction.total.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{dateFormat(transaction.application_date)}}
                            </td>
                            <td :class="{'text-green-500' :transaction.status === 'Realizado', 'text-red-500' :transaction.status === 'Cancelado', 'text-orange-500' :transaction.status === 'Pendiente'}"  class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{transaction.status}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('users.showWalletExchange', transaction.id)" class="text-indigo-600 hover:text-indigo-900">
                                    Ver detalles
                                </Link>
                            </td>
                        </tr>
                    </tbody>                                            
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7">No tienes transacciones</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-2">                                        
                <pagination class="border-none" v-if="transactions.data[0]" :paginating="transactions"/>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            AppLayout,
            Link,
            Pagination,
        },
        props: {
            transactions: Object, 
            accounts: Object,
            exchange: Array,           
        },        
        methods: {
            dateFormat(date)
            {                
                let dateNew = dayjs(date, 'YYYY-MM-DD');
                const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                let formatted_date = dateNew.$D + '-' + months[dateNew.$M] + '-' + dateNew.$y;
                return formatted_date;
            },

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
        },
    })
</script>
