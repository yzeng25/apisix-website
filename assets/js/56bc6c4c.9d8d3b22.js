"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9305],{35318:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),g=u(r),m=o,f=g["".concat(c,".").concat(m)]||g[m]||p[m]||a;return r?n.createElement(f,i(i({ref:t},l),{},{components:r})):n.createElement(f,i({ref:t},l))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},32624:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>u});var n=r(25773),o=(r(27378),r(35318));const a={title:"Fault Injection Testing with API Gateway",authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607"}],keywords:["API gateway","Apache APISIX","Testing","Fault Injection","Microservices"],description:"The blog post describes how Apache APISIX is useful for testing the robustness and resilience of microservices APIs. Throughout the post, we also get to know the types of possible failure injections with the Fault Injection Plugin.",tags:["Plugins"],image:"https://static.apiseven.com/2022/10/20/6350b3f63a715.png"},i=void 0,s={permalink:"/blog/2022/08/28/fault-injection-testing-with-api-gateway",source:"@site/blog/2022/08/28/fault-injection-testing-with-api-gateway.md",title:"Fault Injection Testing with API Gateway",description:"The blog post describes how Apache APISIX is useful for testing the robustness and resilience of microservices APIs. Throughout the post, we also get to know the types of possible failure injections with the Fault Injection Plugin.",date:"2022-08-28T00:00:00.000Z",formattedDate:"August 28, 2022",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:7.285,truncated:!0,authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607",imageURL:"https://avatars.githubusercontent.com/u/14247607"}],prevItem:{title:"API monetization using an API Management and a billing provider",permalink:"/blog/2022/09/08/api-monetization-using-stack"},nextItem:{title:"Backend-for-Frontend: the demo",permalink:"/blog/2022/08/17/backend-for-frontend-demo"}},c={authorsImageUrls:[void 0]},u=[],l={toc:u};function p(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\ud83d\udc81 This blog post describes how an ",(0,o.kt)("strong",{parentName:"p"},"API Gateway")," like ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is useful for testing the robustness and resilience of microservices APIs.")))}p.isMDXComponent=!0}}]);