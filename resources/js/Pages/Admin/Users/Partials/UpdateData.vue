<template>
    <jet-form @submitted="updateData">
        <template #form>
            
            <!-- Name -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="name" value="Nombres" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"/>
                <jet-input-error :message="form.errors.name" class="mt-2" />
            </div>
            
            <!-- Lastname -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="lastname" value="Apellidos" />
                <jet-input id="lastname" type="text" class="mt-1 block w-full" v-model="form.lastname"/>
                <jet-input-error :message="form.errors.lastname" class="mt-2" />
            </div>

            <div class="col-span-6 md:col-span-3">
                <jet-select :selectable="type_doc" :selected="form.doc_type" v-model="form.doc_type">
                    <template #title>
                        Tipo de documento                           
                    </template>
                </jet-select>
                <jet-input-error :message="form.errors.doc_type" class="mt-2" />
            </div>

            <!-- Numero Cedula -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="doc_num" value="Número documento" />
                <jet-input id="doc_num" type="number" class="mt-1 block w-full" v-model="form.doc_num"/>
                <jet-input-error :message="form.errors.doc_num" class="mt-2" />
            </div>

            <!-- Numero Celular -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="mobil" value="Número documento" />
                <jet-input id="mobil" type="number" class="mt-1 block w-full" v-model="form.mobil"/>
                <jet-input-error :message="form.errors.mobil" class="mt-2" />
            </div>

            <!-- Email -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="email" value="Email" />
                <jet-input readonly disabled="true" id="email" type="email" class="mt-1 block w-full" v-model="form.email" />
                <jet-input-error :message="form.errors.email" class="mt-2" />
            </div>

            <div class="col-span-6 md:col-span-3">
                <jet-select :selectable="departaments" :selected="departamentSelected" v-model="form.departament">
                    <template #title>
                        Departamento                          
                    </template>
                </jet-select>
                <jet-input-error :message="form.errors.departament" class="mt-2" />
            </div>

            <div class="col-span-6 md:col-span-3">
                <jet-select :selectable="citiesList" :selected="citySelected" v-model="form.city">
                    <template #title>
                        Ciudad                           
                    </template>
                </jet-select>
                <jet-input-error :message="form.errors.city" class="mt-2" />
            </div>

            <!-- Direccion -->
            <div class="col-span-6">
                <jet-label for="address" value="Dirección" />
                <jet-input id="address" type="text" class="mt-1 block w-full" v-model="form.address" />
                <jet-input-error :message="form.errors.address" class="mt-2" />
            </div>

            <div class="col-span-6">
                <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2 ml-4 md:mx-auto" :disabled="form.processing">
                    Guardar
                </jet-button>
            </div>

        </template>

        <!-- <template #actions>
            <jet-action-message :on="form.recentlySuccessful" class="mr-3">
                Saved.
            </jet-action-message>

            <jet-button :class="{ 'opacity-25': form.processing }" :disabled="form.processing">
                Save
            </jet-button>
        </template> -->
    </jet-form>
</template>

<script>
    import { defineComponent } from 'vue'
    import JetButton from '@/Components/Button.vue'
    import JetForm from '@/Components/Form.vue'
    import JetInput from '@/Components/Input.vue'
    import JetInputError from '@/Components/InputError.vue'
    import JetLabel from '@/Components/Label.vue'
    import JetActionMessage from '@/Components/ActionMessage.vue'
    import JetSecondaryButton from '@/Components/SecondaryButton.vue'
    import JetSelect from '@/Components/Select.vue'

    export default defineComponent({
        components: {
            JetActionMessage,
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
            JetSecondaryButton,
            JetSelect,
        },

        props: [
            'client',
            'departaments',
            'cities',
        ],

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
            let departamentResult = null;
            let cityResult = null;

            if(props.client.data_user)
            {
                id_doc = props.client.data_user.doc_type;
                departamentResult = props.client.data_user.departament;
                cityResult = props.client.data_user.city;
            }

            if(id_doc === 0){
                type_doc.unshift({'id' : 0, 'name' : 'Seleccione', 'valid' : 'false'})
            }else{
                id_doc = parseInt(props.client.data_user.doc_type - 1)
            }

            let depart = props.departaments
            let searchDepart = -1
            
            if(departamentResult){
                searchDepart = depart.findIndex(departament => departament.name === departamentResult) 

                if(searchDepart === -1){
                    depart.unshift({'id' : 0, 'name' : 'Seleccione'})   
                    departamentResult = depart[0]
                }else{
                    departamentResult = depart[searchDepart]
                }
            }else{
                depart.unshift({'id' : 0, 'name' : 'Seleccione'})
                departamentResult = depart[0]
            }

            const departamentInit = departamentResult
            let cit = props.cities
            let searchCity = -1

            if(cityResult){
                searchCity = cit.findIndex(city => city.name === cityResult.toLowerCase())

                if(searchCity === -1){
                    cit.unshift({'id' : 0, 'name' : 'Seleccione'})
                    cityResult = cit[0]
                }else{
                    cityResult = cit[searchCity]
                }
            }else{
                cit.unshift({'id' : 0, 'name' : 'Seleccione'}) 
                cityResult = cit[0]
            }

            const cityInit = cityResult;

            return {
                departamentInit,
                cityInit,
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
                    mobil: this.client.mobil,
                    departament: this.departamentInit, 
                    city: this.cityInit,    
                    email: this.client.email,
                    address: this.client.data_user?this.client.data_user.address:null
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

            refreshCity(){
                this.form.city = 'Seleccione'
            },
        },

        computed: {
            departamentSelected(){
                let departamentFormat = this.form.departament
                let result = this.departaments
                let search = -1
                
                if(departamentFormat){

                    if(typeof departamentFormat === 'object'){
                        departamentFormat = this.form.departament.id
                        search = result.findIndex(departament => departament.id === departamentFormat) 
                    }else{                        
                        search = result.findIndex(departament => departament.name === departamentFormat) 
                    }

                    if(search === -1){
                        result.unshift({'id' : 0, 'name' : 'Seleccione'})
                        return result[0]
                    }else{
                        return result[search]
                    }
                }else{
                    result.unshift({'id' : 0, 'name' : 'Seleccione'})
                    return result[0]
                }
            },

            citySelected(){
                let cityFormat = this.form.city
                let result = this.cities
                let search = -1

                if(cityFormat){
                    if(typeof cityFormat === 'object'){
                        cityFormat = this.form.city.name
                        search = result.findIndex(city => city.name === cityFormat.toLowerCase()) 
                    }else if(typeof cityFormat === 'number'){
                        search = result.findIndex(city => city.id === cityFormat)
                    }else{                        
                        search = result.findIndex(city => city.name === cityFormat.toLowerCase())
                    }

                    if(search === -1){
                        result.unshift({'id' : 0, 'name' : 'Seleccione'})
                        return result[0]
                    }else{
                        return result[search]
                    }
                }else{
                    result.unshift({'id' : 0, 'name' : 'Seleccione'}) 
                    return result[0]
                }
            },
            
            citiesList() {                
                let list = []
                let departamentFormat = this.departamentSelected

                if(departamentFormat.name != 'Seleccione'){
                    this.cities.forEach(city => {
                        if(city.departament_id === departamentFormat.id){
                            list.push(city)
                        }
                    });
                    return list    
                }else{
                    return list.push({'id' : 0, 'name' : 'Seleccione'})
                }
            },

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

        watch: {
            'form.departament': 'refreshCity',
        },
    })
</script>
