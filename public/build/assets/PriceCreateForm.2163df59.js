import{_ as p}from"./Button.16f645a9.js";import{J as c}from"./Form.89db1bf4.js";import{_}from"./Input.fba06755.js";import{_ as f}from"./InputError.3c8fe43a.js";import{_ as b}from"./Label.1bb1cfa0.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as j,j as t,o as v,c as y,w as d,a,b as e,n as $,h as g}from"./app.7999cf1f.js";const h=j({components:{JetButton:p,JetForm:c,JetInput:_,JetInputError:f,JetLabel:b},data(){return{form:this.$inertia.form({date:null,dollar_buy:null,dollar_sell:null})}},methods:{priceStore(){this.form.post(route("admin.dollarPriceStore"),{preserveScroll:!0})}}}),w={class:"col-span-6 md:col-span-2"},J={class:"col-span-6 md:col-span-2"},S={class:"col-span-6 md:col-span-2"},k={class:"col-span-6"},C={class:"max-w-max mx-auto"},B=g(" Guardar ");function P(o,l,F,N,U,I){const r=t("jet-label"),m=t("jet-input"),n=t("jet-input-error"),i=t("jet-button"),u=t("jet-form");return v(),y(u,{onSubmitted:o.priceStore},{form:d(()=>[a("div",w,[e(r,{for:"date",value:"Fecha"}),e(m,{id:"date",type:"date",class:"mt-1 block w-full",modelValue:o.form.date,"onUpdate:modelValue":l[0]||(l[0]=s=>o.form.date=s)},null,8,["modelValue"]),e(n,{message:o.form.errors.date,class:"mt-2"},null,8,["message"])]),a("div",J,[e(r,{for:"dollar_buy",value:"Precio Dep\xF3sitos"}),e(m,{id:"dollar_buy",type:"text",class:"mt-1 block w-full",modelValue:o.form.dollar_buy,"onUpdate:modelValue":l[1]||(l[1]=s=>o.form.dollar_buy=s)},null,8,["modelValue"]),e(n,{message:o.form.errors.dollar_buy,class:"mt-2"},null,8,["message"])]),a("div",S,[e(r,{for:"dollar_sell",value:"Precio Retiros"}),e(m,{id:"dollar_sell",type:"text",class:"mt-1 block w-full",modelValue:o.form.dollar_sell,"onUpdate:modelValue":l[2]||(l[2]=s=>o.form.dollar_sell=s)},null,8,["modelValue"]),e(n,{message:o.form.errors.dollar_sell,class:"mt-2"},null,8,["message"])]),a("div",k,[a("div",C,[e(i,{class:$([{"opacity-25":o.form.processing},"mt-2"]),disabled:o.form.processing},{default:d(()=>[B]),_:1},8,["class","disabled"])])])]),_:1},8,["onSubmitted"])}const q=V(h,[["render",P]]);export{q as default};
