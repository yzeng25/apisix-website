"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3138],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var l=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},o=Object.keys(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(l=0;l<o.length;l++)n=o[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),u=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=u(e.components);return l.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return n?l.createElement(g,r(r({ref:t},c),{},{components:n})):l.createElement(g,r({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,r[1]=i;for(var u=2;u<o;u++)r[u]=n[u];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},61022:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var l=n(25773),a=(n(27378),n(35318));const o={title:"How is Google Cloud Tau T2A performing? ",authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"}],keywords:["APISIX","API Gateway","Google Cloud","Google Cloud T2A","ARM64"],description:"This article mainly uses the cloud native API gateway Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/11/11/636dc26637f24.png"},r=void 0,i={permalink:"/blog/2022/07/22/how-is-google-cloud-tau-t2a-performing",source:"@site/blog/2022/07/22/how-is-google-cloud-tau-t2a-performing.md",title:"How is Google Cloud Tau T2A performing? ",description:"This article mainly uses the cloud native API gateway Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.",date:"2022-07-22T00:00:00.000Z",formattedDate:"July 22, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.2,truncated:!0,authors:[{name:"Shirui Zhao",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"}],prevItem:{title:"Release Apache APISIX 2.15",permalink:"/blog/2022/07/29/release-apache-apisix-2.15"},nextItem:{title:"Biweekly Report (Jul 1 - Jul 15)",permalink:"/blog/2022/07/21/weekly-report-0715"}},s={authorsImageUrls:[void 0]},u=[{value:"Background",id:"background",children:[],level:2},{value:"Preliminary Preparation",id:"preliminary-preparation",children:[],level:2},{value:"Install Apache APISIX",id:"install-apache-apisix",children:[],level:2},{value:"Google Cloud T2D vs Google Cloud T2A",id:"google-cloud-t2d-vs-google-cloud-t2a",children:[{value:"Scenario 1: Single upstream",id:"scenario-1-single-upstream",children:[],level:3},{value:"Scenario 2: Single upstream + two plugins",id:"scenario-2-single-upstream--two-plugins",children:[],level:3}],level:2},{value:"Summarize",id:"summarize",children:[],level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,l.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article mainly uses Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D.")),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"On July 13, Google Cloud released a preview of the first series of Arm-based Tau T2A VMs. The T2A VM is powered by an Ampere\xae Altra\xae Arm-based processor that Google claims has an attractive price and excellent single-threaded performance."),(0,a.kt)("p",null,"It is worth noting that Ampere\xae Altra\xae Arm is a cloud-native processor, and the Tau T2A virtual machine based on the Ampere\xae Altra\xae Arm processor can run scale-out cloud-native applications efficiently."),(0,a.kt)("p",null,"So how about the actual experience and performance? Let's take a cloud-native API Gateway as an example to show you the performance of the Google Cloud Tau T2A virtual machine. We chose Apache APISIX for testing on the Google Cloud T2A server environment."),(0,a.kt)("p",null,"Apache APISIX is a cloud-native, high-performance, scalable API gateway. Built on NGNIX+LuaJIT and etcd, APISIX has the characteristics of dynamic routing and plugin hot-reloading compared with traditional API gateways, which are especially suitable for API management in the cloud-native architecture."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0722/1.PNG",alt:"network error/APISIX Architecture.png"})),(0,a.kt)("h2",{id:"preliminary-preparation"},"Preliminary Preparation"),(0,a.kt)("p",null,"First, we need to start a T2A instance on Google Cloud, and choose Ubuntu 20.04 as the operating system."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0722/2.png",alt:"network error/Google Cloud T2A.png"})),(0,a.kt)("p",null,"Install Docker, so that we can install and deploy Apache APISIX in a containerized way."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo apt-get update && sudo apt-get install docker.io\n")),(0,a.kt)("h2",{id:"install-apache-apisix"},"Install Apache APISIX"),(0,a.kt)("p",null,"Apache APISIX uses etcd as the configuration center, so we need to start an etcd instance first."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name etcd \\\n    -p 2379:2379 \\\n    -e ETCD_UNSUPPORTED_ARCH=arm64 \\\n    -e ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \\\n    -e ETCD_ADVERTISE_CLIENT_URLS=http://0.0.0.0:2379 \\\n    rancher/coreos-etcd:v3.4.16-arm64\n")),(0,a.kt)("p",null,"Start an instance of Apache APISIX."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run --net=host -d apache/apisix:2.14.1-alpine\n")),(0,a.kt)("p",null,"Create route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080/apisix/admin/routes/1" \\\n-H "X-API-KEY: edd1c9f034335f136f87ad84b625c8f1" -X PUT -d \'\n{  \n    "uri": "/anything/*",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n              "httpbin.org:80": 1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"Do the following test."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"curl -i http://127.0.0.1:9080/anything/das\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n.....\n")),(0,a.kt)("h2",{id:"google-cloud-t2d-vs-google-cloud-t2a"},"Google Cloud T2D vs Google Cloud T2A"),(0,a.kt)("p",null,"From the previous steps, the installation and compatibility testing of Apache APISIX on Google Cloud Tau T2A can be successfully completed. So what is the actual performance of Google Cloud T2A? Next, we will use Apache APISIX to do a performance test on Google Cloud T2A and Google Cloud T2D to see their actual performance."),(0,a.kt)("p",null,"Google Cloud T2D is another model of Google Cloud Tau series, which is based on AMD x86 architecture, so the etcd installation steps are slightly different from above:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"sudo docker run -d --name etcd \\\n    -p 2379:2379 \\\n    -e ETCD_LISTEN_CLIENT_URLS=http://0.0.0.0:2379 \\\n    -e ALLOW_NONE_AUTHENTICATION=yes \\\n    -e ETCD_ADVERTISE_CLIENT_URLS=http://0.0.0.0:2379 \\\n    bitnami/etcd:3.4.16\n")),(0,a.kt)("p",null,"For simplicity, only one worker is enabled in this test with Apache APISIX, and the following performance test data are all run on a single-core CPU."),(0,a.kt)("h3",{id:"scenario-1-single-upstream"},"Scenario 1: Single upstream"),(0,a.kt)("p",null,"Using a single upstream without any plugins: it mainly tests the performance of APISIX in pure proxy back-to-origin mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# apisix: 1 worker + 1 upstream + no plugin\n\n# create route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,a.kt)("h3",{id:"scenario-2-single-upstream--two-plugins"},"Scenario 2: Single upstream + two plugins"),(0,a.kt)("p",null,"Using a single upstream with two plugins: it mainly tests the performance of APISIX when the two core performance-consuming plugins, ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"prometheus")," are enabled."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'# apisix: 1 worker + 1 upstream + 2 plugins (limit-count + prometheus)\n\n# create route\ncurl http://127.0.0.1:9080/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/hello",\n    "plugins": {\n        "limit-count": {\n            "count": 2000000000000,\n            "time_window": 60,\n            "rejected_code": 503,\n            "key": "remote_addr"\n        },\n        "prometheus": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980":1\n        }\n    }\n}\'\n')),(0,a.kt)("p",null,"In the above two scenarios, relevant tests and comparisons were carried out regarding the request QPS(Queries Per Second) and delay time. The result is as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"QPS comparison:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0722/3.png",alt:"network error/QPS comparison.png"})),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Latency comparison:")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0722/4.png",alt:"network error/Latency comparison.png"})),(0,a.kt)("table",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"  ")),(0,a.kt)("td",{colspan:"2"},"Single Upstream"),(0,a.kt)("td",{colspan:"2"},"Single Upstream+Two Plugins")),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"  ")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Google Cloud T2D")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Google Cloud T2A")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Google Cloud T2D")),(0,a.kt)("td",null,(0,a.kt)("b",null,"Google Cloud T2A"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"QPS(request/s)")),(0,a.kt)("td",null,(0,a.kt)("b",null,"12500")),(0,a.kt)("td",null,(0,a.kt)("b",null,"11300")),(0,a.kt)("td",null,(0,a.kt)("b",null,"10600")),(0,a.kt)("td",null,(0,a.kt)("b",null,"9900"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,(0,a.kt)("b",null,"Latency(ms)")),(0,a.kt)("td",null,(0,a.kt)("b",null,"1.26")),(0,a.kt)("td",null,(0,a.kt)("b",null,"1.39")),(0,a.kt)("td",null,(0,a.kt)("b",null,"1.45")),(0,a.kt)("td",null,(0,a.kt)("b",null,"1.60")))),(0,a.kt)("p",null,"It can also be seen from the above data that in network IO-intensive computing scenarios such as API Gateway, T2A still has a performance gap compared with T2D virtual machines of the same series. However, another good news is that the price of T2A is only 10% cheaper than that of T2D under the same configuration. When selecting the actual machine, users can make flexible decisions according to their business volume."),(0,a.kt)("h2",{id:"summarize"},"Summarize"),(0,a.kt)("p",null,"This article mainly uses Apache APISIX to compare the performance of Google Cloud T2A and Google Cloud T2D. It can be seen that in network IO-intensive computing scenarios such as API gateways, Google Cloud T2A is not so brilliant compared to T2D, but as the first attempt of Google Cloud VMs on the ARM architecture, I believe it will continue to evolve better."))}p.isMDXComponent=!0}}]);