"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[94962],{3905:(t,e,n)=>{n.d(e,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var u=a.createContext({}),o=function(t){var e=a.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=o(t.components);return a.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,u=t.parentName,d=p(t,["components","mdxType","originalType","parentName"]),k=o(n),m=r,c=k["".concat(u,".").concat(m)]||k[m]||s[m]||l;return n?a.createElement(c,i(i({ref:e},d),{},{components:n})):a.createElement(c,i({ref:e},d))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},57150:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"api-breaker"},i=void 0,p={unversionedId:"plugins/api-breaker",id:"version-2.15/plugins/api-breaker",isDocsHomePage:!1,title:"api-breaker",description:"\u8be5\u63d2\u4ef6\u5b9e\u73b0 API \u7194\u65ad\u529f\u80fd\uff0c\u5e2e\u52a9\u6211\u4eec\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.15/plugins/api-breaker.md",sourceDirName:"plugins",slug:"/plugins/api-breaker",permalink:"/zh/docs/apisix/2.15/plugins/api-breaker",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.15/docs/zh/latest/plugins/api-breaker.md",tags:[],version:"2.15",frontMatter:{title:"api-breaker"},sidebar:"version-2.15/docs",previous:{title:"proxy-mirror",permalink:"/zh/docs/apisix/2.15/plugins/proxy-mirror"},next:{title:"traffic-split",permalink:"/zh/docs/apisix/2.15/plugins/traffic-split"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u65b9\u5f0f",id:"\u542f\u7528\u65b9\u5f0f",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:u};function d(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u5b9e\u73b0 API \u7194\u65ad\u529f\u80fd\uff0c\u5e2e\u52a9\u6211\u4eec\u4fdd\u62a4\u4e0a\u6e38\u4e1a\u52a1\u670d\u52a1\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5173\u4e8e\u7194\u65ad\u8d85\u65f6\u903b\u8f91")),(0,r.kt)("p",null,"\u7531\u4ee3\u7801\u903b\u8f91\u81ea\u52a8\u6309",(0,r.kt)("strong",{parentName:"p"},"\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001"),"\u7684\u6b21\u6570\u9012\u589e\u8fd0\u7b97\uff1a"),(0,r.kt)("p",null,"\u6bcf\u5f53\u4e0a\u6e38\u670d\u52a1\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u6bd4\u5982\uff1a500\uff09\uff0c\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u6b21\u65f6 (\u6bd4\u5982\uff1a3 \u6b21)\uff0c\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u5904\u4e8e\u4e0d\u5065\u5eb7\u72b6\u6001\u3002"),(0,r.kt)("p",null,"\u7b2c\u4e00\u6b21\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7194\u65ad 2 \u79d2"),"\u3002"),(0,r.kt)("p",null,"\u7136\u540e\uff0c2 \u79d2\u8fc7\u540e\u91cd\u65b0\u5f00\u59cb\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\uff0c\u5982\u679c\u7ee7\u7eed\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.http_statuses")," \u72b6\u6001\u7801\uff0c\u8bb0\u6570\u518d\u6b21\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"unhealthy.failures")," \u6b21\u65f6\uff0c",(0,r.kt)("strong",{parentName:"p"},"\u7194\u65ad 4 \u79d2"),"\uff08\u500d\u6570\u65b9\u5f0f\uff09\u3002"),(0,r.kt)("p",null,"\u4f9d\u6b21\u7c7b\u63a8\uff0c2, 4, 8, 16, 32, 64, ..., 256\uff0c\u6700\u5927\u5230 300\u3002 300 \u662f ",(0,r.kt)("inlineCode",{parentName:"p"},"max_breaker_sec")," \u7684\u6700\u5927\u503c\uff0c\u5141\u8bb8\u81ea\u5b9a\u4e49\u4fee\u6539\u3002"),(0,r.kt)("p",null,"\u5728\u4e0d\u5065\u5eb7\u72b6\u6001\u65f6\uff0c\u5f53\u8f6c\u53d1\u8bf7\u6c42\u5230\u4e0a\u6e38\u670d\u52a1\u5e76\u8fd4\u56de ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy.http_statuses")," \u914d\u7f6e\u4e2d\u7684\u72b6\u6001\u7801\uff08\u6bd4\u5982\uff1a200\uff09\uff0c\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"healthy.successes")," \u6b21\u65f6 (\u6bd4\u5982\uff1a3 \u6b21)\uff0c\u8ba4\u4e3a\u4e0a\u6e38\u670d\u52a1\u6062\u590d\u5065\u5eb7\u72b6\u6001\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_code"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ..., 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u9519\u8bef\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u62a5\u6587")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"break_response_headers"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"\u65e0"),(0,r.kt)("td",{parentName:"tr",align:null},'[{"key":"header_name","value":"can contain Nginx $var"}]'),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u8fd4\u56de\u62a5\u6587\u5934\uff0c\u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u3002\u8be5\u5b57\u6bb5\u4ec5\u5728 ",(0,r.kt)("inlineCode",{parentName:"td"},"break_response_body")," \u88ab\u914d\u7f6e\u65f6\u751f\u6548\u3002\u8fd9\u4e2a\u503c\u80fd\u591f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$var")," \u7684\u683c\u5f0f\u5305\u542b APISIX \u53d8\u91cf\uff0c\u6bd4\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},'{"key":"X-Client-Addr","value":"$remote_addr:$remote_port"}'),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"max_breaker_sec"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"300"),(0,r.kt)("td",{parentName:"tr",align:null},">=3"),(0,r.kt)("td",{parentName:"tr",align:null},"\u6700\u5927\u7194\u65ad\u6301\u7eed\u65f6\u95f4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unhealthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"{500}"),(0,r.kt)("td",{parentName:"tr",align:null},"[500, ..., 599]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u4e0d\u5065\u5eb7\u65f6\u5019\u7684\u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"unhealthy.failures"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},">=1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u89e6\u53d1\u4e0d\u5065\u5eb7\u72b6\u6001\u7684\u5f02\u5e38\u8bf7\u6c42\u6b21\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthy.http_statuses"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[integer]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"{200}"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ..., 499]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5065\u5eb7\u65f6\u5019\u7684\u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"healthy.successes"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"3"),(0,r.kt)("td",{parentName:"tr",align:null},">=1"),(0,r.kt)("td",{parentName:"tr",align:null},"\u89e6\u53d1\u5065\u5eb7\u72b6\u6001\u7684\u8fde\u7eed\u6b63\u5e38\u8bf7\u6c42\u6b21\u6570")))),(0,r.kt)("h2",{id:"\u542f\u7528\u65b9\u5f0f"},"\u542f\u7528\u65b9\u5f0f"),(0,r.kt)("p",null,"\u8fd9\u662f\u4e00\u4e2a\u793a\u4f8b\uff0c\u5728\u6307\u5b9a\u7684\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u3002\n\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u5e94\u7b54 500 \u6216 503 \u8fbe\u5230 3 \u6b21\uff0c\u89e6\u53d1\u7194\u65ad\u3002\u5e94\u7b54 200 \u8fde\u7eed 1 \u6b21\uff0c\u6062\u590d\u5065\u5eb7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "api-breaker": {\n            "break_response_code": 502,\n            "unhealthy": {\n                "http_statuses": [500, 503],\n                "failures": 3\n            },\n            "healthy": {\n                "http_statuses": [200],\n                "successes": 1\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0a\u6e38\u7684\u914d\u7f6e\uff0c\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u5982\u679c\u4f60\u7684\u4e0a\u6d41\u670d\u52a1\u8fd4\u56de 500 \u8fbe\u5230 3 \u6b21\u3002\u5ba2\u6237\u7aef\u5c06\u4f1a\u6536\u5230 502\uff08break_response_code\uff09\u5e94\u7b54\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -i "http://127.0.0.1:9080/hello"\nHTTP/1.1 502 Bad Gateway\nContent-Type: application/octet-stream\nConnection: keep-alive\nServer: APISIX/1.5\n\n... ...\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u60f3\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u65f6\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u53ea\u9700\u8981\u5728\u63d2\u4ef6\u914d\u7f6e\u4e2d\u5220\u9664\u76f8\u5e94\u7684 json \u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff0c\u5373\u53ef\u7acb\u5373\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"api-breaker")," \u63d2\u4ef6\u73b0\u5728\u5df2\u88ab\u7981\u7528\uff0c\u5b83\u4e5f\u9002\u7528\u4e8e\u5176\u4ed6\u63d2\u4ef6\u3002"))}d.isMDXComponent=!0}}]);