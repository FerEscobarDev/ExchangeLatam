import{o as g,d as w,a as e,t as c,i as V,j as i,c as j,w as m,L as A,b as n,k as F,n as U,h as _}from"./app.589eac8f.js";import{A as C}from"./AppLayout.4a7b5f7e.js";import{_ as P}from"./Button.ac5a0a00.js";import{_ as S}from"./Input.88c1abd1.js";import{_ as D}from"./InputError.e43669bd.js";import{_ as I}from"./Label.0872f692.js";import{J as B}from"./Select.660f04a5.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.641a99f7.js";import"./logoweb.554f3f4d.js";import"./NavLink.ab443f97.js";import"./index.es.4d3c31b3.js";import"./use-resolve-button-type.9bf7f7c5.js";import"./open-closed.262747ec.js";import"./hidden.46409580.js";import"./CheckIcon.a1ad8745.js";const J={props:["amountUsd","dollarPrice","amountCop","tradingVip","user"],methods:{usdFormat(t){return t===""&&(t=0),parseFloat(t).toFixed(2)},copAmount(t,o,s){return t>0?t.toFixed(2):(parseFloat(s)*parseInt(o)).toFixed(2)},comission(t){return(t*.015/1.19).toFixed(2)},valIva(t){return(t*.19).toFixed(2)},vipRebate(t,o,s){let l=0;return(s==="yes"||this.tradingVip)&&t>=500?l=o:l=0,parseFloat(l).toFixed(2)},total(t,o,s,l){let u,a,d,f;return t>0?t=0:t=parseFloat(s)*parseInt(o),u=parseFloat(t*.015/1.19),a=parseFloat(u*.19),(l==="yes"||this.tradingVip)&&s>=500?d=u:d=0,f=t+u+a-d,f.toFixed(2)}}},L={class:"flex flex-col justify-between items-center mt-5 w-full"},$={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center"},E={class:"flex justify-between items-center w-full mt-2"},M=e("span",{class:"text-sm text-gray-600 mr-1"},"Dep\xF3sito USD: ",-1),N={class:"font-semibold text-dark-brand"},O={class:"flex justify-between items-center w-full"},R=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto COP: ",-1),T={class:"font-semibold text-dark-brand"},z={class:"flex justify-between items-center w-full"},q=e("span",{class:"text-sm text-gray-600 mr-1"},"Comisi\xF3n: ",-1),G={class:"font-semibold text-dark-brand"},H={class:"flex justify-between items-center w-full"},K=e("span",{class:"text-sm text-gray-600 mr-1"},"Impuesto IVA: ",-1),Q={class:"font-semibold text-dark-brand"},W={class:"flex justify-between items-center w-full"},X=e("span",{class:"text-sm text-gray-600 mr-1"},"Descuento VIP: ",-1),Y={class:"font-semibold text-dark-brand"},Z={class:"flex justify-between items-center w-full"},tt=e("span",{class:"text-sm text-gray-600 mr-1"},"Total a pagar COP: ",-1),et={class:"font-semibold text-dark-brand"},st={class:"text-lg text-dark-brand font-semibold mt-2"};function ot(t,o,s,l,u,a){return g(),w("div",L,[e("div",$,[e("span",E,[M,e("span",N,"$ "+c(a.usdFormat(s.amountUsd)),1)]),e("span",O,[R,e("span",T,"$ "+c(a.copAmount(s.amountCop,s.dollarPrice,a.usdFormat(s.amountUsd))),1)]),e("span",z,[q,e("span",G,"$ "+c(a.comission(a.copAmount(s.amountCop,s.dollarPrice,a.usdFormat(s.amountUsd)))),1)]),e("span",H,[K,e("span",Q,"$ "+c(a.valIva(a.comission(a.copAmount(s.amountCop,s.dollarPrice,a.usdFormat(s.amountUsd))))),1)]),e("span",W,[X,e("span",Y,"$ "+c(a.vipRebate(s.amountUsd,a.comission(a.copAmount(s.amountCop,s.dollarPrice,a.usdFormat(s.amountUsd))),s.user.data_user.vip)),1)]),e("span",Z,[tt,e("span",et,"$ "+c(a.total(s.amountCop,s.dollarPrice,a.usdFormat(s.amountUsd),s.user.data_user.vip)),1)]),e("h2",st,"Recibes en Broker $"+c(a.usdFormat(s.amountUsd))+" USD",1)])])}const at=x(J,[["render",ot]]),nt=V({components:{AppLayout:C,JetButton:P,JetInput:S,JetInputError:D,JetLabel:I,JetSelect:B,JetCalculateDeposit:at,Link:A},props:["exchange","accounts","brokers","tradingAccounts","dataUser"],data(){return{form:this.$inertia.form({broker:this.brokers[0],tradingAccount:null,amount_usd:10,account:this.accounts[0]})}},setup(){return{amount_cop:0}},methods:{submit(){this.form.post(this.route("deposit.store"))}},computed:{tradingAccountVip(){let t=!1;return this.tradingAccounts[0]&&this.form.tradingAccount&&this.tradingAccounts.forEach(o=>{if(this.form.tradingAccount===o.number&&this.form.broker.id===o.broker_id&&o.vip===1)return console.log("Si es cuenta VIP"),t=!0}),t}}}),rt={class:"font-semibold text-xl text-gray-700 leading-tight"},lt=_("Dashboard/"),it=_("Dep\xF3sitos a broker/"),dt=_("Solicitud de dep\xF3sito "),ct={class:"px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},mt={class:"grid grid-cols-12"},ut=e("div",{class:"col-span-12 flex justify-center items-center p-4"},[e("div",{class:"h-16 w-32 shadow-lg bg-dark-brand rounded-l-lg border border-gray-300 flex items-center justify-center"},[e("span",{class:"text-white font-semibold text-lg"},"USD")]),e("div",{class:"h-16 w-32 shadow-lg bg-opacity-10 bg-dark-brand hover:bg-opacity-20 hover:shadow-xl rounded-r-lg border border-gray-300 flex items-center justify-center transition"},[e("span",{class:"text-dark-brand font-semibold text-lg"},"COP")])],-1),_t={class:"col-span-12 md:col-start-2 md:col-span-10 p-4"},ft={class:"grid grid-cols-8 gap-1"},pt={class:"col-span-8 md:col-span-4 xl:col-span-2"},bt=_(" Broker "),ht={class:"col-span-8 md:col-span-4 xl:col-span-2"},gt={class:"col-span-8 md:col-span-4 xl:col-span-2"},xt={class:"col-span-8 md:col-span-4 xl:col-span-2"},vt=_(" Seleccione el banco "),kt={class:"col-span-8 lg:col-start-3 lg:col-span-4"},yt={class:"grid grid-cols-1 items-center mt-4"},wt=_(" Solicitar ");function Vt(t,o,s,l,u,a){const d=i("Link"),f=i("jet-select"),p=i("jet-label"),b=i("jet-input"),h=i("jet-input-error"),v=i("jet-calculate-deposit"),k=i("jet-button"),y=i("app-layout");return g(),j(y,{title:"Solicitud de dep\xF3sito"},{header:m(()=>[e("h2",rt,[n(d,{href:t.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:m(()=>[lt]),_:1},8,["href"]),n(d,{href:t.route("users.deposits"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:m(()=>[it]),_:1},8,["href"]),dt])]),default:m(()=>[e("div",ct,[e("div",mt,[ut,e("div",_t,[e("form",{onSubmit:o[4]||(o[4]=F((...r)=>t.submit&&t.submit(...r),["prevent"]))},[e("div",ft,[e("div",pt,[n(f,{selectable:t.brokers,selected:t.form.broker,modelValue:t.form.broker,"onUpdate:modelValue":o[0]||(o[0]=r=>t.form.broker=r)},{title:m(()=>[bt]),_:1},8,["selectable","selected","modelValue"])]),e("div",ht,[n(p,{for:"tradingAccount",value:"Cuenta Broker"}),n(b,{id:"tradingAccount",type:"number",class:"mt-1 block w-full",modelValue:t.form.tradingAccount,"onUpdate:modelValue":o[1]||(o[1]=r=>t.form.tradingAccount=r)},null,8,["modelValue"]),n(h,{message:t.form.errors.tradingAccount,class:"mt-2"},null,8,["message"])]),e("div",gt,[n(p,{for:"amount_usd",value:"Monto USD"}),n(b,{id:"amount_usd",type:"number",step:"0.01",class:"mt-1 block w-full",modelValue:t.form.amount_usd,"onUpdate:modelValue":o[2]||(o[2]=r=>t.form.amount_usd=r)},null,8,["modelValue"]),n(h,{message:t.form.errors.amount_usd,class:"mt-2"},null,8,["message"])]),e("div",xt,[n(f,{selectable:t.accounts,selected:t.form.account,modelValue:t.form.account,"onUpdate:modelValue":o[3]||(o[3]=r=>t.form.account=r)},{title:m(()=>[vt]),_:1},8,["selectable","selected","modelValue"])]),e("div",kt,[n(v,{amountUsd:t.form.amount_usd,amountCop:t.amount_cop,dollarPrice:t.exchange,tradingVip:t.tradingAccountVip,user:t.$page.props.user},null,8,["amountUsd","amountCop","dollarPrice","tradingVip","user"])])]),e("div",yt,[n(k,{class:U(["mx-auto mb-4 max-w-max",{"opacity-25":t.form.processing}]),disabled:!0},{default:m(()=>[wt]),_:1},8,["class"])])],32)])])])]),_:1})}const Ot=x(nt,[["render",Vt]]);export{Ot as default};
