"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52285],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),c=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(a),h=r,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||i;return a?n.createElement(m,o(o({ref:t},p),{},{components:a})):n.createElement(m,o({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},67415:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(87462),r=(a(67294),a(3905));const i={title:"Get APISIX",description:"This tutorial uses a script to quickly install Apache APISIX in your local environment and verify it through the Admin API."},o=void 0,s={unversionedId:"getting-started/README",id:"version-3.4/getting-started/README",isDocsHomePage:!1,title:"Get APISIX",description:"This tutorial uses a script to quickly install Apache APISIX in your local environment and verify it through the Admin API.",source:"@site/docs-apisix_versioned_docs/version-3.4/getting-started/README.md",sourceDirName:"getting-started",slug:"/getting-started/README",permalink:"/zh/docs/apisix/getting-started/README",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/getting-started/README.md",tags:[],version:"3.4",frontMatter:{title:"Get APISIX",description:"This tutorial uses a script to quickly install Apache APISIX in your local environment and verify it through the Admin API."},sidebar:"version-3.4/docs",next:{title:"Configure Routes",permalink:"/zh/docs/apisix/getting-started/configure-routes"}},l=[{value:"Prerequisite(s)",id:"prerequisites",children:[]},{value:"Get APISIX",id:"get-apisix",children:[]},{value:"Validate",id:"validate",children:[]},{value:"Next Steps",id:"next-steps",children:[]}],c={toc:l};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.api7.ai/apisix/getting-started/"})),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"The Getting Started tutorials are contributed by ",(0,r.kt)("a",{parentName:"p",href:"https://api7.ai/"},"API7.ai"),".")),(0,r.kt)("p",null,"Developed and donated by API7.ai, Apache APISIX is an open source, dynamic, scalable, and high-performance cloud native API gateway for all your APIs and microservices. It is a ",(0,r.kt)("a",{parentName:"p",href:"https://projects.apache.org/project.html?apisix"},"top-level project")," of the Apache Software Foundation."),(0,r.kt)("p",null,"You can use APISIX API Gateway as a traffic entrance to process all business data. It offers features including dynamic routing, dynamic upstream, dynamic certificates, A/B testing, canary release, blue-green deployment, limit rate, defense against malicious attacks, metrics, monitoring alarms, service observability, service governance, and more."),(0,r.kt)("p",null,"This tutorial uses a script to quickly install ",(0,r.kt)("a",{parentName:"p",href:"https://api7.ai/apisix"},"Apache APISIX")," in your local environment and verifies the installation through the Admin API."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisite(s)"),(0,r.kt)("p",null,"The quickstart script relies on several components:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.docker.com/get-docker/"},"Docker")," is used to install the containerized ",(0,r.kt)("strong",{parentName:"li"},"etcd")," and ",(0,r.kt)("strong",{parentName:"li"},"APISIX"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://curl.se/"},"curl")," is used to send requests to APISIX for validation.")),(0,r.kt)("h2",{id:"get-apisix"},"Get APISIX"),(0,r.kt)("div",{className:"admonition admonition-caution alert alert--warning"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",viewBox:"0 0 16 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M8.893 1.5c-.183-.31-.52-.5-.887-.5s-.703.19-.886.5L.138 13.499a.98.98 0 0 0 0 1.001c.193.31.53.501.886.501h13.964c.367 0 .704-.19.877-.5a1.03 1.03 0 0 0 .01-1.002L8.893 1.5zm.133 11.497H6.987v-2.003h2.039v2.003zm0-3.004H6.987V5.987h2.039v4.006z"}))),"caution")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"To provide a better experience in this tutorial, the authorization of Admin API is switched off by default. Please turn on the authorization of Admin API in the production environment."))),(0,r.kt)("p",null,"APISIX can be easily installed and started with the quickstart script:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -sL https://run.api7.ai/apisix/quickstart | sh\n")),(0,r.kt)("p",null,"The script should start two Docker containers, ",(0,r.kt)("em",{parentName:"p"},"apisix-quickstart")," and ",(0,r.kt)("em",{parentName:"p"},"etcd"),". APISIX uses etcd to save and synchronize configurations. Both the etcd and the APISIX use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/network/host/"},(0,r.kt)("strong",{parentName:"a"},"host"))," Docker network mode. That is, the APISIX can be accessed from local."),(0,r.kt)("p",null,"You will see the following message once APISIX is ready:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 APISIX is ready!\n")),(0,r.kt)("h2",{id:"validate"},"Validate"),(0,r.kt)("p",null,"Once APISIX is running, you can use curl to interact with it. Send a simple HTTP request to validate if APISIX is working properly:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl "http://127.0.0.1:9080" --head | grep Server\n')),(0,r.kt)("p",null,"If everything is ok, you will get the following response:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"Server: APISIX/Version\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Version")," refers to the version of APISIX that you have installed. For example, ",(0,r.kt)("inlineCode",{parentName:"p"},"APISIX/3.3.0"),"."),(0,r.kt)("p",null,"You now have APISIX installed and running successfully!\u200b"),(0,r.kt)("h2",{id:"next-steps"},"Next Steps"),(0,r.kt)("p",null,"The following tutorial is based on the working APISIX, please keep everything running and move on to the next step."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/getting-started/configure-routes"},"Configure Routes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/getting-started/load-balancing"},"Load Balancing")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/getting-started/rate-limiting"},"Rate Limiting")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/zh/docs/apisix/getting-started/key-authentication"},"Key Authentication"))))}p.isMDXComponent=!0}}]);