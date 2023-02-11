var E=Object.defineProperty,P=Object.defineProperties;var O=Object.getOwnPropertyDescriptors;var h=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,j=Object.prototype.propertyIsEnumerable;var w=(t,e,l)=>e in t?E(t,e,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[e]=l,m=(t,e)=>{for(var l in e||(e={}))R.call(e,l)&&w(t,l,e[l]);if(h)for(var l of h(e))j.call(e,l)&&w(t,l,e[l]);return t},p=(t,e)=>P(t,O(e));var k=(t,e,l)=>new Promise((n,a)=>{var s=d=>{try{c(l.next(d))}catch(r){a(r)}},u=d=>{try{c(l.throw(d))}catch(r){a(r)}},c=d=>d.done?n(d.value):Promise.resolve(d.value).then(s,u);c((l=l.apply(t,e)).next())});import{u as T,a6 as y,i as z,v as $,z as q,a7 as g,a4 as _,ac as I,ae as Z}from"./index.8d3be363.js";import{z as N,B as D,af as F,a7 as H,ab as b,l as K,n as M,v as Y,p as G,T as J,a5 as S,q as Q}from"./index.e2144cf2.js";function U(t){let e;const l=T("loading"),n=N(!1),a=D(p(m({},t),{originalPosition:"",originalOverflow:"",visible:!1}));function s(o){a.text=o}function u(){const o=a.parent;if(!o.vLoadingAddClassList){let v=o.getAttribute("loading-number");v=Number.parseInt(v)-1,v?o.setAttribute("loading-number",v.toString()):(y(o,l.bm("parent","relative")),o.removeAttribute("loading-number")),y(o,l.bm("parent","hidden"))}c(),f.unmount()}function c(){var o,v;(v=(o=i.$el)==null?void 0:o.parentNode)==null||v.removeChild(i.$el)}function d(){var o;if(t.beforeClose&&!t.beforeClose())return;const v=a.parent;v.vLoadingAddClassList=void 0,n.value=!0,clearTimeout(e),e=window.setTimeout(()=>{n.value&&(n.value=!1,u())},400),a.visible=!1,(o=t.closed)==null||o.call(t)}function r(){!n.value||(n.value=!1,u())}const f=F({name:"ElLoading",setup(){return()=>{const o=a.spinner||a.svg,v=b("svg",m({class:"circular",viewBox:a.svgViewBox?a.svgViewBox:"25 25 50 50"},o?{innerHTML:o}:{}),[b("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),V=a.text?b("p",{class:l.b("text")},[a.text]):void 0;return b(J,{name:l.b("fade"),onAfterLeave:r},{default:K(()=>[M(G("div",{style:{backgroundColor:a.background||""},class:[l.b("mask"),a.customClass,a.fullscreen?"is-fullscreen":""]},[b("div",{class:l.b("spinner")},[v,V])]),[[Y,a.visible]])])})}}}),i=f.mount(document.createElement("div"));return p(m({},H(a)),{setText:s,removeElLoadingChild:c,close:d,handleAfterLeave:r,vm:i,get $el(){return i.$el}})}let x;const W=function(t={}){if(!z)return;const e=X(t);if(e.fullscreen&&x)return x;const l=U(p(m({},e),{closed:()=>{var a;(a=e.closed)==null||a.call(e),e.fullscreen&&(x=void 0)}}));ee(e,e.parent,l),A(e,e.parent,l),e.parent.vLoadingAddClassList=()=>A(e,e.parent,l);let n=e.parent.getAttribute("loading-number");return n?n=`${Number.parseInt(n)+1}`:n="1",e.parent.setAttribute("loading-number",n),e.parent.appendChild(l.$el),S(()=>l.visible.value=e.visible),e.fullscreen&&(x=l),l},X=t=>{var e,l,n,a;let s;return $(t.target)?s=(e=document.querySelector(t.target))!=null?e:document.body:s=t.target||document.body,{parent:s===document.body||t.body?document.body:s,background:t.background||"",svg:t.svg||"",svgViewBox:t.svgViewBox||"",spinner:t.spinner||!1,text:t.text||"",fullscreen:s===document.body&&((l=t.fullscreen)!=null?l:!0),lock:(n=t.lock)!=null?n:!1,customClass:t.customClass||"",visible:(a=t.visible)!=null?a:!0,target:s}},ee=(t,e,l)=>k(void 0,null,function*(){const{nextZIndex:n}=q(),a={};if(t.fullscreen)l.originalPosition.value=g(document.body,"position"),l.originalOverflow.value=g(document.body,"overflow"),a.zIndex=n();else if(t.parent===document.body){l.originalPosition.value=g(document.body,"position"),yield S();for(const s of["top","left"]){const u=s==="top"?"scrollTop":"scrollLeft";a[s]=`${t.target.getBoundingClientRect()[s]+document.body[u]+document.documentElement[u]-Number.parseInt(g(document.body,`margin-${s}`),10)}px`}for(const s of["height","width"])a[s]=`${t.target.getBoundingClientRect()[s]}px`}else l.originalPosition.value=g(e,"position");for(const[s,u]of Object.entries(a))l.$el.style[s]=u}),A=(t,e,l)=>{const n=T("loading");l.originalPosition.value!=="absolute"&&l.originalPosition.value!=="fixed"?_(e,n.bm("parent","relative")):y(e,n.bm("parent","relative")),t.fullscreen&&t.lock?_(e,n.bm("parent","hidden")):y(e,n.bm("parent","hidden"))},L=Symbol("ElLoading"),B=(t,e)=>{var l,n,a,s;const u=e.instance,c=i=>I(e.value)?e.value[i]:void 0,d=i=>{const o=$(i)&&(u==null?void 0:u[i])||i;return o&&N(o)},r=i=>d(c(i)||t.getAttribute(`element-loading-${Z(i)}`)),C=(l=c("fullscreen"))!=null?l:e.modifiers.fullscreen,f={text:r("text"),svg:r("svg"),svgViewBox:r("svgViewBox"),spinner:r("spinner"),background:r("background"),customClass:r("customClass"),fullscreen:C,target:(n=c("target"))!=null?n:C?void 0:t,body:(a=c("body"))!=null?a:e.modifiers.body,lock:(s=c("lock"))!=null?s:e.modifiers.lock};t[L]={options:f,instance:W(f)}},te=(t,e)=>{for(const l of Object.keys(e))Q(e[l])&&(e[l].value=t[l])},se={mounted(t,e){e.value&&B(t,e)},updated(t,e){const l=t[L];e.oldValue!==e.value&&(e.value&&!e.oldValue?B(t,e):e.value&&e.oldValue?I(e.value)&&te(e.value,l.options):l==null||l.instance.close())},unmounted(t){var e;(e=t[L])==null||e.instance.close()}};export{W as L,se as v};
