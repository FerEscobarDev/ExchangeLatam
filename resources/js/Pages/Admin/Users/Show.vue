<template>
    <AppLayoutAdmin title="Perfil">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Perfil Usuario
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-12 gap-x-2 gap-y-10 p-5">                       
                        
                        <div class="col-span-12">
                            <div class="flex flex-col md:flex-row items-center justify-center md:justify-around">
                                <div class="flex items-center justify-start">
                                    <!-- Current Profile Photo -->
                                    <div v-if="client.picture">
                                        <div>
                                            <img :src="$page.props.ziggy.url+'/storage/'+client.picture" class="rounded-full h-28 w-28 object-cover">
                                        </div>
                                    </div>
                                    <div v-else>
                                        <div>
                                            <img :src="client.profile_photo_url" :alt="client.name" class="rounded-full h-28 w-28 object-cover">
                                        </div>
                                    </div>
                                    <div v-if="client.data_user === null" class="flex flex-col ml-5">
                                        <span class="text-xl md:text-2xl text-black/75 font-semibold">{{client.name + ' ' + client.lastname}}</span>
                                    </div>
                                    <div v-else class="flex flex-col ml-5">
                                        <span class="text-xl md:text-2xl text-black/75 font-semibold">{{client.name + ' ' + client.lastname}}</span>
                                        <span v-if="client.data_user.vip === 'no'" class="text-black/50 font-medium">Cuenta Estándar</span>
                                        <span v-else class=" text-amber-500 font-medium">Cuenta VIP</span>
                                    </div>
                                </div>                                
                                <div class="flex md:flex-col gap-4 mt-6 md:mt-0">
                                    <Link :href="route('users.createWalletExchangeDeposit')" class="inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                        Transacciones
                                    </Link>
                                    <Link :href="route('admin.usersVerification', client.id)" class="inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                        Verificación
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-4 md:col-start-2 px-10 md:px-0 xl:px-5">
                            <div class="text-dark-brand w-full flex flex-col items-between">
                                <h2 class="text-2xl text-center font-semibold text-dark-brand mb-2">Datos Personales</h2>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Nombres: </span><span class="text-md text-gray-600">{{client.name}}</span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Apellidos: </span><span class="text-md text-gray-600">{{client.lastname}}</span>
                                </span>                                
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Documento: </span>
                                    <span v-if="client.data_user === null">
                                        Sin Información
                                    </span>
                                    <span v-else>
                                        <span>
                                            <span v-if="client.data_user.doc_type === 1" class="text-md text-gray-600">Cédula</span>
                                            <span v-else-if="client.data_user.doc_type === 2" class="text-md text-gray-600">Cédula de extranjería</span>
                                            <span v-else="client.data_user.doc_type === 3" class="text-md text-gray-600">Pasaporte</span>
                                        </span>
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Número: </span>
                                    <span v-if="client.data_user === null">
                                        Sin Información
                                    </span>
                                    <span v-else>                                                               
                                        <span class="text-md text-gray-600">{{client.data_user.doc_num}}</span> 
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Email: </span><span class="text-md text-gray-600">{{client.email}}</span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Celular: </span><span class="text-md text-gray-600">{{client.mobil}}</span>
                                </span>                                
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Departamento: </span>
                                    <span v-if="client.data_user === null">
                                        Sin Información
                                    </span>
                                    <span v-else>                                                               
                                        <span class="text-md text-gray-600">{{client.data_user.departament}}</span> 
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Ciudad: </span>
                                    <span v-if="client.data_user === null">
                                        Sin Información
                                    </span>
                                    <span v-else>                                                               
                                        <span class="text-md text-gray-600">{{client.data_user.city}}</span> 
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Dirección: </span>
                                    <span v-if="client.data_user === null">
                                        Sin Información
                                    </span>
                                    <span v-else>                                                               
                                        <span class="text-md text-gray-600">{{client.data_user.address}}</span> 
                                    </span>
                                </span>
                                <div class="flex justify-center items-center mt-5">
                                    <Link :href="route('admin.userEdit', client.id)" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition" >
                                        Editar
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div class="col-span-12 md:col-span-4 md:col-start-8 px-10 md:px-0 xl:px-5">
                            <div v-if="account !== null" class="text-dark-brand w-full flex flex-col items-between">
                                <h2 class="text-2xl text-center font-semibold text-dark-brand mb-2">Datos Bancarios</h2>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2 w-16">Banco: </span><span class="text-md text-gray-600">{{account.bank.name}}</span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2 w-16">Numero: </span><span class="text-md text-gray-600">{{account.number}}</span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2 w-16">Tipo: </span><span class="text-md text-gray-600">{{account.type}}</span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2 w-16">Inscrita: </span><span class="text-md text-gray-600">{{account.enrolled === 1 ? 'Inscrita' : 'No Inscrita'}}</span>
                                </span>
                                <div class="flex justify-center items-center mt-5">
                                    <Link :href="route('users.createWalletExchangeDeposit')" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition" >
                                        Administrar
                                    </Link>
                                </div>
                            </div>
                            <div v-else class="text-dark-brand w-full flex flex-col items-between">
                                <h2 class="text-2xl text-center font-semibold text-dark-brand mb-2">Datos Bancarios</h2>
                                <span class="flex justify-center items-center w-full">
                                    <span class="text-lg text-gray-600 my-10 w-full text-center">Sin datos bancarios registrados</span>
                                </span>
                                <div class="flex justify-center items-center mt-5">
                                    <Link :href="route('users.createWalletExchangeDeposit')" class="inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition" >
                                        Administrar
                                    </Link>
                                </div>                                
                            </div>
                            <div class="text-dark-brand w-full flex flex-col items-between mt-10">
                                <h2 class="text-2xl text-center font-semibold text-dark-brand mb-2">Información de la Cuenta</h2>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Email Verified: </span>
                                    <span v-if="client.email_verified_at !== null"><font-awesome-icon class="text-green-400" :icon="['far', 'check-circle']" size="sm" /></span>
                                    <span v-else><font-awesome-icon class="text-red-400" :icon="['far', 'times-circle']" size="sm" /></span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Verified: </span>
                                    <span v-if="client.requirement_user !== null">
                                        <span v-if="client.requirement_user.verified === 0"><font-awesome-icon :icon="['fas', 'user-times']" size="sm" class="text-red-400 "/></span>
                                        <span v-else-if="client.requirement_user.verified === 1" ><font-awesome-icon :icon="['fas', 'user-clock']" size="sm" class="text-orange-400"/></span>
                                        <span v-else ><font-awesome-icon :icon="['fas', 'user-check']" size="sm" class="text-green-400 "/></span>
                                    </span>
                                    <span v-else>
                                        Sin Información
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Form Cliente: </span>
                                    <span v-if="client.form_knowledge_client !== null">
                                        <span v-if="client.requirement_user.formKnowledge > 0" >
                                            <font-awesome-icon class="text-green-400" :icon="['far', 'check-circle']" size="sm" />
                                        </span>
                                        <span v-else >
                                            <font-awesome-icon class="text-red-400" :icon="['far', 'times-circle']" size="sm" />
                                        </span>
                                    </span> 
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Form Fondos: </span>
                                    <span v-if="client.form_fund !== null">                                                            
                                        <span v-if="client.requirement_user.formFunds > 0">
                                            <font-awesome-icon class="text-green-400" :icon="['far', 'check-circle']" size="sm" />
                                        </span>
                                        <span v-else >
                                            <font-awesome-icon class="text-red-400" :icon="['far', 'times-circle']" size="sm" />
                                        </span>
                                    </span>
                                    <span v-else>
                                        <font-awesome-icon class="text-red-400" :icon="['far', 'times-circle']" size="sm" />
                                    </span>
                                </span>
                                <span class="flex justify-between items-center">
                                    <span class="text-md font-semibold text-dark-brand mr-2">Roles: </span>
                                    <span class="text-sm text-gray-600">
                                        <span v-for="rol in client.roles">
                                            {{' ' + rol.name}}
                                        </span>
                                    </span>
                                </span>
                            </div>
                        </div>                        
                        <div class="col-span-12">
                            <h2 class="text-2xl text-center font-semibold text-dark-brand mb-2">Transacciones Recientes</h2>
                            <table class="w-full divide-y divide-gray-200">
                                <thead class="">
                                    <tr>
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Tipo
                                        </th>
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Company
                                        </th>
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Cuenta
                                        </th>
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Monto USD
                                        </th>
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Estado
                                        </th>                                        
                                        <th scope="col" class="px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                            Acciones
                                        </th>
                                    </tr>
                                </thead>
                                <tbody v-if="transactions[0]" class="bg-white divide-y divide-gray-200">
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
                                        <td v-if="transaction.type < 2" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {{transaction.transactionable.id === 1 ? 'No disponible' : transaction.transactionable.number}}
                                        </td>
                                        <td v-if="transaction.type > 1" class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {{transaction.transactionable.email}}
                                        </td>
                                        <td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {{transaction.amount_usd}}
                                        </td>
                                        <td :class="{'text-green-500' :transaction.status === 'Realizado', 'text-red-500' :transaction.status === 'Cancelado', 'text-orange-500' :transaction.status === 'Pendiente'}"  class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                            {{transaction.status}}
                                        </td>
                                        <td v-if="transaction.type === 0" class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link :href="route('admin.withdrawalShow', transaction.id)" class="text-indigo-600 hover:text-indigo-900">
                                                Ver detalles
                                            </Link>
                                        </td>
                                        <td v-else-if="transaction.type === 1" class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link :href="route('admin.depositShow', transaction.id)" class="text-indigo-600 hover:text-indigo-900">
                                                Ver detalles
                                            </Link>
                                        </td>
                                        <td v-else-if="transaction.type > 1" class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                            <Link :href="route('admin.showWalletExchange', transaction.id)" class="text-indigo-600 hover:text-indigo-900">
                                                Ver detalles
                                            </Link>
                                        </td>
                                    </tr>
                                </tbody>                                            
                                <tbody v-else class="bg-white divide-y divide-gray-200">
                                    <tr>
                                        <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="6">Sin transacciones</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>  
                     
                    </div>
                </div>
            </div>
        </div>
    </AppLayoutAdmin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import Button from '@/Components/Button.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';    
    import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
    import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
    import { faUserClock } from '@fortawesome/free-solid-svg-icons';
    import { faUserTimes } from '@fortawesome/free-solid-svg-icons';


    library.add(faCheckCircle, faTimesCircle, faUserCheck, faUserClock, faUserTimes);

    export default defineComponent({
        props: ['client','sessions', 'departaments', 'cities', 'account', 'transactions', 'roles'],

        components: {
            AppLayoutAdmin,
            Button,
            Link,
            FontAwesomeIcon,
        },

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
