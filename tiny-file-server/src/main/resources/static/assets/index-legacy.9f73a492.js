!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return n};var n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(t,e,n){t[e]=n.value},a="function"==typeof Symbol?Symbol:{},l=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",c=a.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(N){s=function(t,e,n){return t[e]=n}}function f(t,e,n,r){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),l=new z(r||[]);return i(a,"_invoke",{value:j(t,n,l)}),a}function d(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(N){return{type:"throw",arg:N}}}n.wrap=f;var h={};function p(){}function m(){}function v(){}var g={};s(g,l,(function(){return this}));var y=Object.getPrototypeOf,x=y&&y(y(O([])));x&&x!==r&&o.call(x,l)&&(g=x);var b=v.prototype=p.prototype=Object.create(g);function w(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function _(e,n){function r(i,a,l,u){var c=d(e[i],e,a);if("throw"!==c.type){var s=c.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(t){r("next",t,l,u)}),(function(t){r("throw",t,l,u)})):n.resolve(f).then((function(t){s.value=t,l(s)}),(function(t){return r("throw",t,l,u)}))}u(c.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new n((function(n,o){r(t,e,n,o)}))}return a=a?a.then(o,o):o()}})}function j(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return S()}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var l=L(a,n);if(l){if(l===h)continue;return l}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var u=d(t,e,n);if("normal"===u.type){if(r=n.done?"completed":"suspendedYield",u.arg===h)continue;return{value:u.arg,done:n.done}}"throw"===u.type&&(r="completed",n.method="throw",n.arg=u.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),h;var o=d(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,h;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,h):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,h)}function E(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function k(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function z(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(E,this),this.reset(!0)}function O(t){if(t){var e=t[l];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,r=function e(){for(;++n<t.length;)if(o.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return r.next=r}}return{next:S}}function S(){return{value:void 0,done:!0}}return m.prototype=v,i(b,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:m,configurable:!0}),m.displayName=s(v,c,"GeneratorFunction"),n.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===m||"GeneratorFunction"===(e.displayName||e.name))},n.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},n.awrap=function(t){return{__await:t}},w(_.prototype),s(_.prototype,u,(function(){return this})),n.AsyncIterator=_,n.async=function(t,e,r,o,i){void 0===i&&(i=Promise);var a=new _(f(t,e,r,o),i);return n.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},w(b),s(b,c,"Generator"),s(b,l,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),n.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},n.values=O,z.prototype={constructor:z,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var l=o.call(i,"catchLoc"),u=o.call(i,"finallyLoc");if(l&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(l){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,h):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),h},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),k(n),h}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;k(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:O(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),h}},n}function n(t,e,n,r,o,i,a){try{var l=t[i](a),u=l.value}catch(c){return void n(c)}l.done?e(u):Promise.resolve(u).then(r,o)}var r=document.createElement("style");r.innerHTML=".zfile-install-logo[data-v-41665944]{background-image:url(/assets/install-step.a1a99263.svg)}.zfile-install-form[data-v-41665944]{--zfile-install-input-height: 45px}.zfile-install-form[data-v-41665944] .el-input__inner{height:var(--zfile-install-input-height)}.zfile-install-form[data-v-41665944] .el-button--large{--el-button-size: var(--zfile-install-input-height);height:var(--el-button-size)}.zfile-install-form[data-v-41665944] input:-internal-autofill-selected{-webkit-text-fill-color:var(--el-input-text-color, var(--el-text-color-regular));-webkit-transition:background-color 1000s ease-out .5s;transition:background-color 1000s ease-out .5s}\n",document.head.appendChild(r),System.register(["./index-legacy.36e5d91f.js","./base-legacy.42deb1c2.js","./form-item-legacy.2f6cdb0b.js","./button-legacy.de6f77a5.js","./input-legacy.1469b40d.js","./zfile-basic-legacy.a6b02774.js","./install-legacy.0aed2606.js","./index-legacy.5f3309bc.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.9da1c355.js","./BadgeCheckIcon-legacy.b7a329d3.js","./request-legacy.2cf0cbaa.js","./index-legacy.61ab75a6.js","./isEqual-legacy.d3a6f1d7.js","./event-legacy.39ad8904.js"],(function(t){"use strict";var r,o,i,a,l,u,c,s,f,d,h,p,m,v,g,y,x,b,w,_,j,L,E,k,z,O,S,N,V,I;return{setters:[function(t){r=t.e,o=t.z,i=t.B,a=t.h,l=t.f,u=t.o,c=t.c,s=t.b,f=t.p,d=t.l,h=t.j,p=t.K,m=t.ap,v=t.a,g=t.s,y=t.x},function(t){x=t.E},function(t){b=t.E,w=t.a},function(){},function(){},function(t){_=t._},function(t){j=t.i,L=t.a},function(t){E=t.aO,k=t.aL,z=t.aM,O=t.Y},function(t){S=t._},function(t){N=t.E},function(t){V=t.r},function(t){I=t.E},function(){},function(){},function(){}],execute:function(){var P={class:"h-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},U={class:"h-full lg:h-auto max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},G=function(t){return g("data-v-41665944"),t=t(),y(),t}((function(){return s("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[s("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-install-logo"})],-1)})),q={class:"w-full lg:w-1/2 xl:w-1/2 mt-10 p-6 sm:p-12"},C={class:"mt-0 flex flex-col items-center"},F={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},T={class:"w-full flex-1"},M=m('<div class="my-12 relative" data-v-41665944><div class="absolute inset-0 flex items-center" aria-hidden="true" data-v-41665944><div class="w-full border-t text-gray-600" data-v-41665944></div></div><div class="relative flex justify-center text-sm" data-v-41665944><span class="px-2 bg-white text-sm leading-none text-gray-600 tracking-wide font-medium" data-v-41665944>系统初始化</span></div></div>',1),Y=v(" 系统初始化 "),A={__name:"index",setup:function(t){var m=r(),v=o(!1),g=o(),y=i({siteName:"",username:"",password:"",domain:""}),S=o({siteName:[{required:!0,message:"请输入站点名称",trigger:["change","blur"]}],username:[{required:!0,message:"请输入管理员账号",trigger:["change","blur"]}],password:[{required:!0,message:"请输入管理员密码",trigger:["change","blur"]}],domain:[{required:!0,message:"请输入正确的域名，需以 http:// 或 https:// 开头",trigger:"change"}]}),A=function(){var t,r=(t=e().mark((function t(){return e().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.value.validate((function(t){t?(v.value=!0,L(y).then((function(t){I({message:"初始化成功",type:0===t.code?"success":"error",duration:1500,onClose:function(){m.push("/")}})})).finally((function(){v.value=!1}))):I.warning("请正确输入初始化值!")}));case 2:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(o,i){var a=t.apply(e,r);function l(t){n(a,o,i,l,u,"next",t)}function u(t){n(a,o,i,l,u,"throw",t)}l(void 0)}))});return function(){return r.apply(this,arguments)}}();return a((function(){var t=l();y.domain=t.zfileConfig.baseUrl||window.location.origin,j().then((function(t){t.data&&m.push("/")}))})),function(t,e){var n=N,r=b,o=x,i=w;return u(),c("div",P,[s("div",U,[G,s("div",q,[s("div",C,[s("h1",F,[s("img",{class:"w-16 cursor-pointer",onClick:e[0]||(e[0]=function(t){return e="https://github.com/zhaojun1998/zfile",void window.open(e);var e}),src:_})]),s("div",T,[M,f(i,{onSubmit:e[5]||(e[5]=p((function(){}),["prevent"])),ref_key:"installFormRef",ref:g,rules:h(S),model:h(y),class:"zfile-install-form",size:"large"},{default:d((function(){return[f(r,{class:"box animate__animated animate__fadeInUp",prop:"siteName"},{default:d((function(){return[f(n,{placeholder:"站点名称","prefix-icon":h(E),modelValue:h(y).siteName,"onUpdate:modelValue":e[1]||(e[1]=function(t){return h(y).siteName=t})},null,8,["prefix-icon","modelValue"])]})),_:1}),f(r,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:d((function(){return[f(n,{placeholder:"管理员账号","prefix-icon":h(k),modelValue:h(y).username,"onUpdate:modelValue":e[2]||(e[2]=function(t){return h(y).username=t}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),f(r,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:d((function(){return[f(n,{placeholder:"管理员密码",type:"password","show-password":"","prefix-icon":h(z),modelValue:h(y).password,"onUpdate:modelValue":e[3]||(e[3]=function(t){return h(y).password=t}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),f(r,{class:"box animate__animated animate__fadeInUp",prop:"domain"},{default:d((function(){return[f(n,{placeholder:"站点地址/域名","prefix-icon":h(O),modelValue:h(y).domain,"onUpdate:modelValue":e[4]||(e[4]=function(t){return h(y).domain=t}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),f(r,null,{default:d((function(){return[f(o,{"native-type":"submit",loading:h(v),class:"w-full",type:"primary",icon:h(V),onClick:A},{default:d((function(){return[Y]})),_:1},8,["loading","icon"])]})),_:1})]})),_:1},8,["rules","model"])])])])])])}}};t("default",S(A,[["__scopeId","data-v-41665944"]]))}}}))}();