<template>
    <app-layout title="Dashboard">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                Dashboard
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg" v-if="$page.props.user.requirement_user.info_ok === 1 && $page.props.user.requirement_user.verified === 2 && $page.props.user.requirement_user.formFunds === 1 && $page.props.user.requirement_user.formKnowledge === 1 && $page.props.user.accounts[0] && transactions[0]">
                        <h1 class="text-3xl text-black/75 font-semibold p-5 text-center">Últimas Transacciones</h1>
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Tipo
                                                    </th>
                                                    <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Broker
                                                    </th>
                                                    <th scope="col" class="hidden md:block px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Cuenta Trading
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
                                                    <td :class="{'text-blue-brand-gradient2' :transaction.type === 1, 'text-red-400' :transaction.type === 0}" class="px-4 py-4 text-center whitespace-nowrap text-sm">
                                                        {{transaction.type === 1?'Depósito':'Retiro'}}
                                                    </td>
                                                    <td :class="{'text-green-500' :transaction.trading_account.broker.id === 1, 'text-blue-800' :transaction.trading_account.broker.id === 2}" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold">
                                                        {{transaction.trading_account.broker.name}}
                                                    </td>
                                                    <td class="hidden md:block px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                                        {{transaction.trading_account.id === 1 ? 'No disponible' : transaction.trading_account.number}}
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
                            </div>
                        </div>
                    </div>
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg p-3" v-else>
                        <h1 class="text-3xl text-black/75 font-semibold p-3 text-center">Primeros pasos</h1>
                        <p class="text-lg md:text-xl text-black/40 font-medium px-4 md:px-8 text-justify mb-5">
                            Gracias por registrarte en ExchangeLatam, debes realizar los siguientes pasos para poder hacer uso de nuestros servicios de depósitos y retiros:
                        </p>
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
                                    <Link v-if="$page.props.user.requirement_user.info_ok != 1" :href="route('user.edit')" class="inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                        Completar
                                    </Link>
                                    <span v-else class="text-blue-brand inline-flex items-center">
                                        <CheckIcon class="h-10 w-10" aria-hidden="true" />
                                    </span>
                                </div>
                                <div class="col-span-2 lg:col-span-1 flex justify-center items-center text-center ">
                                    <div :class="{'bg-slate-200 border-2 border-blue-brand text-dark-brand' : $page.props.user.requirement_user.verified === 0 || $page.props.user.requirement_user.verified === 1, 'bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white border-none' : $page.props.user.requirement_user.verified === 2}"  class="w-12 h-12 rounded-full relative flex justify-center items-center text-center text-3xl">
                                        2
                                    </div>
                                </div>
                                <div class="col-span-5 lg:col-span-3 flex justify-start items-center">
                                    <span class="text-lg md:text-xl text-black/40 font-medium">Verifica tu cuenta</span>
                                </div> 
                                <div class="col-span-3 lg:col-span-1 flex justify-center items-center text-center ">   
                                    <Link v-if="$page.props.user.requirement_user.verified != 2 ||  $page.props.user.requirement_user.formFunds === 0 || $page.props.user.requirement_user.formKnowledge === 0" :href="route('verification.create')" class="inline-flex items-center px-2 py-1 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                        Verificar
                                    </Link>
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
                        <p v-if="$page.props.user.requirement_user.info_ok === 1 && $page.props.user.requirement_user.verified === 2 &&  $page.props.user.requirement_user.formFunds === 1 && $page.props.user.requirement_user.formKnowledge === 1 && $page.props.user.accounts[0]" class="text-lg md:text-xl text-blue-brand font-medium pt-2 text-center md:px-8 my-6">
                            Tu cuenta está lista, ya puedes realizar tus depósitos y retiros por medio de ExchangeLatam
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import { Link } from '@inertiajs/inertia-vue3'    
    import { CheckIcon } from '@heroicons/vue/solid'

    export default defineComponent({
        components: {
            AppLayout,
            CheckIcon,
            Link,
        },
        props: ['transactions', 'accounts', 'requirement_user']
    })
</script>
