"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8382],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>b});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),b=o,g=m["".concat(l,".").concat(b)]||m[b]||p[b]||a;return r?n.createElement(g,i(i({ref:t},u),{},{components:r})):n.createElement(g,i({ref:t},u))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},59011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var n=r(25773),o=(r(27378),r(35318));const a={title:"Rewriting the Apache APISIX response-rewrite plugin in Rust",authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258"}],keywords:["API gateway","Apache APISIX","Rust","WebAssembly"],description:"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.",tags:["Plugins"],image:"https://static.apiseven.com/2022/10/28/635b5378cdd1f.png"},i=void 0,s={permalink:"/blog/2022/10/05/rust-apisix",source:"@site/blog/2022/10/05/rust-apisix.md",title:"Rewriting the Apache APISIX response-rewrite plugin in Rust",description:"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.",date:"2022-10-05T00:00:00.000Z",formattedDate:"October 5, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:7.13,truncated:!0,authors:[{name:"Nicolas Fr\xe4nkel",title:"Author",url:"https://github.com/nfrankel",image_url:"https://avatars.githubusercontent.com/u/752258",imageURL:"https://avatars.githubusercontent.com/u/752258"}],prevItem:{title:"Deploy and Run Apache APISIX on Scaleway Cloud",permalink:"/blog/2022/10/19/deploy-apisix-on-scaleway-cloud"},nextItem:{title:"Apache APISIX loves Rust!",permalink:"/blog/2022/09/28/rust-loves-apisix"}},l={authorsImageUrls:[void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes how to redevelop the response-rewrite plugin using Rust and WebAssembly.")))}p.isMDXComponent=!0}}]);