<template>
    <app-layout-admin title="Depósitos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Listado de depósitos
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
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
                                                    <td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                                        {{deposit.id}}
                                                    </td>
                                                    <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        <Link :href="route('admin.userShow', deposit.user_id)" class="text-indigo-600 hover:text-indigo-900">
                                                            {{deposit.user.name}}
                                                        </Link>
                                                    </td>
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
                                                        <Link :href="route('admin.depositShow', deposit.id)" class="text-indigo-600 hover:text-indigo-900">
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
                                        <pagination v-if="deposits.data[0]" :paginating="deposits"/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
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
