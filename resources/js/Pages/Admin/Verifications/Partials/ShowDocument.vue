<template>
    <div class="grid grid-cols-8 gap-4 p-5">
        <h2 class="col-span-8 text-center text-2xl font-semibold text-dark-brand">Documento Cargado</h2>
        <div class="col-span-8 md:col-span-4 min-h-fit rounded-lg p-2 shadow-xl shadow-gray-400 relative">
            <img v-if="verification !== null" class="object-cover h-full w-full rounded-md" :src="$page.props.ziggy.url+'/storage/'+verification.front" alt="Frontal">
            <span v-else>No se han cargado documentos</span>
        </div>
        <div class="col-span-8 md:col-span-4 min-h-fit rounded-lg p-2 shadow-xl shadow-gray-400 relative">
            <img v-if="verification !== null" class="object-cover h-full w-full rounded-md" :src="$page.props.ziggy.url+'/storage/'+verification.back" alt="Trasera">
            <span v-else>No se han cargado documentos</span>
        </div>
    </div>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        props: {
            verification: Object,
        },
    })
</script>
