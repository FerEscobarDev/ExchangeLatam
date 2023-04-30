import{i as V,j as r,o as m,c as p,w as a,L as W,a as t,b as o,k as g,n as w,d as k,t as v,h as n}from"./app.86b8d295.js";import{A as j}from"./AppLayout.3ff4027e.js";import{_ as B}from"./Button.cdde5364.js";import{_ as $}from"./SecondaryButton.0c699b8e.js";import{_ as x}from"./Input.3bd03309.js";import{_ as M}from"./InputError.68d87bb8.js";import{_ as U}from"./Label.1ed744e3.js";import{J as D}from"./Select.7927d634.js";import A from"./CalculateBuyBalance.360672b8.js";import{_ as E}from"./DialogModal.553a4d8f.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.814e9fba.js";import"./logoweb.554f3f4d.js";import"./NavLink.1d3d2c28.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.6bca26a6.js";import"./open-closed.2a417cdb.js";import"./hidden.b2c33518.js";import"./CheckIcon.726b672d.js";import"./Modal.aacc0eec.js";const J=V({components:{AppLayout:j,JetButton:B,JetInput:x,JetInputError:M,JetLabel:U,JetSelect:D,CalculateBuyBalance:A,DialogModal:E,Link:W,SecondaryButton:$},props:["accounts","wallets","walletAccount","dataUser","exchangeRate"],data(){return{form:this.$inertia.form({wallet:this.wallets[0],amount_usd:10,account:this.accounts[0]}),formWallet:this.$inertia.form({wallet:this.wallets[0],email:null,mobil:null}),show:!this.issetWallet}},setup(e){const f=e.walletAccount.length>0;return{amount_cop:0,issetWallet:f}},methods:{submit(){this.form.post(this.route("users.storeWalletExchangeDeposit"))},walletStore(){this.formWallet.post(this.route("users.storeWalletAccount"),{onSuccess:()=>(this.closeModal(),this.issetWallet=!0)})},closeModal(){this.show=!1},showModal(){this.show=!0}}}),R={class:"font-semibold text-xl text-gray-700 leading-tight"},P=n("Dashboard/"),N=n("Wallet Exchange/"),q=n("Solicitud Compra Saldo De Skrill "),z={class:"px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},I=n(" Registra tu cuenta de Skrill "),T={class:"col-span-6 col-start-2 mt-4"},F={class:"col-span-6 col-start-2 mt-2"},G=n("` "),H=t("div",{class:"col-span-6 col-start-2 mt-4"},[t("ul",{class:"list-disc"},[t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," Es necesario registrar tu cuenta de Skrill para poder realizar una solicitud de compra de saldo. ")]),t("li",null,[t("span",{class:"text-sm text-blue-brand-gradient1 font-semibold text-center"}," La cuenta que registres debe estar a tu nombre, de lo contrario se pueden reversar las operaciones con posibles sobrecostos operativos que debes asumir. ")])])],-1),K={class:"col-span-8 flex justify-center items-center mt-4"},O=n(" Registrar "),Q=n(" Cerrar "),X={class:"grid grid-cols-12"},Y={key:0,class:"col-span-12 flex justify-center items-center p-4"},Z=n(" Registrar Cuenta Skrill "),ee={key:1,class:"col-span-12 flex justify-center items-center p-4"},te={class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mx-auto"},oe=t("span",{class:"font-semibold"},"Cuenta Skrill",-1),se=t("span",{class:"flex"},[t("span",{class:"text-sm text-gray-600 mr-1"},"La compra de saldo ser\xE1 transferida a tu cuenta de Skrill relacionada a continuaci\xF3n:")],-1),le={class:"flex mt-2"},ae=t("span",{class:"text-md text-gray-600 mr-1"},"Email: ",-1),ne={class:"text-md font-semibold text-dark-brand"},re={class:"flex"},ie=t("span",{class:"text-md text-gray-600 mr-1"},"Celular: ",-1),me={class:"text-md font-semibold text-dark-brand"},de={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},ce={class:"grid grid-cols-6 gap-1"},ue={class:"col-span-6 md:col-span-2"},pe=n(" Wallet "),fe={class:"col-span-6 md:col-span-2"},_e={class:"col-span-6 md:col-span-2"},he=n(" Medio de pago: "),be={class:"col-span-6"},ge={class:"grid grid-cols-1 items-center mt-4"},we=n(" Solicitar ");function ke(e,s,f,ve,ye,Ce){const _=r("Link"),d=r("jet-label"),c=r("jet-input"),i=r("jet-input-error"),u=r("jet-button"),y=r("SecondaryButton"),C=r("DialogModal"),h=r("jet-select"),b=r("CalculateBuyBalance"),S=r("app-layout");return m(),p(S,{title:"Comprar Saldo"},{header:a(()=>[t("h2",R,[o(_,{href:e.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[P]),_:1},8,["href"]),o(_,{href:e.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:a(()=>[N]),_:1},8,["href"]),q])]),default:a(()=>[t("div",z,[o(C,{show:e.show,onClose:e.closeModal},{title:a(()=>[I]),content:a(()=>[t("form",{onSubmit:s[2]||(s[2]=g((...l)=>e.walletStore&&e.walletStore(...l),["prevent"])),class:"grid grid-cols-8"},[t("div",T,[o(d,{for:"email",value:"Email registrado en Skrill"}),o(c,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.formWallet.email,"onUpdate:modelValue":s[0]||(s[0]=l=>e.formWallet.email=l)},null,8,["modelValue"]),o(i,{message:e.formWallet.errors.email,class:"mt-2"},null,8,["message"])]),t("div",F,[o(d,{for:"mobil",value:"Celular registrado en Skrill"}),o(c,{id:"mobil",type:"tel",class:"mt-1 block w-full",modelValue:e.formWallet.mobil,"onUpdate:modelValue":s[1]||(s[1]=l=>e.formWallet.mobil=l)},null,8,["modelValue"]),o(i,{message:e.formWallet.errors.mobil,class:"mt-2"},null,8,["message"])]),G,H,t("div",K,[o(u,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.formWallet.processing}])},{default:a(()=>[O]),_:1},8,["class"])])],32)]),footer:a(()=>[o(y,{onClick:e.closeModal},{default:a(()=>[Q]),_:1},8,["onClick"])]),_:1},8,["show","onClose"]),t("div",X,[e.issetWallet?(m(),k("div",ee,[t("div",te,[oe,se,t("span",le,[ae,t("span",ne,v(e.walletAccount[0].email),1)]),t("span",re,[ie,t("span",me,v(e.walletAccount[0].mobil),1)])])])):(m(),k("div",Y,[o(u,{onClick:e.showModal,class:"mx-auto"},{default:a(()=>[Z]),_:1},8,["onClick"])])),t("div",de,[t("form",{onSubmit:s[6]||(s[6]=g((...l)=>e.submit&&e.submit(...l),["prevent"]))},[t("div",ce,[t("div",ue,[o(h,{selectable:e.wallets,selected:e.form.wallet,modelValue:e.form.wallet,"onUpdate:modelValue":s[3]||(s[3]=l=>e.form.wallet=l)},{title:a(()=>[pe]),_:1},8,["selectable","selected","modelValue"]),o(i,{message:e.form.errors.wallet,class:"mt-2"},null,8,["message"])]),t("div",fe,[o(d,{for:"amount_usd",value:"Monto USD"}),o(c,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:e.form.amount_usd,"onUpdate:modelValue":s[4]||(s[4]=l=>e.form.amount_usd=l)},null,8,["modelValue"]),o(i,{message:e.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),t("div",_e,[o(h,{selectable:e.accounts,selected:e.form.account,modelValue:e.form.account,"onUpdate:modelValue":s[5]||(s[5]=l=>e.form.account=l)},{title:a(()=>[he]),_:1},8,["selectable","selected","modelValue"]),o(i,{message:e.form.errors.account,class:"mt-2"},null,8,["message"])]),t("div",be,[e.issetWallet?(m(),p(b,{key:0,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:e.walletAccount[0].vip,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","walletVip","user"])):(m(),p(b,{key:1,amountUsd:e.form.amount_usd,amountCop:e.amount_cop,dollarPrice:e.exchangeRate,walletVip:0,user:e.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","user"]))])]),t("div",ge,[o(u,{class:w(["mx-auto mb-4 max-w-max",{"opacity-25":e.form.processing}])},{default:a(()=>[we]),_:1},8,["class"])])],32)])])])]),_:1})}const Te=L(J,[["render",ke]]);export{Te as default};
