import{i as b,H as k,L as y,j as r,o as l,d as c,b as s,w as o,a as t,h as a,t as x,k as D,n as p,l as f,e as j}from"./app.86b8d295.js";import{l as $,f as C,J as N,_ as S,F as L}from"./index.es.814e9fba.js";import{J as W,a as A,b as B,_ as E,c as J}from"./NavLink.1d3d2c28.js";import{f as M,a as V,b as z,c as F}from"./index.es.4d3c31b3.js";import{_ as H}from"./_plugin-vue_export-helper.cdc0426e.js";$.add(M,C,V,z,F);const P=b({props:{title:String,description:String},components:{Head:k,JetApplicationMark:N,JetBanner:W,JetDropdownSidebar:A,JetDropdownLinkSidebar:B,JetNavLink:E,JetNavLinkSidebar:J,JetResponsiveNavLink:S,Link:y,FontAwesomeIcon:L},data(){return{showingNavigationDropdown:!1,url:location.origin}},methods:{switchToTeam(e){this.$inertia.put(route("current-team.update"),{team_id:e.id},{preserveState:!1})},logout(){this.$inertia.post(route("logout"))},activeWalletExchange(){return!!(route().current("users.indexWalletExchange")||route().current("users.createWalletExchangeDeposit")||route().current("users.createWalletExchangeWithdrawal")||route().current("users.showWalletExchange"))},activeWithdrawals(){return!!(route().current("users.withdrawals")||route().current("withdrawal.show"))},activeDeposits(){return!!(route().current("users.deposits")||route().current("deposit.create")||route().current("deposit.show"))},activeVerification(){return!!(route().current("verification.create")||route().current("formFund.create")||route().current("formKnowledgeClient.create")||route().current("formKnowledgeClient.show")||route().current("formFund.show"))},activeAccounts(){return!!(route().current("accounts.index.user")||route().current("accounts.create.user"))},openDropdown(){return!!(route().current("user.edit")||this.activeVerification()||this.activeAccounts()||route().current("users.changePassword"))}}}),T=["content"],K={class:"bg-dark-brand rounded-lg h-full w-full p-1"},R={class:"flex items-center content-center mx-auto h-16"},I=t("div",{class:"bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[0.5px] my-1"},null,-1),U={class:"mx-3 relative py-2"},q={class:"w-10"},G={class:"flex items-center text-sm"},O=["src","alt"],Q=["src","alt"],X={class:"pl-2 w-full"},Y={class:"inline-flex w-full items-center"},Z={type:"button",class:"flex justify-between items-center w-full py-2 text-base leading-4 font-medium text-gray-300 transition"},ee=t("svg",{class:"ml-2 -mr-0.5 h-4 w-4",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor"},[t("path",{"fill-rule":"evenodd",d:"M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z","clip-rule":"evenodd"})],-1),te=a(" Perfil "),se=a(" Verificar Cuenta "),oe=a(" Datos Bancarios "),re=t("div",{class:"bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[1px] my-1"},null,-1),ae=a(" Cambiar Contrase\xF1a "),ne=a(" Cerrar Sesi\xF3n "),ie=t("div",{class:"bg-gradient-to-r from-dark-brand via-slate-300 to-dark-brand h-[1px] my-1"},null,-1),le={class:"mx-3 relative py-2"},ce=t("span",null,"Dashboard",-1),de=t("span",null,"Dep\xF3sitos a Broker",-1),ue=t("span",null,"Retiros de Broker",-1),pe=t("span",null,"Wallets Exchange",-1),he={class:"bg-gray-100 pt-4 lg:ml-72 min-h-screen"},fe={class:"bg-transparent w-full rounded-md"},me={class:"px-4 sm:px-6 lg:px-8"},ge={class:"flex justify-between h-16"},ve={class:"flex items-center"},we={key:0,class:"hidden lg:block"},_e={class:"max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8"},be={class:"-mr-2 flex items-center lg:hidden"},ke={class:"h-6 w-6",stroke:"currentColor",fill:"none",viewBox:"0 0 24 24"},ye={class:"flex items-center ml-6"},xe={class:"static mr-2"},De=t("div",{class:"ml-3 absolute top-7"},[t("div",{class:"flex h-5 w-5"},[t("span",{class:"rounded-full h-5 w-5 bg-yellow-brand bg-opacity-60 text-sm text-black flex items-center pt-0 pb-[3px] justify-center"}," 0 ")])],-1);function je(e,d,$e,Ce,Ne,Se){const m=r("Head"),g=r("jet-application-mark"),v=r("Link"),n=r("jet-dropdown-link-sidebar"),w=r("jet-dropdown-sidebar"),i=r("font-awesome-icon"),u=r("jet-nav-link-sidebar"),_=r("jet-banner");return l(),c("div",null,[s(m,{title:e.title},{default:o(()=>[t("meta",{name:"description",content:e.description},null,8,T)]),_:1},8,["title"]),t("aside",{class:p([{"block p-2 pr-0 w-64":e.showingNavigationDropdown,"hidden lg:block":!e.showingNavigationDropdown},"bg-gray-100 h-screen sm:w-72 sm:p-4 float-left lg:fixed overflow-hidden"])},[t("div",K,[t("div",R,[s(v,{class:"mx-auto",href:e.route("company.welcome")},{default:o(()=>[s(g,{class:"block h-12 w-auto"})]),_:1},8,["href"])]),I,t("div",U,[s(w,{width:"full",align:"center",contentClasses:"bg-transparent",openSide:e.openDropdown()},{trigger:o(()=>[t("div",q,[t("button",G,[e.$page.props.user.picture?(l(),c("img",{key:0,class:"h-8 w-8 rounded-full object-cover",src:e.url+"/storage/"+e.$page.props.user.picture,alt:e.$page.props.user.name},null,8,O)):(l(),c("img",{key:1,class:"h-8 w-8 rounded-full object-cover",src:e.$page.props.user.profile_photo_url,alt:e.$page.props.user.name},null,8,Q))])]),t("div",X,[t("span",Y,[t("button",Z,[a(x(e.$page.props.user.name.split(" ",1)+" "+e.$page.props.user.lastname.split(" ",1))+" ",1),ee])])])]),content:o(()=>[s(n,{href:e.route("user.edit"),active:e.route().current("user.edit")},{default:o(()=>[te]),_:1},8,["href","active"]),s(n,{href:e.route("verification.create"),active:e.activeVerification()},{default:o(()=>[se]),_:1},8,["href","active"]),s(n,{href:e.route("accounts.index.user"),active:e.activeAccounts()},{default:o(()=>[oe]),_:1},8,["href","active"]),re,t("form",{onSubmit:d[0]||(d[0]=D((...h)=>e.logout&&e.logout(...h),["prevent"]))},[s(n,{href:e.route("users.changePassword"),active:e.route().current("users.changePassword")},{default:o(()=>[ae]),_:1},8,["href","active"]),s(n,{as:"button"},{default:o(()=>[ne]),_:1})],32)]),_:1},8,["openSide"])]),ie,t("div",le,[s(u,{href:e.route("dashboard"),active:e.route().current("dashboard")},{default:o(()=>[s(i,{class:"text-gray-300 ml-2 mr-4 h-8",icon:["fab","microsoft"],size:"lg"}),ce]),_:1},8,["href","active"]),s(u,{href:e.route("users.deposits"),active:e.activeDeposits()},{default:o(()=>[s(i,{class:"text-gray-300 ml-2 mr-4 h-8",icon:["fas","arrow-circle-up"],size:"lg"}),de]),_:1},8,["href","active"]),s(u,{href:e.route("users.withdrawals"),active:e.activeWithdrawals()},{default:o(()=>[s(i,{class:"text-gray-300 ml-2 mr-4 h-8",icon:["fas","arrow-circle-down"],size:"lg"}),ue]),_:1},8,["href","active"]),s(u,{href:e.route("users.indexWalletExchange"),active:e.activeWalletExchange()},{default:o(()=>[s(i,{class:"text-gray-300 ml-2 mr-4 h-8",icon:["fas","exchange-alt"],size:"lg"}),pe]),_:1},8,["href","active"])])])],2),t("div",he,[t("nav",fe,[t("div",me,[t("div",ge,[t("div",ve,[e.$slots.header?(l(),c("div",we,[t("div",_e,[f(e.$slots,"header")])])):j("",!0),t("div",be,[t("button",{onClick:d[1]||(d[1]=h=>e.showingNavigationDropdown=!e.showingNavigationDropdown),class:"inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition"},[(l(),c("svg",ke,[t("path",{class:p({hidden:e.showingNavigationDropdown,"inline-flex":!e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 12h16M4 18h16"},null,2),t("path",{class:p({hidden:!e.showingNavigationDropdown,"inline-flex":e.showingNavigationDropdown}),"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"},null,2)]))])])]),t("div",ye,[t("div",xe,[s(i,{class:"text-gray-600",icon:["fas","bell"],size:"lg"}),De])])])])]),t("main",{class:p([{hidden:e.showingNavigationDropdown},"md:block overflow-y-auto min-h-[90vh]"])},[s(_),f(e.$slots,"default")],2)])])}const Je=H(P,[["render",je]]);export{Je as A};
