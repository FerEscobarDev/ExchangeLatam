import{i as p,j as t,o as a,d as s,b as o,w as n,F as h,H as v,L as g,e as b,a as i,n as k,k as j,h as c}from"./app.589eac8f.js";import{J as C}from"./AuthenticationCard.cf8d4fbc.js";import{_ as x}from"./AuthenticationCardLogo.1d6a6398.js";import{_ as y}from"./Button.ac5a0a00.js";import{_ as L}from"./_plugin-vue_export-helper.cdc0426e.js";import"./logoweb.554f3f4d.js";const S=p({components:{Head:v,JetAuthenticationCard:C,JetAuthenticationCardLogo:x,JetButton:y,Link:g},props:{status:String},data(){return{form:this.$inertia.form()}},methods:{submit(){this.form.post(this.route("verification.send"))}},computed:{verificationLinkSent(){return this.status==="verification-link-sent"}}}),$=i("div",{class:"mb-4 text-sm text-gray-600"}," Gracias por registrarte! Antes de comenzar, \xBFpodr\xEDas verificar tu direcci\xF3n de correo electr\xF3nico haciendo clic en el enlace que te acabamos de enviar? Si no recibiste el correo electr\xF3nico, con gusto te enviaremos otro. ",-1),V={key:0,class:"mb-4 font-medium text-sm text-green-600"},w={class:"mt-4 flex items-center justify-between"},B=c(" Reenviar correo de verificaci\xF3n "),H=c("Cerrar Sesi\xF3n");function J(e,r,N,A,E,q){const d=t("Head"),m=t("jet-authentication-card-logo"),l=t("jet-button"),u=t("Link"),f=t("jet-authentication-card");return a(),s(h,null,[o(d,{title:"Email Verification"}),o(f,null,{logo:n(()=>[o(m)]),default:n(()=>[$,e.verificationLinkSent?(a(),s("div",V," Se ha enviado un nuevo enlace de verificaci\xF3n a la direcci\xF3n de correo electr\xF3nico que proporcionaste durante el registro. ")):b("",!0),i("form",{onSubmit:r[0]||(r[0]=j((..._)=>e.submit&&e.submit(..._),["prevent"]))},[i("div",w,[o(l,{class:k({"opacity-25":e.form.processing}),disabled:e.form.processing},{default:n(()=>[B]),_:1},8,["class","disabled"]),o(u,{href:e.route("logout"),method:"post",as:"button",class:"underline text-sm text-gray-600 hover:text-gray-900"},{default:n(()=>[H]),_:1},8,["href"])])],32)]),_:1})],64)}const D=L(S,[["render",J]]);export{D as default};
