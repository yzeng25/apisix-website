"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4616],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),f=l(r),m=a,b=f["".concat(p,".").concat(m)]||f[m]||u[m]||o;return r?n.createElement(b,c(c({ref:t},s),{},{components:r})):n.createElement(b,c({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},16112:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",slug:"2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",author:"\u8042\u6c38",keywords:["Apache APISIX","\u65b0\u6d6a\u5fae\u535a","Weibo","API Gateway"],description:"\u672c\u6587\u5206\u6790\u4e86 NGINX \u65b0\u6d6a\u5fae\u535a\u4f7f\u7528 NGINX \u65f6\u7684\u75db\u70b9\u548c\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u516c\u53f8\u7684 API \u7f51\u5173\uff0c\u4ee5\u53ca\u5bf9 Apache APISIX \u8fdb\u884c\u4e86\u54ea\u4e9b\u4e8c\u6b21\u5f00\u53d1\u3002",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/%E6%96%B0%E6%B5%AA%E5%BE%AE%E5%8D%9A.png"},c=void 0,i={permalink:"/zh/blog/2021/07/06/the-road-to-customization-of-sina-weibo-api-gateway-based-on-apache-apisix",source:"@site/blog/2021/07/14/the-road-to-customization-of-Sina-Weibo-API-gateway-based-on-Apache-APISIX.md",title:"\u57fa\u4e8e Apache APISIX\uff0c\u65b0\u6d6a\u5fae\u535a API \u7f51\u5173\u7684\u5b9a\u5236\u5316\u5f00\u53d1\u4e4b\u8def",description:"\u672c\u6587\u5206\u6790\u4e86 NGINX \u65b0\u6d6a\u5fae\u535a\u4f7f\u7528 NGINX \u65f6\u7684\u75db\u70b9\u548c\u4e3a\u4ec0\u4e48\u9009\u62e9 Apache APISIX \u4f5c\u4e3a\u516c\u53f8\u7684 API \u7f51\u5173\uff0c\u4ee5\u53ca\u5bf9 Apache APISIX \u8fdb\u884c\u4e86\u54ea\u4e9b\u4e8c\u6b21\u5f00\u53d1\u3002",date:"2021-07-14T00:00:00.000Z",formattedDate:"2021\u5e747\u670814\u65e5",tags:[{label:"Case Studies",permalink:"/zh/blog/tags/case-studies"}],readingTime:18.43,truncated:!0,authors:[{name:"\u8042\u6c38"}],prevItem:{title:"\u76f4\u64ad\u9884\u544a\uff5cApache APISIX x Kubernetes",permalink:"/zh/blog/2021/07/21/apache-apisix-kubernetes"},nextItem:{title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",permalink:"/zh/blog/2021/06/30/etcd3-support-http-access-perfectly"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u65b0\u6d6a\u5fae\u535a\u4e4b\u524d\u7684 HTTP API \u7f51\u5173\u57fa\u4e8e NGINX \u642d\u5efa\uff0c\u6240\u6709\u8def\u7531\u89c4\u5219\u5b58\u653e\u5728 NGINX conf \u914d\u7f6e\u6587\u4ef6\u4e2d\uff0c\u5e26\u6765\u4e00\u7cfb\u5217\u95ee\u9898\uff1a\u5347\u7ea7\u6b65\u9aa4\u957f\uff0c\u5bf9\u670d\u52a1\u589e\u3001\u5220\u3001\u6539\u6216\u8ddf\u8e2a\u95ee\u9898\u65f6\uff0c\u4e0d\u591f\u7075\u6d3b\u4e14\u96be\u4ee5\u6392\u67e5\u95ee\u9898\u3002\u7ecf\u8fc7\u4e00\u756a\u8c03\u7814\u4e4b\u540e\uff0c\u6211\u4eec\u9009\u62e9\u4e86\u6700\u63a5\u8fd1\u9884\u671f\u3001\u57fa\u4e8e\u4e91\u539f\u751f\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff1aApache APISIX\uff0c\u501f\u52a9\u5176\u52a8\u6001\u3001\u9ad8\u6548\u3001\u7a33\u5b9a\u7b49\u7279\u6027\u4ee5\u6ee1\u8db3\u4e1a\u52a1\u7684\u5feb\u901f\u54cd\u5e94\u8981\u6c42\u3002")))}u.isMDXComponent=!0}}]);