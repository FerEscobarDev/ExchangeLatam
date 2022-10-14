import{i as C,j as r,o as m,c as f,w as a,L as S,a as t,b as s,k as g,n as w,d as W,e as V,t as i,h as n}from"./app.7999cf1f.js";import{A as j}from"./AppLayout.71a4ef5c.js";import{_ as $}from"./Button.16f645a9.js";import{_ as B}from"./SecondaryButton.6ad1e4b6.js";import{_ as M}from"./Input.fba06755.js";import{_ as U}from"./InputError.3c8fe43a.js";import{_ as D}from"./Label.1bb1cfa0.js";import{J as E}from"./Select.0518b346.js";import L from"./CalculateSellBalance.ba22afc3.js";import{_ as A}from"./DialogModal.dcac158a.js";import{_ as J}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.b629d8a8.js";import"./logoweb.554f3f4d.js";import"./NavLink.d6db4fac.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.ff85f682.js";import"./open-closed.0d255475.js";import"./hidden.b8fa9f2a.js";import"./CheckIcon.b1b972e8.js";import"./Modal.96eea86a.js";const N=C({components:{AppLayout:j,JetButton:$,JetInput:M,JetInputError:U,JetLabel:D,JetSelect:E,CalculateSellBalance:L,DialogModal:A,Link:S,SecondaryButton:B},props:["exchange","account","wallets","walletAccount","dataUser"],data(){return{form:this.$inertia.form({wallet:this.wallets[0],amount_usd:10}),formWallet:this.$inertia.form({wallet:this.wallets[0],email:null,mobil:null}),show:!this.issetWallet}},setup(e){const h=e.walletAccount.length>0;return{amount_cop:0,issetWallet:h}},methods:{submit(){this.form.post(this.route("users.storeWalletExchangeWithdrawal"))},walletStore(){this.formWallet.post(this.route("users.storeWalletAccount"),{onSuccess:()=>(this.closeModal(),this.issetWallet=!0)})},closeModal(){this.show=!1},showModal(){this.show=!0}}}),P={class:"font-semibold text-xl text-gray-700 leading-tight"},z=n("Dashboard/"),R=n("Wallet Exchange/"),q=n("Solicitud Venta Saldo De Skrill "),I={class:"py-6 w-full"},T={class:"flex mx-auto lg:mr-4"},F={class:"container mx-auto sm:px-6 lg:px-8"},G={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},H=n(" Registra tu cuenta de Skrill "),K={class:"col-span-6 col-start-2 mt-4"},O={class:"col-span-6 col-start-2 mt-2"},Q=n("` "),X=t("div",{class:"col-span-6 col-start-2 mt-4"},[t("ul",{class:"list-disc"},[t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")]),t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")])])],-1),Y={class:"col-span-8 flex justify-center items-center mt-4"},Z=n(" Registrar "),ee=n(" Cerrar "),te={class:"grid grid-cols-12 p-4"},se={key:0,class:"col-span-12 flex justify-center items-center p-4"},oe=n(" Registrar Cuenta Skrill "),ae={class:"col-span-12 flex justify-center items-center p-4"},le={class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-auto flex flex-col items-start mx-auto"},ne=t("span",{class:"text-sm text-gray-600 font-semibold"},"El pago ser\xE1 realizado a la siguiente cuenta bancaria registrada.",-1),re={class:"font-semibold"},ie={class:"flex"},de=t("span",{class:"text-sm text-gray-600 mr-1"},"Documento: ",-1),me={class:"text-sm font-semibold text-dark-brand"},ce={class:"flex"},ue=t("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),pe={class:"text-sm font-semibold text-dark-brand"},_e={class:"flex"},fe=t("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),he={class:"text-sm font-semibold text-dark-brand"},be={class:"flex mb-2"},ge=t("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),we={class:"text-sm font-semibold text-dark-brand"},ve={class:"max-w-max mx-auto mt-2"},ye=n(" Cambiar "),ke={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},xe={class:"grid grid-cols-6 gap-1"},Ce={class:"col-span-6 md:col-span-3"},Se=n(" Wallet "),We={class:"col-span-6 md:col-span-3"},Ve={class:"col-span-6"},je={class:"grid grid-cols-1 items-center mt-4"},$e=n(" Solicitar ");function Be(e,o,h,Me,Ue,De){const c=r("Link"),u=r("jet-label"),p=r("jet-input"),d=r("jet-input-error"),_=r("jet-button"),v=r("SecondaryButton"),y=r("DialogModal"),k=r("jet-select"),b=r("CalculateSellBalance"),x=r("app-layout");return m(),f(x,{title:"Vender Saldo"},{header:a(()=>[t("h2",P,[s(c,{href:e.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[z]),_:1},8,["href"]),s(c,{href:e.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[R]),_:1},8,["href"]),q])]),default:a(()=>[t("div",I,[t("div",T,[t("div",F,[t("div",G,[s(y,{show:e.show,onClose:e.closeModal},{title:a(()=>[H]),content:a(()=>[t("form",{onSubmit:o[2]||(o[2]=g((...l)=>e.walletStore&&e.walletStore(...l),["prevent"])),class:"grid grid-cols-8"},[t("div",K,[s(u,{for:"email",value:"Email registrado en Skrill"}),s(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.formWallet.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.formWallet.email=l)},null,8,["modelValue"]),s(d,{message:e.formWallet.errors.email,class:"mt-2"},null,8,["message"])]),t("div",O,[s(u,{for:"mobil",value:"Celular registrado en Skrill"}),s(p,{id:"mobil",type:"tel",class:"mt-1 block w-full",modelValue:e.formWallet.mobil,"onUpdate:modelValue":o[1]||(o[1]=l=>e.formWallet.mobil=l)},null,8,["modelValue"]),s(d,{message:e.formWallet.errors.mobil,class:"mt-2"},null,8,["message"])]),Q,X,t("div",Y,[s(_,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.formWallet.processing}])},{default:a(()=>[Z]),_:1},8,["class"])])],32)]),footer:a(()=>[s(v,{onClick:e.closeModal},{default:a(()=>[ee]),_:1},8,["onClick"])]),_:1},8,["show","onClose"]),t("div",te,[e.issetWallet?V("",!0):(m(),W("div",se,[s(_,{onClick:e.showModal,class:"mx-auto"},{default:a(()=>[oe]),_:1},8,["onClick"])])),t("div",ae,[t("div",le,[ne,t("span",re,i(e.account[0].user.name+" "+e.account[0].user.lastname),1),t("span",ie,[de,t("span",me,i(e.account[0].user.data_user.doc_num),1)]),t("span",ce,[ue,t("span",pe,i(e.account[0].bank.name),1)]),t("span",_e,[fe,t("span",he,i(e.account[0].number),1)]),t("span",be,[ge,t("span",we,i(e.account[0].type),1)]),t("div",ve,[s(c,{href:e.route("accounts.create.user"),class:"inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:a(()=>[ye]),_:1},8,["href"])])])]),t("div",ke,[t("form",{onSubmit:o[5]||(o[5]=g((...l)=>e.submit&&e.submit(...l),["prevent"]))},[t("div",xe,[t("div",Ce,[s(k,{selectable:e.wallets,selected:e.form.wallet,modelValue:e.form.wallet,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.wallet=l)},{title:a(()=>[Se]),_:1},8,["selectable","selected","modelValue"]),s(d,{message:e.form.errors.wallet,class:"mt-2"},null,8,["message"])]),t("div",We,[s(u,{for:"amount_usd",value:"Monto USD"}),s(p,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:e.form.amount_usd,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.amount_usd=l)},null,8,["modelValue"]),s(d,{message:e.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),t("div",Ve,[e.issetWallet?(m(),f(b,{key:0,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchange[0].dollar_sell,walletVip:e.walletAccount[0].vip,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","walletVip","user"])):(m(),f(b,{key:1,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchange[0].dollar_sell,walletVip:0,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","user"]))])]),t("div",je,[s(_,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.form.processing}])},{default:a(()=>[$e]),_:1},8,["class"])])],32)])])])])])])]),_:1})}const et=J(N,[["render",Be]]);export{et as default};
