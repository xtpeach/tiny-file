System.register(["./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.36e5d91f.js"],(function(e){"use strict";var n,r,t,o,c,i;return{setters:[function(e){n=e._},function(e){r=e.E,t=e.A,o=e.o,c=e.c,i=e.b}],execute:function(){var l=r({name:"SvgIcon",props:{prefix:{type:String,default:"icon"},name:{type:String,required:!0},color:{type:String,default:"#333"}},setup:function(e){return{symbolId:t((function(){return"#".concat(e.prefix,"-").concat(e.name)}))}}}),u=["color"],f=["xlink:href","fill"];e("_",n(l,[["render",function(e,n,r,t,l,s){return o(),c("svg",{class:"icon","aria-hidden":"true",color:e.color},[i("use",{"xlink:href":e.symbolId,fill:e.color},null,8,f)],8,u)}]]))}}}));
