"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8885],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var a=n(27378);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=i,g=h["".concat(l,".").concat(d)]||h[d]||c[d]||o;return n?a.createElement(g,r(r({ref:t},u),{},{components:n})):a.createElement(g,r({ref:t},u))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,r[1]=s;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},32690:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=n(25773),i=(n(27378),n(35318));const o={title:"Coming soon! Apache APISIX Integrate with Apache OpenWhisk",authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","API Gateway","Apache OpenWhisk","Serverless","Plugin"],description:"The `openwhisk` plugin is combined with the API Gateway Apache APISIX authentication plugin to achieve authentication and authorization functions.",tags:["Plugins","Ecosystem"],image:"https://static.apiseven.com/2022/blog/0818/plugins/openwhish.png"},r=void 0,s={permalink:"/blog/2021/12/24/apisix-integrate-openwhisk-plugin",source:"@site/blog/2021/12/24/apisix-integrate-openwhisk-plugin.md",title:"Coming soon! Apache APISIX Integrate with Apache OpenWhisk",description:"The `openwhisk` plugin is combined with the API Gateway Apache APISIX authentication plugin to achieve authentication and authorization functions.",date:"2021-12-24T00:00:00.000Z",formattedDate:"December 24, 2021",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"},{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:4.21,truncated:!0,authors:[{name:"Zeping Bai",title:"Author",url:"https://github.com/bzp2010",image_url:"https://avatars.githubusercontent.com/u/8078418?v=4",imageURL:"https://avatars.githubusercontent.com/u/8078418?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Apache APISIX Dashboard Unauthorized Access Vulnerability Announcement (CVE-2021-45232)",permalink:"/blog/2021/12/28/dashboard-cve-2021-45232"},nextItem:{title:"Apache APISIX integrates with Open Policy Agent",permalink:"/blog/2021/12/24/open-policy-agent"}},l={authorsImageUrls:[void 0,void 0]},p=[{value:"Project Introduction",id:"project-introduction",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache OpenWhisk",id:"apache-openwhisk",children:[],level:3}],level:2},{value:"Integration Principle",id:"integration-principle",children:[],level:2},{value:"How to use",id:"how-to-use",children:[{value:"Step 1: Set up Apache OpenWhisk test environment",id:"step-1-set-up-apache-openwhisk-test-environment",children:[],level:3},{value:"Step 2: Create a route and enable OpenWhisk plugin",id:"step-2-create-a-route-and-enable-openwhisk-plugin",children:[],level:3},{value:"Step 3: Testing the request",id:"step-3-testing-the-request",children:[],level:3},{value:"Step 4: Test complex responses",id:"step-4-test-complex-responses",children:[],level:3},{value:"Addendum: Turning off the plugin",id:"addendum-turning-off-the-plugin",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"This article introduces the feature prospect and usage steps of the ",(0,i.kt)("inlineCode",{parentName:"p"},"openwhisk")," plug-in, which is combined with a variety of identity authentication plug-ins provided by Apache APISIX to achieve authentication and authorization and other functions.")),(0,i.kt)("p",null,"In this article, we will introduce ",(0,i.kt)("inlineCode",{parentName:"p"},"openwhisk"),", a new plug-in for Apache APISIX, and show you how to integrate OpenWhisk service with Apache APISIX to enjoy the benefits of serverless computing with detailed steps. This plugin is expected to go live in Apache APISIX 2.12, so stay tuned!"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1640313816872-b2c018be-5433-4baf-ba6a-8330e160866a.png",alt:"APISIX&OpenWhisk"})),(0,i.kt)("h2",{id:"project-introduction"},"Project Introduction"),(0,i.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is a dynamic, real-time, high-performance API gateway that provides rich traffic management features such as load balancing, dynamic upstream, canary release, service fusion, authentication, observability, etc. Apache APISIX not only supports plug-in dynamic changes and hot-plugging, but also has many useful plug-ins."),(0,i.kt)("h3",{id:"apache-openwhisk"},"Apache OpenWhisk"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://openwhisk.apache.org/"},"Apache OpenWhisk")," is an open source distributed serverless platform that can respond to any scale of time by executing functions. It uses Docker containers to manage infrastructure, servers, and scale to help users build great and efficient applications."),(0,i.kt)("p",null,"In OpenWhisk developers can use multiple programming languages to write functions (called Actions) that will be dynamically dispatched and processed by OpenWhisk in response to events (via triggers) or external requests (via HTTP requests)."),(0,i.kt)("h2",{id:"integration-principle"},"Integration Principle"),(0,i.kt)("p",null,"Apache APISIX provides plug-in support for easy integration with Apache OpenWhisk. Users can define a route that includes a serverless plug-in and combine it with various authentication plug-ins provided by Apache APISIX to implement authentication and authorization functions."),(0,i.kt)("p",null,'The general principle of operation is as follows: users can use the openwhisk plugin to define a "dynamic upstream" in the route, and when the route matches a request, it will abort the request to the original upstream and send a request to the API Host endpoint of OpenWhisk.'),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"The request will contain the Namespace, Action, Service Token and raw HTTP request body data configured by the user for the plugin, and will return the response content obtained from OpenWhisk to the client.")),(0,i.kt)("h2",{id:"how-to-use"},"How to use"),(0,i.kt)("h3",{id:"step-1-set-up-apache-openwhisk-test-environment"},"Step 1: Set up Apache OpenWhisk test environment"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"First, you need to ensure that you are using a Linux system with Docker software installed on it. Execute the following command.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"docker run --rm -d \\\n  -h openwhisk --name openwhisk \\\n  -p 3233:3233 -p 3232:3232 \\\n  -v /var/run/docker.sock:/var/run/docker.sock \\\n  openwhisk/standalone:nightly\n\ndocker exec openwhisk waitready\n")),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Wait for the command execution to complete and the following will be output.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"ok: whisk auth set. Run 'wsk property get --auth' to see the new value.\nok: whisk API host set to http://openwhisk:3233\nok: updated action testme\nserver initializing...\nserver initializing...\n    \"ready\": true\nok: deleted action testme\n")),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Create the following file ",(0,i.kt)("inlineCode",{parentName:"li"},"test.js")," to be used as a test function.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'function main(args) {\n    return {\n        "hello": args.name || "",\n    };\n}\n')),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Register the above functions in OpenWhisk")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Set API Host and authentication information for the OpenWhisk CLI tool\uff0cyou can download from https://s.apache.org/openwhisk-cli-download\nwsk property set \\\n  --apihost 'http://localhost:3233' \\\n  --auth '23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP'\n\n# Create a test function\nwsk action create test test.js\n")),(0,i.kt)("h3",{id:"step-2-create-a-route-and-enable-openwhisk-plugin"},"Step 2: Create a route and enable OpenWhisk plugin"),(0,i.kt)("p",null,"Next we will create a route and add the openwhisk plugin to it. Execute the following command."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "openwhisk": {\n            "api_host": "http://localhost:3233",\n            "service_token": "23bc46b1-71f6-4ed5-8c54-816aa4f8c502:123zO3xZCLrMN6v2BKK1dXYFpXlPkccOFqm12CdAsMgRU4VrNZ9lyGVCGuMDGIwP",\n            "namespace": "guest",\n            "action": "test"\n        }\n    },\n    "uri": "/openwhisk"\n}\'\n')),(0,i.kt)("h3",{id:"step-3-testing-the-request"},"Step 3: Testing the request"),(0,i.kt)("p",null,"In the following we will use cURL for testing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},'# Request and send data using POST\ncurl http://127.0.0.1:9080/openwhisk -i -X POST -d \'{\n    "name": "world"\n}\'\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 17\nServer: APISIX/2.10.2\n\n{"hello":"world"}\n\n# Request using GET\ncurl http://127.0.0.1:9080/openwhisk -i\n\nHTTP/1.1 200 OK\nContent-Type: application/json\nContent-Length: 12\nServer: APISIX/2.10.2\n\n{"hello":""}\n')),(0,i.kt)("h3",{id:"step-4-test-complex-responses"},"Step 4: Test complex responses"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create and update the ",(0,i.kt)("inlineCode",{parentName:"li"},"test.js")," test function")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'function main(args) {\n    return {\n        "status": "403",\n        "headers": {\n            "test": "header"\n        },\n        "body": "A test body"\n    };\n}\n')),(0,i.kt)("ol",{start:2},(0,i.kt)("li",{parentName:"ol"},"Conducting test requests")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Request using GET\ncurl http://127.0.0.1:9080/openwhisk -i\n\nHTTP/1.1 403 FORBIDDEN\nContent-Type: application/json\nContent-Length: 12\ntest: header\nServer: APISIX/2.10.2\n\nA test body\n")),(0,i.kt)("h3",{id:"addendum-turning-off-the-plugin"},"Addendum: Turning off the plugin"),(0,i.kt)("p",null,"If you are done using the OpenWhisk plug-in, simply remove the OpenWhisk-related configuration from the route configuration and save it to close the OpenWhisk plug-in on the route. At this point you can open other Serverless-like plug-ins or add upstream and other subsequent operations."),(0,i.kt)("p",null,"Thanks to the dynamic advantage of Apache APISIX, the process of turning on and off plug-ins does not require restarting Apache APISIX, which is very convenient."),(0,i.kt)("h2",{id:"summary"},"Summary"),(0,i.kt)("p",null,"In this article, we have introduced the feature preview and usage steps of ",(0,i.kt)("inlineCode",{parentName:"p"},"openwhisk")," plugin. For more information about ",(0,i.kt)("inlineCode",{parentName:"p"},"openwhisk")," plugin description and full configuration list, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/plugins/openwhisk"},"official documentation"),"."),(0,i.kt)("p",null,"Currently, we are also developing other Serverless plugins to integrate with more cloud services. If you're interested in such integration projects, feel free to start a discussion in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," or communicate via the ",(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join/"},"mailing list"),"."))}c.isMDXComponent=!0}}]);