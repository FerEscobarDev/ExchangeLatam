import{i as V,j as r,o as m,c as p,w as a,L as W,a as t,b as s,k as g,n as w,d as v,t as k,h as n}from"./app.8677420d.js";import{A as j}from"./AppLayout.bc2d60f2.js";import{_ as x}from"./Button.8a46fbb0.js";import{_ as B}from"./SecondaryButton.6caf7ba9.js";import{_ as $}from"./Input.b94dc4d7.js";import{_ as M}from"./InputError.30e67f69.js";import{_ as U}from"./Label.94c293f6.js";import{J as D}from"./Select.9237fb35.js";import A from"./CalculateBuyBalance.83924005.js";import{_ as E}from"./DialogModal.eb6355a6.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.13188a0e.js";import"./logoweb.554f3f4d.js";import"./NavLink.ec8831f3.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.01d4266c.js";import"./open-closed.2b5869e6.js";import"./hidden.6f6747aa.js";import"./CheckIcon.77577d78.js";import"./Modal.a6eac4dd.js";const J=V({components:{AppLayout:j,JetButton:x,JetInput:$,JetInputError:M,JetLabel:U,JetSelect:D,CalculateBuyBalance:A,DialogModal:E,Link:W,SecondaryButton:B},props:["accounts","wallets","walletAccount","dataUser","exchangeRate"],data(){return{form:this.$inertia.form({wallet:this.wallets[0],amount_usd:10,account:this.accounts[0]}),formWallet:this.$inertia.form({wallet:this.wallets[0],email:null,mobil:null}),show:!this.issetWallet}},setup(e){const f=e.walletAccount.length>0;return{amount_cop:0,issetWallet:f}},methods:{submit(){this.form.post(this.route("users.storeWalletExchangeDeposit"))},walletStore(){this.formWallet.post(this.route("users.storeWalletAccount"),{onSuccess:()=>(this.closeModal(),this.issetWallet=!0)})},closeModal(){this.show=!1},showModal(){this.show=!0}}}),R={class:"font-semibold text-xl text-gray-700 leading-tight"},P=n("Dashboard/"),N=n("Wallet Exchange/"),q=n("Solicitud Compra Saldo De Skrill "),z={class:"py-6 w-full"},I={class:"flex mx-auto lg:mr-4"},T={class:"container mx-auto sm:px-6 lg:px-8"},F={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},G=n(" Registra tu cuenta de Skrill "),H={class:"col-span-6 col-start-2 mt-4"},K={class:"col-span-6 col-start-2 mt-2"},O=n("` "),Q=t("div",{class:"col-span-6 col-start-2 mt-4"},[t("ul",{class:"list-disc"},[t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")]),t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")])])],-1),X={class:"col-span-8 flex justify-center items-center mt-4"},Y=n(" Registrar "),Z=n(" Cerrar "),ee={class:"grid grid-cols-12 p-4"},te={key:0,class:"col-span-12 flex justify-center items-center p-4"},se=n(" Registrar Cuenta Skrill "),oe={key:1,class:"col-span-12 flex justify-center items-center p-4"},le={class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mx-auto"},ae=t("span",{class:"font-semibold"},"Cuenta Skrill",-1),ne=t("span",{class:"flex"},[t("span",{class:"text-sm text-gray-600 mr-1"},"La compra de saldo ser\xE1 transferida a tu cuenta de Skrill relacionada a continuaci\xF3n:")],-1),re={class:"flex mt-2"},ie=t("span",{class:"text-md text-gray-600 mr-1"},"Email: ",-1),me={class:"text-md font-semibold text-dark-brand"},de={class:"flex"},ce=t("span",{class:"text-md text-gray-600 mr-1"},"Celular: ",-1),ue={class:"text-md font-semibold text-dark-brand"},pe={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},fe={class:"grid grid-cols-6 gap-1"},_e={class:"col-span-6 md:col-span-2"},he=n(" Wallet "),be={class:"col-span-6 md:col-span-2"},ge={class:"col-span-6 md:col-span-2"},we=n(" Medio de pago: "),ve={class:"col-span-6"},ke={class:"grid grid-cols-1 items-center mt-4"},ye=n(" Solicitar ");function Ce(e,o,f,Se,Ve,We){const _=r("Link"),d=r("jet-label"),c=r("jet-input"),i=r("jet-input-error"),u=r("jet-button"),y=r("SecondaryButton"),C=r("DialogModal"),h=r("jet-select"),b=r("CalculateBuyBalance"),S=r("app-layout");return m(),p(S,{title:"Comprar Saldo"},{header:a(()=>[t("h2",R,[s(_,{href:e.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[P]),_:1},8,["href"]),s(_,{href:e.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[N]),_:1},8,["href"]),q])]),default:a(()=>[t("div",z,[t("div",I,[t("div",T,[t("div",F,[s(C,{show:e.show,onClose:e.closeModal},{title:a(()=>[G]),content:a(()=>[t("form",{onSubmit:o[2]||(o[2]=g((...l)=>e.walletStore&&e.walletStore(...l),["prevent"])),class:"grid grid-cols-8"},[t("div",H,[s(d,{for:"email",value:"Email registrado en Skrill"}),s(c,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.formWallet.email,"onUpdate:modelValue":o[0]||(o[0]=l=>e.formWallet.email=l)},null,8,["modelValue"]),s(i,{message:e.formWallet.errors.email,class:"mt-2"},null,8,["message"])]),t("div",K,[s(d,{for:"mobil",value:"Celular registrado en Skrill"}),s(c,{id:"mobil",type:"tel",class:"mt-1 block w-full",modelValue:e.formWallet.mobil,"onUpdate:modelValue":o[1]||(o[1]=l=>e.formWallet.mobil=l)},null,8,["modelValue"]),s(i,{message:e.formWallet.errors.mobil,class:"mt-2"},null,8,["message"])]),O,Q,t("div",X,[s(u,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.formWallet.processing}])},{default:a(()=>[Y]),_:1},8,["class"])])],32)]),footer:a(()=>[s(y,{onClick:e.closeModal},{default:a(()=>[Z]),_:1},8,["onClick"])]),_:1},8,["show","onClose"]),t("div",ee,[e.issetWallet?(m(),v("div",oe,[t("div",le,[ae,ne,t("span",re,[ie,t("span",me,k(e.walletAccount[0].email),1)]),t("span",de,[ce,t("span",ue,k(e.walletAccount[0].mobil),1)])])])):(m(),v("div",te,[s(u,{onClick:e.showModal,class:"mx-auto"},{default:a(()=>[se]),_:1},8,["onClick"])])),t("div",pe,[t("form",{onSubmit:o[6]||(o[6]=g((...l)=>e.submit&&e.submit(...l),["prevent"]))},[t("div",fe,[t("div",_e,[s(h,{selectable:e.wallets,selected:e.form.wallet,modelValue:e.form.wallet,"onUpdate:modelValue":o[3]||(o[3]=l=>e.form.wallet=l)},{title:a(()=>[he]),_:1},8,["selectable","selected","modelValue"]),s(i,{message:e.form.errors.wallet,class:"mt-2"},null,8,["message"])]),t("div",be,[s(d,{for:"amount_usd",value:"Monto USD"}),s(c,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:e.form.amount_usd,"onUpdate:modelValue":o[4]||(o[4]=l=>e.form.amount_usd=l)},null,8,["modelValue"]),s(i,{message:e.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),t("div",ge,[s(h,{selectable:e.accounts,selected:e.form.account,modelValue:e.form.account,"onUpdate:modelValue":o[5]||(o[5]=l=>e.form.account=l)},{title:a(()=>[we]),_:1},8,["selectable","selected","modelValue"]),s(i,{message:e.form.errors.account,class:"mt-2"},null,8,["message"])]),t("div",ve,[e.issetWallet?(m(),p(b,{key:0,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:e.walletAccount[0].vip,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","walletVip","user"])):(m(),p(b,{key:1,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:0,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","user"]))])]),t("div",ke,[s(u,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.form.processing}])},{default:a(()=>[ye]),_:1},8,["class"])])],32)])])])])])])]),_:1})}const He=L(J,[["render",Ce]]);export{He as default};
