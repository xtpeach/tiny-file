import{i as p}from"./request.538cacc7.js";import{A as s}from"./index.e2144cf2.js";const{width:u,height:d}=p();function b(){const c=s(()=>u.value<768),f=s(()=>u.value>=768),m=e=>{if(i(e))return"";let n="",r=-1;for(let t=0;t<e.length;t++){const o=e.charAt(t);if(o==="/"){if(r<t){let l=e.substring(r+1,t);n+=encodeURIComponent(l),r=t}n+=o}if(t===e.length-1&&r<t){let l=e.substring(r+1,t+1);n+=encodeURIComponent(l)}}return n},i=e=>e==null||e==="";return{isMobile:c,isNotMobile:f,height:d,encodeAllIgnoreSlashes:m,strIsEmpty:i,strIsNotEmpty:e=>!i(e),removeDuplicateSeparator:e=>{let n="";e.indexOf("http://")===0?n="http://":e.indexOf("https://")===0&&(n="https://");for(let r=n.length;r<e.length-1;r++){let t=e.charAt(r),o=e.charAt(r+1);t==="/"&&o==="/"||(n+=t)}return n+=e.charAt(e.length-1),n}}}export{b as u};