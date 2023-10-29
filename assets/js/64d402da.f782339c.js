"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6708],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=o.createContext({}),c=function(e){var t=o.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),h=n,g=m["".concat(l,".").concat(h)]||m[h]||p[h]||a;return r?o.createElement(g,i(i({ref:t},u),{},{components:r})):o.createElement(g,i({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var c=2;c<a;c++)i[c]=r[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},43348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var o=r(25773),n=(r(27378),r(35318));const a={title:"Monitor APISIX Ingress Controller with Prometheus",authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API Gateway","APISIX Ingress Controller","Prometheus","Metrics","Grafana"],description:"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/ecosystem/prometheus.png"},i=void 0,s={permalink:"/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus",source:"@site/blog/2021/12/13/monitor-apisix-ingress-controller-with-prometheus.md",title:"Monitor APISIX Ingress Controller with Prometheus",description:"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.",date:"2021-12-13T00:00:00.000Z",formattedDate:"December 13, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.18,truncated:!0,authors:[{name:"Chao Zhang",title:"Author",url:"https://github.com/tokers",image_url:"https://avatars.githubusercontent.com/u/10428333?v=4",imageURL:"https://avatars.githubusercontent.com/u/10428333?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"How to Easily Deploy Apache APISIX in Kubernetes",permalink:"/blog/2021/12/15/deploy-apisix-in-kubernetes"},nextItem:{title:"API Gateway APISIX Integrates Keycloak for Authentication",permalink:"/blog/2021/12/10/integrate-keycloak-auth-in-apisix"}},l={authorsImageUrls:[void 0,void 0]},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article introduces the relevant steps of how to use Prometheus to monitor APISIX Ingress Controller and the display effect of some indicators.")))}p.isMDXComponent=!0}}]);