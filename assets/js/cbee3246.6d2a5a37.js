"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66513],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=a,h=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return n?r.createElement(h,s(s({ref:t},p),{},{components:n})):r.createElement(h,s({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=u;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9750:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const i={title:"Install Ingress APISIX on ACK"},s=void 0,l={unversionedId:"deployments/ack",id:"version-1.2.0/deployments/ack",isDocsHomePage:!1,title:"Install Ingress APISIX on ACK",description:"This document explains how to install Ingress APISIX on ali-cloud ACK.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.2.0/deployments/ack.md",sourceDirName:"deployments",slug:"/deployments/ack",permalink:"/docs/ingress-controller/1.2.0/deployments/ack",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.2.0/docs/en/latest/deployments/ack.md",tags:[],version:"1.2.0",frontMatter:{title:"Install Ingress APISIX on ACK"},sidebar:"version-1.2.0/docs",previous:{title:"Proxy the httpbin service",permalink:"/docs/ingress-controller/1.2.0/practices/proxy-the-httpbin-service"},next:{title:"Install Ingress APISIX on Amazon EKS",permalink:"/docs/ingress-controller/1.2.0/deployments/aws"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Install APISIX and apisix-ingress-controller",id:"install-apisix-and-apisix-ingress-controller",children:[]}],c={toc:o};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"This document explains how to install Ingress APISIX on ",(0,a.kt)("a",{parentName:"p",href:"https://www.aliyun.com/product/kubernetes"},"ali-cloud ACK"),"."),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create an ACK Service on ali-cloud."),(0,a.kt)("li",{parentName:"ul"},"Download the kube config for your ACK, follow the ",(0,a.kt)("a",{parentName:"li",href:"https://www.alibabacloud.com/help/zh/doc-detail/86378.html"},"introduction"),"."),(0,a.kt)("li",{parentName:"ul"},"Install ",(0,a.kt)("a",{parentName:"li",href:"https://helm.sh/"},"Helm"),"."),(0,a.kt)("li",{parentName:"ul"},"Clone ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Apache APISIX Charts"),"."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"Make sure your target namespace exists"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," operations thorough this document will be executed in namespace ",(0,a.kt)("inlineCode",{parentName:"li"},"ingress-apisix"),".")),(0,a.kt)("h2",{id:"install-apisix-and-apisix-ingress-controller"},"Install APISIX and apisix-ingress-controller"),(0,a.kt)("p",null,"As the data plane of apisix-ingress-controller, ",(0,a.kt)("a",{parentName:"p",href:"http://apisix.apache.org/"},"Apache APISIX")," can be deployed at the same time using Helm chart."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'cd /path/to/apisix-helm-chart\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\nkubectl create ns ingress-apisix\nhelm install apisix charts/apisix \\\n  --set gateway.type=LoadBalancer \\\n  --set ingress-controller.enabled=true \\\n  --set etcd.persistence.storageClass="alicloud-disk-ssd" \\\n  --set etcd.persistence.size="20Gi" \\\n  --namespace ingress-apisix\nkubectl get service --namespace ingress-apisix\n')),(0,a.kt)("p",null,"Five Service resources were created."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-gateway"),", which processes the real traffic;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-admin"),", which acts as the control plane to process all the configuration changes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-ingress-controller"),", which exposes apisix-ingress-controller's metrics."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"apisix-etcd-headless")," for etcd service and internal communication.")),(0,a.kt)("p",null,"The gateway service type is set to ",(0,a.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," (See ",(0,a.kt)("a",{parentName:"p",href:"https://www.alibabacloud.com/help/doc-detail/182218.htm"},"Access services through SLB")," for more details), so that clients can access Apache APISIX through a load balancer. You can find the load balancer ip by running:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service apisix-gateway --namespace ingress-apisix -o jsonpath='{.status.loadBalancer.ingress[].ip}'\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ACK")," PV require min_size is ",(0,a.kt)("inlineCode",{parentName:"p"},"20Gi"),",cluster with ",(0,a.kt)("inlineCode",{parentName:"p"},"flexVolume")," component select ",(0,a.kt)("inlineCode",{parentName:"p"},"alicloud-disk-ssd"),",if with ",(0,a.kt)("inlineCode",{parentName:"p"},"helm values.yml")," configure startup ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix"),",",(0,a.kt)("a",{parentName:"p",href:"https://hub.kubeapps.com/charts/bitnami/etcd"},"more helm etcd configure"),",configure format sample:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'etcd:\n  persistence:\n    storageClass: "alicloud-disk-ssd"\n    size: 20Gi\n')),(0,a.kt)("p",null,"Try to create some ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/concepts"},"resources")," to verify the running status. As a minimalist example, see ",(0,a.kt)("a",{parentName:"p",href:"/docs/ingress-controller/1.2.0/practices/proxy-the-httpbin-service"},"proxy-the-httpbin-service")," to learn how to apply resources to drive the apisix-ingress-controller."))}p.isMDXComponent=!0}}]);