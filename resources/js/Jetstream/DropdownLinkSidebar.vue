<template>
    <div>
        <button type="submit" class="block my-2 w-full px-4 py-2 text-base leading-5 text-gray-400 text-left rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition" v-if="as == 'button'">
            <slot></slot>
        </button>

        <a :href="href" class="block my-2 px-4 py-2 text-base leading-5 text-gray-400 rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition" v-else-if="as =='a'">
            <slot></slot>
        </a>

        <Link :href="href" :class="classes" class="block my-2 px-4 py-2 text-base leading-5 text-gray-400 rounded-lg hover:text-gray-300 hover:bg-white/20 focus:outline-none focus:bg-white/20 transition" v-else>
            <slot></slot>
        </Link>
    </div>
</template>

<script>
    import { defineComponent } from 'vue';
    import { Link } from '@inertiajs/inertia-vue3';

    export default defineComponent({
        components: {
            Link,
        },
        props: ['href', 'as', 'active'],
        computed: {
            classes(){
                return this.active ? 'bg-white/20' : 'text-gray-300'
            }
        }
    })
</script>
