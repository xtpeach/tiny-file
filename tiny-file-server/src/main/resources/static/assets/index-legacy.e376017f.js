!function(){function e(n){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(n)}function n(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function t(e){for(var t=1;t<arguments.length;t++){var u=null!=arguments[t]?arguments[t]:{};t%2?n(Object(u),!0).forEach((function(n){r(e,n,u[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(u)):n(Object(u)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(u,n))}))}return e}function r(n,t,r){return(t=function(n){var t=function(n,t){if("object"!==e(n)||null===n)return n;var r=n[Symbol.toPrimitive];if(void 0!==r){var u=r.call(n,t||"default");if("object"!==e(u))return u;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===t?String:Number)(n)}(n,"string");return"symbol"===e(t)?t:String(t)}(t))in n?Object.defineProperty(n,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):n[t]=r,n}System.register(["./index-legacy.36e5d91f.js","./index-legacy.9da1c355.js","./index-legacy.5f3309bc.js","./event-legacy.39ad8904.js","./base-legacy.42deb1c2.js","./index-legacy.2783f16d.js","./index-legacy.886e1b44.js"],(function(e){"use strict";var n,u,i,l,a,o,c,s,f,m,d,p,b,v,y,g,N,h,S,x,V,j,O,I,w,P,E,k,A,F,_,K,B,D,T,z,C,M,Y,G,H,Q;return{setters:[function(e){n=e.E,u=e.z,i=e.B,l=e.A,a=e.w,o=e.I,c=e.aa,s=e.o,f=e.c,m=e.n,d=e.j,p=e.r,b=e.a0,v=e.p,y=e.l,g=e.k,N=e.m,h=e.K},function(e){S=e.E},function(e){x=e.h,V=e.m,j=e.j,O=e.u,I=e.ad,w=e.H,P=e.F,E=e.a2,k=e.aQ,A=e.E,F=e.a3,_=e.aR,K=e._,B=e.v,D=e.k},function(e){T=e.C,z=e.I,C=e.U},function(e){M=e.i,Y=e.c,G=e.d},function(e){H=e.u},function(e){Q=e.v}],execute:function(){var R,U=x({id:{type:String,default:void 0},step:{type:Number,default:1},stepStrictly:Boolean,max:{type:Number,default:Number.POSITIVE_INFINITY},min:{type:Number,default:Number.NEGATIVE_INFINITY},modelValue:Number,disabled:Boolean,size:V,controls:{type:Boolean,default:!0},controlsPosition:{type:String,default:"",values:["","right"]},valueOnClear:{type:[String,Number,null],validator:function(e){return null===e||j(e)||["min","max"].includes(e)},default:null},name:String,label:String,placeholder:String,precision:{type:Number,validator:function(e){return e>=0&&e===Number.parseInt("".concat(e),10)}}}),q=(r(R={},T,(function(e,n){return e!==n})),r(R,"blur",(function(e){return e instanceof FocusEvent})),r(R,"focus",(function(e){return e instanceof FocusEvent})),r(R,z,(function(e){return j(e)||M(e)})),r(R,C,(function(e){return j(e)||M(e)})),R),J=["aria-label","onKeydown"],L=["aria-label","onKeydown"],W=n(t(t({},{name:"ElInputNumber"}),{},{props:U,emits:q,setup:function(e,n){var t=n.expose,r=n.emit,x=e,V=H().t,K=O("input-number"),D=u(),T=i({currentValue:x.modelValue,userInput:null}),z=Y().formItem,C=l((function(){return j(x.modelValue)&&ne(x.modelValue,-1)<x.min})),R=l((function(){return j(x.modelValue)&&ne(x.modelValue)>x.max})),U=l((function(){var e=ee(x.step);return I(x.precision)?Math.max(ee(x.modelValue),e):(x.precision,x.precision)})),q=l((function(){return x.controls&&"right"===x.controlsPosition})),W=w(),X=P(),Z=l((function(){if(null!==T.userInput)return T.userInput;var e=T.currentValue;if(M(e))return"";if(j(e)){if(Number.isNaN(e))return"";I(x.precision)||(e=e.toFixed(x.precision))}return e})),$=function(e,n){if(I(n)&&(n=U.value),0===n)return Math.round(e);var t=String(e),r=t.indexOf(".");if(-1===r)return e;if(!t.replace(".","").split("")[r+n])return e;var u=t.length;return"5"===t.charAt(u-1)&&(t="".concat(t.slice(0,Math.max(0,u-1)),"6")),Number.parseFloat(Number(t).toFixed(n))},ee=function(e){if(M(e))return 0;var n=e.toString(),t=n.indexOf("."),r=0;return-1!==t&&(r=n.length-t-1),r},ne=function(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return j(e)?$(e+x.step*n):T.currentValue},te=function(){if(!X.value&&!R.value){var e=x.modelValue||0,n=ne(e);ie(n)}},re=function(){if(!X.value&&!C.value){var e=x.modelValue||0,n=ne(e,-1);ie(n)}},ue=function(e,n){var t=x.max,u=x.min,i=x.step,l=x.precision,a=x.stepStrictly,o=x.valueOnClear,c=Number(e);if(M(e)||Number.isNaN(c))return null;if(""===e){if(null===o)return null;c=B(o)?{min:u,max:t}[o]:o}return a&&(c=Math.round(c/i)*i),I(l)||(c=$(c,l)),(c>t||c<u)&&(c=c>t?t:u,n&&r("update:modelValue",c)),c},ie=function(e){var n,t=T.currentValue,u=ue(e);t!==u&&(T.userInput=null,r("update:modelValue",u),r("input",u),r("change",u,t),null==(n=null==z?void 0:z.validate)||n.call(z,"change").catch((function(e){return G()})),T.currentValue=u)},le=function(e){return T.userInput=e},ae=function(e){var n=""!==e?Number(e):"";(j(n)&&!Number.isNaN(n)||""===e)&&ie(n),T.userInput=null},oe=function(e){r("focus",e)},ce=function(e){var n;r("blur",e),null==(n=null==z?void 0:z.validate)||n.call(z,"blur").catch((function(e){return G()}))};return a((function(){return x.modelValue}),(function(e){T.currentValue=ue(e,!0),T.userInput=null}),{immediate:!0}),o((function(){var e,n=x.min,t=x.max,u=x.modelValue,i=null==(e=D.value)?void 0:e.input;if(i.setAttribute("role","spinbutton"),Number.isFinite(t)?i.setAttribute("aria-valuemax",String(t)):i.removeAttribute("aria-valuemax"),Number.isFinite(n)?i.setAttribute("aria-valuemin",String(n)):i.removeAttribute("aria-valuemin"),i.setAttribute("aria-valuenow",String(T.currentValue)),i.setAttribute("aria-disabled",String(X.value)),!j(u)&&null!=u){var l=Number(u);Number.isNaN(l)&&(l=null),r("update:modelValue",l)}})),c((function(){var e,n=null==(e=D.value)?void 0:e.input;null==n||n.setAttribute("aria-valuenow","".concat(T.currentValue))})),t({focus:function(){var e,n;null==(n=null==(e=D.value)?void 0:e.focus)||n.call(e)},blur:function(){var e,n;null==(n=null==(e=D.value)?void 0:e.blur)||n.call(e)}}),function(e,n){return s(),f("div",{class:p([d(K).b(),d(K).m(d(W)),d(K).is("disabled",d(X)),d(K).is("without-controls",!e.controls),d(K).is("controls-right",d(q))]),onDragstart:n[0]||(n[0]=h((function(){}),["prevent"]))},[e.controls?m((s(),f("span",{key:0,role:"button","aria-label":d(V)("el.inputNumber.decrease"),class:p([d(K).e("decrease"),d(K).is("disabled",d(C))]),onKeydown:b(re,["enter"])},[v(d(A),null,{default:y((function(){return[d(q)?(s(),g(d(E),{key:0})):(s(),g(d(k),{key:1}))]})),_:1})],42,J)),[[d(Q),re]]):N("v-if",!0),e.controls?m((s(),f("span",{key:1,role:"button","aria-label":d(V)("el.inputNumber.increase"),class:p([d(K).e("increase"),d(K).is("disabled",d(R))]),onKeydown:b(te,["enter"])},[v(d(A),null,{default:y((function(){return[d(q)?(s(),g(d(F),{key:0})):(s(),g(d(_),{key:1}))]})),_:1})],42,L)),[[d(Q),te]]):N("v-if",!0),v(d(S),{id:e.id,ref_key:"input",ref:D,type:"number",step:e.step,"model-value":d(Z),placeholder:e.placeholder,disabled:d(X),size:d(W),max:e.max,min:e.min,name:e.name,label:e.label,"validate-event":!1,onKeydown:[b(h(te,["prevent"]),["up"]),b(h(re,["prevent"]),["down"])],onBlur:ce,onFocus:oe,onInput:le,onChange:ae},null,8,["id","step","model-value","placeholder","disabled","size","max","min","name","label","onKeydown"])],34)}}}));e("E",D(K(W,[["__file","/home/runner/work/element-plus/element-plus/packages/components/input-number/src/input-number.vue"]])))}}}))}();