<template>
    <app-layout title="Depósitos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Depósitos a Broker
            </h2>
        </template>
        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="flex justify-end items-center mb-6">
                <Link :href="route('deposit.create')" class="inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                    Solicitar depósito
                </Link>
            </div>
            <div class="min-w-full overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Broker
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
                    <tbody class="bg-white divide-y divide-gray-200" v-if="deposits.data[0]">
                        <tr v-for="deposit in deposits.data" :key="deposit.id" class="odd:bg-white even:bg-gray-50">
                            <td :class="{'text-green-500' :deposit.transactionable.broker.id === 1, 'text-blue-800' :deposit.transactionable.broker.id === 2}" class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                {{deposit.transactionable.broker.name}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{deposit.transactionable.id === 1 ? 'No disponible' : deposit.transactionable.number}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{deposit.amount_usd.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{deposit.amount_cop.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{deposit.total.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{dateFormat(deposit.application_date)}}
                            </td>
                            <td :class="{'text-green-500' :deposit.status === 'Realizado', 'text-red-500' :deposit.status === 'Cancelado', 'text-orange-500' :deposit.status === 'Pendiente'}"  class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{deposit.status}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('deposit.show', deposit.id)" class="text-indigo-600 hover:text-indigo-900">
                                    Ver detalles
                                </Link>
                            </td>
                        </tr>
                    </tbody>                                            
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="8">No tienes transacciones</td>
                        </tr>
                    </tbody>
                </table>   
            </div>
            <div class="mt-2">
                <pagination class="border-none" v-if="deposits.data[0]" :paginating="deposits"/>
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
            deposits: Object, 
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
