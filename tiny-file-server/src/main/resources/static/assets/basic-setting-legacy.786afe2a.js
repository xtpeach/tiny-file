System.register(["./base-legacy.42deb1c2.js","./loading-legacy.fc9141ee.js","./ZFormItem-legacy.de82453a.js","./button-legacy.de6f77a5.js","./radio-legacy.53b178ff.js","./switch-legacy.96b9f14f.js","./input-legacy.1469b40d.js","./index-legacy.36e5d91f.js","./useLinkSetting-legacy.279d1ceb.js","./index-legacy.9da1c355.js","./index-legacy.77ebc7ec.js","./directive-legacy.10a2ac38.js","./index-legacy.5f3309bc.js","./index-legacy.61ab75a6.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./event-legacy.39ad8904.js","./admin-setting-legacy.996e7b8d.js","./request-legacy.2cf0cbaa.js","./validator-legacy.9c827f10.js"],(function(e){"use strict";var n,l,t,u,r,o,a,i,f,c,d,s,p,m,y,V,b,g,w,v,_;return{setters:[function(e){n=e.E},function(){},function(e){l=e.Z,t=e.a},function(){},function(e){u=e.E},function(){},function(){},function(e){r=e.o,o=e.c,a=e.j,i=e.n,f=e.k,c=e.l,d=e.b,s=e.p,p=e.t,m=e.v,y=e.W,V=e.m,b=e.a},function(e){g=e.u},function(e){w=e.E},function(e){v=e.E},function(e){_=e.v},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){var j={class:"zfile-admin-down-link-body"},h=b(" 直链设置 "),k=b(" 这里可以配置直链相关设置 "),L=b(" 直链地址前缀, 如 http(s)://ip:port/"),x={class:"text-red-400 font-bold"},U=b("/path/filename "),T=b(" 仅控制是否显示直/短链生成按钮，不影响使用允许使用直/短链下载 "),z=b(" 是否记录直链下载日志 "),A=b(" 控制是否生成直链时显示短链路径及是否允许使用短链进行下载 "),E=b(" 控制是否生成直链时显示直链路径及是否允许使用直链进行下载 "),P=d("span",null,'是否允许未通过 "生成直链" 功能的直链可访问 (仅表示可访问, 如未开启上方 "是否允许使用直链（路径）" 功能，则即使访问了也不允许下载.)',-1),R=d("br",null,null,-1),S=d("br",null,null,-1),D=d("span",null,"因路径直链的格式是文件路径和文件名，所以很容易被猜到并访问, 如您不想未生成直链就可直接访问，可考虑使用此功能控制.",-1),B=b("不启用 Referer 防盗链"),C=b("启用白名单"),Z=b("启用黑名单"),q=b(" 防盗链支持访问文件直链或短链时校验，如用户直接访问直链跳转后的存储源原始链接，无法进行校验和拦截。 "),F=b("允许 Referer 为空"),I=b("禁止 Referer 为空"),W=b(" 每行输入一个域名，支持 * 通配符，如白名单 *zfile.vip 将只允许 zfile.vip、www.zfile.vip、demo.zfile.vip 等网站访问。 "),G=b(" 每行输入一个域名，支持 * 通配符，如黑名单 *zfile.vip 将禁止所有如 zfile.vip、www.zfile.vip、demo.zfile.vip 等网站访问。 "),H={class:"dialog-footer"},J=b("保存");e("default",{__name:"basic-setting",setup:function(e){var b=g(),K=b.data,M=b.saveData,N=b.saveLoading;return function(e,b){var g=w,O=l,Q=v,X=u,Y=n,$=t,ee=_;return r(),o("div",j,[a(K)?i((r(),f($,{key:0,model:a(K),"element-loading-text":"保存中..."},{"form-title":c((function(){return[h]})),"form-sub-title":c((function(){return[k]})),footer:c((function(){return[d("span",H,[s(Y,{type:"primary",onClick:a(M)},{default:c((function(){return[J]})),_:1},8,["onClick"])])]})),default:c((function(){return[s(O,{label:"直链地址前缀"},{tips:c((function(){return[L,d("span",x,p(a(K).directLinkPrefix),1),U]})),default:c((function(){return[s(g,{modelValue:a(K).directLinkPrefix,"onUpdate:modelValue":b[0]||(b[0]=function(e){return a(K).directLinkPrefix=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"显示生成直/短链功能"},{tips:c((function(){return[T]})),default:c((function(){return[s(Q,{modelValue:a(K).showLinkBtn,"onUpdate:modelValue":b[1]||(b[1]=function(e){return a(K).showLinkBtn=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"记录下载日志"},{tips:c((function(){return[z]})),default:c((function(){return[s(Q,{modelValue:a(K).recordDownloadLog,"onUpdate:modelValue":b[2]||(b[2]=function(e){return a(K).recordDownloadLog=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"是否允许使用短链"},{tips:c((function(){return[A]})),default:c((function(){return[s(Q,{modelValue:a(K).showShortLink,"onUpdate:modelValue":b[3]||(b[3]=function(e){return a(K).showShortLink=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"是否允许使用直链（路径）"},{tips:c((function(){return[E]})),default:c((function(){return[s(Q,{modelValue:a(K).showPathLink,"onUpdate:modelValue":b[4]||(b[4]=function(e){return a(K).showPathLink=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"是否允许路径直链可直接访问"},{tips:c((function(){return[P,R,S,D]})),default:c((function(){return[s(Q,{modelValue:a(K).allowPathLinkAnonAccess,"onUpdate:modelValue":b[5]||(b[5]=function(e){return a(K).allowPathLinkAnonAccess=e})},null,8,["modelValue"])]})),_:1}),s(O,{label:"Referer 防盗链"},{tips:c((function(){return[q]})),default:c((function(){return[s(X,{modelValue:a(K).refererType,"onUpdate:modelValue":b[6]||(b[6]=function(e){return a(K).refererType=e}),label:"off"},{default:c((function(){return[B]})),_:1},8,["modelValue"]),s(X,{modelValue:a(K).refererType,"onUpdate:modelValue":b[7]||(b[7]=function(e){return a(K).refererType=e}),label:"white_list"},{default:c((function(){return[C]})),_:1},8,["modelValue"]),s(X,{modelValue:a(K).refererType,"onUpdate:modelValue":b[8]||(b[8]=function(e){return a(K).refererType=e}),label:"black_list"},{default:c((function(){return[Z]})),_:1},8,["modelValue"])]})),_:1}),i(s(O,{label:"Referer 配置"},{default:c((function(){return[s(X,{modelValue:a(K).refererAllowEmpty,"onUpdate:modelValue":b[9]||(b[9]=function(e){return a(K).refererAllowEmpty=e}),label:!0},{default:c((function(){return[F]})),_:1},8,["modelValue"]),s(X,{modelValue:a(K).refererAllowEmpty,"onUpdate:modelValue":b[10]||(b[10]=function(e){return a(K).refererAllowEmpty=e}),label:!1},{default:c((function(){return[I]})),_:1},8,["modelValue"])]})),_:1},512),[[m,"no"!==a(K).refererType]]),i(s(O,{label:"白名单"},y({default:c((function(){return[s(g,{type:"textarea",rows:6,placeholder:"每行输入一个域名",modelValue:a(K).refererValue,"onUpdate:modelValue":b[11]||(b[11]=function(e){return a(K).refererValue=e})},null,8,["modelValue"])]})),_:2},["white_list"===a(K).refererType?{name:"tips",fn:c((function(){return[W]}))}:void 0,"black_list"===a(K).refererType?{name:"tips",fn:c((function(){return[G]}))}:void 0]),1536),[[m,"no"!==a(K).refererType]])]})),_:1},8,["model"])),[[ee,a(N)]]):V("",!0)])}}})}}}));