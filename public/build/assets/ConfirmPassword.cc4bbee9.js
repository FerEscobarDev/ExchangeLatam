import{u as m,r as d,o as c,d as u,b as o,f as e,w as r,F as p,H as f,a,n as _,l as w,h}from"./app.73139ce0.js";import{J as b}from"./AuthenticationCard.989377d0.js";import{_ as g}from"./AuthenticationCardLogo.676bc3c3.js";import{_ as x}from"./Button.d2e441a1.js";import{_ as v,a as y}from"./InputError.e539bc99.js";import{_ as V}from"./Label.c8c289f9.js";import"./_plugin-vue_export-helper.cdc0426e.js";const C=a("div",{class:"mb-4 text-sm text-gray-600"}," This is a secure area of the application. Please confirm your password before continuing. ",-1),$=["onSubmit"],k={class:"flex justify-end mt-4"},F=h(" Confirm "),j={__name:"ConfirmPassword",setup(B){const s=m({password:""}),t=d(null),n=()=>{s.post(route("password.confirm"),{onFinish:()=>{s.reset(),t.value.focus()}})};return(N,i)=>(c(),u(p,null,[o(e(f),{title:"Secure Area"}),o(b,null,{logo:r(()=>[o(g)]),default:r(()=>[C,a("form",{onSubmit:w(n,["prevent"])},[a("div",null,[o(V,{for:"password",value:"Password"}),o(v,{id:"password",ref_key:"passwordInput",ref:t,modelValue:e(s).password,"onUpdate:modelValue":i[0]||(i[0]=l=>e(s).password=l),type:"password",class:"mt-1 block w-full",required:"",autocomplete:"current-password",autofocus:""},null,8,["modelValue"]),o(y,{class:"mt-2",message:e(s).errors.password},null,8,["message"])]),a("div",k,[o(x,{class:_(["ml-4",{"opacity-25":e(s).processing}]),disabled:e(s).processing},{default:r(()=>[F]),_:1},8,["class","disabled"])])],40,$)]),_:1})],64))}};export{j as default};
