"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4473],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=p(r),f=o,y=m["".concat(l,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},66441:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>p});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u793e\u533a\u53cc\u5468\u62a5 (10.1 - 10.15)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 `proxy-mirror` \u63d2\u4ef6\u652f\u6301\u89e3\u6790 host \u57df\u540d\u3001`kafka-logger` \u63d2\u4ef6\u65b0\u589e brokers \u5c5e\u6027\uff0c\u652f\u6301\u4e0d\u540c broker \u8bbe\u7f6e\u76f8\u540c host \u7b49\u529f\u80fd\u3002",tags:["Community"],image:"https://static.apiseven.com/2022/10/18/634e520868415.jpg"},i=void 0,c={permalink:"/zh/blog/2022/10/18/weekly-report-0731",source:"@site/blog/2022/10/18/weekly-report-0731.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (10.1 - 10.15)",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86 `proxy-mirror` \u63d2\u4ef6\u652f\u6301\u89e3\u6790 host \u57df\u540d\u3001`kafka-logger` \u63d2\u4ef6\u65b0\u589e brokers \u5c5e\u6027\uff0c\u652f\u6301\u4e0d\u540c broker \u8bbe\u7f6e\u76f8\u540c host \u7b49\u529f\u80fd\u3002",date:"2022-10-18T00:00:00.000Z",formattedDate:"2022\u5e7410\u670818\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:3.645,truncated:!0,authors:[],prevItem:{title:"\u4ece Traefik \u5230 APISIX\uff0c\u6c7d\u8f66\u667a\u80fd\u8ba1\u7b97\u5e73\u53f0\u516c\u53f8\u300c\u5730\u5e73\u7ebf\u300d\u5728 Ingress Controller \u7684\u63a2\u7d22\u548c\u5b9e\u8df5",permalink:"/zh/blog/2022/10/28/apisix-ingress-with-horizon-ai"},nextItem:{title:"\u653e\u5f03 Spring Cloud Gateway\uff01APISIX \u5728\u300c\u8fd8\u5457\u300d\u7684\u6280\u672f\u5b9e\u8df5",permalink:"/zh/blog/2022/09/30/huanbei-in-apache-apisix"}},l={authorsImageUrls:[]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece 10.1 - 10.15\uff0c\u6709 19 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 32 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")))}u.isMDXComponent=!0}}]);