"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4084],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),h=n,f=m["".concat(c,".").concat(h)]||m[h]||u[h]||i;return r?a.createElement(f,o(o({ref:t},p),{},{components:r})):a.createElement(f,o({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var s=2;s<i;s++)o[s]=r[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},29995:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var a=r(25773),n=(r(27378),r(35318));const i={title:"Implementation of canary release solution based on Apache APISIX",authors:[{name:"Shengwei Pan",title:"Author"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png"}],keywords:["Apache APISIX","API Gateway","Alibaba Cloud","Microservice","MSE","Traffic"],description:"This article describes how Alibaba Cloud's MSE based on APISIX's flexible route capabilities, with MSE to release new value from APISIX.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/12/12/63969c5eb411d.png"},o=void 0,l={permalink:"/blog/2022/06/14/how-mse-supports-canary-release-with-apache-apisix",source:"@site/blog/2022/06/14/how-mse-supports-canary-release-with-apache-apisix.md",title:"Implementation of canary release solution based on Apache APISIX",description:"This article describes how Alibaba Cloud's MSE based on APISIX's flexible route capabilities, with MSE to release new value from APISIX.",date:"2022-06-14T00:00:00.000Z",formattedDate:"June 14, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:10,truncated:!0,authors:[{name:"Shengwei Pan",title:"Author"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://github.com/hf400159.png",imageURL:"https://github.com/hf400159.png"}],prevItem:{title:"Practice of localized application with API gateway in the Middle East",permalink:"/blog/2022/06/14/beeto-with-apache-apisix"},nextItem:{title:"Architecture evolution of investment platforms with API gateway",permalink:"/blog/2022/06/14/xueqiu-with-apache-apisix"}},c={authorsImageUrls:[void 0,void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article describes how Alibaba Cloud's microservice engine MSE is based on the flexible routing capabilities of Apache APISIX, cooperates with MSE's full-link grayscale capabilities, and achieves full-link grayscale through minimal configuration and code-free intrusion.")))}u.isMDXComponent=!0}}]);