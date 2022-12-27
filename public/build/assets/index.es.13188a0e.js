import{_ as ie}from"./logoweb.554f3f4d.js";import{_ as oe}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as W,d as et,p as k,n as yt,f as J,l as bt,c as se,w as fe,L as le,i as lt,z as ce,A as Lt}from"./app.8677420d.js";const ue={},de={src:ie};function me(t,e){return W(),et("img",de)}const On=oe(ue,[["render",me]]),zn={__name:"ResponsiveNavLink",props:{active:Boolean,href:String,as:String},setup(t){const e=t,r=k(()=>e.active?"block pl-3 pr-4 py-2 border-l-4 border-indigo-400 text-base font-medium text-indigo-700 bg-indigo-50 focus:outline-none focus:text-indigo-800 focus:bg-indigo-100 focus:border-indigo-700 transition":"block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition");return(n,a)=>(W(),et("div",null,[t.as=="button"?(W(),et("button",{key:0,class:yt([J(r),"w-full text-left"])},[bt(n.$slots,"default")],2)):(W(),se(J(le),{key:1,href:t.href,class:yt(J(r))},{default:fe(()=>[bt(n.$slots,"default")]),_:3},8,["href","class"]))]))}};/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */function $(t){return typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?$=function(e){return typeof e}:$=function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},$(t)}function he(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function wt(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function ve(t,e,r){return e&&wt(t.prototype,e),r&&wt(t,r),t}function pe(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function d(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{},n=Object.keys(r);typeof Object.getOwnPropertySymbols=="function"&&(n=n.concat(Object.getOwnPropertySymbols(r).filter(function(a){return Object.getOwnPropertyDescriptor(r,a).enumerable}))),n.forEach(function(a){pe(t,a,r[a])})}return t}function Tt(t,e){return be(t)||xe(t,e)||_e()}function ge(t){return ye(t)||we(t)||ke()}function ye(t){if(Array.isArray(t)){for(var e=0,r=new Array(t.length);e<t.length;e++)r[e]=t[e];return r}}function be(t){if(Array.isArray(t))return t}function we(t){if(Symbol.iterator in Object(t)||Object.prototype.toString.call(t)==="[object Arguments]")return Array.from(t)}function xe(t,e){var r=[],n=!0,a=!1,i=void 0;try{for(var o=t[Symbol.iterator](),s;!(n=(s=o.next()).done)&&(r.push(s.value),!(e&&r.length===e));n=!0);}catch(f){a=!0,i=f}finally{try{!n&&o.return!=null&&o.return()}finally{if(a)throw i}}return r}function ke(){throw new TypeError("Invalid attempt to spread non-iterable instance")}function _e(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}var xt=function(){},ct={},Nt={},Oe=null,jt={mark:xt,measure:xt};try{typeof window<"u"&&(ct=window),typeof document<"u"&&(Nt=document),typeof MutationObserver<"u"&&(Oe=MutationObserver),typeof performance<"u"&&(jt=performance)}catch{}var ze=ct.navigator||{},kt=ze.userAgent,_t=kt===void 0?"":kt,K=ct,b=Nt,F=jt;K.document;var ut=!!b.documentElement&&!!b.head&&typeof b.addEventListener=="function"&&typeof b.createElement=="function",Ae=~_t.indexOf("MSIE")||~_t.indexOf("Trident/"),M="___FONT_AWESOME___",nt=16,$t="fa",Rt="svg-inline--fa",Bt="data-fa-i2svg";(function(){try{return!0}catch{return!1}})();var Q={GROUP:"group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Dt=K.FontAwesomeConfig||{};function Ie(t){var e=b.querySelector("script["+t+"]");if(e)return e.getAttribute(t)}function Se(t){return t===""?!0:t==="false"?!1:t==="true"?!0:t}if(b&&typeof b.querySelector=="function"){var Ce=[["data-family-prefix","familyPrefix"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Ce.forEach(function(t){var e=Tt(t,2),r=e[0],n=e[1],a=Se(Ie(r));a!=null&&(Dt[n]=a)})}var Me={familyPrefix:$t,replacementClass:Rt,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0},rt=d({},Me,Dt);rt.autoReplaceSvg||(rt.observeMutations=!1);var g=d({},rt);K.FontAwesomeConfig=g;var P=K||{};P[M]||(P[M]={});P[M].styles||(P[M].styles={});P[M].hooks||(P[M].hooks={});P[M].shims||(P[M].shims=[]);var I=P[M],Pe=[],Ee=function t(){b.removeEventListener("DOMContentLoaded",t),at=1,Pe.map(function(e){return e()})},at=!1;ut&&(at=(b.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(b.readyState),at||b.addEventListener("DOMContentLoaded",Ee));var dt="pending",Ft="settled",H="fulfilled",U="rejected",Le=function(){},Wt=typeof global<"u"&&typeof global.process<"u"&&typeof global.process.emit=="function",Te=typeof setImmediate>"u"?setTimeout:setImmediate,j=[],it;function Ne(){for(var t=0;t<j.length;t++)j[t][0](j[t][1]);j=[],it=!1}function Y(t,e){j.push([t,e]),it||(it=!0,Te(Ne,0))}function je(t,e){function r(a){mt(e,a)}function n(a){B(e,a)}try{t(r,n)}catch(a){n(a)}}function Ht(t){var e=t.owner,r=e._state,n=e._data,a=t[r],i=t.then;if(typeof a=="function"){r=H;try{n=a(n)}catch(o){B(i,o)}}Ut(i,n)||(r===H&&mt(i,n),r===U&&B(i,n))}function Ut(t,e){var r;try{if(t===e)throw new TypeError("A promises callback cannot return that same promise.");if(e&&(typeof e=="function"||$(e)==="object")){var n=e.then;if(typeof n=="function")return n.call(e,function(a){r||(r=!0,e===a?Yt(t,a):mt(t,a))},function(a){r||(r=!0,B(t,a))}),!0}}catch(a){return r||B(t,a),!0}return!1}function mt(t,e){(t===e||!Ut(t,e))&&Yt(t,e)}function Yt(t,e){t._state===dt&&(t._state=Ft,t._data=e,Y($e,t))}function B(t,e){t._state===dt&&(t._state=Ft,t._data=e,Y(Re,t))}function Vt(t){t._then=t._then.forEach(Ht)}function $e(t){t._state=H,Vt(t)}function Re(t){t._state=U,Vt(t),!t._handled&&Wt&&global.process.emit("unhandledRejection",t._data,t)}function Be(t){global.process.emit("rejectionHandled",t)}function _(t){if(typeof t!="function")throw new TypeError("Promise resolver "+t+" is not a function");if(!(this instanceof _))throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");this._then=[],je(t,this)}_.prototype={constructor:_,_state:dt,_then:null,_data:void 0,_handled:!1,then:function(e,r){var n={owner:this,then:new this.constructor(Le),fulfilled:e,rejected:r};return(r||e)&&!this._handled&&(this._handled=!0,this._state===U&&Wt&&Y(Be,this)),this._state===H||this._state===U?Y(Ht,n):this._then.push(n),n.then},catch:function(e){return this.then(null,e)}};_.all=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.all().");return new _(function(e,r){var n=[],a=0;function i(f){return a++,function(u){n[f]=u,--a||e(n)}}for(var o=0,s;o<t.length;o++)s=t[o],s&&typeof s.then=="function"?s.then(i(o),r):n[o]=s;a||e(n)})};_.race=function(t){if(!Array.isArray(t))throw new TypeError("You must pass an array to Promise.race().");return new _(function(e,r){for(var n=0,a;n<t.length;n++)a=t[n],a&&typeof a.then=="function"?a.then(e,r):e(a)})};_.resolve=function(t){return t&&$(t)==="object"&&t.constructor===_?t:new _(function(e){e(t)})};_.reject=function(t){return new _(function(e,r){r(t)})};var L=nt,T={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function De(t){if(!(!t||!ut)){var e=b.createElement("style");e.setAttribute("type","text/css"),e.innerHTML=t;for(var r=b.head.childNodes,n=null,a=r.length-1;a>-1;a--){var i=r[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(n=i)}return b.head.insertBefore(e,n),t}}var Fe="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function V(){for(var t=12,e="";t-- >0;)e+=Fe[Math.random()*62|0];return e}function Xt(t){return"".concat(t).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function We(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,'="').concat(Xt(t[r]),'" ')},"").trim()}function ht(t){return Object.keys(t||{}).reduce(function(e,r){return e+"".concat(r,": ").concat(t[r],";")},"")}function vt(t){return t.size!==T.size||t.x!==T.x||t.y!==T.y||t.rotate!==T.rotate||t.flipX||t.flipY}function Gt(t){var e=t.transform,r=t.containerWidth,n=t.iconWidth,a={transform:"translate(".concat(r/2," 256)")},i="translate(".concat(e.x*32,", ").concat(e.y*32,") "),o="scale(".concat(e.size/16*(e.flipX?-1:1),", ").concat(e.size/16*(e.flipY?-1:1),") "),s="rotate(".concat(e.rotate," 0 0)"),f={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(n/2*-1," -256)")};return{outer:a,inner:f,path:u}}function He(t){var e=t.transform,r=t.width,n=r===void 0?nt:r,a=t.height,i=a===void 0?nt:a,o=t.startCentered,s=o===void 0?!1:o,f="";return s&&Ae?f+="translate(".concat(e.x/L-n/2,"em, ").concat(e.y/L-i/2,"em) "):s?f+="translate(calc(-50% + ".concat(e.x/L,"em), calc(-50% + ").concat(e.y/L,"em)) "):f+="translate(".concat(e.x/L,"em, ").concat(e.y/L,"em) "),f+="scale(".concat(e.size/L*(e.flipX?-1:1),", ").concat(e.size/L*(e.flipY?-1:1),") "),f+="rotate(".concat(e.rotate,"deg) "),f}var Z={x:0,y:0,width:"100%",height:"100%"};function Ot(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return t.attributes&&(t.attributes.fill||e)&&(t.attributes.fill="black"),t}function Ue(t){return t.tag==="g"?t.children:[t]}function Ye(t){var e=t.children,r=t.attributes,n=t.main,a=t.mask,i=t.maskId,o=t.transform,s=n.width,f=n.icon,u=a.width,m=a.icon,h=Gt({transform:o,containerWidth:u,iconWidth:s}),y={tag:"rect",attributes:d({},Z,{fill:"white"})},E=f.children?{children:f.children.map(Ot)}:{},S={tag:"g",attributes:d({},h.inner),children:[Ot(d({tag:f.tag,attributes:d({},f.attributes,h.path)},E))]},O={tag:"g",attributes:d({},h.outer),children:[S]},x="mask-".concat(i||V()),l="clip-".concat(i||V()),c={tag:"mask",attributes:d({},Z,{id:x,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[y,O]},v={tag:"defs",children:[{tag:"clipPath",attributes:{id:l},children:Ue(m)},c]};return e.push(v,{tag:"rect",attributes:d({fill:"currentColor","clip-path":"url(#".concat(l,")"),mask:"url(#".concat(x,")")},Z)}),{children:e,attributes:r}}function Ve(t){var e=t.children,r=t.attributes,n=t.main,a=t.transform,i=t.styles,o=ht(i);if(o.length>0&&(r.style=o),vt(a)){var s=Gt({transform:a,containerWidth:n.width,iconWidth:n.width});e.push({tag:"g",attributes:d({},s.outer),children:[{tag:"g",attributes:d({},s.inner),children:[{tag:n.icon.tag,children:n.icon.children,attributes:d({},n.icon.attributes,s.path)}]}]})}else e.push(n.icon);return{children:e,attributes:r}}function Xe(t){var e=t.children,r=t.main,n=t.mask,a=t.attributes,i=t.styles,o=t.transform;if(vt(o)&&r.found&&!n.found){var s=r.width,f=r.height,u={x:s/f/2,y:.5};a.style=ht(d({},i,{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:e}]}function Ge(t){var e=t.prefix,r=t.iconName,n=t.children,a=t.attributes,i=t.symbol,o=i===!0?"".concat(e,"-").concat(g.familyPrefix,"-").concat(r):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:d({},a,{id:o}),children:n}]}]}function Ke(t){var e=t.icons,r=e.main,n=e.mask,a=t.prefix,i=t.iconName,o=t.transform,s=t.symbol,f=t.title,u=t.maskId,m=t.titleId,h=t.extra,y=t.watchable,E=y===void 0?!1:y,S=n.found?n:r,O=S.width,x=S.height,l=a==="fak",c=l?"":"fa-w-".concat(Math.ceil(O/x*16)),v=[g.replacementClass,i?"".concat(g.familyPrefix,"-").concat(i):"",c].filter(function(D){return h.classes.indexOf(D)===-1}).filter(function(D){return D!==""||!!D}).concat(h.classes).join(" "),p={children:[],attributes:d({},h.attributes,{"data-prefix":a,"data-icon":i,class:v,role:h.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(O," ").concat(x)})},C=l&&!~h.classes.indexOf("fa-fw")?{width:"".concat(O/x*16*.0625,"em")}:{};E&&(p.attributes[Bt]=""),f&&p.children.push({tag:"title",attributes:{id:p.attributes["aria-labelledby"]||"title-".concat(m||V())},children:[f]});var z=d({},p,{prefix:a,iconName:i,main:r,mask:n,maskId:u,transform:o,symbol:s,styles:d({},C,h.styles)}),N=n.found&&r.found?Ye(z):Ve(z),re=N.children,ae=N.attributes;return z.children=re,z.attributes=ae,s?Ge(z):Xe(z)}function qe(t){var e=t.content,r=t.width,n=t.height,a=t.transform,i=t.title,o=t.extra,s=t.watchable,f=s===void 0?!1:s,u=d({},o.attributes,i?{title:i}:{},{class:o.classes.join(" ")});f&&(u[Bt]="");var m=d({},o.styles);vt(a)&&(m.transform=He({transform:a,startCentered:!0,width:r,height:n}),m["-webkit-transform"]=m.transform);var h=ht(m);h.length>0&&(u.style=h);var y=[];return y.push({tag:"span",attributes:u,children:[e]}),i&&y.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),y}var zt=function(){};g.measurePerformance&&F&&F.mark&&F.measure;var Je=function(e,r){return function(n,a,i,o){return e.call(r,n,a,i,o)}},tt=function(e,r,n,a){var i=Object.keys(e),o=i.length,s=a!==void 0?Je(r,a):r,f,u,m;for(n===void 0?(f=1,m=e[i[0]]):(f=0,m=n);f<o;f++)u=i[f],m=s(m,e[u],u,e);return m};function Kt(t,e){var r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},n=r.skipHooks,a=n===void 0?!1:n,i=Object.keys(e).reduce(function(o,s){var f=e[s],u=!!f.icon;return u?o[f.iconName]=f.icon:o[s]=f,o},{});typeof I.hooks.addPack=="function"&&!a?I.hooks.addPack(t,i):I.styles[t]=d({},I.styles[t]||{},i),t==="fas"&&Kt("fa",e)}var At=I.styles,Qe=I.shims,qt=function(){var e=function(a){return tt(At,function(i,o,s){return i[s]=tt(o,a,{}),i},{})};e(function(n,a,i){return a[3]&&(n[a[3]]=i),n}),e(function(n,a,i){var o=a[2];return n[i]=i,o.forEach(function(s){n[s]=i}),n});var r="far"in At;tt(Qe,function(n,a){var i=a[0],o=a[1],s=a[2];return o==="far"&&!r&&(o="fas"),n[i]={prefix:o,iconName:s},n},{})};qt();I.styles;function It(t,e,r){if(t&&t[e]&&t[e][r])return{prefix:e,iconName:r,icon:t[e][r]}}function Jt(t){var e=t.tag,r=t.attributes,n=r===void 0?{}:r,a=t.children,i=a===void 0?[]:a;return typeof t=="string"?Xt(t):"<".concat(e," ").concat(We(n),">").concat(i.map(Jt).join(""),"</").concat(e,">")}var Ze=function(e){var r={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return e?e.toLowerCase().split(" ").reduce(function(n,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return n.flipX=!0,n;if(o&&s==="v")return n.flipY=!0,n;if(s=parseFloat(s),isNaN(s))return n;switch(o){case"grow":n.size=n.size+s;break;case"shrink":n.size=n.size-s;break;case"left":n.x=n.x-s;break;case"right":n.x=n.x+s;break;case"up":n.y=n.y-s;break;case"down":n.y=n.y+s;break;case"rotate":n.rotate=n.rotate+s;break}return n},r):r};function ot(t){this.name="MissingIcon",this.message=t||"Icon unavailable",this.stack=new Error().stack}ot.prototype=Object.create(Error.prototype);ot.prototype.constructor=ot;var q={fill:"currentColor"},Qt={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};d({},q,{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"});var pt=d({},Qt,{attributeName:"opacity"});d({},q,{cx:"256",cy:"364",r:"28"}),d({},Qt,{attributeName:"r",values:"28;14;28;28;14;28;"}),d({},pt,{values:"1;0;1;1;0;1;"});d({},q,{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),d({},pt,{values:"1;0;0;0;0;1;"});d({},q,{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),d({},pt,{values:"0;0;1;1;0;0;"});I.styles;function St(t){var e=t[0],r=t[1],n=t.slice(4),a=Tt(n,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(g.familyPrefix,"-").concat(Q.GROUP)},children:[{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(Q.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(g.familyPrefix,"-").concat(Q.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:e,height:r,icon:o}}I.styles;var tn=`svg:not(:root).svg-inline--fa {
  overflow: visible;
}

.svg-inline--fa {
  display: inline-block;
  font-size: inherit;
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.225em;
}
.svg-inline--fa.fa-w-1 {
  width: 0.0625em;
}
.svg-inline--fa.fa-w-2 {
  width: 0.125em;
}
.svg-inline--fa.fa-w-3 {
  width: 0.1875em;
}
.svg-inline--fa.fa-w-4 {
  width: 0.25em;
}
.svg-inline--fa.fa-w-5 {
  width: 0.3125em;
}
.svg-inline--fa.fa-w-6 {
  width: 0.375em;
}
.svg-inline--fa.fa-w-7 {
  width: 0.4375em;
}
.svg-inline--fa.fa-w-8 {
  width: 0.5em;
}
.svg-inline--fa.fa-w-9 {
  width: 0.5625em;
}
.svg-inline--fa.fa-w-10 {
  width: 0.625em;
}
.svg-inline--fa.fa-w-11 {
  width: 0.6875em;
}
.svg-inline--fa.fa-w-12 {
  width: 0.75em;
}
.svg-inline--fa.fa-w-13 {
  width: 0.8125em;
}
.svg-inline--fa.fa-w-14 {
  width: 0.875em;
}
.svg-inline--fa.fa-w-15 {
  width: 0.9375em;
}
.svg-inline--fa.fa-w-16 {
  width: 1em;
}
.svg-inline--fa.fa-w-17 {
  width: 1.0625em;
}
.svg-inline--fa.fa-w-18 {
  width: 1.125em;
}
.svg-inline--fa.fa-w-19 {
  width: 1.1875em;
}
.svg-inline--fa.fa-w-20 {
  width: 1.25em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: 0.3em;
  width: auto;
}
.svg-inline--fa.fa-border {
  height: 1.5em;
}
.svg-inline--fa.fa-li {
  width: 2em;
}
.svg-inline--fa.fa-fw {
  width: 1.25em;
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: #ff253a;
  border-radius: 1em;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  color: #fff;
  height: 1.5em;
  line-height: 1;
  max-width: 5em;
  min-width: 1.5em;
  overflow: hidden;
  padding: 0.25em;
  right: 0;
  text-overflow: ellipsis;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: 0;
  right: 0;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: 0;
  left: 0;
  right: auto;
  top: auto;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  right: 0;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: 0;
  right: auto;
  top: 0;
  -webkit-transform: scale(0.25);
          transform: scale(0.25);
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-lg {
  font-size: 1.3333333333em;
  line-height: 0.75em;
  vertical-align: -0.0667em;
}

.fa-xs {
  font-size: 0.75em;
}

.fa-sm {
  font-size: 0.875em;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: 2.5em;
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: -2em;
  position: absolute;
  text-align: center;
  width: 2em;
  line-height: inherit;
}

.fa-border {
  border: solid 0.08em #eee;
  border-radius: 0.1em;
  padding: 0.2em 0.25em 0.15em;
}

.fa-pull-left {
  float: left;
}

.fa-pull-right {
  float: right;
}

.fa.fa-pull-left,
.fas.fa-pull-left,
.far.fa-pull-left,
.fal.fa-pull-left,
.fab.fa-pull-left {
  margin-right: 0.3em;
}
.fa.fa-pull-right,
.fas.fa-pull-right,
.far.fa-pull-right,
.fal.fa-pull-right,
.fab.fa-pull-right {
  margin-left: 0.3em;
}

.fa-spin {
  -webkit-animation: fa-spin 2s infinite linear;
          animation: fa-spin 2s infinite linear;
}

.fa-pulse {
  -webkit-animation: fa-spin 1s infinite steps(8);
          animation: fa-spin 1s infinite steps(8);
}

@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}

@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=1)";
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2)";
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=3)";
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=0, mirror=1)";
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both, .fa-flip-horizontal.fa-flip-vertical {
  -ms-filter: "progid:DXImageTransform.Microsoft.BasicImage(rotation=2, mirror=1)";
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

:root .fa-rotate-90,
:root .fa-rotate-180,
:root .fa-rotate-270,
:root .fa-flip-horizontal,
:root .fa-flip-vertical,
:root .fa-flip-both {
  -webkit-filter: none;
          filter: none;
}

.fa-stack {
  display: inline-block;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: #fff;
}

.sr-only {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.sr-only-focusable:active, .sr-only-focusable:focus {
  clip: auto;
  height: auto;
  margin: 0;
  overflow: visible;
  position: static;
  width: auto;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: 0.4;
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: 1;
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse {
  color: #fff;
}`;function en(){var t=$t,e=Rt,r=g.familyPrefix,n=g.replacementClass,a=tn;if(r!==t||n!==e){var i=new RegExp("\\.".concat(t,"\\-"),"g"),o=new RegExp("\\--".concat(t,"\\-"),"g"),s=new RegExp("\\.".concat(e),"g");a=a.replace(i,".".concat(r,"-")).replace(o,"--".concat(r,"-")).replace(s,".".concat(n))}return a}var nn=function(){function t(){he(this,t),this.definitions={}}return ve(t,[{key:"add",value:function(){for(var r=this,n=arguments.length,a=new Array(n),i=0;i<n;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){r.definitions[s]=d({},r.definitions[s]||{},o[s]),Kt(s,o[s]),qt()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(r,n){var a=n.prefix&&n.iconName&&n.icon?{0:n}:n;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,f=o.iconName,u=o.icon;r[s]||(r[s]={}),r[s][f]=u}),r}}]),t}();function Zt(){g.autoAddCss&&!Mt&&(De(en()),Mt=!0)}function te(t,e){return Object.defineProperty(t,"abstract",{get:e}),Object.defineProperty(t,"html",{get:function(){return t.abstract.map(function(n){return Jt(n)})}}),Object.defineProperty(t,"node",{get:function(){if(!!ut){var n=b.createElement("div");return n.innerHTML=t.html,n.children}}}),t}function Ct(t){var e=t.prefix,r=e===void 0?"fa":e,n=t.iconName;if(!!n)return It(an.definitions,r,n)||It(I.styles,r,n)}function rn(t){return function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=(e||{}).icon?e:Ct(e||{}),a=r.mask;return a&&(a=(a||{}).icon?a:Ct(a||{})),t(n,d({},r,{mask:a}))}}var an=new nn,Mt=!1,X={transform:function(e){return Ze(e)}},on=rn(function(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=e.transform,n=r===void 0?T:r,a=e.symbol,i=a===void 0?!1:a,o=e.mask,s=o===void 0?null:o,f=e.maskId,u=f===void 0?null:f,m=e.title,h=m===void 0?null:m,y=e.titleId,E=y===void 0?null:y,S=e.classes,O=S===void 0?[]:S,x=e.attributes,l=x===void 0?{}:x,c=e.styles,v=c===void 0?{}:c;if(!!t){var p=t.prefix,C=t.iconName,z=t.icon;return te(d({type:"icon"},t),function(){return Zt(),g.autoA11y&&(h?l["aria-labelledby"]="".concat(g.replacementClass,"-title-").concat(E||V()):(l["aria-hidden"]="true",l.focusable="false")),Ke({icons:{main:St(z),mask:s?St(s.icon):{found:!1,width:null,height:null,icon:{}}},prefix:p,iconName:C,transform:d({},T,n),symbol:i,title:h,maskId:u,titleId:E,extra:{attributes:l,styles:v,classes:O}})})}}),sn=function(e){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=r.transform,a=n===void 0?T:n,i=r.title,o=i===void 0?null:i,s=r.classes,f=s===void 0?[]:s,u=r.attributes,m=u===void 0?{}:u,h=r.styles,y=h===void 0?{}:h;return te({type:"text",content:e},function(){return Zt(),qe({content:e,transform:d({},T,a),title:o,extra:{attributes:m,styles:y,classes:["".concat(g.familyPrefix,"-layers-text")].concat(ge(f))}})})};function Pt(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(t,a).enumerable})),r.push.apply(r,n)}return r}function A(t){for(var e=1;e<arguments.length;e++){var r=arguments[e]!=null?arguments[e]:{};e%2?Pt(Object(r),!0).forEach(function(n){w(t,n,r[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):Pt(Object(r)).forEach(function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(r,n))})}return t}function G(t){return G=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},G(t)}function w(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function fn(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,i;for(i=0;i<n.length;i++)a=n[i],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}function ln(t,e){if(t==null)return{};var r=fn(t,e),n,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],!(e.indexOf(n)>=0)&&(!Object.prototype.propertyIsEnumerable.call(t,n)||(r[n]=t[n]))}return r}function st(t){return cn(t)||un(t)||dn(t)||mn()}function cn(t){if(Array.isArray(t))return ft(t)}function un(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function dn(t,e){if(!!t){if(typeof t=="string")return ft(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);if(r==="Object"&&t.constructor&&(r=t.constructor.name),r==="Map"||r==="Set")return Array.from(t);if(r==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return ft(t,e)}}function ft(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function mn(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var hn=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ee={exports:{}};(function(t){(function(e){var r=function(l,c,v){if(!u(c)||h(c)||y(c)||E(c)||f(c))return c;var p,C=0,z=0;if(m(c))for(p=[],z=c.length;C<z;C++)p.push(r(l,c[C],v));else{p={};for(var N in c)Object.prototype.hasOwnProperty.call(c,N)&&(p[l(N,v)]=r(l,c[N],v))}return p},n=function(l,c){c=c||{};var v=c.separator||"_",p=c.split||/(?=[A-Z])/;return l.split(p).join(v)},a=function(l){return S(l)?l:(l=l.replace(/[\-_\s]+(.)?/g,function(c,v){return v?v.toUpperCase():""}),l.substr(0,1).toLowerCase()+l.substr(1))},i=function(l){var c=a(l);return c.substr(0,1).toUpperCase()+c.substr(1)},o=function(l,c){return n(l,c).toLowerCase()},s=Object.prototype.toString,f=function(l){return typeof l=="function"},u=function(l){return l===Object(l)},m=function(l){return s.call(l)=="[object Array]"},h=function(l){return s.call(l)=="[object Date]"},y=function(l){return s.call(l)=="[object RegExp]"},E=function(l){return s.call(l)=="[object Boolean]"},S=function(l){return l=l-0,l===l},O=function(l,c){var v=c&&"process"in c?c.process:c;return typeof v!="function"?l:function(p,C){return v(p,l,C)}},x={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(l,c){return r(O(a,c),l)},decamelizeKeys:function(l,c){return r(O(o,c),l,c)},pascalizeKeys:function(l,c){return r(O(i,c),l)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};t.exports?t.exports=x:e.humps=x})(hn)})(ee);var vn=ee.exports,pn=["class","style"];function gn(t){return t.split(";").map(function(e){return e.trim()}).filter(function(e){return e}).reduce(function(e,r){var n=r.indexOf(":"),a=vn.camelize(r.slice(0,n)),i=r.slice(n+1).trim();return e[a]=i,e},{})}function yn(t){return t.split(/\s+/).reduce(function(e,r){return e[r]=!0,e},{})}function gt(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var n=(t.children||[]).map(function(f){return gt(f)}),a=Object.keys(t.attributes||{}).reduce(function(f,u){var m=t.attributes[u];switch(u){case"class":f.class=yn(m);break;case"style":f.style=gn(m);break;default:f.attrs[u]=m}return f},{attrs:{},class:{},style:{}});r.class;var i=r.style,o=i===void 0?{}:i,s=ln(r,pn);return Lt(t.tag,A(A(A({},e),{},{class:a.class,style:A(A({},a.style),o)},a.attrs),s),n)}var ne=!1;try{ne=!0}catch{}function bn(){if(!ne&&console&&typeof console.error=="function"){var t;(t=console).error.apply(t,arguments)}}function R(t,e){return Array.isArray(e)&&e.length>0||!Array.isArray(e)&&e?w({},t,e):{}}function wn(t){var e,r=(e={"fa-spin":t.spin,"fa-pulse":t.pulse,"fa-fw":t.fixedWidth,"fa-border":t.border,"fa-li":t.listItem,"fa-inverse":t.inverse,"fa-flip":t.flip===!0,"fa-flip-horizontal":t.flip==="horizontal"||t.flip==="both","fa-flip-vertical":t.flip==="vertical"||t.flip==="both"},w(e,"fa-".concat(t.size),t.size!==null),w(e,"fa-rotate-".concat(t.rotation),t.rotation!==null),w(e,"fa-pull-".concat(t.pull),t.pull!==null),w(e,"fa-swap-opacity",t.swapOpacity),w(e,"fa-bounce",t.bounce),w(e,"fa-shake",t.shake),w(e,"fa-beat",t.beat),w(e,"fa-fade",t.fade),w(e,"fa-beat-fade",t.beatFade),w(e,"fa-flash",t.flash),w(e,"fa-spin-pulse",t.spinPulse),w(e,"fa-spin-reverse",t.spinReverse),e);return Object.keys(r).map(function(n){return r[n]?n:null}).filter(function(n){return n})}function Et(t){if(t&&G(t)==="object"&&t.prefix&&t.iconName&&t.icon)return t;if(X.icon)return X.icon(t);if(t===null)return null;if(G(t)==="object"&&t.prefix&&t.iconName)return t;if(Array.isArray(t)&&t.length===2)return{prefix:t[0],iconName:t[1]};if(typeof t=="string")return{prefix:"fas",iconName:t}}var An=lt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(e){return[!0,!1,"horizontal","vertical","both"].indexOf(e)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(e){return["right","left"].indexOf(e)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(e){return[90,180,270].indexOf(Number.parseInt(e,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(e){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(e)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(e,r){var n=r.attrs,a=k(function(){return Et(e.icon)}),i=k(function(){return R("classes",wn(e))}),o=k(function(){return R("transform",typeof e.transform=="string"?X.transform(e.transform):e.transform)}),s=k(function(){return R("mask",Et(e.mask))}),f=k(function(){return on(a.value,A(A(A(A({},i.value),o.value),s.value),{},{symbol:e.symbol,title:e.title}))});ce(f,function(m){if(!m)return bn("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=k(function(){return f.value?gt(f.value.abstract[0],{},n):null});return function(){return u.value}}});lt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(e,r){var n=r.slots,a=g.familyPrefix,i=k(function(){return["".concat(a,"-layers")].concat(st(e.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Lt("div",{class:i.value},n.default?n.default():[])}}});lt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(e){return["bottom-left","bottom-right","top-left","top-right"].indexOf(e)>-1}}},setup:function(e,r){var n=r.attrs,a=g.familyPrefix,i=k(function(){return R("classes",[].concat(st(e.counter?["".concat(a,"-layers-counter")]:[]),st(e.position?["".concat(a,"-layers-").concat(e.position)]:[])))}),o=k(function(){return R("transform",typeof e.transform=="string"?X.transform(e.transform):e.transform)}),s=k(function(){var u=sn(e.value.toString(),A(A({},o.value),i.value)),m=u.abstract;return e.counter&&(m[0].attributes.class=m[0].attributes.class.replace("fa-layers-text","")),m[0]}),f=k(function(){return gt(s.value,{},n)});return function(){return f.value}}});/*!
 * Font Awesome Free 5.15.4 by @fontawesome - https://fontawesome.com
 * License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
 */var In={prefix:"fab",iconName:"creative-commons-nc",icon:[496,512,[],"f4e8","M247.6 8C387.4 8 496 115.9 496 256c0 147.2-118.5 248-248.4 248C113.1 504 0 393.2 0 256 0 123.1 104.7 8 247.6 8zM55.8 189.1c-7.4 20.4-11.1 42.7-11.1 66.9 0 110.9 92.1 202.4 203.7 202.4 122.4 0 177.2-101.8 178.5-104.1l-93.4-41.6c-7.7 37.1-41.2 53-68.2 55.4v38.1h-28.8V368c-27.5-.3-52.6-10.2-75.3-29.7l34.1-34.5c31.7 29.4 86.4 31.8 86.4-2.2 0-6.2-2.2-11.2-6.6-15.1-14.2-6-1.8-.1-219.3-97.4zM248.4 52.3c-38.4 0-112.4 8.7-170.5 93l94.8 42.5c10-31.3 40.4-42.9 63.8-44.3v-38.1h28.8v38.1c22.7 1.2 43.4 8.9 62 23L295 199.7c-42.7-29.9-83.5-8-70 11.1 53.4 24.1 43.8 19.8 93 41.6l127.1 56.7c4.1-17.4 6.2-35.1 6.2-53.1 0-57-19.8-105-59.3-143.9-39.3-39.9-87.2-59.8-143.6-59.8z"]},Sn={prefix:"fab",iconName:"facebook",icon:[512,512,[],"f09a","M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z"]},Cn={prefix:"fab",iconName:"instagram",icon:[448,512,[],"f16d","M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"]},Mn={prefix:"fab",iconName:"microsoft",icon:[448,512,[],"f3ca","M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z"]},Pn={prefix:"fab",iconName:"sketch",icon:[512,512,[],"f7c6","M27.5 162.2L9 187.1h90.5l6.9-130.7-78.9 105.8zM396.3 45.7L267.7 32l135.7 147.2-7.1-133.5zM112.2 218.3l-11.2-22H9.9L234.8 458zm2-31.2h284l-81.5-88.5L256.3 33zm297.3 9.1L277.6 458l224.8-261.7h-90.9zM415.4 69L406 56.4l.9 17.3 6.1 113.4h90.3zM113.5 93.5l-4.6 85.6L244.7 32 116.1 45.7zm287.7 102.7h-290l42.4 82.9L256.3 480l144.9-283.8z"]},En={prefix:"fab",iconName:"whatsapp",icon:[448,512,[],"f232","M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"]};export{An as F,On as J,zn as _,Sn as a,Cn as b,En as c,Pn as d,In as e,Mn as f,an as l};
