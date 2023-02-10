<template>
    <app-layout title="Declaración de fondos">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link><Link :href="route('verification.create')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Verificación de cuenta/</Link>Declaración de fondos
            </h2>
        </template>
        <div class="px-3 mb-4 pt-5 md:pt-6 lg:mr-4 max-w-full flex flex-col justify-center items-center shadow border border-gray-200 sm:rounded-lg bg-white"> 
            <h1 class="text-3xl text-black/75 font-semibold px-3 pb-3 text-center">Formulario Conocimiento del Cliente</h1>
            <jet-form @submitted="submit">
                <template #form>
                    <!-- Fecha diligenciamiento -->
                    <div class="col-span-3 md:col-start-1 md:col-end-3 ">
                        <jet-label for="date" value="Fecha diligenciamiento" />
                        <jet-input readonly id="date" type="date" class="read-only:bg-gray-200 mt-1 block w-full" v-model="today"/>
                    </div>

                    <!-- Ciudad de diligenciamiento -->
                    <div class="col-span-3 md:col-end-7 md:col-span-2">
                        <jet-label for="citySign" value="Ciudad diligenciamiento" />
                        <jet-input id="citySign" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.citySign"/>
                        <jet-input-error :message="form.errors.citySign" class="mt-2" />
                    </div>                                
                    
                    <!-- Información básica persona natural -->
                    <div class="col-span-6">
                        <h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 pt-1 text-center">Información Básica Persona Natural</h2> 
                    </div>

                    <!-- Name -->
                    <div class="col-span-6 md:col-span-3">
                        <jet-label for="name" value="Nombres" />
                        <jet-input readonly id="name" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.name"/>
                    </div>
                    
                    <!-- Lastname -->
                    <div class="col-span-6 md:col-span-3">
                        <jet-label for="lastname" value="Apellidos" />
                        <jet-input readonly id="lastname" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.lastname"/>
                    </div>

                    <div class="col-span-6 md:col-span-2">
                        <jet-select :readonly="true" disabled :selectable="doc_types" :selected="doc_types[$page.props.user.data_user.doc_type - 1]">
                            <template #title>
                                Tipo de documento                           
                            </template>
                        </jet-select>
                    </div>

                    <!-- Numero Cedula -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="doc_num" value="Número documento" />
                        <jet-input readonly id="doc_num" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="doc_num"/>
                    </div>

                    <!-- Fecha expedición -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="expeditionDate" value="Fecha de expedición" />
                        <jet-input id="expeditionDate" type="date" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.expeditionDate"/>
                        <jet-input-error :message="form.errors.expeditionDate" class="mt-2" />
                    </div>

                    <!-- Lugar de expedición -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="expeditionPlace" value="Lugar de expedición" />
                        <jet-input id="expeditionPlace" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.expeditionPlace"/>
                        <jet-input-error :message="form.errors.expeditionPlace" class="mt-2" />
                    </div>

                    <!-- Fecha nacimiento -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="birthDate" value="Fecha de nacimiento" />
                        <jet-input id="birthDate" type="date" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.birthDate"/>
                        <jet-input-error :message="form.errors.birthDate" class="mt-2" />
                    </div>

                    <!-- Lugar de nacimiento -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="birthPlace" value="Lugar de nacimiento" />
                        <jet-input id="birthPlace" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.birthPlace"/>
                        <jet-input-error :message="form.errors.birthPlace" class="mt-2" />
                    </div>

                    <!-- Nacionalidad 1 -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="nationality" value="Nacionalidad" />
                        <jet-input id="nationality" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.nationality"/>
                        <jet-input-error :message="form.errors.nationality" class="mt-2" />
                    </div>

                    <!-- Numero Celular -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="mobil" value="Celular" />
                        <jet-input readonly id="mobil" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="mobil"/>
                    </div>

                    <!-- Email -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="email" value="Email" />
                        <jet-input readonly id="email" type="email" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.email" />
                    </div>

                    <!-- Departamento -->
                    <div class="col-span-6 md:col-span-3">
                        <jet-label for="departament" value="Departamento" />
                        <jet-input readonly id="departament" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.data_user.departament"/>
                    </div>

                    <!-- Ciudad -->
                    <div class="col-span-6 md:col-span-3">
                        <jet-label for="city" value="Ciudad" />
                        <jet-input readonly id="city" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.data_user.city"/>
                    </div>

                    <!-- Direccion -->
                    <div class="col-span-6">
                        <jet-label for="address" value="Dirección" />
                        <jet-input readonly id="address" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="$page.props.user.data_user.address" />
                    </div>

                    <div class="col-span-6">
                        <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4">
                            Por favor marque la casilla si su respuesta es afirmativa.
                        </p>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Es persona expuesta públicamente (PEP)?
                                </div>
                                <jet-checkbox name="pep" id="pep" v-model:checked="form.pep" />
                                <!-- <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4">
                                    Sírvase diligenciar la sección para el conocimiento mejorado de personas públicamente expuestas.
                                </p> -->
                            </div>
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Por su actividad o cargo administra recursos públicos?
                                </div>
                                <jet-checkbox name="publicFunds" id="publicFunds" v-model:checked="form.publicFunds" />
                            </div>
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Está obligado a tributar en otro país?
                                </div>
                                <jet-checkbox name="tributeCountry" id="tributeCountry" v-model:checked="form.tributeCountry" />
                            </div>
                        </jet-label>
                    </div>

                    <!-- Países Tributación -->
                    <div v-if="form.tributeCountry" class="col-span-6">
                        <jet-label for="countries" value="Indique en qué países" />
                        <jet-input id="countries" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.countries" />
                        <jet-input-error :message="form.errors.countries" class="mt-2" />
                    </div>

                    <div class="col-span-6">
                        <h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center">Información Financiera</h2>
                    </div>

                    <!-- Ingresos Mensuales -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="income" value="Ingresos Mensuales (COP)" />
                        <jet-input id="income" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.income"/>
                        <jet-input-error :message="form.errors.income" class="mt-2" />
                    </div>

                    <!-- Egresos Mensuales -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="expenses" value="Egresos Mensuales (COP)" />
                        <jet-input id="expenses" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.expenses"/>
                        <jet-input-error :message="form.errors.expenses" class="mt-2" />
                    </div>

                    <!-- Activos -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="assets" value="Activos (COP)" />
                        <jet-input id="assets" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.assets"/>
                        <jet-input-error :message="form.errors.assets" class="mt-2" />
                    </div>

                    <!-- Pasivos -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="liabilities" value="Pasivos (COP)" />
                        <jet-input id="liabilities" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.liabilities"/>
                        <jet-input-error :message="form.errors.liabilities" class="mt-2" />
                    </div>

                    <!-- Patrimonio -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="heritage" value="Patrimonio (COP)" />
                        <jet-input id="heritage" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.heritage"/>
                        <jet-input-error :message="form.errors.heritage" class="mt-2" />
                    </div>

                    <!-- Otros Ingresos -->
                    <div class="col-span-6 md:col-span-2">
                        <jet-label for="incomeOther" value="Otros Ingresos (COP)" />
                        <jet-input id="incomeOther" type="number" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.incomeOther"/>
                        <jet-input-error :message="form.errors.incomeOther" class="mt-2" />
                    </div>

                    <!-- Concepto otros Ingresos -->
                    <div class="col-span-6">
                        <jet-label for="descriptionIncome" value="Concepto Otros Ingresos" />
                        <jet-input id="descriptionIncome" type="text" class="read-only:bg-gray-200 mt-1 block w-full" v-model="form.descriptionIncome" />
                        <jet-input-error :message="form.errors.descriptionIncome" class="mt-2" />
                    </div>

                    <div class="col-span-6">
                        <h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center">Actividades En Operaciones Internacionales</h2>
                        <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4 py-4">
                            Por favor marque la casilla si su respuesta es afirmativa.
                        </p>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Realiza transacciones en moneda extranjera?
                                </div>
                                <jet-checkbox name="transactionsForeignMoney" id="transactionsForeignMoney" v-model:checked="form.transactionsForeignMoney" />
                                <!-- <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4">
                                    Sírvase diligenciar la sección para el conocimiento mejorado de personas públicamente expuestas.
                                </p> -->
                            </div>
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Posee productos financieros en el exterior?
                                </div>
                                <jet-checkbox name="productsFinancialExt" id="productsFinancialExt" v-model:checked="form.productsFinancialExt" />
                            </div>
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <div class="text-lg md:text-xl font-medium mr-2">
                                    ¿Posee cuentas en moneda extranjera?
                                </div>
                                <jet-checkbox name="accountsForeignMoney" id="accountsForeignMoney" v-model:checked="form.accountsForeignMoney" />
                            </div>
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <h2 class="col-span-6 text-xl text-black/75 font-semibold px-3 py-4 text-center">Cláusula de Autorización</h2>
                        <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4">
                            Para efectos de la presente autorización, entiéndase por EXCHANGELATAM  S.A.S. la(s) sociedad(es).
                        </p>
                    </div>

                    <div class="col-span-6">
                        <jet-label for="terms">
                            <div class="flex items-center">
                                <jet-checkbox name="auth_1" id="auth_1" class="ml-4" v-model:checked="form.auth_1" />
                                <div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2">
                                    Autorizo expresa e inequívocamente a usar mis datos personales con fines comerciales en los términos que trata la consideración 2 de la 
                                    Cláusula de Autorización del presente documento, la cual leí y comprendí cabalmente.
                                </div>
                            </div>
                            
                            <jet-input-error :message="form.errors.auth_1" class="my-2 ml-4" />
                        </jet-label>
                    </div>

                    <div class="col-span-6">
                        <p class="text-md md:text-lg text-black/60 font-medium text-justify px-4">
                            Declaro expresamente:
                        </p>
                        <ul class="list-decimal list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4">
                            <li class="mb-2">
                                <span class="text-justify">
                                    Que para efectos de acceder a la prestación de productos y/o servicios por parte de EXCHANGELATAM S.A.S., suministramos nuestros datos para 
                                    todos los fines precontractuales y contractuales, así como para fines comerciales, de consulta y conocimiento de la persona jurídica.
                                </span>
                            </li>
                            <li class="mb-2">
                                <span class="text-justify">
                                    Que EXCHANGELATAM S.A.S.  ha informado de manera expresa:
                                </span>
                                <ul class="list-none list-inside text-md md:text-lg text-black/60 font-medium text-justify px-4">
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            I. Finalidad del tratamiento de datos personales.
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            II. El tratamiento podrá ser realizado directamente por la citada sociedad o por los encargados del tratamiento que ellas consideren necesarios.
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            III. Usuarios de la información
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            IV. TRANSFERENCIA INTERNACIONAL DE INFORMACIÓN A TERCEROS PAÍSES: que en ciertas situaciones es necesario realizar transferencias 
                                            internacionales de mis datos para cumplir las finalidades del tratamiento.
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            V. DATOS PERSONALES DE NIÑAS, NIÑOS Y ADOLESCENTES: que son facultativas las respuestas a las preguntas sobre datos de niñas, niños y adolescentes. 
                                            En consencuencia, no hemos sido obligados a responderlas.
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            VI. DERECHOS DEL TITULAR DE LA INFORMACIÓN: que como titular de la información, nos asisten los derechos previstos en la Ley 1266 de 2008. En especial, 
                                            el derecho a conocer, actualizar y rectificar las informaciones que se hayan recogido sobre nosotros.
                                        </span>
                                    </li>
                                    <li class="mb-2">
                                        <span class="text-justify">
                                            VII. RESPONSABLES Y ENCARGADOS DEL TRATAMIENTO DE LA INFORMACIÓN: que los Responsables del tratamiento de la información es EXCHANGELATAM S.A.S., 
                                            cuyos datos de contacto se incluyeron en el encabezado de esta autorización.
                                        </span>
                                    </li>
                                </ul>
                                <jet-label for="terms">
                                    <div class="flex items-center">
                                        <jet-checkbox name="auth_2" id="auth_2" class="ml-4" v-model:checked="form.auth_2" />
                                        <div class="text-md md:text-lg text-black/60 font-medium text-justify px-4 mr-2">
                                            Autorizo expresa e inequívocamente a EXCHANGELATAM S.A.S. para que traten mis datos personales en los términos descritos en el numeral III del numeral 2 
                                            denominado "usuarios de la información", especialmente para efectos de prevención y control de fraudes, la selección de riesgos, y control de requisitos 
                                            para acceder al Sistema General de Seguridad Social Integral, así como la elaboración de estudios internos.
                                        </div>
                                    </div>
                                    
                                    <jet-input-error :message="form.errors.auth_2" class="my-2 ml-4" />
                                </jet-label>
                                <span class="text-justify mt-2 px-4">
                                    Para efectos de la verificación específica de las políticas internas sobre el tratamiento de datos personales, como titular de la información acudiré a las 
                                    páginas web de los responsables y encargados que estoy autorizando en el presente escrito.
                                </span>
                            </li>
                            <li class="mb-2">
                                <span class="text-justify">
                                    AUTORIZACIÓN: de manera expresa, AUTORIZAMOS el Tratamiento de los datos y, de ser necesario, la transferencia nacional e internacional de los mismos, por las personas, 
                                    para las finalidades y en los términos que nos fueron informados en este documento. 
                                </span>
                            </li>
                            <li class="mb-2">
                                <span class="text-justify">
                                    CERTIFICACIÓN: manifestamos que la información suministrada por nosotros para las finalidades señaladas en este documento, puede contener datos personales de empleados, 
                                    proveedores, colaboradores o clientes de la compañía, por lo cual certificamos de manera expresa que la misma, ha sido: i) obtenida de acuerdo con lo previsto en la 
                                    legislación aplicable, particularmente en la Ley 1581 de 2012  y ii) que, existen las autorizaciones necesarias de acuerdo con lo previsto en la legislación aplicable, 
                                    para el tratamiento y circulación de esta Base de Datos por parte de EXCHANGELATAM S.A.S. señalado en este documento.
                                </span>
                            </li>
                        </ul>
                    </div>

                    <div class="col-span-6 text-md md:text-lg text-black/60 font-medium text-justify px-4"> 
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
                        <jet-input-error :message="form.errors.sign" class="mt-2" />
                    </div>

                    <div class="col-span-6 mx-auto">
                        <div v-if="hasErrors" class="max-w-max mx-auto">
                            <div class="font-medium text-red-600">¡Vaya! Algo salió mal.</div>

                            <ul class="mt-3 list-disc list-inside text-sm text-red-600">
                                <li v-if="form.errors.auth_1">{{ form.errors.auth_1 }}</li>
                                <li v-if="form.errors.auth_2">{{ form.errors.auth_2 }}</li>                                            
                                <li v-if="form.errors.sign">{{ form.errors.sign }}</li>
                            </ul>
                        </div>
                    </div>

                    <div class="col-span-6">
                        <div class="max-w-max mx-auto">
                            <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2 ml-4 md:mx-auto" :disabled="form.processing">
                                Firmar y enviar
                            </jet-button>
                        </div>
                    </div>

                </template>
            </jet-form>
        </div>
    </app-layout>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayout from '@/Layouts/AppLayout.vue';
    import { Link } from '@inertiajs/inertia-vue3';    
    import JetForm from '@/Components/Form.vue';
    import JetButton from '@/Components/Button.vue';
    import JetCheckbox from '@/Components/Checkbox.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';
    import FormsData from '@/Pages/Profile/Partials/FormsData.vue';
    import JetSelect from '@/Components/Select.vue';

    export default defineComponent({
        props: {
            dataUser: Object,
            financialDataUser: Object,
        },

        components: {
            AppLayout,
            FormsData,
            JetCheckbox,
            JetButton,
            JetInput,
            JetInputError,
            JetLabel,
            JetForm,
            JetSelect,
            Link
        },

        setup(props) {
            let doc_types = [
                {
                    'id' : 1,
                    'name' : 'Cédula de Ciudadanía',
                },
                {
                    'id' : 2,
                    'name' : 'Cédula de Extranjería',
                },
                {
                    'id' : 3,
                    'name' : 'Pasaporte',
                },
            ]
            
            const now = new Date();

            console.log(now)

            let day = now.getDate();
            let year = now.getFullYear();
            let month = now.getMonth() + 1;
            if(month < 10){
                month = '0' + month;
            }

            if(day < 10){
                day = '0' + day;
            }

            const today = year + '-' + month + '-' + day;

            return {
                doc_types,
                today
            }
        },

        data() {
            return {
                form: this.$inertia.form({
                    citySign: null,
                    expeditionDate: this.dataUser.expeditionDate,
                    expeditionPlace: this.dataUser.expeditionPlace,
                    birthDate: this.dataUser.birthDate,
                    birthPlace: this.dataUser.birthPlace,
                    nationality: this.dataUser.nationality,
                    pep: false,
                    publicFunds: false,
                    tributeCountry: false,
                    countries: null,
                    income: this.financialDataUser === null ? null : this.financialDataUser.income,
                    expenses: this.financialDataUser === null ? null : this.financialDataUser.expenses,
                    assets: this.financialDataUser === null ? null : this.financialDataUser.assets,
                    liabilities: this.financialDataUser === null ? null : this.financialDataUser.liabilities,
                    heritage: this.financialDataUser === null ? null : this.financialDataUser.heritage,
                    incomeOther: this.financialDataUser === null ? null : this.financialDataUser.incomeOther,
                    descriptionIncome: this.financialDataUser === null ? null : this.financialDataUser.descriptionIncome,
                    transactionsForeignMoney: false,
                    productsFinancialExt: false,
                    accountsForeignMoney: false,
                    auth_1: null,
                    auth_2: null,
                    sign: null,
                }),
                doc_num: this.$page.props.user.data_user.doc_num,
                mobil: this.$page.props.user.mobil,
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
                this.form.post(this.route('formKnowledgeClient.store')),{
                    preserveScroll: true,
                }
            }
        },

        computed: {
            hasErrors() {
                if(this.form.errors.auth_1 || this.form.errors.auth_2 || this.form.errors.sign)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            },
        }
    })
</script>