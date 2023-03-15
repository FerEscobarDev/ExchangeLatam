<template>
    <app-layout-admin title="Trading Accounts">
        <template #header>
            <h2 class="font-semibold text-xl text-gray-700 leading-tight">
                <Link :href="route('dashboard')" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Dashboard/</Link>
                <Link :href="route('admin.userShow', client.id)" class="text-blue-brand-gradient1 font-semibold hover:text-blue-brand">Perfil Usuario/</Link>
                Trading Accounts
            </h2>
        </template>

        <div class="px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white">
            <div class="flex items-center justify-center mb-5">
                <!-- Current Profile Photo -->
                <div v-if="client.picture">
                    <div>
                        <img :src="$page.props.ziggy.url+'/storage/'+client.picture" class="rounded-full h-28 w-28 object-cover">
                    </div>
                </div>
                <div v-else>
                    <div>
                        <img :src="client.profile_photo_url" :alt="client.name" class="rounded-full h-28 w-28 object-cover">
                    </div>
                </div>
                <div class="flex flex-col ml-5">
                    <span class="text-xl md:text-2xl text-black/75 font-semibold">{{client.name + ' ' + client.lastname}}</span>
                    <span class="text-black/50 font-medium">Trading Accounts</span>
                </div>
            </div>
            <div class="flex justify-end items-center mb-6">
                <Form @submitted="submit" class="w-1/2">
                    <template #form>
                        <div class="col-span-3 md:col-span-2">
                            <Label for="number" value="Número" />
                            <Input id="number" type="number" class="mt-1 block w-full" v-model="form.number"/>
                            <InputError :message="form.errors.number" class="mt-2" />
                        </div>
                        <div class="col-span-3 md:col-span-2">
                            <Select :selectable="status" :selected="form.vip" v-model="form.vip">
                                <template #title>
                                    VIP                           
                                </template>
                            </Select>
                            <InputError :message="form.errors.vip" class="mt-2" />
                        </div>
                        <div class="col-span-6 md:col-span-2 flex justify-center items-end">
                            <Button >
                                Registrar Cuenta
                            </Button>
                        </div>                        
                    </template>
                </Form>
            </div>
            <div class="min-w-full overflow-auto border border-gray-200 rounded-lg">
                <table class="min-w-full divide-y divide-gray-200">
                    <thead class="bg-gray-50">
                        <tr>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Id
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Usuario
                            </th>
                            <th scope="col" class="hidden md:table-cell px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Número
                            </th>
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                VIP
                            </th>                                                  
                            <th scope="col" class="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Acciones
                            </th>
                        </tr>
                    </thead>
                    <tbody class="bg-white divide-y divide-gray-200" v-if="tradingAccounts.data[0]">
                        <tr v-for="tradingAccount in tradingAccounts.data" :key="tradingAccount.id" class="odd:bg-white even:bg-gray-50">
                            <td class="text-center font-semibold px-6 py-4 whitespace-nowrap text-sm">
                                {{tradingAccount.id}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('admin.userShow', tradingAccount.user_id)" class="text-indigo-600 hover:text-indigo-900">
                                    {{tradingAccount.user.name}}
                                </Link>
                            </td>
                            <td class="px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500">
                                {{tradingAccount.number}}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {{ vip(tradingAccount.vip) }}
                            </td>
                            <td class="text-center px-6 py-4 whitespace-nowrap text-sm font-medium">
                                <Link :href="route('admin.showWalletExchange', tradingAccount.id)" class="text-indigo-600 hover:text-indigo-900">
                                    Ver detalles
                                </Link>
                            </td>
                        </tr>
                    </tbody>                                            
                    <tbody class="bg-white divide-y divide-gray-200" v-else>
                        <tr>
                            <td class="px-6 py-4 w-full text-base text-gray-500 text-center" colspan="7">No tiene cuentas de trading</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
            <div class="mt-2">
                <pagination class="border-none" v-if="tradingAccounts.data[0]" :paginating="tradingAccounts"/>
            </div>
        </div>
    </app-layout-admin>
</template>

<script>
    import { defineComponent } from 'vue';
    import AppLayoutAdmin from '@/Layouts/AppLayoutAdmin.vue';
    import { Link } from '@inertiajs/inertia-vue3';
    import Pagination from '@/Components/Pagination.vue';    
    import Button from '@/Components/Button.vue';
    import Form from '@/Components/Form.vue';
    import Label from '@/Components/Label.vue';
    import Input from '@/Components/Input.vue';
    import InputError from '@/Components/InputError.vue';
    import Select from '@/Components/Select.vue';
    import dayjs from 'dayjs';

    export default defineComponent({
        components: {
            AppLayoutAdmin,
            Link,
            Pagination,
            Button,
            Form,
            Label,
            Input,
            InputError,
            Select
        },
        props: {
            tradingAccounts: Object, 
            client: Object      
        }, 
        setup() {
            let status = [
                {
                    id: 0,
                    name: 'No'
                },
                {
                    id: 1,
                    name: 'Si'
                }
            ]
            return {
                status
            }
        },
        data() {
            return {
                form: this.$inertia.form({
                    user_id: this.client.id,
                    broker_id: 1,
                    number: null,
                    vip: this.status[1],
                })
            }
        },       
        methods: {
            vip(accountVip)
            {                
                if(accountVip === 1){
                    return 'SI'
                }

                return 'NO'
            },
            submit()
            {   
                this.form.transform((data) => ({
                    ...data,
                    vip: data.vip.id,
                }))
                .post(route('admin.userTradingAccountStore'),{
                    errorBag: 'admin.userTradingAccountStore',
                    preserveScroll: true,
                    onSuccess: () => this.form.reset('number'),
                })
            }
        },
    })
</script>