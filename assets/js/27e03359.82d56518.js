"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9114],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>d});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=p(r),d=n,m=g["".concat(c,".").concat(d)]||g[d]||u[d]||o;return r?a.createElement(m,i(i({ref:t},s),{},{components:r})):a.createElement(m,i({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}g.displayName="MDXCreateElement"},24275:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var a=r(25773),n=(r(27378),r(35318));const o={title:"Cloud Monitoring with Datadog in Apache APISIX",author:"Bisakh Mondal",authorURL:"https://github.com/bisakhmondal",authorImageURL:"https://avatars.githubusercontent.com/u/41498427?v=4",keywords:["Apache APISIX","Datadog","Observability","Cloud Monitoring"],description:"This article introduces how the cloud-native API gateway Apache APISIX uses the datadog plugin to integrate with the Datadog monitoring platform.",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/Datadog.png"},i=void 0,l={permalink:"/blog/2021/11/12/apisix-datadog",source:"@site/blog/2021/11/12/apisix-datadog.md",title:"Cloud Monitoring with Datadog in Apache APISIX",description:"This article introduces how the cloud-native API gateway Apache APISIX uses the datadog plugin to integrate with the Datadog monitoring platform.",date:"2021-11-12T00:00:00.000Z",formattedDate:"November 12, 2021",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.685,truncated:!0,authors:[{name:"Bisakh Mondal",url:"https://github.com/bisakhmondal",imageURL:"https://avatars.githubusercontent.com/u/41498427?v=4"}],prevItem:{title:"Weekly Report (Sep 1 - Sep 14)",permalink:"/blog/2021/11/16/weekly-report-1114"},nextItem:{title:"The observability of Apache APISIX",permalink:"/blog/2021/11/04/skywalking"}},c={authorsImageUrls:[void 0]},p=[],s={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Apache APISIX recently released a new plugin: ",(0,n.kt)("a",{parentName:"p",href:"http://apisix.apache.org/docs/apisix/next/plugins/datadog"},"APISIX-Datadog"),", to provide a deeper integration with Datadog. This article introduces the APISIX-Datadog Plugin and its capabilities.")))}u.isMDXComponent=!0}}]);