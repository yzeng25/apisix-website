"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[445],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),m=l(r),f=o,y=m["".concat(p,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(y,i(i({ref:t},s),{},{components:r})):n.createElement(y,i({ref:t},s))}));function f(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},21093:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>l});var n=r(25773),o=(r(27378),r(35318));const a={title:"Release Apache APISIX 2.8.0",author:"Ruofei Zhao",authorURL:"https://github.com/Serendipity96",authorImageURL:"https://avatars.githubusercontent.com/u/23514812?v=4",keywords:["APISIX","Release Notes","API Gateway","Apache APISIX"],description:"API Gateway Apache APISIX 2.8 version released independent keepalive connection pool, stream proxy enhancement, support for custom balancer and other functions.",tags:["Community"]},i=void 0,c={permalink:"/blog/2021/07/28/release-apache-apisix-2.8",source:"@site/blog/2021/07/28/release-apache-apisix-2.8.md",title:"Release Apache APISIX 2.8.0",description:"API Gateway Apache APISIX 2.8 version released independent keepalive connection pool, stream proxy enhancement, support for custom balancer and other functions.",date:"2021-07-28T00:00:00.000Z",formattedDate:"July 28, 2021",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:3.345,truncated:!0,authors:[{name:"Ruofei Zhao",url:"https://github.com/Serendipity96",imageURL:"https://avatars.githubusercontent.com/u/23514812?v=4"}],prevItem:{title:"Kong-To-APISIX Migration Tool",permalink:"/blog/2021/08/05/kong-to-apisix"},nextItem:{title:"Apply Plugin Orchestration in Apache APISIX",permalink:"/blog/2021/07/27/use-of-plugin-orchestration-in-apache-apisix"}},p={authorsImageUrls:[void 0]},l=[],s={toc:l};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Apache APISIX version 2.8 is released!")))}u.isMDXComponent=!0}}]);