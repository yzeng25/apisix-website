"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1829],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(r),m=o,f=g["".concat(l,".").concat(m)]||g[m]||u[m]||s;return r?n.createElement(f,a(a({ref:t},p),{},{components:r})):n.createElement(f,a({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var s=r.length,a=new Array(s);a[0]=g;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var c=2;c<s;c++)a[c]=r[c];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},93829:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const s={title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Ingress NGINX \u66f4\u597d\u7684\u9009\u62e9\uff1f",authors:[{name:"\u5bb9\u946b",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://github.com/AlinsRan.png"}],keywords:["Apache APISIX","Ingress","Ingress Controller","Ingress nginx","Kubernetes"],description:"\u672c\u6587\u5c06\u4f1a\u5bf9\u6bd4\u4e24\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684 Ingress controller \u5b9e\u73b0\uff0c\u5e0c\u671b\u80fd\u5bf9\u8bfb\u8005\u8fdb\u884c Ingress controller \u9009\u578b\u4e2d\u6709\u6240\u5e2e\u52a9\u3002",tags:["Ecosystem"]},a=void 0,i={permalink:"/zh/blog/2023/01/11/apisix-ingress-vs-ingress-nginx",source:"@site/blog/2023/01/11/apisix-ingress-vs-ingress-nginx.md",title:"\u4e3a\u4ec0\u4e48 APISIX Ingress \u662f\u6bd4 Ingress NGINX \u66f4\u597d\u7684\u9009\u62e9\uff1f",description:"\u672c\u6587\u5c06\u4f1a\u5bf9\u6bd4\u4e24\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684 Ingress controller \u5b9e\u73b0\uff0c\u5e0c\u671b\u80fd\u5bf9\u8bfb\u8005\u8fdb\u884c Ingress controller \u9009\u578b\u4e2d\u6709\u6240\u5e2e\u52a9\u3002",date:"2023-01-11T00:00:00.000Z",formattedDate:"2023\u5e741\u670811\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:17.12,truncated:!0,authors:[{name:"\u5bb9\u946b",title:"Author",url:"https://github.com/AlinsRan",image_url:"https://github.com/AlinsRan.png",imageURL:"https://github.com/AlinsRan.png"}],prevItem:{title:"\u57fa\u4e8e APISIX \u7684\u670d\u52a1\u7f51\u683c\u65b9\u6848 Amesh \u79ef\u6781\u5f00\u53d1\u4e2d\uff01",permalink:"/zh/blog/2023/01/11/apisix-amesh-introduction"},nextItem:{title:"Apache APISIX Ingress 1.6 \u6b63\u5f0f\u53d1\u5e03",permalink:"/zh/blog/2023/01/10/release-apisix-ingress-1.6"}},l={authorsImageUrls:[void 0]},c=[],p={toc:c};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u5c06\u4f1a\u5bf9\u6bd4\u4e24\u4e2a\u6bd4\u8f83\u6d41\u884c\u7684 Ingress controller \u5b9e\u73b0\uff0c\u5e0c\u671b\u80fd\u5bf9\u8bfb\u8005\u8fdb\u884c Ingress controller \u9009\u578b\u4e2d\u6709\u6240\u5e2e\u52a9\u3002")))}u.isMDXComponent=!0}}]);