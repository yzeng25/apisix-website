"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[64930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,f=m["".concat(s,".").concat(c)]||m[c]||d[c]||o;return n?a.createElement(f,l(l({ref:t},u),{},{components:n})):a.createElement(f,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1759:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var a=n(87462),r=(n(67294),n(3905));const o={title:"body-transformer",keywords:["Apache APISIX","API Gateway","Plugin","BODY TRANSFORMER","body-transformer"],description:"This document contains information about the Apache APISIX body-transformer Plugin."},l=void 0,i={unversionedId:"plugins/body-transformer",id:"version-3.4/plugins/body-transformer",isDocsHomePage:!1,title:"body-transformer",description:"This document contains information about the Apache APISIX body-transformer Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.4/plugins/body-transformer.md",sourceDirName:"plugins",slug:"/plugins/body-transformer",permalink:"/zh/docs/apisix/plugins/body-transformer",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/plugins/body-transformer.md",tags:[],version:"3.4",frontMatter:{title:"body-transformer",keywords:["Apache APISIX","API Gateway","Plugin","BODY TRANSFORMER","body-transformer"],description:"This document contains information about the Apache APISIX body-transformer Plugin."},sidebar:"version-3.4/docs",previous:{title:"degraphql",permalink:"/zh/docs/apisix/plugins/degraphql"},next:{title:"key-auth",permalink:"/zh/docs/apisix/plugins/key-auth"}},s=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Configuration description",id:"configuration-description",children:[]},{value:"Example",id:"example",children:[{value:"Run a test web service server",id:"run-a-test-web-service-server",children:[]},{value:"Test",id:"test",children:[]}]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"This plugin is used to transform the request and/or response body from one\nformat to another format, e.g. JSON to XML."),(0,r.kt)("p",null,"Use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"simple SOAP proxy"),(0,r.kt)("li",{parentName:"ul"},"generic template-based transform, e.g. JSON to JSON, JSON to HTML, XML to YAML")),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"request body transformation configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request.input_format")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"request body original format, if not specified, it would be determined from ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type")," header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"request.template")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"request body transformation template")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response")),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"response body transformation configuration")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response.input_format")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"response body original format, if not specified, it would be determined from ",(0,r.kt)("inlineCode",{parentName:"td"},"Content-Type")," header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"response.template")),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null},"response body transformation template")))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"You can enable the Plugin on a specific Route as shown below:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/test_ws \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST"],\n    "uri": "/ws",\n    "plugins": {\n        "body-transformer": {\n            "request": {\n                "template": "..."\n            },\n            "response": {\n                "template": "..."\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "localhost:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"configuration-description"},"Configuration description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"request")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"response")," correspond to configurations of request body and response body transformation perspectively."),(0,r.kt)("p",null,"Specify one of them, or both of them, to fit your need."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"request"),"/",(0,r.kt)("inlineCode",{parentName:"p"},"response"),":"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"input_format")," specifies the body original format:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"xml")," (",(0,r.kt)("inlineCode",{parentName:"li"},"text/xml"),")"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"json")," (",(0,r.kt)("inlineCode",{parentName:"li"},"application/json"),")"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"template")," specifies the ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/bungle/lua-resty-template"},"template")," text used by transformation.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Notes:")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"{{ ... }}")," in lua-resty-template will do html-escape, e.g. space character, so if it's not what you wish, use ",(0,r.kt)("inlineCode",{parentName:"p"},"{* ... *}")," instead."),(0,r.kt)("p",null,"If you do not specify ",(0,r.kt)("inlineCode",{parentName:"p"},"input_format")," and no ",(0,r.kt)("inlineCode",{parentName:"p"},"Content-Type")," header, or body is ",(0,r.kt)("inlineCode",{parentName:"p"},"nil"),", then this plugin will not parse the body before template rendering.\nIn any case, you could access body string via ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ _body }}"),"."),(0,r.kt)("p",null,"This is useful for below use cases:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"you wish to generate body from scratch based on Nginx/APISIX variables, even if the original body is ",(0,r.kt)("inlineCode",{parentName:"li"},"nil"),"."),(0,r.kt)("li",{parentName:"ul"},"you wish to parse the body string yourself in the template via other lua modules, e.g. parse protobuf.")),(0,r.kt)("p",null,"For example, parse YAML to JSON yourself:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'{%\n    local yaml = require("tinyyaml")\n    local body = yaml.parse(_body)\n%}\n{"foobar":"{{body.foobar.foo .. " " .. body.foobar.bar}}"}\n')),(0,r.kt)("p",null,"You must ensure ",(0,r.kt)("inlineCode",{parentName:"p"},"template")," is a valid JSON string, i.e. you need to take care of special characters escape, e.g. double quote.\nIf it's cumbersome to escape big text file or complex file, you could use encode your template text file in base64 format instead."),(0,r.kt)("p",null,"For example, you could use ",(0,r.kt)("inlineCode",{parentName:"p"},"base64")," command to encode your template text file:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'curl http://127.0.0.1:9180/apisix/admin/routes/test_ws \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST"],\n    "uri": "/ws",\n    "plugins": {\n        "body-transformer": {\n            "request": {\n                "template": "\'"$(base64 -w0 /path/to/my_template_file)"\'"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "localhost:8080": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"In ",(0,r.kt)("inlineCode",{parentName:"p"},"template"),", you can use below auxiliary functions to escape string to fit specific format:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_escape_json()")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_escape_xml()"))),(0,r.kt)("p",null,"Note that ",(0,r.kt)("inlineCode",{parentName:"p"},"_escape_json()")," would double quote the value of string type, so don't repeat double-quote in the template, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},'{"foobar":{*_escape_json(name)*}}'),"."),(0,r.kt)("p",null,"And, you can refer to ",(0,r.kt)("inlineCode",{parentName:"p"},"_ctx")," to access nginx request context, e.g. ",(0,r.kt)("inlineCode",{parentName:"p"},"{{ _ctx.var.status }}"),"."),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("p",null,"Let's take a simple SOAP proxy as example."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"from downstream to upstream, it transforms the request body from JSON to XML"),(0,r.kt)("li",{parentName:"ul"},"from upstream to downstream, it transforms the response body from XML to JSON",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"the response ",(0,r.kt)("inlineCode",{parentName:"li"},"template")," distinguishes the normal response from the fault response")))),(0,r.kt)("h3",{id:"run-a-test-web-service-server"},"Run a test web service server"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"cd /tmp\ngit clone https://github.com/spring-guides/gs-soap-service.git\ncd gs-soap-service\n./mvnw spring-boot:run\n")),(0,r.kt)("h3",{id:"test"},"Test"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},'req_template=$(cat <<EOF | awk \'{gsub(/"/,"\\\\\\"");};1\' | awk \'{$1=$1};1\' | tr -d \'\\r\\n\'\n<?xml version="1.0"?>\n<soap-env:Envelope xmlns:soap-env="http://schemas.xmlsoap.org/soap/envelope/">\n <soap-env:Body>\n  <ns0:getCountryRequest xmlns:ns0="http://spring.io/guides/gs-producing-web-service">\n   <ns0:name>{{_escape_xml(name)}}</ns0:name>\n  </ns0:getCountryRequest>\n </soap-env:Body>\n</soap-env:Envelope>\nEOF\n)\n\nrsp_template=$(cat <<EOF | awk \'{gsub(/"/,"\\\\\\"");};1\' | awk \'{$1=$1};1\' | tr -d \'\\r\\n\'\n{% if Envelope.Body.Fault == nil then %}\n{\n   "status":"{{_ctx.var.status}}",\n   "currency":"{{Envelope.Body.getCountryResponse.country.currency}}",\n   "population":{{Envelope.Body.getCountryResponse.country.population}},\n   "capital":"{{Envelope.Body.getCountryResponse.country.capital}}",\n   "name":"{{Envelope.Body.getCountryResponse.country.name}}"\n}\n{% else %}\n{\n   "message":{*_escape_json(Envelope.Body.Fault.faultstring[1])*},\n   "code":"{{Envelope.Body.Fault.faultcode}}"\n   {% if Envelope.Body.Fault.faultactor ~= nil then %}\n   , "actor":"{{Envelope.Body.Fault.faultactor}}"\n   {% end %}\n}\n{% end %}\nEOF\n)\n\ncurl http://127.0.0.1:9180/apisix/admin/routes/test_ws \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST"],\n    "uri": "/ws",\n    "plugins": {\n        "proxy-rewrite": {\n            "headers": {\n                "set": {\n                    "Accept-Encoding": "identity",\n                    "Content-Type": "text/xml"\n                }\n            }\n        },\n        "response-rewrite": {\n            "headers": {\n                "set": {\n                    "Content-Type": "application/json"\n                }\n            }\n        },\n        "body-transformer": {\n            "request": {\n                "template": "\'"$req_template"\'"\n            },\n            "response": {\n                "template": "\'"$rsp_template"\'"\n            }\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "localhost:8080": 1\n        }\n    }\n}\'\n\ncurl -s http://127.0.0.1:9080/ws -H \'content-type: application/json\' -X POST -d \'{"name": "Spain"}\' | jq\n{\n  "status": "200",\n  "currency": "EUR",\n  "population": 46704314,\n  "capital": "Madrid",\n  "name": "Spain"\n}\n\n# Fault response\ncurl -s http://127.0.0.1:9080/ws -H \'content-type: application/json\' -X POST -d \'{"name": "Spain"}\' | jq\n{\n  "message": "Your name is required.",\n  "code": "SOAP-ENV:Server"\n}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"body-transformer")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/test_ws \\\n    -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["POST"],\n    "uri": "/ws",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "localhost:8080": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);