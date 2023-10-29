"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30127],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return a.createElement(p.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),m=d(n),c=r,g=m["".concat(p,".").concat(c)]||m[c]||s[c]||l;return n?a.createElement(g,i(i({ref:e},u),{},{components:n})):a.createElement(g,i({ref:e},u))}));function c(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},62138:(t,e,n)=>{n.r(e),n.d(e,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"chaitin-waf",keywords:["Apache APISIX","API Gateway","Plugin","WAF"],description:"This document contains basic information about the Apache APISIX `chaitin-waf` plugin."},i=void 0,o={unversionedId:"plugins/chaitin-waf",id:"plugins/chaitin-waf",isDocsHomePage:!1,title:"chaitin-waf",description:"This document contains basic information about the Apache APISIX `chaitin-waf` plugin.",source:"@site/docs/apisix/plugins/chaitin-waf.md",sourceDirName:"plugins",slug:"/plugins/chaitin-waf",permalink:"/docs/apisix/next/plugins/chaitin-waf",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/plugins/chaitin-waf.md",tags:[],version:"current",frontMatter:{title:"chaitin-waf",keywords:["Apache APISIX","API Gateway","Plugin","WAF"],description:"This document contains basic information about the Apache APISIX `chaitin-waf` plugin."},sidebar:"docs",previous:{title:"GM",permalink:"/docs/apisix/next/plugins/gm"},next:{title:"limit-req",permalink:"/docs/apisix/next/plugins/limit-req"}},p=[{value:"Description",id:"description",children:[]},{value:"Response Headers",id:"response-headers",children:[]},{value:"Plugin Metadata",id:"plugin-metadata",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Test Plugin",id:"test-plugin",children:[]},{value:"Delete Plugin",id:"delete-plugin",children:[]}],d={toc:p};function u(t){let{components:e,...n}=t;return(0,r.kt)("wrapper",(0,a.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"After enabling the chaitin-waf plugin, the traffic will be forwarded to the Chaitin WAF service for the detection and\nprevention of various web application attacks, ensuring the security of the application and user data."),(0,r.kt)("h2",{id:"response-headers"},"Response Headers"),(0,r.kt)("p",null,"Depending on the plugin configuration, it is optional to add additional response headers."),(0,r.kt)("p",null,"The response headers are listed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF"),": Whether APISIX forwards the request to the WAF server.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yes: forwarded"),(0,r.kt)("li",{parentName:"ul"},"no: no forwarded"),(0,r.kt)("li",{parentName:"ul"},"unhealthy: matches the match variables, but no WAF server is available."),(0,r.kt)("li",{parentName:"ul"},"err: an error occurred during the execution of the plugin. Also with ",(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-ERROR")," request header"),(0,r.kt)("li",{parentName:"ul"},"waf-err: Error while interacting with the WAF server. Also with ",(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-ERROR")," request header"),(0,r.kt)("li",{parentName:"ul"},"timeout: Timeout for request to the WAF server"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-ERROR"),": Debug header. WAF error message"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-TIME"),": The time in milliseconds that APISIX spent interacting with WAF."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-STATUS"),": The status code returned to APISIX by the WAF server."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-ACTION"),": Processing result returned to APISIX by the WAF server.",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"pass: request valid and passed"),(0,r.kt)("li",{parentName:"ul"},"reject: request rejected by WAF service"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"X-APISIX-CHAITIN-WAF-SERVER"),": Debug header. Picked WAF server.")),(0,r.kt)("h2",{id:"plugin-metadata"},"Plugin Metadata"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes"),(0,r.kt)("td",{parentName:"tr",align:null},"array(object)"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"A list of addresses for the Chaitin SafeLine WAF service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes","[0]",".host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The address of Chaitin SafeLine WAF service. Supports IPV4, IPV6, Unix Socket, etc.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nodes","[0]",".port"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"80"),(0,r.kt)("td",{parentName:"tr",align:null},"The port of Chaitin SafeLine WAF service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration of the Chaitin SafeLine WAF service. The parameters configured here will be used when route is not configured.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.connect_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"connect timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.send_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"send timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.read_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1000"),(0,r.kt)("td",{parentName:"tr",align:null},"read timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.req_body_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"1024"),(0,r.kt)("td",{parentName:"tr",align:null},"request body size, in KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.keepalive_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"256"),(0,r.kt)("td",{parentName:"tr",align:null},"maximum concurrent idle connections to the SafeLine WAF detection service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"60000"),(0,r.kt)("td",{parentName:"tr",align:null},"idle connection timeout, in milliseconds")))),(0,r.kt)("p",null,"An example configuration is as follows."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/plugin_metadata/chaitin-waf -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "nodes":[\n     {\n       "host": "unix:/path/to/safeline/resources/detector/snserver.sock",\n       "port": 8000\n     }\n  ]\n}\'\n')),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[object]"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The list of matching rules, default is empty")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"match.vars"),(0,r.kt)("td",{parentName:"tr",align:null},"array","[array]"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"List of variables to match for filtering requests for conditional traffic split. It is in the format ",(0,r.kt)("inlineCode",{parentName:"td"},"{variable operator value}"),". For example, ",(0,r.kt)("inlineCode",{parentName:"td"},'{"arg_name", "==", "json"}'),". The variables here are consistent with NGINX internal variables. For details on supported operators, ",(0,r.kt)("a",{parentName:"td",href:"https://github.com/api7/lua-resty-expr#operator-list"},"lua-resty-expr"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append_waf_resp_header"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to add response headers")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"append_waf_debug_header"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether or not to add debugging headers, effective when ",(0,r.kt)("inlineCode",{parentName:"td"},"add_header")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Configuration of the Chaitin SafeLine WAF service. When the route is not configured, the parameters configured in the metadata are used.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.connect_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"connect timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.send_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"send timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.read_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"read timeout, in milliseconds")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.req_body_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"request body size, in KB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.keepalive_size"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"maximum concurrent idle connections to the SafeLine WAF detection service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"config.keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"idle connection timeout, in milliseconds")))),(0,r.kt)("p",null,"A sample configuration is shown below, using ",(0,r.kt)("inlineCode",{parentName:"p"},"httpbun.org")," as the example backend, which can be replaced as needed:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n   "uri": "/*",\n   "plugins": {\n       "chaitin-waf": {\n           "match": [\n                {\n                    "vars": [\n                        ["http_waf","==","true"]\n                    ]\n                }\n            ]\n       }\n    },\n   "upstream": {\n       "type": "roundrobin",\n       "nodes": {\n           "httpbun.org:80": 1\n       }\n   }\n}\'\n')),(0,r.kt)("h2",{id:"test-plugin"},"Test Plugin"),(0,r.kt)("p",null,"Test the above example configuration."),(0,r.kt)("p",null,"If the match condition is not met, the request can be reached normally:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Host: httpbun.org" http://127.0.0.1:9080/get -i\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 408\nConnection: keep-alive\nX-APISIX-CHAITIN-WAF: no\nDate: Wed, 19 Jul 2023 09:30:42 GMT\nX-Powered-By: httpbun/3c0dc05883dd9212ac38b04705037d50b02f2596\nServer: APISIX/3.3.0\n\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Connection": "close",\n    "Host": "httpbun.org",\n    "User-Agent": "curl/8.1.2",\n    "X-Forwarded-For": "127.0.0.1",\n    "X-Forwarded-Host": "httpbun.org",\n    "X-Forwarded-Port": "9080",\n    "X-Forwarded-Proto": "http",\n    "X-Real-Ip": "127.0.0.1"\n  },\n  "method": "GET",\n  "origin": "127.0.0.1, 122.231.76.178",\n  "url": "http://httpbun.org/get"\n}\n')),(0,r.kt)("p",null,"Potential injection requests are also forwarded as is and encounter a 404 error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Host: httpbun.org" http://127.0.0.1:9080/getid=1%20AND%201=1 -i\n\nHTTP/1.1 404 Not Found\nContent-Type: text/plain; charset=utf-8\nContent-Length: 19\nConnection: keep-alive\nX-APISIX-CHAITIN-WAF: no\nDate: Wed, 19 Jul 2023 09:30:28 GMT\nX-Content-Type-Options: nosniff\nX-Powered-By: httpbun/3c0dc05883dd9212ac38b04705037d50b02f2596\nServer: APISIX/3.3.0\n\n404 page not found\n')),(0,r.kt)("p",null,"Normal requests are still reachable when the match condition is met:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Host: httpbun.org" -H "waf: true" http://127.0.0.1:9080/get -i\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 427\nConnection: keep-alive\nX-APISIX-CHAITIN-WAF-TIME: 2\nX-APISIX-CHAITIN-WAF-STATUS: 200\nX-APISIX-CHAITIN-WAF: yes\nX-APISIX-CHAITIN-WAF-ACTION: pass\nDate: Wed, 19 Jul 2023 09:29:58 GMT\nX-Powered-By: httpbun/3c0dc05883dd9212ac38b04705037d50b02f2596\nServer: APISIX/3.3.0\n\n{\n  "args": {},\n  "headers": {\n    "Accept": "*/*",\n    "Connection": "close",\n    "Host": "httpbun.org",\n    "User-Agent": "curl/8.1.2",\n    "Waf": "true",\n    "X-Forwarded-For": "127.0.0.1",\n    "X-Forwarded-Host": "httpbun.org",\n    "X-Forwarded-Port": "9080",\n    "X-Forwarded-Proto": "http",\n    "X-Real-Ip": "127.0.0.1"\n  },\n  "method": "GET",\n  "origin": "127.0.0.1, 122.231.76.178",\n  "url": "http://httpbun.org/get"\n}\n')),(0,r.kt)("p",null,"Potential attack requests will be intercepted and returned a 403 error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl -H "Host: httpbun.org" -H "waf: true" http://127.0.0.1:9080/getid=1%20AND%201=1 -i\n\nHTTP/1.1 403 Forbidden\nDate: Wed, 19 Jul 2023 09:29:06 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nX-APISIX-CHAITIN-WAF: yes\nX-APISIX-CHAITIN-WAF-TIME: 2\nX-APISIX-CHAITIN-WAF-ACTION: reject\nX-APISIX-CHAITIN-WAF-STATUS: 403\nServer: APISIX/3.3.0\nSet-Cookie: sl-session=UdywdGL+uGS7q8xMfnJlbQ==; Domain=; Path=/; Max-Age=86400\n\n{"code": 403, "success":false, "message": "blocked by Chaitin SafeLine Web Application Firewall", "event_id": "51a268653f2c4189bfa3ec66afbcb26d"}\n')),(0,r.kt)("h2",{id:"delete-plugin"},"Delete Plugin"),(0,r.kt)("p",null,"To remove the ",(0,r.kt)("inlineCode",{parentName:"p"},"chaitin-waf")," plugin, you can delete the corresponding JSON configuration from the Plugin configuration.\nAPISIX will automatically reload and you do not have to restart for this to take effect:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n   "uri": "/*",\n   "upstream": {\n       "type": "roundrobin",\n       "nodes": {\n           "httpbun.org:80": 1\n       }\n   }\n}\'\n')))}u.isMDXComponent=!0}}]);