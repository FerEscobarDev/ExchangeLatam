<template>
    <jet-form @submitted="accountStore">
        <template #form>
            
            <!-- Numero Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-label for="number" value="Número de cuenta" />
                <jet-input id="number" type="number" class="mt-1 block w-full" v-model="form.number"/>
                <jet-input-error :message="form.errors.number" class="mt-2" />
            </div>

            <!-- Banco Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-select :selectable="types" :selected="form.type" v-model="form.type">
                    <template #title>
                        Tipo de cuenta                           
                    </template>
                </jet-select>
                <jet-input-error :message="form.errors.type" class="mt-2" />
            </div>

            <!-- Tipo Cuenta -->
            <div class="col-span-6 md:col-span-2">
                <jet-select :selectable="banks" :selected="form.bank" v-model="form.bank">
                    <template #title>
                        Banco                          
                    </template>
                </jet-select>
                <jet-input-error :message="form.errors.bank" class="mt-2" />
            </div>

            <div class="col-span-6">
                <div class="max-w-max mx-auto">
                    <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                        Guardar
                    </jet-button>
                </div>
            </div> 
        </template>
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
            JetSelect,
        },

        props: ['banks'],

        setup(props) {
            let types = [
                {
                    'id' : 1,
                    'name' : 'Cuenta de Ahorros',
                },
                {
                    'id' : 2,
                    'name' : 'Cuenta Corriente',
                },
            ]

            return {

                types,
            }
        },

        data() {
            return {
                form: this.$inertia.form({
                    number: null,
                    type: this.types[0],
                    bank: this.banks[0],
                }),
            }
        },

        methods: {
            accountStore() {  
                this.form.post(route('accounts.store.user'), {
                    errorBag: 'account.store.user',
                    preserveScroll: true,
                });
            },
        },

        computed: {
/*             departamentSelected(){
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
            }, */
        },
    })
</script>