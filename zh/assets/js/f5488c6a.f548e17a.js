"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3367],{35318:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var a=r(27378);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),c=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=c(r),h=n,b=s["".concat(o,".").concat(h)]||s[h]||m[h]||i;return r?a.createElement(b,l(l({ref:t},u),{},{components:r})):a.createElement(b,l({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=s;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,l[1]=p;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}s.displayName="MDXCreateElement"},42070:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var a=r(25773),n=(r(27378),r(35318));const i={title:"Apache APISIX 3.2.1 \u6b63\u5f0f\u53d1\u5e03",authors:[{name:"\u66fe\u5143\u8c6a",title:"Author",url:"https://github.com/leslie-tsang",image_url:"https://avatars.githubusercontent.com/u/59061168?v=4"},{name:"Yilia Lin",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","API \u7ba1\u7406\u5e73\u53f0","\u7248\u672c\u53d1\u5e03","\u65b0\u529f\u80fd"],description:"APISIX 3.2.1 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff0c\u4fee\u590d\u4e86\u8bf8\u591a bug\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002",tags:["Community"]},l=void 0,p={permalink:"/zh/blog/2023/06/01/release-apache-apisix-3.2.1",source:"@site/blog/2023/06/01/release-apache-apisix-3.2.1.md",title:"Apache APISIX 3.2.1 \u6b63\u5f0f\u53d1\u5e03",description:"APISIX 3.2.1 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff0c\u4fee\u590d\u4e86\u8bf8\u591a bug\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002",date:"2023-06-01T00:00:00.000Z",formattedDate:"2023\u5e746\u67081\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:.805,truncated:!0,authors:[{name:"\u66fe\u5143\u8c6a",title:"Author",url:"https://github.com/leslie-tsang",image_url:"https://avatars.githubusercontent.com/u/59061168?v=4",imageURL:"https://avatars.githubusercontent.com/u/59061168?v=4"},{name:"Yilia Lin",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (5.23 - 6.05)",permalink:"/zh/blog/2023/06/08/weekly-report"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (5.08 - 5.22)",permalink:"/zh/blog/2023/05/24/weekly-report-0524"}},o={authorsImageUrls:[void 0,void 0]},c=[{value:"bugfix",id:"bugfix",children:[],level:2}],u={toc:c};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"APISIX 3.2.1 \u7248\u672c\u6b63\u5f0f\u53d1\u5e03\uff0c\u4fee\u590d\u4e86\u8bf8\u591a bug\uff0c\u63d0\u5347\u7528\u6237\u4f53\u9a8c\u3002")),(0,n.kt)("h2",{id:"bugfix"},"bugfix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d ",(0,n.kt)("inlineCode",{parentName:"p"},"core.request.add_header")," \u4e2d\u7684\u65e0\u6548\u7f13\u5b58\u95ee\u9898 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8824"},"#8824")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u63d0\u4f9b\u65b0\u7684\u5b9e\u73b0\uff0c\u907f\u514d\u4e86 nginx \u5185\u7f6e header \u53d8\u91cf\u7f13\u5b58\u672a\u88ab\u5237\u65b0\u7684\u95ee\u9898"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d etcd \u6570\u636e\u540c\u6b65\u5f02\u5e38\u95ee\u9898 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/8493"},"#8493"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d\u7531 healthcheck \u5f15\u8d77\u7684\u9ad8 CPU \u548c\u5185\u5b58\u4f7f\u7528\u95ee\u9898 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9016"},"#9016")),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u4fee\u590d APISIX \u5728 ",(0,n.kt)("inlineCode",{parentName:"p"},"cancel_clean_handler")," \u5931\u8d25\u540e\uff0ccreate_checker \u4e2d ",(0,n.kt)("inlineCode",{parentName:"p"},"healthcheck.new")," \u521b\u5efa\u7684 healthchecker \u6cc4\u6f0f\u95ee\u9898"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u9632\u6b62\u975e ",(0,n.kt)("inlineCode",{parentName:"p"},"127.0.0.0/24")," \u7684\u8bf7\u6c42\u7528\u7a7a\u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"admin_key")," \u8bbf\u95ee Admin API ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9146"},"#9146"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u4fee\u590d batch-requests \u4e0d\u8bfb\u53d6 trailer headers \u7684\u60c5\u51b5 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/pull/9289"},"#9289")))),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u5bf9\u5b8c\u6574\u7684\u5185\u5bb9\u611f\u5174\u8da3\uff0c\u8bf7\u53c2\u8003 3.2.1 \u53d1\u5e03\u7684 ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/release/3.2/docs/zh/latest/CHANGELOG.md#321"},"CHANGELOG"),"\u3002"))}m.isMDXComponent=!0}}]);