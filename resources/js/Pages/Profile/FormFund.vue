<template>
    <app-layout title="Declaración de fondos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('verification.create')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Verificación de cuenta/</Link>Declaración de fondos
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg py-6">   
                        <h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center">Declaración Origen de Fondos</h1>  
                        <jet-form @submitted="submit">
                            <template #form>
                                <div class="col-span-6">
                                    <p class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4">
                                        Yo, <span class="text-black/50 font-semibold">{{$page.props.user.name + ' ' + $page.props.user.lastname}}</span>, identificado(a) 
                                        con el documento de identidad No. <span class="text-black/50 font-semibold">{{$page.props.user.data_user.doc_num}}</span> expedido en 
                                        <span><jet-input id="expeditionPlace" type="text" class="w-24 p-0 border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-blue-brand focus:ring-0 text-center min-w-max text-lg md:text-xl" v-model="form.expeditionPlace" /></span>, 
                                        obrando en nombre propio de manera voluntaria en mi calidad de persona natural y dando certeza de que todo lo aquí consignado es cierto, realizo la siguiente declaración 
                                        de origen de fondos con el propósito de dar cumplimiento a lo señalado al respecto en las Políticas SAGRILAFT/FPADM de EXCHANGELATAM S.A.S. 
                                    </p>
                                    <ul class="list-decimal list-inside text-lg md:text-xl text-black/60 font-medium max-w-3xl lg:mx-auto px-4 md:px-8">
                                        <li class="mb-2">
                                            <span class="text-justify">
                                                Declaro que los recursos que entrego provienen de actividades lícitas, de conformidad con la normatividad Colombiana.
                                            </span>
                                        </li>
                                        <li class="mb-2">
                                            <span class="text-justify">
                                                Que no admitiré que terceros efectúen depósitos en mis cuentas con fondos provenientes de las actividades ilícitas 
                                                contempladas en el Código Penal Colombiano o en cualquier otra norma que lo adiciones; ni efectuaré transacciones destinadas 
                                                a tales actividades o a favor de personas relacionas con las mismas.
                                            </span>
                                        </li>
                                        <li class="mb-2">
                                            <span class="text-justify">
                                                Autorizo a resolver cualquier acuerdo, negocio o contrato celebrado con EXCHANGE LATAM S.A.S., en caso de infracción de cualquiera 
                                                de los numerales contenidos en este documento eximiendo a la entidad de toda responsabilidad que se derive por información errónea, 
                                                falsa o inexacta que yo hubiere proporcionado en este documento, o de la violación del mismo. 
                                            </span>
                                        </li>
                                        <li class="mb-2">
                                            <span class="text-justify">
                                                Autorizo a EXCHANGE LATAM S.A.S. para que, en caso de que lo juzgue necesario, consulte mi información en listas restrictivas como la 
                                                Lista del Consejo de Seguridad de las Naciones Unidas, así como en listas OFAC, INTERPOL o FBI.
                                            </span>
                                        </li>
                                    </ul>
                                        
                                    <p class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4">
                                        Bajo la gravedad de juramento manifiesto que los datos aquí consignados obedecen a la realidad, por lo que declaro haber leído, entendido y aceptado 
                                        el presente documento, en constancia firmo a los {{now.getDate()}} días del mes de {{monthFormat()}}, del año {{now.getFullYear()}}, 
                                        en la ciudad de <span><jet-input id="citySign" type="text" class="w-24 p-0 border-0 border-b-2 focus:border-0 focus:border-b-2 focus:border-blue-brand focus:ring-0 text-center min-w-max text-lg md:text-xl" v-model="form.citySign" /></span>. 
                                    </p>
                                    <div class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"> 
                                        <div class="flex items-center">
                                            <jet-checkbox name="sign" id="sign" v-model:checked="form.sign"/>  <span class="px-2 text-black/75">Firma electrónica:</span> <span class="underline">{{$page.props.user.name + ' ' + $page.props.user.lastname}}</span>
                                        </div>
                                        <div class="text-sm font-normal pl-4 mt-2">
                                            ACEPTACIÓN Y FIRMA ELECTRÓNICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendrá plenos efectos jurídicos 
                                            con la aceptación electrónica que el cliente haga con la utilización de su NIP y/o Código y/o Clave y/o imposición de huella y/o la utilización de números de 
                                            identificación personal y/o la imposición en el presente contrato de su firma manuscrita escaneada y/o la utilización de sistemas y/o la utilización de 
                                            botones de aceptación de tipo "si", "aceptar" o "acepto" y/o la combinación del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento.
                                            Por utilización de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros términos y condiciones de servicio, al igual que las políticas de privacidad y SAGRILAFT.
                                            En señal de aceptación de lo expresado, se firma el presente documento mediante la imposición de mi firma electrónica y check in en la aceptación de firma electrónica en el presente documento.
                                        </div>
                                    </div>

                                    <div class=" max-w-max mx-auto">
                                        <jet-validation-errors class="my-6"/>
                                    </div>

                                    <div class=" max-w-max mx-auto">
                                        <jet-button>
                                            Firmar y enviar
                                        </jet-button>
                                    </div>
                                </div>
                            </template>
                        </jet-form>
                    </div><!-- 
                    <div class="bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible">                         
                        <h1 class="text-3xl text-black/75 font-semibold p-3 text-center">Verificación de identidad</h1>                      
                        <p class="text-lg md:text-xl text-black/60 font-medium px-4 md:px-8 text-justify mb-5">
                            Estimado usuario en cumplimiento de las normas SAGRILAFT implementadas en ExchangeLatam es necesario diligenciar y firmar 
                            los siguientes formularios con el fin de garantizar la seguridad de su dinero y de todos los que confían en ExchangeLatam para los depósitos y retiros de FBS.
                        </p>
                        
                        
                    </div> -->
                </div>
            </div>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import JetButton from '@/Components/Button.vue';
    import JetForm from '@/Components/Form.vue';
    import JetCheckbox from '@/Components/Checkbox.vue';  
    import JetInput from '@/Components/Input.vue';    
    import JetValidationErrors from '@/Components/ValidationErrors.vue';
    import FormsData from '@/Pages/Profile/Partials/FormsData.vue';

    export default defineComponent({
        props: [],

        components: {
            AppLayout,
            FormsData,
            JetCheckbox,
            JetButton,
            JetForm,
            JetInput,
            JetValidationErrors,
            Link
        },

        data() {
            return {
                now: new Date(),
                form: this.$inertia.form({
                    expeditionPlace: null,
                    citySign: null,
                    sign: null
                }),
            }
        },

        methods: {
            monthFormat()
            {
                const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
                let formatted_date = months[this.now.getMonth()]
                return formatted_date
            },

            submit()
            {
                this.form.post(this.route('formFund.store'),{
                    preserveScroll: true,
                })
            }
        }
    })
</script>