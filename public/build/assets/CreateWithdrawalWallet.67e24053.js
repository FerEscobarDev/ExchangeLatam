import{i as C,j as r,o as m,c as f,w as a,L as S,a as t,b as s,k as g,n as w,d as W,e as V,t as i,h as n}from"./app.86b8d295.js";import{A as j}from"./AppLayout.3ff4027e.js";import{_ as $}from"./Button.cdde5364.js";import{_ as B}from"./SecondaryButton.0c699b8e.js";import{_ as M}from"./Input.3bd03309.js";import{_ as U}from"./InputError.68d87bb8.js";import{_ as D}from"./Label.1ed744e3.js";import{J as E}from"./Select.7927d634.js";import L from"./CalculateSellBalance.25cede62.js";import{_ as A}from"./DialogModal.553a4d8f.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.814e9fba.js";import"./logoweb.554f3f4d.js";import"./NavLink.1d3d2c28.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.6bca26a6.js";import"./open-closed.2a417cdb.js";import"./hidden.b2c33518.js";import"./CheckIcon.726b672d.js";import"./Modal.aacc0eec.js";const R=C({components:{AppLayout:j,JetButton:$,JetInput:M,JetInputError:U,JetLabel:D,JetSelect:E,CalculateSellBalance:L,DialogModal:A,Link:S,SecondaryButton:B},props:["account","wallets","walletAccount","dataUser","exchangeRate"],data(){return{form:this.$inertia.form({wallet:this.wallets[0],amount_usd:10}),formWallet:this.$inertia.form({wallet:this.wallets[0],email:null,mobil:null}),show:!this.issetWallet}},setup(e){const h=e.walletAccount.length>0;return{amount_cop:0,issetWallet:h}},methods:{submit(){this.form.post(this.route("users.storeWalletExchangeWithdrawal"))},walletStore(){this.formWallet.post(this.route("users.storeWalletAccount"),{onSuccess:()=>(this.closeModal(),this.issetWallet=!0)})},closeModal(){this.show=!1},showModal(){this.show=!0}}}),N={class:"font-semibold text-xl text-gray-700 leading-tight"},P=n("Dashboard/"),z=n("Wallet Exchange/"),q=n("Solicitud Venta Saldo De Skrill "),I={class:"px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},T=n(" Registra tu cuenta de Skrill "),F={class:"col-span-6 col-start-2 mt-4"},G={class:"col-span-6 col-start-2 mt-2"},H=n("` "),K=t("div",{class:"col-span-6 col-start-2 mt-4"},[t("ul",{class:"list-disc"},[t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")]),t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")])])],-1),O={class:"col-span-8 flex justify-center items-center mt-4"},Q=n(" Registrar "),X=n(" Cerrar "),Y={class:"grid grid-cols-12"},Z={key:0,class:"col-span-12 flex justify-center items-center p-4"},ee=n(" Registrar Cuenta Skrill "),te={class:"col-span-12 flex justify-center items-center p-4"},se={class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-auto flex flex-col items-start mx-auto"},oe=t("span",{class:"text-sm text-gray-600 font-semibold"},"El pago ser\xE1 realizado a la siguiente cuenta bancaria registrada.",-1),ae={class:"font-semibold"},le={class:"flex"},ne=t("span",{class:"text-sm text-gray-600 mr-1"},"Documento: ",-1),re={class:"text-sm font-semibold text-dark-brand"},ie={class:"flex"},de=t("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),me={class:"text-sm font-semibold text-dark-brand"},ce={class:"flex"},ue=t("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),pe={class:"text-sm font-semibold text-dark-brand"},_e={class:"flex mb-2"},fe=t("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),he={class:"text-sm font-semibold text-dark-brand"},be={class:"max-w-max mx-auto mt-2"},ge=n(" Cambiar "),we={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},ye={class:"grid grid-cols-6 gap-1"},ke={class:"col-span-6 md:col-span-3"},ve=n(" Wallet "),xe={class:"col-span-6 md:col-span-3"},Ce={class:"col-span-6"},Se={class:"grid grid-cols-1 items-center mt-4"},We=n(" Solicitar ");function Ve(e,o,h,je,$e,Be){const c=r("Link"),u=r("jet-label"),p=r("jet-input"),d=r("jet-input-error"),_=r("jet-button"),y=r("SecondaryButton"),k=r("DialogModal"),v=r("jet-select"),b=r("CalculateSellBalance"),x=r("app-layout");return m(),f(x,{title:"Vender Saldo"},{header:a(()=>[t("h2",N,[s(c,{href:e.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[P]),_:1},8,["href"]),s(c,{href:e.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[z]),_:1},8,["href"]),q])]),default:a(()=>[t("div",I,[s(k,{show:e.show,onClose:e.closeModal},{title:a(()=>[T]),content:a(()=>[t("form",{onSubmit:o[2]||(o[2]=g((...l)=>e.walletStore&&e.walletStore(...l),["prevent"])),class:"grid grid-cols-8"},[t("div",F,[s(u,{for:"email",value:"Email registrado en Skrill"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.formWallet.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.formWallet.email=l)},null,8,["modelValue"]),s(d,{message:e.formWallet.errors.email,class:"mt-2"},null,8,["message"])]),t("div",G,[s(u,{for:"mobil",value:"Celular registrado en Skrill"}),s(p,{id:"mobil",type:"tel",class:"mt-1 block w-full",modelValue:e.formWallet.mobil,"onUpdate:modelValue":o[1]||(o[1]=l=>e.formWallet.mobil=l)},null,8,["modelValue"]),s(d,{message:e.formWallet.errors.mobil,class:"mt-2"},null,8,["message"])]),H,K,t("div",O,[s(_,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.formWallet.processing}])},{default:a(()=>[Q]),_:1},8,["class"])])],32)]),footer:a(()=>[s(y,{onClick:e.closeModal},{default:a(()=>[X]),_:1},8,["onClick"])]),_:1},8,["show","onClose"]),t("div",Y,[e.issetWallet?V("",!0):(m(),W("div",Z,[s(_,{onClick:e.showModal,class:"mx-auto"},{default:a(()=>[ee]),_:1},8,["onClick"])])),t("div",te,[t("div",se,[oe,t("span",ae,i(e.account[0].user.name+" "+e.account[0].user.lastname),1),t("span",le,[ne,t("span",re,i(e.account[0].user.data_user.doc_num),1)]),t("span",ie,[de,t("span",me,i(e.account[0].bank.name),1)]),t("span",ce,[ue,t("span",pe,i(e.account[0].number),1)]),t("span",_e,[fe,t("span",he,i(e.account[0].type),1)]),t("div",be,[s(c,{href:e.route("accounts.create.user"),class:"inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:a(()=>[ge]),_:1},8,["href"])])])]),t("div",we,[t("form",{onSubmit:o[5]||(o[5]=g((...l)=>e.submit&&e.submit(...l),["prevent"]))},[t("div",ye,[t("div",ke,[s(v,{selectable:e.wallets,selected:e.form.wallet,modelValue:e.form.wallet,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.wallet=l)},{title:a(()=>[ve]),_:1},8,["selectable","selected","modelValue"]),s(d,{message:e.form.errors.wallet,class:"mt-2"},null,8,["message"])]),t("div",xe,[s(u,{for:"amount_usd",value:"Monto USD"}),s(p,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:e.form.amount_usd,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.amount_usd=l)},null,8,["modelValue"]),s(d,{message:e.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),t("div",Ce,[e.issetWallet?(m(),f(b,{key:0,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:e.walletAccount[0].vip,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","walletVip","user"])):(m(),f(b,{key:1,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:0,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","user"]))])]),t("div",Se,[s(_,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.form.processing}])},{default:a(()=>[We]),_:1},8,["class"])])],32)])])])]),_:1})}const Xe=J(R,[["render",Ve]]);export{Xe as default};
