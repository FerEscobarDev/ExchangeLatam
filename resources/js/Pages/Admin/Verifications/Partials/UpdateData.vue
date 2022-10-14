<template>
    <jet-form @submitted="updateData">
        <template #form>

            <div class="col-span-6 grid grid-cols-8 gap-2">
                <h2 class="col-span-8 text-center text-2xl font-semibold text-dark-brand">Datos Registrados</h2>
                
                <!-- Name -->
                <div class="col-span-8 md:col-span-2">
                    <jet-label for="name" value="Nombres" />
                    <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"/>
                    <jet-input-error :message="form.errors.name" class="mt-2" />
                </div>
                
                <!-- Lastname -->
                <div class="col-span-8 md:col-span-2">
                    <jet-label for="lastname" value="Apellidos" />
                    <jet-input id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname"/>
                    <jet-input-error :message="form.errors.lastname" class="mt-2" />
                </div>

                <div class="col-span-8 md:col-span-2">
                    <jet-select :selectable="type_doc" :selected="form.doc_type" v-model="form.doc_type">
                        <template #title>
                            Tipo de documento                           
                        </template>
                    </jet-select>
                    <jet-input-error :message="form.errors.doc_type" class="mt-2" />
                </div>

                <!-- Numero Cedula -->
                <div class="col-span-8 md:col-span-2">
                    <jet-label for="doc_num" value="Número documento" />
                    <jet-input id="doc_num" type="number" class="mt-1 block w-full" v-model="form.doc_num"/>
                    <jet-input-error :message="form.errors.doc_num" class="mt-2" />
                </div>

                <div class="col-span-8 flex justify-center items-center">
                    <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                        Guardar
                    </jet-button>
                </div>
            </div>
        </template>

    </jet-form>
</template>

<script>
    import { defineComponent } from 'vue';
    import JetButton from '@/Components/Button.vue';
    import JetForm from '@/Components/Form.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';
    import JetSelect from '@/Components/Select.vue';

    export default defineComponent({
        components: {
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
            JetSelect,
        },

        props: {
            client: Object,
        },

        setup(props) {
            let type_doc = [
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
            
            let id_doc = 0;

            if(props.client.data_user)
            {
                id_doc = props.client.data_user.doc_type;
                
            }
            
            if(id_doc === 0){
                type_doc.unshift({'id' : 0, 'name' : 'Seleccione', 'valid' : 'false'})
            }else{
                id_doc = parseInt(props.client.data_user.doc_type - 1)
            }

            return {
                type_doc,
                id_doc,
            }
        },

        data() {
            return {
                form: this.$inertia.form({
                    _method: 'PUT',
                    name: this.client.name,
                    lastname: this.client.lastname,
                    doc_type: this.type_doc[this.id_doc],
                    doc_num: this.client.data_user?this.client.data_user.doc_num:null,
                    verification: true,
                }),
            }
        },

        methods: {
            updateData() {  
                this.form.post(route('admin.userUpdate', this.client.id), {
                    errorBag: 'admin.userUpdate',
                    preserveScroll: true,
                });
            },
        },

        computed: {
            verified(){
                if(this.client.requirement_user.verified == 0)
                {
                    return false;
                } 
                else{
                    return true;
                }
            }
        },
    })
</script>
