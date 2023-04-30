import{i as w,j as o,o as c,d as u,b as t,w as n,F as k,H as j,L as v,t as x,e as V,a as r,n as y,k as C,h as m}from"./app.86b8d295.js";import{J as $}from"./AuthenticationCard.a0fb4adc.js";import{_ as J}from"./AuthenticationCardLogo.8dbdef0d.js";import{_ as L}from"./Button.cdde5364.js";import{_ as B}from"./Input.3bd03309.js";import{_ as N}from"./Checkbox.3f636d92.js";import{_ as S}from"./Label.1ed744e3.js";import{J as H}from"./ValidationErrors.d0249414.js";import{_ as E}from"./_plugin-vue_export-helper.cdc0426e.js";import"./logoweb.554f3f4d.js";const F=w({components:{Head:j,JetAuthenticationCard:$,JetAuthenticationCardLogo:J,JetButton:L,JetInput:B,JetCheckbox:N,JetLabel:S,JetValidationErrors:H,Link:v},props:{canResetPassword:Boolean,status:String},data(){return{form:this.$inertia.form({email:"",password:"",remember:!1})}},methods:{submit(){this.form.transform(e=>({...e,remember:this.form.remember?"on":""})).post(this.route("login"),{onFinish:()=>this.form.reset("password")})}}}),I={key:0,class:"mb-4 font-medium text-sm text-green-600"},U={class:"mt-4"},A={class:"block mt-4"},R={class:"flex items-center"},q=r("span",{class:"ml-2 text-sm text-gray-600"},"Remember me",-1),z={class:"grid grid-cols-1 items-center mt-4"},D=m(" Iniciar Sesi\xF3n "),M=m(" \xBFOlvidaste tu contrase\xF1a? "),O=m(" \xBFNo te has registrado? ");function P(e,s,T,G,K,Q){const p=o("Head"),_=o("jet-authentication-card-logo"),f=o("jet-validation-errors"),i=o("jet-label"),l=o("jet-input"),b=o("jet-checkbox"),h=o("jet-button"),d=o("Link"),g=o("jet-authentication-card");return c(),u(k,null,[t(p,{title:"Iniciar Sesi\xF3n"}),t(g,null,{logo:n(()=>[t(_)]),default:n(()=>[t(f,{class:"mb-4"}),e.status?(c(),u("div",I,x(e.status),1)):V("",!0),r("form",{onSubmit:s[3]||(s[3]=C((...a)=>e.submit&&e.submit(...a),["prevent"]))},[r("div",null,[t(i,{for:"email",value:"Correo Electr\xF3nico"}),t(l,{id:"email",type:"email",class:"mt-1 block w-full",modelValue:e.form.email,"onUpdate:modelValue":s[0]||(s[0]=a=>e.form.email=a)},null,8,["modelValue"])]),r("div",U,[t(i,{for:"password",value:"Contrase\xF1a"}),t(l,{id:"password",type:"password",class:"mt-1 block w-full",modelValue:e.form.password,"onUpdate:modelValue":s[1]||(s[1]=a=>e.form.password=a)},null,8,["modelValue"])]),r("div",A,[r("label",R,[t(b,{name:"remember",checked:e.form.remember,"onUpdate:checked":s[2]||(s[2]=a=>e.form.remember=a)},null,8,["checked"]),q])]),r("div",z,[t(h,{class:y(["mx-auto mb-4 max-w-max",{"opacity-25":e.form.processing}]),disabled:e.form.processing},{default:n(()=>[D]),_:1},8,["class","disabled"]),t(d,{href:e.route("password.request"),class:"underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-4"},{default:n(()=>[M]),_:1},8,["href"]),t(d,{href:e.route("register"),class:"underline text-sm text-gray-600 hover:text-gray-900 max-w-max mx-auto mb-8"},{default:n(()=>[O]),_:1},8,["href"])])],32)]),_:1})],64)}const ne=E(F,[["render",P]]);export{ne as default};
