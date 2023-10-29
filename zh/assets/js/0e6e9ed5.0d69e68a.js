"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[81726],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=a.createContext({}),p=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},o=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,o=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=r,h=u["".concat(c,".").concat(m)]||u[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},o),{},{components:n})):a.createElement(h,i({ref:t},o))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var p=2;p<l;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},30463:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const l={title:"elasticsearch-logger",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Elasticsearch-logger","\u65e5\u5fd7"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u7684 elasticsearch-logger \u63d2\u4ef6\u3002\u4f7f\u7528\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 APISIX \u7684\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 Elasticserach\u3002"},i=void 0,s={unversionedId:"plugins/elasticsearch-logger",id:"version-3.1/plugins/elasticsearch-logger",isDocsHomePage:!1,title:"elasticsearch-logger",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u7684 elasticsearch-logger \u63d2\u4ef6\u3002\u4f7f\u7528\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 APISIX \u7684\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 Elasticserach\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/plugins/elasticsearch-logger.md",sourceDirName:"plugins",slug:"/plugins/elasticsearch-logger",permalink:"/zh/docs/apisix/3.1/plugins/elasticsearch-logger",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/plugins/elasticsearch-logger.md",tags:[],version:"3.1",frontMatter:{title:"elasticsearch-logger",keywords:["APISIX","API \u7f51\u5173","\u63d2\u4ef6","Elasticsearch-logger","\u65e5\u5fd7"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 API \u7f51\u5173 Apache APISIX \u7684 elasticsearch-logger \u63d2\u4ef6\u3002\u4f7f\u7528\u8be5\u63d2\u4ef6\u53ef\u4ee5\u5c06 APISIX \u7684\u65e5\u5fd7\u6570\u636e\u63a8\u9001\u5230 Elasticserach\u3002"},sidebar:"version-3.1/docs",previous:{title:"loggly",permalink:"/zh/docs/apisix/3.1/plugins/loggly"},next:{title:"tencent-cloud-cls",permalink:"/zh/docs/apisix/3.1/plugins/tencent-cloud-cls"}},c=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[{value:"\u5b8c\u6574\u914d\u7f6e\u793a\u4f8b",id:"\u5b8c\u6574\u914d\u7f6e\u793a\u4f8b",children:[]},{value:"\u6700\u5c0f\u5316\u914d\u7f6e\u793a\u4f8b",id:"\u6700\u5c0f\u5316\u914d\u7f6e\u793a\u4f8b",children:[]}]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e",children:[{value:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b",children:[]},{value:"\u7981\u7528\u63d2\u4ef6\u5143\u6570\u636e",id:"\u7981\u7528\u63d2\u4ef6\u5143\u6570\u636e",children:[]}]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],p={toc:c};function o(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," \u63d2\u4ef6\u7528\u4e8e\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"Apache APISIX")," \u7684\u8bf7\u6c42\u65e5\u5fd7\u8f6c\u53d1\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Elasticsearch")," \u4e2d\u8fdb\u884c\u5206\u6790\u548c\u5b58\u50a8\u3002"),(0,r.kt)("p",null,"\u542f\u7528\u8be5\u63d2\u4ef6\u540e APISIX \u5c06\u5728 ",(0,r.kt)("inlineCode",{parentName:"p"},"Log Phase")," \u83b7\u53d6\u8bf7\u6c42\u4e0a\u4e0b\u6587\u4fe1\u606f\u5e76\u5e8f\u5217\u5316\u4e3a ",(0,r.kt)("a",{parentName:"p",href:"https://www.elastic.co/guide/en/elasticsearch/reference/current/docs-bulk.html#docs-bulk"},"Bulk \u683c\u5f0f")," \u540e\u63d0\u4ea4\u5230\u6279\u5904\u7406\u961f\u5217\u4e2d\uff0c\u5f53\u89e6\u53d1\u6279\u5904\u7406\u961f\u5217\u6bcf\u6279\u6b21\u6700\u5927\u5904\u7406\u5bb9\u91cf\u6216\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\u65f6\u4f1a\u5c06\u961f\u5217\u4e2d\u7684\u6570\u636e\u63d0\u4ea4\u5230 Elaticsearch \u4e2d\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/batch-processor"},"Batch-Processor"),"\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"endpoint_addr"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch API\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"field"),"\u914d\u7f6e\u4fe1\u606f\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field.index"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"[_index field](https://www.elastic.co/guide/en/elasticsearch/reference/current/mapping-index-field.html#mapping-index-field)"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"field.type"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch \u9ed8\u8ba4\u503c"),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"[_type field](https://www.elastic.co/guide/en/elasticsearch/reference/7.17/mapping-type-field.html#mapping-type-field)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth"),(0,r.kt)("td",{parentName:"tr",align:null},"array"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"[authentication](https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html)")," \u914d\u7f6e\u4fe1\u606f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth.username"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"[authentication](https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html)")," \u7528\u6237\u540d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"auth.password"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Elasticsearch ",(0,r.kt)("inlineCode",{parentName:"td"},"[authentication](https://www.elastic.co/guide/en/elasticsearch/reference/current/setting-up-authentication.html)")," \u5bc6\u7801\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5f53\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5219\u542f\u7528 SSL \u9a8c\u8bc1\u3002\u66f4\u591a\u4fe1\u606f\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/openresty/lua-nginx-module#tcpsocksslhandshake"},"lua-nginx-module"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"10"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53d1\u9001\u7ed9 Elasticsearch \u8bf7\u6c42\u8d85\u65f6\u65f6\u95f4\u3002")))),(0,r.kt)("p",null,"\u6ce8\u610f\uff1aschema \u4e2d\u8fd8\u5b9a\u4e49\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"auth.password"}'),"\uff0c\u8fd9\u610f\u5473\u7740\u8be5\u5b57\u6bb5\u5c06\u4f1a\u88ab\u52a0\u5bc6\u5b58\u50a8\u5728 etcd \u4e2d\u3002\u5177\u4f53\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/plugin-develop#%E5%8A%A0%E5%AF%86%E5%AD%98%E5%82%A8%E5%AD%97%E6%AE%B5"},"\u52a0\u5bc6\u5b58\u50a8\u5b57\u6bb5"),"\u3002"),(0,r.kt)("p",null,"\u672c\u63d2\u4ef6\u652f\u6301\u4f7f\u7528\u6279\u5904\u7406\u5668\u6765\u805a\u5408\u5e76\u6279\u91cf\u5904\u7406\u6761\u76ee\uff08\u65e5\u5fd7\u548c\u6570\u636e\uff09\u3002\u8fd9\u6837\u53ef\u4ee5\u907f\u514d\u63d2\u4ef6\u9891\u7e41\u5730\u63d0\u4ea4\u6570\u636e\uff0c\u9ed8\u8ba4\u8bbe\u7f6e\u60c5\u51b5\u4e0b\u6279\u5904\u7406\u5668\u4f1a\u6bcf ",(0,r.kt)("inlineCode",{parentName:"p"},"5")," \u79d2\u949f\u6216\u961f\u5217\u4e2d\u7684\u6570\u636e\u8fbe\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"1000")," \u6761\u65f6\u63d0\u4ea4\u6570\u636e\uff0c\u5982\u9700\u4e86\u89e3\u6216\u81ea\u5b9a\u4e49\u6279\u5904\u7406\u5668\u76f8\u5173\u53c2\u6570\u8bbe\u7f6e\uff0c\u8bf7\u53c2\u8003 ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/batch-processor#%E9%85%8D%E7%BD%AE"},"Batch-Processor")," \u914d\u7f6e\u90e8\u5206\u3002"),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5728\u6307\u5b9a\u8def\u7531\u4e0a\u542f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," \u63d2\u4ef6\uff1a"),(0,r.kt)("h3",{id:"\u5b8c\u6574\u914d\u7f6e\u793a\u4f8b"},"\u5b8c\u6574\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "elasticsearch-logger":{\n            "endpoint_addr":"http://127.0.0.1:9200",\n            "field":{\n                "index":"services",\n                "type":"collector"\n            },\n            "auth":{\n                "username":"elastic",\n                "password":"123456"\n            },\n            "ssl_verify":false,\n            "timeout": 60,\n            "retry_delay":1,\n            "buffer_duration":60,\n            "max_retry_count":0,\n            "batch_max_size":1000,\n            "inactive_timeout":5,\n            "name":"elasticsearch-logger"\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')),(0,r.kt)("h3",{id:"\u6700\u5c0f\u5316\u914d\u7f6e\u793a\u4f8b"},"\u6700\u5c0f\u5316\u914d\u7f6e\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{\n        "elasticsearch-logger":{\n            "endpoint_addr":"http://127.0.0.1:9200",\n            "field":{\n                "index":"services"\n            }\n        }\n    },\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5411\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," \u63d2\u4ef6\u7684\u8def\u7531\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/elasticsearch.do\\?q\\=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4ece Elasticsearch \u83b7\u53d6\u76f8\u5173\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "http://127.0.0.1:9200/services/_search" | jq .\n{\n  "took": 0,\n   ...\n    "hits": [\n      {\n        "_index": "services",\n        "_type": "_doc",\n        "_id": "M1qAxYIBRmRqWkmH4Wya",\n        "_score": 1,\n        "_source": {\n          "apisix_latency": 0,\n          "route_id": "1",\n          "server": {\n            "version": "2.15.0",\n            "hostname": "apisix"\n          },\n          "request": {\n            "size": 102,\n            "uri": "/elasticsearch.do?q=hello",\n            "querystring": {\n              "q": "hello"\n            },\n            "headers": {\n              "user-agent": "curl/7.29.0",\n              "host": "127.0.0.1:9080",\n              "accept": "*/*"\n            },\n            "url": "http://127.0.0.1:9080/elasticsearch.do?q=hello",\n            "method": "GET"\n          },\n          "service_id": "",\n          "latency": 0,\n          "upstream": "127.0.0.1:1980",\n          "upstream_latency": 1,\n          "client_ip": "127.0.0.1",\n          "start_time": 1661170929107,\n          "response": {\n            "size": 192,\n            "headers": {\n              "date": "Mon, 22 Aug 2022 12:22:09 GMT",\n              "server": "APISIX/2.15.0",\n              "content-type": "text/plain; charset=utf-8",\n              "connection": "close",\n              "transfer-encoding": "chunked"\n            },\n            "status": 200\n          }\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h2",{id:"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"},"\u63d2\u4ef6\u5143\u6570\u636e\u8bbe\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"\u4ee5 JSON \u683c\u5f0f\u7684\u952e\u503c\u5bf9\u6765\u58f0\u660e\u65e5\u5fd7\u683c\u5f0f\u3002\u5bf9\u4e8e\u503c\u90e8\u5206\uff0c\u4ec5\u652f\u6301\u5b57\u7b26\u4e32\u3002\u5982\u679c\u662f\u4ee5 ",(0,r.kt)("inlineCode",{parentName:"td"},"$")," \u5f00\u5934\uff0c\u5219\u8868\u660e\u662f\u8981\u83b7\u53d6 ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/apache/apisix/blob/master/docs/en/latest/apisix-variable.md"},"APISIX \u53d8\u91cf")," \u6216 ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx \u5185\u7f6e\u53d8\u91cf"),"\u3002\u8bf7\u6ce8\u610f\uff0c",(0,r.kt)("strong",{parentName:"td"},"\u8be5\u8bbe\u7f6e\u662f\u5168\u5c40\u751f\u6548\u7684"),"\uff0c\u56e0\u6b64\u5728\u6307\u5b9a log_format \u540e\uff0c\u5c06\u5bf9\u6240\u6709\u7ed1\u5b9a elasticsearch-logger \u7684 Route \u6216 Service \u751f\u6548\u3002")))),(0,r.kt)("h3",{id:"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"},"\u8bbe\u7f6e\u65e5\u5fd7\u683c\u5f0f\u793a\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/elasticsearch-logger \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("p",null,"\u5728\u65e5\u5fd7\u6536\u96c6\u5904\uff0c\u5c06\u5f97\u5230\u7c7b\u4f3c\u4e0b\u9762\u7684\u65e5\u5fd7\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n{"host":"localhost","@timestamp":"2020-09-23T19:05:05-04:00","client_ip":"127.0.0.1","route_id":"1"}\n')),(0,r.kt)("p",null,"\u5411\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"p"},"elasticsearch-logger")," \u63d2\u4ef6\u7684\u8def\u7531\u53d1\u9001\u8bf7\u6c42"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/elasticsearch.do\\?q\\=hello\nHTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"\u73b0\u5728\uff0c\u4f60\u53ef\u4ee5\u4ece Elasticsearch \u83b7\u53d6\u76f8\u5173\u65e5\u5fd7\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET "http://127.0.0.1:9200/services/_search" | jq .\n{\n  "took": 0,\n  ...\n  "hits": {\n    "total": {\n      "value": 1,\n      "relation": "eq"\n    },\n    "max_score": 1,\n    "hits": [\n      {\n        "_index": "services",\n        "_type": "_doc",\n        "_id": "NVqExYIBRmRqWkmH4WwG",\n        "_score": 1,\n        "_source": {\n          "@timestamp": "2022-08-22T20:26:31+08:00",\n          "client_ip": "127.0.0.1",\n          "host": "127.0.0.1",\n          "route_id": "1"\n        }\n      }\n    ]\n  }\n}\n')),(0,r.kt)("h3",{id:"\u7981\u7528\u63d2\u4ef6\u5143\u6570\u636e"},"\u7981\u7528\u63d2\u4ef6\u5143\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/elasticsearch-logger \\\n-H 'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1' -X DELETE\n")),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528\u8be5\u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u5982\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins":{},\n    "upstream":{\n        "type":"roundrobin",\n        "nodes":{\n            "127.0.0.1:1980":1\n        }\n    },\n    "uri":"/elasticsearch.do"\n}\'\n')))}o.isMDXComponent=!0}}]);