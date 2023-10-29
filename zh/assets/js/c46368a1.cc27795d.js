"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[42883],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>s});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),m=d(t),s=r,k=m["".concat(o,".").concat(s)]||m[s]||c[s]||l;return t?a.createElement(k,i(i({ref:n},u),{},{components:t})):a.createElement(k,i({ref:n},u))}));function s(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=m;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},77517:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"fault-injection",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Fault Injection","fault-injection"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `fault-injection` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"plugins/fault-injection",id:"version-3.3/plugins/fault-injection",isDocsHomePage:!1,title:"fault-injection",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `fault-injection` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.3/plugins/fault-injection.md",sourceDirName:"plugins",slug:"/plugins/fault-injection",permalink:"/zh/docs/apisix/3.3/plugins/fault-injection",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.3/docs/zh/latest/plugins/fault-injection.md",tags:[],version:"3.3",frontMatter:{title:"fault-injection",keywords:["Apache APISIX","API \u7f51\u5173","Plugin","Fault Injection","fault-injection"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `fault-injection` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.3/docs",previous:{title:"grpc-web",permalink:"/zh/docs/apisix/3.3/plugins/grpc-web"},next:{title:"mocking",permalink:"/zh/docs/apisix/3.3/plugins/mocking"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[{value:"\u6807\u51c6\u5339\u914d\u7684\u6545\u969c\u6ce8\u5165",id:"\u6807\u51c6\u5339\u914d\u7684\u6545\u969c\u6ce8\u5165",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],d={toc:o};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\u662f\u6545\u969c\u6ce8\u5165\u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u53ef\u4ee5\u548c\u5176\u4ed6\u63d2\u4ef6\u4e00\u8d77\u4f7f\u7528\uff0c\u5e76\u5728\u5176\u4ed6\u63d2\u4ef6\u6267\u884c\u524d\u88ab\u6267\u884c\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.http_status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"[200, ...]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684 HTTP \u72b6\u6001\u7801")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.body"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\u6570\u636e\u3002\u652f\u6301\u4f7f\u7528 NGINX \u53d8\u91cf\uff0c\u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"client addr: $remote_addr\\n"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.headers"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u7684\u54cd\u5e94\u5934\uff0c\u53ef\u4ee5\u5305\u542b NGINX \u53d8\u91cf\uff0c \u5982 ",(0,r.kt)("inlineCode",{parentName:"td"},"$remote_addr"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u88ab\u4e2d\u65ad\u7684\u8bf7\u6c42\u5360\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"abort.vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u6545\u969c\u6ce8\u5165\u7684\u89c4\u5219\uff0c\u5f53\u89c4\u5219\u5339\u914d\u901a\u8fc7\u540e\u624d\u4f1a\u6267\u884c\u6545\u969c\u6ce8\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"vars")," \u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u7684\u5217\u8868\uff0c\u6765\u81ea ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.duration"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ef6\u8fdf\u65f6\u95f4\uff0c\u53ef\u4ee5\u6307\u5b9a\u5c0f\u6570")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.percentage"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"[0, 100]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5c06\u88ab\u5ef6\u8fdf\u7684\u8bf7\u6c42\u5360\u6bd4")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay.vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array[]"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6267\u884c\u8bf7\u6c42\u5ef6\u8fdf\u7684\u89c4\u5219\uff0c\u5f53\u89c4\u5219\u5339\u914d\u901a\u8fc7\u540e\u624d\u4f1a\u5ef6\u8fdf\u8bf7\u6c42\u3002",(0,r.kt)("inlineCode",{parentName:"td"},"vars")," \u662f\u4e00\u4e2a\u8868\u8fbe\u5f0f\u5217\u8868\uff0c\u6765\u81ea ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),"\u3002")))),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"IMPORTANT")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u5c5e\u6027\u5c06\u76f4\u63a5\u8fd4\u56de\u7ed9\u5ba2\u6237\u7aef\u6307\u5b9a\u7684\u54cd\u5e94\u7801\u5e76\u4e14\u7ec8\u6b62\u5176\u4ed6\u63d2\u4ef6\u7684\u6267\u884c\u3002"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u5c5e\u6027\u5c06\u5ef6\u8fdf\u67d0\u4e2a\u8bf7\u6c42\uff0c\u5e76\u4e14\u8fd8\u4f1a\u6267\u884c\u914d\u7f6e\u7684\u5176\u4ed6\u63d2\u4ef6\u3002"),(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u5c5e\u6027\u81f3\u5c11\u8981\u914d\u7f6e\u4e00\u4e2a\u3002"))),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"vars")," \u662f\u7531 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-expr"},(0,r.kt)("inlineCode",{parentName:"a"},"lua-resty-expr"))," \u7684\u8868\u8fbe\u5f0f\u7ec4\u6210\u7684\u5217\u8868\uff0c\u5b83\u53ef\u4ee5\u7075\u6d3b\u7684\u5b9e\u73b0\u89c4\u5219\u4e4b\u95f4\u7684 AND/OR \u5173\u7cfb\uff0c\u793a\u4f8b\u5982\u4e0b\uff1a\uff1a"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-json"},'[\n    [\n        [ "arg_name","==","jack" ],\n        [ "arg_age","==",18 ]\n    ],\n    [\n        [ "arg_name2","==","allen" ]\n    ]\n]\n')),(0,r.kt)("p",{parentName:"div"},"\u4ee5\u4e0a\u793a\u4f8b\u8868\u793a\u524d\u4e24\u4e2a\u8868\u8fbe\u5f0f\u4e4b\u95f4\u7684\u5173\u7cfb\u662f AND\uff0c\u800c\u524d\u4e24\u4e2a\u548c\u7b2c\u4e09\u4e2a\u8868\u8fbe\u5f0f\u4e4b\u95f4\u7684\u5173\u7cfb\u662f OR\u3002"))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728\u6307\u5b9a\u8def\u7531\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\uff0c\u5e76\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u5c5e\u6027\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "fault-injection": {\n           "abort": {\n              "http_status": 200,\n              "body": "Fault Injection!"\n           }\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"\u540c\u6837\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u5c5e\u6027\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "fault-injection": {\n           "delay": {\n              "duration": 3\n           }\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"\u8fd8\u53ef\u4ee5\u540c\u65f6\u4e3a\u6307\u5b9a\u8def\u7531\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\uff0c\u5e76\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"abort")," \u5c5e\u6027\u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u5c5e\u6027\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," \u89c4\u5219\u3002\u5982\u4e0b\u6240\u793a\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                "http_status": 403,\n                "body": "Fault Injection!\\n",\n                "vars": [\n                    [\n                        [ "arg_name","==","jack" ]\n                    ]\n                ]\n            },\n            "delay": {\n                "duration": 2,\n                "vars": [\n                    [\n                        [ "http_age","==","18" ]\n                    ]\n                ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u5411\u8def\u7531\u53d1\u8d77\u5982\u4e0b\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/hello -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nDate: Mon, 13 Jan 2020 13:50:04 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\nFault Injection!\n")),(0,r.kt)("p",null,"\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u53ef\u4ee5\u5411\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"delay")," \u5c5e\u6027\u7684\u8def\u7531\u53d1\u8d77\u8bf7\u6c42\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"time curl http://127.0.0.1:9080/hello -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: application/octet-stream\nContent-Length: 6\nConnection: keep-alive\nServer: APISIX web server\nDate: Tue, 14 Jan 2020 14:30:54 GMT\nLast-Modified: Sat, 11 Jan 2020 12:46:21 GMT\n\nhello\n\nreal    0m3.034s\nuser    0m0.007s\nsys     0m0.010s\n")),(0,r.kt)("h3",{id:"\u6807\u51c6\u5339\u914d\u7684\u6545\u969c\u6ce8\u5165"},"\u6807\u51c6\u5339\u914d\u7684\u6545\u969c\u6ce8\u5165"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\u4e2d\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"vars")," \u89c4\u5219\u8bbe\u7f6e\u7279\u5b9a\u89c4\u5219\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "fault-injection": {\n            "abort": {\n                    "http_status": 403,\n                    "body": "Fault Injection!\\n",\n                    "vars": [\n                        [\n                            [ "arg_name","==","jack" ]\n                        ]\n                    ]\n            }\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "127.0.0.1:1980": 1\n        },\n        "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"\u4f7f\u7528\u4e0d\u540c\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u53c2\u6570\u6d4b\u8bd5\u8def\u7531\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'curl "http://127.0.0.1:9080/hello?name=allen" -i\n')),(0,r.kt)("p",null,"\u6ca1\u6709\u6545\u969c\u6ce8\u5165\u7684\u60c5\u51b5\u4e0b\uff0c\u4f60\u53ef\u4ee5\u5f97\u5230\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\nContent-Type: application/octet-stream\nTransfer-Encoding: chunked\nConnection: keep-alive\nDate: Wed, 20 Jan 2021 07:21:57 GMT\nServer: APISIX/2.2\n\nhello\n")),(0,r.kt)("p",null,"\u5982\u679c\u6211\u4eec\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," \u8bbe\u7f6e\u4e3a\u4e0e\u914d\u7f6e\u76f8\u5339\u914d\u7684\u540d\u79f0\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\u5c06\u88ab\u6267\u884c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-Shell"},'curl "http://127.0.0.1:9080/hello?name=jack" -i\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 Forbidden\nDate: Wed, 20 Jan 2021 07:23:37 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.2\n\nFault Injection!\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"fault-injection")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);