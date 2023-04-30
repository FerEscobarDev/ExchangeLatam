<template>
    <app-layout-admin title="Usuarios">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Listado de usuarios
            </h2>
        </template>

        <div class="px-3 py-5 md:p-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            
            <div class="flex justify-center md:justify-start items-center mb-6">
                <form @submit.prevent="submit" class="w-full md:w-72">
                    <jet-input class="w-full" id="search" type="search" placeholder="Buscar" autofocus v-model="form.search"/>
                </form>
            </div>

            <div class="min-w-full overflow-x-scroll xl:overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Nombre
                            </th>
                            <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Documento
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Celular
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Formularios
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Estado
                            </th>                                                  
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Email
                            </th>                                                 
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Fecha Registro
                            </th>                                              
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                ID
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" v-if="users.data[0]">
                        <tr v-for="user in users.data" :key="user.id" class="odd:bg-white even:bg-gray-50">
                            <td class="text-center font-semibold px-3 py-4 whitespace-nowrap text-sm">
                                <Link :href="route('admin.userShow', user.id)" class="text-indigo-600 hover:text-indigo-900 flex justify-start items-center">
                                    <span v-if="user.picture" class="w-10">
                                        <img :src="$page.props.ziggy.url+'/storage/'+user.picture" :alt="user.name" class="rounded-full h-10 w-10 object-cover">
                                    </span>
                                    <span v-else class="w-10">
                                        <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-10 w-10 object-cover">
                                    </span>
                                    <span class="flex flex-col justify-center items-start ml-4">
                                        <span>
                                            {{user.name + ' ' + user.lastname}}
                                        </span>
                                        <span class="text-gray-400">
                                            {{user.email}}
                                        </span>
                                    </span>
                                </Link>
                            </td>
                            <td class="text-left px-3 py-4 whitespace-nowrap text-sm font-medium">                                            
                                <span v-if="user.data_user === null">
                                    Sin Información
                                </span>
                                <span v-else>
                                    <span>
                                        <span v-if="user.data_user.doc_type === 1" class="text-sm text-gray-600 mr-1">Cédula: </span>
                                        <span v-else-if="user.data_user.doc_type === 2" class="text-sm text-gray-600 mr-1">Cédula de extranjería: </span>
                                        <span v-else="user.data_user.doc_type === 3" class="text-sm text-gray-600 mr-1">Pasaporte: </span>
                                    </span>
                                    <span>                                                                
                                        <span class="text-sm font-semibold text-dark-brand">{{user.data_user.doc_num}}</span> 
                                    </span>
                                </span>
                            </td>
                            <td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{user.mobil}}
                            </td>
                            <td class="text-center font-semibold px-3 py-4 whitespace-nowrap text-sm flex justify-center items-center">
                                <span class="flex justify-center items-center" v-if="user.form_knowledge_client !== null">
                                    <Link v-if="user.requirement_user.formKnowledge > 0" :href="route('formKnowledgeClient.showAdmin', user.form_knowledge_client.id)" class="flex justify-start items-center">
                                        <span>Cliente </span> <font-awesome-icon class="text-green-400 ml-2 mr-4 h-8" :icon="['far', 'check-circle']" size="sm" />
                                    </Link>
                                    <span v-else class="flex justify-start items-center">
                                        <span>Cliente </span> <font-awesome-icon class="text-red-400 ml-2 mr-4 h-8" :icon="['far', 'times-circle']" size="sm" />
                                    </span>
                                </span>                                                        
                                <span v-else class="flex justify-start items-center">
                                    <span>Cliente </span> <font-awesome-icon class="text-red-400 ml-2 mr-4 h-8" :icon="['far', 'times-circle']" size="sm" />
                                </span>
                                <span class="flex justify-center items-center" v-if="user.form_fund !== null">                                                            
                                    <Link v-if="user.requirement_user.formFunds > 0" :href="route('formFund.showAdmin', user.form_fund.id)" class="flex justify-end items-center">
                                        <span>Fondos </span> <font-awesome-icon class="text-green-400 ml-2 mr-4 h-8" :icon="['far', 'check-circle']" size="sm" />
                                    </Link>
                                    <span v-else class="flex justify-end items-center">
                                        <span>Fondos </span> <font-awesome-icon class="text-red-400 ml-2 mr-4 h-8" :icon="['far', 'times-circle']" size="sm" />
                                    </span>
                                </span>
                                <span v-else class="flex justify-end items-center">
                                    <span>Fondos </span> <font-awesome-icon class="text-red-400 ml-2 mr-4 h-8" :icon="['far', 'times-circle']" size="sm" />
                                </span>
                            </td>
                            <td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span v-if="user.requirement_user !== null">
                                    <span v-if="user.requirement_user.verified === 0" class="flex justify-center items-center"><font-awesome-icon :icon="['fas', 'user-times']" size="sm" class="text-red-400 mr-2"/> Sin verificar</span>
                                    <span v-else-if="user.requirement_user.verified === 1" class="flex justify-center items-center"><font-awesome-icon :icon="['fas', 'user-clock']" size="sm" class="text-orange-500 mr-2"/> Verificando</span>
                                    <span v-else class="flex justify-center items-center"><font-awesome-icon :icon="['fas', 'user-check']" size="sm" class="text-green-400 mr-2"/> Verificado</span>
                                </span>
                            </td>
                            <td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">                                                        
                                <span v-if="user.email_verified_at !== null"><font-awesome-icon class="text-green-400 ml-2 mr-4 h-8" :icon="['far', 'check-circle']" size="sm" /></span>
                                <span v-else><font-awesome-icon class="text-red-400 ml-2 mr-4 h-8" :icon="['far', 'times-circle']" size="sm" /></span>                                                        
                            </td>
                            <td class="text-center hidden md:table-cell px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                <span v-if="user.created_at">
                                    {{dateFormat(user.created_at)}}
                                </span>
                                <span v-else>
                                    Antiguo
                                </span>
                            </td>
                            <td class="text-center px-3 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{user.id}}
                            </td>
                        </tr>
                    </tbody>                                            
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7">No se encontraron resultados</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div class="mt-3">
                <pagination class="border-none" v-if="users.data[0]" :paginating="users"/>
            </div>

            <!-- <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8 shadow  border-b border-gray-200 sm:rounded-lg bg-white">
                                    
                                    <div class="w-screen overflow-scroll md:w-full">
                                        
                                    </div>                                        
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';
    import jetInput from '@/Components/Input.vue';
    import Button from '@/Components/Button.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';    
    import { faTimesCircle } from '@fortawesome/free-regular-svg-icons';
    import { faUserCheck } from '@fortawesome/free-solid-svg-icons';
    import { faUserClock } from '@fortawesome/free-solid-svg-icons';
    import { faUserTimes } from '@fortawesome/free-solid-svg-icons';
    import dayjs from 'dayjs';

    library.add(faCheckCircle, faTimesCircle, faUserCheck, faUserClock, faUserTimes);

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            Pagination,
            FontAwesomeIcon,
            jetInput,
            Button
        },
        props: {
            users: Object,
            search: String,         
        },  
        data(){
            return {
                form: this.$inertia.form({
                    search: '',
                }),
            }
        },   

        methods: {
            submit(){ 
                this.form.get(route('user.index'), { preserveState: true });
            },

            dateFormat(date)
            {                
                let dateNew = dayjs(date, 'YYYY-MM-DD');
                const months = ["Ene", "Feb", "Mar","Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"];
                let formatted_date = dateNew.$D + '-' + months[dateNew.$M] + '-' + dateNew.$y;
                return formatted_date;
            },
        },

        watch: {
            'form.search': 'submit',
        },
    })
</script>
