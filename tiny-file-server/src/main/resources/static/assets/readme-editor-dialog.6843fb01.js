var V=(m,i,o)=>new Promise((c,a)=>{var d=e=>{try{l(o.next(e))}catch(t){a(t)}},p=e=>{try{l(o.throw(e))}catch(t){a(t)}},l=e=>e.done?c(e.value):Promise.resolve(e.value).then(d,p);l((o=o.apply(m,i)).next())});import{d as h,_ as u,z as g,I as w,o as y,k as b,l as _,b as D,p as v,j as P,a as E}from"./index.e2144cf2.js";import{E as T}from"./base.a4c7cecc.js";import{E as A}from"./dialog.828e041f.js";/* empty css                *//* empty css               */import"./index.8d3be363.js";import"./index.d27b8c90.js";import"./scroll.2d8cca42.js";import"./use-dialog.e8f8c3c7.js";import"./event.776e7e11.js";import"./index.4971e309.js";import"./focus-trap.3717ddd7.js";import"./refs.1f25664c.js";const I={class:"dialog-footer"},k=E("\u53D6\u6D88"),x=E("\u4FDD\u5B58"),H={__name:"readme-editor-dialog",props:{visible:{type:Boolean,required:!0},title:{type:String,default:""},modelValue:{type:String,default:""}},emits:["update:modelValue","update:visible"],setup(m,{emit:i}){const o=m,c=h(()=>new Promise((e,t)=>{(function(){return V(this,null,function*(){try{const r=yield u(()=>import("./base-editor.21509f3a.js").then(function(n){return n.b}),["assets/base-editor.21509f3a.js","assets/index.e2144cf2.js","assets/index.f40b2e53.css","assets/vue.runtime.esm-bundler.4c34af8e.js"]);yield u(()=>Promise.resolve({}),["assets/base-editor.079785da.css"]),yield u(()=>Promise.resolve({}),["assets/vuepress.95aa9197.css"]);const f=yield u(()=>import("./vuepress.d8e17658.js").then(function(n){return n.v}),["assets/vuepress.d8e17658.js","assets/index.e2144cf2.js","assets/index.f40b2e53.css"]),s=yield u(()=>import("./prism.e915b416.js").then(function(n){return n.p}),["assets/prism.e915b416.js","assets/index.e2144cf2.js","assets/index.f40b2e53.css"]);r.use(f,{Prism:s}),e(r)}catch(r){t(r)}})})()})),a=g(""),d=!0;w(()=>{a.value=o.modelValue});const p=()=>{i("update:visible",!1)},l=()=>{i("update:modelValue",a.value),i("update:visible",!1)};return(e,t)=>{const r=T,f=A;return y(),b(f,{modelValue:d,"onUpdate:modelValue":t[1]||(t[1]=s=>d=s),"destroy-on-close":!0,onClose:p,title:o.title,"show-close":!1,draggable:"",top:"5vh",width:"80%"},{footer:_(()=>[D("span",I,[v(r,{onClick:p},{default:_(()=>[k]),_:1}),v(r,{type:"primary",onClick:l},{default:_(()=>[x]),_:1})])]),default:_(()=>[v(P(c),{modelValue:a.value,"onUpdate:modelValue":t[0]||(t[0]=s=>a.value=s),height:"70vh"},null,8,["modelValue"])]),_:1},8,["title"])}}};export{H as default};