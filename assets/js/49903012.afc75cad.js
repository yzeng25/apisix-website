"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29118],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(n),m=r,h=c["".concat(p,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(h,i(i({ref:t},u),{},{components:n})):a.createElement(h,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},50109:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={title:"opa",keywords:["Apache APISIX","API Gateway","Plugin","Open Policy Agent","opa"],description:"This document contains information about the Apache APISIX opa Plugin."},i=void 0,o={unversionedId:"plugins/opa",id:"version-3.4/plugins/opa",isDocsHomePage:!1,title:"opa",description:"This document contains information about the Apache APISIX opa Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.4/plugins/opa.md",sourceDirName:"plugins",slug:"/plugins/opa",permalink:"/docs/apisix/plugins/opa",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/plugins/opa.md",tags:[],version:"3.4",frontMatter:{title:"opa",keywords:["Apache APISIX","API Gateway","Plugin","Open Policy Agent","opa"],description:"This document contains information about the Apache APISIX opa Plugin."},sidebar:"version-3.4/docs",previous:{title:"ldap-auth",permalink:"/docs/apisix/plugins/ldap-auth"},next:{title:"forward-auth",permalink:"/docs/apisix/plugins/forward-auth"}},p=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Data definition",id:"data-definition",children:[{value:"APISIX to OPA service",id:"apisix-to-opa-service",children:[]},{value:"OPA service to APISIX",id:"opa-service-to-apisix",children:[]}]},{value:"Example usage",id:"example-usage",children:[{value:"Basic usage",id:"basic-usage",children:[]},{value:"Using custom response",id:"using-custom-response",children:[]},{value:"Sending APISIX data",id:"sending-apisix-data",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],s={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," Plugin can be used to integrate with ",(0,r.kt)("a",{parentName:"p",href:"https://www.openpolicyagent.org"},"Open Policy Agent (OPA)"),". OPA is a policy engine that helps defininig and enforcing authorization policies, which determines whether a user or application has the necessary permissions to perform a particular action or access a particular resource. Using OPA with APISIX decouples authorization logics from APISIX."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"host"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Host address of the OPA service. For example, ",(0,r.kt)("inlineCode",{parentName:"td"},"https://localhost:8181"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ssl_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," verifies the SSL certificates.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"policy"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"OPA policy path. A combination of ",(0,r.kt)("inlineCode",{parentName:"td"},"package")," and ",(0,r.kt)("inlineCode",{parentName:"td"},"decision"),". While using advanced features like custom response, you can omit ",(0,r.kt)("inlineCode",{parentName:"td"},"decision"),".")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"3000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, 60000]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Timeout for the HTTP call.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"true"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),", keeps the connection alive for multiple requests.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"60000ms"),(0,r.kt)("td",{parentName:"tr",align:null},"[1000, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Idle time after which the connection is closed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"keepalive_pool"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"5"),(0,r.kt)("td",{parentName:"tr",align:null},"[1, ...]","ms"),(0,r.kt)("td",{parentName:"tr",align:null},"Connection pool limit.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"with_route"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, sends information about the current Route.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"with_service"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, sends information about the current Service.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"with_consumer"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"When set to true, sends information about the current Consumer. Note that this may send sensitive information like the API key. Make sure to turn it on only when you are sure it is safe.")))),(0,r.kt)("h2",{id:"data-definition"},"Data definition"),(0,r.kt)("h3",{id:"apisix-to-opa-service"},"APISIX to OPA service"),(0,r.kt)("p",null,"The JSON below shows the data sent to the OPA service by APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "type": "http",\n    "request": {\n        "scheme": "http",\n        "path": "\\/get",\n        "headers": {\n            "user-agent": "curl\\/7.68.0",\n            "accept": "*\\/*",\n            "host": "127.0.0.1:9080"\n        },\n        "query": {},\n        "port": 9080,\n        "method": "GET",\n        "host": "127.0.0.1"\n    },\n    "var": {\n        "timestamp": 1701234567,\n        "server_addr": "127.0.0.1",\n        "server_port": "9080",\n        "remote_port": "port",\n        "remote_addr": "ip address"\n    },\n    "route": {},\n    "service": {},\n    "consumer": {}\n}\n')),(0,r.kt)("p",null,"Each of these keys are explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"type")," indicates the request type (",(0,r.kt)("inlineCode",{parentName:"li"},"http")," or ",(0,r.kt)("inlineCode",{parentName:"li"},"stream"),")."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"request")," is used when the ",(0,r.kt)("inlineCode",{parentName:"li"},"type")," is ",(0,r.kt)("inlineCode",{parentName:"li"},"http")," and contains the basic request information (URL, headers etc)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"var")," contains the basic information about the requested connection (IP, port, request timestamp etc)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"route"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"service")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"consumer")," contains the same data as stored in APISIX and are only sent if the ",(0,r.kt)("inlineCode",{parentName:"li"},"opa")," Plugin is configured on these objects.")),(0,r.kt)("h3",{id:"opa-service-to-apisix"},"OPA service to APISIX"),(0,r.kt)("p",null,"The JSON below shows the response from the OPA service to APISIX:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "result": {\n        "allow": true,\n        "reason": "test",\n        "headers": {\n            "an": "header"\n        },\n        "status_code": 401\n    }\n}\n')),(0,r.kt)("p",null,"The keys in the response are explained below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"allow")," is indispensable and indicates whether the request is allowed to be forwarded through APISIX."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"reason"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"headers"),", and ",(0,r.kt)("inlineCode",{parentName:"li"},"status_code")," are optional and are only returned when you configure a custom response. See the next section use cases for this.")),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"First, you need to launch the Open Policy Agent environment:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"docker run -d --name opa -p 8181:8181 openpolicyagent/opa:0.35.0 run -s\n")),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("p",null,"Once you have the OPA service running, you can create a basic policy:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT '127.0.0.1:8181/v1/policies/example1' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package example1\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    # HTTP method must GET\n    request.method == \"GET\"\n}'\n")),(0,r.kt)("p",null,"Then, you can configure the ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," Plugin on a specific Route:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "example1"\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, to test it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X GET 127.0.0.1:9080/get\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n")),(0,r.kt)("p",null,"Now if we try to make a request to a different endpoint the request will fail:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -i -X POST 127.0.0.1:9080/post\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 403 FORBIDDEN\n")),(0,r.kt)("h3",{id:"using-custom-response"},"Using custom response"),(0,r.kt)("p",null,"You can also configure custom responses for more complex scenarios:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'127.0.0.1:8181/v1/policies/example2\' \\\n    -H \'Content-Type: text/plain\' \\\n    -d \'package example2\n\nimport input.request\n\ndefault allow = false\n\nallow {\n    request.method == "GET"\n}\n\n# custom response body (Accepts a string or an object, the object will respond as JSON format)\nreason = "test" {\n    not allow\n}\n\n# custom response header (The data of the object can be written in this way)\nheaders = {\n    "Location": "http://example.com/auth"\n} {\n    not allow\n}\n\n# custom response status code\nstatus_code = 302 {\n    not allow\n}\'\n')),(0,r.kt)("p",null,"Now you can test it out by changing the ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," Plugin's policy parameter to ",(0,r.kt)("inlineCode",{parentName:"p"},"example2")," and then making a request:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -X GET 127.0.0.1:9080/get\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n")),(0,r.kt)("p",null,"Now if you make a failing request, you will see the custom response from the OPA service:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"curl -i -X POST 127.0.0.1:9080/post\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 302 FOUND\nLocation: http://example.com/auth\n\ntest\n")),(0,r.kt)("h3",{id:"sending-apisix-data"},"Sending APISIX data"),(0,r.kt)("p",null,"Let's think about another scenario, when your decision needs to use some APISIX data, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"route"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"consumer"),", etc., how should we do it?"),(0,r.kt)("p",null,"If your OPA service needs to make decisions based on APISIX data like Route and Consumer details, you can configure the Plugin to do so."),(0,r.kt)("p",null,"The example below shows a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"echo")," policy which will return the data sent by APISIX as it is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -X PUT '127.0.0.1:8181/v1/policies/echo' \\\n    -H 'Content-Type: text/plain' \\\n    -d 'package echo\n\nallow = false\nreason = input'\n")),(0,r.kt)("p",null,"Now we can configure the Plugin on the Route to send APISIX data:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:9180/apisix/admin/routes/r1\' \\\n    -H \'X-API-KEY: <api-key>\' \\\n    -H \'Content-Type: application/json\' \\\n    -d \'{\n    "uri": "/*",\n    "plugins": {\n        "opa": {\n            "host": "http://127.0.0.1:8181",\n            "policy": "echo",\n            "with_route": true\n        }\n    },\n    "upstream": {\n        "nodes": {\n            "httpbin.org:80": 1\n        },\n        "type": "roundrobin"\n    }\n}\'\n')),(0,r.kt)("p",null,"Now if you make a request, you can see the data from the Route through the custom response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X GET 127.0.0.1:9080/get\n{\n    "type": "http",\n    "request": {\n        xxx\n    },\n    "var": {\n        xxx\n    },\n    "route": {\n        xxx\n    }\n}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"opa")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);