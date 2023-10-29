"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[92728],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return n?r.createElement(g,s(s({ref:t},p),{},{components:n})):r.createElement(g,s({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var l=2;l<i;l++)s[l]=n[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},48347:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const i={title:"Composite Architecture"},s=void 0,o={unversionedId:"composite",id:"composite",isDocsHomePage:!1,title:"Composite Architecture",description:"This feature is experimental",source:"@site/docs/apisix-ingress-controller/composite.md",sourceDirName:".",slug:"/composite",permalink:"/docs/ingress-controller/next/composite",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/master/docs/en/latest/composite.md",tags:[],version:"current",frontMatter:{title:"Composite Architecture"},sidebar:"docs",previous:{title:"Ingress Controller",permalink:"/docs/ingress-controller/next/design"},next:{title:"Development",permalink:"/docs/ingress-controller/next/contribute"}},c=[{value:"Background",id:"background",children:[]},{value:"Design",id:"design",children:[{value:"Cache (etcd-server-mock)",id:"cache-etcd-server-mock",children:[]},{value:"Architecture",id:"architecture",children:[]},{value:"Timing diagram",id:"timing-diagram",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"example",id:"example",children:[]}],l={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},(0,a.kt)("strong",{parentName:"p"},"This feature is experimental")))),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"The new architecture has the following features:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Reduce maintenance costs without the need for additional maintenance of a complete APISIX cluster and (etcd cluster)."),(0,a.kt)("li",{parentName:"ol"},"Deployment is simpler and easier to use")),(0,a.kt)("h2",{id:"design"},"Design"),(0,a.kt)("p",null,"In the new architecture, the control-plane will simulate the ETCD configuration center to publish data.\nThe data-plane APISIX will subscribe to data from the control-plane."),(0,a.kt)("h3",{id:"cache-etcd-server-mock"},"Cache (etcd-server-mock)"),(0,a.kt)("p",null,"Since apisix strongly relies on the etcd API, the control-plane will simulate the etcd service publishing data to APISIX."),(0,a.kt)("h3",{id:"architecture"},"Architecture"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/ingress-apisix-composite-architecture.png",alt:"ingress-apisix-composite-architecture.png"})),(0,a.kt)("h3",{id:"timing-diagram"},"Timing diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-ingress-controller/master/docs/assets/images/ingress-apisix-new-architecture-timing-diagram.png",alt:"ingress-apisix-new-architecture-timing-diagram.png"})),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("p",null,"Save the APISIX Ingress version to an environment variable to be used next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'APISIX_INGRESS_VERSION="1.7.0"\n')),(0,a.kt)("p",null,"Clone the APISIX Ingress source code of this version into a new directory apisix-APISIX_VERSION:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"git clone --depth 1 --branch ${APISIX_INGRESS_VERSION} https://github.com/apache/apisix-ingress-controller.git ingress-apisix-${APISIX_INGRESS_VERSION}\n")),(0,a.kt)("p",null,"Install the CRDs and ingress-apisix:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd ingress-apisix-${APISIX_INGRESS_VERSION}\n# install CRDs\nkubectl apply -k samples/deploy/crd/v1\n# install ingress-apisix\nkubectl apply -f samples/deploy/composite.yaml\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# install ingress-apisix output\nnamespace/ingress-apisix created\nclusterrole.rbac.authorization.k8s.io/apisix-view-clusterrole created\nserviceaccount/apisix-view-serviceaccount created\nclusterrolebinding.rbac.authorization.k8s.io/apisix-view-clusterrolebinding created\nconfigmap/apisix-gw-config.yaml created\ndeployment.apps/ingress-apisix-composite-deployment created\nservice/ingress-apisix-gateway created\n")),(0,a.kt)("p",null,"Check the pod status to confirm successful installation:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl get service -n ingress-apisix # check service\nkubectl get pods -n ingress-apisix # check pod\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"# service\nNAME                        TYPE        CLUSTER-IP       EXTERNAL-IP   PORT(S)                      AGE\ningress-apisix-gateway      NodePort    10.99.236.58     <none>        80:31143/TCP,443:30166/TCP   90s\n# pod\nNAME                                                 READY   STATUS    RESTARTS   AGE\ningress-apisix-composite-deployment-5df9bc99c7-xxpvq   2/2     Running   0          100s\n")),(0,a.kt)("h2",{id:"example"},"example"),(0,a.kt)("p",null,"Install the ApisixRoute and httpbin app:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl apply -f samples/httpbin/httpbin-route.yaml\n")),(0,a.kt)("p",null,"After forwarding the local port 9080 to the ",(0,a.kt)("inlineCode",{parentName:"p"},"ingress-apisix-gateway")," service port 80, send a request:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"# forward local port 9080 to ingress-apisix-gateway service port 80\nkubectl port-forward service/ingress-apisix-gateway 9080:80 -n ingress-apisix &\n# send a request\ncurl http://127.0.0.1:9080/headers -H 'Host: httpbin.org'\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'{\n  "headers": {\n    "Accept": "*/*", \n    "Host": "httpbin.org", \n    "User-Agent": "curl/7.74.0", \n    "X-Forwarded-Host": "httpbin.org"\n  }\n}\n')))}p.isMDXComponent=!0}}]);