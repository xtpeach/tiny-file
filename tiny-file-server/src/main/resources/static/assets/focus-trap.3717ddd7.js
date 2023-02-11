var k=(e,s,n)=>new Promise((o,c)=>{var a=i=>{try{p(n.next(i))}catch(v){c(v)}},E=i=>{try{p(n.throw(i))}catch(v){c(v)}},p=i=>i.done?o(i.value):Promise.resolve(i.value).then(a,E);p((n=n.apply(e,s)).next())});import{i as A,s as H,_ as q,v as W}from"./index.8d3be363.js";import{I as V,a2 as $,E as z,z as G,V as J,w as y,j as F,a5 as P,G as Y}from"./index.e2144cf2.js";import{i as Q}from"./base.a4c7cecc.js";let m=[];const X=e=>{const s=n=>{const o=n;o.key===H.esc&&m.forEach(c=>c(o))};V(()=>{m.length===0&&document.addEventListener("keydown",s),A&&m.push(e)}),$(()=>{m=m.filter(n=>n!==e),m.length===0&&A&&document.removeEventListener("keydown",s)})},B=e=>{const s=[],n=document.createTreeWalker(e,NodeFilter.SHOW_ELEMENT,{acceptNode:o=>{const c=o.tagName==="INPUT"&&o.type==="hidden";return o.disabled||o.hidden||c?NodeFilter.FILTER_SKIP:o.tabIndex>=0||o===document.activeElement?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_SKIP}});for(;n.nextNode();)s.push(n.currentNode);return s},w=(e,s)=>{for(const n of e)if(!Z(n,s))return n},Z=(e,s)=>{if(getComputedStyle(e).visibility==="hidden")return!0;for(;e;){if(s&&e===s)return!1;if(getComputedStyle(e).display==="none")return!0;e=e.parentElement}return!1},ee=e=>{const s=B(e),n=w(s,e),o=w(s.reverse(),e);return[n,o]},te=e=>e instanceof HTMLInputElement&&"select"in e,l=(e,s)=>{if(e&&e.focus){const n=document.activeElement;e.focus({preventScroll:!0}),e!==n&&te(e)&&s&&e.select()}};function K(e,s){const n=[...e],o=e.indexOf(s);return o!==-1&&n.splice(o,1),n}const ne=()=>{let e=[];return{push:o=>{const c=e[0];c&&o!==c&&c.pause(),e=K(e,o),e.unshift(o)},remove:o=>{var c,a;e=K(e,o),(a=(c=e[0])==null?void 0:c.resume)==null||a.call(c)}}},se=(e,s=!1)=>{const n=document.activeElement;for(const o of e)if(l(o,s),document.activeElement!==n)return},R=ne(),h="focus-trap.focus-after-trapped",g="focus-trap.focus-after-released",D={cancelable:!0,bubbles:!1},U="focusAfterTrapped",x="focusAfterReleased",oe=Symbol("elFocusTrap"),re=z({name:"ElFocusTrap",inheritAttrs:!1,props:{loop:Boolean,trapped:Boolean,focusTrapEl:Object,focusStartEl:{type:[Object,String],default:"first"}},emits:[U,x,"focusin","focusout","focusout-prevented","release-requested"],setup(e,{emit:s}){const n=G();let o,c;X(t=>{e.trapped&&!a.paused&&s("release-requested",t)});const a={paused:!1,pause(){this.paused=!0},resume(){this.paused=!1}},E=t=>{if(!e.loop&&!e.trapped||a.paused)return;const{key:r,altKey:u,ctrlKey:f,metaKey:d,currentTarget:j,shiftKey:I}=t,{loop:N}=e,M=r===H.tab&&!u&&!f&&!d,T=document.activeElement;if(M&&T){const _=j,[b,S]=ee(_);b&&S?!I&&T===S?(t.preventDefault(),N&&l(b,!0),s("focusout-prevented")):I&&[b,_].includes(T)&&(t.preventDefault(),N&&l(S,!0),s("focusout-prevented")):T===_&&(t.preventDefault(),s("focusout-prevented"))}};J(oe,{focusTrapRef:n,onKeydown:E}),y(()=>e.focusTrapEl,t=>{t&&(n.value=t)},{immediate:!0}),y([n],([t],[r])=>{t&&(t.addEventListener("keydown",E),t.addEventListener("focusin",v),t.addEventListener("focusout",L)),r&&(r.removeEventListener("keydown",E),r.removeEventListener("focusin",v),r.removeEventListener("focusout",L))});const p=t=>{s(U,t)},i=t=>s(x,t),v=t=>{const r=F(n);if(!r)return;const u=t.target,f=u&&r.contains(u);f&&s("focusin",t),!a.paused&&e.trapped&&(f?c=u:l(c,!0))},L=t=>{const r=F(n);if(!(a.paused||!r))if(e.trapped){const u=t.relatedTarget;!Q(u)&&!r.contains(u)&&setTimeout(()=>{!a.paused&&e.trapped&&l(c,!0)},0)}else{const u=t.target;u&&r.contains(u)||s("focusout",t)}};function C(){return k(this,null,function*(){yield P();const t=F(n);if(t){R.push(a);const r=document.activeElement;if(o=r,!t.contains(r)){const f=new Event(h,D);t.addEventListener(h,p),t.dispatchEvent(f),f.defaultPrevented||P(()=>{let d=e.focusStartEl;W(d)||(l(d),document.activeElement!==d&&(d="first")),d==="first"&&se(B(t),!0),(document.activeElement===r||d==="container")&&l(t)})}}})}function O(){const t=F(n);if(t){t.removeEventListener(h,p);const r=new Event(g,D);t.addEventListener(g,i),t.dispatchEvent(r),r.defaultPrevented||l(o!=null?o:document.body,!0),t.removeEventListener(g,p),R.remove(a)}}return V(()=>{e.trapped&&C(),y(()=>e.trapped,t=>{t?C():O()})}),$(()=>{e.trapped&&O()}),{onKeydown:E}}});function ce(e,s,n,o,c,a){return Y(e.$slots,"default",{handleKeydown:e.onKeydown})}var le=q(re,[["render",ce],["__file","/home/runner/work/element-plus/element-plus/packages/components/focus-trap/src/focus-trap.vue"]]);export{le as E,oe as F};
