!function(){var e=document.createElement("style");e.innerHTML=".expression-item[data-v-bab6a0aa] .el-input__wrapper{width:100%}@media (min-width: 640px){.expression-item[data-v-bab6a0aa] .el-input__wrapper{width:9rem}}@media (min-width: 768px){.expression-item[data-v-bab6a0aa] .el-input__wrapper{width:12rem}}@media (min-width: 1024px){.expression-item[data-v-bab6a0aa] .el-input__wrapper{width:16rem}}@media (min-width: 1280px){.expression-item[data-v-bab6a0aa] .el-input__wrapper{width:20rem}}.zfile-admin-password-form[data-v-bab6a0aa] .z-form-sub-title{max-width:100%}.zfile-admin-password-form .rules-tips[data-v-bab6a0aa]{padding:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:700}.zfile-admin-password-form .rules-tips-link[data-v-bab6a0aa]{margin-top:.5rem}.zfile-admin-password-form .rules-tips-link[data-v-bab6a0aa]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.zfile-admin-password-form .rules-tips-link svg[data-v-bab6a0aa]{height:1rem;line-height:1.25rem;vertical-align:text-bottom}\n",document.head.appendChild(e),System.register(["./index-legacy.36e5d91f.js","./base-legacy.42deb1c2.js","./loading-legacy.fc9141ee.js","./button-legacy.de6f77a5.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.59994c93.js","./input-legacy.1469b40d.js","./alert-legacy.3c92018f.js","./SvgIcon-legacy.87916a13.js","./index-legacy.5f3309bc.js","./ZFormItem-legacy.de82453a.js","./admin-storage-legacy.67d40a34.js","./common-legacy.20ae973e.js","./sortable.esm-legacy.a574004a.js","./request-legacy.2cf0cbaa.js","./index-legacy.53a36cc9.js","./route-block-legacy.9534e494.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.9da1c355.js","./BadgeCheckIcon-legacy.b7a329d3.js","./index-legacy.a940d7b6.js","./directive-legacy.10a2ac38.js","./index-legacy.61ab75a6.js","./index-legacy.db387664.js","./scroll-legacy.9150773b.js","./event-legacy.0bfbd831.js","./focus-trap-legacy.c22d27e1.js","./validator-legacy.9c827f10.js","./index-legacy.2783f16d.js","./event-legacy.39ad8904.js"],(function(e){"use strict";var n,a,t,i,r,o,l,s,c,u,d,f,p,m,g,b,v,w,y,h,x,j,k,_,I,z,V,E,C,P,U,B,D,H,L,S,q,M,T,F,G,Z;return{setters:[function(e){n=e.o,a=e.k,t=e.p,i=e.z,r=e.u,o=e.e,l=e.I,s=e.a8,c=e.n,u=e.j,d=e.l,f=e.b,p=e.t,m=e.c,g=e.Y,b=e.F,v=e.a,w=e.s,y=e.x},function(e){h=e.E},function(){},function(){},function(){},function(){},function(){},function(e){x=e.E},function(e){j=e._},function(e){k=e.b5,_=e.b6,I=e.V,z=e.aR},function(e){V=e.Z,E=e.a},function(e){C=e.m,P=e.n,U=e.e},function(e){B=e.u,D=e.r},function(e){H=e.S},function(e){L=e.E},function(e){S=e.E},function(e){q=e.b},function(e){M=e._},function(e){T=e.E},function(e){F=e.r},function(e){G=e.E},function(e){Z=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function A(e,i){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z"})])}var R=i([]),W=i(!1);function Y(e,n){var a=n.params.storageId,t=function(){var e=document.querySelector(".z-form-body");H.create(e,{draggable:".expression-item",onEnd:function(e){if(e.oldIndex!==e.newIndex){var n=R.value.splice(e.oldIndex-1,1)[0];R.value.splice(e.newIndex-1,0,n)}}})},i=function(){R.value.push({description:"表达式 - "+(R.value.length+1),expression:"",password:"",storageId:a})};return{loading:W,loadPasswordData:function(){C(a).then((function(e){R.value=e.data,0===R.value.length&&i(),t()}))},passwordList:R,addPasswordItem:i,deletePasswordItem:function(e){R.value.splice(e,1)},savePasswordData:function(){if(!R.value.find((function(e){if(B.isEmpty(e.description)||B.isEmpty(e.expression)||B.isEmpty(e.password))return L.warning("请检查数据填写是否完整"),!0}))){W.value=!0;for(var n=0;n<R.value.length;n++){R.value[n].id=n+1}P(a,R.value).then((function(){S.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(n){"confirm"===n&&e.push("/admin/storage-list")}})})).finally((function(){W.value=!1}))}}}}var J=function(e){return w("data-v-bab6a0aa"),e=e(),y(),e},K={class:"flex justify-items-center"},N=J((function(){return f("div",{class:"rules-tips"},"Glob 表达式规则：",-1)})),O=J((function(){return f("div",{class:"rules-tips"},[f("b",null,"单层根目录加密"),v(": 如 "),f("span",{class:"select-all code"},"/"),v(" 表示根路径下需要密码访问.")],-1)})),Q=J((function(){return f("div",{class:"rules-tips"},[f("b",null,"单层子目录加密"),v(": 如 "),f("span",{class:"select-all code"},"/music/*"),v(" 表示根目录下的 music 文件夹需要密码访问, 子文件夹不加密.")],-1)})),X=J((function(){return f("div",{class:"rules-tips"},[f("b",null,"嵌套子目录加密"),v(": 如 "),f("span",{class:"select-all code"},"/music/**"),v(" 表示根目录下的 music 文件夹及其所有子文件夹都需要密码访问.")],-1)})),$=J((function(){return f("div",{class:"rules-tips"},"注：系统匹配到第一个符合的规则就会取密码进行校验，并返回结果，所以请调整好规则顺序，下方规则可进行拖拽排序。",-1)})),ee={class:"rules-tips-link"},ne={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ae=J((function(){return f("span",null,"参考文章 (Wikipedia)",-1)})),te={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},ie=v("参考文章 (阮一峰)"),re={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},oe=v("参考文章 (Github)"),le={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},se=v("添加更多"),ce=v("保存设置"),ue={__name:"[storageId]",setup:function(e){var v=r(),w=o(),y=v.params.storageId,C=Y(w,v),P=C.loading,B=C.loadPasswordData,H=C.passwordList,L=C.addPasswordItem,S=C.deletePasswordItem,q=C.savePasswordData;l((function(){B(),R()}));var M=i(),R=function(){U(y).then((function(e){e.data.type=e.data.type.key,M.value=e.data}))};return function(e,i){var r=j,o=s("router-link"),l=x,v=T,w=G,y=h,C=Z;return c((n(),a(E,{model:u(H),class:"zfile-admin-password-form"},{"form-title":d((function(){var e;return[f("div",K,[t(o,{to:"/admin/storage-list"},{default:d((function(){return[t(r,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]})),_:1}),f("span",null,"密码文件夹（"+p(null===(e=M.value)||void 0===e?void 0:e.name)+"）",1)])]})),"form-sub-title":d((function(){return[t(l,{closable:!1,type:"info"},{default:d((function(){return[N,O,Q,X,$,f("div",ee,[f("a",ne,[t(u(k),{class:"inline mr-1"}),ae]),f("a",te,[t(u(k),{class:"inline mr-1"}),ie]),f("a",re,[t(u(k),{class:"inline mr-1"}),oe])])]})),_:1})]})),footer:d((function(){return[t(y,{type:"primary",size:"default",icon:u(F),onClick:u(q)},{default:d((function(){return[ce]})),_:1},8,["icon","onClick"])]})),default:d((function(){return[(n(!0),m(b,null,g(u(H),(function(e,i){return n(),a(V,{required:!0,key:e,class:"expression-item"},{default:d((function(){return[f("div",le,[t(w,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:d((function(){return[t(v,{"prefix-icon":u(_),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":function(n){return e.description=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]})),_:2},1024),t(v,{"prefix-icon":u(D),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":function(n){return e.expression=n},modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),t(v,{"prefix-icon":u(A),placeholder:"请输入密码",type:"password","show-password":"",modelValue:e.password,"onUpdate:modelValue":function(n){return e.password=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),t(y,{type:"danger",onClick:function(e){return u(S)(i)},icon:u(I)},null,8,["onClick","icon"])])]})),_:2},1024)})),128)),t(V,null,{default:d((function(){return[t(y,{type:"primary",size:"default",icon:u(z),onClick:u(L)},{default:d((function(){return[se]})),_:1},8,["icon","onClick"])]})),_:1})]})),_:1},8,["model"])),[[C,u(P)]])}}};"function"==typeof q&&q(ue);e("default",M(ue,[["__scopeId","data-v-bab6a0aa"]]))}}}))}();