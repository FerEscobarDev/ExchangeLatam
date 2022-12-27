import{_ as f}from"./Button.8a46fbb0.js";import{J as _}from"./Form.5adab420.js";import{_ as b}from"./Input.b94dc4d7.js";import{_ as j}from"./InputError.30e67f69.js";import{_ as V}from"./Label.94c293f6.js";import{_ as h}from"./ActionMessage.db70f390.js";import{J as k}from"./Select.9237fb35.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as g,j as s,o as $,c as J,w as a,a as n,b as o,n as v,h as l}from"./app.8677420d.js";import"./use-resolve-button-type.01d4266c.js";import"./open-closed.2b5869e6.js";import"./hidden.6f6747aa.js";import"./CheckIcon.77577d78.js";const C=g({components:{JetActionMessage:h,JetButton:f,JetForm:_,JetInput:b,JetInputError:j,JetLabel:V,JetSelect:k},props:["banks"],setup(e){return{types:[{id:1,name:"Cuenta de Ahorros"},{id:2,name:"Cuenta Corriente"}]}},data(){return{form:this.$inertia.form({number:null,type:this.types[0],bank:this.banks[0]})}},methods:{accountStore(){this.form.post(route("accounts.store.user"),{errorBag:"account.store.user",preserveScroll:!0})}},computed:{}}),B={class:"col-span-6 md:col-span-2"},S={class:"col-span-6 md:col-span-2"},w=l(" Tipo de cuenta "),N={class:"col-span-6 md:col-span-2"},A=l(" Banco "),U={class:"col-span-6"},F={class:"max-w-max mx-auto"},I=l(" Guardar ");function T(e,t,z,E,G,L){const c=s("jet-label"),i=s("jet-input"),m=s("jet-input-error"),p=s("jet-select"),u=s("jet-button"),d=s("jet-form");return $(),J(d,{onSubmitted:e.accountStore},{form:a(()=>[n("div",B,[o(c,{for:"number",value:"N\xFAmero de cuenta"}),o(i,{id:"number",type:"number",class:"mt-1 block w-full",modelValue:e.form.number,"onUpdate:modelValue":t[0]||(t[0]=r=>e.form.number=r)},null,8,["modelValue"]),o(m,{message:e.form.errors.number,class:"mt-2"},null,8,["message"])]),n("div",S,[o(p,{selectable:e.types,selected:e.form.type,modelValue:e.form.type,"onUpdate:modelValue":t[1]||(t[1]=r=>e.form.type=r)},{title:a(()=>[w]),_:1},8,["selectable","selected","modelValue"]),o(m,{message:e.form.errors.type,class:"mt-2"},null,8,["message"])]),n("div",N,[o(p,{selectable:e.banks,selected:e.form.bank,modelValue:e.form.bank,"onUpdate:modelValue":t[2]||(t[2]=r=>e.form.bank=r)},{title:a(()=>[A]),_:1},8,["selectable","selected","modelValue"]),o(m,{message:e.form.errors.bank,class:"mt-2"},null,8,["message"])]),n("div",U,[n("div",F,[o(u,{class:v([{"opacity-25":e.form.processing},"mt-2"]),disabled:e.form.processing},{default:a(()=>[I]),_:1},8,["class","disabled"])])])]),_:1},8,["onSubmitted"])}const x=y(C,[["render",T]]);export{x as default};
