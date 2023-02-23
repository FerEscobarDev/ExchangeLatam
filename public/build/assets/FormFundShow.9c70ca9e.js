import{A as p}from"./AppLayoutAdmin.e99c99a1.js";import{i as f,j as r,o as c,c as h,w as s,L as _,a as e,b as n,t,h as o,d as x,e as b}from"./app.ccfad349.js";import{_ as g}from"./Button.0649b674.js";import{_ as y}from"./Checkbox.ea79c87d.js";import{d as v}from"./dayjs.min.8746b300.js";import{_ as A}from"./_plugin-vue_export-helper.cdc0426e.js";import{r as k}from"./CheckIcon.01f81561.js";import"./index.es.f2285435.js";import"./logoweb.554f3f4d.js";import"./NavLink.79d52f70.js";import"./index.es.4d3c31b3.js";const q=f({props:["dataUser"],components:{AppLayoutAdmin:p,JetCheckbox:y,JetButton:g,CheckIcon:k,Link:_},data(){return{date:v(this.dataUser[0].form_fund.date,"YYYY-MM-DD"),sign:this.dataUser[0].form_fund.sign!==0}},methods:{monthFormat(){return["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiempre","Octubre","Noviembre","Diciembre"][this.date.$M]}}}),C={class:"font-semibold text-xl text-gray-700 leading-tight"},j=o("Dashboard/"),E=o("Perfil Usuario/"),L=o("Verificaci\xF3n/"),w=o(" Origen de Fondos "),F={class:"py-6 w-full"},N={class:"flex mx-auto lg:mr-4"},U={class:"container mx-auto sm:px-6 lg:px-8"},S={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg py-6"},z=e("h1",{class:"text-3xl text-black/75 font-semibold px-3 pb-3 text-center"},"Declaraci\xF3n Origen de Fondos",-1),D={class:"col-span-6"},I={class:"text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"},M=o(" Yo, "),T={class:"text-black/50 font-semibold underline decoration-2"},$=o(", identificado(a) con el documento de identidad No. "),P={class:"text-black/50 font-semibold underline decoration-2"},B=o(" expedido en "),V={class:"text-black/50 font-semibold underline decoration-2"},Y=o(", obrando en nombre propio de manera voluntaria en mi calidad de persona natural y dando certeza de que todo lo aqu\xED consignado es cierto, realizo la siguiente declaraci\xF3n de origen de fondos con el prop\xF3sito de dar cumplimiento a lo se\xF1alado al respecto en las Pol\xEDticas SAGRILAFT/FPADM de EXCHANGELATAM S.A.S. "),G=e("ul",{class:"list-decimal list-inside text-lg md:text-xl text-black/60 font-medium max-w-3xl lg:mx-auto px-4 md:px-8"},[e("li",{class:"mb-2"},[e("span",{class:"text-justify"}," Declaro que los recursos que entrego provienen de actividades l\xEDcitas, de conformidad con la normatividad Colombiana. ")]),e("li",{class:"mb-2"},[e("span",{class:"text-justify"}," Que no admitir\xE9 que terceros efect\xFAen dep\xF3sitos en mis cuentas con fondos provenientes de las actividades il\xEDcitas contempladas en el C\xF3digo Penal Colombiano o en cualquier otra norma que lo adiciones; ni efectuar\xE9 transacciones destinadas a tales actividades o a favor de personas relacionas con las mismas. ")]),e("li",{class:"mb-2"},[e("span",{class:"text-justify"}," Autorizo a resolver cualquier acuerdo, negocio o contrato celebrado con EXCHANGE LATAM S.A.S., en caso de infracci\xF3n de cualquiera de los numerales contenidos en este documento eximiendo a la entidad de toda responsabilidad que se derive por informaci\xF3n err\xF3nea, falsa o inexacta que yo hubiere proporcionado en este documento, o de la violaci\xF3n del mismo. ")]),e("li",{class:"mb-2"},[e("span",{class:"text-justify"}," Autorizo a EXCHANGE LATAM S.A.S. para que, en caso de que lo juzgue necesario, consulte mi informaci\xF3n en listas restrictivas como la Lista del Consejo de Seguridad de las Naciones Unidas, as\xED como en listas OFAC, INTERPOL o FBI. ")])],-1),O={class:"text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"},R={class:"text-black/50 font-semibold underline decoration-2"},J=o(". "),H={class:"text-lg md:text-xl text-black/60 font-medium text-justify px-4 md:px-8 max-w-3xl lg:mx-auto mb-4"},X={class:"flex items-center"},Q=e("span",{class:"px-2 text-black/75"},"Firma electr\xF3nica:",-1),K=o(),W={class:"underline"},Z=e("div",{class:"text-sm font-normal pl-4 mt-2"},' ACEPTACI\xD3N Y FIRMA ELECTR\xD3NICA: Las partes acuerdan que el requisito de firma en el presente documento queda satisfecho y tendr\xE1 plenos efectos jur\xEDdicos con la aceptaci\xF3n electr\xF3nica que el cliente haga con la utilizaci\xF3n de su NIP y/o C\xF3digo y/o Clave y/o imposici\xF3n de huella y/o la utilizaci\xF3n de n\xFAmeros de identificaci\xF3n personal y/o la imposici\xF3n en el presente contrato de su firma manuscrita escaneada y/o la utilizaci\xF3n de sistemas y/o la utilizaci\xF3n de botones de aceptaci\xF3n de tipo "si", "aceptar" o "acepto" y/o la combinaci\xF3n del documento de identidad proporcionado por el cliente con anterioridad a la firma de este documento. Por utilizaci\xF3n de nuestros servicios de ExchangeLatam el CLIENTE acepta que ha leido y aceptado nuestros t\xE9rminos y condiciones de servicio, al igual que las pol\xEDticas de privacidad y SAGRILAFT. En se\xF1al de aceptaci\xF3n de lo expresado, se firma el presente documento mediante la imposici\xF3n de mi firma electr\xF3nica y check in en la aceptaci\xF3n de firma electr\xF3nica en el presente documento. ',-1),ee={key:0,class:"max-w-max mx-auto mb-5"},ae=o(" Finalizar ");function oe(a,d,te,se,ne,ie){const i=r("Link"),l=r("jet-checkbox"),m=r("app-layout-admin");return c(),h(m,{title:"Declaraci\xF3n de fondos"},{header:s(()=>[e("h2",C,[n(i,{href:a.route("admin.dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:s(()=>[j]),_:1},8,["href"]),n(i,{href:a.route("admin.userShow",a.dataUser[0].id),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:s(()=>[E]),_:1},8,["href"]),n(i,{href:a.route("admin.usersVerification",a.dataUser[0].id),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:s(()=>[L]),_:1},8,["href"]),w])]),default:s(()=>[e("div",F,[e("div",N,[e("div",U,[e("div",S,[z,e("div",null,[e("div",D,[e("p",I,[M,e("span",T,t(a.dataUser[0].name+" "+a.dataUser[0].lastname),1),$,e("span",P,t(a.dataUser[0].data_user.doc_num),1),B,e("span",V,t(a.dataUser[0].data_user.expeditionPlace),1),Y]),G,e("p",O,[o(" Bajo la gravedad de juramento manifiesto que los datos aqu\xED consignados obedecen a la realidad, por lo que declaro haber le\xEDdo, entendido y aceptado el presente documento, en constancia firmo a los "+t(a.date.$D)+" d\xEDas del mes de "+t(a.monthFormat())+", del a\xF1o "+t(a.date.$y)+", en la ciudad de ",1),e("span",R,t(a.dataUser[0].form_fund.citySign),1),J]),e("div",H,[e("div",X,[n(l,{readonly:"",disabled:"",name:"sign",id:"sign",class:"ml-4",checked:a.sign,"onUpdate:checked":d[0]||(d[0]=u=>a.sign=u)},null,8,["checked"]),Q,K,e("span",W,t(a.dataUser[0].name+" "+a.dataUser[0].lastname),1)]),Z]),a.$page.props.flash.success?(c(),x("div",ee,[n(i,{disabled:"",href:a.route("verification.create"),class:"text-center inline-flex items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:s(()=>[ae]),_:1},8,["href"])])):b("",!0)])])])])])])]),_:1})}const be=A(q,[["render",oe]]);export{be as default};
