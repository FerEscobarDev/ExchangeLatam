<template>
    <form @submit.prevent="$emit('submitted')">
        <div class="px-4 py-5"
            :class="hasActions ? 'sm:rounded-tl-md sm:rounded-tr-md' : 'sm:rounded-md'">
            <div class="grid grid-cols-6 gap-2">
                <slot name="form"></slot>
            </div>
        </div>

        <div class="flex items-center justify-end px-4 py-3 bg-gray-50 text-right sm:px-6 shadow sm:rounded-bl-md sm:rounded-br-md" v-if="hasActions">
            <slot name="actions"></slot>
        </div>
    </form>
</template>

<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
        emits: ['submitted'],

        computed: {
            hasActions() {
                return !! this.$slots.actions
            }
        }
    })
</script>
