<template>
    <app-layout-admin title="Detalle del depósito">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('deposit.index')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Depósitos a broker/</Link>Vista Detallada
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white shadow-xl sm:rounded-lg flex flex-col">
                        <div class="grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5  mt-5 h-min">
                            <div :class="{'md:col-span-6': !deposit.comment}" class="col-span-6 md:col-span-3 flex flex-col justify-between items-center">
                                <h2 class="text-lg text-dark-brand font-semibold mb-2">                                
                                    Detalles de la transacción
                                </h2>
                                <div class="rounded-lg text-dark-brand w-80 flex flex-col items-start">
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Cliente: </span><span class="text-md font-semibold text-dark-brand">{{deposit.user.name + ' ' + deposit.user.lastname}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Broker: </span><span :class="{'text-green-500' :deposit.transactionable.broker.id === 1, 'text-blue-800' :deposit.transactionable.broker.id === 2}" class="text-sm font-semibold">{{deposit.transactionable.broker.name}}</span>
                                    </span>
                                    <span class="flex justify-between items-center w-full">
                                        <span class="text-sm text-gray-600 mr-2">Cuenta de trading: </span><span class="text-sm font-semibold text-dark-brand">{{deposit.transactionable.number}}</span>
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
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import JetDialogModal from '@/Components/DialogModal.vue';
    import ConfirmationModal from '@/Components/ConfirmationModal.vue';
    import JetButton from '@/Components/Button.vue';
    import JetSecondaryButton from '@/Components/SecondaryButton.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faUpload } from '@fortawesome/free-solid-svg-icons';
    import DangerButton from '@/Components/DangerButton.vue';
    import Select from '@/Components/Select.vue';
    import Label from '@/Components/Label.vue';
    import dayjs from 'dayjs';

    library.add(faUpload);

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            JetDialogModal,
            JetSecondaryButton,
            JetButton,
            FontAwesomeIcon,
            DangerButton,
            ConfirmationModal,
            Select,
            Label,
        },

        props: ['deposit', 'voucher'], 

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

                this.form.post(this.route('deposit.voucherUp', this.deposit.id),{
                    onSuccess: () => (this.clearFileInput()),
                });
            },
            submitDelete(){
                this.formDelete.post(this.route('admin.destroyDeposit', this.deposit.id));
            },
            submitStatus(){
                this.formStatus.post(this.route('admin.statusDeposit', this.deposit.id),{
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
        },
        
    })
</script>