import{o as d,d as v,a as e,t as c,i as j,j as r,c as u,w as n,L as A,b as s,k as V,n as C,h as l}from"./app.86b8d295.js";import{A as U}from"./AppLayout.3ff4027e.js";import{_ as S}from"./Button.cdde5364.js";import{_ as D}from"./Input.3bd03309.js";import{_ as F}from"./InputError.68d87bb8.js";import{_ as B}from"./Label.1ed744e3.js";import{J as P}from"./Select.7927d634.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.814e9fba.js";import"./logoweb.554f3f4d.js";import"./NavLink.1d3d2c28.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.6bca26a6.js";import"./open-closed.2a417cdb.js";import"./hidden.b2c33518.js";import"./CheckIcon.726b672d.js";const J={props:["amountUsd","dollarPrice","amountCop","user"],methods:{usdFormat(){return this.amountUsd===""&&(this.amountUsd=0),parseFloat(this.amountUsd).toFixed(2)},copAmount(){let t=this.dollarPrice*this.usdFormat();return parseFloat(t).toFixed(2)},total(){let t=this.copAmount();return parseFloat(t).toFixed(2)}}},L={class:"flex flex-col justify-between items-center mt-5 w-full"},E={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center"},M={class:"flex justify-between items-center w-full mt-2"},N=e("span",{class:"text-sm text-gray-600 mr-1"},"Dep\xF3sito USD: ",-1),O={class:"font-semibold text-dark-brand"},T={class:"flex justify-between items-center w-full"},I=e("span",{class:"text-sm text-gray-600 mr-1"},"Tasa de cambio: ",-1),z={class:"font-semibold text-dark-brand"},R={class:"flex justify-between items-center w-full"},q=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto COP: ",-1),G={class:"font-semibold text-dark-brand"},H={class:"flex justify-between items-center w-full"},K=e("span",{class:"text-sm text-gray-600 mr-1"},"Total a pagar COP: ",-1),Q={class:"font-semibold text-dark-brand"},W={class:"text-lg text-dark-brand font-semibold mt-2"};function X(t,o,p,k,$,i){return d(),v("div",L,[e("div",E,[e("span",M,[N,e("span",O,"$ "+c(i.usdFormat()),1)]),e("span",T,[I,e("span",z,"$ "+c(p.dollarPrice),1)]),e("span",R,[q,e("span",G,"$ "+c(i.copAmount()),1)]),e("span",H,[K,e("span",Q,"$ "+c(i.total()),1)]),e("h2",W,"Recibes en Broker $"+c(i.usdFormat())+" USD",1)])])}const Y=x(J,[["render",X]]),Z=j({components:{AppLayout:U,JetButton:S,JetInput:D,JetInputError:F,JetLabel:B,JetSelect:P,JetCalculateDeposit:Y,Link:A},props:["exchange","accounts","brokers","tradingAccounts","dataUser"],data(){return{errAccount:null,form:this.$inertia.form({broker:this.brokers[0],tradingAccount:null,amount_usd:10,account:this.accounts[0]})}},setup(){return{amount_cop:0}},methods:{submit(){this.form.post(this.route("deposit.store"),{preserveScroll:!0})},errorAccount(){this.errAccount="Debes ingresar una cuenta de trading registrada bajo nuestro referido"}},computed:{tradingAccountVip(){let t=!1;return this.tradingAccounts[0]&&this.form.tradingAccount&&(console.log("se ejecuta"),this.tradingAccounts.forEach(o=>{if(this.form.tradingAccount===o.number&&this.form.broker.id===o.broker_id&&o.vip===1)return t=!0})),t}}}),tt={class:"font-semibold text-xl text-gray-700 leading-tight"},et=l("Dashboard/"),ot=l("Dep\xF3sitos a broker/"),st=l("Solicitud de dep\xF3sito "),at={class:"px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},rt={class:"grid grid-cols-12"},nt=e("div",{class:"col-span-12 flex justify-center items-center p-4"},[e("div",{class:"h-16 w-32 shadow-lg bg-dark-brand rounded-l-lg border border-gray-300 flex items-center justify-center"},[e("span",{class:"text-white font-semibold text-lg"},"USD")]),e("div",{class:"h-16 w-32 shadow-lg bg-opacity-10 bg-dark-brand hover:bg-opacity-20 hover:shadow-xl rounded-r-lg border border-gray-300 flex items-center justify-center transition"},[e("span",{class:"text-dark-brand font-semibold text-lg"},"COP")])],-1),lt={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},it={class:"grid grid-cols-8 gap-1"},ct={class:"col-span-8 md:col-span-4 xl:col-span-2"},dt=l(" Broker "),mt={class:"col-span-8 md:col-span-4 xl:col-span-2"},ut={class:"col-span-8 md:col-span-4 xl:col-span-2"},pt={class:"col-span-8 md:col-span-4 xl:col-span-2"},_t=l(" Seleccione el banco "),ft={class:"col-span-8 lg:col-start-3 lg:col-span-4"},bt={class:"grid grid-cols-1 items-center mt-4"},ht=l(" Solicitar "),gt=l(" Solicitar "),xt={class:"flex justify-center intems-center w-full"};function kt(t,o,p,k,$,i){const _=r("Link"),f=r("jet-select"),b=r("jet-label"),h=r("jet-input"),m=r("jet-input-error"),y=r("jet-calculate-deposit"),g=r("jet-button"),w=r("app-layout");return d(),u(w,{title:"Solicitud de dep\xF3sito"},{header:n(()=>[e("h2",tt,[s(_,{href:t.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:n(()=>[et]),_:1},8,["href"]),s(_,{href:t.route("users.deposits"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:n(()=>[ot]),_:1},8,["href"]),st])]),default:n(()=>[e("div",at,[e("div",rt,[nt,e("div",lt,[e("form",{onSubmit:o[4]||(o[4]=V((...a)=>t.submit&&t.submit(...a),["prevent"]))},[e("div",it,[e("div",ct,[s(f,{selectable:t.brokers,selected:t.form.broker,modelValue:t.form.broker,"onUpdate:modelValue":o[0]||(o[0]=a=>t.form.broker=a)},{title:n(()=>[dt]),_:1},8,["selectable","selected","modelValue"])]),e("div",mt,[s(b,{for:"tradingAccount",value:"Cuenta Broker"}),s(h,{id:"tradingAccount",type:"number",class:"mt-1 block w-full",modelValue:t.form.tradingAccount,"onUpdate:modelValue":o[1]||(o[1]=a=>t.form.tradingAccount=a)},null,8,["modelValue"]),s(m,{message:t.form.errors.tradingAccount,class:"mt-2"},null,8,["message"])]),e("div",ut,[s(b,{for:"amount_usd",value:"Monto USD"}),s(h,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:t.form.amount_usd,"onUpdate:modelValue":o[2]||(o[2]=a=>t.form.amount_usd=a)},null,8,["modelValue"]),s(m,{message:t.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),e("div",pt,[s(f,{selectable:t.accounts,selected:t.form.account,modelValue:t.form.account,"onUpdate:modelValue":o[3]||(o[3]=a=>t.form.account=a)},{title:n(()=>[_t]),_:1},8,["selectable","selected","modelValue"])]),e("div",ft,[s(y,{amountUsd:t.form.amount_usd,amountCop:t.amount_cop,dollarPrice:t.exchange,user:t.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","user"])])]),e("div",bt,[t.tradingAccountVip?(d(),u(g,{key:0,class:C(["mx-auto mb-4 max-w-max",{"opacity-25":t.form.processing}])},{default:n(()=>[ht]),_:1},8,["class"])):(d(),u(g,{key:1,type:"button",class:"mx-auto mb-4 max-w-max",onClick:t.errorAccount},{default:n(()=>[gt]),_:1},8,["onClick"]))]),e("div",xt,[s(m,{message:t.errAccount,class:"my-2"},null,8,["message"])])],32)])])])]),_:1})}const Et=x(Z,[["render",kt]]);export{Et as default};
