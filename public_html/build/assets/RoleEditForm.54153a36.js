import{_ as b}from"./Button.cdde5364.js";import{J as j}from"./Form.e595a702.js";import{_ as v}from"./Input.3bd03309.js";import{_ as k}from"./Checkbox.3f636d92.js";import{_ as $}from"./InputError.68d87bb8.js";import{_ as V}from"./Label.1ed744e3.js";import{_ as C}from"./_plugin-vue_export-helper.cdc0426e.js";import{i as g,j as t,o as a,c as E,w as i,a as n,b as r,d,g as J,F as y,n as B,h as S}from"./app.86b8d295.js";const w=g({components:{JetButton:b,JetForm:j,JetInput:v,JetInputError:$,JetLabel:V,Checkbox:k},props:{role:Object,permissionsAll:Array},setup(e){let o=[];return e.role.permissions.forEach(m=>{o.push(m.id)}),{permissionSelect:o}},data(){return{form:this.$inertia.form({_method:"PUT",name:this.role.name,permissions:this.permissionSelect})}},methods:{roleEdit(){this.form.post(route("admin.roleUpdate",this.role.id),{preserveScroll:!0})}}}),F={class:"col-span-6"},U={class:"col-span-6"},x=n("h5",null,"Permisos",-1),A={class:"col-span-6"},N={class:"max-w-max mx-auto"},I=S(" Guardar ");function L(e,o,m,P,R,T){const l=t("jet-label"),c=t("jet-input"),p=t("jet-input-error"),u=t("Checkbox"),_=t("jet-button"),f=t("jet-form");return a(),E(f,{onSubmitted:e.roleEdit},{form:i(()=>[n("div",F,[r(l,{for:"name",value:"Rol"}),r(c,{id:"name",type:"text",class:"mt-1 block w-full",modelValue:e.form.name,"onUpdate:modelValue":o[0]||(o[0]=s=>e.form.name=s)},null,8,["modelValue"]),r(p,{message:e.form.errors.name,class:"mt-2"},null,8,["message"])]),n("div",U,[x,(a(!0),d(y,null,J(e.permissionsAll,s=>(a(),d("div",{class:"flex justify-start items-center pt-2",key:s.id},[r(u,{value:s.id,checked:e.form.permissions,id:s.id,modelValue:e.form.permissions,"onUpdate:modelValue":o[1]||(o[1]=h=>e.form.permissions=h)},null,8,["value","checked","id","modelValue"]),r(l,{for:s.id,value:s.description,class:"ml-2"},null,8,["for","value"])]))),128))]),n("div",A,[n("div",N,[r(_,{class:B([{"opacity-25":e.form.processing},"mt-2"]),disabled:e.form.processing},{default:i(()=>[I]),_:1},8,["class","disabled"])])])]),_:1},8,["onSubmitted"])}const Q=C(w,[["render",L]]);export{Q as default};
