import{i as b,j as t,o as i,d as m,b as o,w as r,F as h,H as g,t as j,e as v,a as s,n as $,k as y,h as C}from"./app.589eac8f.js";import{J}from"./AuthenticationCard.cf8d4fbc.js";import{_ as V}from"./AuthenticationCardLogo.1d6a6398.js";import{_ as w}from"./Button.ac5a0a00.js";import{_ as k}from"./Input.88c1abd1.js";import{_ as N}from"./Label.0872f692.js";import{J as B}from"./ValidationErrors.5ebc24ef.js";import{_ as F}from"./_plugin-vue_export-helper.cdc0426e.js";import"./logoweb.554f3f4d.js";const H=b({components:{Head:g,JetAuthenticationCard:J,JetAuthenticationCardLogo:V,JetButton:w,JetInput:k,JetLabel:N,JetValidationErrors:B},props:{status:String},data(){return{form:this.$inertia.form({email:""})}},methods:{submit(){this.form.post(this.route("password.email"))}}}),S=s("div",{class:"mb-4 text-sm text-gray-600"}," \xBFOlvidaste tu contrase\xF1a? No hay problema. Simplemente puedes hacernos saber tu direcci\xF3n de correo electr\xF3nico y te enviaremos un enlace de restablecimiento de contrase\xF1a que te permitir\xE1 elegir una nueva. ",-1),E={key:0,class:"mb-4 font-medium text-sm text-green-600"},x={class:"flex items-center justify-end mt-4"},A=C(" Recuperar contrase\xF1a ");function L(e,a,P,q,z,D){const l=t("Head"),c=t("jet-authentication-card-logo"),d=t("jet-validation-errors"),u=t("jet-label"),p=t("jet-input"),_=t("jet-button"),f=t("jet-authentication-card");return i(),m(h,null,[o(l,{title:"Forgot Password"}),o(f,null,{logo:r(()=>[o(c)]),default:r(()=>[S,e.status?(i(),m("div",E,j(e.status),1)):v("",!0),o(d,{class:"mb-4"}),s("form",{onSubmit:a[1]||(a[1]=y((...n)=>e.submit&&e.submit(...n),["prevent"]))},[s("div",null,[o(u,{for:"email",value:"Correo Electr\xF3nico"}),o(p,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":a[0]||(a[0]=n=>e.form.email=n)},null,8,["modelValue"])]),s("div",x,[o(_,{class:$({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:r(()=>[A]),_:1},8,["class","disabled"])])],32)]),_:1})],64)}const W=F(H,[["render",L]]);export{W as default};
