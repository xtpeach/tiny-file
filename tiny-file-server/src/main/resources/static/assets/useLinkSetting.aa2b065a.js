import{l as u,c as d}from"./admin-setting.5f735b40.js";import{aq as e}from"./index.e2144cf2.js";import{E as t}from"./request.538cacc7.js";function f(){const{data:a,loading:s,reload:n}=e(u,{formatResult:r=>r.data}),{loading:o,run:i}=e(d,{manual:!0,onSuccess(){t({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:a,dataLoading:s,reload:n,saveData:()=>{a.value.directLinkPrefix?i(a.value):t.warning("\u76F4\u94FE\u524D\u7F00\u4E0D\u80FD\u4E3A\u7A7A")},saveLoading:o}}export{f as u};