import{z as g,u as P,e as Q,I as X,a8 as ee,n as te,j as t,o as y,k as z,l as i,b as e,p as a,t as ae,q as D,c as oe,Y as le,F as ie,m as se,a as r,s as re,x as ne}from"./index.e2144cf2.js";import{E as de}from"./base.a4c7cecc.js";/* empty css                *//* empty css               *//* empty css              *//* empty css            *//* empty css               *//* empty css                  *//* empty css               */import{E as me}from"./alert.c13229e5.js";import"./tooltip.f118fcb0.js";/* empty css               */import{_ as pe}from"./SvgIcon.26213fd5.js";import{b5 as U,b6 as ce,d as ue,V as _e,aR as fe}from"./index.8d3be363.js";import{Z as F,a as ve}from"./ZFormItem.99bc3a03.js";import{o as he,p as ge,e as L,q as xe}from"./admin-storage.0cee6b67.js";import{u as T,r as be}from"./common.520b7241.js";import{S as we}from"./sortable.esm.a99254e8.js";import{E as Z}from"./request.538cacc7.js";import{E as ye}from"./index.911dd79c.js";import ke from"./readme-editor-dialog.6843fb01.js";import{b as N}from"./route-block.89f12ae7.js";import{_ as Ie}from"./plugin-vue_export-helper.21dcd24c.js";import{E as Ve}from"./index.c45a91e5.js";import{E as Re}from"./index.f710691a.js";import{E as Ee,a as Se}from"./index.0866a0f5.js";import{r as Ce}from"./BadgeCheckIcon.ec7d0d76.js";import{E as ze}from"./index.b76f3ddb.js";import{v as Ue}from"./directive.a214ca06.js";import"./index.5cf4e3bb.js";import"./index.d27b8c90.js";import"./scroll.2d8cca42.js";import"./event.3ec63147.js";import"./focus-trap.3717ddd7.js";import"./validator.e67486a3.js";import"./index.4971e309.js";import"./dialog.828e041f.js";import"./use-dialog.e8f8c3c7.js";import"./event.776e7e11.js";import"./refs.1f25664c.js";/* empty css                */import"./index.893d9621.js";import"./index.fc5d6137.js";import"./isEqual.f1560033.js";import"./debounce.ef6045fb.js";import"./index.fa9b58ef.js";let s=g([]),q=g(!1);function Te(c,u){let x=u.params.storageId;const k=()=>{he(x).then(m=>{s.value=m.data,s.value.length===0&&b(),I()})},I=()=>{const m=document.querySelector(".z-form-body");we.create(m,{draggable:".expression-item",filter:".el-button, .editor-input",onEnd:l=>{if(l.oldIndex===l.newIndex)return;const _=s.value.splice(l.oldIndex-1,1)[0];s.value.splice(l.newIndex-1,0,_)}})},V=()=>{if(!s.value.find(l=>{if(T.isEmpty(l.description)||T.isEmpty(l.expression)||T.isEmpty(l.readmeText))return Z.warning("\u8BF7\u68C0\u67E5\u6570\u636E\u586B\u5199\u662F\u5426\u5B8C\u6574"),!0})){q.value=!0;for(let l=0;l<s.value.length;l++){let _=s.value[l];_.id=l+1}ge(x,s.value).then(()=>{ye.confirm("\u4FDD\u5B58\u6210\u529F, \u662F\u5426\u8FD4\u56DE\u5B58\u50A8\u6E90\u5217\u8868\uFF1F","\u63D0\u793A",{confirmButtonText:"\u786E\u5B9A",cancelButtonText:"\u53D6\u6D88",type:"success",callback:l=>{l==="confirm"&&c.push("/admin/storage-list")}})}).finally(()=>{q.value=!1})}},b=()=>{s.value.push({description:"\u8868\u8FBE\u5F0F - "+(s.value.length+1),expression:"",readmeText:"",displayMode:"top",storageId:x})};return{loading:q,loadReadmeData:k,readmeList:s,addReadmeItem:b,deleteReadmeItem:m=>{s.value.splice(m,1)},saveReadmeData:V}}const p=c=>(re("data-v-6346a8cf"),c=c(),ne(),c),qe={class:"flex justify-between"},Be=p(()=>e("span",{class:"mr-4 text-sm text-gray-500"},"\u517C\u5BB9\u4E3A\u8BFB\u53D6 readme.md",-1)),Me=p(()=>e("div",{class:"rules-tips"},"Glob \u8868\u8FBE\u5F0F\u89C4\u5219\uFF1A",-1)),De=p(()=>e("div",{class:"rules-tips"},[e("b",null,"/"),r(": \u6839\u76EE\u5F55, \u5982 "),e("span",{class:"code select-all"},"/"),r(" \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Fe=p(()=>e("div",{class:"rules-tips"},[e("b",null,"*"),r("\uFF1A\u5355\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),e("span",{class:"code select-all"},"/*"),r(" \u8868\u793A\u6839\u8DEF\u5F84\u4E0B\u7684\u76F4\u63A5\u5B50\u6587\u4EF6\u5939\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863\u663E\u793A.")],-1)),Le=p(()=>e("div",{class:"rules-tips"},[e("b",null,"**"),r("\uFF1A\u591A\u7EA7\u8DEF\u5F84\u901A\u914D\u7B26\uFF0C\u5982\u8868\u8FBE\u5F0F "),e("span",{class:"code select-all"},"/music/**"),r(" \u8868\u793A /music \u6587\u4EF6\u5939\u53CA\u4EE5\u4E0B\u6240\u6709\u6587\u4EF6\u5939\u90FD\u4F1A\u52A0\u8F7D\u6B64\u6587\u6863.")],-1)),Ne=p(()=>e("div",{class:"rules-tips"},"\u6CE8\uFF1A\u7CFB\u7EDF\u5339\u914D\u5230\u7B2C\u4E00\u4E2A\u7B26\u5408\u7684\u89C4\u5219\u5C31\u4F1A\u53D6\u6587\u6863\u8FDB\u884C\u663E\u793A\uFF0C\u6240\u4EE5\u8BF7\u8C03\u6574\u597D\u89C4\u5219\u987A\u5E8F\uFF0C\u4E0B\u65B9\u89C4\u5219\u53EF\u8FDB\u884C\u62D6\u62FD\u6392\u5E8F\u3002",-1)),Ze={class:"rules-tips-link"},je={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Ge=p(()=>e("span",null,"\u53C2\u8003\u6587\u7AE0 (Wikipedia)",-1)),$e={target:"_blank",class:"link",href:"http://www.ruanyifeng.com/blog/2018/09/bash-wildcards.html"},Ae=r("\u53C2\u8003\u6587\u7AE0 (\u962E\u4E00\u5CF0)"),Oe={target:"_blank",class:"link",href:"https://github.com/whinc/blog/issues/18"},We=r("\u53C2\u8003\u6587\u7AE0 (Github)"),Ye={class:"sm:flex sm:space-x-2 sm:border-b-0 sm:pb-0 border-b pb-2"},He=r("\u6DFB\u52A0\u66F4\u591A"),Je=r("\u4FDD\u5B58\u8BBE\u7F6E"),j={__name:"[storageId]",setup(c){let u=P(),x=Q(),k=u.params.storageId;const{loading:I,loadReadmeData:V,readmeList:b,addReadmeItem:B,deleteReadmeItem:m,saveReadmeData:l}=Te(x,u);X(()=>{V(),G()});const _=g(),G=()=>{L(k).then(n=>{n.data.type=n.data.type.key,_.value=n.data})};let f=g(!1);L(u.params.storageId).then(n=>{f.value=n.data.compatibilityReadme||!1});const $=()=>{xe(u.params.storageId,f.value).then(n=>{Z.success("\u4FDD\u5B58\u6210\u529F")})};let R=g({}),v=g(!1);const A=n=>{v.value=!0,R.value=n};return(n,h)=>{const O=pe,W=ee("router-link"),Y=Ve,M=ze,H=me,E=Re,S=Ee,J=Se,C=de,K=Ue;return te((y(),z(ve,{model:t(b),class:"zfile-admin-readme-form"},{"form-title":i(()=>{var o;return[e("div",qe,[e("div",null,[a(W,{to:"/admin/storage-list"},{default:i(()=>[a(O,{class:"inline mr-2 cursor-pointer",name:"file-type-back"})]),_:1}),e("span",null,"\u76EE\u5F55\u6587\u6863\uFF08"+ae((o=_.value)==null?void 0:o.name)+"\uFF09",1)]),a(M,{placement:"top",content:"\u542F\u7528\u540E\u4E0B\u53D1\u7684\u89C4\u5219\u8BBE\u7F6E\u4F1A\u5931\u6548\uFF0C\u4EC5\u4F1A\u4E3A\u8BFB\u53D6\u76EE\u5F55\u4E0B\u7684 readme.md \u6587\u4EF6\u6765\u6E32\u67D3\u6587\u6863, \u4E14\u56FA\u5B9A\u5728\u5E95\u90E8\u663E\u793A."},{default:i(()=>[e("div",null,[Be,a(Y,{onChange:$,"active-text":"\u662F","inline-prompt":"","inactive-text":"\u5426",modelValue:t(f),"onUpdate:modelValue":h[0]||(h[0]=w=>D(f)?f.value=w:f=w)},null,8,["modelValue"])])]),_:1})])]}),"form-sub-title":i(()=>[a(H,{closable:!1,type:"info"},{default:i(()=>[Me,De,Fe,Le,Ne,e("div",Ze,[e("a",je,[a(t(U),{class:"inline mr-1"}),Ge]),e("a",$e,[a(t(U),{class:"inline mr-1"}),Ae]),e("a",Oe,[a(t(U),{class:"inline mr-1"}),We])])]),_:1})]),footer:i(()=>[a(C,{type:"primary",size:"default",icon:t(Ce),onClick:t(l)},{default:i(()=>[Je]),_:1},8,["icon","onClick"])]),default:i(()=>[(y(!0),oe(ie,null,le(t(b),(o,w)=>(y(),z(F,{required:!0,key:o,class:"expression-item"},{default:i(()=>[e("div",Ye,[a(M,{content:"\u6B64\u5904\u53EF\u586B\u5199\u8868\u8FBE\u4E66\u63CF\u8FF0\uFF0C\u7528\u4E8E\u8F85\u52A9\u8BB0\u5FC6\uFF0C\u9632\u6B62\u65F6\u95F4\u8FC7\u957F\u540E\u4E0D\u77E5\u9053\u8868\u8FBE\u5F0F\u542B\u4E49.",placement:"top"},{default:i(()=>[a(E,{"prefix-icon":t(ce),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F\u63CF\u8FF0",modelValue:o.description,"onUpdate:modelValue":d=>o.description=d},null,8,["prefix-icon","modelValue","onUpdate:modelValue"])]),_:2},1024),a(E,{"prefix-icon":t(be),placeholder:"\u8BF7\u8F93\u5165\u8868\u8FBE\u5F0F",modelValue:o.expression,"onUpdate:modelValue":d=>o.expression=d,modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue","onUpdate:modelValue"]),a(E,{class:"editor-input",onClick:d=>A(o),readonly:"","prefix-icon":t(ue),placeholder:"\u8BF7\u70B9\u51FB\u7F16\u8F91\u6587\u6863",modelValue:o.readmeText,"onUpdate:modelValue":d=>o.readmeText=d},null,8,["onClick","prefix-icon","modelValue","onUpdate:modelValue"]),a(J,{class:"editor-input",modelValue:o.displayMode,"onUpdate:modelValue":d=>o.displayMode=d},{default:i(()=>[a(S,{label:"\u9876\u90E8\u663E\u793A",value:"top"}),a(S,{label:"\u5E95\u90E8\u663E\u793A",value:"bottom"}),a(S,{label:"\u5F39\u7A97\u663E\u793A",value:"dialog"})]),_:2},1032,["modelValue","onUpdate:modelValue"]),a(C,{type:"danger",onClick:d=>t(m)(w),icon:t(_e)},null,8,["onClick","icon"])])]),_:2},1024))),128)),a(F,null,{default:i(()=>[a(C,{type:"primary",size:"default",icon:t(fe),onClick:t(B)},{default:i(()=>[He]),_:1},8,["icon","onClick"])]),_:1}),t(v)?(y(),z(ke,{key:0,modelValue:t(R).readmeText,"onUpdate:modelValue":h[1]||(h[1]=o=>t(R).readmeText=o),visible:t(v),"onUpdate:visible":h[2]||(h[2]=o=>D(v)?v.value=o:v=o)},null,8,["modelValue","visible"])):se("",!0)]),_:1},8,["model"])),[[K,t(I)]])}}};typeof N=="function"&&N(j);var Gt=Ie(j,[["__scopeId","data-v-6346a8cf"]]);export{Gt as default};