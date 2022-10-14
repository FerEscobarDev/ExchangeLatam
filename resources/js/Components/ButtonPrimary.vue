<template>
    <button :type="type" class="inline-flex items-center bg-blue-brand-gradient1 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
        <slot></slot>
    </button>
</template>

<script setup>
    /* ingresar el padding manual en la clase del boton */
    defineProps({
        type: {
            type: String,
            default: 'submit',
        },
    });
</script>
