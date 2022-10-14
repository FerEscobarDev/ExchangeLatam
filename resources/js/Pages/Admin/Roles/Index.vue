<template>
    <app-layout-admin title="Roles">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Listado de Roles
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="overflow-hidden shadow-xl sm:rounded-lg">
                        <div class="flex flex-col">
                            <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                                    <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                                        <div class="flex items-center justify-end p-5 w-full bg-white">
                                            <Link :href="route('admin.roleCreate')" class="inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                                Crear Rol
                                            </Link>
                                        </div>
                                        <table class="min-w-full divide-y divide-gray-200">
                                            <thead class="bg-gray-50">
                                                <tr>
                                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        ID
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Rol
                                                    </th>
                                                    <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                        Acciones
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody class="bg-white divide-y divide-gray-200" v-if="roles.data[0]">
                                                <tr v-for="rol in roles.data" :key="rol.id" class="odd:bg-white even:bg-gray-50">
                                                    <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                                        {{ rol.id }}
                                                    </td>
                                                    <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-500">                                            
                                                        {{ rol.name }}
                                                    </td>
                                                    <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium flex justify-center items-center">
                                                        <Link :href="route('admin.roleEdit', rol.id)" class="inline-flex items-center px-4 py-2 mr-5 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition" >
                                                            Editar
                                                        </Link>
                                                        <DangerButton @click="deleteRol(rol.id)" :key="rol.id">
                                                            Eliminar
                                                        </DangerButton>
                                                        <ConfirmationModal :show="show(rol.id)" @close="deleteRol(rol.id)" :key="rol.id">
                                                            <template #title>
                                                                Eliminar Rol
                                                            </template>
                                                            <template #content>
                                                                ¿Seguro que quieres eliminar este rol?
                                                            </template>
                                                            <template #footer>
                                                                <form @submit.prevent="submit(rol.id)" class="mr-4">
                                                                    <DangerButton :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                                                                        Eliminar
                                                                    </DangerButton>
                                                                </form>
                                                                <jet-secondary-button @click="deleteRol()">
                                                                    Cerrar
                                                                </jet-secondary-button>
                                                            </template>
                                                        </ConfirmationModal>
                                                    </td>
                                                </tr>
                                            </tbody>                                            
                                            <tbody class="bg-white divide-y divide-gray-200" v-else>
                                                <tr>
                                                    <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7">No se encontraron resultados</td>
                                                </tr>
                                            </tbody>
                                        </table>                                        
                                        <pagination v-if="roles.data[0]" :paginating="roles"/>
                                                                                                
                                    </div>
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
    import Pagination from '@/Components/Pagination.vue';
    import DangerButton from '@/Components/DangerButton.vue';    
    import ConfirmationModal from '@/Components/ConfirmationModal.vue';
    import JetSecondaryButton from '@/Components/SecondaryButton.vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';

    library.add();

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            Pagination,
            FontAwesomeIcon,
            DangerButton,
            ConfirmationModal,
            JetSecondaryButton,
        },
        props: {
            roles: Object,        
        },  

        data(){  
            return{         
                form: this.$inertia.form({
                    _method: 'delete'
                }),                
                delete: false,
                id2: null,
            } 
        },

        methods: {

            show(id){
                if( id === this.id2)
                {
                    return true;
                }
                else
                {
                    return false;
                }
            },
            
            deleteRol(id = null)
            {
                if(this.delete)
                {
                    this.delete = false;
                    this.id2 = null;
                }
                else
                {
                    this.delete = true;
                    this.id2 = id;
                }
            },
           
            submit(id){
                this.form.post(this.route('admin.roleDestroy', id), {
                    onSuccess: () => (this.deleteRol()),
                });
            },
        },
    })
</script>