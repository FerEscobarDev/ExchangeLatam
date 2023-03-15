<template>
    <app-layout-admin title="Wallet Exchange">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Listado de Wallets Exchange
            </h2>
        </template>

        <div class="px-3 py-3 md:pt-3 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="min-w-full overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Usuario
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Wallet
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Cuenta Trading
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
                            <td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                {{transaction.id}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('admin.userShow', transaction.user_id)" class="text-indigo-600 hover:text-indigo-900">
                                    {{transaction.user.name}}
                                </Link>
                            </td>
                            <td :class="{'text-rose-800' :transaction.transactionable.wallet_id === 1, 'text-green-500' :transaction.transactionable.wallet_id === 2}" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold">
                                {{transaction.transactionable.wallet_id === 1 ? 'Skrill' : 'Neteller'}}
                            </td>
                            <td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{transaction.transactionable.email}}
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
                                <Link :href="route('admin.showWalletExchange', transaction.id)" class="text-indigo-600 hover:text-indigo-900">
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
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
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
        },
    })
</script>