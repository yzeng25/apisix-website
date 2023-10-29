"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[98362],{3905:(e,n,t)=>{t.d(n,{Zo:()=>m,kt:()=>c});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=a.createContext({}),d=function(e){var n=a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},m=function(e){var n=d(e.components);return a.createElement(o.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},s=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=d(t),c=r,k=s["".concat(o,".").concat(c)]||s[c]||u[c]||l;return t?a.createElement(k,i(i({ref:n},m),{},{components:t})):a.createElement(k,i({ref:n},m))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,i=new Array(l);i[0]=s;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var d=2;d<l;d++)i[d]=t[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}s.displayName="MDXCreateElement"},71665:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=t(87462),r=(t(67294),t(3905));const l={title:"mocking"},i=void 0,p={unversionedId:"plugins/mocking",id:"version-2.13/plugins/mocking",isDocsHomePage:!1,title:"mocking",description:"Mock API \u63d2\u4ef6\uff0c\u7ed1\u5b9a\u8be5\u63d2\u4ef6\u540e\u5c06\u968f\u673a\u8fd4\u56de\u6307\u5b9a\u683c\u5f0f\u7684mock\u6570\u636e\uff0c\u4e0d\u518d\u8f6c\u53d1\u5230\u540e\u7aef\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-2.13/plugins/mocking.md",sourceDirName:"plugins",slug:"/plugins/mocking",permalink:"/zh/docs/apisix/2.13/plugins/mocking",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/2.13/docs/zh/latest/plugins/mocking.md",tags:[],version:"2.13",frontMatter:{title:"mocking"},sidebar:"version-2.13/docs",previous:{title:"fault-injection",permalink:"/zh/docs/apisix/2.13/plugins/fault-injection"},next:{title:"key-auth",permalink:"/zh/docs/apisix/2.13/plugins/key-auth"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u5982\u4f55\u542f\u7528",id:"\u5982\u4f55\u542f\u7528",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u79fb\u9664\u63d2\u4ef6",id:"\u79fb\u9664\u63d2\u4ef6",children:[]}],d={toc:o};function m(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,"Mock API \u63d2\u4ef6\uff0c\u7ed1\u5b9a\u8be5\u63d2\u4ef6\u540e\u5c06\u968f\u673a\u8fd4\u56de\u6307\u5b9a\u683c\u5f0f\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"mock"),"\u6570\u636e\uff0c\u4e0d\u518d\u8f6c\u53d1\u5230\u540e\u7aef\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delay"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u5ef6\u65f6\u8fd4\u56de\u7684\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_status"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"200"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u54cd\u5e94 http status code")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content_type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"application/json"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u54cd\u5e94\u5934\u7684 Content-Type\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_example"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u8fd4\u56de\u7684\u54cd\u5e94\u4f53\uff0c\u4e0e",(0,r.kt)("inlineCode",{parentName:"td"},"response_schema"),"\u5b57\u6bb5\u4e8c\u9009\u4e00")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"response_schema"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u6307\u5b9a\u54cd\u5e94\u7684",(0,r.kt)("inlineCode",{parentName:"td"},"jsonschema"),"\u5bf9\u8c61\uff0c\u672a\u6307\u5b9a",(0,r.kt)("inlineCode",{parentName:"td"},"response_example"),"\u5b57\u6bb5\u65f6\u751f\u6548\uff0c\u5177\u4f53\u7ed3\u6784\u770b\u540e\u6587\u8bf4\u660e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"with_mock_header"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},'\u662f\u5426\u8fd4\u56de\u54cd\u5e94\u5934\uff1a"x-mock-by: APISIX/{version}"\uff0c\u9ed8\u8ba4\u8fd4\u56de\uff0c\u6307\u5b9a\u4e3a false \u5219\u4e0d\u8fd4\u56de')))),(0,r.kt)("p",null,"\u652f\u6301\u7684\u5b57\u6bb5\u7c7b\u578b\uff1a",(0,r.kt)("inlineCode",{parentName:"p"},"string"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"number"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"object"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"array"),"\n\u57fa\u7840\u6570\u636e\u7c7b\u578b\uff08",(0,r.kt)("inlineCode",{parentName:"p"},"string"),",",(0,r.kt)("inlineCode",{parentName:"p"},"number"),",",(0,r.kt)("inlineCode",{parentName:"p"},"integer"),",",(0,r.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff09\u53ef\u901a\u8fc7\u914d\u7f6e",(0,r.kt)("inlineCode",{parentName:"p"},"example"),"\u5c5e\u6027\u6307\u5b9a\u751f\u6210\u7684\u54cd\u5e94\u503c\uff0c\u672a\u914d\u7f6e\u65f6\u968f\u673a\u8fd4\u56de\u3002\n\u4ee5\u4e0b\u662f\u4e00\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"jsonschema"),"\u5b9e\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "properties":{\n        "field0":{\n            "example":"abcd",\n            "type":"string"\n        },\n        "field1":{\n            "example":123.12,\n            "type":"number"\n        },\n        "field3":{\n            "properties":{\n                "field3_1":{\n                    "type":"string"\n                },\n                "field3_2":{\n                    "properties":{\n                        "field3_2_1":{\n                            "example":true,\n                            "type":"boolean"\n                        },\n                        "field3_2_2":{\n                            "items":{\n                                "example":155.55,\n                                "type":"integer"\n                            },\n                            "type":"array"\n                        }\n                    },\n                    "type":"object"\n                }\n            },\n            "type":"object"\n        },\n        "field2":{\n            "items":{\n                "type":"string"\n            },\n            "type":"array"\n        }\n    },\n    "type":"object"\n}\n')),(0,r.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u8be5",(0,r.kt)("inlineCode",{parentName:"p"},"jsonschema"),"\u53ef\u80fd\u751f\u6210\u7684\u8fd4\u56de\u5bf9\u8c61\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "field1": 123.12,\n    "field3": {\n        "field3_1": "LCFE0",\n        "field3_2": {\n            "field3_2_1": true,\n            "field3_2_2": [\n                155,\n                155\n            ]\n        }\n    },\n    "field0": "abcd",\n    "field2": [\n        "sC"\n    ]\n}\n')),(0,r.kt)("h2",{id:"\u5982\u4f55\u542f\u7528"},"\u5982\u4f55\u542f\u7528"),(0,r.kt)("p",null,"\u8fd9\u91cc\u4ee5",(0,r.kt)("inlineCode",{parentName:"p"},"route"),"\u4e3a\u4f8b(",(0,r.kt)("inlineCode",{parentName:"p"},"service"),"\u7684\u4f7f\u7528\u662f\u540c\u6837\u7684\u65b9\u6cd5)\uff0c\u5728\u6307\u5b9a\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"route")," \u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"mocking")," \u63d2\u4ef6\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "mocking": {\n            "delay": 1,\n            "content_type": "application/json",\n            "response_status": 200,\n            "response_schema": {\n               "properties":{\n                   "field0":{\n                       "example":"abcd",\n                       "type":"string"\n                   },\n                   "field1":{\n                       "example":123.12,\n                       "type":"number"\n                   },\n                   "field3":{\n                       "properties":{\n                           "field3_1":{\n                               "type":"string"\n                           },\n                           "field3_2":{\n                               "properties":{\n                                   "field3_2_1":{\n                                       "example":true,\n                                       "type":"boolean"\n                                   },\n                                   "field3_2_2":{\n                                       "items":{\n                                           "example":155.55,\n                                           "type":"integer"\n                                       },\n                                       "type":"array"\n                                   }\n                               },\n                               "type":"object"\n                           }\n                       },\n                       "type":"object"\n                   },\n                   "field2":{\n                       "items":{\n                           "type":"string"\n                       },\n                       "type":"array"\n                   }\n               },\n               "type":"object"\n           }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53",(0,r.kt)("inlineCode",{parentName:"p"},"mocking"),"\u63d2\u4ef6\u914d\u7f6e\u5982\u4e0b\u65f6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "delay":0,\n  "content_type":"",\n  "with_mock_header":true,\n  "response_status":201,\n  "response_example":"{\\"a\\":1,\\"b\\":2}"\n}\n')),(0,r.kt)("p",null,"curl\u8bbf\u95ee\u5c06\u8fd4\u56de\u5982\u4e0b\u7ed3\u679c\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9080/test-mock -i\nHTTP/1.1 201 Created\nDate: Fri, 14 Jan 2022 11:49:34 GMT\nContent-Type: application/json;charset=utf8\nTransfer-Encoding: chunked\nConnection: keep-alive\nx-mock-by: APISIX/2.10.0\nServer: APISIX/2.10.0\n\n{"a":1,"b":2}\n')),(0,r.kt)("h2",{id:"\u79fb\u9664\u63d2\u4ef6"},"\u79fb\u9664\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u60f3\u53bb\u6389",(0,r.kt)("inlineCode",{parentName:"p"},"mocking"),"\u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u5f88\u7b80\u5355\uff0c\u5728\u63d2\u4ef6\u7684\u914d\u7f6e\u4e2d\u628a\u5bf9\u5e94\u7684 json \u914d\u7f6e\u5220\u9664\u5373\u53ef\uff0c\u65e0\u987b\u91cd\u542f\u670d\u52a1\uff0c\u5373\u523b\u751f\u6548\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u73b0\u5728\u5c31\u5df2\u7ecf\u79fb\u9664\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"mocking"),"\u63d2\u4ef6\u4e86\u3002\u5176\u4ed6\u63d2\u4ef6\u7684\u5f00\u542f\u548c\u79fb\u9664\u4e5f\u662f\u540c\u6837\u7684\u65b9\u6cd5\u3002"))}m.isMDXComponent=!0}}]);