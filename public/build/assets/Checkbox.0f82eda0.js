import{p as n,m as u,x as d,f as l,o as i,d as p,y as f}from"./app.589eac8f.js";const k=["value"],h={__name:"Checkbox",props:{checked:{type:[Array,Boolean],default:!1},value:{type:[String,Number],default:null}},emits:["update:checked"],setup(o,{emit:r}){const s=o,e=n({get(){return s.checked},set(t){r("update:checked",t)}});return(t,a)=>u((i(),p("input",{type:"checkbox",value:o.value,"onUpdate:modelValue":a[0]||(a[0]=c=>f(e)?e.value=c:null),class:"rounded border-dark-brand text-blue-brand shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"},null,8,k)),[[d,l(e)]])}};export{h as _};
