import{_ as c}from"./Modal.aacc0eec.js";import{o as i,c as n,w as r,a as e,l as o}from"./app.86b8d295.js";const d={class:"bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 rounded-lg"},m={class:"sm:flex sm:items-start"},h=e("div",{class:"mx-auto flex-shrink-0 flex items-center justify-center h-12 w-12 rounded-full bg-red-100 sm:mx-0 sm:h-10 sm:w-10"},[e("svg",{class:"h-6 w-6 text-red-600",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"})])],-1),f={class:"mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left"},x={class:"text-lg"},u={class:"mt-2"},_={class:"px-6 py-4 bg-gray-100 text-right flex justify-end items-center rounded-lg"},b={__name:"ConfirmationModal",props:{show:{type:Boolean,default:!1},maxWidth:{type:String,default:"2xl"},closeable:{type:Boolean,default:!0}},emits:["close"],setup(s,{emit:l}){const a=()=>{l("close")};return(t,p)=>(i(),n(c,{show:s.show,"max-width":s.maxWidth,closeable:s.closeable,onClose:a},{default:r(()=>[e("div",d,[e("div",m,[h,e("div",f,[e("h3",x,[o(t.$slots,"title")]),e("div",u,[o(t.$slots,"content")])])])]),e("div",_,[o(t.$slots,"footer")])]),_:3},8,["show","max-width","closeable"]))}};export{b as _};
