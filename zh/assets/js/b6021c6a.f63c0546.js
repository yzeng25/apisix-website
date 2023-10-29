"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3726],{5318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),l=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(r),m=n,y=h["".concat(p,".").concat(m)]||h[m]||s[m]||c;return r?a.createElement(y,i(i({ref:t},u),{},{components:r})):a.createElement(y,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<c;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},4307:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>s,frontMatter:()=>c,metadata:()=>o,toc:()=>l});var a=r(5773),n=(r(7378),r(5318));const c={title:"\u6309\u7167 Apache Way \u8fd0\u4f5c\u5f00\u6e90\u5546\u4e1a\u5316\u516c\u53f8\uff0c\u8fd9\u884c\u5f97\u901a\u5417\uff1f",date:new Date("2021-08-07T13:30:00.000Z"),keywords:["APISIX","Apache","\u5f00\u6e90","\u5546\u4e1a\u5316"],description:"Apache Way \u662f\u88ab\u65e0\u6570\u5f00\u6e90\u9879\u76ee\u8bc1\u5b9e\u7684\u793e\u533a\u6210\u529f\u4e4b\u9053\uff0c\u90a3\u4e48\u5bf9\u4e8e\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u800c\u8a00\uff0cApache Way \u662f\u5426\u53ef\u884c\u5462\uff1f\u5b83\u5728\u5546\u4e1a\u793e\u4f1a\u662f\u5426\u884c\u5f97\u901a\uff1f \u901a\u8fc7 2 \u5e74\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u7684\u7ecf\u8425\uff0c\u652f\u6d41\u79d1\u6280\u5e0c\u671b\u7528\u516c\u53f8\u7684\u5207\u8eab\u7ecf\u5386\u6765\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\u3002"},i=void 0,o={permalink:"/zh/articles/Apache-APISIX-From-OpenSource-Commercialization-by-Apache-Way",source:"@site/articles/Apache-APISIX-From-OpenSource-Commercialization-by-Apache-Way.md",title:"\u6309\u7167 Apache Way \u8fd0\u4f5c\u5f00\u6e90\u5546\u4e1a\u5316\u516c\u53f8\uff0c\u8fd9\u884c\u5f97\u901a\u5417\uff1f",description:"Apache Way \u662f\u88ab\u65e0\u6570\u5f00\u6e90\u9879\u76ee\u8bc1\u5b9e\u7684\u793e\u533a\u6210\u529f\u4e4b\u9053\uff0c\u90a3\u4e48\u5bf9\u4e8e\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u800c\u8a00\uff0cApache Way \u662f\u5426\u53ef\u884c\u5462\uff1f\u5b83\u5728\u5546\u4e1a\u793e\u4f1a\u662f\u5426\u884c\u5f97\u901a\uff1f \u901a\u8fc7 2 \u5e74\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u7684\u7ecf\u8425\uff0c\u652f\u6d41\u79d1\u6280\u5e0c\u671b\u7528\u516c\u53f8\u7684\u5207\u8eab\u7ecf\u5386\u6765\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\u3002",date:"2021-08-07T13:30:00.000Z",formattedDate:"2021\u5e748\u67087\u65e5",tags:[],readingTime:.805,truncated:!1,authors:[],prevItem:{title:"Apache APISIX \u7684\u6f14\u53d8",permalink:"/zh/articles/The-Evolution-of-Apache-APISIX"},nextItem:{title:"\u5982\u4f55\u5c06 Apache APISIX \u6269\u5c55\u4e3a\u4e00\u4e2a\u670d\u52a1\u7f51\u683c\u7684\u8fb9\u8f66",permalink:"/zh/articles/How-To-Extend-Apache-APISIX-into-a-Service-Mesh-Sidecar"}},p={authorsImageUrls:[]},l=[{value:"\u5206\u4eab\u4eba\u7b80\u4ecb",id:"\u5206\u4eab\u4eba\u7b80\u4ecb",children:[]},{value:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd",children:[]},{value:"PPT \u4e0b\u8f7d",id:"ppt-\u4e0b\u8f7d",children:[]}],u={toc:l};function s(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("iframe",{src:"//player.bilibili.com/player.html?aid=419965108&bvid=BV193411q7GW&cid=392832870&page=1",frameborder:"0",scrolling:"no",allowfullscreen:"true",style:{width:"100%",maxHeight:"calc(100vw / 5 * 3)",height:"calc(100vh / 5 * 3)"}}),(0,n.kt)("h2",{id:"\u5206\u4eab\u4eba\u7b80\u4ecb"},"\u5206\u4eab\u4eba\u7b80\u4ecb"),(0,n.kt)("p",null,"\u6e29\u94ed\uff0cApache \u57fa\u91d1\u4f1a Member\uff0cApache APISIX PMC \u4e3b\u5e2d\uff0c",(0,n.kt)("a",{parentName:"p",href:"https://api7.ai/"},"\u652f\u6d41\u79d1\u6280"),"\u8054\u5408\u521b\u59cb\u4eba\u3002"),(0,n.kt)("h2",{id:"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"},"\u5206\u4eab\u4e3b\u9898\u4ecb\u7ecd"),(0,n.kt)("p",null,"Apache Way \u662f\u88ab\u65e0\u6570\u5f00\u6e90\u9879\u76ee\u8bc1\u5b9e\u7684\u793e\u533a\u6210\u529f\u4e4b\u9053\uff0c\u90a3\u4e48\u5bf9\u4e8e\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u800c\u8a00\uff0cApache Way \u662f\u5426\u53ef\u884c\u5462\uff1f\u5b83\u5728\u5546\u4e1a\u793e\u4f1a\u662f\u5426\u884c\u5f97\u901a\uff1f \u901a\u8fc7 2 \u5e74\u5f00\u6e90\u5546\u4e1a\u516c\u53f8\u7684\u7ecf\u8425\uff0c\u652f\u6d41\u79d1\u6280\u5e0c\u671b\u7528\u516c\u53f8\u7684\u5207\u8eab\u7ecf\u5386\u6765\u56de\u7b54\u8fd9\u4e2a\u95ee\u9898\u3002"),(0,n.kt)("h2",{id:"ppt-\u4e0b\u8f7d"},"PPT \u4e0b\u8f7d"),(0,n.kt)("p",null,"\u5173\u6ce8 Apache APISIX \u516c\u4f17\u53f7\uff0c\u56de\u590d\u201cApacheCon\u201d\u4e0b\u8f7d PPT\u3002"),(0,n.kt)("img",{src:"https://static.apiseven.com/202108/1639468506819-7f829080-19de-4d94-b103-e1d967e0baea.png",alt:"Apache APISIX WeChat",style:{width:"200px"}}))}s.isMDXComponent=!0}}]);