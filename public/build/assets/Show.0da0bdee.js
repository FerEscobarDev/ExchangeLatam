import{i as w,j as d,o as s,c as k,w as l,L as C,a as e,b as i,n as p,t as o,d as a,e as c,m as j,v as S,M as $,k as x,h as r}from"./app.7999cf1f.js";import{A as P}from"./AppLayout.71a4ef5c.js";import{_ as z}from"./DialogModal.dcac158a.js";import{_ as D}from"./Button.16f645a9.js";import{_ as U}from"./SecondaryButton.6ad1e4b6.js";import{l as F,F as E}from"./index.es.b629d8a8.js";import{j as L}from"./index.es.4d3c31b3.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./NavLink.d6db4fac.js";import"./Modal.96eea86a.js";import"./logoweb.554f3f4d.js";F.add(L);const R=w({components:{AppLayout:P,Link:C,JetDialogModal:z,JetSecondaryButton:U,JetButton:D,FontAwesomeIcon:E},props:["transaction","voucher"],data(){return{voucherShow:!1,voucherExist:this.voucher===null,form:this.$inertia.form({_method:"PUT",voucherUp:null}),voucherPreview:null}},methods:{dateFormat(t){let n=new Date(t);const m=["Ene","Feb","Mar","Abr","May","Jun","Jul","Ago","Sep","Oct","Nov","Dic"];return n.getDate()+"-"+m[n.getMonth()]+"-"+n.getFullYear()},showVoucher(){this.voucherShow=!0},closeModal(){this.voucherShow=!1},submit(){this.$refs.voucherUp&&(this.form.voucherUp=this.$refs.voucherUp.files[0]),this.form.post(this.route("users.voucherUpWalletExchange",this.transaction.id),{onSuccess:()=>this.clearFileInput()})},selectFile(){this.$refs.voucherUp.click()},updateVoucherPreview(){const t=this.$refs.voucherUp.files[0];if(this.voucher,!t)return;const n=new FileReader;n.onload=m=>{this.voucherPreview=m.target.result},n.readAsDataURL(t)},clearFileInput(){var t;(t=this.$refs.voucherUp)!=null&&t.value&&(this.$refs.voucherUp.value=null,this.voucherExist=!1,this.voucherPreview=null)}}}),M={class:"font-semibold text-xl text-gray-700 leading-tight"},A=r("Dashboard/"),B=r("Wallet Exchange/"),T=r("Vista Detallada "),I={class:"py-6 w-full"},N={class:"flex mx-auto lg:mr-4"},J={class:"container mx-auto sm:px-6 lg:px-8"},W={class:"bg-white shadow-xl sm:rounded-lg flex flex-col"},q={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 mt-5 h-min"},O={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center"},G=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"}," Detalles de la transacci\xF3n ",-1),Y={class:"rounded-lg text-dark-brand w-80 flex flex-col items-start"},H={class:"flex justify-between items-center w-full"},K=e("span",{class:"text-sm text-gray-600 mr-2"},"Wallet: ",-1),Q={class:"flex justify-between items-center w-full"},X=e("span",{class:"text-sm text-gray-600 mr-2"},"Cuenta: ",-1),Z={class:"text-sm font-semibold text-dark-brand"},ee={class:"flex justify-between items-center w-full"},te=e("span",{class:"text-sm text-gray-600 mr-2"},"Fecha de solicitud: ",-1),se={class:"text-sm font-semibold text-dark-brand"},ae={key:0,class:"flex justify-between items-center w-full"},oe=e("span",{class:"text-sm text-gray-600 mr-2"},"Fecha de finalizaci\xF3n: ",-1),ne={class:"text-sm font-semibold text-dark-brand"},le={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center mt-5 md:mt-0"},ie={key:0,class:"text-lg text-dark-brand font-semibold mb-2"},ce={class:"rounded-lg text-dark-brand w-80 flex flex-col items-start"},re={class:"flex items-center w-full"},de={class:"text-sm text-gray-600 font-semibold"},me=e("hr",{scope:"",class:"mx-auto w-4/5 border-0 h-[0.5px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"},null,-1),_e={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"},ue={class:"col-span-6 md:col-span-3 flex flex-col justify-between items-center"},he=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Detalles de pago",-1),fe={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center pb-3"},pe={key:0,class:"flex justify-between items-center w-full"},xe=e("span",{class:"text-sm text-gray-600 mr-1"},"Debes realizar el pago a la siguiente cuenta bancaria por medio de transferencia o consignaci\xF3n:",-1),be=[xe],ge={key:1,class:"flex justify-between items-center w-full"},ye=e("span",{class:"text-sm text-gray-600 mr-1"},"Debes transferir el monto que deseas vender a la siguiente cuenta de Skrill:",-1),ve=[ye],we={key:0,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"},ke={key:0,class:"flex"},Ce=e("span",{class:"text-sm text-gray-600 mr-1"},"Gerente: ",-1),je=e("span",{class:"text-sm font-semibold text-dark-brand"},"Fernando Escobar Bermudez",-1),Se=[Ce,je],$e={key:1,class:"font-semibold"},Pe={key:2,class:"flex"},ze=e("span",{class:"text-sm text-gray-600 mr-1"},"C\xE9dula: ",-1),De=e("span",{class:"text-sm font-semibold text-dark-brand"},"1.111.198.204",-1),Ue=[ze,De],Fe={key:3,class:"flex"},Ee=e("span",{class:"text-sm text-gray-600 mr-1"},"NIT: ",-1),Le=e("span",{class:"text-sm font-semibold text-dark-brand"},"901.422.406",-1),Ve=[Ee,Le],Re={class:"flex"},Me=e("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),Ae={class:"text-sm font-semibold text-dark-brand"},Be={class:"flex"},Te=e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),Ie={class:"text-sm font-semibold text-dark-brand"},Ne={class:"flex mb-2"},Je=e("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),We={class:"text-sm font-semibold text-dark-brand"},qe={key:4,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"},Oe={key:5,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"},Ge={key:6,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"},Ye={key:1,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start"},He=e("span",{class:"flex"},[e("span",{class:"text-sm text-gray-600 mr-1"},"Wallet: "),e("span",{class:"text-sm font-semibold text-dark-brand"},"Skrill")],-1),Ke=e("span",{class:"flex"},[e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: "),e("span",{class:"text-sm font-semibold text-dark-brand"},"admin@exchangelatam.com")],-1),Qe=[He,Ke],Xe={key:2,class:"rounded-lg bg-slate-200 text-dark-brand p-4 w-80 flex flex-col items-start mt-4"},Ze={key:0,class:"flex"},et=e("span",{class:"text-sm text-gray-600 mr-1"},"Una vez realices la transferencia desde tu cuenta de skrill registrada haremos el pago a tu cuenta bancaria:",-1),tt=[et],st={class:"flex"},at=e("span",{class:"text-sm text-gray-600 mr-1"},"Banco: ",-1),ot={class:"text-sm font-semibold text-dark-brand"},nt={class:"flex"},lt=e("span",{class:"text-sm text-gray-600 mr-1"},"Cuenta: ",-1),it={class:"text-sm font-semibold text-dark-brand"},ct={class:"flex mb-2"},rt=e("span",{class:"text-sm text-gray-600 mr-1"},"Tipo de Cuenta: ",-1),dt={class:"text-sm font-semibold text-dark-brand"},mt={key:1,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800 mx-auto"},_t={key:2,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"},ut={key:3,class:"px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-orange-100 text-orange-800 mx-auto"},ht={class:"col-span-6 md:col-span-3 flex flex-col justify-start items-center mt-5 md:mt-0"},ft=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Resumen de la transacci\xF3n",-1),pt={class:"rounded-lg text-dark-brand w-80 flex flex-col items-center"},xt={class:"flex justify-between items-center w-full"},bt=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto USD: ",-1),gt={class:"font-semibold text-dark-brand"},yt={class:"flex justify-between items-center w-full"},vt=e("span",{class:"text-sm text-gray-600 mr-1"},"Monto COP: ",-1),wt={class:"font-semibold text-dark-brand"},kt={class:"flex justify-between items-center w-full"},Ct=e("span",{class:"text-sm text-gray-600 mr-1"},"Impuesto 4x1000: ",-1),jt={class:"font-semibold text-dark-brand"},St={class:"flex justify-between items-center w-full"},$t=e("span",{class:"text-sm text-gray-600 mr-1"},"Comisi\xF3n: ",-1),Pt={class:"font-semibold text-dark-brand"},zt={class:"flex justify-between items-center w-full"},Dt=e("span",{class:"text-sm text-gray-600 mr-1"},"Impuesto IVA: ",-1),Ut={class:"font-semibold text-dark-brand"},Ft={class:"flex justify-between items-center w-full"},Et=e("span",{class:"text-sm text-gray-600 mr-1"},"Descuento VIP: ",-1),Lt={class:"font-semibold text-dark-brand"},Vt=e("div",{class:"mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-5"},null,-1),Rt={class:"flex justify-between items-center w-full"},Mt=e("span",{class:"text-base text-dark-brand mr-1"},"Total a pagar COP: ",-1),At={class:"font-semibold text-dark-brand"},Bt=e("div",{class:"mx-auto w-4/5 border-0 h-[1px] bg-gradient-to-r from-slate-300 via-blue-brand to-slate-300 my-2"},null,-1),Tt={class:"grid grid-cols-6 p-4 mx-auto w-full xl:w-4/5 h-min"},It={key:0,class:"col-span-6 flex flex-col justify-between items-center mb-5"},Nt=r(" Ver Comprobante "),Jt=r(" Comprobante de transferencia "),Wt=["src"],qt=r(" Cerrar "),Ot={key:1,class:"col-span-6 mb-5"},Gt={class:"mb-4"},Yt={key:0,class:"block rounded-lg w-full sm:w-auto mx-auto text-gray-500 text-sm text-center"},Ht=r(),Kt={key:0},Qt={key:1},Xt=r(" Enviar "),Zt={class:"col-span-6 flex flex-col justify-between items-center mt-5 md:mt-0 mb-5"},es=e("h2",{class:"text-lg text-dark-brand font-semibold mb-2"},"Aviso",-1),ts={class:"rounded-lg text-dark-brand w-3/4 flex flex-col items-start"},ss={class:"flex items-center w-full"},as={key:0,class:"list-disc"},os=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Realiza la transferencia a la cuenta de Skrill que se muestra en "Detalles de pago". ')],-1),ns=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Realiza la transferencia antes de la media noche antes del vencimiento de la solicitud. ")],-1),ls=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Una vez se confirme la recepci\xF3n de la transferencia a la cuenta de Skrill se realizar\xE1 el pago a tu cuenta bancaria registrada. ")],-1),is=[os,ns,ls],cs={key:1,class:"list-disc"},rs=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Realiza el pago por transferencia o consignaci\xF3n a la cuenta bancaria que se muestra en "Detalles de pago". ')],-1),ds=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"},' Sube el comprobante de la transacci\xF3n seleccionando el archivo y presionando el bot\xF3n "Enviar". ')],-1),ms=e("li",null,[e("span",{class:"text-sm text-orange-700 font-semibold text-center"}," Si consignas en oficina bancaria o cajero electr\xF3nico fuera del departamento del Tolima debes realizarla libre de comisi\xF3n de consignaci\xF3n nacional la cual puedes consultar al cajero. ")],-1),_s=[rs,ds,ms];function us(t,n,m,b,hs,fs){const u=d("Link"),h=d("jet-button"),f=d("jet-secondary-button"),g=d("jet-dialog-modal"),y=d("font-awesome-icon"),v=d("app-layout");return s(),k(v,{title:"Detalle del dep\xF3sito"},{header:l(()=>[e("h2",M,[i(u,{href:t.route("dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:l(()=>[A]),_:1},8,["href"]),i(u,{href:t.route("users.indexWalletExchange"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:l(()=>[B]),_:1},8,["href"]),T])]),default:l(()=>[e("div",I,[e("div",N,[e("div",J,[e("div",W,[e("div",q,[e("div",O,[G,e("div",Y,[e("span",H,[K,e("span",{class:p([{"text-rose-800":t.transaction.transactionable.wallet.id===1,"text-green-500":t.transaction.transactionable.wallet.id===2},"text-sm font-semibold"])},o(t.transaction.transactionable.wallet.name),3)]),e("span",Q,[X,e("span",Z,o(t.transaction.transactionable.email),1)]),e("span",ee,[te,e("span",se,o(t.dateFormat(t.transaction.application_date)),1)]),t.transaction.completed_date?(s(),a("span",ae,[oe,e("span",ne,o(t.dateFormat(t.transaction.completed_date)),1)])):c("",!0)])]),e("div",le,[t.transaction.comment?(s(),a("h2",ie,"Comentarios")):c("",!0),e("div",ce,[e("span",re,[e("span",de,o(t.transaction.comment),1)])])])]),me,e("div",_e,[e("div",ue,[he,e("div",fe,[t.transaction.type===2?(s(),a("span",pe,be)):(s(),a("span",ge,ve))]),t.transaction.type===2?(s(),a("div",we,[t.transaction.account_id!==3?(s(),a("span",ke,Se)):(s(),a("span",$e,"ExchangeLatam SAS")),t.transaction.account_id!==3?(s(),a("span",Pe,Ue)):(s(),a("span",Fe,Ve)),e("span",Re,[Me,e("span",Ae,o(t.transaction.account.bank.name),1)]),e("span",Be,[Te,e("span",Ie,o(t.transaction.account.number),1)]),e("span",Ne,[Je,e("span",We,o(t.transaction.account.type),1)]),t.transaction.status==="Realizado"?(s(),a("span",qe," Pago Realizado ")):t.transaction.status==="Pendiente"?(s(),a("span",Oe," Procesando ... ")):t.transaction.status==="Cancelado"?(s(),a("span",Ge," Transacci\xF3n Rechazada ")):c("",!0)])):(s(),a("div",Ye,Qe)),t.transaction.type===3?(s(),a("div",Xe,[t.transaction.account_id!==3?(s(),a("span",Ze,tt)):c("",!0),e("span",st,[at,e("span",ot,o(t.transaction.account.bank.name),1)]),e("span",nt,[lt,e("span",it,o(t.transaction.account.number),1)]),e("span",ct,[rt,e("span",dt,o(t.transaction.account.type),1)]),t.transaction.status==="Realizado"?(s(),a("span",mt," Pago Realizado ")):t.transaction.status==="Pendiente"?(s(),a("span",_t," Procesando ... ")):t.transaction.status==="Cancelado"?(s(),a("span",ut," Transacci\xF3n Rechazada ")):c("",!0)])):c("",!0)]),e("div",ht,[ft,e("div",pt,[e("span",xt,[bt,e("span",gt,"$ "+o(t.transaction.amount_usd.toLocaleString()),1)]),e("span",yt,[vt,e("span",wt,"$ "+o(t.transaction.amount_cop.toLocaleString()),1)]),e("span",kt,[Ct,e("span",jt,"$ "+o(t.transaction.cuatro_por_mil.toLocaleString()),1)]),e("span",St,[$t,e("span",Pt,"$ "+o(t.transaction.comission.toLocaleString()),1)]),e("span",zt,[Dt,e("span",Ut,"$ "+o(t.transaction.iva.toLocaleString()),1)]),e("span",Ft,[Et,e("span",Lt,"$ "+o(t.transaction.rebate.toLocaleString()),1)]),Vt,e("span",Rt,[Mt,e("span",At,"$ "+o(t.transaction.total.toLocaleString()),1)])])])]),Bt,e("div",Tt,[!t.voucherExist&&t.transaction.type!=3?(s(),a("div",It,[i(h,{onClick:t.showVoucher,class:"mx-auto",disabled:t.voucherExist},{default:l(()=>[Nt]),_:1},8,["onClick","disabled"]),i(g,{show:t.voucherShow,onClose:t.closeModal},{title:l(()=>[Jt]),content:l(()=>[e("img",{src:t.voucher,alt:"No se pudo cargar el comprobante"},null,8,Wt)]),footer:l(()=>[i(f,{onClick:t.closeModal},{default:l(()=>[qt]),_:1},8,["onClick"])]),_:1},8,["show","onClose"])])):t.voucherExist&&t.transaction.type!=3?(s(),a("div",Ot,[j(e("div",Gt,[e("span",{class:"block rounded-lg w-32 h-36 bg-cover bg-no-repeat bg-center mx-auto",style:$("background-image: url('"+t.voucherPreview+"');")},null,4),t.voucherPreview?(s(),a("span",Yt,o(t.$refs.voucherUp.files[0].name),1)):c("",!0)],512),[[S,t.voucherPreview]]),e("form",{onSubmit:n[1]||(n[1]=x((..._)=>t.submit&&t.submit(..._),["prevent"])),class:"flex flex-col justify-between items-center"},[e("input",{type:"file",class:"hidden",ref:"voucherUp",onChange:n[0]||(n[0]=(..._)=>t.updateVoucherPreview&&t.updateVoucherPreview(..._))},null,544),i(f,{onClick:x(t.selectFile,["prevent"]),class:"mx-auto mb-4"},{default:l(()=>[i(y,{class:"mr-2",icon:["fas","upload"],size:"sm"}),Ht,t.voucherPreview?(s(),a("span",Kt,"Cambiar")):(s(),a("span",Qt,"Seleccione archivo"))]),_:1},8,["onClick"]),i(h,{class:p({"opacity-25":t.form.processing}),disabled:t.form.processing},{default:l(()=>[Xt]),_:1},8,["class","disabled"])],32)])):c("",!0),e("div",Zt,[es,e("div",ts,[e("span",ss,[t.transaction.type===3?(s(),a("ul",as,is)):(s(),a("ul",cs,_s))])])])])])])])])]),_:1})}const $s=V(R,[["render",us]]);export{$s as default};
