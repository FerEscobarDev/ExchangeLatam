<template>
    <AppLayoutAdmin title="Detalle del depósito">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('admin.userShow', transaction.user_id)" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Perfil del Usuario/</Link>Vista Detallada
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
                                        <span class="text-sm text-gray-600 mr-2">Cliente: </span><span class="text-md font-semibold text-dark-brand">{{transaction.user.name + ' ' + transaction.user.lastname}}</span>
                                    </span>                                    
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Tipo: </span><span class="text-sm font-semibold">{{transactionType(transaction)}}</span>
                                    </span>
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
                                        <span class="text-sm text-gray-600 mr-1">Confirma que el cliente haya realizado el pago a la cuenta bancaria:</span>
                                    </span>
                                    <span v-else class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-1">Confirma que el cliente haya realizado el pago a la cuenta Skrill:</span>
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
                                        <span class="text-sm text-gray-600 mr-1">Realiza el pago a esta cuenta bancaria:</span>
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
                                <div v-if="!voucherExist" class="flex flex-col justify-between items-center mt-5">
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
                                <div v-else class="mt-5">
                                    
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
                                    
                                    <input-error :message="form.errors.voucherUp" class="mt-2" />
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
                            <div class="col-span-3 flex flex-col justify-between items-center mb-5">
                                <jet-button @click="changeStatus" class="mx-auto">
                                        Cambiar estado
                                </jet-button>
                                    <jet-dialog-modal :show="statusChange" @close="changeStatus">
                                        <template #title>
                                            Cambiar estado de la transacción
                                        </template>
                                        <template #content>
                                            <form @submit.prevent="submitStatus">
                                                <div class="my-2">
                                                    <Select :selectable="status" :selected="formStatus.status" v-model="formStatus.status">
                                                        <template #title>
                                                            Cambio  de estado
                                                        </template>
                                                    </Select>
                                                </div>
                                                <div class="my-2 mt-3">
                                                    <Label for="comments" value="Comentarios" />
                                                    <textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="comments" id="comments" rows="2" placeholder="Escribe un comentario" v-model="formStatus.comments"></textarea>
                                                </div> 
                                                <div class="w-full">
                                                    <jet-button :class="{ 'opacity-25': formStatus.processing }" :disabled="formStatus.processing" class="mr-4 mx-auto">
                                                        Cambiar
                                                    </jet-button>                               
                                                </div>
                                            </form>
                                        </template>
                                        <template #footer>
                                            <jet-secondary-button @click="changeStatus">
                                                Cerrar
                                            </jet-secondary-button>
                                        </template>
                                    </jet-dialog-modal>
                            </div>
                            <div class="col-span-3 flex flex-col justify-between items-center mb-5">
                               <DangerButton @click="deleteTransaction" class="mx-auto">
                                        Eliminar
                               </DangerButton>
                                <ConfirmationModal :show="delete" @close="deleteTransaction">
                                    <template #title>
                                        Eliminar transacción
                                    </template>
                                    <template #content>
                                        ¿Seguro que quieres eliminar esta transacción?
                                    </template>
                                    <template #footer>
                                        <form @submit.prevent="submitDelete" class="mr-4">
                                            <DangerButton :class="{ 'opacity-25': formDelete.processing }" :disabled="formDelete.processing">
                                                Eliminar
                                            </DangerButton>
                                        </form>
                                        <jet-secondary-button @click="deleteTransaction">
                                            Cerrar
                                        </jet-secondary-button>
                                    </template>
                                </ConfirmationModal>
                            </div>
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
    import { Link } from '@inertiajs/inertia-vue3';
    import JetDialogModal from '@/Components/DialogModal.vue';
    import JetButton from '@/Components/Button.vue';
    import JetSecondaryButton from '@/Components/SecondaryButton.vue'; 
    import DangerButton from '@/Components/DangerButton.vue';
    import InputError from '@/Components/InputError.vue';
    import Select from '@/Components/Select.vue';
    import Label from '@/Components/Label.vue';
    import ConfirmationModal from '@/Components/ConfirmationModal.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faUpload } from '@fortawesome/free-solid-svg-icons';
    import dayjs from 'dayjs';

    library.add(faUpload);

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,            
            DangerButton,
            FontAwesomeIcon,
            InputError,
            Select,
            Label,
            ConfirmationModal,
        },

        props: {
            transaction: Object,
            voucher: String,       
        },  

        setup(props) {
            const status = [
                {
                    id: 1,
                    name: 'Pendiente', 
                },
                {
                    id: 2,
                    name: 'Realizado',
                },
                {
                    id: 3,
                    name: 'Cancelado',
                },
                {
                    id: 4,
                    name: 'Procesando',
                }
            ];

            return {
                status,
            }
        },     

        data() {
            return {                
                voucherShow: false,
                voucherExist: this.voucher === null ? true : false,
                form: this.$inertia.form({
                    _method: 'PUT',
                    voucherUp: null,
                }),
                formStatus: this.$inertia.form({
                    _method: 'PUT',
                    status: this.status[0],
                    comments: null,
                }),
                formDelete: this.$inertia.form({
                    _method: 'delete'
                }),
                voucherPreview: null,
                statusChange: false,
                delete: false,
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
            changeStatus()
            {
                if(this.statusChange)
                {
                    this.statusChange = false;
                }
                else{
                    this.statusChange = true;
                }
            },
            deleteTransaction()
            {
                if(this.delete)
                {
                    this.delete = false;
                }
                else{
                    this.delete = true;
                }
            },
            submit(){
                
                if(this.$refs.voucherUp){
                    this.form.voucherUp = this.$refs.voucherUp.files[0]
                }

                this.form.post(this.route('admin.voucherUpWalletExchange', this.transaction.id),{
                    onSuccess: () => (this.clearFileInput()),
                });
            },
            submitDelete(){
                this.formDelete.post(this.route('admin.destroyWalletExchange', this.transaction.id));
            },
            submitStatus(){
                this.formStatus.post(this.route('admin.statusWalletExchange', this.transaction.id),{
                    onSuccess: () => (this.changeStatus()),
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
            },
        },
        
    })
</script>