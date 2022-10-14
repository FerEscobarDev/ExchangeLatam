<template>
    <input class="text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm h-[38px]" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" ref="input">
</template>

<script setup>
import { onMounted, ref } from 'vue';

defineProps(['modelValue']);

defineEmits(['update:modelValue']);

const input = ref(null);

onMounted(() => {
    if (input.value.hasAttribute('autofocus')) {
        input.value.focus();
    }
});

defineExpose({ focus: () => input.value.focus() });
</script>