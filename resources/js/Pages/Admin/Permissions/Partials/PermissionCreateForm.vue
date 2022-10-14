<template>
    <jet-form @submitted="permissionCreate">
        <template #form>
            <!-- Descripcion del permiso -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="description" value="Nombre" />
                <jet-input id="description" type="text" class="mt-1 block w-full" v-model="form.description"/>
                <jet-input-error :message="form.errors.description" class="mt-2" />
            </div>

            <!-- Tipo Cuenta -->
            <div class="col-span-6 md:col-span-3">
                <jet-label for="name" value="Ruta" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"/>
                <jet-input-error :message="form.errors.name" class="mt-2" />
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
    import { defineComponent } from 'vue';
    import JetButton from '@/Components/Button.vue';
    import JetForm from '@/Components/Form.vue';
    import JetInput from '@/Components/Input.vue';
    import JetInputError from '@/Components/InputError.vue';
    import JetLabel from '@/Components/Label.vue';

    export default defineComponent({
        components: {
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
        },

        data() {
            return {
                form: this.$inertia.form({
                    name: null,
                    description: null,
                }),
            }
        },

        methods: {
            permissionCreate() {  
                this.form.post(route('admin.permissionStore'), {
                    preserveScroll: true,
                });
            },
        },
    })
</script>