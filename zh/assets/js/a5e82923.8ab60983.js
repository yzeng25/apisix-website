"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[17520],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>m});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),i=t;return e&&(i="function"==typeof e?e(t):l(l({},t),e)),i},c=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(i),m=a,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return i?n.createElement(g,l(l({ref:t},c),{},{components:i})):n.createElement(g,l({ref:t},c))}));function m(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var u=2;u<r;u++)l[u]=i[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,i)}d.displayName="MDXCreateElement"},43953:(e,t,i)=>{i.r(t),i.d(t,{contentTitle:()=>l,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>s});var n=i(87462),a=(i(67294),i(3905));const r={title:"Rate Limiting",slug:"/getting-started/rate-limiting"},l=void 0,o={unversionedId:"getting-started/rate-limiting",id:"version-3.4/getting-started/rate-limiting",isDocsHomePage:!1,title:"Rate Limiting",description:"The Getting Started tutorials are contributed by API7.ai.",source:"@site/docs-apisix_versioned_docs/version-3.4/getting-started/rate-limiting.md",sourceDirName:"getting-started",slug:"/getting-started/rate-limiting",permalink:"/zh/docs/apisix/getting-started/rate-limiting",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/getting-started/rate-limiting.md",tags:[],version:"3.4",frontMatter:{title:"Rate Limiting",slug:"/getting-started/rate-limiting"},sidebar:"version-3.4/docs",previous:{title:"Key Authentication",permalink:"/zh/docs/apisix/getting-started/key-authentication"},next:{title:"APISIX \u5b89\u88c5\u6307\u5357",permalink:"/zh/docs/apisix/installation-guide"}},s=[{value:"Prerequisite(s)",id:"prerequisites",children:[]},{value:"Enable Rate Limiting",id:"enable-rate-limiting",children:[{value:"Validate",id:"validate",children:[]}]},{value:"Disable Rate Limiting",id:"disable-rate-limiting",children:[{value:"Validate",id:"validate-1",children:[]}]},{value:"More",id:"more",children:[]},{value:"What&#39;s Next",id:"whats-next",children:[]}],u={toc:s};function c(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/rate-limiting"})),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"The Getting Started tutorials are contributed by ",(0,a.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai"),".")),(0,a.kt)("p",null,"APISIX is a unified control point, managing the ingress and egress of APIs and microservices traffic. In addition to the legitimate client requests, these requests may also include unwanted traffic generated by web crawlers as well as cyber attacks, such as DDoS."),(0,a.kt)("p",null,"APISIX offers rate limiting capabilities to protect APIs and microservices by limiting the number of requests sent to upstream services in a given period of time. The count of requests is done efficiently in memory with low latency and high performance."),(0,a.kt)("br",null),(0,a.kt)("div",{style:{textAlign:"center"}},(0,a.kt)("img",{src:"https://static.apiseven.com/uploads/2023/02/20/l9G9Kq41_rate-limiting.png",alt:"Routes Diagram"})),(0,a.kt)("br",null),(0,a.kt)("p",null,"In this tutorial, you will enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin to set a rate limiting constraint on the incoming traffic."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisite(s)"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Complete the ",(0,a.kt)("a",{parentName:"li",href:"../README"},"Get APISIX")," step to install APISIX first."),(0,a.kt)("li",{parentName:"ol"},"Complete the ",(0,a.kt)("a",{parentName:"li",href:"../configure-routes#what-is-a-route"},"Configure Routes")," step.")),(0,a.kt)("h2",{id:"enable-rate-limiting"},"Enable Rate Limiting"),(0,a.kt)("p",null,"The following route ",(0,a.kt)("inlineCode",{parentName:"p"},"getting-started-ip")," is inherited from ",(0,a.kt)("a",{parentName:"p",href:"./configure-routes"},"Configure Routes"),". You only need to use the ",(0,a.kt)("inlineCode",{parentName:"p"},"PATCH")," method to add the ",(0,a.kt)("inlineCode",{parentName:"p"},"limit-count")," plugin to the route:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n  "plugins": {\n    "limit-count": {\n        "count": 2,\n        "time_window": 10,\n        "rejected_code": 503\n     }\n  }\n}\'\n')),(0,a.kt)("p",null,"You will receive an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTP/1.1 201 OK")," response if the plugin was added successfully. The above configuration limits the incoming requests to a maximum of 2 requests within 10 seconds."),(0,a.kt)("h3",{id:"validate"},"Validate"),(0,a.kt)("p",null,"Let's generate 100 simultaneous requests to see the rate limiting plugin in effect."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'count=$(seq 100 | xargs -i curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \\"200\\": $((100 - $count)), \\"503\\": $count\n')),(0,a.kt)("p",null,"The results are as expected: out of the 100 requests, 2 requests were sent successfully (status code ",(0,a.kt)("inlineCode",{parentName:"p"},"200"),") while the others were rejected (status code ",(0,a.kt)("inlineCode",{parentName:"p"},"503"),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'"200": 2, "503": 98\n')),(0,a.kt)("h2",{id:"disable-rate-limiting"},"Disable Rate Limiting"),(0,a.kt)("p",null,"Disable rate limiting by setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"_meta.disable")," parameter to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i "http://127.0.0.1:9180/apisix/admin/routes/getting-started-ip" -X PATCH -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "_meta": {\n                "disable": true\n            }\n        }\n    }\n}\'\n')),(0,a.kt)("h3",{id:"validate-1"},"Validate"),(0,a.kt)("p",null,"Let's generate 100 requests again to validate if it is disabled:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'count=$(seq 100 | xargs -i curl "http://127.0.0.1:9080/ip" -I -sL | grep "503" | wc -l); echo \\"200\\": $((100 - $count)), \\"503\\": $count\n')),(0,a.kt)("p",null,"The results below show that all of the requests were sent successfully:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'"200": 100, "503": 0\n')),(0,a.kt)("h2",{id:"more"},"More"),(0,a.kt)("p",null,"You can use the APISIX variables to configure fined matching rules of rate limiting, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"$host")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"$uri"),". In addition, APISIX also supports rate limiting at the cluster level using Redis."),(0,a.kt)("h2",{id:"whats-next"},"What's Next"),(0,a.kt)("p",null,"Congratulations! You have learned how to configure rate limiting and completed the Getting Started tutorials."),(0,a.kt)("p",null,"You can continue to explore other documentations to customize APISIX and meet your production needs."))}c.isMDXComponent=!0}}]);