<template>
    <Listbox as="div" v-model="selected">
        <ListboxLabel class="block text-sm font-medium text-gray-700">
            <slot name="title"></slot>
        </ListboxLabel>
        <div class="mt-1 relative">
            <ListboxButton :class="[readonly ? 'bg-gray-200' : 'bg-white']" class="relative w-full  border text-gray-600 border-dark-brand rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 sm:text-sm">
                <span class="flex items-center">
                   <!--  <img :src="selected.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                    <span class="block truncate capitalize">{{ selected.name }}</span>
                </span>
                <span class="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                    <SelectorIcon class="h-5 w-5 text-gray-600" aria-hidden="true" />
                </span>
            </ListboxButton>
            
            <transition leave-active-class="transition ease-in duration-100" leave-from-class="opacity-100" leave-to-class="opacity-0">
                <ListboxOptions class="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                    <ListboxOption as="template" v-for="option in selectable" :key="option.id" :value="option" v-slot="{ active, selected }">
                        <li :class="[active ? 'text-white bg-blue-brand' : 'text-gray-900', 'cursor-default select-none relative py-2 pl-3 pr-9']">
                            <div class="flex items-center">
                                <!-- <img :src="option.avatar" alt="" class="flex-shrink-0 h-6 w-6 rounded-full" /> -->
                                <span :class="[selected ? 'font-semibold' : 'font-normal', 'block truncate capitalize']">
                                    {{ option.name }}
                                </span>
                            </div>

                            <span v-if="selected" :class="[active ? 'text-white' : 'text-blue-brand', 'absolute inset-y-0 right-0 flex items-center pr-4']">
                                <CheckIcon class="h-5 w-5" aria-hidden="true" />
                            </span>
                        </li>
                    </ListboxOption>
                </ListboxOptions>
            </transition>
        </div>
    </Listbox>
</template>

<script>
    import { Listbox, ListboxButton, ListboxLabel, ListboxOption, ListboxOptions } from '@headlessui/vue'
    import { CheckIcon, SelectorIcon } from '@heroicons/vue/solid'

    export default {
        props: [
            'selected',
            'selectable',
            'readonly'
        ],

        components: {
            Listbox,
            ListboxButton,
            ListboxLabel,
            ListboxOption,
            ListboxOptions,
            CheckIcon,
            SelectorIcon,
        },
        
        /* data(){
            return{
                this.readonly
            }
        }, */
        /* 
        setup(props) {
            const selected = ref(props.select)

            return {
                selected,
            }
        }, */
       
    }
</script>