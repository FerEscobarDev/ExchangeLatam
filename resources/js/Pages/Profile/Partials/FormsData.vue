<template>
    <div class="w-full p-4">
        <div class="w-full p-2 bg-white rounded-2xl">
            <Disclosure :defaultOpen="openVerified" v-slot="{ open }">
                <DisclosureButton class="flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2  text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75">
                    <span>Verificación de identidad</span>
                    <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-5 h-5 text-blue-brand-gradient1/80" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2" v-if="user.requirement_user.verified === 0">
                    <p class="text-lg md:text-xl text-black/40 font-medium text-justify">Es necesario subir una foto de su documento para la verificación de identidad que cumpla con las siguientes especificaciones:</p>
                    <div class="grid grid-cols-12 lg:gap-2 mt-2">
                        <span class="col-span-12 lg:col-span-6 flex items-center w-full px-4">
                            <ul class="list-disc">
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        Debe subir el documento con el que abrió su cuenta bancaria.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        Todos los bordes del documento deben ser visibles.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        El documento debe ser perfectamente legible.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        Se permiten archivos con extensión JPG, JPEG o PNG.
                                    </span>
                                </li>
                            </ul>
                        </span>
                        <span class="col-span-12 lg:col-span-6 flex items-center w-full px-4">
                            <ul class="list-disc">
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        Sólo se admite fotografía de la cédula, pasaporte o cédula de extranjería.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        No se admite escaner ni fotocopia, aunque sea escaneado con una app de celular.
                                    </span>
                                </li>
                                <li>
                                    <span class="text-sm text-blue-brand-gradient1 font-semibold text-center">
                                        La imagen no debe pesar más de 5 Mb.
                                    </span>
                                </li>
                            </ul>
                        </span>
                    </div>
                    <div>
                        <form @submit.prevent="submit" class="grid grid-cols-12 gap-4 lg:gap-2 my-4">
                            <div class="col-span-12 lg:col-span-6">
                                <input type="file" class="hidden" ref="front" @change="updateFrontPreview">
                                <div class="border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2" @click.prevent="selectFront">
                                    <span v-show="frontPreview" class="block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto"
                                        :style="'background-image: url(\'' + frontPreview + '\');'">
                                    </span>
                                    <span v-if="!frontPreview" class="text-justify">Sube aquí la parte frontal</span>
                                </div>                                
                                <span v-if="frontPreview" class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2">
                                    {{$refs.front.files[0].name}}
                                </span>
                                <jet-input-error :message="form.errors.front" class="mt-2" />
                            </div>
                            <div class="col-span-12 lg:col-span-6">
                                <input type="file" class="hidden" ref="back" @change="updateBackPreview">
                                <div class="border-2 border-dark-brand border-opacity-30 w-4/5 max-w-sm mx-auto h-52 md:h-44 xl:h-56 rounded-xl shadow-xl hover:shadow-blue-brand hover:shadow-sm hover:border-blue-brand flex items-center justify-center text-md md:text-lg hover:text-lg md:hover:text-xl text-black/40 font-medium p-2" @click.prevent="selectBack">
                                    <span v-show="backPreview" class="block rounded-lg w-full h-full bg-cover bg-no-repeat bg-center mx-auto"
                                        :style="'background-image: url(\'' + backPreview + '\');'">
                                    </span>
                                    <span v-if="!backPreview" class="text-justify">Sube aquí la parte trasera</span>
                                </div>                                
                                <span v-if="backPreview" class="block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center my-2">
                                    {{$refs.back.files[0].name}}
                                </span>
                                <jet-input-error :message="form.errors.back" class="mt-2" />
                            </div>
                            <div class="col-span-12 pt-5">
                                <div class=" max-w-max mx-auto">
                                    <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                        Enviar
                                    </jet-button>
                                </div>
                            </div> 
                        </form>
                    </div>
                </DisclosurePanel>
                <DisclosurePanel class="px-4 pt-4 pb-2" v-else-if="messageVerified">
                    <p class="text-lg md:text-xl text-black/40 font-medium text-justify">La verificación se encuentra en <span class="text-orange-400">proceso</span>, recibirás respuesta a tu correo sobre el resultado en no más de 48 horas.</p>
                </DisclosurePanel>
                <DisclosurePanel class="px-4 pt-4 pb-2" v-else-if="user.requirement_user.verified === 1">
                    <p class="text-lg md:text-xl text-black/40 font-medium text-justify">Gracias por subir tu documento, has iniciado el proceso de verificación de cuenta, para completar este proceso debes diligenciar los formularios de la parte inferior para que tu cuenta sea verificada.</p>
                </DisclosurePanel>
                <DisclosurePanel class="px-4 pt-4 pb-2" v-else>
                    <p class="text-lg md:text-xl text-black/40 font-medium text-justify">Tu identidad se encuentra <span class="text-green-500">verificada</span>.</p>
                </DisclosurePanel>
            </Disclosure>
            <Disclosure :defaultOpen="openForms" as="div" class="mt-2" v-slot="{ open }">
                <DisclosureButton class="flex justify-between items-center w-full max-w-xl mx-auto px-4 py-2  text-left text-blue-brand-gradient1/80 bg-blue-brand bg-opacity-25 rounded-lg hover:bg-blue-brand hover:bg-opacity-50 focus:outline-none focus-visible:ring focus-visible:ring-blue-brand-gradient1 focus-visible:ring-opacity-75">
                    <span>Documentos requeridos</span>
                    <ChevronUpIcon :class="open ? 'transform rotate-180' : ''" class="w-5 h-5 text-blue-brand-gradient1/80" />
                </DisclosureButton>
                <DisclosurePanel class="px-4 pt-4 pb-2">
                    <p class="text-lg md:text-xl text-black/40 font-medium text-justify">
                        Estimado usuario en cumplimiento de cara al Sistema de Administración y Gestión del Riesgo Integral de Lavado de Activos y Financiación del Terrorismo (<b>SAGRILAFT</b>) implementado en ExchangeLatam, es necesario diligenciar y firmar 
                        los siguientes formularios con el fin de garantizar la seguridad de su dinero y de todos los que confían en ExchangeLatam para los depósitos y retiros de FBS.
                    </p>
                    <p v-if="user.requirement_user.verified === 0" class="text-lg md:text-xl text-orange-400 font-medium text-justify">
                        Por favor sube primero el documento de identidad antes de diligenciar los formularios.
                    </p>
                    <div v-if="user.requirement_user.verified === 0" class="grid grid-cols-12 lg:gap-2 mt-4">
                        <div class="col-span-6 flex items-center w-full px-4">                        
                            <div class="max-w-max mx-auto">                        
                                <button type="button" disabled class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                    Declaración de fondos
                                </button>
                            </div>
                        </div>
                        <div class="col-span-6 flex items-center w-full px-4">                        
                            <div class=" max-w-max mx-auto">
                                <button type="button" disabled class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                    Conocimiento del cliente
                                </button>
                            </div>
                        </div>                        
                    </div>
                    <div v-else class="grid grid-cols-12 lg:gap-2 mt-4">
                        <div class="col-span-6 flex items-center w-full px-4">                        
                            <div v-if="user.requirement_user.formFunds === 0" class="max-w-max mx-auto">                        
                                <Link :href="route('formFund.create')" class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                    Declaración de fondos
                                </Link>
                            </div>
                            <div v-else class="max-w-max mx-auto">                        
                                <Link :href="route('formFund.show', user.form_fund.id)" class=" text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                     Ver Declaración de fondos
                                </Link>
                            </div>
                        </div>                        
                        <div class="col-span-6 flex items-center w-full px-4">
                            <div v-if="user.requirement_user.formKnowledge === 0" class=" max-w-max mx-auto">
                                <Link :href="route('formKnowledgeClient.create')" class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                    Conocimiento del cliente
                                </Link>
                            </div>
                            <div v-else class=" max-w-max mx-auto">
                                <Link :href="route('formKnowledgeClient.show', user.form_knowledge_client.id)" class="text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                    Ver Conocimiento del Cliente
                                </Link>
                            </div>
                        </div>
                    </div>
                </DisclosurePanel>
            </Disclosure>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
    import { ChevronUpIcon } from '@heroicons/vue/solid'
    import { Link } from '@inertiajs/inertia-vue3';
    import JetButton from '@/Jetstream/Button.vue'
    import JetInputError from '@/Jetstream/InputError.vue'

export default defineComponent({
        components: {
            Disclosure, 
            DisclosureButton, 
            DisclosurePanel,
            ChevronUpIcon,
            Link,
            JetButton,
            JetInputError
        },

        props: ['user'],

        data() {
            return {
                form: this.$inertia.form({
                    front: null,
                    back: null
                }),
                frontPreview: null,
                backPreview: null
            }
        },

        methods: {
            selectFront(){
                this.$refs.front.click()
            },
            selectBack(){
                this.$refs.back.click()
            },
            updateFrontPreview(){
                const frontPreview = this.$refs.front.files[0]

                if(!frontPreview) return;

                const reader = new FileReader()

                reader.onload = (e) => {
                    this.frontPreview = e.target.result
                }

                reader.readAsDataURL(frontPreview)
            },
            updateBackPreview(){
                const backPreview = this.$refs.back.files[0]

                if(!backPreview) return;

                const reader = new FileReader()

                reader.onload = (e) => {
                    this.backPreview = e.target.result
                }

                reader.readAsDataURL(backPreview)
            },
            submit(){
                
                if(this.$refs.front){
                    this.form.front = this.$refs.front.files[0]
                }

                if(this.$refs.back){
                    this.form.back = this.$refs.back.files[0]
                }

                this.form.post(this.route('verification.store'),{
                    onSuccess: () => (this.clearFileInput()),
                });
            },
        },

        computed: {
            openVerified()
            {
                if(this.user.requirement_user.verified === 0)
                {
                    return true;
                }
                else if((this.user.requirement_user.formFunds === 1 || this.user.requirement_user.formKnowledge === 1) && this.user.requirement_user.verified === 1)
                {
                    return true
                }
                else
                {
                    return false;
                }
            },

            openForms()
            {
                if(this.user.requirement_user.verified != 0)
                {
                    if(this.user.requirement_user.formFunds === 0 || this.user.requirement_user.formKnowledge === 0)
                    {
                        return true;
                    }
                }

                return false;
            },

            messageVerified(){
                if((this.user.requirement_user.verified === 1 && this.user.requirement_user.formFunds === 1 && this.user.requirement_user.formKnowledge === 1))
                {
                    return true;
                }
                else{
                    return false;
                }
            }
        }
    })
</script>
