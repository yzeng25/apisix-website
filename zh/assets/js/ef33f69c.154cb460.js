"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9334],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>b});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),b=o,m=f["".concat(p,".").concat(b)]||f[b]||u[b]||a;return r?n.createElement(m,c(c({ref:t},s),{},{components:r})):n.createElement(m,c({ref:t},s))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,c=new Array(a);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},38490:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"\u8d1d\u58f3\u627e\u623f\u5982\u4f55\u57fa\u4e8e APISIX \u642d\u5efa\u7f51\u5173",author:"\u738b\u8f89",keywords:["API \u7f51\u5173","APISIX","Apache APISIX","Kong","NGINX"],description:"\u8d1d\u58f3\u627e\u623f\u9009\u62e9\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4f5c\u4e3a API \u7f51\u5173\uff0c\u6bcf\u5929\u5904\u7406\u4e0a\u4ebf\u6d41\u91cf\uff0c\u6027\u80fd\u4f18\u5f02\u800c\u4e14\u975e\u5e38\u7a33\u5b9a\uff0c\u5e76\u4e14\u76f8\u6bd4\u4e8e Kong\uff0cApache APISIX \u66f4\u5bb9\u6613\u5165\u95e8\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E8%B4%9D%E5%A3%B3.png"},c=void 0,i={permalink:"/zh/blog/2020/12/11/beike-how-to-build-gateway-based-on-apache-apisix",source:"@site/blog/2020/12/11/beike-how-to-build-gateway-based-on-apache-apisix.md",title:"\u8d1d\u58f3\u627e\u623f\u5982\u4f55\u57fa\u4e8e APISIX \u642d\u5efa\u7f51\u5173",description:"\u8d1d\u58f3\u627e\u623f\u9009\u62e9\u4f7f\u7528\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4f5c\u4e3a API \u7f51\u5173\uff0c\u6bcf\u5929\u5904\u7406\u4e0a\u4ebf\u6d41\u91cf\uff0c\u6027\u80fd\u4f18\u5f02\u800c\u4e14\u975e\u5e38\u7a33\u5b9a\uff0c\u5e76\u4e14\u76f8\u6bd4\u4e8e Kong\uff0cApache APISIX \u66f4\u5bb9\u6613\u5165\u95e8\u3002",date:"2020-12-11T00:00:00.000Z",formattedDate:"2020\u5e7412\u670811\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:11.985,truncated:!0,authors:[{name:"\u738b\u8f89"}],prevItem:{title:"\u521d\u63a2 Kubernetes Service APIs",permalink:"/zh/blog/2020/12/18/first-look-at-kubernetes-service-api"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u8bb2\u8ff0\u4e86\u8d1d\u58f3\u627e\u623f\u5f53\u521d\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a API \u7f51\u5173\uff0c\u4ee5\u53ca\u4f7f\u7528\u8fc7\u7a0b\u4e2d\u7684\u4e00\u4e9b\u5fc3\u5f97\u3002")))}u.isMDXComponent=!0}}]);