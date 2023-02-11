!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function n(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?t(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):t(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(t,n,i){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var a=i.call(t,n||"default");if("object"!==e(a))return a;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[n]=i,t}System.register(["./index-legacy.36e5d91f.js","./index-legacy.5f3309bc.js","./validator-legacy.9c827f10.js","./event-legacy.39ad8904.js","./base-legacy.42deb1c2.js"],(function(e){"use strict";var t,a,r,o,c,l,u,v,s,f,d,p,y,b,m,h,g,k,S,w,x,I,j,O,C,V,P,T,E,_,B,N,D,F,K,z,A,U,H,J,L,Y,Z,q,G,M;return{setters:[function(e){t=e.E,a=e.A,r=e.z,o=e.w,c=e.I,l=e.o,u=e.c,v=e.b,s=e.j,f=e.r,d=e.a0,p=e.k,y=e.l,b=e.J,m=e.m,h=e.t,g=e.F,k=e.p,S=e.L,w=e.K,x=e.g,I=e.a5},function(e){j=e.h,O=e.o,C=e.l,V=e.Z,P=e.v,T=e.j,E=e.H,_=e.u,B=e.F,N=e.ao,D=e.E,F=e.D,K=e._,z=e.aY,A=e.k},function(e){U=e.i},function(e){H=e.U,J=e.C,L=e.I},function(e){Y=e.c,Z=e.u,q=e.a,G=e.d,M=e.t}],execute:function(){var Q,R=j({modelValue:{type:[Boolean,String,Number],default:!1},value:{type:[Boolean,String,Number],default:!1},disabled:{type:Boolean,default:!1},width:{type:[String,Number],default:""},inlinePrompt:{type:Boolean,default:!1},activeIcon:{type:O,default:""},inactiveIcon:{type:O,default:""},activeText:{type:String,default:""},inactiveText:{type:String,default:""},activeColor:{type:String,default:""},inactiveColor:{type:String,default:""},borderColor:{type:String,default:""},activeValue:{type:[Boolean,String,Number],default:!0},inactiveValue:{type:[Boolean,String,Number],default:!1},name:{type:String,default:""},validateEvent:{type:Boolean,default:!0},id:String,loading:{type:Boolean,default:!1},beforeChange:{type:C(Function)},size:{type:String,validator:U},tabindex:{type:[String,Number]}}),W=(i(Q={},H,(function(e){return V(e)||P(e)||T(e)})),i(Q,J,(function(e){return V(e)||P(e)||T(e)})),i(Q,L,(function(e){return V(e)||P(e)||T(e)})),Q),X=["onClick"],$=["id","aria-checked","aria-disabled","name","true-value","false-value","disabled","tabindex","onKeydown"],ee=["aria-hidden"],te=["aria-hidden"],ne=["aria-hidden"],ie=["aria-hidden"],ae=t(n(n({},{name:"ElSwitch"}),{},{props:R,emits:W,setup:function(e,t){var i=t.expose,j=t.emit,O=e,C="ElSwitch",P=x(),T=Y().formItem,K=E(),A=_("switch");Z({from:'"value"',replacement:'"model-value" or "v-model"',scope:C,version:"2.3.0",ref:"https://element-plus.org/en-US/component/switch.html#attributes",type:"Attribute"},a((function(){var e;return!!(null==(e=P.vnode.props)?void 0:e.value)})));var U=q(O,{formItemContext:T}).inputId,Q=B(a((function(){return O.loading}))),R=r(!1!==O.modelValue),W=r(),ae=r(),re=a((function(){return[A.b(),A.m(K.value),A.is("disabled",Q.value),A.is("checked",le.value)]})),oe=a((function(){return{width:N(O.width)}}));o((function(){return O.modelValue}),(function(){R.value=!0})),o((function(){return O.value}),(function(){R.value=!1}));var ce=a((function(){return R.value?O.modelValue:O.value})),le=a((function(){return ce.value===O.activeValue}));[O.activeValue,O.inactiveValue].includes(ce.value)||(j(H,O.inactiveValue),j(J,O.inactiveValue),j(L,O.inactiveValue)),o(le,(function(e){var t;W.value.checked=e,O.validateEvent&&(null==(t=null==T?void 0:T.validate)||t.call(T,"change").catch((function(e){return G()})))}));var ue=function(){var e=le.value?O.inactiveValue:O.activeValue;j(H,e),j(J,e),j(L,e),I((function(){W.value.checked=le.value}))},ve=function(){if(!Q.value){var e=O.beforeChange;if(e){var t=e();[z(t),V(t)].includes(!0)||M(C,"beforeChange must return type `Promise<boolean>` or `boolean`"),z(t)?t.then((function(e){e&&ue()})).catch((function(e){})):t&&ue()}else ue()}},se=a((function(){return A.cssVarBlock(n(n(n({},O.activeColor?{"on-color":O.activeColor}:null),O.inactiveColor?{"off-color":O.inactiveColor}:null),O.borderColor?{"border-color":O.borderColor}:null))}));return c((function(){W.value.checked=le.value})),i({focus:function(){var e,t;null==(t=null==(e=W.value)?void 0:e.focus)||t.call(e)}}),function(e,t){return l(),u("div",{class:f(s(re)),style:S(s(se)),onClick:w(ve,["prevent"])},[v("input",{id:s(U),ref_key:"input",ref:W,class:f(s(A).e("input")),type:"checkbox",role:"switch","aria-checked":s(le),"aria-disabled":s(Q),name:e.name,"true-value":e.activeValue,"false-value":e.inactiveValue,disabled:s(Q),tabindex:e.tabindex,onChange:ue,onKeydown:d(ve,["enter"])},null,42,$),e.inlinePrompt||!e.inactiveIcon&&!e.inactiveText?m("v-if",!0):(l(),u("span",{key:0,class:f([s(A).e("label"),s(A).em("label","left"),s(A).is("active",!s(le))])},[e.inactiveIcon?(l(),p(s(D),{key:0},{default:y((function(){return[(l(),p(b(e.inactiveIcon)))]})),_:1})):m("v-if",!0),!e.inactiveIcon&&e.inactiveText?(l(),u("span",{key:1,"aria-hidden":s(le)},h(e.inactiveText),9,ee)):m("v-if",!0)],2)),v("span",{ref_key:"core",ref:ae,class:f(s(A).e("core")),style:S(s(oe))},[e.inlinePrompt?(l(),u("div",{key:0,class:f(s(A).e("inner"))},[e.activeIcon||e.inactiveIcon?(l(),u(g,{key:0},[e.activeIcon?(l(),p(s(D),{key:0,class:f([s(A).is("icon"),s(le)?s(A).is("show"):s(A).is("hide")])},{default:y((function(){return[(l(),p(b(e.activeIcon)))]})),_:1},8,["class"])):m("v-if",!0),e.inactiveIcon?(l(),p(s(D),{key:1,class:f([s(A).is("icon"),s(le)?s(A).is("hide"):s(A).is("show")])},{default:y((function(){return[(l(),p(b(e.inactiveIcon)))]})),_:1},8,["class"])):m("v-if",!0)],64)):e.activeText||e.inactiveIcon?(l(),u(g,{key:1},[e.activeText?(l(),u("span",{key:0,class:f([s(A).is("text"),s(le)?s(A).is("show"):s(A).is("hide")]),"aria-hidden":!s(le)},h(e.activeText.substring(0,3)),11,te)):m("v-if",!0),e.inactiveText?(l(),u("span",{key:1,class:f([s(A).is("text"),s(le)?s(A).is("hide"):s(A).is("show")]),"aria-hidden":s(le)},h(e.inactiveText.substring(0,3)),11,ne)):m("v-if",!0)],64)):m("v-if",!0)],2)):m("v-if",!0),v("div",{class:f(s(A).e("action"))},[e.loading?(l(),p(s(D),{key:0,class:f(s(A).is("loading"))},{default:y((function(){return[k(s(F))]})),_:1},8,["class"])):m("v-if",!0)],2)],6),e.inlinePrompt||!e.activeIcon&&!e.activeText?m("v-if",!0):(l(),u("span",{key:1,class:f([s(A).e("label"),s(A).em("label","right"),s(A).is("active",s(le))])},[e.activeIcon?(l(),p(s(D),{key:0},{default:y((function(){return[(l(),p(b(e.activeIcon)))]})),_:1})):m("v-if",!0),!e.activeIcon&&e.activeText?(l(),u("span",{key:1,"aria-hidden":!s(le)},h(e.activeText),9,ie)):m("v-if",!0)],2))],14,X)}}}));e("E",A(K(ae,[["__file","/home/runner/work/element-plus/element-plus/packages/components/switch/src/switch.vue"]])))}}}))}();