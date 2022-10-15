<template>
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
                                <td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                    {{withdrawal.id}}
                                </td>
                                <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                    <Link :href="route('admin.userShow', withdrawal.user_id)" class="text-indigo-600 hover:text-indigo-900">
                                        {{withdrawal.user.name}}
                                    </Link>
                                </td>
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
                                    <Link :href="route('admin.withdrawalShow', withdrawal.id)" class="text-indigo-600 hover:text-indigo-900">
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
                    <pagination v-if="withdrawals.data[0]" :paginating="withdrawals"/>
                </div>
            </div>
        </div>
    </div> 
</template>

<script>
    import { defineComponent } from 'vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            Link,
            Pagination
        },

        props: {
            withdrawals: Object,
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
