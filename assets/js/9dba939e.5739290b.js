"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8087],{35318:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>d});var r=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),h=p(n),d=a,m=h["".concat(l,".").concat(d)]||h[d]||u[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},49568:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var r=n(25773),a=(n(27378),n(35318));const o={title:"Release Apache APISIX Ingress v1.5-rc1",author:"Jintao Zhang",authorURL:"https://github.com/tao12345666333",authorImageURL:"https://github.com/tao12345666333.png",keywords:["Apache APISIX","Ingress","Ingress controller","Gateway API","CRD"],description:"Apache APISIX Ingress Controller v1.5-rc1 is officially released. Bring API Version upgrades, Gateway API support, and updates to Ingress resources.",tags:["Community"]},i=void 0,s={permalink:"/blog/2022/08/05/apisix-ingress-1.5rc1-release",source:"@site/blog/2022/08/05/apisix-ingress-1.5rc1-release.md",title:"Release Apache APISIX Ingress v1.5-rc1",description:"Apache APISIX Ingress Controller v1.5-rc1 is officially released. Bring API Version upgrades, Gateway API support, and updates to Ingress resources.",date:"2022-08-05T00:00:00.000Z",formattedDate:"August 5, 2022",tags:[{label:"Community",permalink:"/blog/tags/community"}],readingTime:3.085,truncated:!0,authors:[{name:"Jintao Zhang",url:"https://github.com/tao12345666333",imageURL:"https://github.com/tao12345666333.png"}],prevItem:{title:"How is the Azure ARM architecture server perform?",permalink:"/blog/2022/08/08/apache-apisix-performance-test-in-azure"},nextItem:{title:"Why do you need Apache APISIX when you have NGINX and Kong?",permalink:"/blog/2022/07/30/why-we-need-apache-apisix"}},l={authorsImageUrls:[void 0]},p=[{value:"All CRD API versions upgraded to v2",id:"all-crd-api-versions-upgraded-to-v2",children:[],level:2},{value:"Basic support for Gateway API",id:"basic-support-for-gateway-api",children:[],level:2},{value:"Allow Ingress resources to bind arbitrary plugins",id:"allow-ingress-resources-to-bind-arbitrary-plugins",children:[],level:2},{value:"More details",id:"more-details",children:[],level:2}],c={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Apache APISIX Ingress Controller v1.5-rc1 is officially released. Bring API Version upgrades, Gateway API support, and updates to Ingress resources.")),(0,a.kt)("p",null,"Apache APISIX Ingress Controller v1.5-rc1 version is officially released. This release took about 7 months and 144 commits by 36 contributors. Among them, there are 22 new contributors, thank you for your contribution and support to this project!"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0805/ingress-1.png",alt:"Contributors"})),(0,a.kt)("p",null,"Next, let's take a look at the important updates in APISIX Ingress v1.5."),(0,a.kt)("h2",{id:"all-crd-api-versions-upgraded-to-v2"},"All CRD API versions upgraded to v2"),(0,a.kt)("p",null,"At the beginning of the APISIX Ingress project, there were only a few CRDs, and each resource was maintained by its own API version. This leads to a situation in which the API version used by each custom resource is different in the process of subsequent introduction of new resources or function iteration, which increases user learning costs."),(0,a.kt)("p",null,"So starting from the v1.3 version, we have proposed a ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/707"},"proposal")," that unifies the API version of all resources. After two version iterations, the v2 API version has been officially introduced, and v2beta3 is marked as deprecated, and v2beta3 will be completely removed until the v1.7 version."),(0,a.kt)("h2",{id:"basic-support-for-gateway-api"},"Basic support for Gateway API"),(0,a.kt)("p",null,"Gateway API can be said to be the next generation Ingress definition with richer performance capabilities. We have completed support for most of these resources in APISIX Ingress."),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This feature is currently experimental and not enabled by default."))),(0,a.kt)("p",null,"If you want to use the Gateway API in APISIX Ingress, you can enable this function by passing the ",(0,a.kt)("inlineCode",{parentName:"p"},"enable_gateway_ api: true")," configuration item in the controller's configuration file."),(0,a.kt)("p",null,"After installing the CRD of the Gateway API, you can complete the configuration of the Layer7 proxy by creating an ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPRoute")," resource. As follows:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: gateway.networking.k8s.io/v1alpha2\nkind: HTTPRoute\nmetadata:\n  name: httpbin-route\nspec:\n  hostnames: ["httpbin.local"]\n  rules:\n  - matches:\n    - path:\n        type: PathPrefix\n        value: /ip\n    backendRefs:\n    - name: httpbin\n      port: 80\n')),(0,a.kt)("p",null,"After this configuration takes effect, the client will be able to access the ",(0,a.kt)("inlineCode",{parentName:"p"},"80")," port of the backend ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin")," through ",(0,a.kt)("inlineCode",{parentName:"p"},"httpbin.local/ip"),"."),(0,a.kt)("p",null,"In addition, we plan to implement support for the remaining two resources, ",(0,a.kt)("inlineCode",{parentName:"p"},"TCP Route")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"UDP Route")," of the Gateway API in v1.6, and plan to introduce a conformance test for the Gateway API to ensure that our implementation matches the expectations of the Gateway API."),(0,a.kt)("h2",{id:"allow-ingress-resources-to-bind-arbitrary-plugins"},"Allow Ingress resources to bind arbitrary plugins"),(0,a.kt)("p",null,"In the Apache APISIX Ingress Controller project, Kubernetes native Ingress resources are supported for proxy configuration, but if you want to use APISIX's rich plugin capabilities in Ingress resources, you must add Annotation to complete it, and you need to implement the logic corresponding to Annotation."),(0,a.kt)("p",null,"This approach limits the plugin capabilities of the Ingress resource, and developing Annotaion separately for each plugin is a relatively expensive affair."),(0,a.kt)("p",null,"In the v1.5 release, we made it possible to enable the Ingress resource by adding a new Annotaion ",(0,a.kt)("inlineCode",{parentName:"p"},"k8s.apisix.apache.org/plugin-config-name"),", which allows to refer to any ",(0,a.kt)("inlineCode",{parentName:"p"},"Apisix Plugin Config")," resource Ingress resources are free to use the ability of any APISIX plugin."),(0,a.kt)("p",null,"This will greatly increase the ease of use of APISIX Ingress Controller, and will also reduce the cost for users to migrate from other Ingress controllers to APISIX Ingress Controller."),(0,a.kt)("h2",{id:"more-details"},"More details"),(0,a.kt)("p",null,"In addition to these features, many other features have been added to this release. for example:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A mechanism for synchronizing data from the Kubernetes cluster to the APISIX cluster on a regular basis to ensure the consistency of the data in the APISIX cluster and the configuration in the Kubernetes cluster;"),(0,a.kt)("li",{parentName:"ul"},"Add more authentication methods for ApisixConsumer resources;"),(0,a.kt)("li",{parentName:"ul"},"Compatibility with APISIX v2.15;"),(0,a.kt)("li",{parentName:"ul"},"Update all dependencies to the latest version to reduce security risks;")),(0,a.kt)("p",null,"For more specific release details, please refer to v1.5-rc1's ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/blob/v1.5.0/CHANGELOG.md#150-rc1"},"Changelog"),"."))}u.isMDXComponent=!0}}]);