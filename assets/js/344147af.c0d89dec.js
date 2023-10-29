"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9329],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>g});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),s=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=s(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=s(n),g=a,d=m["".concat(p,".").concat(g)]||m[g]||u[g]||i;return n?o.createElement(d,r(r({ref:t},c),{},{components:n})):o.createElement(d,r({ref:t},c))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<i;s++)r[s]=n[s];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},96511:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var o=n(25773),a=(n(27378),n(35318));const i={title:"Kong-To-APISIX Migration Tool",slug:"2021/08/05/kong-to-apisix",author:"\u5434\u8212\u65f8",authorURL:"https://github.com/Yiyiyimu",authorImageURL:"https://avatars.githubusercontent.com/u/34589752?v=4",keywords:["APISIX","Kong","Migration Tool","API Gateway"],description:"You can use the Kong-To-APISIX migration tool to migrate Kong's configuration to the cloud-native API gateway Apache APISIX with one click.",tags:["Ecosystem"]},r=void 0,l={permalink:"/blog/2021/08/05/kong-to-apisix",source:"@site/blog/2021/08/05/Kong-to-APISIX.md",title:"Kong-To-APISIX Migration Tool",description:"You can use the Kong-To-APISIX migration tool to migrate Kong's configuration to the cloud-native API gateway Apache APISIX with one click.",date:"2021-08-05T00:00:00.000Z",formattedDate:"August 5, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:3.315,truncated:!0,authors:[{name:"\u5434\u8212\u65f8",url:"https://github.com/Yiyiyimu",imageURL:"https://avatars.githubusercontent.com/u/34589752?v=4"}],prevItem:{title:"How to Improve the Observability of Nginx with Apache APISX",permalink:"/blog/2021/08/06/using-apache-apisix-to-improve-the-observability-of-nginx"},nextItem:{title:"Release Apache APISIX 2.8.0",permalink:"/blog/2021/07/28/release-apache-apisix-2.8"}},p={authorsImageUrls:[void 0]},s=[{value:"What is Kong-To-APISIX",id:"what-is-kong-to-apisix",children:[],level:2},{value:"How to migrate configuration",id:"how-to-migrate-configuration",children:[],level:2},{value:"Demo Test",id:"demo-test",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[],level:2}],c={toc:s};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX is a production-ready open source seven-layer full traffic processing platform that serves as an API gateway for business entry traffic with high performance, low latency, official dashboard support, and over fifty plugins. If you are using Kong and are interested in APISIX but struggle to get started, try our just open source migration tool Kong-To-APISIX to help you migrate smoothly with one click.")),(0,a.kt)("p",null,"Apache APISIX is a production-ready open source seven-layer full traffic processing platform that serves as an API gateway for business entry traffic with high performance, low latency, official dashboard support, and over fifty plugins. If you are using Kong and are interested in APISIX but struggle to get started, try our just open source migration tool Kong-To-APISIX to help you migrate smoothly with one click."),(0,a.kt)("h2",{id:"what-is-kong-to-apisix"},"What is Kong-To-APISIX"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/kong-to-apisix"},"Kong-To-APISIX")," leverages the declarative configuration files of Kong and APISIX to migrate configuration data, and adapts to the architecture and functionality of both sides. Currently, we support the migration of configuration data for Route, Service, Upstream, Target, Consumer and three plugins Rate Limiting, Proxy Caching and Key Authentication on one side of Kong, and we have completed a minimal demo using Kong\u2019s Getting Started Guide as an example . We have completed a minimal demo."),(0,a.kt)("h2",{id:"how-to-migrate-configuration"},"How to migrate configuration"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"To export a Kong declarative configuration file using Deck, refer to the following steps: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.konghq.com/deck/1.7.x/guides/backup-restore/"},"Kong Official Document: Backup and Restore of Kong\u2019s Configuration"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Download the repository and run the migration tool, which will generate the declarative configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.yaml")," to be used."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/api7/kong-to-apisix\n\ncd kong-to-apisix\n\nmake build\n\n./bin/kong-to-apisix migrate --input kong.yaml --output apisix.yaml\n\n# migrate succeed\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.yaml")," to configure APISIX, refer to ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/deployment-modes/#standalone"},"Apache APISIX Official Document: Stand-alone mode"),"."))),(0,a.kt)("h2",{id:"demo-test"},"Demo Test"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Make sure docker is up and running, deploy the test environment, and use docker-compose to run APISIX and Kong."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"git clone https://github.com/apache/apisix-docker\n\ncd kong-to-apisix\n\n./tools/setup.sh\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add configuration to Kong and test it according to Kong's Getting Started Guide."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},"Expose services via Service and Route for routing and forwarding"),(0,a.kt)("li",{parentName:"ol"},"Set up Rate Limiting and Proxy Caching plugins for flow limiting caching"),(0,a.kt)("li",{parentName:"ol"},"Set up Key Authentication plugin for authentication"),(0,a.kt)("li",{parentName:"ol"},"Set up load balancing via Upstream and Target"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Export Kong's declarative configuration file to ",(0,a.kt)("inlineCode",{parentName:"p"},"kong.yaml"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"go run ./cmd/dumpkong/main.go\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Run the migration tool, import ",(0,a.kt)("inlineCode",{parentName:"p"},"kong.yaml")," and generate the APISIX configuration file ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.yaml")," to docker volumes."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"export EXPORT_PATH=./repos/apisix-docker/example/apisix_conf\ngo run ./cmd/kong-to-apisix/main.go\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test whether the migrated routes, load balancing, plugins, etc. are working properly on Apache APISIX side."),(0,a.kt)("ol",{parentName:"li"},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test key auth plugin."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -k -i -m 20 -o /dev/null -s -w %{http_code} http://127.0.0.1:9080/mock\n# output: 401\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test proxy cache plugin."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# access for the first time\ncurl -k -I -s  -o /dev/null http://127.0.0.1:9080/mock -H "apikey: apikey" -H "Host: mockbin.org"\n# see if got cached\ncurl -I -s -X GET http://127.0.0.1:9080/mock -H "apikey: apikey" -H "Host: mockbin.org"\n# output:\n#   HTTP/1.1 200 OK\n#   ...\n#   Apisix-Cache-Status: HIT\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test limit count plugin."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'for i in {1..5}; do\n   curl -s -o /dev/null -X GET http://127.0.0.1:9080/mock -H "apikey: apikey" -H "Host: mockbin.org"\ndone\ncurl -k -i -m 20 -o /dev/null -s -w %{http_code} http://127.0.0.1:9080/mock -H "apikey: apikey" -H "Host: mockbin.org"\n# output: 429\n'))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test load balance."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'httpbin_num=0\nmockbin_num=0for i in {1..8}; do\n   body=$(curl -k -i -s http://127.0.0.1:9080/mock -H "apikey: apikey" -H "Host: mockbin.org")\n   if [[ $body == *"httpbin"* ]]; then\nhttpbin_num=$((httpbin_num+1))\n   elif [[ $body == *"mockbin"* ]]; then\n      mockbin_num=$((mockbin_num+1))\n   fi\n   sleep 1.5done\necho "httpbin number: "${httpbin_num}", mockbin number: "${mockbin_num}\n# output:\n#   httpbin number: 6, mockbin number: 2\n')))))),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Subsequent development plans for the migration tool are presented in the Roadmap on Kong-To-APISIX's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/kong-to-apisixc"},"GitHub repository"),". Feel free to test and use Kong-To-APISIX, and discuss any questions you may have in the Issues section of the repository. Anyone who is interested in this project is welcome to contribute to it!"))}u.isMDXComponent=!0}}]);