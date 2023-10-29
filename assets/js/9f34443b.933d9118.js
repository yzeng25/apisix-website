"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[38451],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),c=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),h=n,d=m["".concat(o,".").concat(h)]||m[h]||u[h]||i;return a?r.createElement(d,l(l({ref:t},p),{},{components:a})):r.createElement(d,l({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,l[1]=s;for(var c=2;c<i;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8510:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const i={title:"Manage Certificates With Cert Manager"},l=void 0,s={unversionedId:"tutorials/manage-certificates-with-cert-manager",id:"version-1.6.1/tutorials/manage-certificates-with-cert-manager",isDocsHomePage:!1,title:"Manage Certificates With Cert Manager",description:"This tutorial will detail how to manage secrets of ApisixTls using cert-manager.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-1.6.1/tutorials/manage-certificates-with-cert-manager.md",sourceDirName:"tutorials",slug:"/tutorials/manage-certificates-with-cert-manager",permalink:"/docs/ingress-controller/tutorials/manage-certificates-with-cert-manager",editUrl:"/edit#https://github.com/apache/apisix-ingress-controller/edit/v1.6.1/docs/en/latest/tutorials/manage-certificates-with-cert-manager.md",tags:[],version:"1.6.1",frontMatter:{title:"Manage Certificates With Cert Manager"},sidebar:"version-1.6.1/docs",previous:{title:"How to proxy the gRPC service",permalink:"/docs/ingress-controller/tutorials/proxy-grpc-service"},next:{title:"Manage Ingress Certificates With Cert Manager",permalink:"/docs/ingress-controller/tutorials/manage-ingress-certificates-with-cert-manager"}},o=[{value:"Prerequisites",id:"prerequisites",children:[]},{value:"Create Issuer",id:"create-issuer",children:[]},{value:"Create Certificate",id:"create-certificate",children:[]},{value:"Create Test Service",id:"create-test-service",children:[]},{value:"Route the Service",id:"route-the-service",children:[]},{value:"Secure the Route",id:"secure-the-route",children:[]},{value:"Test Certificate Rotation",id:"test-certificate-rotation",children:[]}],c={toc:o};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This tutorial will detail how to manage secrets of ApisixTls using cert-manager."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Prepare an available Kubernetes cluster in your workstation, we recommend you to use ",(0,n.kt)("a",{parentName:"li",href:"https://kind.sigs.k8s.io/docs/user/quick-start/"},"KIND")," to create a local Kubernetes cluster."),(0,n.kt)("li",{parentName:"ul"},"Install Apache APISIX in Kubernetes by ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-helm-chart"},"Helm Chart"),"."),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/blob/master/install.md"},"apisix-ingress-controller"),"."),(0,n.kt)("li",{parentName:"ul"},"Install ",(0,n.kt)("a",{parentName:"li",href:"https://cert-manager.io/docs/installation/#default-static-install"},"cert-manager"),".")),(0,n.kt)("p",null,"In this guide, we assume that your APISIX is installed with ",(0,n.kt)("inlineCode",{parentName:"p"},"ssl")," enabled, which is not enabled by default in the Helm Chart. To enable it, you need to set ",(0,n.kt)("inlineCode",{parentName:"p"},"gateway.tls.enabled=true")," during installation."),(0,n.kt)("p",null,"For example, you could install APISIX and APISIX ingress controller by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"helm install apisix apisix/apisix --set gateway.type=NodePort --set ingress-controller.enabled=true --set gateway.tls.enabled=true --set ingress-controller.config.apisix.serviceNamespace=default\n")),(0,n.kt)("p",null,"Assume that the SSL port is ",(0,n.kt)("inlineCode",{parentName:"p"},"9443"),"."),(0,n.kt)("h2",{id:"create-issuer"},"Create Issuer"),(0,n.kt)("p",null,"For testing purposes, we will use a simple CA issuer. All required files can be found ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/tree/master/docs/en/latest/tutorials/cert-manager"},"here"),"."),(0,n.kt)("p",null,"To create a CA issuer, use the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl apply -f ./cert-manager/ca.yaml\nkubectl apply -f ./cert-manager/issuer.yaml\n")),(0,n.kt)("p",null,"If the cert-manager is working correctly, we should be able to see the Ready status by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get issuer\n")),(0,n.kt)("p",null,"It should output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   AGE\nca-issuer   True    50s\n")),(0,n.kt)("h2",{id:"create-certificate"},"Create Certificate"),(0,n.kt)("p",null,"Before creating ApisixTls, we should create a ",(0,n.kt)("inlineCode",{parentName:"p"},"Certificate")," resource."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: cert-manager.io/v1\nkind: Certificate\nmetadata:\n  name: demo-cert\nspec:\n  dnsNames:\n    - local.httpbin.org\n  issuerRef:\n    kind: Issuer\n    name: ca-issuer\n  secretName: example-cert\n  usages:\n    - digital signature\n    - key encipherment\n  renewBefore: 0h55m0s\n  duration: 1h0m0s\n")),(0,n.kt)("p",null,"Note that we set the parameters ",(0,n.kt)("inlineCode",{parentName:"p"},"duration")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"renewBefore"),". We want to test if the certificate rotation functionality is working well, so a shorter renewal time will help."),(0,n.kt)("p",null,"Like ",(0,n.kt)("inlineCode",{parentName:"p"},"Issuer"),", we could see its readiness status by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get certificate\n")),(0,n.kt)("p",null,"It should output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"NAME        READY   SECRET        AGE\ndemo-cert   True    example-cert  50s\n")),(0,n.kt)("p",null,"Check the secrets by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl get secret\n")),(0,n.kt)("p",null,"It should output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"NAME          TYPE                DATA   AGE\nexample-cert  kubernetes.io/tls   3      2m20s\n")),(0,n.kt)("p",null,"This means that our cert-manager is working properly."),(0,n.kt)("h2",{id:"create-test-service"},"Create Test Service"),(0,n.kt)("p",null,"We use ",(0,n.kt)("a",{parentName:"p",href:"https://hub.docker.com/r/kennethreitz/httpbin/"},"kennethreitz/httpbin")," as the service image."),(0,n.kt)("p",null,"Deploy it by running:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl run httpbin --image kennethreitz/httpbin --expose --port 80\n")),(0,n.kt)("h2",{id:"route-the-service"},"Route the Service"),(0,n.kt)("p",null,"Create an ApisixRoute to route the service:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: apisix.apache.org/v2\nkind: ApisixRoute\nmetadata:\n  name: httpserver-route\nspec:\n  http:\n    - name: httpbin\n      match:\n        hosts:\n          - local.httpbin.org\n        paths:\n          - "/*"\n      backends:\n        - serviceName: httpbin\n          servicePort: 80\n')),(0,n.kt)("p",null,"Run curl command in a APISIX pod to see if the routing configuration works."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n <APISIX_NAMESPACE> exec -it <APISIX_POD_NAME> -- curl http://127.0.0.1:9080/ip -H 'Host: local.httpbin.org'\n")),(0,n.kt)("p",null,"It should output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')),(0,n.kt)("h2",{id:"secure-the-route"},"Secure the Route"),(0,n.kt)("p",null,"Create an ApisixTls to secure the route, referring to the secret created by cert-manager:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: apisix.apache.org/v2\nkind: ApisixTls\nmetadata:\n  name: example-tls\nspec:\n  hosts:\n    - local.httpbin.org\n  secret:\n    name: example-cert # the secret created by cert-manager\n    namespace: default # secret namespace\n")),(0,n.kt)("p",null,"Run curl command in a APISIX pod to see if the Ingress and TLS configuration are working."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n <APISIX_NAMESPACE> exec -it <APISIX_POD_NAME> -- curl --resolve 'local.httpbin.org:9443:127.0.0.1' \"https://local.httpbin.org:9443/ip\" -k\n")),(0,n.kt)("p",null,"It should output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "origin": "127.0.0.1"\n}\n')),(0,n.kt)("h2",{id:"test-certificate-rotation"},"Test Certificate Rotation"),(0,n.kt)("p",null,"To verify certificate rotation, we can add a verbose parameter ",(0,n.kt)("inlineCode",{parentName:"p"},"-v")," to curl command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-bash"},"kubectl -n <APISIX_NAMESPACE> exec -it <APISIX_POD_NAME> -- curl --resolve 'local.httpbin.org:9443:127.0.0.1' \"https://local.httpbin.org:9443/ip\" -k -v\n")),(0,n.kt)("p",null,"The verbose option will show us the handshake log, which also contains the certificate information."),(0,n.kt)("p",null,"Example output:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"* Added local.httpbin.org:9443:127.0.0.1 to DNS cache\n* Hostname local.httpbin.org was found in DNS cache\n*   Trying 127.0.0.1:9443...\n* Connected to local.httpbin.org (127.0.0.1) port 9443 (#0)\n...\n...\n* Server certificate:\n*  subject: [NONE]\n*  start date: Sep 16 00:14:55 2021 GMT\n*  expire date: Sep 16 01:14:55 2021 GMT\n*  issuer: C=CN; ST=Zhejiang; L=Hangzhou; O=APISIX-Test-CA_; OU=APISIX_CA_ROOT_; CN=APISIX.ROOT_; emailAddress=test@test.com\n")),(0,n.kt)("p",null,"We could see the start date and expiration date of the server certificate."),(0,n.kt)("p",null,"Since the ",(0,n.kt)("inlineCode",{parentName:"p"},"Certificate")," we defined requires the cert-manager to renew the cert every 5 minutes, we should be able to see the changes to the server certificate after 5 minutes."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-text"},"* Added local.httpbin.org:9443:127.0.0.1 to DNS cache\n* Hostname local.httpbin.org was found in DNS cache\n*   Trying 127.0.0.1:9443...\n* Connected to local.httpbin.org (127.0.0.1) port 9443 (#0)\n...\n...\n* Server certificate:\n*  subject: [NONE]\n*  start date: Sep 16 00:19:55 2021 GMT\n*  expire date: Sep 16 01:19:55 2021 GMT\n*  issuer: C=CN; ST=Zhejiang; L=Hangzhou; O=APISIX-Test-CA_; OU=APISIX_CA_ROOT_; CN=APISIX.ROOT_; emailAddress=test@test.com\n")),(0,n.kt)("p",null,"The certificate was rotated as expected."))}p.isMDXComponent=!0}}]);