import{i as w,j as d,o as s,c as k,w as l,L as j,a as e,b as i,n as p,t as o,d as a,e as r,m as C,v as S,N as $,k as x,h as c}from"./app.86b8d295.js";import{A as P}from"./AppLayout.3ff4027e.js";import{_ as z}from"./DialogModal.553a4d8f.js";import{_ as D}from"./Button.cdde5364.js";import{_ as U}from"./SecondaryButton.0c699b8e.js";import{l as E,F}from"./index.es.814e9fba.js";import{j as L}from"./index.es.4d3c31b3.js";import{d as V}from"./dayjs.min.e567fb52.js";import{_ as M}from"./_plugin-vue_export-helper.cdc0426e.js";import"./NavLink.1d3d2c28.js";import"./Modal.aacc0eec.js";import"./logoweb.554f3f4d.js";E.add(L);const R=w({components:{AppLayout:P,Link:j,JetDialogModal:z,JetSecondaryButton:U,JetButton:D,FontAwesomeIcon:F},props:["transaction","voucher"],data(){return{voucherShow:!1,voucherExist:this.voucher===null,form:this.$inertia.form({_method:"PUT",voucherUp:null}),voucherPreview:null}},methods:{dateFormat(t){let n=V(t,"YYYY-MM-DD");const m=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];return n.$D+"-"+m[n.$M]+"-"+n.$y},showVoucher(){this.voucherShow=!0},closeModal(){this.voucherShow=!1},submit(){this.$refs.voucherUp&&(this.form.voucherUp=this.$refs.voucherUp.files[0]),this.form.post(this.route("users.voucherUpWalletExchange",this.transaction.id),{onSuccess:()=>this.clearFileInput()})},selectFile(){this.$refs.voucherUp.click()},updateVoucherPreview(){const t=this.$refs.voucherUp.files[0];if(this.voucher,!t)return;const n=new FileReader;n.onload=m=>{this.voucherPreview=m.target.result},n.readAsDataURL(t)},clearFileInput(){var t;(t=this.$refs.voucherUp)!=null&&t.value&&(this.$refs.voucherUp.value=null,this.voucherExist=!1,this.voucherPreview=null)}}}),T={class:"font-semibold text-xl text-gray-700 leading-tight"},A=c("Dashboard/"),B=c("Wallet Exchange/"),N=c("Vista Detallada "),I={class:"px-3 pt-5 md:pt-6 mb-4 lg:mr-4 max-w-full flex flex-col shadow border border-gray-200 sm:rounded-lg bg-white"},J={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min"},W={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center"},Y=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"}," Detalles de la transacci\xF3n ",-1),q={class:"rounded-lg text-dark-brand w-80 flex flex-col items-start"},O={class:"flex justify-between items-center w-full"},G=e("span",{class:"text-sm text-gray-600 mr-2"},"Wallet: ",-1),H={class:"flex justify-between items-center w-full"},K=e("span",{class:"text-sm text-gray-600 mr-2"},"Cuenta: ",-1),Q={class:"text-sm font-semibold text-dark-brand"},X={class:"flex justify-between items-center w-full"},Z=e("span",{class:"text-sm text-gray-600 mr-2"},"Fecha de solicitud: ",-1),ee={class:"text-sm font-semibold text-dark-brand"},te={key:0,class:"flex justify-between items-center w-full"},se=e("span",{class:"text-sm text-gray-600 mr-2"},"Fecha de finalizaci\xF3n: ",-1),ae={class:"text-sm font-semibold text-dark-brand"},oe={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0"},ne={key:0,class:"text-lg text-dark-brand font-semibold mb-2"},le={class:"rounded-lg text-dark-brand w-80 flex flex-col items-start"},ie={class:"flex items-center w-full"},re={class:"text-sm text-gray-600 font-semibold"},ce=e("hr",{scope:"",class:"mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"},null,-1),de={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"},me={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center"},ue=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Detalles de pago",-1),_e={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3"},he={key:0,class:"flex justify-between items-center w-full"},fe=e("span",{class:"text-sm text-gray-600 mr-1"},"Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignaci\xF3n:",-1),pe=[fe],xe={key:1,class:"flex justify-between items-center w-full"},be=e("span",{class:"text-sm text-gray-600 mr-1"},"Debes transferir el monto que deseas vender a la siguiente cuenta de Skrill:",-1),ge=[be],ye={key:0,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"},ve={key:0,class:"flex"},we=e("span",{class:"text-sm text-gray-600 mr-1"},"Gerente: ",-1),ke=e("span",{class:"text-sm font-semibold text-dark-brand"},"Fernando Escobar Bermudez",-1),je=[we,ke],Ce={key:1,class:"font-semibold"},Se={key:2,class:"flex"},$e=e("span",{class:"text-sm text-gray-600 mr-1"},"C\xE9dula: ",-1),Pe=e("span",{class:"text-sm font-semibold text-dark-brand"},"1.111.198.204",-1),ze=[$e,Pe],De={key:3,class:"flex"},Ue=e("span",{class:"text-sm text-gray-600 mr-1"},"NIT: ",-1),Ee=e("span",{class:"text-sm font-semibold text-dark-brand"},"901.422.406",-1),Fe=[Ue,Ee],Le={class:"flex"},Ve=e("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),Me={class:"text-sm font-semibold text-dark-brand"},Re={class:"flex"},Te=e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),Ae={class:"text-sm font-semibold text-dark-brand"},Be={class:"flex mb-2"},Ne=e("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),Ie={class:"text-sm font-semibold text-dark-brand"},Je={key:4,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"},We={key:5,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"},Ye={key:6,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"},qe={key:7,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"},Oe={key:1,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"},Ge=e("span",{class:"flex"},[e("span",{class:"text-sm text-gray-600 mr-1"},"Wallet: "),e("span",{class:"text-sm font-semibold text-dark-brand"},"Skrill")],-1),He=e("span",{class:"flex"},[e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: "),e("span",{class:"text-sm font-semibold text-dark-brand"},"admin@exchangelatam.com")],-1),Ke=[Ge,He],Qe={key:2,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mt-4"},Xe={key:0,class:"flex"},Ze=e("span",{class:"text-sm text-gray-600 mr-1"},"Una vez realices la transferencia desde tu cuenta de skrill registrada haremos el pago a tu cuenta bancaria:",-1),et=[Ze],tt={class:"flex"},st=e("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),at={class:"text-sm font-semibold text-dark-brand"},ot={class:"flex"},nt=e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),lt={class:"text-sm font-semibold text-dark-brand"},it={class:"flex mb-2"},rt=e("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),ct={class:"text-sm font-semibold text-dark-brand"},dt={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"},mt={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-700 mx-auto"},ut={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-red-700 mx-auto"},_t={key:4,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-600 mx-auto"},ht={class:"col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0"},ft=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Resumen de la transacci\xF3n",-1),pt={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center"},xt={class:"flex justify-between items-center w-full"},bt=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto USD: ",-1),gt={class:"font-semibold text-dark-brand"},yt={class:"flex justify-between items-center w-full"},vt=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto COP: ",-1),wt={class:"font-semibold text-dark-brand"},kt={class:"flex justify-between items-center w-full"},jt=e("span",{class:"text-sm text-gray-600 mr-1"},"Impuesto 4x1000: ",-1),Ct={class:"font-semibold text-dark-brand"},St={class:"flex justify-between items-center w-full"},$t=e("span",{class:"text-sm text-gray-600 mr-1"},"Comisi\xF3n: ",-1),Pt={class:"font-semibold text-dark-brand"},zt={class:"flex justify-between items-center w-full"},Dt=e("span",{class:"text-sm text-gray-600 mr-1"},"Impuesto IVA: ",-1),Ut={class:"font-semibold text-dark-brand"},Et={class:"flex justify-between items-center w-full"},Ft=e("span",{class:"text-sm text-gray-600 mr-1"},"Descuento VIP: ",-1),Lt={class:"font-semibold text-dark-brand"},Vt=e("div",{class:"mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"},null,-1),Mt={class:"flex justify-between items-center w-full"},Rt=e("span",{class:"text-base text-dark-brand mr-1"},"Total a pagar COP: ",-1),Tt={class:"font-semibold text-dark-brand"},At=e("div",{class:"mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"},null,-1),Bt={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"},Nt={key:0,class:"col-span-6 flex flex-col justify-between items-center mb-5"},It=c(" Ver Comprobante "),Jt=c(" Comprobante de transferencia "),Wt=["src"],Yt=c(" Cerrar "),qt={key:1,class:"col-span-6 mb-5"},Ot={class:"mb-4"},Gt={key:0,class:"block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center"},Ht=c(),Kt={key:0},Qt={key:1},Xt=c(" Enviar "),Zt={class:"col-span-6 flex flex-col justify-between items-center mt-5 md:mt-0 mb-5"},es=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Aviso",-1),ts={class:"rounded-lg text-dark-brand w-3/4 flex flex-col items-start"},ss={class:"flex items-center w-full"},as={key:0,class:"list-disc"},os=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Realiza la transferencia a la cuenta de Skrill que se muestra en "Detalles de pago". ')],-1),ns=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Realiza la transferencia antes de la media noche antes del vencimiento de la solicitud. ")],-1),ls=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Una vez se confirme la recepci\xF3n de la transferencia a la cuenta de Skrill se realizar\xE1 el pago a tu cuenta bancaria registrada. ")],-1),is=[os,ns,ls],rs={key:1,class:"list-disc"},cs=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Realiza el pago por transferencia o consignaci\xF3n a la cuenta bancaria que se muestra en "Detalles de pago". ')],-1),ds=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Sube el comprobante de la transacci\xF3n seleccionando el archivo y presionando el bot\xF3n "Enviar". ')],-1),ms=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Si consignas en oficina bancaria o cajero electr\xF3nico fuera del departamento del Tolima debes realizarla libre de comisi\xF3n de consignaci\xF3n nacional la cual puedes consultar al cajero. ")],-1),us=[cs,ds,ms];function _s(t,n,m,b,hs,fs){const _=d("Link"),h=d("jet-button"),f=d("jet-secondary-button"),g=d("jet-dialog-modal"),y=d("font-awesome-icon"),v=d("app-layout");return s(),k(v,{title:"Detalle del dep\xF3sito"},{header:l(()=>[e("h2",T,[i(_,{href:t.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:l(()=>[A]),_:1},8,["href"]),i(_,{href:t.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:l(()=>[B]),_:1},8,["href"]),N])]),default:l(()=>[e("div",I,[e("div",J,[e("div",W,[Y,e("div",q,[e("span",O,[G,e("span",{class:p([{"text-rose-800":t.transaction.transactionable.wallet.id===1,"text-green-500":t.transaction.transactionable.wallet.id===2},"text-sm font-semibold"])},o(t.transaction.transactionable.wallet.name),3)]),e("span",H,[K,e("span",Q,o(t.transaction.transactionable.email),1)]),e("span",X,[Z,e("span",ee,o(t.dateFormat(t.transaction.application_date)),1)]),t.transaction.completed_date?(s(),a("span",te,[se,e("span",ae,o(t.dateFormat(t.transaction.completed_date)),1)])):r("",!0)])]),e("div",oe,[t.transaction.comment?(s(),a("h2",ne,"Comentarios")):r("",!0),e("div",le,[e("span",ie,[e("span",re,o(t.transaction.comment),1)])])])]),ce,e("div",de,[e("div",me,[ue,e("div",_e,[t.transaction.type===2?(s(),a("span",he,pe)):(s(),a("span",xe,ge))]),t.transaction.type===2?(s(),a("div",ye,[t.transaction.account_id!==3?(s(),a("span",ve,je)):(s(),a("span",Ce,"ExchangeLatam SAS")),t.transaction.account_id!==3?(s(),a("span",Se,ze)):(s(),a("span",De,Fe)),e("span",Le,[Ve,e("span",Me,o(t.transaction.account.bank.name),1)]),e("span",Re,[Te,e("span",Ae,o(t.transaction.account.number),1)]),e("span",Be,[Ne,e("span",Ie,o(t.transaction.account.type),1)]),t.transaction.status==="Realizado"?(s(),a("span",Je," Transacci\xF3n Realizada ")):t.transaction.status==="Pendiente"?(s(),a("span",We," Pago Pendiente ")):t.transaction.status==="Cancelado"?(s(),a("span",Ye," Transacci\xF3n Rechazada ")):t.transaction.status==="Procesando"?(s(),a("span",qe," Procesando... ")):r("",!0)])):(s(),a("div",Oe,Ke)),t.transaction.type===3?(s(),a("div",Qe,[t.transaction.account_id!==3?(s(),a("span",Xe,et)):r("",!0),e("span",tt,[st,e("span",at,o(t.transaction.account.bank.name),1)]),e("span",ot,[nt,e("span",lt,o(t.transaction.account.number),1)]),e("span",it,[rt,e("span",ct,o(t.transaction.account.type),1)]),t.transaction.status==="Realizado"?(s(),a("span",dt," Transacci\xF3n Realizada ")):t.transaction.status==="Pendiente"?(s(),a("span",mt," Pago Pendiente ")):t.transaction.status==="Cancelado"?(s(),a("span",ut," Transacci\xF3n Rechazada ")):t.transaction.status==="Procesando"?(s(),a("span",_t," Procesando... ")):r("",!0)])):r("",!0)]),e("div",ht,[ft,e("div",pt,[e("span",xt,[bt,e("span",gt,"$ "+o(t.transaction.amount_usd.toLocaleString()),1)]),e("span",yt,[vt,e("span",wt,"$ "+o(t.transaction.amount_cop.toLocaleString()),1)]),e("span",kt,[jt,e("span",Ct,"$ "+o(t.transaction.cuatro_por_mil.toLocaleString()),1)]),e("span",St,[$t,e("span",Pt,"$ "+o(t.transaction.comission.toLocaleString()),1)]),e("span",zt,[Dt,e("span",Ut,"$ "+o(t.transaction.iva.toLocaleString()),1)]),e("span",Et,[Ft,e("span",Lt,"$ "+o(t.transaction.rebate.toLocaleString()),1)]),Vt,e("span",Mt,[Rt,e("span",Tt,"$ "+o(t.transaction.total.toLocaleString()),1)])])])]),At,e("div",Bt,[!t.voucherExist&&t.transaction.type!=3?(s(),a("div",Nt,[i(h,{onClick:t.showVoucher,class:"mx-auto",disabled:t.voucherExist},{default:l(()=>[It]),_:1},8,["onClick","disabled"]),i(g,{show:t.voucherShow,onClose:t.closeModal},{title:l(()=>[Jt]),content:l(()=>[e("img",{src:t.voucher,alt:"No se pudo cargar el comprobante"},null,8,Wt)]),footer:l(()=>[i(f,{onClick:t.closeModal},{default:l(()=>[Yt]),_:1},8,["onClick"])]),_:1},8,["show","onClose"])])):t.voucherExist&&t.transaction.type!=3?(s(),a("div",qt,[C(e("div",Ot,[e("span",{class:"block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto",style:$("background-image: url('"+t.voucherPreview+"');")},null,4),t.voucherPreview?(s(),a("span",Gt,o(t.$refs.voucherUp.files[0].name),1)):r("",!0)],512),[[S,t.voucherPreview]]),e("form",{onSubmit:n[1]||(n[1]=x((...u)=>t.submit&&t.submit(...u),["prevent"])),class:"flex flex-col justify-between items-center"},[e("input",{type:"file",class:"hidden",ref:"voucherUp",onChange:n[0]||(n[0]=(...u)=>t.updateVoucherPreview&&t.updateVoucherPreview(...u))},null,544),i(f,{onClick:x(t.selectFile,["prevent"]),class:"mx-auto mb-4"},{default:l(()=>[i(y,{class:"mr-2",icon:["fas","upload"],size:"sm"}),Ht,t.voucherPreview?(s(),a("span",Kt,"Cambiar")):(s(),a("span",Qt,"Seleccione archivo"))]),_:1},8,["onClick"]),i(h,{class:p({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:l(()=>[Xt]),_:1},8,["class","disabled"])],32)])):r("",!0),e("div",Zt,[es,e("div",ts,[e("span",ss,[t.transaction.type===3?(s(),a("ul",as,is)):(s(),a("ul",rs,us))])])])])])]),_:1})}const Ps=M(R,[["render",_s]]);export{Ps as default};
