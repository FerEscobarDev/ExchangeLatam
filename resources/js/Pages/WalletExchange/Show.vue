<template>
    <app-layout title="Detalle del depósito">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('users.indexWalletExchange')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Wallet Exchange/</Link>Vista Detallada
            </h2>
        </template>

        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5  mt-5 h-min">
                <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                    <h2 class="text-lg text-dark-brand font-semibold mb-2">                                
                        Detalles de la transacción
                    </h2>
                    <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-2">Wallet: </span><span :class="{'text-rose-800' :transaction.transactionable.wallet.id === 1, 'text-green-500' :transaction.transactionable.wallet.id === 2}" class="text-sm font-semibold">{{transaction.transactionable.wallet.name}}</span>
                        </span>
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-2">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.transactionable.email}}</span>
                        </span>
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-2">Fecha de solicitud: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(transaction.application_date)}}</span>
                        </span>                                  
                        <span v-if="transaction.completed_date" class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-2">Fecha de finalización: </span><span class="text-sm font-semibold text-dark-brand">{{dateFormat(transaction.completed_date)}}</span>
                        </span>
                    </div>
                </div>
                <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0">
                    <h2 v-if="transaction.comment" class="text-lg text-dark-brand font-semibold mb-2">Comentarios</h2>
                    <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                        <span class="flex items-center w-full">
                            <span class="text-sm text-gray-600 font-semibold">{{transaction.comment}}</span>
                        </span>
                    </div>
                </div>
            </div>
            <hr scope class="mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2">
            <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min">
                <div class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                    <h2 class="text-lg text-dark-brand font-semibold mb-2">Detalles de pago</h2>
                    <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3">
                        <span v-if="transaction.type === 2" class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignación:</span>
                        </span>
                        <span v-else class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Debes transferir el monto que deseas vender a la siguiente cuenta de Skrill:</span>
                        </span>
                    </div>
                    <div v-if="transaction.type === 2" class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                        <span v-if="transaction.account_id !== 3" class="flex">
                            <span class="text-sm text-gray-600 mr-1">Gerente: </span><span class="text-sm font-semibold text-dark-brand">Fernando Escobar Bermudez</span>
                        </span>
                        <span v-else class="font-semibold">ExchangeLatam SAS</span>
                        <span v-if="transaction.account_id !== 3" class="flex">
                            <span class="text-sm text-gray-600 mr-1">Cédula: </span><span class="text-sm font-semibold text-dark-brand">1.111.198.204</span>
                        </span>
                        <span v-else class="flex">
                            <span class="text-sm text-gray-600 mr-1">NIT: </span><span class="text-sm font-semibold text-dark-brand">901.422.406</span>
                        </span>
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.bank.name}}</span>
                        </span>                                    
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.number}}</span>
                        </span>                                                                        
                        <span class="flex mb-2">
                            <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.type}}</span>
                        </span>                                    
                        <span v-if="transaction.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                            Transacción Realizada
                        </span>
                        <span v-else-if="transaction.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto">
                            Pago Pendiente
                        </span>
                        <span v-else-if="transaction.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto">
                            Transacción Rechazada
                        </span>
                        <span v-else-if="transaction.status === 'Procesando'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto">
                            Procesando...
                        </span>
                    </div>
                    <div v-else class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start">
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Wallet: </span><span class="text-sm font-semibold text-dark-brand">Skrill</span>
                        </span>                                    
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">admin@exchangelatam.com</span>
                        </span>
                    </div>
                    <div v-if="transaction.type === 3" class="rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mt-4">
                        <span v-if="transaction.account_id !== 3" class="flex">
                            <span class="text-sm text-gray-600 mr-1">Una vez realices la transferencia desde tu cuenta de skrill registrada haremos el pago a tu cuenta bancaria:</span>
                        </span>
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Banco: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.bank.name}}</span>
                        </span>                                    
                        <span class="flex">
                            <span class="text-sm text-gray-600 mr-1">Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.number}}</span>
                        </span>                                                                        
                        <span class="flex mb-2">
                            <span class="text-sm text-gray-600 mr-1">Tipo de Cuenta: </span><span class="text-sm font-semibold text-dark-brand">{{transaction.account.type}}</span>
                        </span>                                    
                        <span v-if="transaction.status === 'Realizado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto">
                            Transacción Realizada
                        </span>
                        <span v-else-if="transaction.status === 'Pendiente'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto">
                            Pago Pendiente
                        </span>
                        <span v-else-if="transaction.status === 'Cancelado'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto">
                            Transacción Rechazada
                        </span>
                        <span v-else-if="transaction.status === 'Procesando'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto">
                            Procesando...
                        </span>
                    </div>
                </div>
                <div class="col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0">
                    <h2 class="text-lg text-dark-brand font-semibold mb-2">Resumen de la transacción</h2>
                    <div class="rounded-lg text-dark-brand w-80 flex flex-col items-center">
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Monto USD: </span><span class="font-semibold text-dark-brand">$ {{transaction.amount_usd.toLocaleString()}}</span>
                        </span>
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Monto COP: </span><span class="font-semibold text-dark-brand">$ {{transaction.amount_cop.toLocaleString()}}</span>
                        </span>                                    
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Impuesto 4x1000: </span><span class="font-semibold text-dark-brand">$ {{transaction.cuatro_por_mil.toLocaleString()}}</span>
                        </span>                                    
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Comisión: </span><span class="font-semibold text-dark-brand">$ {{transaction.comission.toLocaleString()}}</span>
                        </span>                                                                        
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Impuesto IVA: </span><span class="font-semibold text-dark-brand">$ {{transaction.iva.toLocaleString()}}</span>
                        </span>
                        <span class="flex justify-between items-center w-full">
                            <span class="text-sm text-gray-600 mr-1">Descuento VIP: </span><span class="font-semibold text-dark-brand">$ {{transaction.rebate.toLocaleString()}}</span>
                        </span> 
                        <div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"></div>
                        <span class="flex justify-between items-center w-full">
                            <span class="text-base text-dark-brand mr-1">Total a pagar COP: </span><span class="font-semibold text-dark-brand">$ {{transaction.total.toLocaleString()}}</span>
                        </span>
                    </div>   
                </div>
            </div>
            <div class="mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"></div>
            <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min">
                <div v-if="!voucherExist && transaction.type != 3" class="col-span-6 flex flex-col justify-between items-center mb-5">
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
                <div v-else-if="voucherExist && transaction.type != 3" class="col-span-6 mb-5">
                    
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
                            <ul v-if="transaction.type === 3" class="list-disc">
                                <li>
                                    <span class="text-sm text-orange-700 font-semibold text-center">
                                        Realiza la transferencia a la cuenta de Skrill que se muestra en 
                                        "Detalles de pago".
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-orange-700 font-semibold text-center">
                                        Realiza la transferencia antes de la media noche antes del vencimiento de la solicitud.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-orange-700 font-semibold text-center">
                                        Una vez se confirme la recepción de la transferencia a la cuenta de Skrill se realizará 
                                        el pago a tu cuenta bancaria registrada.
                                    </span>
                                </li>
                            </ul>
                            <ul v-else class="list-disc">
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
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue'
    import AppLayout from '@/Layouts/AppLayout.vue'
    import { Link } from '@inertiajs/inertia-vue3';
    import JetDialogModal from '@/Components/DialogModal.vue'
    import JetButton from '@/Components/Button.vue'
    import JetSecondaryButton from '@/Components/SecondaryButton.vue'
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
    import { library } from '@fortawesome/fontawesome-svg-core'
    import { faUpload } from '@fortawesome/free-solid-svg-icons'
    import dayjs from 'dayjs';

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

        props: ['transaction', 'voucher'],        

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
                let dateNew = dayjs(date, 'YYYY-MM-DD');
                const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                let formatted_date = dateNew.$D + '-' + months[dateNew.$M] + '-' + dateNew.$y;
                return formatted_date;
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

                this.form.post(this.route('users.voucherUpWalletExchange', this.transaction.id),{
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