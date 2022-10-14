<template>
    <app-layout-admin title="Mensajería Masiva">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Listado de Permisos
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="grid grid-cols-6 gap-3 overflow-hidden shadow-xl sm:rounded-lg p-5 bg-white">
                        <div class="col-span-6 md:col-span-3 w-full h-full flex flex-col justify-start items-center shadow rounded-md">
                            <h2 class="text-dark-brand font-medium text-xl">Mensajería Masiva</h2>
                            <form @submit.prevent="submit" class="flex flex-col w-full h-full p-2">
                                <div class="w-full mb-2">
                                    <Select :selectable="addressees" :selected="form.addressee" v-model="form.addressee">
                                        <template #title>
                                            Destinatarios
                                        </template>
                                    </Select>
                                </div>
                                <div class="w-full mb-2">
                                    <Label for="subject" value="Asunto" />
                                    <Input id="subject" type="text" class="mt-1 block w-full" v-model="form.subject"/>
                                    <InputError :message="form.errors.subject" class="mt-2" />
                                </div>
                                <div class="w-full mb-2">
                                    <Label for="content" value="Mensaje" />
                                    <textarea class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" name="content" id="content"  rows="22" placeholder="Escribe el mensaje" v-model="form.content"></textarea>
                                </div>
                                <div class="w-full">
                                    <div class="max-w-max mx-auto">
                                        <Button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                                            Enviar
                                        </Button>
                                    </div>
                                </div>                              
                            </form>
                        </div>
                        <div class="col-span-6 md:col-span-3 w-full flex flex-col justify-start items-center shadow rounded-md p-2">
                            <h2 class="text-dark-brand font-medium text-xl">Vista Previa del Mensaje</h2>
                            <div class="w-full min-h-max bg-dark-brand rounded-sm mt-2 flex flex-col justify-between">
                                <div class="w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-4">
                                    <ApplicationMark class="block h-12 w-auto" />
                                </div>
                                <div class="w-full 2xl:w-[600px] p-8 rounded-md mx-auto bg-white flex flex-col justify-between items-start text-lg font-sans text-gray-700">
                                    <h1 class="text-lg font-sans font-medium mb-4">Hola <span class="font-semibold text-dark-brand">{{ $page.props.user.name.split(" ", 1) + " " + $page.props.user.lastname.split(" ", 1) }}</span>,</h1>                

                                    <div v-html="form.content" class="mt-6">
                                        
                                    </div>

                                    <p class="mt-3">Puedes acceder al área de usuario desde el siguiente botón.</p>
                                    
                                    <div class="mt-3 w-full flex justify-center">
                                        <Button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                                            Acceder
                                        </Button>
                                    </div>

                                    <p class="mt-3">Gracias por elegirnos como tu medio de depósitos y retiros.</p><br>

                                    <p class="mt-6 m-b3">Saludos y buen trading,</p><br>

                                    <p class="mt-3">
                                        <span class="font-medium text-dark-brand">
                                            ExchangeLatam
                                        </span><br> 
                                        <a class="text-sm font-medium">
                                            Whatsapp: 3223105578
                                        </a>
                                    </p>


                                    <div class="my-6 flex flex-col justify-center text-sm">
                                        <p><span>Registrate <a class="underline text-blue-600">aquí</a> y conviertete en cliente VIP para realizar depósitos y retiros sin comisión.</span></p>
                                        <p><span>Vísita nuestra sección <a class="underline text-blue-600">FAQ</a> y resuelve todas tus dudas antes de usar nuestros servicios.</span></p>
                                        <p><span>Si tienes problemas haciendo click en el botón "Acceder", copia y pega el siguiente enlace en tú navegador: <a class="underline text-blue-600">https://www.exchangelatam.com/dashboard</a></span></p>
                                    </div>
                                </div>
                                <div class="w-full 2xl:w-[600px] mx-auto flex justify-center items-center p-8 text-center">
                                    <p class="text-md text-gray-500">ExchangeLatam, Todos los derechos reservados.</p>
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
    import { CheckIcon } from '@heroicons/vue/solid';
    import Input from '@/Components/Input.vue';
    import InputError from '@/Components/InputError.vue';
    import Label from '@/Components/Label.vue';
    import Select from '@/Components/Select.vue';
    import ApplicationMark from '@/Components/ApplicationMark.vue';
    import Button from '@/Components/Button.vue';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            CheckIcon,
            Link,
            Input,
            InputError,
            Label,
            Select,
            ApplicationMark,
            Button,
        },

        setup(){

            const addressees = [
                {
                    id: 0,
                    name: 'Todos', 
                },
                {
                    id: 1,
                    name: 'VIP',
                },                
                /* {
                    id: 2,
                    name: 'Inactivos',
                }, */
                {
                    id: 3,
                    name: 'Nuevos',
                }
            ]

            return{
                addressees
            }
        },

        data(){
            return{
                form: this.$inertia.form({
                    subject: null,
                    addressee: this.addressees[0],
                    content: null,
                }),
            }
        },

        methods: {
            submit(){
                this.form.post(this.route('admin.messagingMassive'));
            },
        },
    })
</script>
