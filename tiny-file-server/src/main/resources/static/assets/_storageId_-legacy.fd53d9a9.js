!function(){var e=document.createElement("style");e.innerHTML=".expression-item[data-v-6346a8cf] .el-input__wrapper{width:100%}@media (min-width: 640px){.expression-item[data-v-6346a8cf] .el-input__wrapper{width:6rem}}@media (min-width: 768px){.expression-item[data-v-6346a8cf] .el-input__wrapper{width:9rem}}@media (min-width: 1024px){.expression-item[data-v-6346a8cf] .el-input__wrapper{width:12rem}}@media (min-width: 1280px){.expression-item[data-v-6346a8cf] .el-input__wrapper{width:16rem}}.zfile-admin-readme-form[data-v-6346a8cf] .z-form-sub-title{max-width:100%}.zfile-admin-readme-form .rules-tips[data-v-6346a8cf]{padding:.25rem;font-size:.875rem;line-height:1.25rem;font-weight:700}.zfile-admin-readme-form .rules-tips-link[data-v-6346a8cf]{margin-top:.5rem}.zfile-admin-readme-form .rules-tips-link[data-v-6346a8cf]>:not([hidden])~:not([hidden]){--tw-space-x-reverse: 0;margin-right:calc(1.25rem * var(--tw-space-x-reverse));margin-left:calc(1.25rem * calc(1 - var(--tw-space-x-reverse)))}.zfile-admin-readme-form .rules-tips-link svg[data-v-6346a8cf]{height:1rem;line-height:1.25rem;vertical-align:text-bottom}\n",document.head.appendChild(e),System.register(["./index-legacy.36e5d91f.js","./base-legacy.42deb1c2.js","./loading-legacy.fc9141ee.js","./button-legacy.de6f77a5.js","./input-legacy.1469b40d.js","./tag-legacy.b431dc88.js","./select-legacy.66ea6cce.js","./scrollbar-legacy.711cb4b5.js","./popper-legacy.59994c93.js","./alert-legacy.3c92018f.js","./tooltip-legacy.f5af8fcd.js","./switch-legacy.96b9f14f.js","./SvgIcon-legacy.87916a13.js","./index-legacy.5f3309bc.js","./ZFormItem-legacy.de82453a.js","./admin-storage-legacy.67d40a34.js","./common-legacy.20ae973e.js","./sortable.esm-legacy.a574004a.js","./request-legacy.2cf0cbaa.js","./index-legacy.53a36cc9.js","./readme-editor-dialog-legacy.5a57d9ba.js","./route-block-legacy.9534e494.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.77ebc7ec.js","./index-legacy.9da1c355.js","./index-legacy.b797079c.js","./BadgeCheckIcon-legacy.b7a329d3.js","./index-legacy.a940d7b6.js","./directive-legacy.10a2ac38.js","./index-legacy.61ab75a6.js","./index-legacy.db387664.js","./scroll-legacy.9150773b.js","./event-legacy.0bfbd831.js","./focus-trap-legacy.c22d27e1.js","./validator-legacy.9c827f10.js","./index-legacy.2783f16d.js","./dialog-legacy.860223ab.js","./use-dialog-legacy.c02bf22c.js","./event-legacy.39ad8904.js","./refs-legacy.8d0c2cbc.js","./overlay-legacy.11b2d04d.js","./index-legacy.9e8e5699.js","./index-legacy.38393ead.js","./isEqual-legacy.d3a6f1d7.js","./debounce-legacy.5562f648.js","./index-legacy.fcb41667.js"],(function(e){"use strict";var n,a,t,i,l,c,o,r,u,d,s,f,m,p,g,v,y,b,x,h,j,w,_,k,V,I,E,z,C,U,R,T,q,M,D,S,B,L,F,G,Z,H,W,Y,A,J,K,N,O,P;return{setters:[function(e){n=e.z,a=e.u,t=e.e,i=e.I,l=e.a8,c=e.n,o=e.j,r=e.o,u=e.k,d=e.l,s=e.b,f=e.p,m=e.t,p=e.q,g=e.c,v=e.Y,y=e.F,b=e.m,x=e.a,h=e.s,j=e.x},function(e){w=e.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(e){_=e.E},function(){},function(){},function(e){k=e._},function(e){V=e.b5,I=e.b6,E=e.d,z=e.V,C=e.aR},function(e){U=e.Z,R=e.a},function(e){T=e.o,q=e.p,M=e.e,D=e.q},function(e){S=e.u,B=e.r},function(e){L=e.S},function(e){F=e.E},function(e){G=e.E},function(e){Z=e.default},function(e){H=e.b},function(e){W=e._},function(e){Y=e.E},function(e){A=e.E},function(e){J=e.E,K=e.a},function(e){N=e.r},function(e){O=e.E},function(e){P=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var Q=n([]),X=n(!1);function $(e,n){var a=n.params.storageId,t=function(){var e=document.querySelector(".z-form-body");L.create(e,{draggable:".expression-item",filter:".el-button, .editor-input",onEnd:function(e){if(e.oldIndex!==e.newIndex){var n=Q.value.splice(e.oldIndex-1,1)[0];Q.value.splice(e.newIndex-1,0,n)}}})},i=function(){Q.value.push({description:"表达式 - "+(Q.value.length+1),expression:"",readmeText:"",displayMode:"top",storageId:a})};return{loading:X,loadReadmeData:function(){T(a).then((function(e){Q.value=e.data,0===Q.value.length&&i(),t()}))},readmeList:Q,addReadmeItem:i,deleteReadmeItem:function(e){Q.value.splice(e,1)},saveReadmeData:function(){if(!Q.value.find((function(e){if(S.isEmpty(e.description)||S.isEmpty(e.expression)||S.isEmpty(e.readmeText))return F.warning("请检查数据填写是否完整"),!0}))){X.value=!0;for(var n=0;n<Q.value.length;n++){Q.value[n].id=n+1}q(a,Q.value).then((function(){G.confirm("保存成功, 是否返回存储源列表？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"success",callback:function(n){"confirm"===n&&e.push("/admin/storage-list")}})})).finally((function(){X.value=!1}))}}}}var ee=function(e){return h("data-v-6346a8cf"),e=e(),j(),e},ne={class:"flex justify-between"},ae=ee((function(){return s("span",{class:"mr-4 text-sm text-gray-500"},"兼容为读取 readme.md",-1)})),te=ee((function(){return s("div",{class:"rules-tips"},"Glob 表达式规则：",-1)})),ie=ee((function(){return s("div",{class:"rules-tips"},[s("b",null,"/"),x(": 根目录, 如 "),s("span",{class:"code select-all"},"/"),x(" 表示根路径下会加载此文档显示.")],-1)})),le=ee((function(){return s("div",{class:"rules-tips"},[s("b",null,"*"),x("：单级路径通配符，如表达式 "),s("span",{class:"code select-all"},"/*"),x(" 表示根路径下的直接子文件夹会加载此文档显示.")],-1)})),ce=ee((function(){return s("div",{class:"rules-tips"},[s("b",null,"**"),x("：多级路径通配符，如表达式 "),s("span",{class:"code select-all"},"/music/**"),x(" 表示 /music 文件夹及以下所有文件夹都会加载此文档.")],-1)})),oe=ee((function(){return s("div",{class:"rules-tips"},"注：系统匹配到第一个符合的规则就会取文档进行显示，所以请调整好规则顺序，下方规则可进行拖拽排序。",-1)})),re={class:"rules-tips-link"},ue={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},de=ee((function(){return s("span",null,"参考文章 (Wikipedia)",-1)})),se={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},fe=x("参考文章 (阮一峰)"),me={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},pe=x("参考文章 (Github)"),ge={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},ve=x("添加更多"),ye=x("保存设置"),be={__name:"[storageId]",setup:function(e){var x=a(),h=t(),j=x.params.storageId,T=$(h,x),q=T.loading,S=T.loadReadmeData,L=T.readmeList,G=T.addReadmeItem,H=T.deleteReadmeItem,W=T.saveReadmeData;i((function(){S(),X()}));var Q=n(),X=function(){M(j).then((function(e){e.data.type=e.data.type.key,Q.value=e.data}))},ee=n(!1);M(x.params.storageId).then((function(e){ee.value=e.data.compatibilityReadme||!1}));var be=function(){D(x.params.storageId,ee.value).then((function(e){F.success("保存成功")}))},xe=n({}),he=n(!1);return function(e,n){var a=k,t=l("router-link"),i=Y,x=O,h=_,j=A,T=J,M=K,D=w,S=P;return c((r(),u(R,{model:o(L),class:"zfile-admin-readme-form"},{"form-title":d((function(){var e;return[s("div",ne,[s("div",null,[f(t,{to:"/admin/storage-list"},{default:d((function(){return[f(a,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]})),_:1}),s("span",null,"目录文档（"+m(null===(e=Q.value)||void 0===e?void 0:e.name)+"）",1)]),f(x,{placement:"top",content:"启用后下发的规则设置会失效，仅会为读取目录下的 readme.md 文件来渲染文档, 且固定在底部显示."},{default:d((function(){return[s("div",null,[ae,f(i,{onChange:be,"active-text":"是","inline-prompt":"","inactive-text":"否",modelValue:o(ee),"onUpdate:modelValue":n[0]||(n[0]=function(e){return p(ee)?ee.value=e:ee=e})},null,8,["modelValue"])])]})),_:1})])]})),"form-sub-title":d((function(){return[f(h,{closable:!1,type:"info"},{default:d((function(){return[te,ie,le,ce,oe,s("div",re,[s("a",ue,[f(o(V),{class:"inline mr-1"}),de]),s("a",se,[f(o(V),{class:"inline mr-1"}),fe]),s("a",me,[f(o(V),{class:"inline mr-1"}),pe])])]})),_:1})]})),footer:d((function(){return[f(D,{type:"primary",size:"default",icon:o(N),onClick:o(W)},{default:d((function(){return[ye]})),_:1},8,["icon","onClick"])]})),default:d((function(){return[(r(!0),g(y,null,v(o(L),(function(e,n){return r(),u(U,{required:!0,key:e,class:"expression-item"},{default:d((function(){return[s("div",ge,[f(x,{content:"此处可填写表达书描述，用于辅助记忆，防止时间过长后不知道表达式含义.",placement:"top"},{default:d((function(){return[f(j,{"prefix-icon":o(I),placeholder:"请输入表达式描述",modelValue:e.description,"onUpdate:modelValue":function(n){return e.description=n}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]})),_:2},1024),f(j,{"prefix-icon":o(B),placeholder:"请输入表达式",modelValue:e.expression,"onUpdate:modelValue":function(n){return e.expression=n},modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),f(j,{class:"editor-input",onClick:function(n){return a=e,he.value=!0,void(xe.value=a);var a},readonly:"","prefix-icon":o(E),placeholder:"请点击编辑文档",modelValue:e.readmeText,"onUpdate:modelValue":function(n){return e.readmeText=n}},null,8,["onClick","prefix-icon","modelValue","onUpdate:modelValue"]),f(M,{class:"editor-input",modelValue:e.displayMode,"onUpdate:modelValue":function(n){return e.displayMode=n}},{default:d((function(){return[f(T,{label:"顶部显示",value:"top"}),f(T,{label:"底部显示",value:"bottom"}),f(T,{label:"弹窗显示",value:"dialog"})]})),_:2},1032,["modelValue","onUpdate:modelValue"]),f(D,{type:"danger",onClick:function(e){return o(H)(n)},icon:o(z)},null,8,["onClick","icon"])])]})),_:2},1024)})),128)),f(U,null,{default:d((function(){return[f(D,{type:"primary",size:"default",icon:o(C),onClick:o(G)},{default:d((function(){return[ve]})),_:1},8,["icon","onClick"])]})),_:1}),o(he)?(r(),u(Z,{key:0,modelValue:o(xe).readmeText,"onUpdate:modelValue":n[1]||(n[1]=function(e){return o(xe).readmeText=e}),visible:o(he),"onUpdate:visible":n[2]||(n[2]=function(e){return p(he)?he.value=e:he=e})},null,8,["modelValue","visible"])):b("",!0)]})),_:1},8,["model"])),[[S,o(q)]])}}};"function"==typeof H&&H(be);e("default",W(be,[["__scopeId","data-v-6346a8cf"]]))}}}))}();
