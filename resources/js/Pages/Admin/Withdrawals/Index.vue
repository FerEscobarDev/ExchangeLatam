<template>
    <app-layout-admin title="Retiros">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('admin.dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>Retiros de Broker
            </h2>
        </template>

        <div class="py-6 w-full">
            <div class="flex mx-auto lg:mr-4">
                <div class="container mx-auto sm:px-6 lg:px-8">
                    <div class="bg-white overflow-hidden sm:rounded-lg p-2">
                        <div class="w-full flex justify-end items-center p-4">
                            <Link :href="route('admin.createWithdrawal')" class="inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition">
                                Registrar Retiro
                            </Link>
                        </div>
                        <div class="flex flex-col px-4">
                            <TabGroup>
                                <TabList class="flex space-x-1 rounded-lg bg-gray-200 p-1">
                                    <Tab
                                        as="template"
                                        :key="1"
                                        v-slot="{ selected }"
                                        >
                                        <button
                                            :class="[
                                            'w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand',
                                            'ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white/75 shadow'
                                                : 'hover:bg-white/60 hover:text-blue-brand/75',
                                            ]"
                                            >
                                            <font-awesome-icon class="text-orange-400 ml-2 mr-4 h-8" :icon="['far', 'clock']" size="lg" />
                                            Retiros Pendientes
                                        </button>
                                    </Tab>
                                    <Tab
                                        as="template"
                                        :key="2"
                                        v-slot="{ selected }"
                                        >
                                        <button
                                            :class="[
                                            'w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand',
                                            'ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white/75 shadow'
                                                : 'hover:bg-white/60 hover:text-blue-brand/75',
                                            ]"
                                        >
                                            <font-awesome-icon class="text-blue-brand-complement ml-2 mr-4 h-8" :icon="['far', 'calendar-check']" size="lg" />
                                            Para Hoy
                                        </button>
                                    </Tab>
                                    <Tab
                                        as="template"
                                        :key="3"
                                        v-slot="{ selected }"
                                        >
                                        <button
                                            :class="[
                                            'w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand',
                                            'ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white/75 shadow'
                                                : 'hover:bg-white/60 hover:text-blue-brand/75',
                                            ]"
                                        >
                                            <font-awesome-icon class="text-red-500 ml-2 mr-4 h-8" :icon="['far', 'file-excel']" size="lg" />
                                            Sin Comprobante
                                        </button>
                                    </Tab>
                                    <Tab
                                        as="template"
                                        :key="4"
                                        v-slot="{ selected }"
                                        >
                                        <button
                                            :class="[
                                            'w-full flex items-center justify-center rounded-lg py-2.5 text-md font-medium leading-5 text-dark-brand',
                                            'ring-dark-brand/10 ring-opacity-60 ring-offset-2 ring-offset-dark-brand/10 focus:outline-none focus:ring-2',
                                            selected
                                                ? 'bg-white/75 shadow'
                                                : 'hover:bg-white/60 hover:text-blue-brand/75',
                                            ]"
                                        >
                                            <font-awesome-icon class="text-green-500 ml-2 mr-4 h-8" :icon="['fas', 'history']" size="lg" />
                                            Todos
                                        </button>
                                    </Tab>
                                </TabList>
                                <TabPanels class="mt-2">
                                    <TabPanel
                                    :key="1"
                                    :class="[
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60  focus:outline-none focus:ring-2',
                                    ]"
                                    >
                                        <table-withdrawals :withdrawals="withdrawalsPending" /> 
                                    </TabPanel>

                                    <TabPanel
                                    :key="2"
                                    :class="[
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                    ]"
                                    >
                                        <table-withdrawals :withdrawals="withdrawalsToday" />                                     
                                    </TabPanel>
                                    <TabPanel
                                    :key="3"
                                    :class="[
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                    ]"
                                    >
                                        <table-withdrawals :withdrawals="withdrawalsVoucher" />                       
                                    </TabPanel>
                                    <TabPanel
                                    :key="4"
                                    :class="[
                                        'rounded-xl bg-white p-3',
                                        'ring-white ring-opacity-60 focus:outline-none focus:ring-2',
                                    ]"
                                    >
                                        <table-withdrawals :withdrawals="withdrawalsAll" />                                
                                    </TabPanel>
                                </TabPanels>
                            </TabGroup>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import TableWithdrawals from '@/Pages/Admin/Withdrawals/Partials/TableWithdrawals.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import { TabGroup, TabList, Tab, TabPanels, TabPanel } from '@headlessui/vue';
    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faClock } from '@fortawesome/free-regular-svg-icons';
    import { faCalendarCheck } from '@fortawesome/free-regular-svg-icons';    
    import { faFileExcel } from '@fortawesome/free-regular-svg-icons';
    import { faHistory } from '@fortawesome/free-solid-svg-icons';

    library.add(faClock, faCalendarCheck, faFileExcel, faHistory);

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            TableWithdrawals,
            TabGroup, 
            TabList, 
            Tab, 
            TabPanels, 
            TabPanel,
            FontAwesomeIcon,
        },
        props: {
            withdrawalsPending: Object,    
            withdrawalsToday: Object,  
            withdrawalsVoucher: Object, 
            withdrawalsAll: Object,  
        },
    })
</script>
