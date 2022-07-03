<template>
    <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
        <div class="flex-1 flex items-center sm:hidden" :class="{'justify-center' : paginating.links.length <= 3, 'justify-between' : paginating.links.length > 3}">
            <!-- Previous -->
            <Link v-if="paginating.links.length > 3" :href="paginating.prev_page_url" class="relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                </svg>
            </Link>
            <div>
                <p class="text-sm text-gray-700">
                    Página
                    {{ ' ' }}
                    <span class="font-medium">{{paginating.current_page}}</span>
                    {{ ' ' }}
                    de
                    {{ ' ' }}
                    <span class="font-medium">{{paginating.last_page}}</span>
                </p>
            </div>
            <!-- Next -->
            <Link v-if="paginating.links.length > 3" :href="paginating.next_page_url" class="relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                </svg>
            </Link>
        </div>
        <div class="hidden sm:flex-col sm:flex sm:items-center sm:justify-center mx-auto">
            <div class="pb-2">
                <p class="text-sm text-gray-700">
                    Mostrando
                    {{ ' ' }}
                    <span class="font-medium">{{paginating.from}}</span>
                    {{ ' ' }}
                    a
                    {{ ' ' }}
                    <span class="font-medium">{{paginating.to}}</span>
                    {{ ' ' }}
                    de
                    {{ ' ' }}
                    <span class="font-medium">{{paginating.total}}</span>
                    {{ ' ' }}
                    resultados
                </p>
            </div>
            <div v-if="paginating.links.length > 3">
                <nav class="relative z-0 inline-flex rounded-md space-x-1" :aria-label="`page-${paginating.current_page}`">
                    <Link :href="paginating.prev_page_url" class="relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Previous</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                    <!-- Current: "z-10 bg-indigo-50 border-indigo-500 text-indigo-600", Default: "bg-white border-gray-300 text-gray-500 hover:bg-gray-50" -->
                    <span v-for="(link, key) in paginating.links" :key="`link-${key}`" >
                        <Link v-if="key > 0 && key <= paginating.last_page" :key="`link-${key}`" :href="link.url" v-html="link.label" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative flex justify-center items-center h-8 w-8 text-center border text-sm font-medium  rounded-full" :class="{'z-10 bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white' : link.active}">
                                
                        </Link>
                        <!-- <span v-if="paginating.links.length < 7">                        
                            <Link v-if="key > 0 && key <= paginating.last_page" :key="`link-${key}`" :href="link.url" v-html="link.label" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative flex justify-center items-center h-8 w-8 text-center border text-sm font-medium  rounded-full" :class="{'z-10 bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white' : link.active}">
                                
                            </Link>
                        </span>
                        <span v-else>
                            <Link v-if="key > 0 && key < 4" :key="`link-${key}`" :href="link.url" v-html="link.label" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative flex justify-center items-center h-8 w-8 text-center border text-sm font-medium  rounded-full" :class="{'z-10 bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white' : link.active}">
                                
                            </Link>
                            <span v-else-if="paginating.links.length > 7 && key === 4" class="relative flex justify-center items-center h-8 w-8 text-center border border-gray-300 bg-white text-sm font-medium text-gray-700 rounded-full">
                                ...
                            </span>
                            <Link v-if="key > (paginating.last_page - 4) && key <= paginating.last_page" :key="`link-${key}`" :href="link.url" v-html="link.label" class="bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative flex justify-center items-center h-8 w-8 text-center border text-sm font-medium  rounded-full" :class="{'z-10 bg-gradient-to-t from-blue-brand-gradient1 to-blue-brand-gradient2 border-blue-brand text-white' : link.active}">
                                
                            </Link>
                        </span> -->
                    </span>
                    <Link :href="paginating.next_page_url" class="relative flex justify-center items-center h-8 w-8 text-center rounded-full border border-gray-300 bg-white text-sm font-semibold text-gray-500 hover:bg-gray-50">
                        <span class="sr-only">Next</span>
                        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                        </svg>
                    </Link>
                </nav>
            </div>
        </div>
    </div>
</template>

<!-- <template>
    <div v-if="links.length > 3" class="flex items-center justify-between">
        <div class="flex justify-between flex-1">
            <template v-for="(link, key) in links">
                <div v-if="link.url === null" :key="key" class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 cursor-default leading-5 rounded-md" v-html="link.label" />
                <Link v-else :key="`link-${key}`" class="mb-1 mr-1 px-4 py-3 focus:text-indigo-500 text-sm leading-4 hover:bg-white border focus:border-indigo-500 rounded" :class="{ 'bg-white': link.active }" :href="link.url" v-html="link.label" />
            </template>
        </div>
    </div>
</template> -->

<script>
    import { Link } from '@inertiajs/inertia-vue3'
    export default {
        components: {
            Link,
        },
        props: {
            paginating: Object,
        },
    }
</script>