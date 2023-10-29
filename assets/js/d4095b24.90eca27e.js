"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8218],{35318:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),h=s(n),m=a,d=h["".concat(u,".").concat(m)]||h[m]||p[m]||o;return n?r.createElement(d,i(i({ref:t},l),{},{components:n})):r.createElement(d,i({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},67650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var r=n(25773),a=(n(27378),n(35318));const o={title:"Centralized Authentication with Apache APISIX and Advanced Tricks",author:"Xinxin Zhu",authorURL:"https://github.com/starsz",authorImageURL:"https://avatars.githubusercontent.com/u/25628854?v=4",keywords:["APISIX","Casbin","Authorization","Practical Case"],description:"This article introduces the authentication function of the cloud native API gateway Apache APISIX, and introduces the importance and usage in detail.",tags:["Authentication","Ecosystem"]},i=void 0,c={permalink:"/blog/2021/09/07/how-to-use-apisix-auth",source:"@site/blog/2021/09/07/how-to-use-apisix-auth.md",title:"Centralized Authentication with Apache APISIX and Advanced Tricks",description:"This article introduces the authentication function of the cloud native API gateway Apache APISIX, and introduces the importance and usage in detail.",date:"2021-09-07T00:00:00.000Z",formattedDate:"September 7, 2021",tags:[{label:"Authentication",permalink:"/blog/tags/authentication"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.94,truncated:!0,authors:[{name:"Xinxin Zhu",url:"https://github.com/starsz",imageURL:"https://avatars.githubusercontent.com/u/25628854?v=4"}],prevItem:{title:"How can I contribute to an open source project without writing code?",permalink:"/blog/2021/09/09/how-to-contribute-to-an-openSource-without-coding"},nextItem:{title:"iQIYI API Gateway Update and Practice with Apache APISIX",permalink:"/blog/2021/09/07/iqiyi-usercase"}},u={authorsImageUrls:[void 0]},s=[],l={toc:s};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describes the authentication features of Apache APISIX, in terms of importance and usage.")))}p.isMDXComponent=!0}}]);