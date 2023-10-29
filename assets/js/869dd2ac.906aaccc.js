"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9232],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var a=n(27378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),g=p(n),d=r,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||l;return n?a.createElement(m,o(o({ref:t},c),{},{components:n})):a.createElement(m,o({ref:t},c))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},42980:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(25773),r=(n(27378),n(35318));const l={title:"API Log Monitor with Apache APISIX & RocketMQ",authors:[{name:"Zhou Yu",title:"Author",url:"https://github.com/yuz10",image_url:"https://avatars.githubusercontent.com/u/14816818?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Apache RocketMQ","API","Log processing","Monitoring function"],description:"The rocketmq-logger log plugin added by the API gateway Apache APISIX can help you connect with the RocketMQ cluster more conveniently when using APISIX.",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/RocketMQy.png"},o=void 0,i={permalink:"/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin",source:"@site/blog/2021/12/08/apisix-integrate-rocketmq-logger-plugin.md",title:"API Log Monitor with Apache APISIX & RocketMQ",description:"The rocketmq-logger log plugin added by the API gateway Apache APISIX can help you connect with the RocketMQ cluster more conveniently when using APISIX.",date:"2021-12-08T00:00:00.000Z",formattedDate:"December 8, 2021",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:3.895,truncated:!0,authors:[{name:"Zhou Yu",title:"Author",url:"https://github.com/yuz10",image_url:"https://avatars.githubusercontent.com/u/14816818?v=4",imageURL:"https://avatars.githubusercontent.com/u/14816818?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"API Gateway APISIX Integrates Keycloak for Authentication",permalink:"/blog/2021/12/10/integrate-keycloak-auth-in-apisix"},nextItem:{title:"Apache APISIX Integrates with SkyWalking for Log Processing",permalink:"/blog/2021/12/07/apisix-integrate-skywalking-plugin"}},s={authorsImageUrls:[void 0,void 0]},p=[{value:"Plug-in Introduction",id:"plug-in-introduction",children:[],level:2},{value:"How to Use",id:"how-to-use",children:[{value:"Start RocketMQ",id:"start-rocketmq",children:[],level:3},{value:"Enable the plugin in Apache APISIX",id:"enable-the-plugin-in-apache-apisix",children:[{value:"Plugin metadata settings",id:"plugin-metadata-settings",children:[],level:4}],level:3}],level:2},{value:"Disable the Plugin",id:"disable-the-plugin",children:[],level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"This article will introduce the latest integration of Apache APISIX and Apache RocketMQ rocketmq-logger plugin features and use. With this plugin, you can connect to the RocketMQ cluster more easily when using Apache APISIX.")),(0,r.kt)("p",null,"Since Apache RocketMQ came to the global developers' attention in 2016, it has grown to become the core data base of the technology middle office in multiple fields such as e-commerce, finance, education, and technology."),(0,r.kt)("p",null,"According to incomplete statistics, more than 70% of domestic users (including top 100 enterprises in various fields such as finance, insurance, wealth and brokerage) have deployed Apache RocketMQ at scale on their core application links, including the top 5 global cloud vendors have also launched cloud product services about Apache RocketMQ."),(0,r.kt)("p",null,"In addition to regular applications for core business message processing, a large number of companies are using Apache RocketMQ for log processing and analysis."),(0,r.kt)("h2",{id:"plug-in-introduction"},"Plug-in Introduction"),(0,r.kt)("p",null,"To meet the needs of enterprise users for log processing, Apache APISIX has released ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger"),", a logging plugin based on Apache RocketMQ that supports pushing API interface request logs to RocketMQ clusters as JSON."),(0,r.kt)("p",null,"The plugin uses the TCP protocol natively supported by RocketMQ, and achieves high concurrency and high performance access through the non-blocking TCP socket API provided by OpenResty."),(0,r.kt)("p",null,"Also, the API log format sent using the ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," plugin is the same as other logging plugins, with support for bulk logging, custom log formats, retry support, and other features."),(0,r.kt)("p",null,"In addition, the plug-in also supports TLS encrypted transmission, as well as configuring AK, SK authentication to access Apache RocketMQ, to meet the needs of users for data security."),(0,r.kt)("h2",{id:"how-to-use"},"How to Use"),(0,r.kt)("h3",{id:"start-rocketmq"},"Start RocketMQ"),(0,r.kt)("p",null,"Start RocketMQ locally with the following command, for details refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://rocketmq.apache.org/docs/quick-start/"},"official documentation"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"wget https://dlcdn.apache.org/rocketmq/4.9.2/rocketmq-all-4.9.2-bin-release.zip\n\nunzip rocketmq-all-4.9.2-bin-release.zip\n\ncd rocketmq-4.9.2/\n\nnohup sh bin/mqnamesrv &\n\nnohup sh bin/mqbroker -n 127.0.0.1:9876 -c conf/broker.conf &\n")),(0,r.kt)("h3",{id:"enable-the-plugin-in-apache-apisix"},"Enable the plugin in Apache APISIX"),(0,r.kt)("p",null,"Enabling the ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," plugin for a given route in a production environment requires only a single command."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n       "rocketmq-logger": {\n           "nameserver_list" : [ "127.0.0.1:9876" ],\n           "topic" : "test",\n       }\n    },\n    "upstream": {\n       "nodes": {\n           "127.0.0.1:1980": 1\n       },\n       "type": "roundrobin"\n    },\n    "uri": "/hello"\n}\'\n')),(0,r.kt)("p",null,"When the ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," plugin is enabled, any request to the endpoint ",(0,r.kt)("inlineCode",{parentName:"p"},"URI/hello")," will push the log to Apache RocketMQ."),(0,r.kt)("p",null,"Details of the specific supported parameters can be found in the following table."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"nameserver_list"),(0,r.kt)("td",{parentName:"tr",align:null},"object"),(0,r.kt)("td",{parentName:"tr",align:null},"Nameserver list of rocketmq to be pushed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"topic"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The topic to be pushed.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The keys that sent the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tag"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"The tags that sent the message.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"timeout"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"The timeout for sending data.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to enable TLS encryption.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"access_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"An empty access key, string certified by ACL indicates that ACL is not enabled.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"ACL certified secret key.")))),(0,r.kt)("h4",{id:"plugin-metadata-settings"},"Plugin metadata settings"),(0,r.kt)("p",null,"Of course, if you do not want to use the default log format during use, you can also set the metadata for the plugin."),(0,r.kt)("p",null,"The first thing you can do is to adjust the relevant log format in the form of a template."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Default Value"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"log_format"),(0,r.kt)("td",{parentName:"tr",align:null},'{"host": "$host", "@timestamp": "$time_iso8601", "client_ip": "$remote_addr"}'),(0,r.kt)("td",{parentName:"tr",align:null},"Declare the log format as a key-value pair in JSON format. For the value section, only strings are supported. If it starts with ",(0,r.kt)("inlineCode",{parentName:"td"},"$"),", it indicates that you want to get the ",(0,r.kt)("strong",{parentName:"td"},"APISIX")," variable or ",(0,r.kt)("a",{parentName:"td",href:"http://nginx.org/en/docs/varindex.html"},"Nginx built-in variable"),". In particular, ",(0,r.kt)("strong",{parentName:"td"},"this setting takes effect globally"),", which means that when log_format is specified, it will take effect on all Route or Service bound to http-logger.")))),(0,r.kt)("p",null,"Once the log format is adjusted, you need to send a request to the ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/admin/plugin_metadata")," endpoint to update the metadata, as described in the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/plugin_metadata/rocketmq-logger -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "log_format": {\n        "host": "$host",\n        "@timestamp": "$time_iso8601",\n        "client_ip": "$remote_addr"\n    }\n}\'\n')),(0,r.kt)("h2",{id:"disable-the-plugin"},"Disable the Plugin"),(0,r.kt)("p",null,"If you no longer use the plugin, you can disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"rocketmq-logger")," plugin by removing the appropriate JSON configuration from the plugin configuration. This process does not require a restart of the service and will take effect immediately by entering the code below."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);