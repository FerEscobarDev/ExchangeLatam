<template>
    <Link :href="href" :class="classes">
        <slot />
    </Link>
</template>

<script>
    import { defineComponent } from 'vue'
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Link,
        },
        props: ['href', 'active'],

        computed: {
            classes() {
                return this.active
                    ? 'flex  items-center p-2 rounded-lg bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 hover:bg-blue-brand text-gray-300 my-2'
                    : 'flex  items-center p-2 rounded-lg hover:bg-white/20 text-gray-300 my-2'
            }
        }
    })
</script>
