import{A as m}from"./AppLayout.4a7b5f7e.js";import p from"./AccountsList.d29391e6.js";import{i as f,j as a,o as t,c,w as o,L as b,a as s,b as i,d,e as _,h as r}from"./app.589eac8f.js";import{_ as x}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.641a99f7.js";import"./logoweb.554f3f4d.js";import"./NavLink.ab443f97.js";import"./index.es.4d3c31b3.js";const h=f({props:["account"],components:{AppLayout:m,AccountsList:p,Link:b}}),g={class:"font-semibold text-xl text-gray-700 leading-tight"},y=r("Dashboard/"),k=r("Datos bancarios "),w={class:"px-3 py-5 md:py-6 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},L=s("h1",{class:"text-2xl text-black/75 font-semibold text-center mb-4"},"Cuenta Bancaria",-1),v={key:0,class:"text-lg md:text-xl text-black/40 font-medium text-justify my-5"},B={key:2,class:"max-w-max mx-auto"},C=r(" Registrar Cuenta Bancaria ");function N(e,V,$,A,j,q){const n=a("Link"),l=a("accounts-list"),u=a("app-layout");return t(),c(u,{title:"Perfil"},{header:o(()=>[s("h2",g,[i(n,{href:e.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:o(()=>[y]),_:1},8,["href"]),k])]),default:o(()=>[s("div",w,[L,e.account==null?(t(),d("p",v," La cuenta bancaria que registres en ExchangeLatam debe estar a tu nombre y ser\xE1 donde recibir\xE1s los fondos de los retiros que realices desde tu broker. ")):_("",!0),e.account?(t(),c(l,{key:1,account:e.account},null,8,["account"])):(t(),d("div",B,[i(n,{href:e.route("accounts.create.user"),class:"inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:o(()=>[C]),_:1},8,["href"])]))])]),_:1})}const G=x(h,[["render",N]]);export{G as default};
