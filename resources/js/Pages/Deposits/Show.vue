<template>
    <app-layout title="Detalle del depósito">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('users.deposits')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Depósitos a broker/</Link>Vista Detallada
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
                                        <span class="text-sm text-gray-600 mr-2">Broker: </span><span :class="{'text-green-500' :deposit.trading_account.broker.id === 1, 'text-blue-800' :deposit.trading_account.broker.id === 2}" class="text-sm font-semibold">{{deposit.trading_account.broker.name}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Cuenta de trading: </span><span class="text-sm font-semibold text-dark-brand">{{deposit.trading_account.number}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Fecha de solicitud: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(deposit.application_date)}}</span>
                                    </span>                                  
                                    <span v-if="deposit.completed_date" class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Fecha de finalización: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(deposit.completed_date)}}</span>
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0">
                                <h2 v-if="deposit.comment" class="text-lg text-dark-brand font-semibold mb-2">Comentarios</h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                                    <span class="flex items-center w-full">
                                        <span class="text-sm text-gray-600 font-semibold">{{deposit.comment}}</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <hr scope class="mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2">
                        <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min">
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">Detalles de pago</h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3">
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignación:</span>
                                    </span>
                                </div>                         
                                <div v-if="deposit.account.number === '000000000'" class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                                    <span class="text-sm text-gray-600 font-semibold mb-2">Los detalles la cuenta bancaria de este pago no están disponibles, por favor revisa el comprobante.</span>                                    
                                    <span v-if="deposit.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                                        Pago Realizado
                                    </span>
                                    <span v-else-if="deposit.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Procesando ...
                                    </span>
                                    <span v-else-if="deposit.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Transacción Rechazada
                                    </span>
                                </div>
                                <div v-else class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                                    <span v-if="deposit.account_id !== 3" class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Gerente: </span><span class="text-sm font-semibold text-dark-brand">Fernando Escobar Bermudez</span>
                                    </span>
                                    <span v-else class="font-semibold">ExchangeLatam SAS</span>
                                    <span v-if="deposit.account_id !== 3" class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Cédula: </span><span class="text-sm font-semibold text-dark-brand">1.111.198.204</span>
                                    </span>
                                    <span v-else class="flex">
                                        <span class="text-sm text-gray-600 mr-1">NIT: </span><span class="text-sm font-semibold text-dark-brand">901.422.406</span>
                                    </span>
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{deposit.account.bank.name}}</span>
                                    </span>                                    
                                    <span class="flex">
                                        <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{deposit.account.number}}</span>
                                    </span>                                                                        
                                    <span class="flex mb-2">
                                        <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{deposit.account.type}}</span>
                                    </span>                                    
                                    <span v-if="deposit.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                                        Pago Realizado
                                    </span>
                                    <span v-else-if="deposit.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Procesando ...
                                    </span>
                                    <span v-else-if="deposit.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto">
                                        Transacción Rechazada
                                    </span>
                                </div>
                            </div>
                            <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">Resumen de la transacción</h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center">
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Monto USD: </span><span class="font-semibold text-dark-brand">$ {{deposit.amount_usd.toLocaleString()}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ {{deposit.amount_cop.toLocaleString()}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Impuesto 4x1000: </span><span class="font-semibold text-dark-brand">$ {{deposit.cuatro_por_mil.toLocaleString()}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Comisión: </span><span class="font-semibold text-dark-brand">$ {{deposit.comission.toLocaleString()}}</span>
                                    </span>                                                                        
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Impuesto IVA: </span><span class="font-semibold text-dark-brand">$ {{deposit.iva.toLocaleString()}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Descuento VIP: </span><span class="font-semibold text-dark-brand">$ {{deposit.rebate.toLocaleString()}}</span>
                                    </span> 
                                    <div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"></div>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-base text-dark-brand mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ {{deposit.total.toLocaleString()}}</span>
                                    </span>
                                </div>   
                            </div>
                        </div>
                        <div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"></div>
                        <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min">
                            <div v-if="!voucherExist" class="col-span-6 flex flex-col justify-between items-center mb-5">
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
                            <div v-else class="col-span-6 mb-5">
                                
                                <!-- New Voucher Preview -->
                                <div class="mb-4" v-show="voucherPreview">
                                    <span class="block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto"
                                        :style="'background-image: url(\'' + voucherPreview + '\');'">
                                    </span>
                                    <span v-if="voucherPreview" class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center">
                                        {{$refs.voucherUp.files[0].name}}
                                    </span>
                                </div>

                                <form @submit.prevent="submit" class="flex flex-col justify-between items-center">
                                    
                                    <input type="file" class="hidden" ref="voucherUp" @change="updateVoucherPreview">
                                    
                                    <jet-secondary-button @click.prevent="selectFile" class="mx-auto mb-4">
                                        <font-awesome-icon class="mr-2" :icon="['fas', 'upload']" size="sm" /> <span v-if="voucherPreview">Cambiar</span> <span v-else>Seleccione archivo</span>
                                    </jet-secondary-button>
                                    
                                    <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Enviar
                                    </jet-button>                                
                                
                                </form>
                            </div>
                            <div class="col-span-6 flex flex-col justify-between items-center mt-5 md:mt-0 mb-5">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">Aviso</h2>
                                <div class="rounded-lg text-dark-brand w-3/4 flex flex-col items-start">
                                    <span class="flex items-center w-full">
                                        <ul class="list-disc">
                                            <li>
                                                <span class="text-sm text-orange-700 font-semibold text-center">
                                                    Realiza el pago por transferencia o consignación a la cuenta bancaria que se muestra en 
                                                    "Detalles de pago".
                                                </span>
                                            </li>
                                            <li>
                                                <span class="text-sm text-orange-700 font-semibold text-center">
                                                    Sube el comprobante de la transacción seleccionando el archivo y presionando el botón "Enviar".
                                                </span>
                                            </li>
                                            <li>
                                                <span class="text-sm text-orange-700 font-semibold text-center">
                                                    Si consignas en oficina bancaria o cajero electrónico fuera del departamento del Tolima
                                                    debes realizarla libre de comisión de consignación nacional la cual puedes consultar al cajero.
                                                </span>
                                            </li>
                                        </ul>
                                    </span>
                                </div>
                            </div>
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
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faUpload } from '@fortawesome/free-solid-svg-icons'

    library.add(faUpload);

    export default defineComponent({
        components: {
            AppLayout,
            Link,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            FontAwesomeIcon,
        },

        props: ['deposit', 'voucher'],        

        data() {
            return {                
                voucherShow: false,
                voucherExist: this.voucher === null ? true : false,
                form: this.$inertia.form({
                    _method: 'PUT',
                    voucherUp: null,
                }),
                voucherPreview: null,
            }
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
            submit(){
                
                if(this.$refs.voucherUp){
                    this.form.voucherUp = this.$refs.voucherUp.files[0]
                }

                this.form.post(this.route('deposit.voucherUp', this.deposit.id),{
                    onSuccess: () => (this.clearFileInput()),
                });
            },
            selectFile(){
                this.$refs.voucherUp.click();
            },
            updateVoucherPreview(){
                const voucherc = this.$refs.voucherUp.files[0];

                if(this.voucher){
                    
                }

                if(!voucherc) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.voucherPreview = e.target.result;
                }

                reader.readAsDataURL(voucherc);
            },
            clearFileInput(){
                if(this.$refs.voucherUp?.value){
                    this.$refs.voucherUp.value = null;                    
                    this.voucherExist = false;
                    this.voucherPreview = null;
                }
            },
        },
        
    })
</script>