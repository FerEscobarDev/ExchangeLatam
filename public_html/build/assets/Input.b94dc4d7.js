import{r as s,s as n,o as l,d}from"./app.8677420d.js";const i=["value"],p={__name:"Input",props:["modelValue"],emits:["update:modelValue"],setup(o,{expose:t}){const e=s(null);return n(()=>{e.value.hasAttribute("autofocus")&&e.value.focus()}),t({focus:()=>e.value.focus()}),(a,u)=>(l(),d("input",{class:"text-gray-600 border-dark-brand focus:border-blue-brand focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm h-[38px]",value:o.modelValue,onInput:u[0]||(u[0]=r=>a.$emit("update:modelValue",r.target.value)),ref_key:"input",ref:e},null,40,i))}};export{p as _};
