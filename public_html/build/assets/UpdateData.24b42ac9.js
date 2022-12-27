import{_ as f}from"./Button.8a46fbb0.js";import{J as b}from"./Form.5adab420.js";import{_ as h}from"./Input.b94dc4d7.js";import{_ as j}from"./InputError.30e67f69.js";import{_ as g}from"./Label.94c293f6.js";import{J as v}from"./Select.9237fb35.js";import{_ as y}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as V,j as n,o as $,c as J,w as i,a,b as t,n as U,h as c}from"./app.8677420d.js";import"./use-resolve-button-type.01d4266c.js";import"./open-closed.2b5869e6.js";import"./hidden.6f6747aa.js";import"./CheckIcon.77577d78.js";const C=V({components:{JetButton:f,JetForm:b,JetInput:h,JetInputError:j,JetLabel:g,JetSelect:v},props:{client:Object},setup(e){let o=[{id:1,name:"C\xE9dula de Ciudadan\xEDa"},{id:2,name:"C\xE9dula de Extranjer\xEDa"},{id:3,name:"Pasaporte"}],l=0;return e.client.data_user&&(l=e.client.data_user.doc_type),l===0?o.unshift({id:0,name:"Seleccione",valid:"false"}):l=parseInt(e.client.data_user.doc_type-1),{type_doc:o,id_doc:l}},data(){return{form:this.$inertia.form({_method:"PUT",name:this.client.name,lastname:this.client.lastname,doc_type:this.type_doc[this.id_doc],doc_num:this.client.data_user?this.client.data_user.doc_num:null,verification:!0})}},methods:{updateData(){this.form.post(route("admin.userUpdate",this.client.id),{errorBag:"admin.userUpdate",preserveScroll:!0})}},computed:{verified(){return this.client.requirement_user.verified!=0}}}),k={class:"col-span-6 grid grid-cols-8 gap-2"},w=a("h2",{class:"col-span-8 text-center text-2xl font-semibold text-dark-brand"},"Datos Registrados",-1),B={class:"col-span-8 md:col-span-2"},N={class:"col-span-8 md:col-span-2"},S={class:"col-span-8 md:col-span-2"},D=c(" Tipo de documento "),I={class:"col-span-8 md:col-span-2"},T={class:"col-span-8 flex justify-center items-center"},E=c(" Guardar ");function P(e,o,l,q,z,A){const m=n("jet-label"),d=n("jet-input"),r=n("jet-input-error"),u=n("jet-select"),p=n("jet-button"),_=n("jet-form");return $(),J(_,{onSubmitted:e.updateData},{form:i(()=>[a("div",k,[w,a("div",B,[t(m,{for:"name",value:"Nombres"}),t(d,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s)},null,8,["modelValue"]),t(r,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),a("div",N,[t(m,{for:"lastname",value:"Apellidos"}),t(d,{id:"lastname",type:"text",class:"mt-1 block w-full",modelValue:e.form.lastname,"onUpdate:modelValue":o[1]||(o[1]=s=>e.form.lastname=s)},null,8,["modelValue"]),t(r,{message:e.form.errors.lastname,class:"mt-2"},null,8,["message"])]),a("div",S,[t(u,{selectable:e.type_doc,selected:e.form.doc_type,modelValue:e.form.doc_type,"onUpdate:modelValue":o[2]||(o[2]=s=>e.form.doc_type=s)},{title:i(()=>[D]),_:1},8,["selectable","selected","modelValue"]),t(r,{message:e.form.errors.doc_type,class:"mt-2"},null,8,["message"])]),a("div",I,[t(m,{for:"doc_num",value:"N\xFAmero documento"}),t(d,{id:"doc_num",type:"number",class:"mt-1 block w-full",modelValue:e.form.doc_num,"onUpdate:modelValue":o[3]||(o[3]=s=>e.form.doc_num=s)},null,8,["modelValue"]),t(r,{message:e.form.errors.doc_num,class:"mt-2"},null,8,["message"])]),a("div",T,[t(p,{class:U([{"opacity-25":e.form.processing},"mt-2"]),disabled:e.form.processing},{default:i(()=>[E]),_:1},8,["class","disabled"])])])]),_:1},8,["onSubmitted"])}const Z=y(C,[["render",P]]);export{Z as default};
