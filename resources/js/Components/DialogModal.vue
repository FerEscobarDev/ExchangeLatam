<template>
    <Modal
        :show="show"
        :max-width="maxWidth"
        :closeable="closeable"
        @close="close"
    >
        <div class="px-6 py-4">
            <div class="text-lg">
                <slot name="title">
                </slot>
            </div>

            <div class="mt-4">
                <slot name="content">
                </slot>
            </div>
        </div>

        <div class="px-6 py-4 bg-gray-100 text-right  rounded-lg">
            <slot name="footer">
            </slot>
        </div>
    </Modal>
</template>

<script setup>
import Modal from './Modal.vue';

const emit = defineEmits(['close']);

defineProps({
    show: {
        type: Boolean,
        default: false,
    },
    maxWidth: {
        type: String,
        default: '2xl',
    },
    closeable: {
        type: Boolean,
        default: true,
    },
});

const close = () => {
    emit('close');
};
</script>