<template>
    <jet-form @submitted="roleCreate">
        <template #form>

            <!-- Nombre Rol -->
            <div class="col-span-6">
                <jet-label for="name" value="Rol" />
                <jet-input id="name" type="text" class="mt-1 block w-full" v-model="form.name"/>
                <jet-input-error :message="form.errors.name" class="mt-2" />
            </div>

            <div class="col-span-6">
                <h5>Permisos</h5>
                <div class="flex justify-start items-center pt-2" v-for="permission in permissionsAll" :key="permission.id">
                    
                    <Checkbox :value="permission.id" :checked="form.permissions"  :id="permission.id" v-model="form.permissions"/>
                    
                    <jet-label :for="permission.id" :value="permission.description" class="ml-2"/>
                </div>
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
    import Checkbox from '@/Components/Checkbox.vue';

    export default defineComponent({
        components: {
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
            Checkbox
        },

        props: {
            permissionsAll: Object,
        },

        data() {
            return {
                form: this.$inertia.form({
                    name: null,
                    permissions: [],
                }),
            }
        },

        methods: {
            roleCreate() {  
                this.form.post(route('admin.roleStore'), {
                    preserveScroll: true,
                });
            },
        },
    })
</script>