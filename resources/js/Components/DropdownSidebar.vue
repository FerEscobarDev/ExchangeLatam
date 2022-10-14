<template>
    <div class="relative w-full">
        <div @click="open = ! open" :class="{' bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 hover:bg-blue-brand': open}" class="flex justify-between items-center p-2 rounded-lg hover:bg-white/20 hover:text-gray-300">
            <slot name="trigger"></slot>
        </div>

        <!-- Full Screen Dropdown Overlay -->
        <!-- <div v-show="open" class="fixed inset-0 z-40" @click="open = false">
        </div> -->

        <!-- <transition
            enter-active-class="transition ease-out duration-200"
            enter-from-class="transform opacity-0 scale-95"
            enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-75"
            leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <div v-show="open"
                    class="mt-2"
                    :class="[widthClass, alignmentClasses]"
                    style="display: none;"
                    @click="open = false">
                <div :class="contentClasses" class=" bg-transparent">
                    <slot name="content"></slot>
                </div>
            </div>
        </transition> -->
        <div v-show="open"
                class="mt-2"
                :class="[widthClass, alignmentClasses]"
                style="display: none;"
                @click="open = false">
            <div :class="contentClasses" class=" bg-transparent">
                <slot name="content"></slot>
            </div>
        </div>
    </div>
</template>

<script>
import { defineComponent, onMounted, onUnmounted, ref } from "vue";

export default defineComponent({
    props: {

        align: {
            default: 'right'
        },
        width: {
            default: 'full'
        },
        contentClasses: {
            default: () => ['py-1', 'bg-transparent']
        },
        openSide: Boolean,
    },

    setup(props) {
        let open = ref(props.openSide)

        const closeOnEscape = (e) => {
            if (open.value && e.keyCode === 27) {
                open.value = false
            }
        }

        onMounted(() => document.addEventListener('keydown', closeOnEscape))
        onUnmounted(() => document.removeEventListener('keydown', closeOnEscape))

        return {
            open,
        }
    },

    computed: {
        widthClass() {
            return {
                'full': 'w-full',
            }[this.width.toString()]
        },

        alignmentClasses() {
            if (this.align === 'left') {
                return 'origin-top-left left-0'
            } else if (this.align === 'right') {
                return 'origin-top-right right-0'
            } else if (this.align === 'center') {
                return 'origin-top'
            }
        },
    }
})
</script>
