"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1622],{35318:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>m});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),u=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),g=u(r),m=a,h=g["".concat(c,".").concat(m)]||g[m]||p[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},8956:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(25773),a=(r(27378),r(35318));const o={title:"APISIX integrate with Kafka for real-time log monitoring",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Apache Kafka","Kafka","logging","monitoring"],description:"This article describes how to use the kafka-logger plugin with APISIX. Wiht enhancements, the plugin now has mature and complete functions.",tags:["Ecosystem","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/kafka.png"},i=void 0,l={permalink:"/blog/2022/01/17/apisix-kafka-integration",source:"@site/blog/2022/01/17/apisix-kafka-integration.md",title:"APISIX integrate with Kafka for real-time log monitoring",description:"This article describes how to use the kafka-logger plugin with APISIX. Wiht enhancements, the plugin now has mature and complete functions.",date:"2022-01-17T00:00:00.000Z",formattedDate:"January 17, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:4.45,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Biweekly Report (Jan 1 - Jan 16)",permalink:"/blog/2022/01/19/weekly-report-0116"},nextItem:{title:"Makes Convenienter to Proxy Dubbo in Apache APISIX",permalink:"/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix"}},c={authorsImageUrls:[void 0,void 0]},u=[],s={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article describes how to use the kafka-logger plugin with APISIX. Wiht enhancements, the plugin now has mature and complete functions.")))}p.isMDXComponent=!0}}]);