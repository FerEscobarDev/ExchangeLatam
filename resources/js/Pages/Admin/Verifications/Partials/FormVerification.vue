<template>
    <jet-form @submitted="updateData">
        <template #form>
            <div class="col-span-6 md:col-span-3 grid grid-cols-6 gap-4">
                <h2 v-if="client.requirement_user.formFunds !== 2" class="col-span-6 text-center text-2xl font-semibold text-dark-brand">¿Aprobar Formulario Declaración de Fondos?</h2>

                <div class="col-span-6 mt-2">
                    <Link v-if="client.form_fund" class="text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20" :href="route('formFund.showAdmin', client.form_fund)">
                        Ver formulario
                    </Link>
                    <span v-else class="text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed">
                        Ver formulario
                    </span>
                </div>
                <div v-if="client.requirement_user" class="col-span-6">
                    <jet-select v-if="client.requirement_user.formFunds !== 2" :selectable="options" :selected="form.formFund" v-model="form.formFund">
                        <template #title>
                            ¿Aprobar formulario declaración de fondos?                           
                        </template>
                    </jet-select>
                    <jet-input-error :message="form.errors.formFund" class="mt-2" />
                </div>

                <!-- Comentario -->
                <div v-if="client.requirement_user" class="col-span-6">
                    <jet-label v-if="client.requirement_user.formFunds !== 2" for="commentFormFund" value="Comentario" />
                    <textarea
                         v-if="client.requirement_user.formFunds !== 2" 
                        class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                        name="commentFormFund" 
                        id="commentFormFund"  
                        rows="4" 
                        placeholder="En caso de no aprobar el formulario, indicar aquí los motivos." 
                        v-model="form.commentFormFund">
                    </textarea>
                    <jet-input-error :message="form.errors.commentFormFund" class="mt-2" />
                </div>   
            </div>

            <div class="col-span-6 md:col-span-3 grid grid-cols-6 gap-4">
                <h2 v-if="client.requirement_user.formKnowledge !== 2" class="col-span-6 text-center text-2xl font-semibold text-dark-brand">¿Aprobar Formulario de Conocimiento del Cliente?</h2>
                
                <div class="col-span-6 mt-2">
                    <Link v-if="client.form_knowledge_client" class="text-lg uppercase pl-3 underline text-blue-brand visited:text-blue-brand/20" :target="'_blank'" :href="route('formKnowledgeClient.showAdmin', client.form_knowledge_client)">
                        Ver formulario
                    </Link>                    
                    <span v-else class="text-lg uppercase pl-3 underline text-gray-400 cursor-not-allowed">
                        Ver formulario
                    </span>
                </div>

                <div v-if="client.requirement_user" class="col-span-6">
                    <jet-select v-if="client.requirement_user.formKnowledge !== 2" :selectable="options" :selected="form.formClient" v-model="form.formClient">
                        <template #title>
                            ¿Aprobar formulario de conocimiento del cliente?                           
                        </template>
                    </jet-select>
                    <jet-input-error :message="form.errors.formClient" class="mt-2" />
                </div>
                <!-- Comentario -->
                <div v-if="client.requirement_user" class="col-span-6">
                    <jet-label v-if="client.requirement_user.formKnowledge !== 2" for="commentFormClient" value="Comentario" />
                    <textarea 
                        v-if="client.requirement_user.formKnowledge !== 2"
                        class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                        name="commentFormClient" 
                        id="commentFormClient"  
                        rows="4" 
                        placeholder="En caso de no aprobar el formulario, indicar aquí los motivos." 
                        v-model="form.commentFormClient">
                    </textarea>
                    <jet-input-error :message="form.errors.commentFormClient" class="mt-2" />
                </div>
            </div>

            <div v-if="client.requirement_user" class="col-span-6 grid grid-cols-6 gap-4">
                <h2 v-if="client.requirement_user.document !== 2" class="col-span-6 text-center text-2xl font-semibold text-dark-brand">¿Aprobar Identidad?</h2>
                
                <div v-if="client.requirement_user.document !== 2" class="col-span-6">
                    <jet-select :selectable="options" :selected="form.verified" v-model="form.verified">
                        <template #title>
                            ¿Aprobar verificación?                           
                        </template>
                    </jet-select>
                    <jet-input-error :message="form.errors.verified" class="mt-2" />
                </div>

                <!-- Comentario -->
                <div v-if="client.requirement_user.document !== 2" class="col-span-6">
                    <jet-label for="commentVerification" value="Comentario" />
                    <textarea 
                        class="w-full text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm" 
                        name="commentVerified" 
                        id="commentVerified"  
                        rows="4" 
                        placeholder="En caso de no aprobar la verificación, indicar aquí los motivos." 
                        v-model="form.commentVerified">
                    </textarea>
                    <jet-input-error :message="form.errors.commentVerified" class="mt-2" />
                </div>
            </div> 
           

            <div v-if="client.requirement_user.verified !== 2" class="col-span-6 flex justify-center items-center">
                <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2" :disabled="form.processing">
                    Guardar
                </jet-button>
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
    import JetActionMessage from '@/Components/ActionMessage.vue';
    import JetSecondaryButton from '@/Components/SecondaryButton.vue';
    import JetSelect from '@/Components/Select.vue';
    import { Link } from '@inertiajs/inertia-vue3';

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
            Link,
        },

        props: {
            client: Object,
        },

        setup() {
            let options = [
                {
                    'id' : 1,
                    'name' : 'Si',
                },
                {
                    'id' : 2,
                    'name' : 'No',
                },
            ]

            return {
                options,
            }
        },

        data() {
            return {
                form: this.$inertia.form({
                    _method: 'PUT',
                    verified: this.options[1],
                    commentVerified: null,
                    formClient: this.options[1],
                    commentFormClient: null,
                    formFund: this.options[1],
                    commentFormFund: null,
                }),
            }
        },

        methods: {
            
            updateData() {  
                
                if(this.client.form_knowledge_client === null || this.client.form_fund === null || this.client.verification === null)
                {
                    return this.$page.props.flash.error = 'Deben existir todos los requisitos para verificar al usuario.'; 
                }
                else if(this.form.verified.name === 'No' && this.form.commentVerified === null && this.client.requirement_user.document !== 2)
                {
                    return this.$page.props.flash.error = 'Si rechazas el documento de identidad debes añadir un comentario.'; 
                }
                else if(this.form.formClient.name === 'No' && this.form.commentFormClient === null && this.client.requirement_user.formKnowledge !== 2)
                {
                    return this.$page.props.flash.error = 'Si rechazas el formulario de conocimiento del cliente debes añadir un comentario.'; 
                }
                else if(this.form.formFund.name === 'No' && this.form.commentFormFund === null && this.client.requirement_user.formFunds !== 2)
                {
                    return this.$page.props.flash.error = 'Si rechazas el formulario de declaración de fondos debes añadir un comentario.'; 
                }
                else
                {
                    this.form.post(route('admin.userVerified', this.client.id), {
                        errorBag: 'adminUserVerified',
                        preserveScroll: true,
                    });
                }

            },

        },
    })
</script>
