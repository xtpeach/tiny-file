System.register(["./admin-setting-legacy.996e7b8d.js","./index-legacy.36e5d91f.js","./request-legacy.2cf0cbaa.js"],(function(e){"use strict";var a,n,t,u;return{setters:[function(e){a=e.l,n=e.c},function(e){t=e.aq},function(e){u=e.E}],execute:function(){e("u",(function(){var e=t(a,{formatResult:function(e){return e.data}}),c=e.data,i=e.loading,s=e.reload,r=t(n,{manual:!0,onSuccess:function(){u({message:"保存成功",type:"success"})}}),o=r.loading,d=r.run;return{data:c,dataLoading:i,reload:s,saveData:function(){c.value.directLinkPrefix?d(c.value):u.warning("直链前缀不能为空")},saveLoading:o}}))}}}));
