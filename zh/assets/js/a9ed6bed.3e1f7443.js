"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[2200],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=p(r),h=a,g=m["".concat(l,".").concat(h)]||m[h]||s[h]||o;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},11566:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var n=r(25773),a=(r(27378),r(35318));const o={title:"Apache APISIX 3.2.0 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png"},{name:"Yilialinn",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["Apache APISIX","LTS"],description:"APISIX 3.2.0 \u662f 3.0 \u5927\u7248\u672c\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2a LTS \u7248\u672c\u3002\u6b64\u6b21\u53d1\u7248\uff0c\u662f 3.x \u65f6\u4ee3\u66f4\u66ff 2.x \u65f6\u4ee3\u7684\u4e00\u5927\u91cc\u7a0b\u7891\u3002\u4ece\u6b64\u4e4b\u540e\uff0c\u65b0\u7684\u4e00\u7cfb\u5217 patch \u7248\u672c\u5c06\u4f1a\u5728 3.2 \u7684\u57fa\u7840\u4e0a\u53d1\u5e03\u3002\u672c\u6b21\u53d1\u5e03\u4e00\u5982\u5f80\u5e38\u4e00\u6837\u5e26\u6765\u4e86\u8bb8\u591a\u65b0\u7684\u63d2\u4ef6\u548c\u7279\u6027\uff0c\u4e3a APISIX \u7684\u4f7f\u7528\u8005\u5e26\u6765\u4e0d\u4e00\u6837\u7684\u65b0\u73a9\u6cd5\u3002",tags:["Community"]},i=void 0,c={permalink:"/zh/blog/2023/03/09/release-apache-apisix-3.2.0",source:"@site/blog/2023/03/09/release-apache-apisix-3.2.0.md",title:"Apache APISIX 3.2.0 \u6b63\u5f0f\u53d1\u5e03",description:"APISIX 3.2.0 \u662f 3.0 \u5927\u7248\u672c\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2a LTS \u7248\u672c\u3002\u6b64\u6b21\u53d1\u7248\uff0c\u662f 3.x \u65f6\u4ee3\u66f4\u66ff 2.x \u65f6\u4ee3\u7684\u4e00\u5927\u91cc\u7a0b\u7891\u3002\u4ece\u6b64\u4e4b\u540e\uff0c\u65b0\u7684\u4e00\u7cfb\u5217 patch \u7248\u672c\u5c06\u4f1a\u5728 3.2 \u7684\u57fa\u7840\u4e0a\u53d1\u5e03\u3002\u672c\u6b21\u53d1\u5e03\u4e00\u5982\u5f80\u5e38\u4e00\u6837\u5e26\u6765\u4e86\u8bb8\u591a\u65b0\u7684\u63d2\u4ef6\u548c\u7279\u6027\uff0c\u4e3a APISIX \u7684\u4f7f\u7528\u8005\u5e26\u6765\u4e0d\u4e00\u6837\u7684\u65b0\u73a9\u6cd5\u3002",date:"2023-03-09T00:00:00.000Z",formattedDate:"2023\u5e743\u67089\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:5.725,truncated:!0,authors:[{name:"\u7f57\u6cfd\u8f69",title:"Author",url:"https://github.com/spacewander",image_url:"https://github.com/spacewander.png",imageURL:"https://github.com/spacewander.png"},{name:"Yilialinn",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (2.27 - 3.12)",permalink:"/zh/blog/2023/03/16/weekly-report-0316"},nextItem:{title:"\u5fae\u670d\u52a1\u4e3a\u4ec0\u4e48\u8981\u7528\u5230 API \u7f51\u5173\uff1f",permalink:"/zh/blog/2023/03/08/why-do-microservices-need-an-api-gateway"}},l={authorsImageUrls:[void 0,void 0]},p=[],u={toc:p};function s(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"APISIX 3.2.0 \u662f 3.0 \u5927\u7248\u672c\u4ee5\u6765\u7684\u7b2c\u4e00\u4e2a LTS \u7248\u672c\u3002\u6b64\u6b21\u53d1\u7248\uff0c\u662f 3.x \u65f6\u4ee3\u66f4\u66ff 2.x \u65f6\u4ee3\u7684\u4e00\u5927\u91cc\u7a0b\u7891\u3002\u4ece\u6b64\u4e4b\u540e\uff0c\u65b0\u7684\u4e00\u7cfb\u5217 patch \u7248\u672c\u5c06\u4f1a\u5728 3.2 \u7684\u57fa\u7840\u4e0a\u53d1\u5e03\u3002\u672c\u6b21\u53d1\u5e03\u4e00\u5982\u5f80\u5e38\u4e00\u6837\u5e26\u6765\u4e86\u8bb8\u591a\u65b0\u7684\u63d2\u4ef6\u548c\u7279\u6027\uff0c\u4e3a APISIX \u7684\u4f7f\u7528\u8005\u5e26\u6765\u4e0d\u4e00\u6837\u7684\u65b0\u73a9\u6cd5\u3002")))}s.isMDXComponent=!0}}]);