import{A as m}from"./AppLayout.71a4ef5c.js";import c from"./UpdatePhoto.41be5f7d.js";import l from"./UpdateData.b2ad7c48.js";import{i as _,j as e,o as u,c as h,w as s,L as f,a as t,b as a,h as r}from"./app.7999cf1f.js";import{_ as b}from"./_plugin-vue_export-helper.cdc0426e.js";import"./index.es.b629d8a8.js";import"./logoweb.554f3f4d.js";import"./NavLink.d6db4fac.js";import"./index.es.4d3c31b3.js";import"./Button.16f645a9.js";import"./Form.89db1bf4.js";import"./Input.fba06755.js";import"./InputError.3c8fe43a.js";import"./Label.1bb1cfa0.js";import"./ActionMessage.7ce5cbfa.js";import"./SecondaryButton.6ad1e4b6.js";import"./Select.0518b346.js";import"./use-resolve-button-type.ff85f682.js";import"./open-closed.0d255475.js";import"./hidden.b8fa9f2a.js";import"./CheckIcon.b1b972e8.js";const g=_({props:["sessions","departaments","cities"],components:{AppLayout:m,UpdatePhoto:c,UpdateData:l,Link:f}}),x={class:"font-semibold text-xl text-gray-700 leading-tight"},v=r("Dashboard/"),w=r("Perfil "),$={class:"py-6 w-full"},k={class:"flex mx-auto lg:mr-4"},y={class:"container mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg"},B={class:"bg-white shadow-xl sm:rounded-lg mt-5 overflow-visible"};function C(o,N,P,V,A,D){const i=e("Link"),p=e("update-photo"),n=e("update-data"),d=e("app-layout");return u(),h(d,{title:"Perfil"},{header:s(()=>[t("h2",x,[a(i,{href:o.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:s(()=>[v]),_:1},8,["href"]),w])]),default:s(()=>[t("div",$,[t("div",k,[t("div",y,[t("div",L,[a(p,{user:o.$page.props.user},null,8,["user"])]),t("div",B,[a(n,{user:o.$page.props.user,departaments:o.departaments,cities:o.cities},null,8,["user","departaments","cities"])])])])])]),_:1})}const tt=b(g,[["render",C]]);export{tt as default};
