"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6384],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var i=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,i)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,i,a=function(e,t){if(null==e)return{};var r,i,a={},n=Object.keys(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)r=n[i],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=i.createContext({}),l=function(e){var t=i.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=l(e.components);return i.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var r=e.components,a=e.mdxType,n=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=a,g=m["".concat(s,".").concat(h)]||m[h]||p[h]||n;return r?i.createElement(g,o(o({ref:t},u),{},{components:r})):i.createElement(g,o({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=r.length,o=new Array(n);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var l=2;l<n;l++)o[l]=r[l];return i.createElement.apply(null,o)}return i.createElement.apply(null,r)}m.displayName="MDXCreateElement"},6919:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>c,toc:()=>l});var i=r(25773),a=(r(27378),r(35318));const n={title:"Apache APISIX with CoreDNS enrich service discovery",authors:[{name:"Zijie Chen",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API Gateway","CoreDNS","Service Discovery","Service Register","Ecosystem"],description:"The cloud-native API Gateway Apache APISIX integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in APISIX.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/CoreDNS.png"},o=void 0,c={permalink:"/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery",source:"@site/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery.md",title:"Apache APISIX with CoreDNS enrich service discovery",description:"The cloud-native API Gateway Apache APISIX integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in APISIX.",date:"2022-03-04T00:00:00.000Z",formattedDate:"March 4, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:8.89,truncated:!0,authors:[{name:"Zijie Chen",title:"Author",url:"https://github.com/CP3cham",image_url:"https://avatars.githubusercontent.com/u/87352162?v=4",imageURL:"https://avatars.githubusercontent.com/u/87352162?v=4"},{name:"Fei Han",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"APISIX Integrates ClickHouse to Improve Log Efficiency",permalink:"/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier"},nextItem:{title:"How to Use Gitpod to Develop API Gateway?",permalink:"/blog/2022/03/03/develop-apisix-with-gitpod"}},s={authorsImageUrls:[void 0,void 0]},l=[],u={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,i.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX is a dynamic, real-time, high-performance cloud-native API gateway that provides rich traffic management functions such as load balancing, dynamic upstream, grayscale publishing, service interruption, identity authentication, and observability. As a cloud native API gateway, Apache APISIX also integrates multiple service discovery capabilities. This article will show you how to configure CoreDNS in Apache APISIX.")))}p.isMDXComponent=!0}}]);