import{A as h}from"./AppLayoutAdmin.979e8156.js";import{_ as y}from"./Button.8a46fbb0.js";import{i as b,j as _,o as s,c as g,w as r,L as k,a as e,b as i,d as n,t as a,e as m,g as x,F as f,n as p,h as c}from"./app.8677420d.js";import{l as w,F as v}from"./index.es.13188a0e.js";import{f as j,a as C}from"./index.es.3761b366.js";import{k as S,l as z,m as D}from"./index.es.4d3c31b3.js";import{_ as V}from"./_plugin-vue_export-helper.cdc0426e.js";import"./NavLink.ec8831f3.js";import"./logoweb.554f3f4d.js";w.add(j,C,S,z,D);const A=b({props:["client","sessions","departaments","cities","account","transactions","roles"],components:{AppLayoutAdmin:h,Button:y,Link:k,FontAwesomeIcon:v},methods:{transactionType(t){if(t.type===0)return"Retiro";if(t.type===1)return"Dep\xF3sito";if(t.type===2)return"Compra de saldo";if(t.type===3)return"Venta de saldo"}}}),I={class:"font-semibold text-xl text-gray-700 leading-tight"},E=c("Dashboard/"),N=c("Perfil Usuario "),B={class:"py-6 w-full"},F={class:"flex mx-auto lg:mr-4"},T={class:"container mx-auto sm:px-6 lg:px-8"},L={class:"bg-white overflow-hidden shadow-xl sm:rounded-lg grid grid-cols-12 gap-x-2 gap-y-10 p-5"},P={class:"col-span-12"},$={class:"flex flex-col md:flex-row items-center justify-center md:justify-around"},q={class:"flex items-center justify-start"},U={key:0},R=["src"],W={key:1},K=["src","alt"],M={key:2,class:"flex flex-col ml-5"},G={class:"text-xl md:text-2xl text-black/75 font-semibold"},H={key:3,class:"flex flex-col ml-5"},J={class:"text-xl md:text-2xl text-black/75 font-semibold"},O={key:0,class:"text-black/50 font-medium"},Q={key:1,class:"text-amber-500 font-medium"},X={class:"flex md:flex-col gap-4 mt-6 md:mt-0"},Y=c(" Transacciones "),Z=c(" Verificaci\xF3n "),ee={class:"col-span-12 md:col-span-4 md:col-start-2 px-10 md:px-0 xl:px-5"},te={class:"text-dark-brand w-full flex flex-col items-between"},se=e("h2",{class:"text-2xl text-center font-semibold text-dark-brand mb-2"},"Datos Personales",-1),ne={class:"flex justify-between items-center"},oe=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Nombres: ",-1),ae={class:"text-md text-gray-600"},ie={class:"flex justify-between items-center"},re=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Apellidos: ",-1),de={class:"text-md text-gray-600"},ce={class:"flex justify-between items-center"},le=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Documento: ",-1),me={key:0},pe={key:1},_e={key:0,class:"text-md text-gray-600"},xe={key:1,class:"text-md text-gray-600"},fe={key:2,class:"text-md text-gray-600"},ue={class:"flex justify-between items-center"},he=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"N\xFAmero: ",-1),ye={key:0},be={key:1},ge={class:"text-md text-gray-600"},ke={class:"flex justify-between items-center"},we=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Email: ",-1),ve={class:"text-md text-gray-600"},je={class:"flex justify-between items-center"},Ce=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Celular: ",-1),Se={class:"text-md text-gray-600"},ze={class:"flex justify-between items-center"},De=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Departamento: ",-1),Ve={key:0},Ae={key:1},Ie={class:"text-md text-gray-600"},Ee={class:"flex justify-between items-center"},Ne=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Ciudad: ",-1),Be={key:0},Fe={key:1},Te={class:"text-md text-gray-600"},Le={class:"flex justify-between items-center"},Pe=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Direcci\xF3n: ",-1),$e={key:0},qe={key:1},Ue={class:"text-md text-gray-600"},Re={class:"flex justify-center items-center mt-5"},We=c(" Editar "),Ke={class:"col-span-12 md:col-span-4 md:col-start-8 px-10 md:px-0 xl:px-5"},Me={key:0,class:"text-dark-brand w-full flex flex-col items-between"},Ge=e("h2",{class:"text-2xl text-center font-semibold text-dark-brand mb-2"},"Datos Bancarios",-1),He={class:"flex justify-between items-center"},Je=e("span",{class:"text-md font-semibold text-dark-brand mr-2 w-16"},"Banco: ",-1),Oe={class:"text-md text-gray-600"},Qe={class:"flex justify-between items-center"},Xe=e("span",{class:"text-md font-semibold text-dark-brand mr-2 w-16"},"Numero: ",-1),Ye={class:"text-md text-gray-600"},Ze={class:"flex justify-between items-center"},et=e("span",{class:"text-md font-semibold text-dark-brand mr-2 w-16"},"Tipo: ",-1),tt={class:"text-md text-gray-600"},st={class:"flex justify-between items-center"},nt=e("span",{class:"text-md font-semibold text-dark-brand mr-2 w-16"},"Inscrita: ",-1),ot={class:"text-md text-gray-600"},at={class:"flex justify-center items-center mt-5"},it=c(" Administrar "),rt={key:1,class:"text-dark-brand w-full flex flex-col items-between"},dt=e("h2",{class:"text-2xl text-center font-semibold text-dark-brand mb-2"},"Datos Bancarios",-1),ct=e("span",{class:"flex justify-center items-center w-full"},[e("span",{class:"text-lg text-gray-600 my-10 w-full text-center"},"Sin datos bancarios registrados")],-1),lt={class:"flex justify-center items-center mt-5"},mt=c(" Administrar "),pt={class:"text-dark-brand w-full flex flex-col items-between mt-10"},_t=e("h2",{class:"text-2xl text-center font-semibold text-dark-brand mb-2"},"Informaci\xF3n de la Cuenta",-1),xt={class:"flex justify-between items-center"},ft=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Email Verified: ",-1),ut={key:0},ht={key:1},yt={class:"flex justify-between items-center"},bt=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Verified: ",-1),gt={key:0},kt={key:0},wt={key:1},vt={key:2},jt={key:1},Ct={class:"flex justify-between items-center"},St=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Form Cliente: ",-1),zt={key:0},Dt={key:0},Vt={key:1},At={class:"flex justify-between items-center"},It=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Form Fondos: ",-1),Et={key:0},Nt={key:0},Bt={key:1},Ft={key:1},Tt={class:"flex justify-between items-center"},Lt=e("span",{class:"text-md font-semibold text-dark-brand mr-2"},"Roles: ",-1),Pt={class:"text-sm text-gray-600"},$t={class:"col-span-12"},qt=e("h2",{class:"text-2xl text-center font-semibold text-dark-brand mb-2"},"Transacciones Recientes",-1),Ut={class:"w-full divide-y divide-gray-200"},Rt=e("thead",{class:""},[e("tr",null,[e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Tipo "),e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Company "),e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Cuenta "),e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Monto USD "),e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Estado "),e("th",{scope:"col",class:"px-4 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"}," Acciones ")])],-1),Wt={key:0,class:"bg-white divide-y divide-gray-200"},Kt={key:2,class:"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"},Mt={key:3,class:"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"},Gt={class:"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"},Ht={key:4,class:"text-center px-6 py-4 whitespace-nowrap text-sm font-medium"},Jt=c(" Ver detalles "),Ot={key:5,class:"text-center px-6 py-4 whitespace-nowrap text-sm font-medium"},Qt=c(" Ver detalles "),Xt={key:6,class:"text-center px-6 py-4 whitespace-nowrap text-sm font-medium"},Yt=c(" Ver detalles "),Zt={key:1,class:"bg-white divide-y divide-gray-200"},es=e("tr",null,[e("td",{class:"px-6 py-4 w-full text-base text-gray-500 text-center",colspan:"6"},"Sin transacciones")],-1),ts=[es];function ss(t,ns,os,as,is,rs){const l=_("Link"),d=_("font-awesome-icon"),u=_("AppLayoutAdmin");return s(),g(u,{title:"Perfil"},{header:r(()=>[e("h2",I,[i(l,{href:t.route("admin.dashboard"),class:"text-blue-brand-gradient1 font-semibold hover:text-blue-brand"},{default:r(()=>[E]),_:1},8,["href"]),N])]),default:r(()=>[e("div",B,[e("div",F,[e("div",T,[e("div",L,[e("div",P,[e("div",$,[e("div",q,[t.client.picture?(s(),n("div",U,[e("div",null,[e("img",{src:t.$page.props.ziggy.url+"/storage/"+t.client.picture,class:"rounded-full h-28 w-28 object-cover"},null,8,R)])])):(s(),n("div",W,[e("div",null,[e("img",{src:t.client.profile_photo_url,alt:t.client.name,class:"rounded-full h-28 w-28 object-cover"},null,8,K)])])),t.client.data_user===null?(s(),n("div",M,[e("span",G,a(t.client.name+" "+t.client.lastname),1)])):(s(),n("div",H,[e("span",J,a(t.client.name+" "+t.client.lastname),1),t.client.data_user.vip==="no"?(s(),n("span",O,"Cuenta Est\xE1ndar")):(s(),n("span",Q,"Cuenta VIP"))]))]),e("div",X,[i(l,{href:t.route("users.createWalletExchangeDeposit"),class:"inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:r(()=>[Y]),_:1},8,["href"]),i(l,{href:t.route("admin.usersVerification",t.client.id),class:"inline-flex justify-center items-center px-4 py-2 bg-dark-brand border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:ring focus:ring-gray-300 disabled:opacity-25 transition"},{default:r(()=>[Z]),_:1},8,["href"])])])]),e("div",ee,[e("div",te,[se,e("span",ne,[oe,e("span",ae,a(t.client.name),1)]),e("span",ie,[re,e("span",de,a(t.client.lastname),1)]),e("span",ce,[le,t.client.data_user===null?(s(),n("span",me," Sin Informaci\xF3n ")):(s(),n("span",pe,[e("span",null,[t.client.data_user.doc_type===1?(s(),n("span",_e,"C\xE9dula")):t.client.data_user.doc_type===2?(s(),n("span",xe,"C\xE9dula de extranjer\xEDa")):(s(),n("span",fe,"Pasaporte"))])]))]),e("span",ue,[he,t.client.data_user===null?(s(),n("span",ye," Sin Informaci\xF3n ")):(s(),n("span",be,[e("span",ge,a(t.client.data_user.doc_num),1)]))]),e("span",ke,[we,e("span",ve,a(t.client.email),1)]),e("span",je,[Ce,e("span",Se,a(t.client.mobil),1)]),e("span",ze,[De,t.client.data_user===null?(s(),n("span",Ve," Sin Informaci\xF3n ")):(s(),n("span",Ae,[e("span",Ie,a(t.client.data_user.departament),1)]))]),e("span",Ee,[Ne,t.client.data_user===null?(s(),n("span",Be," Sin Informaci\xF3n ")):(s(),n("span",Fe,[e("span",Te,a(t.client.data_user.city),1)]))]),e("span",Le,[Pe,t.client.data_user===null?(s(),n("span",$e," Sin Informaci\xF3n ")):(s(),n("span",qe,[e("span",Ue,a(t.client.data_user.address),1)]))]),e("div",Re,[i(l,{href:t.route("admin.userEdit",t.client.id),class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"},{default:r(()=>[We]),_:1},8,["href"])])])]),e("div",Ke,[t.account!==null?(s(),n("div",Me,[Ge,e("span",He,[Je,e("span",Oe,a(t.account.bank.name),1)]),e("span",Qe,[Xe,e("span",Ye,a(t.account.number),1)]),e("span",Ze,[et,e("span",tt,a(t.account.type),1)]),e("span",st,[nt,e("span",ot,a(t.account.enrolled===1?"Inscrita":"No Inscrita"),1)]),e("div",at,[i(l,{href:t.route("users.createWalletExchangeDeposit"),class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"},{default:r(()=>[it]),_:1},8,["href"])])])):(s(),n("div",rt,[dt,ct,e("div",lt,[i(l,{href:t.route("users.createWalletExchangeDeposit"),class:"inline-flex items-center px-4 py-2 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest bg-orange-500 hover:bg-orange-700 active:bg-orange-900 focus:outline-none focus:border-orange-900 focus:ring focus:ring-orange-300 disabled:opacity-25 transition"},{default:r(()=>[mt]),_:1},8,["href"])])])),e("div",pt,[_t,e("span",xt,[ft,t.client.email_verified_at!==null?(s(),n("span",ut,[i(d,{class:"text-green-400",icon:["far","check-circle"],size:"sm"})])):(s(),n("span",ht,[i(d,{class:"text-red-400",icon:["far","times-circle"],size:"sm"})]))]),e("span",yt,[bt,t.client.requirement_user!==null?(s(),n("span",gt,[t.client.requirement_user.verified===0?(s(),n("span",kt,[i(d,{icon:["fas","user-times"],size:"sm",class:"text-red-400"})])):t.client.requirement_user.verified===1?(s(),n("span",wt,[i(d,{icon:["fas","user-clock"],size:"sm",class:"text-orange-400"})])):(s(),n("span",vt,[i(d,{icon:["fas","user-check"],size:"sm",class:"text-green-400"})]))])):(s(),n("span",jt," Sin Informaci\xF3n "))]),e("span",Ct,[St,t.client.form_knowledge_client!==null?(s(),n("span",zt,[t.client.requirement_user.formKnowledge>0?(s(),n("span",Dt,[i(d,{class:"text-green-400",icon:["far","check-circle"],size:"sm"})])):(s(),n("span",Vt,[i(d,{class:"text-red-400",icon:["far","times-circle"],size:"sm"})]))])):m("",!0)]),e("span",At,[It,t.client.form_fund!==null?(s(),n("span",Et,[t.client.requirement_user.formFunds>0?(s(),n("span",Nt,[i(d,{class:"text-green-400",icon:["far","check-circle"],size:"sm"})])):(s(),n("span",Bt,[i(d,{class:"text-red-400",icon:["far","times-circle"],size:"sm"})]))])):(s(),n("span",Ft,[i(d,{class:"text-red-400",icon:["far","times-circle"],size:"sm"})]))]),e("span",Tt,[Lt,e("span",Pt,[(s(!0),n(f,null,x(t.client.roles,o=>(s(),n("span",null,a(" "+o.name),1))),256))])])])]),e("div",$t,[qt,e("table",Ut,[Rt,t.transactions[0]?(s(),n("tbody",Wt,[(s(!0),n(f,null,x(t.transactions,o=>(s(),n("tr",{key:o.id},[e("td",{class:p([{"text-blue-brand-gradient2":o.type===1,"text-red-400":o.type===0,"text-green-400":o.type===2,"text-purple-400":o.type===3},"px-4 py-4 text-center whitespace-nowrap text-sm"])},a(t.transactionType(o)),3),o.type<2?(s(),n("td",{key:0,class:p([{"text-green-500":o.transactionable.broker_id===1,"text-blue-800":o.transactionable.broker_id===2},"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])},a(o.transactionable.broker_id===1?"FBS":"Pepperstone"),3)):m("",!0),o.type>1?(s(),n("td",{key:1,class:p([{"text-rose-800":o.transactionable.wallet_id===1,"text-green-500":o.transactionable.wallet_id===2},"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500 font-semibold"])},a(o.transactionable.wallet_id===1?"Skrill":"Neteller"),3)):m("",!0),o.type<2?(s(),n("td",Kt,a(o.transactionable.id===1?"No disponible":o.transactionable.number),1)):m("",!0),o.type>1?(s(),n("td",Mt,a(o.transactionable.email),1)):m("",!0),e("td",Gt,a(o.amount_usd),1),e("td",{class:p([{"text-green-500":o.status==="Realizado","text-red-500":o.status==="Cancelado","text-orange-500":o.status==="Pendiente"},"px-4 py-4 text-center whitespace-nowrap text-sm text-gray-500"])},a(o.status),3),o.type===0?(s(),n("td",Ht,[i(l,{href:t.route("admin.withdrawalShow",o.id),class:"text-indigo-600 hover:text-indigo-900"},{default:r(()=>[Jt]),_:2},1032,["href"])])):o.type===1?(s(),n("td",Ot,[i(l,{href:t.route("admin.depositShow",o.id),class:"text-indigo-600 hover:text-indigo-900"},{default:r(()=>[Qt]),_:2},1032,["href"])])):o.type>1?(s(),n("td",Xt,[i(l,{href:t.route("admin.showWalletExchange",o.id),class:"text-indigo-600 hover:text-indigo-900"},{default:r(()=>[Yt]),_:2},1032,["href"])])):m("",!0)]))),128))])):(s(),n("tbody",Zt,ts))])])])])])])]),_:1})}const hs=V(A,[["render",ss]]);export{hs as default};
