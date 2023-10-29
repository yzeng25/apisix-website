"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[384],{35318:(t,e,a)=>{a.d(e,{Zo:()=>s,kt:()=>m});var l=a(27378);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function p(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?p(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,l,n=function(t,e){if(null==t)return{};var a,l,n={},p=Object.keys(t);for(l=0;l<p.length;l++)a=p[l],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(l=0;l<p.length;l++)a=p[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var u=l.createContext({}),c=function(t){var e=l.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},s=function(t){var e=c(t.components);return l.createElement(u.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},k=l.forwardRef((function(t,e){var a=t.components,n=t.mdxType,p=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),k=c(a),m=n,I=k["".concat(u,".").concat(m)]||k[m]||o[m]||p;return a?l.createElement(I,r(r({ref:e},s),{},{components:a})):l.createElement(I,r({ref:e},s))}));function m(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var p=a.length,r=new Array(p);r[0]=k;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:n,r[1]=i;for(var c=2;c<p;c++)r[c]=a[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,a)}k.displayName="MDXCreateElement"},18043:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>u,contentTitle:()=>r,default:()=>o,frontMatter:()=>p,metadata:()=>i,toc:()=>c});var l=a(25773),n=(a(27378),a(35318));const p={title:"\u817e\u8baf\u84dd\u9cb8 API \u7f51\u5173\u5982\u4f55\u501f\u52a9 APISIX \u5b9e\u73b0\u4ea7\u54c1\u5347\u7ea7\u4e0e\u4e1a\u52a1\u5b8c\u5584",authors:[{name:"\u6731\u96f7",title:"Author"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["\u817e\u8baf","Apache APISIX","\u84dd\u9cb8\u667a\u4e91","\u7f51\u5173","\u67b6\u6784"],description:"\u672c\u6587\u4ece\u84dd\u9cb8\u7f51\u5173\u7684\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/12/06/638ef9eda7617.png"},r=void 0,i={permalink:"/zh/blog/2022/11/05/tencent-blueking-with-apisix",source:"@site/blog/2022/11/05/tencent-blueking-with-apisix.md",title:"\u817e\u8baf\u84dd\u9cb8 API \u7f51\u5173\u5982\u4f55\u501f\u52a9 APISIX \u5b9e\u73b0\u4ea7\u54c1\u5347\u7ea7\u4e0e\u4e1a\u52a1\u5b8c\u5584",description:"\u672c\u6587\u4ece\u84dd\u9cb8\u7f51\u5173\u7684\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002",date:"2022-11-05T00:00:00.000Z",formattedDate:"2022\u5e7411\u67085\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:21.77,truncated:!0,authors:[{name:"\u6731\u96f7",title:"Author"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u662f\u4ec0\u4e48",permalink:"/zh/blog/2022/11/10/what-is-service-in-microservice-discovery"},nextItem:{title:"\u5f53 Amazon Lambda \u9047\u4e0a Apache APISIX \u53ef\u4ee5\u64e6\u51fa\u4ec0\u4e48\u706b\u82b1\uff1f",permalink:"/zh/blog/2022/11/04/why-do-you-need-apache-apisix-when-using-amazon-lambda"}},u={authorsImageUrls:[void 0,void 0]},c=[{value:"\u84dd\u9cb8 API \u7f51\u5173",id:"\u84dd\u9cb8-api-\u7f51\u5173",children:[{value:"\u8bde\u751f\u80cc\u666f",id:"\u8bde\u751f\u80cc\u666f",children:[],level:3},{value:"\u5f80\u671f\u8fed\u4ee3",id:"\u5f80\u671f\u8fed\u4ee3",children:[],level:3},{value:"\u6280\u672f\u9009\u578b",id:"\u6280\u672f\u9009\u578b",children:[],level:3}],level:2},{value:"\u57fa\u4e8e APISIX \u7684\u84dd\u9cb8\u7f51\u5173 3.0 \u8fed\u4ee3",id:"\u57fa\u4e8e-apisix-\u7684\u84dd\u9cb8\u7f51\u5173-30-\u8fed\u4ee3",children:[],level:2},{value:"\u57fa\u4e8e APISIX \u84dd\u9cb8\u7f51\u5173 3.0 \u5b9e\u8df5\u573a\u666f",id:"\u57fa\u4e8e-apisix-\u84dd\u9cb8\u7f51\u5173-30-\u5b9e\u8df5\u573a\u666f",children:[{value:"\u670d\u52a1\u53d1\u73b0",id:"\u670d\u52a1\u53d1\u73b0",children:[],level:3},{value:"\u7edf\u4e00\u8ba4\u8bc1\u6388\u6743",id:"\u7edf\u4e00\u8ba4\u8bc1\u6388\u6743",children:[],level:3},{value:"\u52a8\u6001\u8def\u7531",id:"\u52a8\u6001\u8def\u7531",children:[],level:3},{value:"\u5ba2\u6237\u7aef\u8bc1\u4e66\u7ba1\u7406",id:"\u5ba2\u6237\u7aef\u8bc1\u4e66\u7ba1\u7406",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:c};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,l.Z)({},s,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ece\u84dd\u9cb8\u7f51\u5173\u7684\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002")),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5206\u4eab\u5609\u5bbe\u6731\u96f7\uff0c\u817e\u8baf IEG \u8fd0\u7ef4 PaaS \u5e73\u53f0\u6280\u672f\u8d1f\u8d23\u4eba\u3002")),(0,n.kt)("p",null,"\u84dd\u9cb8\uff08\u5168\u540d\u201c\u84dd\u9cb8\u667a\u4e91\u201d\uff09\u662f\u4e00\u5957\u5b75\u5316\u4e8e\u817e\u8baf IEG\uff08\u4e92\u52a8\u5a31\u4e50\u4e8b\u4e1a\u7fa4\uff09\u5185\u90e8\uff0c\u670d\u52a1\u4e8e\u591a\u4e1a\u52a1\u4e0e\u5404\u5185\u90e8\u5e73\u53f0\u7684\u7814\u8fd0\u4e00\u4f53\u5316 PaaS\u3002\u5176\u4f5c\u7528\u662f\u5728 CI\u3001CD \u548c CO \u4e09\u4e2a\u9636\u6bb5\uff0c\u5bf9\u516c\u53f8\u4e1a\u52a1\u63d0\u4f9b\u5168\u751f\u547d\u5468\u671f\u7684\u670d\u52a1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5edf3dfb.png",alt:"\u84dd\u9cb8\u4f5c\u7528\u9636\u6bb5"})),(0,n.kt)("h2",{id:"\u84dd\u9cb8-api-\u7f51\u5173"},"\u84dd\u9cb8 API \u7f51\u5173"),(0,n.kt)("p",null,"\u65e2\u7136\u662f\u4e3a\u5185\u90e8\u4e1a\u52a1\u670d\u52a1\uff0c\u90a3\u4e48\u817e\u8baf\u6e38\u620f\u7684\u4e1a\u52a1\u90fd\u6709\u54ea\u4e9b\u7279\u70b9\u5462\uff1f"),(0,n.kt)("p",null,"\u5927\u5bb6\u5728\u65e5\u5e38\u751f\u6d3b\u4e2d\u80af\u5b9a\u4e5f\u63a5\u89e6\u8fc7\u5f88\u591a\u817e\u8baf\u51fa\u54c1\u7684\u6e38\u620f\u3002\u5728\u817e\u8baf\u5185\u90e8\uff0c\u53ef\u80fd\u6709\u4e0a\u5343\u6b3e\u7684\u6e38\u620f\u4e1a\u52a1\uff0c\u9664\u90e8\u5206\u81ea\u7814\u6e38\u620f\u5916\uff0c\u5927\u90e8\u5206\u90fd\u5c5e\u4e8e\u4ee3\u7406\u7c7b\u3002\u4ee3\u7406\u4e1a\u52a1\u7684\u7279\u70b9\u5728\u4e8e\uff0c\u5b83\u4eec\u662f\u7531\u4e0d\u540c\u516c\u53f8\u6240\u5f00\u53d1\uff0c\u56e0\u6b64\u5404\u4ea7\u54c1\u4f7f\u7528\u7684\u8bed\u8a00\u3001\u4f9d\u8d56\u7684\u5b58\u50a8\u6216\u8005\u6574\u4e2a\u67b6\u6784\u98ce\u683c\u53ef\u80fd\u90fd\u662f\u5343\u5dee\u4e07\u522b\u7684\u3002"),(0,n.kt)("p",null,"\u9762\u5bf9\u8fd9\u79cd\u5305\u542b\u5927\u91cf\u5f02\u6784\u67b6\u6784\u7684\u590d\u6742\u4e1a\u52a1\u573a\u666f\uff0c\u84dd\u9cb8\u4f5c\u4e3a\u4e00\u4e2a\u670d\u52a1\u4e8e\u5185\u90e8\u7684\u5e73\u53f0\u4ea7\u54c1\uff0c\u5728\u5efa\u8bbe\u65f6\u5c31\u9700\u8981\u505a\u5230\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u91c7\u7528\u539f\u5b50\u5316\u8bbe\u8ba1\uff0c\u5c06\u5e73\u53f0\u80fd\u529b\u62bd\u8c61\u3001\u6253\u6563\uff0c\u8fdb\u884c\u5fae\u670d\u52a1\u5316\u6539\u9020\uff0c\u5f62\u6210\u4e00\u5957 PaaS \u67b6\u6784\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4f7f\u7528\u4f4e\u4ee3\u7801\u6280\u672f\u9ad8\u6548\u5f00\u53d1 SaaS\uff0c\u6765\u4f7f\u7528 PaaS \u5e73\u53f0\u7684\u539f\u5b50\u80fd\u529b\uff1b")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u901a\u8fc7\u5404\u7c7b SaaS \u6765\u7075\u6d3b\u5e94\u5bf9\u4e0d\u540c\u7684\u670d\u52a1\u573a\u666f\u3002"))),(0,n.kt)("h3",{id:"\u8bde\u751f\u80cc\u666f"},"\u8bde\u751f\u80cc\u666f"),(0,n.kt)("p",null,"\u8003\u8651\u5230\u73b0\u5b9e\u4e2d\u7684\u4e1a\u52a1\u73af\u5883\u4e0e\u5185\u90e8\u4e1a\u52a1\u9700\u6c42\uff0c\u6700\u7ec8\u84dd\u9cb8\u5e73\u53f0\u7684\u6574\u4f53\u67b6\u6784\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5daa2bc8.png",alt:"\u84dd\u9cb8\u5185\u90e8\u4e1a\u52a1\u67b6\u6784"})),(0,n.kt)("p",null,"\u4e2d\u95f4\u7684\u84dd\u8272\u90e8\u5206\u662f PaaS \u5c42\uff0c\u5176\u4e2d\u6700\u5927\u7684\u4e00\u5757\u662f\u524d\u9762\u63d0\u5230\u7684\u5404\u7c7b\u539f\u5b50\u80fd\u529b\u3002\u5305\u62ec\u7528\u6237\u7ba1\u7406\u3001\u7edf\u4e00\u6743\u9650\u4e2d\u5fc3\u3001\u7edf\u4e00\u914d\u7f6e\u5e73\u53f0\u7b49\u3002"),(0,n.kt)("p",null,"\u4e0a\u5c42\u7684\u6a59\u8272\u90e8\u5206\u662f SaaS \u5c42\uff0c\u4e3b\u8981\u7531\u5f88\u591a\u4e0d\u540c\u89d2\u8272\u9488\u5bf9\u7279\u5b9a\u9700\u6c42\u573a\u666f\u5f00\u53d1\u7684 SaaS \u6784\u6210\u3002\u8fd9\u4e9b SaaS \u5728\u5f00\u53d1\u8fc7\u7a0b\u4e2d\uff0c\u6216\u591a\u6216\u5c11\u5730\u90fd\u9700\u8981\u901a\u8fc7 API \u4f7f\u7528 PaaS \u5c42\u6700\u6838\u5fc3\u7684\u5404\u5e73\u53f0\u539f\u5b50\u80fd\u529b\u3002\u5728\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u5c31\u52bf\u5fc5\u9700\u8981\u4e00\u4e2a\u7edf\u4e00\u7684 API \u7f51\u5173\u3002"),(0,n.kt)("p",null,"\u4ee5\u4e0a\u5c31\u662f\u6700\u521d\u60f3\u8981\u6253\u9020\u84dd\u9cb8 API \u7f51\u5173\u7684\u539f\u56e0\u3002\u5c06\u524d\u9762\u7684\u67b6\u6784\u56fe\u505a\u4e00\u4e9b\u62bd\u8c61\uff0c\u5c31\u4f1a\u5f97\u5230\u4e00\u4e2a\u5982\u4e0b\u7b80\u5355\u7684\u7f51\u5173\u753b\u50cf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5de3e023.png",alt:"\u7f51\u5173\u7b80\u6613\u753b\u50cf"})),(0,n.kt)("p",null,"\u84dd\u9cb8\u662f\u4e00\u4e2a\u6bd4\u8f83\u590d\u6742\u7684\u5e73\u53f0\uff0c\u5b83\u5bf9\u4e8e\u7edf\u4e00\u7f51\u5173\u7684\u9700\u6c42\u4e5f\u4f1a\u6bd4\u8f83\u590d\u6742\u3002\u9664\u4e86\u6700\u57fa\u7840\u7684\u4f5c\u4e3a\u4ee3\u7406\u53bb\u8c03\u7528\u539f\u5b50\u5e73\u53f0\u7684 API \u4e4b\u5916\uff0c\u8fd8\u9700\u8981\u63d0\u4f9b\u4e00\u4e9b\u989d\u5916\u7684\u7f51\u5173\u80fd\u529b\u3002\u6bd4\u5982\u670d\u52a1\u53d1\u73b0\u3001\u7edf\u4e00\u7528\u6237\u8ba4\u8bc1\u3001\u9274\u6743\u548c\u9650\u6d41\u9650\u901f\u7b49\u7b49\u3002"),(0,n.kt)("p",null,"\u53e6\u4e00\u65b9\u9762\uff0c\u968f\u7740\u4e91\u539f\u751f\u6280\u672f\u7684\u53d1\u5c55\uff0c\u5982\u4eca\u5185\u90e8\u5f88\u591a SaaS \u548c\u539f\u5b50\u5e73\u53f0\u4e5f\u5f00\u59cb\u90e8\u7f72\u5728 K8s \u96c6\u7fa4\u4e2d\u3002\u8fd9\u7c7b\u573a\u666f\u53c8\u5411\u7f51\u5173\u63d0\u51fa\u4e86\u65b0\u7684\u8981\u6c42\uff0c\u6bd4\u5982\u9700\u8981\u901a\u8fc7\u7edf\u4e00\u6d41\u91cf\u7f51\u5173\u6216 API \u7f51\u5173\u6765\u5c06\u5916\u90e8\u7684\u8c03\u7528\u8bf7\u6c42\u6d41\u91cf\u7edf\u4e00\u7ba1\u63a7\u3002"),(0,n.kt)("p",null,"\u540c\u65f6\uff0c\u5185\u90e8\u8fd8\u5b58\u5728\u4e00\u4e9b\u4e1a\u52a1\u7cfb\u7edf\uff0c\u672c\u8eab\u4f7f\u7528\u4e86\u84dd\u9cb8\u5e73\u53f0\u7684\u4e00\u4e9b\u57fa\u7840\u67b6\u6784\u80fd\u529b\uff0c\u5982\u5bb9\u5668\u7ba1\u7406\u6216\u76d1\u63a7\u7b49\uff0c\u5b83\u4eec\u4e5f\u9700\u8981\u4e00\u4e2a\u7edf\u4e00\u7684\u670d\u52a1\u7f51\u5173\u6765\u7ba1\u7406\u6240\u6709\u8c03\u7528\u6d41\u91cf\u3002"),(0,n.kt)("p",null,"\u9762\u5bf9\u5916\u90e8\u6280\u672f\u7684\u8d8b\u52bf\u4e0e\u5185\u90e8\u4e1a\u52a1\u7684\u53d1\u5c55\u8981\u6c42\uff0c\u84dd\u9cb8\u7684 API \u7f51\u5173\u9700\u8981\u652f\u6301\u7684\u573a\u666f\u5f00\u59cb\u53d8\u5f97\u8d8a\u6765\u8d8a\u591a\u6837\u5316\u3002"),(0,n.kt)("h3",{id:"\u5f80\u671f\u8fed\u4ee3"},"\u5f80\u671f\u8fed\u4ee3"),(0,n.kt)("p",null,"\u84dd\u9cb8 API \u7f51\u5173\u5230\u76ee\u524d\u4e3a\u6b62\u7ecf\u5386\u4e86\u4e09\u4e2a\u9636\u6bb5\u7684\u8fed\u4ee3\u3002"),(0,n.kt)("p",null,"\u84dd\u9cb8 API \u7f51\u5173\u7684 1.0 \u7248\u672c\uff0c\u4e3b\u8981\u662f\u8ba9\u539f\u5b50\u5e73\u53f0\u7684\u8c03\u7528\u65b9\uff08\u542b\u5404 SaaS \u548c\u6d41\u7a0b\u5f15\u64ce\uff09\u4e0d\u518d\u76f4\u63a5\u5bf9\u63a5\u5404\u4e2a\u539f\u5b50\u5e73\u53f0\uff0c\u800c\u662f\u53ef\u4ee5\u76f4\u63a5\u8c03\u7528 API \u7f51\u5173\uff0c\u901a\u8fc7\u7f51\u5173\u5b8c\u6210\u534f\u8bae\u8f6c\u6362\u3001\u6743\u9650\u6821\u9a8c\u7b49\u76f8\u5173\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5df6be29.png",alt:"\u84dd\u9cb8 1.0 \u6d41\u7a0b\u56fe"})),(0,n.kt)("p",null,"\u90a3\u65f6\u7684\u67b6\u6784\u4e5f\u6bd4\u8f83\u7b80\u5355\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u6574\u4f53\u5206\u4e3a\u4e24\u5927\u5757\uff1a\u670d\u52a1\u7aef\u548c\u7ba1\u7406\u7aef\u3002\u539f\u5b50\u5e73\u53f0\u9700\u8981\u628a\u81ea\u8eab\u670d\u52a1\u6ce8\u518c\u5230 API \u7f51\u5173\u4e0a\uff0c\u9996\u5148\u5f97\u8bbf\u95ee\u7ba1\u7406\u7aef\uff0c\u914d\u7f6e\u597d\u5e73\u53f0\u7684 API \u8d44\u6e90\u5730\u5740\u548c\u5404\u81ea\u5bf9\u5e94\u7684\u6743\u9650\u7b49\u7b49\u3002"),(0,n.kt)("p",null,"\u5f53\u539f\u5b50\u5e73\u53f0\u901a\u8fc7\u7ba1\u7406\u7aef\u63d0\u4f9b\u4e86\u7f51\u5173\u6240\u9700\u7684\u914d\u7f6e\u7ec6\u8282\u540e\uff0c\u6570\u636e\u4f1a\u88ab\u5199\u5165\u5230 MySQL \u4e2d\uff0c\u4f9b\u670d\u52a1\u7aef\u8bfb\u53d6\u3002\u4e4b\u540e\uff0c\u5f53 SaaS \u8bf7\u6c42\u67d0\u539f\u5b50\u5e73\u53f0\u7684 API \u65f6\uff0c\u9996\u5148\u7ecf\u8fc7\u524d\u7aef\u7684 NGINX \u8d1f\u8f7d\u5747\u8861\u5668\uff0c\u7136\u540e\u900f\u5230\u7f51\u5173\u670d\u52a1\u7aef\uff0c\u670d\u52a1\u7aef\u8bfb\u53d6\u4e86\u76f8\u5173\u914d\u7f6e\u540e\uff0c\u518d\u5c06\u8bf7\u6c42\u901a\u8fc7\u8def\u7531\u8f6c\u53d1\u529f\u80fd\u4f20\u7ed9\u540e\u65b9\u7684\u5404\u539f\u5b50\u5e73\u53f0\uff0c\u5b8c\u6210\u6574\u5957\u8bf7\u6c42\u6d41\u7a0b\u3002\u4e3a\u4e86\u63d0\u5347\u6027\u80fd\uff0c\u8fd9\u5957\u67b6\u6784\u4e5f\u5f15\u5165\u4e86 Redis \u5904\u7406\u4e86\u4e00\u4e9b\u7f13\u5b58\u52a0\u901f\u7b49\u573a\u666f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e2d5b46.png",alt:"1.0 \u67b6\u6784\u56fe"})),(0,n.kt)("p",null,"1.0 \u7248\u672c\u7684\u67b6\u6784\u5728\u5185\u90e8\u8fd0\u884c\u4e86\u51e0\u5e74\u540e\uff0c\u968f\u7740\u8bf7\u6c42\u91cf\u7684\u589e\u957f\u548c\u573a\u666f\u7684\u590d\u6742\u5316\uff0c\u7f3a\u70b9\u5f00\u59cb\u9010\u6e10\u663e\u73b0\u51fa\u6765\u3002\u6bd4\u5982\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u6846\u67b6\u6027\u80fd\u4e0d\u4f73"),"\u3002\u5f53\u65f6\u5b9e\u73b0\u65f6\u9009\u62e9\u4e86 Django \u6846\u67b6\uff0c\u5b83\u5728\u9ad8\u5e76\u53d1\u573a\u666f\u4e0b\u8868\u73b0\u4e00\u822c\uff0c\u5904\u7406\u6d77\u91cf\u8bf7\u6c42\u65f6\u6027\u80fd\u6349\u895f\u89c1\u8098\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u8def\u7531\u5b9e\u73b0\u6027\u80fd\u4e00\u822c"),"\u3002API \u8def\u7531\u91c7\u7528\u7684\u7b97\u6cd5\u6027\u80fd\u8f83\u4f4e\uff0c\u5f71\u54cd\u5230\u8def\u7531\u7684\u5339\u914d\u548c\u8f6c\u53d1\u901f\u5ea6\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DB \u538b\u529b\u5927"),"\u3002\u8def\u7531\u7b56\u7565\u5168\u90e8\u5b58\u50a8\u5728 MySQL \u4e2d\uff0c\u89c4\u5219\u591a\u65f6\u9700\u627f\u8f7d\u5927\u91cf\u68c0\u7d22\u8bf7\u6c42\uff0c\u67e5\u8be2\u538b\u529b\u5927\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7f51\u7edc\u5f00\u9500\u5927"),"\u3002Redis \u5728\u591a\u79cd\u573a\u666f\u4e0b\u88ab\u9ad8\u5f3a\u5ea6\u4f7f\u7528\uff0c\u5bfc\u81f4\u7f51\u7edc\u5f00\u9500\u592a\u5927\u3002"))),(0,n.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u4e0a\u8ff0\u95ee\u9898\uff0c\u6211\u4eec\u5728 1.0 \u7248\u672c\u7684\u57fa\u7840\u4e0a\u8fdb\u884c\u4e86\u8fed\u4ee3\uff0c\u8bbe\u8ba1\u5b9e\u73b0\u4e86 2.0 \u7248\u672c\u3002\u76f8\u6bd4\u524d\u4ee3\uff0c2.0 \u7248\u672c\u6700\u5927\u7684\u6539\u52a8\u5c31\u662f\u4f7f\u7528 Go \u8bed\u8a00\u91cd\u65b0\u5b9e\u73b0\u4e86\u7f51\u5173\u7684\u6846\u67b6\u548c\u8f6c\u53d1\u5c42\u3002\u56e0\u4e3a Go \u76f8\u6bd4 Python\uff0c\u5728\u5904\u7406\u5927\u5e76\u53d1\u8bf7\u6c42\u7684\u573a\u666f\u4e0b\u4f1a\u66f4\u6709\u4f18\u52bf\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e4de2e6.png",alt:"\u84dd\u9cb8 2.0 \u7f51\u5173\u67b6\u6784"})),(0,n.kt)("p",null,"\u540c\u65f6\u8fd8\u8fdb\u884c\u4e86\u5176\u4ed6\u4f18\u5316\u53d8\u52a8\u3002\u6bd4\u5982\u5728\u5185\u5b58\u4e2d\u7ef4\u62a4\u4e86\u4e00\u4e2a\u66f4\u9ad8\u6548\u7684\u8def\u7531\u5b9e\u73b0\uff1b\u5728\u4e2d\u95f4\u5c42\u5f15\u5165\u4e86\u57fa\u4e8e\u5185\u5b58\u7684\u7f13\u5b58\uff0c\u4ee5\u51cf\u5c11\u5bf9 Redis \u7684\u4f9d\u8d56\u3002\u65b0\u67b6\u6784\u4e5f\u589e\u52a0\u4e86\u5bf9\u7f51\u5173\u591a\u7248\u672c\u548c\u591a\u73af\u5883\u7684\u751f\u547d\u5468\u671f\u7ba1\u7406\uff0c\u5f15\u5165\u6269\u5c55\u63d2\u4ef6\u673a\u5236\uff0c\u65b9\u4fbf\u5f00\u53d1\u8005\u901a\u8fc7\u63d2\u4ef6\u5bf9\u7f51\u5173\u80fd\u529b\u8fdb\u884c\u6269\u5c55\u3002"),(0,n.kt)("p",null,"\u603b\u4f53\u6765\u8bf4\uff0c2.0 \u7248\u672c\u89e3\u51b3\u4e86 1.0 \u7248\u672c\u4e2d\u9047\u5230\u7684\u6027\u80fd\u95ee\u9898\u548c\u5927\u90e8\u5206\u75db\u70b9\u3002\u4f46\u968f\u7740\u65f6\u95f4\u7684\u63a8\u79fb\uff0c\u65b0\u7684\u95ee\u9898\u4e5f\u5f00\u59cb\u6162\u6162\u6d6e\u51fa\u6c34\u9762\u3002"),(0,n.kt)("h3",{id:"\u6280\u672f\u9009\u578b"},"\u6280\u672f\u9009\u578b"),(0,n.kt)("p",null,"\u8fdb\u5165\u4e91\u539f\u751f\u65f6\u4ee3\u540e\uff0c\u6211\u4eec\u53d1\u73b0\u7f51\u5173 2.0 \u7248\u672c\u5728\u4e00\u4e9b\u65b9\u9762\u6e10\u6e10\u65e0\u6cd5\u6ee1\u8db3\u4e1a\u52a1\u9700\u6c42\uff0c\u4e3b\u8981\u7684\u95ee\u9898\u5305\u62ec\u4ee5\u4e0b\u51e0\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u9694\u79bb\u6027\u4e0d\u8db3"),"\uff1a\u65e0\u6cd5\u5b9e\u73b0\u771f\u6b63\u7684\u7269\u7406\u9694\u79bb\uff1b\u53d1\u5e03\u8fc7\u7a0b\u4f1a\u5bfc\u81f4\u957f\u8fde\u63a5\u95ea\u65ad\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u534f\u8bae\u652f\u6301\u5355\u4e00"),"\uff1a\u4ec5\u652f\u6301 HTTP\uff0c\u800c\u5b9e\u9645\u573a\u666f\u4e2d\u5bf9\u975e HTTP \u534f\u8bae\u7684\u9700\u6c42\u5728\u589e\u591a\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u4e0d\u652f\u6301\u52a8\u6001\u8def\u7531\u89c4\u5219"),"\uff1a\u4e0d\u652f\u6301\u6309\u6761\u4ef6\u5339\u914d\u7684\u52a8\u6001\u8def\u7531\u89c4\u5219\uff1b\u5bf9\u7070\u5ea6\u53d1\u5e03\u573a\u666f\u4e0d\u591f\u53cb\u597d\uff1b\u7f3a\u4e4f\u573a\u666f\u5316\u7ec4\u5408\u5c01\u88c5\u7684\u80fd\u529b\u3002")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"\u7f3a\u4e4f\u670d\u52a1\u53d1\u73b0\u80fd\u529b"),"\uff1a\u7f3a\u4e4f\u81ea\u52a8\u670d\u52a1\u53d1\u73b0\u80fd\u529b\uff0c\u5bf9\u5fae\u670d\u52a1\u67b6\u6784\u4e0d\u53cb\u597d\u3002"))),(0,n.kt)("p",null,"\u7ed3\u5408\u5b9e\u9645\u4e1a\u52a1\u573a\u666f\u6765\u8bf4\uff0c\u516c\u53f8\u5185\u90e8\u6709\u5f88\u591a\u4e1a\u52a1\u7cfb\u7edf\u90fd\u9700\u8981\u4f7f\u7528\u8fd9\u4e2a API \u7f51\u5173\uff0c\u5b83\u4eec\u5bf9\u7f51\u5173\u7684\u9700\u6c42\u867d\u7136\u5927\u90e8\u5206\u76f8\u4f3c\uff0c\u4f46\u7ec6\u5fae\u5904\u5176\u5b9e\u53c8\u5404\u6709\u5dee\u5f02\u3002\u5047\u5982\u628a\u5bf9\u7f51\u5173\u7684\u6240\u6709\u591a\u6837\u5316\u9700\u6c42\u90fd\u6574\u5408\u5728\u540c\u4e00\u5957\u7f51\u5173\u4e2d\uff0c\u96be\u5ea6\u5f88\u5927\u3002"),(0,n.kt)("p",null,"\u56e0\u6b64\uff0c\u6211\u4eec\u6709\u4e86\u8bbe\u8ba1\u5206\u5e03\u5f0f\u7f51\u5173\u7684\u60f3\u6cd5\u3002\u5373\u628a\u4e00\u4e2a\u5927\u7f51\u5173\u62c6\u5206\u6210\u8bb8\u591a\u4e2a\u5fae\u7f51\u5173\uff0c\u5229\u7528\u8fd9\u4e9b\u5fae\u7f51\u5173\u53bb\u5e73\u8861\u4e0d\u540c\u4e1a\u52a1\u7cfb\u7edf\u5bf9\u7f51\u5173\u7684\u9700\u6c42\u5dee\u5f02\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e5d1c50.png",alt:"\u5206\u5e03\u5f0f\u7f51\u5173"})),(0,n.kt)("p",null,"\u5206\u5e03\u5f0f\u7f51\u5173\u67b6\u6784\u7684\u7ec4\u4ef6\u4e3b\u8981\u5206\u4e3a\u4e24\u7c7b\uff1a\u7ba1\u7406\u7aef\u548c\u5fae\u7f51\u5173\u5b9e\u4f8b\u3002\u7ba1\u7406\u7aef\u7edf\u4e00\u7ba1\u63a7\u7740\u5404\u4e2a\u5fae\u7f51\u5173\uff0c\u7531\u5404\u7f51\u5173\u7684\u7ba1\u7406\u5458\u5bf9\u7f51\u5173\u8fdb\u884c\u914d\u7f6e\u548c\u7ba1\u7406\u3002\u5fae\u7f51\u5173\u5b9e\u4f8b\u662f\u72ec\u7acb\u90e8\u7f72\u7684\u5404\u4e2a\u7f51\u5173\u670d\u52a1\uff0c\u5404\u81ea\u72ec\u7acb\u627f\u62c5\u7279\u5b9a\u7684\u67d0\u4e00\u7ec4\u670d\u52a1\u7684\u8bbf\u95ee\u6d41\u91cf\uff0c\u6839\u636e\u7ba1\u7406\u7aef\u7684\u8bbe\u5b9a\u8fdb\u884c\u76f8\u5173\u8bbf\u95ee\u63a7\u5236\u3002\u6240\u6709\u5fae\u7f51\u5173\u5b9e\u4f8b\u7531\u540c\u4e00\u5957\u7ba1\u7406\u7aef\u7ba1\u63a7\u3002"),(0,n.kt)("p",null,"\u5728\u5fae\u7f51\u5173\u7684\u6280\u672f\u9009\u578b\u65b9\u9762\uff0c\u6211\u4eec\u5f53\u65f6\u53c2\u8003\u4e86\u5e02\u9762\u4e0a\u6bd4\u8f83\u6d41\u884c\u7684\u591a\u4e2a\u7f51\u5173\u5f00\u6e90\u4ea7\u54c1\uff0c\u4ece\u6d41\u884c\u5ea6\u3001\u6280\u672f\u6808\u3001\u534f\u8bae\u652f\u6301\u7b49\u5404\u4e2a\u5c42\u9762\u5bf9\u6bd4\u540e\uff0c\u6700\u7ec8\u9009\u62e9\u4e86\u4f7f\u7528 APISIX \u4f5c\u4e3a\u5fae\u7f51\u5173\u6700\u91cd\u8981\u7684\u540e\u7aef\u6280\u672f\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e867133.png",alt:"\u5404\u7f51\u5173\u5bf9\u6bd4\u7ec6\u8282"})),(0,n.kt)("p",null,"\u4e4b\u6240\u4ee5\u9009\u62e9 APISIX\uff0c\u662f\u56e0\u4e3a\u5b83\u662f\u57fa\u4e8e NGINX+Lua \u5b9e\u73b0\u7684\uff0c\u6240\u4ee5\u6574\u4f53\u6027\u80fd\u76f8\u6bd4 Go \u800c\u8a00\u662f\u6709\u4f18\u52bf\u7684\u3002\u540c\u65f6 APISIX \u7684\u6269\u5c55\u6027\u975e\u5e38\u597d\uff0c\u8fd8\u652f\u6301\u901a\u8fc7\u591a\u8bed\u8a00\u63d2\u4ef6\u53bb\u6269\u5c55\u80fd\u529b\uff0c\u5728\u5f53\u65f6\u4e5f\u6709\u975e\u5e38\u591a\u7684\u6210\u719f\u7684\u7528\u6237\u6848\u4f8b\u3002"),(0,n.kt)("p",null,"\u4e0d\u8fc7\uff0cAPISIX \u5728\u5f53\u65f6\u5bf9\u4e8e\u6211\u4eec\u7684\u5185\u90e8\u4f7f\u7528\u573a\u666f\u6765\u8bf4\uff0c\u8fd8\u662f\u5b58\u5728\u4e00\u4e9b\u4e0d\u8db3\u7684\u3002\u6bd4\u5982\u5b83\u7684\u63a7\u5236\u9762\u80fd\u529b\u6709\u4e9b\u7f3a\u4e4f\uff0c\u63a7\u5236\u9762\u677f\u6bd4\u8f83\u7b80\u964b\u3002\u56e0\u6b64\u5728 APISIX \u7684\u57fa\u7840\u4e0a\uff0c\u6211\u4eec\u6309\u7167\u5185\u90e8\u9700\u6c42\u53bb\u5b9e\u73b0\u5b9a\u5236\u4e86 APISIX \u7684\u63a7\u5236\u9762\u3002"),(0,n.kt)("h2",{id:"\u57fa\u4e8e-apisix-\u7684\u84dd\u9cb8\u7f51\u5173-30-\u8fed\u4ee3"},"\u57fa\u4e8e APISIX \u7684\u84dd\u9cb8\u7f51\u5173 3.0 \u8fed\u4ee3"),(0,n.kt)("p",null,"\u4e91\u539f\u751f\u73af\u5883\u4e0b\uff0cK8s \u5c31\u662f\u6211\u4eec\u9700\u8981\u5173\u6ce8\u7684\u6700\u91cd\u8981\u7684\u57fa\u7840\u7ec4\u4ef6\u3002\u56e0\u4e3a\u6574\u4e2a\u5fae\u7f51\u5173\u90fd\u662f\u9762\u5411\u4e91\u539f\u751f\u8bbe\u8ba1\uff0c\u6240\u4ee5 3.0 \u7248\u672c\u7684\u7f51\u5173\u5c31\u57fa\u4e8e K8s \u8fdb\u884c\u4e86\u65b0\u7684\u67b6\u6784\u8bbe\u8ba1\u3002"),(0,n.kt)("p",null,"\u5176\u4e2d\u6700\u6838\u5fc3\u7684\u90e8\u5206\uff0c\u5c31\u662f\u4f7f\u7528 K8s \u63d0\u4f9b\u7684 CRD \u81ea\u5b9a\u4e49\u8d44\u6e90\uff0c\u5b9e\u73b0\u4e86\u5bf9\u7f51\u5173\u7684\u6574\u5957\u64cd\u4f5c\u548c\u6269\u5c55\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5ece0ea6.png",alt:"\u57fa\u4e8e APISIX \u7684\u67b6\u6784\u8c03\u6574"})),(0,n.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u7f51\u5173\u5f15\u5165\u4e86\u4e00\u6574\u5957 K8s \u7684 CRD \u8d44\u6e90\u5b9a\u4e49\uff0c\u5305\u62ec\uff1aBkGatewayStage\uff08\u7f51\u5173\u73af\u5883\uff09\u3001BkGatewayService\uff08\u540e\u7aef\u670d\u52a1\uff09\u7b49\u3002\u901a\u8fc7\u8fd9\u4e9b CRD\uff0c\u6211\u4eec\u5f97\u4ee5\u63a7\u5236\u6bcf\u4e2a\u5fae\u7f51\u5173\u5b9e\u4f8b\u7684\u5177\u4f53\u884c\u4e3a\u3002"),(0,n.kt)("p",null,"\u56fe\u4e2d\u7684\u51e0\u4e2a\u201cOperator\u201d\u662f\u8fd9\u5957\u67b6\u6784\u4e2d\u6700\u6838\u5fc3\u7684\u90e8\u5206\u3002\u4e0a\u65b9\u662f Plugin Operators \u670d\u52a1\uff0c\u91cc\u9762\u5305\u542b\u4e00\u7cfb\u5217\u7684\u63d2\u4ef6 Operator\u3002\u6bd4\u5982\u8d1f\u8d23\u670d\u52a1\u53d1\u73b0\u7684 Operator\uff0c\u4f1a\u5c06\u540e\u7aef\u670d\u52a1\u6ce8\u518c\u5728\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u7684\u5730\u5740\u5199\u5165\u5230 K8s \u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("p",null,"\u4e2d\u95f4\u7684\u6838\u5fc3 Operator \u76d1\u542c\u7740\u6240\u6709\u548c\u7f51\u5173\u76f8\u5173\u7684 CRD \u8d44\u6e90\u3002\u5176\u4e2d\u7684\u8d44\u6e90\u8c03\u548c\u5668\uff08reconciler\uff09\uff0c\u8d1f\u8d23\u5c06\u8bfb\u53d6\u5230\u7684\u7f51\u5173\u914d\u7f6e\u8f6c\u6362\u6210 APISIX \u5fae\u7f51\u5173\u5b9e\u4f8b\u80fd\u7406\u89e3\u7684\u683c\u5f0f\uff0c\u4ece\u800c\u5b9e\u73b0\u5fae\u7f51\u5173\u7684\u5168\u5957\u751f\u547d\u5468\u671f\u7ba1\u7406\u3002"),(0,n.kt)("p",null,"\u76ee\u524d\uff0c\u8fd9\u5957\u5fae\u7f51\u5173\u4e3b\u8981\u5206\u4e3a\u4e24\u79cd\u90e8\u7f72\u7c7b\u578b\uff1a"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u5171\u4eab\u7f51\u5173\uff1a\u9ed8\u8ba4\u7c7b\u578b\uff0c\u5e73\u53f0\u7edf\u4e00\u90e8\u7f72\uff0c\u7531\u5e73\u53f0\u7edf\u4e00\u751f\u6210\u4e0e\u7ba1\u7406 API \u8bbf\u95ee\u5730\u5740\uff1b")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"\u4e13\u4eab\u7f51\u5173\uff1a\u4f7f\u7528\u65b9\u81ea\u884c\u90e8\u7f72\u201c\u5fae\u7f51\u5173\u201d\u5b9e\u4f8b\uff0c\u63a5\u5165\u5e73\u53f0\u540e\u53d8\u4e3a\u201c\u4e13\u4eab\u7f51\u5173\u201d\uff0c\u9700\u624b\u52a8\u7ba1\u7406 API \u8bbf\u95ee\u5730\u5740\uff0c\u6d41\u91cf\u76f4\u63a5\u4ece\u201c\u4e13\u4eab\u7f51\u5173\u201d\u6d41\u5165\u540e\u7aef\u670d\u52a1\u3002"))),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e9f0e9a.png",alt:"\u5171\u4eab\u7f51\u5173\u4e0e\u4e13\u4eab\u7f51\u5173"})),(0,n.kt)("p",null,"\u4ece\u4e0a\u56fe\u53ef\u4ee5\u770b\u5230\uff0c\u7ba1\u7406\u7aef\u7edf\u4e00\u53ea\u6709\u4e00\u5957\uff0c\u56e0\u6b64\u5b83\u7684\u80fd\u529b\u5e76\u4e0d\u63d0\u4f9b\u4efb\u4f55\u5dee\u5f02\u5316\uff0c\u50cf\u591a\u73af\u5883\u7ba1\u7406\u3001\u6743\u9650\u7ba1\u7406\u7b49\u529f\u80fd\u90fd\u662f\u6240\u6709\u7f51\u5173\u5171\u6709\u3002\u4f46\u5728\u5b83\u6240\u7ba1\u7406\u7684\u4e0d\u540c\u7c7b\u578b\u7684\u5fae\u7f51\u5173\u5b9e\u4f8b\u4e2d\uff0c\u6240\u652f\u6301\u7684\u7279\u6027\u96c6\u5c31\u4f1a\u4e92\u6709\u5dee\u5f02\u3002"),(0,n.kt)("p",null,"\u62ff\u5171\u4eab\u7f51\u5173\u5b9e\u4f8b\u6765\u8bf4\uff0c\u5b83\u6240\u652f\u6301\u7684\u7279\u6027\u96c6\u662f\u6bd4\u8f83\u57fa\u7840\u7684\u3002\u4e3b\u8981\u5305\u542b\u7edf\u4e00\u7684\u767b\u5f55\u9274\u6743\u3001\u9650\u6d41\u7194\u65ad\u548c\u591a\u534f\u8bae\u652f\u6301\u7b49\u3002\u800c\u5230\u4e86\u6bcf\u4e2a\u4e1a\u52a1\u72ec\u7acb\u7684\u4e13\u4eab\u7f51\u5173\u5b9e\u4f8b\uff0c\u5c31\u53ef\u4ee5\u62e5\u6709\u4e00\u4e9b\u4e0d\u4e00\u6837\u7684\u4e2a\u6027\u5316\u80fd\u529b\u3002\u56e0\u4e3a\u4e13\u4eab\u7f51\u5173\u548c\u4e1a\u52a1\u540c\u5c5e\u4e00\u4e2a\u96c6\u7fa4\uff0c\u6240\u4ee5\u5b83\u53ef\u8f7b\u677e\u5b9e\u73b0\u52a8\u6001\u8def\u7531\u3001\u81ea\u5b9a\u4e49\u670d\u52a1\u53d1\u73b0\u7b49\u80fd\u529b\uff0c\u4e5f\u5229\u7528 APISIX \u7684\u5f3a\u62d3\u5c55\u6027\u53bb\u81ea\u5b9a\u4e49\u66f4\u591a\u80fd\u529b\u3002"),(0,n.kt)("p",null,"\u57fa\u4e8e\u8fd9\u5957\u67b6\u6784\u548c\u6a21\u5f0f\uff0c\u84dd\u9cb8 API \u7f51\u5173 3.0 \u7248\u672c\u5728 APISIX \u80fd\u529b\u7684\u52a0\u6301\u4e0b\uff0c\u63d0\u4f9b\u4e86\u66f4\u52a0\u4e30\u5bcc\u7684\u529f\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5d86f604.png",alt:"\u84dd\u9cb8\u7f51\u5173 3.0 \u529f\u80fd"})),(0,n.kt)("h2",{id:"\u57fa\u4e8e-apisix-\u84dd\u9cb8\u7f51\u5173-30-\u5b9e\u8df5\u573a\u666f"},"\u57fa\u4e8e APISIX \u84dd\u9cb8\u7f51\u5173 3.0 \u5b9e\u8df5\u573a\u666f"),(0,n.kt)("h3",{id:"\u670d\u52a1\u53d1\u73b0"},"\u670d\u52a1\u53d1\u73b0"),(0,n.kt)("p",null,"\u670d\u52a1\u53d1\u73b0\u662f\u5fae\u670d\u52a1\u67b6\u6784\u6240\u9700\u7684\u4e00\u4e2a\u57fa\u672c\u80fd\u529b\uff0c\u5728\u5185\u90e8\uff0c\u6211\u4eec\u4e3b\u8981\u901a\u8fc7\u81ea\u5b9a\u4e49\u8d44\u6e90 CRD \u53bb\u5b9e\u73b0\u3002\u4e00\u4efd\u6709\u6548\u7684\u670d\u52a1\u53d1\u73b0 YAML \u5b9a\u4e49\u5982\u4e0b\u56fe\u53f3\u4fa7\u4ee3\u7801\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5d9e162f.png",alt:"\u670d\u52a1\u53d1\u73b0\u5b9e\u8df5"})),(0,n.kt)("p",null,"\u5c06\u4e0a\u8ff0 CRD \u8d44\u6e90\u5199\u5165 K8s \u96c6\u7fa4\u540e\uff0c\u5c31\u4f1a\u89e6\u53d1\u670d\u52a1\u53d1\u73b0\u76f8\u5173\u7684\u63a7\u5236\u5668\u7684\u76f8\u5173\u52a8\u4f5c\u3002\u4e4b\u540e\u8c03\u548c\u5668\uff08Reconciler\uff09\u4f1a\u6355\u83b7\u5230\u5bf9\u5e94\u7684\u670d\u52a1\u53d1\u73b0\u914d\u7f6e\uff0c\u521b\u5efa\u670d\u52a1\u53d1\u73b0\u76f8\u5173\u7684\u7a0b\u5e8f\u5bf9\u8c61\u3002"),(0,n.kt)("p",null,"\u7136\u540e\u5b83\u4f1a\u901a\u8fc7\u5185\u7f6e\u7684\u670d\u52a1\u53d1\u73b0\u63a5\u53e3\uff08\u5305\u542b Watcher\u3001Lister\uff09\u8bfb\u53d6\u670d\u52a1\u53d1\u73b0\u4e2d\u5fc3\u7684\u76f8\u5173\u5730\u5740\u4fe1\u606f\uff0c\u5c06\u83b7\u53d6\u5230\u7684\u5730\u5740\u901a\u8fc7 BkGatewayEndpoints \u8fd9\u4e2a CRD \u8d44\u6e90\u91cd\u65b0\u5199\u56de\u5230 K8s \u96c6\u7fa4\u5185\u3002\u518d\u7ecf\u7531\u53f3\u4fa7\u7684\u6838\u5fc3 Operator \u8fdb\u884c\u4e00\u4e9b\u590d\u6742\u5904\u7406\u540e\uff0c\u8fd9\u4e9b endpoints \u6700\u7ec8\u88ab\u540c\u6b65\u5230 APISIX \u5bf9\u5e94\u7684\u4e0a\u6e38\u4e2d\uff0c\u4e00\u6b21\u5b8c\u6574\u7684\u670d\u52a1\u53d1\u73b0\u6d41\u7a0b\u5c31\u6b64\u5b8c\u6210\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1\uff0c\u6211\u4eec\u5b9e\u73b0\u4e86\u4e00\u4e2a\u901a\u7528\u7684\u670d\u52a1\u53d1\u73b0\u6846\u67b6\u3002\u5b83\u63d0\u4f9b\u4e86\u7edf\u4e00\u7684\u5f00\u53d1\u63a5\u53e3\u548c\u89c4\u8303\uff0c\u4f7f\u7528\u5b83\u53ef\u4ee5\u4f4e\u6210\u672c\u5730\u652f\u6301\u5176\u4ed6\u7c7b\u578b\u7684\u670d\u52a1\u53d1\u73b0\u573a\u666f\u3002"),(0,n.kt)("h3",{id:"\u7edf\u4e00\u8ba4\u8bc1\u6388\u6743"},"\u7edf\u4e00\u8ba4\u8bc1\u6388\u6743"),(0,n.kt)("p",null,"\u7edf\u4e00\u8ba4\u8bc1\u90e8\u5206\u6bd4\u8f83\u7b80\u5355\u3002\u5728\u4e1a\u52a1\u5b9e\u8df5\u4e2d\uff0c\u6211\u4eec\u9700\u8981\u652f\u6301\u6765\u81ea\u4e09\u79cd\u4e0d\u540c\u6765\u6e90\u7684\u8bf7\u6c42\uff0c\u5206\u522b\u662f\u6d4f\u89c8\u5668\u3001\u5e73\u53f0\u548c\u4e2a\u4eba\u7528\u6237\u3002\u6211\u4eec\u57fa\u4e8e APISIX \u5b9e\u73b0\u4e86\u4e00\u4e2a\u8ba4\u8bc1\u63d2\u4ef6\uff0c\u6765\u5b9e\u73b0\u7edf\u4e00\u8ba4\u8bc1\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5db4d0ac.png",alt:"\u8ba4\u8bc1\u6d41\u7a0b\u56fe"})),(0,n.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b\u5982\u4e0a\u56fe\u6240\u793a\u3002\u8bf7\u6c42\u8fdb\u6765\u540e\uff0c\u63d2\u4ef6\u4f1a\u4ece Header \u4e2d\u8bfb\u53d6\u76f8\u5173\u7684\u51ed\u636e\u4fe1\u606f\uff0c\u7136\u540e\u7edf\u4e00\u8c03\u7528 BK-Auth \u8ba4\u8bc1\u670d\u52a1\u53bb\u6821\u9a8c\u8be5\u51ed\u636e\uff0c\u5e76\u8bfb\u53d6\u5bf9\u5e94\u7684 SaaS \u4fe1\u606f\u3002\u4e4b\u540e\u518d\u7528\u548c\u540e\u7aef\u7ea6\u5b9a\u597d\u7684\u79c1\u94a5\uff0c\u7b7e\u53d1\u4e00\u4e2a JWT token \u5e76\u5c06\u5176\u5199\u5165\u8bf7\u6c42\u5934\u4e2d\uff0c\u6700\u540e\u5199\u5165 APISIX \u53d8\u91cf\u3002"),(0,n.kt)("p",null,"\u9664\u7edf\u4e00\u8ba4\u8bc1\u5916\uff0c\u5185\u90e8\u4e1a\u52a1\u4e2d\u4e5f\u5b58\u5728\u4e00\u4e9b\u590d\u6742\u7684\u9274\u6743\u573a\u666f\u3002\u5176\u4e3b\u8981\u89e3\u51b3\u7684\u95ee\u9898\u662f\uff0c\u5f53\u4e00\u4e2a SaaS \u8c03\u7528\u67d0\u539f\u5b50\u5e73\u53f0\u7684\u67d0\u4e2a\u8d44\u6e90\u65f6\uff0c\u5224\u65ad\u8be5 SaaS \u6709\u6ca1\u6709\u8fd9\u4e2a\u6743\u9650\u3002\u76ee\u524d\u7edf\u4e00\u7684\u8d44\u6e90\u9274\u6743\u4e5f\u662f\u901a\u8fc7 APISIX \u63d2\u4ef6\u5b9e\u73b0\uff0c\u8fd9\u91cc\u6211\u4eec\u4f7f\u7528\u4e86 Go \u8bed\u8a00\u5b9e\u73b0\uff0c\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e095f79.png",alt:"\u9274\u6743\u6d41\u7a0b\u56fe"})),(0,n.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u7684\u8bf7\u6c42\u8fc7\u6765\u540e\uff0c\u4f1a\u9996\u5148\u7ecf\u8fc7\u8ba4\u8bc1\u73af\u8282\u62ff\u5230 SaaS \u5e94\u7528\u4fe1\u606f\u3002\u7136\u540e\u7ecf\u8fc7 ext-plugin \u5904\uff0c\u57fa\u4e8e RPC \u4e0e\u9274\u6743\u63d2\u4ef6\u8fdb\u884c\u4ea4\u4e92\u3002\u6b64\u65f6\u9274\u6743\u63d2\u4ef6\u4f1a\u76f4\u63a5\u53bb\u67e5\u8be2\u7f13\u5b58\u4e2d\u7684\u9274\u6743\u76f8\u5173\u6570\u636e\uff08\u901a\u8fc7\u5168\u91cf\u548c\u589e\u91cf\u673a\u5236\u7531\u7ba1\u7406\u7aef\u540c\u6b65\uff09\uff0c\u4e4b\u540e\u5b8c\u6210\u9274\u6743\u3002"),(0,n.kt)("h3",{id:"\u52a8\u6001\u8def\u7531"},"\u52a8\u6001\u8def\u7531"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e3d1788.png",alt:"\u52a8\u6001\u8def\u7531"})),(0,n.kt)("p",null,"\u6bd4\u8f83\u5178\u578b\u7684\u52a8\u6001\u8def\u7531\u5e94\u7528\u573a\u666f\u6765\u81ea\u84dd\u9cb8\u7684\u5bb9\u5668\u7ba1\u7406\u5e73\u53f0\u3002\u84dd\u9cb8\u5bb9\u5668\u5e73\u53f0\u7ba1\u7406\u7740\u975e\u5e38\u591a\u7684 K8s \u96c6\u7fa4\uff0c\u6709\u4e00\u4e9b\u662f\u4e1a\u52a1\u7684\u670d\u52a1\u96c6\u7fa4\uff0c\u6709\u4e00\u4e9b\u662f\u4e1a\u52a1\u7684\u6570\u636e\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u4f5c\u4e3a\u7528\u6237\uff0c\u5e38\u5e38\u9700\u8981\u8bf7\u6c42\u8fd9\u4e9b\u96c6\u7fa4\u7684 APIServer \u53bb\u5b8c\u6210\u4e00\u4e9b\u4e8b\u60c5\u3002\u5f53\u7528\u6237\u8bf7\u6c42\u8fdb\u5165\u5230\u5fae\u7f51\u5173\u65f6\uff0c\u7f51\u5173\u9700\u8981\u6839\u636e\u8bf7\u6c42\u8def\u5f84\uff0c\u5224\u65ad\u8be5\u5c06\u5176\u8f6c\u53d1\u5230\u54ea\u4e2a\u96c6\u7fa4\u7684 APIServer \u4e2d\u3002\u5177\u4f53\u5b9e\u73b0\u6d41\u7a0b\u5982\u4e0b\u56fe\u6240\u793a\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5e6c758c.png",alt:"\u52a8\u6001\u8def\u7531\u6d41\u7a0b\u56fe"})),(0,n.kt)("p",null,"\u8bf7\u6c42\u8fdb\u5165\u540e\uff0c\u52a8\u6001\u8def\u7531\u63d2\u4ef6\u9996\u5148\u63d0\u53d6\u51fa\u96c6\u7fa4\u7684 ID \u4fe1\u606f\uff0c\u7136\u540e\u5bf9\u8def\u7531\u8fdb\u884c\u91cd\u5199\uff0c\u4e4b\u540e\u5224\u65ad\u8be5\u96c6\u7fa4\u662f\u5426\u4e3a\u76f4\u8fde\u96c6\u7fa4\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u975e\u76f4\u8fde\u96c6\u7fa4\uff0c\u9996\u5148\u4f1a\u751f\u6210\u4e00\u4e2a BCS \u96c6\u7fa4\u7ba1\u7406\u5668\u4e0a\u6e38\uff0c\u7136\u540e\u501f\u5176\u548c BCS Agent \u8fdb\u884c\u4ea4\u4e92\uff0c\u6700\u540e\u5c06\u8bf7\u6c42\u4f20\u9012\u7ed9\u96c6\u7fa4\u7684 APIServer\u3002"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u76f4\u8fde\u7684\u96c6\u7fa4\uff0c\u6d41\u7a0b\u5219\u7c7b\u4f3c\u4e8e\u524d\u6587\u7684\u7edf\u4e00\u9274\u6743\u63d2\u4ef6\uff0c\u63d2\u4ef6\u4f1a\u5b9a\u671f\u540c\u6b65\u4e00\u4e9b\u4e0e\u96c6\u7fa4\u76f8\u5173\u7684\u57fa\u672c\u4fe1\u606f\u3002\u627e\u5230\u96c6\u7fa4\u4fe1\u606f\u540e\u751f\u6210\u76f8\u5173\u4e0a\u6e38\uff0c\u518d\u901a\u8fc7 APISIX \u63d2\u4ef6\u53bb\u91cd\u5b9a\u4e49\u8fde\u63a5\u903b\u8f91\uff0c\u6700\u540e\u5c06\u8bf7\u6c42\u53d1\u9001\u5230\u96c6\u7fa4 APIServer\u3002"),(0,n.kt)("h3",{id:"\u5ba2\u6237\u7aef\u8bc1\u4e66\u7ba1\u7406"},"\u5ba2\u6237\u7aef\u8bc1\u4e66\u7ba1\u7406"),(0,n.kt)("p",null,"\u5728\u6211\u4eec\u7684\u4e1a\u52a1\u573a\u666f\u4e2d\uff0c\u6709\u4e00\u7c7b\u539f\u5b50\u7cfb\u7edf\u5728\u5c06\u8d44\u6e90\u6ce8\u518c\u5230\u7f51\u5173\u65f6\uff0c\u4f7f\u7528\u7684\u662f\u6bd4\u8f83\u590d\u6742\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u9a8c\u8bc1\u6a21\u5f0f\u3002\u56e0\u6b64\uff0c\u5982\u679c\u67d0\u4e2a\u7528\u6237\u8981\u8bf7\u6c42\u5b83\u7684\u8d44\u6e90\uff0c\u5c31\u5fc5\u987b\u63d0\u4f9b\u4e00\u4efd\u6709\u6548\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/11/14/6371a5eb39d81.png",alt:"\u8bc1\u4e66\u7ba1\u7406\u6d41\u7a0b\u56fe"})),(0,n.kt)("p",null,"\u5177\u4f53\u5b9e\u73b0\u5982\u4e0a\u56fe\u6240\u793a\u3002\u5bf9\u4e8e\u7f51\u5173\u7ba1\u7406\u8005\uff0c\u9996\u5148\u8981\u5728\u7ba1\u7406\u7aef\u914d\u7f6e\u597d\u7f51\u5173\u5728\u4e0d\u540c\u73af\u5883\u4e2d\u4f7f\u7528\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u3002\u521b\u5efa\u5b8c\u6210\u540e\uff0c\u8bc1\u4e66\u4f1a\u88ab\u53d1\u5e03\u5230\u5bf9\u5e94\u7684\u5fae\u7f51\u5173\u6240\u5728\u7684 K8s \u96c6\u7fa4\u4e2d\u3002"),(0,n.kt)("p",null,"\u8fd9\u4e2a\u8fc7\u7a0b\u4f1a\u4f7f\u7528\u4e00\u4e9b CRD \u8d44\u6e90\u548c K8s \u5b98\u65b9\u7684 Secret \u8d44\u6e90\uff0c\u5e76\u7531\u6838\u5fc3\u7684 Operator \u670d\u52a1\u8fdb\u884c\u6301\u7eed\u5730\u8c03\u548c\u5904\u7406\uff0c\u6bd4\u5982\u6839\u636e\u57df\u540d\u5bfb\u627e\u5bf9\u5e94\u8bc1\u4e66\u7b49\u3002\u6709\u6548\u7684\u5ba2\u6237\u7aef\u8bc1\u4e66\u914d\u7f6e\uff0c\u6700\u7ec8\u4f1a\u4f53\u73b0\u5728 APISIX Service \u7684\u76f8\u5173\u914d\u7f6e\u4e2d\uff08\u5982\u4e0a\u56fe\u53f3\u4e0a\u65b9\u4ee3\u7801\u7ea2\u6846\u5904\uff09\u3002"),(0,n.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u672c\u6587\u4ece\u84dd\u9cb8 API \u7f51\u5173\u7684\u8bde\u751f\u80cc\u666f\u4e0e\u8fed\u4ee3\u8fc7\u7a0b\u5165\u624b\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u4e00\u4e2a API \u7f51\u5173\u4ea7\u54c1\u7684\u4ece 0 \u5230 1 \u7684\u63a2\u7d22\u8fc7\u7a0b\u3002\u4e5f\u5e26\u6765\u4e86\u9009\u62e9 APISIX \u8fdb\u884c\u7f51\u5173\u4ea7\u54c1\u8fed\u4ee3\u7684\u8fc7\u7a0b\u4e2d\uff0c\u4e00\u4e9b\u4e1a\u52a1\u5b9e\u8df5\u573a\u666f\u7684\u7ec6\u8282\u5206\u4eab\u3002\u5e0c\u671b\u5bf9\u4e8e\u60f3\u8981\u4f7f\u7528 APISIX \u8fdb\u884c\u7f51\u5173\u8fed\u4ee3\u7684\u4f01\u4e1a\u6709\u4e00\u4e9b\u5efa\u8bbe\u6027\u7684\u542f\u53d1\u3002"))}o.isMDXComponent=!0}}]);