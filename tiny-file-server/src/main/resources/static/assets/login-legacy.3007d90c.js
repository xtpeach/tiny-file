!function(){var e=document.createElement("style");e.innerHTML=".zfile-login-logo[data-v-f0afc0e2]{background-image:url(/assets/admin-login.3b853582.svg)}.zfile-login-form[data-v-f0afc0e2]{--zfile-login-input-height: 45px}.zfile-login-form[data-v-f0afc0e2] .el-form-item--large{margin-bottom:30px}.zfile-login-form[data-v-f0afc0e2] .el-form-item--large:last-child{margin-bottom:0}.zfile-login-form[data-v-f0afc0e2] .el-input__inner{height:var(--zfile-login-input-height)}.zfile-login-form[data-v-f0afc0e2] .el-button--large{--el-button-size: var(--zfile-login-input-height);height:var(--el-button-size)}.zfile-login-form[data-v-f0afc0e2] input:-internal-autofill-selected{-webkit-text-fill-color:var(--el-input-text-color, var(--el-text-color-regular));-webkit-transition:background-color 1000s ease-out .5s;transition:background-color 1000s ease-out .5s}\n",document.head.appendChild(e),System.register(["./index-legacy.36e5d91f.js","./base-legacy.42deb1c2.js","./form-item-legacy.2f6cdb0b.js","./button-legacy.de6f77a5.js","./tooltip-legacy.f5af8fcd.js","./popper-legacy.59994c93.js","./link-legacy.0e9630ec.js","./image-viewer-legacy.9d4545ff.js","./input-legacy.1469b40d.js","./zfile-basic-legacy.a6b02774.js","./login-legacy.2d03fbaf.js","./index-legacy.5f3309bc.js","./install-legacy.0aed2606.js","./plugin-vue_export-helper-legacy.7bb61c33.js","./index-legacy.9da1c355.js","./BadgeCheckIcon-legacy.b7a329d3.js","./request-legacy.2cf0cbaa.js","./index-legacy.a940d7b6.js","./index-legacy.61ab75a6.js","./isEqual-legacy.d3a6f1d7.js","./index-legacy.2783f16d.js","./debounce-legacy.5562f648.js","./scroll-legacy.9150773b.js","./event-legacy.39ad8904.js","./focus-trap-legacy.c22d27e1.js","./event-legacy.0bfbd831.js"],(function(e){"use strict";var n,a,t,i,l,o,r,c,f,u,s,d,m,g,p,v,x,b,h,y,_,w,j,z,k,C,U,V,I,E,M,q,L,B,D,S;return{setters:[function(e){n=e.o,a=e.k,t=e.p,i=e.e,l=e.z,o=e.I,r=e.c,c=e.b,f=e.l,u=e.j,s=e.m,d=e.K,m=e.ap,g=e.a,p=e.s,v=e.x},function(e){x=e.E},function(e){b=e.E,h=e.a},function(){},function(){},function(){},function(e){y=e.E},function(e){_=e.E},function(){},function(e){w=e._},function(e){j=e.l,z=e.c,k=e.a,C=e.b},function(e){U=e.aL,V=e.aM,I=e.P,E=e.aN},function(e){M=e.i},function(e){q=e._},function(e){L=e.E},function(e){B=e.r},function(e){D=e.E},function(e){S=e.E},function(){},function(){},function(){},function(){},function(){},function(){},function(){},function(){}],execute:function(){function H(e,i){return n(),a("svg",{xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 24 24","stroke-width":"2",stroke:"currentColor","aria-hidden":"true"},[t("path",{"stroke-linecap":"round","stroke-linejoin":"round",d:"M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"})])}var F=function(e){return p("data-v-f0afc0e2"),e=e(),v(),e},K={class:"h-full min-h-screen bg-gray-100 text-gray-900 flex justify-center items-center"},N={class:"h-full lg:h-auto max-w-screen-lg bg-white shadow-xl sm:rounded-xl flex flex-1"},P=F((function(){return c("div",{class:"flex-1 bg-gray-50 text-center hidden lg:flex rounded-l-xl"},[c("div",{class:"m-12 xl:m-16 w-full bg-contain bg-center bg-no-repeat zfile-login-logo"})],-1)})),R={class:"w-full lg:w-1/2 xl:w-1/2 mt-10 p-6 sm:p-12"},T={class:"mt-0 flex flex-col items-center"},A={class:"text-2xl mt-0 xl:text-3xl font-extrabold box animate__animated animate__fadeInDown"},G={class:"w-full flex-1"},J=m('<div class="my-12 relative" data-v-f0afc0e2><div class="absolute inset-0 flex items-center" aria-hidden="true" data-v-f0afc0e2><div class="w-full border-t text-gray-600" data-v-f0afc0e2></div></div><div class="relative flex justify-center text-sm" data-v-f0afc0e2><span class="px-2 bg-white text-sm leading-none text-gray-600 tracking-wide font-medium" data-v-f0afc0e2>管理员登录</span></div></div>',1),O={class:"flex space-x-5 w-full"},Q=g(" 请联系管理员 "),W=F((function(){return c("br",null,null,-1)})),X=F((function(){return c("a",{target:"_blank",class:"text-blue-400",href:"https://docs.zfile.vip/question#reset-pwd"},"点击可前往文档查看操作方式",-1)})),Y=g("忘记密码"),Z=g("登录");e("default",q({__name:"login",setup:function(e){var m=i(),g=l(!1),p=l(),v=l({username:"",password:"",verifyCode:"",verifyCodeUUID:""}),q=l({username:[{required:!0,message:"账号不能为空",trigger:["change","blur"]}],password:[{required:!0,message:"密码不能为空",trigger:["change","blur"]}]}),F=function(){p.value.validate((function(e){e?(g.value=!0,k(v.value).then((function(e){window.localStorage.setItem("zfile-token",e.data),D({message:"登录成功",type:"success",duration:1e3,onClose:function(){m.push("/admin")}})})).catch((function(){g.value=!1,ne()}))):D.warning("请输入账号密码!")}))},$=l("");j().then((function(e){$.value=e.data}));var ee=l({}),ne=function(){C().then((function(e){ee.value=e.data,v.value.verifyCodeUUID=e.data.uuid}))};return ne(),o((function(){M().then((function(e){e.data||m.push("/install")})),z().then((function(e){e.data&&m.push("/admin")}))})),function(e,i){var l=L,o=b,m=_,j=y,z=S,k=x,C=h;return n(),r("div",K,[c("div",N,[P,c("div",R,[c("div",T,[c("h1",A,[c("img",{class:"w-16 cursor-pointer",onClick:i[0]||(i[0]=function(e){return n="https://github.com/zhaojun1998/zfile",void window.open(n);var n}),src:w})]),c("div",G,[J,t(C,{onSubmit:i[6]||(i[6]=d((function(){}),["prevent"])),ref_key:"loginFormRef",ref:p,rules:u(q),model:u(v),class:"zfile-login-form",size:"large"},{default:f((function(){return[t(o,{class:"box animate__animated animate__fadeInUp",prop:"username"},{default:f((function(){return[t(l,{placeholder:"管理员账号","prefix-icon":u(U),modelValue:u(v).username,"onUpdate:modelValue":i[1]||(i[1]=function(e){return u(v).username=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),t(o,{class:"box animate__animated animate__fadeInUp",prop:"password"},{default:f((function(){return[t(l,{placeholder:"管理员密码",type:"password","show-password":"","prefix-icon":u(V),modelValue:u(v).password,"onUpdate:modelValue":i[2]||(i[2]=function(e){return u(v).password=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1}),"2fa"===$.value?(n(),a(o,{key:0,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:f((function(){return[t(l,{placeholder:"双因素认证验证码","prefix-icon":u(I),modelValue:u(v).verifyCode,"onUpdate:modelValue":i[3]||(i[3]=function(e){return u(v).verifyCode=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"])]})),_:1})):"image"===$.value?(n(),a(o,{key:1,class:"box animate__animated animate__fadeInUp",prop:"verifyCode"},{default:f((function(){var e;return[c("div",O,[t(l,{class:"flex-1",placeholder:"请输入验证码","prefix-icon":u(H),modelValue:u(v).verifyCode,"onUpdate:modelValue":i[4]||(i[4]=function(e){return u(v).verifyCode=e}),modelModifiers:{trim:!0}},null,8,["prefix-icon","modelValue"]),t(m,{src:null===(e=ee.value)||void 0===e?void 0:e.imgBase64,onClick:i[5]||(i[5]=function(e){return ne()})},null,8,["src"])])]})),_:1})):s("",!0),t(o,{class:"box animate__animated animate__fadeInUp float-right"},{default:f((function(){return[t(z,{class:"item",effect:"dark",placement:"left"},{content:f((function(){return[Q,W,X]})),default:f((function(){return[t(j,{icon:u(E),underline:!1,class:"zfile-float-right"},{default:f((function(){return[Y]})),_:1},8,["icon"])]})),_:1})]})),_:1}),t(o,{class:"clear-right"},{default:f((function(){return[t(k,{loading:u(g),class:"w-full mb-0","native-type":"submit",type:"primary",icon:u(B),onClick:F},{default:f((function(){return[Z]})),_:1},8,["loading","icon"])]})),_:1})]})),_:1},8,["rules","model"])])])])])])}}},[["__scopeId","data-v-f0afc0e2"]]))}}}))}();