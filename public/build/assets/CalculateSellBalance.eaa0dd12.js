import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,d as i,a as e,t as n}from"./app.8677420d.js";const m={props:["amountUsd","dollarPrice","amountCop","walletVip","user"],methods:{usdFormat(s){return s===""&&(s=0),parseFloat(s).toFixed(2)},copAmount(s,l,t){return s>0?s.toFixed(2):(parseFloat(t)*parseInt(l)).toFixed(2)},vipRebate(s,l){let t=0;l>0&&s>=500?t=10:t=0;let o=s*t;return parseFloat(o).toFixed(2)},total(s,l,t,o){let r;return s>0?s=0:s=parseFloat(t)*parseInt(l),r=Number(s)+Number(this.vipRebate(t,o)),r.toFixed(2)}}},_={class:"flex flex-col justify-between items-center mt-5 w-full"},f={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center"},u={class:"flex justify-between items-center w-full mt-2"},x=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto USD: ",-1),b={class:"font-semibold text-dark-brand"},h={class:"flex justify-between items-center w-full"},w=e("span",{class:"text-sm text-gray-600 mr-1"},"Tasa de cambio: ",-1),F={class:"font-semibold text-dark-brand"},y={class:"flex justify-between items-center w-full"},g=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto COP: ",-1),k={class:"font-semibold text-dark-brand"},P={class:"flex justify-between items-center w-full"},p=e("span",{class:"text-sm text-gray-600 mr-1"},"Adicional por VIP: ",-1),V={class:"font-semibold text-dark-brand"},j={class:"flex justify-between items-center w-full"},v=e("span",{class:"text-sm text-gray-600 mr-1"},"Total a pagar COP: ",-1),B={class:"font-semibold text-dark-brand"},C={class:"text-lg text-dark-brand font-semibold mt-2"};function R(s,l,t,o,r,a){return d(),i("div",_,[e("div",f,[e("span",u,[x,e("span",b,"$ "+n(a.usdFormat(t.amountUsd)),1)]),e("span",h,[w,e("span",F,"$ "+n(t.dollarPrice),1)]),e("span",y,[g,e("span",k,"$ "+n(a.copAmount(t.amountCop,t.dollarPrice,a.usdFormat(t.amountUsd))),1)]),e("span",P,[p,e("span",V,"$ "+n(a.vipRebate(t.amountUsd,t.walletVip)),1)]),e("span",j,[v,e("span",B,"$ "+n(a.total(t.amountCop,t.dollarPrice,a.usdFormat(t.amountUsd),t.walletVip)),1)]),e("h2",C,"Recibes: $"+n(a.total(t.amountCop,t.dollarPrice,a.usdFormat(t.amountUsd),t.walletVip))+" COP",1)])])}const N=c(m,[["render",R]]);export{N as default};
