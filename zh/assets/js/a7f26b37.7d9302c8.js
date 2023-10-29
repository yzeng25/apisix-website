"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5676],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),l=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=l(r),f=a,h=m["".concat(i,".").concat(f)]||m[f]||s[f]||o;return r?n.createElement(h,c(c({ref:t},u),{},{components:r})):n.createElement(h,c({ref:t},u))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,c=new Array(o);c[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,c[1]=p;for(var l=2;l<o;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},53830:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>s,frontMatter:()=>o,metadata:()=>p,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX 2.7.0 \u6b63\u5f0f\u53d1\u5e03",author:"\u7f57\u6cfd\u8f69",authorURL:"https://github.com/spacewander",authorImageURL:"https://avatars.githubusercontent.com/u/4161644?v=4",keywords:["Apache APISIX","Release Notes"],Description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX 2.7.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u8be5\u7248\u672c\u652f\u6301\u4e86\u591a\u8bed\u8a00\u63d2\u4ef6\u3001\u589e\u5f3a\u4e86\u56db\u5c42 TCP \u4ee3\u7406\u4ee5\u53ca NGINX \u529f\u80fd\u3002",tags:["Community"]},c=void 0,p={permalink:"/zh/blog/2021/06/29/release-apache-apisix-2.7",source:"@site/blog/2021/06/29/release-apache-apisix-2.7.md",title:"Apache APISIX 2.7.0 \u6b63\u5f0f\u53d1\u5e03",description:"Apache APISIX 2.7.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002",date:"2021-06-29T00:00:00.000Z",formattedDate:"2021\u5e746\u670829\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:2.13,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",url:"https://github.com/spacewander",imageURL:"https://avatars.githubusercontent.com/u/4161644?v=4"}],prevItem:{title:"\u5dee\u4e4b\u6beb\u5398\uff1aetcd 3 \u5b8c\u7f8e\u652f\u6301 HTTP \u8bbf\u95ee\uff1f",permalink:"/zh/blog/2021/06/30/etcd3-support-http-access-perfectly"},nextItem:{title:"\u6709\u4e86 NGINX \u548c Kong\uff0c\u4e3a\u4ec0\u4e48\u8fd8\u9700\u8981 Apache APISIX",permalink:"/zh/blog/2021/06/28/why-we-need-apache-apisix"}},i={authorsImageUrls:[void 0]},l=[],u={toc:l};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX 2.7.0 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff01\u6b22\u8fce\u5927\u5bb6\u4e0b\u8f7d\u4f7f\u7528\u3002")))}s.isMDXComponent=!0}}]);