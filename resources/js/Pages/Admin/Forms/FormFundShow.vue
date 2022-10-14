<template>
    <app-layout-admin title="Declaración de fondos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>
                <Link :href="route('admin.userShow', dataUser[0].id)" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Perfil Usuario/</Link>
                <Link :href="route('admin.usersVerification', dataUser[0].id)" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Verificación/</Link>
                Origen de Fondos
            </h2>
        </template>
        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden shadow-xl sm:rounded-lg py-6">  
                        <h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center">Declaración Origen de Fondos</h1>  
                        <div>
                            <div class="col-span-6">
                                <p class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4">
                                    Yo, <span class="text-black/50 font-semibold underline decoration-2">{{dataUser[0].name + ' ' + dataUser[0].lastname}}</span>, identificado(a) 
                                    con el documento de identidad No. <span class="text-black/50 font-semibold underline decoration-2">{{dataUser[0].data_user.doc_num}}</span> expedido en 
                                    <span class="text-black/50 font-semibold underline decoration-2">{{dataUser[0].data_user.expeditionPlace}}</span>, 
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
                                    el presente documento, en constancia firmo a los {{date.$D}} días del mes de {{monthFormat()}}, del año {{date.$y}}, 
                                    en la ciudad de <span class="text-black/50 font-semibold underline decoration-2">{{dataUser[0].form_fund.citySign}}</span>. 
                                </p>
                                <div class="text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"> 
                                    <div class="flex items-center">
                                        <jet-checkbox readonly disabled name="sign" id="sign" class="ml-4" v-model:checked="sign" /><span class="px-2 text-black/75">Firma electrónica:</span> <span class="underline">{{dataUser[0].name + ' ' + dataUser[0].lastname}}</span>
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
                                <div v-if="$page.props.flash.success" class=" max-w-max mx-auto mb-5">
                                    <Link disabled :href="route('verification.create')" class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                        Finalizar
                                    </Link>
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
    import JetButton from '@/Components/Button.vue'
    import JetCheckbox from '@/Components/Checkbox.vue'; 
    import { CheckIcon } from '@heroicons/vue/solid';
    import dayjs from 'dayjs';
    import relativeTime from 'dayjs/plugin/relativeTime';
    
    dayjs.extend(relativeTime);

    export default defineComponent({
        props: ['dataUser'],

        components: {
            AppLayoutAdmin,
            JetCheckbox,
            JetButton,
            CheckIcon,
            Link
        },

        data() {
            return {
                date: dayjs(this.dataUser[0].form_fund.date, 'YYYY-MM-DD'),
                sign: this.dataUser[0].form_fund.sign === 0 ? false : true,
            }
        },

        methods: {
            monthFormat()
            {
                const months = ["Enero", "Febrero", "Marzo","Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiempre", "Octubre", "Noviembre", "Diciembre"];
                let formatted_date = months[this.date.$M]
                return formatted_date
            },
        }
    })
</script>