<template>
    <jet-form @submitted="updateProfileInformation">
        <template #form>
            <!-- Profile Photo -->
            <div class="col-span-6">
                <div class="flex flex-col md:flex-row items-center justify-between">
                    <div class="flex items-center justify-start">
                        <!-- Profile Photo File Input -->
                        <input type="file" class="hidden" ref="picture" @change="updatePhotoPreview">

                        <!-- Current Profile Photo -->
                        <div v-if="user.picture">
                            <div class="" v-show="! photoPreview">
                                <img :src="url+'/storage/'+user.picture" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
                            </div>
                        </div>
                        <div v-else>
                            <div class="mt-2" v-show="! photoPreview">
                                <img :src="user.profile_photo_url" :alt="user.name" class="rounded-full h-20 w-20 object-cover">
                            </div>
                        </div>

                        <!-- New Profile Photo Preview -->
                        <div class="mt-2" v-show="photoPreview">
                            <span class="block rounded-full w-20 h-20 bg-cover bg-no-repeat bg-center"
                                :style="'background-image: url(\'' + photoPreview + '\');'">
                            </span>
                        </div>

                        <div class="flex flex-col ml-5">
                            <span class="text-xl md:text-2xl text-black/75 font-semibold">{{user.name + ' ' + user.lastname}}</span>
                            <span v-if="user.vip === 'no'" class="text-black/50">Cliente Estándar</span>
                            <span v-else class=" text-amber-500">Cliente VIP</span>
                        </div>
                    </div>

                    <div class="flex flex-row md:flex-col items-center justify-between">
                        <jet-secondary-button class="mt-2 mx-auto" type="button" v-show="!user.picture && !photoPreview" @click.prevent="selectNewPhoto">
                            Subir foto
                        </jet-secondary-button>

                        <jet-secondary-button class="mt-2 mx-auto" type="button" v-show="photoPreview || user.picture" @click.prevent="selectNewPhoto">
                            Cambiar foto
                        </jet-secondary-button>

                        <!-- <jet-secondary-button type="button" class="mt-2 mx-auto" @click.prevent="deletePhoto" v-if="user.picture">
                            Remover foto
                        </jet-secondary-button> -->

                        <jet-button :class="{ 'opacity-25': form.processing }" class="mt-2 ml-4 md:mx-auto" v-show="photoPreview" :disabled="form.processing">
                            Guardar
                        </jet-button>
                    </div>
                </div>
                <jet-input-error :message="form.errors.picture" class="mt-2" />
                
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
    import JetButton from '@/Jetstream/Button.vue'
    import JetForm from '@/Jetstream/Form.vue'
    import JetInput from '@/Jetstream/Input.vue'
    import JetInputError from '@/Jetstream/InputError.vue'
    import JetLabel from '@/Jetstream/Label.vue'
    import JetActionMessage from '@/Jetstream/ActionMessage.vue'
    import JetSecondaryButton from '@/Jetstream/SecondaryButton.vue'

    export default defineComponent({
        components: {
            JetActionMessage,
            JetButton,
            JetForm,
            JetInput,
            JetInputError,
            JetLabel,
            JetSecondaryButton,
        },

        props: ['user'],

        data() {
            return {
                form: this.$inertia.form({
                    _method: 'PUT',
                    picture: null,
                }),
                url: location.origin,
                photoPreview: null,
            }
        },

        methods: {
            updateProfileInformation() {
                if (this.$refs.picture) {
                    this.form.picture = this.$refs.picture.files[0]
                }

                this.form.post(route('users.picture'), {
                    errorBag: 'updateProfileInformation',
                    preserveScroll: true,
                    onSuccess: () => (this.clearPhotoFileInput()),
                });
            },

            selectNewPhoto() {
                this.$refs.picture.click();
            },

            updatePhotoPreview() {
                const picture = this.$refs.picture.files[0];

                if (! picture) return;

                const reader = new FileReader();

                reader.onload = (e) => {
                    this.photoPreview = e.target.result;
                };

                reader.readAsDataURL(picture);
            },

            deletePhoto() {
                this.$inertia.delete(route('current-user-photo.destroy'), {
                    preserveScroll: true,
                    onSuccess: () => {
                        this.photoPreview = null;
                        this.clearPhotoFileInput();
                    },
                });
            },

            clearPhotoFileInput() {
                if (this.$refs.picture?.value) {
                    this.$refs.picture.value = null;                    
                    this.photoPreview = null;
                }
            },
        },
    })
</script>
