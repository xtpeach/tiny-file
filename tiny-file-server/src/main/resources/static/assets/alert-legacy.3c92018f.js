!function(){function e(r){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(r)}function r(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);r&&(l=l.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,l)}return t}function t(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?r(Object(o),!0).forEach((function(r){l(e,r,o[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):r(Object(o)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(o,r))}))}return e}function l(r,t,l){return(t=function(r){var t=function(r,t){if("object"!==e(r)||null===r)return r;var l=r[Symbol.toPrimitive];if(void 0!==l){var o=l.call(r,t||"default");if("object"!==e(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(r)}(r,"string");return"symbol"===e(t)?t:String(t)}(t))in r?Object.defineProperty(r,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):r[t]=l,r}var o=document.createElement("style");o.innerHTML=".el-alert{--el-alert-padding: 8px 16px;--el-alert-border-radius-base: var(--el-border-radius-base);--el-alert-title-font-size: 13px;--el-alert-description-font-size: 12px;--el-alert-close-font-size: 12px;--el-alert-close-customed-font-size: 13px;--el-alert-icon-size: 16px;--el-alert-icon-large-size: 28px;width:100%;padding:var(--el-alert-padding);margin:0;box-sizing:border-box;border-radius:var(--el-alert-border-radius-base);position:relative;background-color:var(--el-color-white);overflow:hidden;opacity:1;display:flex;align-items:center;transition:opacity var(--el-transition-duration-fast)}.el-alert.is-light .el-alert__close-btn{color:var(--el-text-color-placeholder)}.el-alert.is-dark .el-alert__close-btn,.el-alert.is-dark .el-alert__description{color:var(--el-color-white)}.el-alert.is-center{justify-content:center}.el-alert--success{--el-alert-bg-color: var(--el-color-success-light-9)}.el-alert--success.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-success)}.el-alert--success.is-light .el-alert__description{color:var(--el-color-success)}.el-alert--success.is-dark{background-color:var(--el-color-success);color:var(--el-color-white)}.el-alert--info{--el-alert-bg-color: var(--el-color-info-light-9)}.el-alert--info.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-info)}.el-alert--info.is-light .el-alert__description{color:var(--el-color-info)}.el-alert--info.is-dark{background-color:var(--el-color-info);color:var(--el-color-white)}.el-alert--warning{--el-alert-bg-color: var(--el-color-warning-light-9)}.el-alert--warning.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-warning)}.el-alert--warning.is-light .el-alert__description{color:var(--el-color-warning)}.el-alert--warning.is-dark{background-color:var(--el-color-warning);color:var(--el-color-white)}.el-alert--error{--el-alert-bg-color: var(--el-color-error-light-9)}.el-alert--error.is-light{background-color:var(--el-alert-bg-color);color:var(--el-color-error)}.el-alert--error.is-light .el-alert__description{color:var(--el-color-error)}.el-alert--error.is-dark{background-color:var(--el-color-error);color:var(--el-color-white)}.el-alert__content{display:table-cell;padding:0 8px}.el-alert .el-alert__icon{font-size:var(--el-alert-icon-size);width:var(--el-alert-icon-size)}.el-alert .el-alert__icon.is-big{font-size:var(--el-alert-icon-large-size);width:var(--el-alert-icon-large-size)}.el-alert__title{font-size:var(--el-alert-title-font-size);line-height:18px;vertical-align:text-top}.el-alert__title.is-bold{font-weight:700}.el-alert .el-alert__description{font-size:var(--el-alert-description-font-size);margin:5px 0 0}.el-alert .el-alert__close-btn{font-size:var(--el-alert-close-font-size);opacity:1;position:absolute;top:12px;right:15px;cursor:pointer}.el-alert .el-alert__close-btn.is-customed{font-style:normal;font-size:var(--el-alert-close-customed-font-size);top:9px}.el-alert-fade-enter-from,.el-alert-fade-leave-active{opacity:0}\n",document.head.appendChild(o),System.register(["./index-legacy.36e5d91f.js","./index-legacy.5f3309bc.js"],(function(e){"use strict";var r,o,i,n,a,c,s,u,f,d,p,g,b,v,y,m,h,_,w,k,x,z,j,O,S,P,E,T,C;return{setters:[function(e){r=e.E,o=e.S,i=e.z,n=e.A,a=e.o,c=e.k,s=e.l,u=e.n,f=e.v,d=e.b,p=e.j,g=e.r,b=e.J,v=e.m,y=e.c,m=e.G,h=e.t,_=e.p,w=e.F,k=e.T,x=e.a},function(e){z=e.h,j=e.aa,O=e.T,S=e.q,P=e.u,E=e.E,T=e._,C=e.k}],execute:function(){var D=z({title:{type:String,default:""},description:{type:String,default:""},type:{type:String,values:j(O),default:"info"},closable:{type:Boolean,default:!0},closeText:{type:String,default:""},showIcon:Boolean,center:Boolean,effect:{type:String,values:["light","dark"],default:"light"}}),$={close:function(e){return e instanceof MouseEvent}},B=r(t(t({},{name:"ElAlert"}),{},{props:D,emits:$,setup:function(e,r){var t=r.emit,z=e,j=S.Close,T=o(),C=P("alert"),D=i(!0),$=n((function(){return O[z.type]})),B=n((function(){return[C.e("icon"),l({},C.is("big"),!!z.description||!!T.default)]})),A=n((function(){return z.description||l({},C.is("bold"),T.default)})),I=function(e){D.value=!1,t("close",e)};return function(e,r){return a(),c(k,{name:p(C).b("fade"),persisted:""},{default:s((function(){return[u(d("div",{class:g([p(C).b(),p(C).m(e.type),p(C).is("center",e.center),p(C).is(e.effect)]),role:"alert"},[e.showIcon&&p($)?(a(),c(p(E),{key:0,class:g(p(B))},{default:s((function(){return[(a(),c(b(p($))))]})),_:1},8,["class"])):v("v-if",!0),d("div",{class:g(p(C).e("content"))},[e.title||e.$slots.title?(a(),y("span",{key:0,class:g([p(C).e("title"),p(A)])},[m(e.$slots,"title",{},(function(){return[x(h(e.title),1)]}))],2)):v("v-if",!0),e.$slots.default||e.description?(a(),y("p",{key:1,class:g(p(C).e("description"))},[m(e.$slots,"default",{},(function(){return[x(h(e.description),1)]}))],2)):v("v-if",!0),e.closable?(a(),y(w,{key:2},[e.closeText?(a(),y("div",{key:0,class:g([p(C).e("close-btn"),p(C).is("customed")]),onClick:I},h(e.closeText),3)):(a(),c(p(E),{key:1,class:g(p(C).e("close-btn")),onClick:I},{default:s((function(){return[_(p(j))]})),_:1},8,["class"]))],64)):v("v-if",!0)],2)],2),[[f,D.value]])]})),_:3},8,["name"])}}}));e("E",C(T(B,[["__file","/home/runner/work/element-plus/element-plus/packages/components/alert/src/alert.vue"]])))}}}))}();