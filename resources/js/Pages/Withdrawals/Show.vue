<template>
    <app-layout title="Detalle del retiro">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('users.withdrawals')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Retiros de FBS/</Link>Vista Detallada
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg flex flex-col">
                        <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5  mt-5 h-min">
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">                                
                                    Detalles de la transacción
                                </h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Broker: </span><span :class="{'text-green-500' :withdrawal.trading_account.broker.id === 1, 'text-blue-800' :withdrawal.trading_account.broker.id === 2}" class="text-sm font-semibold">{{withdrawal.trading_account.broker.name}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Cuenta de trading: </span><span class="text-sm font-semibold text-dark-brand">{{withdrawal.trading_account.id === 1 ? 'No disponible' : withdrawal.trading_account.number}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Fecha de aprobación: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(withdrawal.application_date)}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Fecha límite de pago: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(withdrawal.expiration_date)}}</span>
                                    </span>                                    
                                    <span v-if="withdrawal.completed_date" class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Fecha de finalización: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(withdrawal.completed_date)}}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0">
                                <h2 v-if="withdrawal.comment" class="text-lg text-dark-brand font-semibold mb-2">Comentarios</h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                                    <span class="flex items-center w-full">
                                        <span class="text-sm text-gray-600 font-semibold">{{withdrawal.comment}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr scope class="mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2">
                        <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min">
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">Detalles de pago</h2>                            
                                <div v-if="withdrawal.account.number === '000000000'" class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                                    <span class="text-sm text-gray-600 font-semibold mb-2">Los detalles de la cuenta bancaria de este pago no están disponibles, por favor revisa el comprobante.</span>                                    
                                    <span v-if="withdrawal.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                                        Pago Realizado
                                    </span>
                                    <span v-else-if="withdrawal.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        En Progreso ...
                                    </span>
                                    <span v-else-if="withdrawal.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Transacción Rechazada
                                    </span>
                                </div>
                                <div v-else class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                                    <span class="font-semibold">{{$page.props.user.name.split(" ", 1) + " " + $page.props.user.lastname.split(" ", 1)}}</span>
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Documento: </span><span class="text-sm font-semibold text-dark-brand">{{$page.props.user.doc_num}}</span>
                                    </span>
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{withdrawal.account.bank.name}}</span>
                                    </span>                                    
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{withdrawal.account.number}}</span>
                                    </span>                                                                        
                                    <span class="flex mb-2">
                                        <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{withdrawal.account.type}}</span>
                                    </span>                                    
                                    <span v-if="withdrawal.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                                        Pago Realizado
                                    </span>
                                    <span v-else-if="withdrawal.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Procesando ...
                                    </span>
                                    <span v-else-if="withdrawal.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Transacción Rechazada
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">Resumen de la transacción</h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center">
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Monto USD: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.amount_usd.toLocaleString()}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.amount_cop.toLocaleString()}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Impuesto 4x1000: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.cuatro_por_mil.toLocaleString()}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Comisión: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.comission.toLocaleString()}}</span>
                                    </span>                                                                        
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Impuesto IVA: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.iva.toLocaleString()}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Total a recibir COP: </span><span class="font-semibold text-dark-brand">$ {{withdrawal.total.toLocaleString()}}</span>
                                    </span>
                                </div>   
                            </div>
                        </div>
                        <div class="flex flex-col md:flex-row justify-between items-center p-4 mx-auto w-4/5 mb-5 h-min">
                            <jet-button @click="showVoucher" class="mx-auto" :disabled="voucherExist">
                                Ver Comprobante
                            </jet-button>
                            <jet-dialog-modal :show="voucherShow" @close="closeModal">
                                <template #title>
                                    Comprobante de transferencia
                                </template>
                                <template #content>
                                    <img :src="voucher" alt="No se pudo cargar el comprobante">
                                </template>
                                <template #footer>
                                    <jet-secondary-button @click="closeModal">
                                        Cerrar
                                    </jet-secondary-button>
                                </template>
                            </jet-dialog-modal>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import { Link } from '@inertiajs/inertia-vue3';
    import JetDialogModal from '@/Jetstream/DialogModal.vue'
    import JetButton from '@/Jetstream/Button.vue'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'

    export default defineComponent({
        components: {
            AppLayout,
            Link,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
        },

        props: {
            withdrawal: Object,
            voucher: String,       
        },

        methods: {
            dateFormat(date)
            {                
                let dateNew = new Date(date)
                const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                let formatted_date = dateNew.getDate() + "-" + months[dateNew.getMonth()] + "-" + dateNew.getFullYear()
                return formatted_date
            },
            showVoucher()
            {
                this.voucherShow = true
            },
            closeModal()
            {
                this.voucherShow = false
            },
        },

        data() {
            return {                
                voucherShow: false,
                voucherExist: this.voucher === null ? true : false,
            }
        },
        
    })
</script>