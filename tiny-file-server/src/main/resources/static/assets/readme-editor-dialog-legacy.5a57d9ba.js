!function(){function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(){"use strict";/*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */e=function(){return r};var r={},n=Object.prototype,o=n.hasOwnProperty,i=Object.defineProperty||function(t,e,r){t[e]=r.value},a="function"==typeof Symbol?Symbol:{},u=a.iterator||"@@iterator",c=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function f(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{f({},"")}catch(V){f=function(t,e,r){return t[e]=r}}function s(t,e,r,n){var o=e&&e.prototype instanceof p?e:p,a=Object.create(o.prototype),u=new O(n||[]);return i(a,"_invoke",{value:L(t,r,u)}),a}function h(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(V){return{type:"throw",arg:V}}}r.wrap=s;var d={};function p(){}function y(){}function v(){}var g={};f(g,u,(function(){return this}));var m=Object.getPrototypeOf,b=m&&m(m(k([])));b&&b!==n&&o.call(b,u)&&(g=b);var w=v.prototype=p.prototype=Object.create(g);function x(t){["next","throw","return"].forEach((function(e){f(t,e,(function(t){return this._invoke(e,t)}))}))}function j(e,r){function n(i,a,u,c){var l=h(e[i],e,a);if("throw"!==l.type){var f=l.arg,s=f.value;return s&&"object"==t(s)&&o.call(s,"__await")?r.resolve(s.__await).then((function(t){n("next",t,u,c)}),(function(t){n("throw",t,u,c)})):r.resolve(s).then((function(t){f.value=t,u(f)}),(function(t){return n("throw",t,u,c)}))}c(l.arg)}var a;i(this,"_invoke",{value:function(t,e){function o(){return new r((function(r,o){n(t,e,r,o)}))}return a=a?a.then(o,o):o()}})}function L(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return P()}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var u=E(a,r);if(u){if(u===d)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var c=h(t,e,r);if("normal"===c.type){if(n=r.done?"completed":"suspendedYield",c.arg===d)continue;return{value:c.arg,done:r.done}}"throw"===c.type&&(n="completed",r.method="throw",r.arg=c.arg)}}}function E(t,e){var r=e.method,n=t.iterator[r];if(void 0===n)return e.delegate=null,"throw"===r&&t.iterator.return&&(e.method="return",e.arg=void 0,E(t,e),"throw"===e.method)||"return"!==r&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,d;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,d):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,d)}function _(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function S(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function O(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(_,this),this.reset(!0)}function k(t){if(t){var e=t[u];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,n=function e(){for(;++r<t.length;)if(o.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return n.next=n}}return{next:P}}function P(){return{value:void 0,done:!0}}return y.prototype=v,i(w,"constructor",{value:v,configurable:!0}),i(v,"constructor",{value:y,configurable:!0}),y.displayName=f(v,l,"GeneratorFunction"),r.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},r.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,v):(t.__proto__=v,f(t,l,"GeneratorFunction")),t.prototype=Object.create(w),t},r.awrap=function(t){return{__await:t}},x(j.prototype),f(j.prototype,c,(function(){return this})),r.AsyncIterator=j,r.async=function(t,e,n,o,i){void 0===i&&(i=Promise);var a=new j(s(t,e,n,o),i);return r.isGeneratorFunction(e)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(w),f(w,l,"Generator"),f(w,u,(function(){return this})),f(w,"toString",(function(){return"[object Generator]"})),r.keys=function(t){var e=Object(t),r=[];for(var n in e)r.push(n);return r.reverse(),function t(){for(;r.length;){var n=r.pop();if(n in e)return t.value=n,t.done=!1,t}return t.done=!0,t}},r.values=k,O.prototype={constructor:O,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(S),!t)for(var e in this)"t"===e.charAt(0)&&o.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var u=o.call(i,"catchLoc"),c=o.call(i,"finallyLoc");if(u&&c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(u){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var n=this.tryEntries[r];if(n.tryLoc<=this.prev&&o.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,d):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),d},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),S(r),d}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;S(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:k(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},r}function r(t,e,r,n,o,i,a){try{var u=t[i](a),c=u.value}catch(l){return void r(l)}u.done?e(c):Promise.resolve(c).then(n,o)}System.register(["./index-legacy.36e5d91f.js","./base-legacy.42deb1c2.js","./dialog-legacy.860223ab.js","./overlay-legacy.11b2d04d.js","./button-legacy.de6f77a5.js","./index-legacy.5f3309bc.js","./index-legacy.db387664.js","./scroll-legacy.9150773b.js","./use-dialog-legacy.c02bf22c.js","./event-legacy.39ad8904.js","./index-legacy.2783f16d.js","./focus-trap-legacy.c22d27e1.js","./refs-legacy.8d0c2cbc.js"],(function(t,n){"use strict";var o,i,a,u,c,l,f,s,h,d,p,y,v;return{setters:[function(t){o=t.d,i=t._,a=t.z,u=t.I,c=t.o,l=t.k,f=t.l,s=t.b,h=t.p,d=t.j,p=t.a},function(t){y=t.E},function(t){v=t.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var g={class:"dialog-footer"},m=p("取消"),b=p("保存");t("default",{__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup:function(t,p){var w=p.emit,x=t,j=o((function(){return new Promise((function(t,o){var a;(a=e().mark((function r(){var a,u,c;return e().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,i((function(){return n.import("./base-editor-legacy.54a00ebd.js").then((function(t){return t.b}))}),void 0);case 3:return a=e.sent,e.next=6,i((function(){return n.import("./base-editor-legacy.8e5d8c92.js")}),void 0);case 6:return e.next=8,i((function(){return n.import("./vuepress-legacy.a16a3322.js")}),void 0);case 8:return e.next=10,i((function(){return n.import("./vuepress-legacy.a1176571.js").then((function(t){return t.v}))}),void 0);case 10:return u=e.sent,e.next=13,i((function(){return n.import("./prism-legacy.2690923f.js").then((function(t){return t.p}))}),void 0);case 13:c=e.sent,a.use(u,{Prism:c}),t(a),e.next=21;break;case 18:e.prev=18,e.t0=e.catch(0),o(e.t0);case 21:case"end":return e.stop()}}),r,null,[[0,18]])})),function(){var t=this,e=arguments;return new Promise((function(n,o){var i=a.apply(t,e);function u(t){r(i,n,o,u,c,"next",t)}function c(t){r(i,n,o,u,c,"throw",t)}u(void 0)}))})()}))})),L=a("");u((function(){L.value=x.modelValue}));var E=function(){w("update:visible",!1)},_=function(){w("update:modelValue",L.value),w("update:visible",!1)};return function(t,e){var r=y,n=v;return c(),l(n,{modelValue:true,"onUpdate:modelValue":e[1]||(e[1]=function(t){return function(t){throw new TypeError('"'+t+'" is read-only')}("isShow")}),"destroy-on-close":!0,onClose:E,title:x.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:f((function(){return[s("span",g,[h(r,{onClick:E},{default:f((function(){return[m]})),_:1}),h(r,{type:"primary",onClick:_},{default:f((function(){return[b]})),_:1})])]})),default:f((function(){return[h(d(j),{modelValue:L.value,"onUpdate:modelValue":e[0]||(e[0]=function(t){return L.value=t}),height:"70vh"},null,8,["modelValue"])]})),_:1},8,["title"])}}})}}}))}();
