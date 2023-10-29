"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[70225],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=u(t),m=a,f=d["".concat(s,".").concat(m)]||d[m]||c[m]||i;return t?r.createElement(f,l(l({ref:n},p),{},{components:t})):r.createElement(f,l({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<i;u++)l[u]=t[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2142:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=t(87462),a=(t(67294),t(3905));const i={title:"consul"},l=void 0,o={unversionedId:"discovery/consul",id:"discovery/consul",isDocsHomePage:!1,title:"consul",description:"APACHE APISIX supports Consul as a service discovery",source:"@site/docs/apisix/discovery/consul.md",sourceDirName:"discovery",slug:"/discovery/consul",permalink:"/docs/apisix/next/discovery/consul",editUrl:"/edit#https://github.com/apache/apisix/edit/master/docs/en/latest/discovery/consul.md",tags:[],version:"current",frontMatter:{title:"consul"},sidebar:"docs",previous:{title:"DNS",permalink:"/docs/apisix/next/discovery/dns"},next:{title:"consul_kv",permalink:"/docs/apisix/next/discovery/consul_kv"}},s=[{value:"Summary",id:"summary",children:[]},{value:"Configuration for discovery client",id:"configuration-for-discovery-client",children:[{value:"Configuration for Consul",id:"configuration-for-consul",children:[]},{value:"Register Http API Services",id:"register-http-api-services",children:[]},{value:"Upstream setting",id:"upstream-setting",children:[]}]},{value:"Debugging API",id:"debugging-api",children:[{value:"Memory Dump API",id:"memory-dump-api",children:[]},{value:"Show Dump File API",id:"show-dump-file-api",children:[]}]}],u={toc:s};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"summary"},"Summary"),(0,a.kt)("p",null,"APACHE APISIX supports Consul as a service discovery"),(0,a.kt)("h2",{id:"configuration-for-discovery-client"},"Configuration for discovery client"),(0,a.kt)("h3",{id:"configuration-for-consul"},"Configuration for Consul"),(0,a.kt)("p",null,"First of all, we need to add following configuration in ",(0,a.kt)("inlineCode",{parentName:"p"},"conf/config.yaml")," :"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul:\n    servers:                      # make sure service name is unique in these consul servers\n      - "http://127.0.0.1:8500"   # `http://127.0.0.1:8500` and `http://127.0.0.1:8600` are different clusters\n      - "http://127.0.0.1:8600"   # `consul` service is default skip service\n    token: "..."                  # if your consul cluster has enabled acl access control, you need to specify the token\n    skip_services:                # if you need to skip special services\n      - "service_a"\n    timeout:\n      connect: 1000               # default 2000 ms\n      read: 1000                  # default 2000 ms\n      wait: 60                    # default 60 sec\n    weight: 1                     # default 1\n    fetch_interval: 5             # default 3 sec, only take effect for keepalive: false way\n    keepalive: true               # default true, use the long pull way to query consul servers\n    default_service:              # you can define default service when missing hit\n      host: "127.0.0.1"\n      port: 20999\n      metadata:\n        fail_timeout: 1           # default 1 ms\n        weight: 1                 # default 1\n        max_fails: 1              # default 1\n    dump:                         # if you need, when registered nodes updated can dump into file\n       path: "logs/consul.dump"\n       expire: 2592000            # unit sec, here is 30 day\n')),(0,a.kt)("p",null,"And you can config it in short by default value:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  consul:\n    servers:\n      - "http://127.0.0.1:8500"\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"keepalive")," has two optional values:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"true"),", default and recommend value, use the long pull way to query consul servers"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"false"),", not recommend, it would use the short pull way to query consul servers, then you can set the ",(0,a.kt)("inlineCode",{parentName:"li"},"fetch_interval")," for fetch interval")),(0,a.kt)("h4",{id:"dump-data"},"Dump Data"),(0,a.kt)("p",null,"When we need reload ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix")," online, as the ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," module maybe loads data from CONSUL slower than load routes from ETCD, and would get the log at the moment before load successfully from consul:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," http_access_phase(): failed to set upstream: no valid upstream node\n")),(0,a.kt)("p",null,"So, we import the ",(0,a.kt)("inlineCode",{parentName:"p"},"dump")," function for ",(0,a.kt)("inlineCode",{parentName:"p"},"consul")," module. When reload, would load the dump file before from consul; when the registered nodes in consul been updated, would dump the upstream nodes into file automatically."),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"dump")," has three optional values now:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"path"),", the dump file save path",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"support relative path, eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"logs/consul.dump")),(0,a.kt)("li",{parentName:"ul"},"support absolute path, eg: ",(0,a.kt)("inlineCode",{parentName:"li"},"/tmp/consul.dump")),(0,a.kt)("li",{parentName:"ul"},"make sure the dump file's parent path exist"),(0,a.kt)("li",{parentName:"ul"},"make sure the ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix")," has the dump file's read-write access permission,eg: add below config in ",(0,a.kt)("inlineCode",{parentName:"li"},"conf/config.yaml"))))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"nginx_config:                     # config for render the template to generate nginx.conf\n  user: root                     # specifies the execution user of the worker process.\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"load_on_init"),", default value is ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"true"),", just try to load the data from the dump file before loading data from  consul when starting, does not care the dump file exists or not"),(0,a.kt)("li",{parentName:"ul"},"if ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", ignore loading data from the dump file"),(0,a.kt)("li",{parentName:"ul"},"Whether ",(0,a.kt)("inlineCode",{parentName:"li"},"true")," or ",(0,a.kt)("inlineCode",{parentName:"li"},"false"),", we don't need to prepare a dump file for apisix at anytime"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"expire"),", unit sec, avoiding load expired dump data when load",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"default ",(0,a.kt)("inlineCode",{parentName:"li"},"0"),", it is unexpired forever"),(0,a.kt)("li",{parentName:"ul"},"recommend 2592000, which is 30 days(equals 3600 ","*"," 24 ","*"," 30)")))),(0,a.kt)("h3",{id:"register-http-api-services"},"Register Http API Services"),(0,a.kt)("p",null,"Now, register nodes into consul:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -X PUT \'http://127.0.0.1:8500/v1/agent/service/register\' \\\n-d \'{\n  "ID": "service_a1",\n  "Name": "service_a",\n  "Tags": ["primary", "v1"],\n  "Address": "127.0.0.1",\n  "Port": 8000,\n  "Meta": {\n    "service_a_version": "4.0"\n  },\n  "EnableTagOverride": false,\n  "Weights": {\n    "Passing": 10,\n    "Warning": 1\n  }\n}\'\n\ncurl -X PUT \'http://127.0.0.1:8500/v1/agent/service/register\' \\\n-d \'{\n  "ID": "service_a1",\n  "Name": "service_a",\n  "Tags": ["primary", "v1"],\n  "Address": "127.0.0.1",\n  "Port": 8002,\n  "Meta": {\n    "service_a_version": "4.0"\n  },\n  "EnableTagOverride": false,\n  "Weights": {\n    "Passing": 10,\n    "Warning": 1\n  }\n}\'\n')),(0,a.kt)("p",null,"In some cases, same service name might exist in different consul servers.\nTo avoid confusion, use the full consul key url path as service name in practice."),(0,a.kt)("h3",{id:"upstream-setting"},"Upstream setting"),(0,a.kt)("h4",{id:"l7"},"L7"),(0,a.kt)("p",null,'Here is an example of routing a request with a URL of "/*" to a service which named "service_a" and use consul discovery client in the registry :'),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "uri": "/*",\n    "upstream": {\n        "service_name": "service_a",\n        "type": "roundrobin",\n        "discovery_type": "consul"\n    }\n}\'\n')),(0,a.kt)("p",null,"The format response as below:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "key": "/apisix/routes/1",\n  "value": {\n    "uri": "/*",\n    "priority": 0,\n    "id": "1",\n    "upstream": {\n      "scheme": "http",\n      "type": "roundrobin",\n      "hash_on": "vars",\n      "discovery_type": "consul",\n      "service_name": "service_a",\n      "pass_host": "pass"\n    },\n    "create_time": 1669267329,\n    "status": 1,\n    "update_time": 1669267329\n  }\n}\n')),(0,a.kt)("p",null,"You could find more usage in the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/t/discovery/consul.t")," file."),(0,a.kt)("h4",{id:"l4"},"L4"),(0,a.kt)("p",null,"Consul service discovery also supports use in L4, the configuration method is similar to L7."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n{\n    "remote_addr": "127.0.0.1",\n    "upstream": {\n      "scheme": "tcp",\n      "service_name": "service_a",\n      "type": "roundrobin",\n      "discovery_type": "consul"\n    }\n}\'\n')),(0,a.kt)("p",null,"You could find more usage in the ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix/t/discovery/stream/consul.t")," file."),(0,a.kt)("h2",{id:"debugging-api"},"Debugging API"),(0,a.kt)("p",null,"It also offers control api for debugging."),(0,a.kt)("h3",{id:"memory-dump-api"},"Memory Dump API"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul/dump\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# curl http://127.0.0.1:9090/v1/discovery/consul/dump | jq\n{\n  "config": {\n    "fetch_interval": 3,\n    "timeout": {\n      "wait": 60,\n      "connect": 6000,\n      "read": 6000\n    },\n    "weight": 1,\n    "servers": [\n      "http://172.19.5.30:8500",\n      "http://172.19.5.31:8500"\n    ],\n    "keepalive": true,\n    "default_service": {\n      "host": "172.19.5.11",\n      "port": 8899,\n      "metadata": {\n        "fail_timeout": 1,\n        "weight": 1,\n        "max_fails": 1\n      }\n    },\n    "skip_services": [\n      "service_d"\n    ]\n  },\n  "services": {\n    "service_a": [\n      {\n        "host": "127.0.0.1",\n        "port": 30513,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30514,\n        "weight": 1\n      }\n    ],\n    "service_b": [\n      {\n        "host": "172.19.5.51",\n        "port": 50051,\n        "weight": 1\n      }\n    ],\n    "service_c": [\n      {\n        "host": "127.0.0.1",\n        "port": 30511,\n        "weight": 1\n      },\n      {\n        "host": "127.0.0.1",\n        "port": 30512,\n        "weight": 1\n      }\n    ]\n  }\n}\n')),(0,a.kt)("h3",{id:"show-dump-file-api"},"Show Dump File API"),(0,a.kt)("p",null,"It offers another control api for dump file view now. Maybe would add more api for debugging in future."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"GET /v1/discovery/consul/show_dump_file\n")),(0,a.kt)("p",null,"For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9090/v1/discovery/consul/show_dump_file | jq\n{\n  "services": {\n    "service_a": [\n      {\n        "host": "172.19.5.12",\n        "port": 8000,\n        "weight": 120\n      },\n      {\n        "host": "172.19.5.13",\n        "port": 8000,\n        "weight": 120\n      }\n    ]\n  },\n  "expire": 0,\n  "last_update": 1615877468\n}\n')))}p.isMDXComponent=!0}}]);