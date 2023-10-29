"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[56511],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var i=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=i.createContext({}),p=function(e){var t=i.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return i.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},h=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),h=p(n),m=r,d=h["".concat(l,".").concat(m)]||h[m]||u[m]||s;return n?i.createElement(d,a(a({ref:t},c),{},{components:n})):i.createElement(d,a({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=h;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,a[1]=o;for(var p=2;p<s;p++)a[p]=n[p];return i.createElement.apply(null,a)}return i.createElement.apply(null,n)}h.displayName="MDXCreateElement"},20329:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const s={title:"Install Ingress APISIX on Minikube"},a=void 0,o={unversionedId:"deployments/minikube",id:"version-0.6.0/deployments/minikube",isDocsHomePage:!1,title:"Install Ingress APISIX on Minikube",description:"This document explains how to install Ingress APISIX on Minikube.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.6.0/deployments/minikube.md",sourceDirName:"deployments",slug:"/deployments/minikube",permalink:"/zh/docs/ingress-controller/0.6.0/deployments/minikube",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v0.6.0/docs/zh/latest/deployments/minikube.md",tags:[],version:"0.6.0",frontMatter:{title:"Install Ingress APISIX on Minikube"},sidebar:"version-0.6.0/docs",previous:{title:"Install Ingress APISIX on KubeSphere",permalink:"/zh/docs/ingress-controller/0.6.0/deployments/kubesphere"},next:{title:"Install Ingress APISIX on Tencent TKE",permalink:"/zh/docs/ingress-controller/0.6.0/deployments/tke"}},l=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX",id:"install-apisix",children:[]},{value:"Install apisix-ingress-controller",id:"install-apisix-ingress-controller",children:[]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,r.kt)("a",{parentName:"p",href:"https://minikube.sigs.k8s.io/"},"Minikube"),"."),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://minikube.sigs.k8s.io/docs/start/"},"Minikube"),"."),(0,r.kt)("li",{parentName:"ul"},"Install ",(0,r.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,r.kt)("li",{parentName:"ul"},"Clone ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,r.kt)("li",{parentName:"ul"},"Make sure your target namespace exists, kubectl operations thorough this document will be executed in namespace ",(0,r.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,r.kt)("h2",{id:"install-apisix"},"Install APISIX"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," as the proxy plane of apisix-ingress-controller, should be deployed in advance."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo add apisix https://charts.apiseven.com\n# Use `helm search repo apisix` to search charts about apisix\nhelm repo update\nhelm install apisix apisix/apisix \\\n  --set allow.ipList="{0.0.0.0/0}" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,r.kt)("p",null,"Two Service resources were created, one is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-gateway"),", which processes the real traffic; another is ",(0,r.kt)("inlineCode",{parentName:"p"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,r.kt)("p",null,"One thing should be concerned that the ",(0,r.kt)("inlineCode",{parentName:"p"},"allow.ipList")," field should be customized according to the Pod CIRD configuration of Minikube, so that the apisix-ingress-controller instances can access the APISIX instances (resources pushing)."),(0,r.kt)("h2",{id:"install-apisix-ingress-controller"},"Install apisix-ingress-controller"),(0,r.kt)("p",null,"You can also install apisix-ingress-controller by Helm Charts, it's recommended to install it in the same namespace with Apache APISIX."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"cd /path/to/apisix-helm-chart\n# install apisix-ingress-controller\nhelm install apisix-ingress-controller apisix/apisix-ingress-controller \\\n  --set image.tag=dev \\\n  --set config.apisix.baseURL=http://apisix-admin:9180/apisix/admin \\\n  --set config.apisix.adminKey=edd1c9f034335f136f87ad84b625c8f1 \\\n  --namespace ingress-apisix\n")),(0,r.kt)("p",null,"Change the ",(0,r.kt)("inlineCode",{parentName:"p"},"image.tag")," to the apisix-ingress-controller version that you desire. You have to wait for while until the corresponding pods are running."),(0,r.kt)("p",null,"Now try to create some ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running of Ingress APISIX. As a minimalist example, see ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/ingress-controller/0.6.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}c.isMDXComponent=!0}}]);