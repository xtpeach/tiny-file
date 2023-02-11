var xe=Object.defineProperty,ze=Object.defineProperties;var Ie=Object.getOwnPropertyDescriptors;var ue=Object.getOwnPropertySymbols;var Le=Object.prototype.hasOwnProperty,Ee=Object.prototype.propertyIsEnumerable;var fe=(o,l,t)=>l in o?xe(o,l,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[l]=t,P=(o,l)=>{for(var t in l||(l={}))Le.call(l,t)&&fe(o,t,l[t]);if(ue)for(var t of ue(l))Ee.call(l,t)&&fe(o,t,l[t]);return o},U=(o,l)=>ze(o,Ie(l));var de=(o,l,t)=>new Promise((i,z)=>{var h=f=>{try{$(t.next(f))}catch(p){z(p)}},s=f=>{try{$(t.throw(f))}catch(p){z(p)}},$=f=>f.done?i(f.value):Promise.resolve(f.value).then(h,s);$((t=t.apply(o,l)).next())});import{m as ve,a as M}from"./request.538cacc7.js";import{E as me,am as pe,z as _,an as Ce,y as Te,A as b,w as oe,a5 as ge,I as we,o as k,k as le,p as u,l as C,b as w,r as d,j as a,K as Oe,m as x,c as N,F as re,J as Se,Y as Ne,n as $e,v as Ae,L as ie,G as J,T as Ye,X as Re,ao as Xe,Z as Be,t as Me}from"./index.e2144cf2.js";import{af as Ve,i as A,h as he,l as se,j as ce,ap as De,aq as je,u as ye,z as Fe,E as S,Q as He,ar as Pe,a9 as We,as as Ze,U as qe,at as Ge,au as Ke,_ as _e,s as B,aa as Ue,k as be,y as Je,v as Qe,L as et}from"./index.8d3be363.js";import{u as ke}from"./index.4971e309.js";import{d as tt}from"./debounce.ef6045fb.js";import{u as at}from"./index.f710691a.js";import{g as nt}from"./scroll.2d8cca42.js";var ot="Expected a function";function ne(o,l,t){var i=!0,z=!0;if(typeof o!="function")throw new TypeError(ot);return Ve(t)&&(i="leading"in t?!!t.leading:i,z="trailing"in t?!!t.trailing:z),tt(o,l,{leading:i,maxWait:l,trailing:z})}const lt=(o,l)=>{if(!A||!o||!l)return!1;const t=o.getBoundingClientRect();let i;return l instanceof Element?i=l.getBoundingClientRect():i={top:0,right:window.innerWidth,bottom:window.innerHeight,left:0},t.top<i.bottom&&t.bottom>i.top&&t.right>i.left&&t.left<i.right},Tt=o=>{let l,t;return o.type==="touchend"?(t=o.changedTouches[0].clientY,l=o.changedTouches[0].clientX):o.type.startsWith("touch")?(t=o.touches[0].clientY,l=o.touches[0].clientX):(t=o.clientY,l=o.clientX),{clientX:l,clientY:t}},rt=()=>A&&/firefox/i.test(window.navigator.userAgent),it=he({urlList:{type:se(Array),default:()=>ve([])},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},hideOnClickModal:{type:Boolean,default:!1},teleported:{type:Boolean,default:!1},closeOnPressEscape:{type:Boolean,default:!0}}),st={close:()=>!0,switch:o=>ce(o)},ct=["src"],ut={name:"ElImageViewer"},ft=me(U(P({},ut),{props:it,emits:st,setup(o,{emit:l}){const t=o,i={CONTAIN:{name:"contain",icon:pe(De)},ORIGINAL:{name:"original",icon:pe(je)}},z=rt()?"DOMMouseScroll":"mousewheel",{t:h}=ke(),s=ye("image-viewer"),{nextZIndex:$}=Fe(),f=_(),p=_([]),I=Ce(),L=_(!0),v=_(t.initialIndex),g=Te(i.CONTAIN),c=_({scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}),V=b(()=>{const{urlList:n}=t;return n.length<=1}),Y=b(()=>v.value===0),W=b(()=>v.value===t.urlList.length-1),Q=b(()=>t.urlList[v.value]),D=b(()=>{const{scale:n,deg:e,offsetX:r,offsetY:m,enableTransition:T}=c.value;let y=r/n,O=m/n;switch(e%360){case 90:case-270:[y,O]=[O,-y];break;case 180:case-180:[y,O]=[-y,-O];break;case 270:case-90:[y,O]=[-O,y];break}const X={transform:`scale(${n}) rotate(${e}deg) translate(${y}px, ${O}px)`,transition:T?"transform .3s":""};return g.value.name===i.CONTAIN.name&&(X.maxWidth=X.maxHeight="100%"),X}),ee=b(()=>ce(t.zIndex)?t.zIndex:$());function R(){te(),l("close")}function j(){const n=ne(r=>{switch(r.code){case B.esc:t.closeOnPressEscape&&R();break;case B.space:H();break;case B.left:G();break;case B.up:E("zoomIn");break;case B.right:K();break;case B.down:E("zoomOut");break}}),e=ne(r=>{(r.wheelDelta?r.wheelDelta:-r.detail)>0?E("zoomIn",{zoomRate:1.2,enableTransition:!1}):E("zoomOut",{zoomRate:1.2,enableTransition:!1})});I.run(()=>{M(document,"keydown",n),M(document,z,e)})}function te(){I.stop()}function ae(){L.value=!1}function Z(n){L.value=!1,n.target.alt=h("el.image.error")}function q(n){if(L.value||n.button!==0||!f.value)return;c.value.enableTransition=!1;const{offsetX:e,offsetY:r}=c.value,m=n.pageX,T=n.pageY,y=ne(X=>{c.value=U(P({},c.value),{offsetX:e+X.pageX-m,offsetY:r+X.pageY-T})}),O=M(document,"mousemove",y);M(document,"mouseup",()=>{O()}),n.preventDefault()}function F(){c.value={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}}function H(){if(L.value)return;const n=Ue(i),e=Object.values(i),r=g.value.name,T=(e.findIndex(y=>y.name===r)+1)%n.length;g.value=i[n[T]],F()}function G(){if(Y.value&&!t.infinite)return;const n=t.urlList.length;v.value=(v.value-1+n)%n}function K(){if(W.value&&!t.infinite)return;const n=t.urlList.length;v.value=(v.value+1)%n}function E(n,e={}){if(L.value)return;const{zoomRate:r,rotateDeg:m,enableTransition:T}=P({zoomRate:1.4,rotateDeg:90,enableTransition:!0},e);switch(n){case"zoomOut":c.value.scale>.2&&(c.value.scale=Number.parseFloat((c.value.scale/r).toFixed(3)));break;case"zoomIn":c.value.scale<7&&(c.value.scale=Number.parseFloat((c.value.scale*r).toFixed(3)));break;case"clockwise":c.value.deg+=m;break;case"anticlockwise":c.value.deg-=m;break}c.value.enableTransition=T}return oe(Q,()=>{ge(()=>{const n=p.value[0];n!=null&&n.complete||(L.value=!0)})}),oe(v,n=>{F(),l("switch",n)}),we(()=>{var n,e;j(),(e=(n=f.value)==null?void 0:n.focus)==null||e.call(n)}),(n,e)=>(k(),le(Re,{to:"body",disabled:!n.teleported},[u(Ye,{name:"viewer-fade",appear:""},{default:C(()=>[w("div",{ref_key:"wrapper",ref:f,tabindex:-1,class:d(a(s).e("wrapper")),style:ie({zIndex:a(ee)})},[w("div",{class:d(a(s).e("mask")),onClick:e[0]||(e[0]=Oe(r=>n.hideOnClickModal&&R(),["self"]))},null,2),x(" CLOSE "),w("span",{class:d([a(s).e("btn"),a(s).e("close")]),onClick:R},[u(a(S),null,{default:C(()=>[u(a(He))]),_:1})],2),x(" ARROW "),a(V)?x("v-if",!0):(k(),N(re,{key:0},[w("span",{class:d([a(s).e("btn"),a(s).e("prev"),a(s).is("disabled",!n.infinite&&a(Y))]),onClick:G},[u(a(S),null,{default:C(()=>[u(a(Pe))]),_:1})],2),w("span",{class:d([a(s).e("btn"),a(s).e("next"),a(s).is("disabled",!n.infinite&&a(W))]),onClick:K},[u(a(S),null,{default:C(()=>[u(a(We))]),_:1})],2)],64)),x(" ACTIONS "),w("div",{class:d([a(s).e("btn"),a(s).e("actions")])},[w("div",{class:d(a(s).e("actions__inner"))},[u(a(S),{onClick:e[1]||(e[1]=r=>E("zoomOut"))},{default:C(()=>[u(a(Ze))]),_:1}),u(a(S),{onClick:e[2]||(e[2]=r=>E("zoomIn"))},{default:C(()=>[u(a(qe))]),_:1}),w("i",{class:d(a(s).e("actions__divider"))},null,2),u(a(S),{onClick:H},{default:C(()=>[(k(),le(Se(a(g).icon)))]),_:1}),w("i",{class:d(a(s).e("actions__divider"))},null,2),u(a(S),{onClick:e[3]||(e[3]=r=>E("anticlockwise"))},{default:C(()=>[u(a(Ge))]),_:1}),u(a(S),{onClick:e[4]||(e[4]=r=>E("clockwise"))},{default:C(()=>[u(a(Ke))]),_:1})],2)],2),x(" CANVAS "),w("div",{class:d(a(s).e("canvas"))},[(k(!0),N(re,null,Ne(n.urlList,(r,m)=>$e((k(),N("img",{ref_for:!0,ref:T=>p.value[m]=T,key:r,src:r,style:ie(a(D)),class:d(a(s).e("img")),onLoad:ae,onError:Z,onMousedown:q},null,46,ct)),[[Ae,m===v.value]])),128))],2),J(n.$slots,"default")],6)]),_:3})],8,["disabled"]))}}));var dt=_e(ft,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image-viewer/src/image-viewer.vue"]]);const pt=be(dt),vt=he({hideOnClickModal:{type:Boolean,default:!1},src:{type:String,default:""},fit:{type:String,values:["","contain","cover","fill","none","scale-down"],default:""},loading:{type:String,values:["eager","lazy"]},lazy:{type:Boolean,default:!1},scrollContainer:{type:se([String,Object])},previewSrcList:{type:se(Array),default:()=>ve([])},previewTeleported:{type:Boolean,default:!1},zIndex:{type:Number},initialIndex:{type:Number,default:0},infinite:{type:Boolean,default:!0},closeOnPressEscape:{type:Boolean,default:!0}}),mt={load:o=>o instanceof Event,error:o=>o instanceof Event,switch:o=>ce(o),close:()=>!0},gt=["src","loading"],wt={key:0},ht={name:"ElImage",inheritAttrs:!1},yt=me(U(P({},ht),{props:vt,emits:mt,setup(o,{emit:l}){const t=o;let i="";const{t:z}=ke(),h=ye("image"),s=Xe(),$=at(),f=_(),p=_(!1),I=_(!0),L=_(!1),v=_(),g=_(),c=A&&"loading"in HTMLImageElement.prototype;let V,Y;const W=b(()=>s.style),Q=b(()=>{const{fit:e}=t;return A&&e?{objectFit:e}:{}}),D=b(()=>{const{previewSrcList:e}=t;return Array.isArray(e)&&e.length>0}),ee=b(()=>{const{previewSrcList:e,initialIndex:r}=t;let m=r;return r>e.length-1&&(m=0),m}),R=b(()=>t.loading==="eager"?!1:!c&&t.loading==="lazy"||t.lazy),j=()=>{!A||(I.value=!0,p.value=!1,f.value=t.src)};function te(e){I.value=!1,p.value=!1,l("load",e)}function ae(e){I.value=!1,p.value=!0,l("error",e)}function Z(){lt(v.value,g.value)&&(j(),H())}const q=et(Z,200);function F(){return de(this,null,function*(){var e;if(!A)return;yield ge();const{scrollContainer:r}=t;Je(r)?g.value=r:Qe(r)&&r!==""?g.value=(e=document.querySelector(r))!=null?e:void 0:v.value&&(g.value=nt(v.value)),g.value&&(V=M(g,"scroll",q),setTimeout(()=>Z(),100))})}function H(){!A||!g.value||!q||(V==null||V(),g.value=void 0)}function G(e){if(!!e.ctrlKey){if(e.deltaY<0)return e.preventDefault(),!1;if(e.deltaY>0)return e.preventDefault(),!1}}function K(){!D.value||(Y=M("wheel",G,{passive:!1}),i=document.body.style.overflow,document.body.style.overflow="hidden",L.value=!0)}function E(){Y==null||Y(),document.body.style.overflow=i,L.value=!1,l("close")}function n(e){l("switch",e)}return oe(()=>t.src,()=>{R.value?(I.value=!0,p.value=!1,H(),F()):j()}),we(()=>{R.value?F():j()}),(e,r)=>(k(),N("div",{ref_key:"container",ref:v,class:d([a(h).b(),e.$attrs.class]),style:ie(a(W))},[f.value!==void 0&&!p.value?(k(),N("img",Be({key:0},a($),{src:f.value,loading:e.loading,style:a(Q),class:[a(h).e("inner"),a(D)&&a(h).e("preview"),I.value&&a(h).is("loading")],onClick:K,onLoad:te,onError:ae}),null,16,gt)):x("v-if",!0),I.value||p.value?(k(),N("div",{key:1,class:d(a(h).e("wrapper"))},[I.value?J(e.$slots,"placeholder",{key:0},()=>[w("div",{class:d(a(h).e("placeholder"))},null,2)]):p.value?J(e.$slots,"error",{key:1},()=>[w("div",{class:d(a(h).e("error"))},Me(a(z)("el.image.error")),3)]):x("v-if",!0)],2)):x("v-if",!0),a(D)?(k(),N(re,{key:2},[L.value?(k(),le(a(pt),{key:0,"z-index":e.zIndex,"initial-index":a(ee),infinite:e.infinite,"url-list":e.previewSrcList,"hide-on-click-modal":e.hideOnClickModal,teleported:e.previewTeleported,"close-on-press-escape":e.closeOnPressEscape,onClose:E,onSwitch:n},{default:C(()=>[e.$slots.viewer?(k(),N("div",wt,[J(e.$slots,"viewer")])):x("v-if",!0)]),_:3},8,["z-index","initial-index","infinite","url-list","hide-on-click-modal","teleported","close-on-press-escape"])):x("v-if",!0)],64)):x("v-if",!0)],6))}}));var _t=_e(yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/image/src/image.vue"]]);const Ot=be(_t);export{Ot as E,Tt as g};
