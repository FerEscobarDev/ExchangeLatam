import{_ as c}from"./Button.16f645a9.js";import{J as _}from"./Form.89db1bf4.js";import{_ as f}from"./Input.fba06755.js";import{_ as u}from"./InputError.3c8fe43a.js";import{_ as b}from"./Label.1bb1cfa0.js";import{_ as j}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as h,j as s,o as V,c as $,w as l,a as n,b as e,n as v,h as g}from"./app.7999cf1f.js";const J=h({components:{JetButton:c,JetForm:_,JetInput:f,JetInputError:u,JetLabel:b},props:{permission:Object},data(){return{form:this.$inertia.form({_method:"PUT",name:this.permission.name,description:this.permission.description})}},methods:{permissionEdit(){this.form.post(route("admin.permissionUpdate",this.permission.id),{preserveScroll:!0})}}}),w={class:"col-span-6 md:col-span-3"},k={class:"col-span-6 md:col-span-3"},B={class:"col-span-6"},C={class:"max-w-max mx-auto"},E=g(" Guardar ");function N(o,t,U,y,S,F){const m=s("jet-label"),a=s("jet-input"),i=s("jet-input-error"),p=s("jet-button"),d=s("jet-form");return V(),$(d,{onSubmitted:o.permissionEdit},{form:l(()=>[n("div",w,[e(m,{for:"description",value:"Nombre"}),e(a,{id:"description",type:"text",class:"mt-1 block w-full",modelValue:o.form.description,"onUpdate:modelValue":t[0]||(t[0]=r=>o.form.description=r)},null,8,["modelValue"]),e(i,{message:o.form.errors.description,class:"mt-2"},null,8,["message"])]),n("div",k,[e(m,{for:"name",value:"Ruta"}),e(a,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:o.form.name,"onUpdate:modelValue":t[1]||(t[1]=r=>o.form.name=r)},null,8,["modelValue"]),e(i,{message:o.form.errors.name,class:"mt-2"},null,8,["message"])]),n("div",B,[n("div",C,[e(p,{class:v([{"opacity-25":o.form.processing},"mt-2"]),disabled:o.form.processing},{default:l(()=>[E]),_:1},8,["class","disabled"])])])]),_:1},8,["onSubmitted"])}const O=j(J,[["render",N]]);export{O as default};
