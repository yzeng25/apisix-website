"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4307],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(27378);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),g=s(r),m=o,h=g["".concat(l,".").concat(m)]||g[m]||u[m]||a;return r?n.createElement(h,i(i({ref:t},p),{},{components:r})):n.createElement(h,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=g;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},73460:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>c,toc:()=>s});var n=r(25773),o=(r(27378),r(35318));const a={title:"API \u7f51\u5173\u96c6\u6210 ClickHouse \u63d2\u4ef6\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387",authors:[{name:"\u7941\u632f\u4e1c",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png"}],keywords:["Apache APISIX","API \u7f51\u5173","ClickHouse","\u65e5\u5fd7","Ecosystem"],description:"\u672c\u6587\u8bb2\u8ff0\u4e86\u793e\u533a\u8d21\u732e\u8005\u7941\u632f\u4e1c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8d21\u732e `clickhouse-logger` \u7684\u5386\u7a0b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8be5\u63d2\u4ef6\u7b80\u5316\u4e1a\u52a1\u67b6\u6784\uff0c\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387\u3002",tags:["Plugins","Ecosystem"]},i=void 0,c={permalink:"/zh/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier",source:"@site/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier.md",title:"API \u7f51\u5173\u96c6\u6210 ClickHouse \u63d2\u4ef6\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387",description:"\u672c\u6587\u8bb2\u8ff0\u4e86\u793e\u533a\u8d21\u732e\u8005\u7941\u632f\u4e1c\u4e3a\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8d21\u732e `clickhouse-logger` \u7684\u5386\u7a0b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8be5\u63d2\u4ef6\u7b80\u5316\u4e1a\u52a1\u67b6\u6784\uff0c\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387\u3002",date:"2022-03-04T00:00:00.000Z",formattedDate:"2022\u5e743\u67084\u65e5",tags:[{label:"Plugins",permalink:"/zh/blog/tags/plugins"},{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:9.425,truncated:!0,authors:[{name:"\u7941\u632f\u4e1c",title:"Author",url:"https://github.com/zhendongcmss",image_url:"https://github.com/zhendongcmss.png",imageURL:"https://github.com/zhendongcmss.png"},{name:"\u66fe\u5955\u9716",title:"Technical Writer",url:"https://github.com/yzeng25",image_url:"https://github.com/yzeng25.png",imageURL:"https://github.com/yzeng25.png"}],prevItem:{title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0",permalink:"/zh/blog/2022/03/05/apisix-integration-eureka-service-discovery"},nextItem:{title:"API \u7f51\u5173 APISIX \u643a\u624b CoreDNS \u6253\u5f00\u670d\u52a1\u53d1\u73b0\u65b0\u5927\u95e8",permalink:"/zh/blog/2022/03/04/apisix-uses-coredns-enable-service-discovery"}},l={authorsImageUrls:[void 0,void 0]},s=[],p={toc:s};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4f5c\u8005\u7941\u632f\u4e1c\uff0c\u6765\u81ea\u4e2d\u56fd\u79fb\u52a8\u4e91\u80fd\u529b\u4e2d\u5fc3\u3002\u4ece\u4e8b\u5206\u5e03\u5f0f\u5bf9\u8c61\u5b58\u50a8\u8f6f\u4ef6\u5f00\u53d1\u5de5\u4f5c\uff0c\u53c2\u4e0e\u79fb\u52a8\u4e91\u591a\u4e2a\u8d44\u6e90\u6c60\u7684\u5efa\u8bbe\u5de5\u4f5c\uff0c\u5728\u5bf9\u8c61\u5b58\u50a8\u9886\u57df\u6709\u4e30\u5bcc\u7684\u5b9e\u6218\u7ecf\u9a8c\u3002\u672c\u6587\u8bb2\u8ff0\u4e86\u793e\u533a\u8d21\u732e\u8005\u7941\u632f\u4e1c\u4e3a Apache APISIX \u8d21\u732e ",(0,o.kt)("inlineCode",{parentName:"p"},"clickhouse-logger")," \u7684\u5386\u7a0b\uff0c\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8be5\u63d2\u4ef6\u7b80\u5316\u4e1a\u52a1\u67b6\u6784\uff0c\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387\u3002")))}u.isMDXComponent=!0}}]);