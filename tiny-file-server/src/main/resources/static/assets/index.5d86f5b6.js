import{e as V,z as h,I as C,o as u,c as b,k as g,l as r,p as a,j as i,m as k,a as w}from"./index.e2144cf2.js";import"./base.a4c7cecc.js";import{a as x}from"./checkbox.c36725d4.js";/* empty css            */import"./tooltip.f118fcb0.js";/* empty css               *//* empty css                  */import{Z as E,a as R}from"./ZFormItem.99bc3a03.js";/* empty css               */import{e as S}from"./admin-storage.0cee6b67.js";import{u as I}from"./storage-list.9169dec3.js";import{E as z}from"./index.c45a91e5.js";import"./index.8d3be363.js";import"./index.893d9621.js";import"./request.538cacc7.js";import"./index.b76f3ddb.js";import"./focus-trap.3717ddd7.js";import"./event.3ec63147.js";import"./debounce.ef6045fb.js";import"./event.776e7e11.js";import"./index.fa9b58ef.js";import"./index.4971e309.js";import"./index.5cf4e3bb.js";import"./plugin-vue_export-helper.21dcd24c.js";import"./sortable.esm.a99254e8.js";import"./useCommon.cd9f3905.js";import"./index.911dd79c.js";import"./index.f710691a.js";import"./index.d27b8c90.js";import"./scroll.2d8cca42.js";import"./validator.e67486a3.js";const B=w(" \u6B64\u9875\u9762\u53EF\u4EE5\u7BA1\u7406\u60A8\u7684\u7F13\u5B58\u76F8\u5173\u8BBE\u7F6E\uFF0C\u5305\u62EC\u7F13\u5B58\u7684\u7BA1\u7406\u3001\u7F13\u5B58\u7684\u6E05\u7406\u3001\u7F13\u5B58\u7684\u7EDF\u8BA1\u7B49\u3002 "),se={__name:"index",setup(M){let s=V();const{cacheManageVisible:N,switchCacheEnableStatus:p,switchCacheAutoRefreshStatus:d,currentCacheManageId:c}=I(s),e=h(null),f=()=>{S(c.value).then(l=>{e.value=l.data})};return C(()=>{f()}),(l,t)=>{const m=z,n=E,_=R,v=x;return u(),b("div",null,[e.value?(u(),g(_,{key:0,modelValue:e.value,"onUpdate:modelValue":t[4]||(t[4]=o=>e.value=o)},{"form-sub-title":r(()=>[B]),default:r(()=>[a(n,{label:"\u5F00\u542F\u7F13\u5B58"},{default:r(()=>[a(m,{onChange:t[0]||(t[0]=o=>i(p)(e.value)),modelValue:e.value.enableCache,"onUpdate:modelValue":t[1]||(t[1]=o=>e.value.enableCache=o)},null,8,["modelValue"])]),_:1}),a(n,{label:"\u5F00\u542F\u7F13\u5B58\u81EA\u52A8\u5237\u65B0"},{default:r(()=>[a(m,{onChange:t[2]||(t[2]=o=>i(d)(e.value)),modelValue:e.value.autoRefreshCache,"onUpdate:modelValue":t[3]||(t[3]=o=>e.value.autoRefreshCache=o)},null,8,["modelValue"])]),_:1})]),_:1},8,["modelValue"])):k("",!0),a(v)])}}};export{se as default};