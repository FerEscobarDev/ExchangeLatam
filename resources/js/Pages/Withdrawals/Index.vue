<template>
    <app-layout title="Retiros">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Retiros de Broker
            </h2>
        </template>

        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="flex justify-end items-center mb-6">
                <div class="bg-white/40 drop-shadow-md shadow-xl hover:drop-shadow-lg hover:shadow-2xl sm:rounded-lg w-72 h-28 mx-auto flex justify-between items-center">
                    <div class="flex flex-col items-center text-center p-3">
                        <span class="text-lg text-dark-brand font-semibold">Tasa de cambio para retiros hoy: </span>
                        <span class="text-xl text-blue-brand-gradient1 hover:transition-all hover:text-2xl font-semibold">{{ exchange }}</span>
                    </div>
                </div>
            </div>

            <div class="min-w-full overflow-x-scroll xl:overflow-auto border border-gray-200 rounded-lg">
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
                                Fecha Límite
                            </th>                                                    
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>                                                    
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" v-if="withdrawals.data[0]">
                        <tr v-for="withdrawal in withdrawals.data" :key="withdrawal.id" class="odd:bg-white even:bg-gray-50">
                            <td :class="{'text-green-500' :withdrawal.transactionable.broker.id === 1, 'text-blue-800' :withdrawal.transactionable.broker.id === 2}"  class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                {{withdrawal.transactionable.broker.name}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{withdrawal.transactionable.id === 1 ? 'No disponible' : withdrawal.transactionable.number}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{withdrawal.amount_usd.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{withdrawal.amount_cop.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{withdrawal.total.toLocaleString()}}
                            </td>
                            <td class="text-center hidden md:table-cell px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{dateFormat(withdrawal.expiration_date)}}
                            </td>
                            <td :class="{'text-green-500' :withdrawal.status === 'Realizado', 'text-red-500' :withdrawal.status === 'Cancelado', 'text-orange-500' :withdrawal.status === 'Pendiente'}"  class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{withdrawal.status}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('withdrawal.show', withdrawal.id)" class="text-indigo-600 hover:text-indigo-900">
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
                <pagination class="border-none" v-if="withdrawals.data[0]" :paginating="withdrawals"/>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            AppLayout,
            Link,
            Pagination
        },
        props: {
            withdrawals: Object, 
            exchange: Number           
        },
        methods: {
            dateFormat(date)
            {                
                let dateNew = dayjs(date, 'YYYY-MM-DD');
                const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                let formatted_date = dateNew.$D + '-' + months[dateNew.$M] + '-' + dateNew.$y;
                return formatted_date;
            },
        }
    })
</script>
