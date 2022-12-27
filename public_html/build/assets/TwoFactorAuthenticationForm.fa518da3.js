import{_ as x}from"./ActionSection.29ad71f5.js";import{_ as $}from"./Button.8a46fbb0.js";import{r as k,Q as S,o as s,d as r,a,l as T,b as n,w as o,h as i,t as h,P as j,n as b,J as R,i as A,j as l,c as g,e as u,F as P,g as B}from"./app.8677420d.js";import{_ as V}from"./DialogModal.eb6355a6.js";import{_ as E}from"./Input.b94dc4d7.js";import{_ as J}from"./InputError.30e67f69.js";import{_ as F}from"./SecondaryButton.6caf7ba9.js";import{_ as q}from"./DangerButton.78149aa3.js";import{_ as N}from"./_plugin-vue_export-helper.cdc0426e.js";import"./SectionTitle.71eb5069.js";import"./Modal.a6eac4dd.js";const Q={class:"mt-4"},D=i(" Cancel "),K={__name:"ConfirmsPassword",props:{title:{type:String,default:"Confirm Password"},content:{type:String,default:"For your security, please confirm your password to continue."},button:{type:String,default:"Confirm"}},emits:["confirmed"],setup(e,{emit:w}){const m=k(!1),t=S({password:"",error:"",processing:!1}),f=k(null),v=()=>{axios.get(route("password.confirmation")).then(d=>{d.data.confirmed?w("confirmed"):(m.value=!0,setTimeout(()=>f.value.focus(),250))})},p=()=>{t.processing=!0,axios.post(route("password.confirm"),{password:t.password}).then(()=>{t.processing=!1,c(),R().then(()=>w("confirmed"))}).catch(d=>{t.processing=!1,t.error=d.response.data.errors.password[0],f.value.focus()})},c=()=>{m.value=!1,t.password="",t.error=""};return(d,_)=>(s(),r("span",null,[a("span",{onClick:v},[T(d.$slots,"default")]),n(V,{show:m.value,onClose:c},{title:o(()=>[i(h(e.title),1)]),content:o(()=>[i(h(e.content)+" ",1),a("div",Q,[n(E,{ref_key:"passwordInput",ref:f,modelValue:t.password,"onUpdate:modelValue":_[0]||(_[0]=y=>t.password=y),type:"password",class:"mt-1 block w-3/4",placeholder:"Password",onKeyup:j(p,["enter"])},null,8,["modelValue","onKeyup"]),n(J,{message:t.error,class:"mt-2"},null,8,["message"])])]),footer:o(()=>[n(F,{onClick:c},{default:o(()=>[D]),_:1}),n($,{class:b(["ml-3",{"opacity-25":t.processing}]),disabled:t.processing,onClick:p},{default:o(()=>[i(h(e.button),1)]),_:1},8,["class","disabled"])]),_:1},8,["show"])]))}},L=A({components:{JetActionSection:x,JetButton:$,JetConfirmsPassword:K,JetDangerButton:q,JetSecondaryButton:F},data(){return{enabling:!1,disabling:!1,qrCode:null,recoveryCodes:[]}},methods:{enableTwoFactorAuthentication(){this.enabling=!0,this.$inertia.post("/user/two-factor-authentication",{},{preserveScroll:!0,onSuccess:()=>Promise.all([this.showQrCode(),this.showRecoveryCodes()]),onFinish:()=>this.enabling=!1})},showQrCode(){return axios.get("/user/two-factor-qr-code").then(e=>{this.qrCode=e.data.svg})},showRecoveryCodes(){return axios.get("/user/two-factor-recovery-codes").then(e=>{this.recoveryCodes=e.data})},regenerateRecoveryCodes(){axios.post("/user/two-factor-recovery-codes").then(e=>{this.showRecoveryCodes()})},disableTwoFactorAuthentication(){this.disabling=!0,this.$inertia.delete("/user/two-factor-authentication",{preserveScroll:!0,onSuccess:()=>this.disabling=!1})}},computed:{twoFactorEnabled(){return!this.enabling&&this.$page.props.user.two_factor_enabled}}}),M=i(" Two Factor Authentication "),Y=i(" Add additional security to your account using two factor authentication. "),H={key:0,class:"text-lg font-medium text-gray-900"},I={key:1,class:"text-lg font-medium text-gray-900"},z=a("div",{class:"mt-3 max-w-xl text-sm text-gray-600"},[a("p",null," When two factor authentication is enabled, you will be prompted for a secure, random token during authentication. You may retrieve this token from your phone's Google Authenticator application. ")],-1),G={key:2},U={key:0},W=a("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[a("p",{class:"font-semibold"}," Two factor authentication is now enabled. Scan the following QR code using your phone's authenticator application. ")],-1),O=["innerHTML"],X={key:1},Z=a("div",{class:"mt-4 max-w-xl text-sm text-gray-600"},[a("p",{class:"font-semibold"}," Store these recovery codes in a secure password manager. They can be used to recover access to your account if your two factor authentication device is lost. ")],-1),ee={class:"grid gap-1 max-w-xl mt-4 px-4 py-4 font-mono text-sm bg-gray-100 rounded-lg"},oe={class:"mt-5"},te={key:0},se=i(" Enable "),ne={key:1},ae=i(" Regenerate Recovery Codes "),re=i(" Show Recovery Codes "),ie=i(" Disable ");function ce(e,w,m,t,f,v){const p=l("jet-button"),c=l("jet-confirms-password"),d=l("jet-secondary-button"),_=l("jet-danger-button"),y=l("jet-action-section");return s(),g(y,null,{title:o(()=>[M]),description:o(()=>[Y]),content:o(()=>[e.twoFactorEnabled?(s(),r("h3",H," You have enabled two factor authentication. ")):(s(),r("h3",I," You have not enabled two factor authentication. ")),z,e.twoFactorEnabled?(s(),r("div",G,[e.qrCode?(s(),r("div",U,[W,a("div",{class:"mt-4",innerHTML:e.qrCode},null,8,O)])):u("",!0),e.recoveryCodes.length>0?(s(),r("div",X,[Z,a("div",ee,[(s(!0),r(P,null,B(e.recoveryCodes,C=>(s(),r("div",{key:C},h(C),1))),128))])])):u("",!0)])):u("",!0),a("div",oe,[e.twoFactorEnabled?(s(),r("div",ne,[n(c,{onConfirmed:e.regenerateRecoveryCodes},{default:o(()=>[e.recoveryCodes.length>0?(s(),g(d,{key:0,class:"mr-3"},{default:o(()=>[ae]),_:1})):u("",!0)]),_:1},8,["onConfirmed"]),n(c,{onConfirmed:e.showRecoveryCodes},{default:o(()=>[e.recoveryCodes.length===0?(s(),g(d,{key:0,class:"mr-3"},{default:o(()=>[re]),_:1})):u("",!0)]),_:1},8,["onConfirmed"]),n(c,{onConfirmed:e.disableTwoFactorAuthentication},{default:o(()=>[n(_,{class:b({"opacity-25":e.disabling}),disabled:e.disabling},{default:o(()=>[ie]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])])):(s(),r("div",te,[n(c,{onConfirmed:e.enableTwoFactorAuthentication},{default:o(()=>[n(p,{type:"button",class:b({"opacity-25":e.enabling}),disabled:e.enabling},{default:o(()=>[se]),_:1},8,["class","disabled"])]),_:1},8,["onConfirmed"])]))])]),_:1})}const be=N(L,[["render",ce]]);export{be as default};
