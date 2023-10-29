"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[27679],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=a.createContext({}),l=function(e){var n=a.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=l(t),d=r,k=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return t?a.createElement(k,o(o({ref:n},c),{},{components:t})):a.createElement(k,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=m;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},74943:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=t(87462),r=(t(67294),t(3905));const s={title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","\u670d\u52a1\u53d1\u73b0","\u96c6\u7fa4","API \u7f51\u5173"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u57fa\u4e8e Kubernetes \u8fdb\u884c\u670d\u52a1\u53d1\u73b0\u4ee5\u53ca\u76f8\u5173\u95ee\u9898\u6c47\u603b\u3002"},o=void 0,i={unversionedId:"discovery/kubernetes",id:"version-3.4/discovery/kubernetes",isDocsHomePage:!1,title:"Kubernetes",description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u57fa\u4e8e Kubernetes \u8fdb\u884c\u670d\u52a1\u53d1\u73b0\u4ee5\u53ca\u76f8\u5173\u95ee\u9898\u6c47\u603b\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.4/discovery/kubernetes.md",sourceDirName:"discovery",slug:"/discovery/kubernetes",permalink:"/zh/docs/apisix/discovery/kubernetes",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.4/docs/zh/latest/discovery/kubernetes.md",tags:[],version:"3.4",frontMatter:{title:"Kubernetes",keywords:["Kubernetes","Apache APISIX","\u670d\u52a1\u53d1\u73b0","\u96c6\u7fa4","API \u7f51\u5173"],description:"\u672c\u6587\u5c06\u4ecb\u7ecd\u5982\u4f55\u5728 Apache APISIX \u4e2d\u57fa\u4e8e Kubernetes \u8fdb\u884c\u670d\u52a1\u53d1\u73b0\u4ee5\u53ca\u76f8\u5173\u95ee\u9898\u6c47\u603b\u3002"},sidebar:"version-3.4/docs",previous:{title:"\u63a7\u5236\u9762\u670d\u52a1\u53d1\u73b0",permalink:"/zh/docs/apisix/discovery/control-plane-service-discovery"},next:{title:"PubSub",permalink:"/zh/docs/apisix/pubsub"}},p=[{value:"\u57fa\u4e8e Kubernetes \u7684\u670d\u52a1\u53d1\u73b0",id:"\u57fa\u4e8e-kubernetes-\u7684\u670d\u52a1\u53d1\u73b0",children:[]},{value:"Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u4f7f\u7528",id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u4f7f\u7528",children:[{value:"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f",id:"\u5355\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f",children:[]},{value:"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3",id:"\u5355\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3",children:[]},{value:"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f",id:"\u591a\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f",children:[]},{value:"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3",id:"\u591a\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3",children:[]}]},{value:"Q&amp;A",id:"qa",children:[]}],l={toc:p};function c(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,a.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u57fa\u4e8e-kubernetes-\u7684\u670d\u52a1\u53d1\u73b0"},"\u57fa\u4e8e Kubernetes \u7684\u670d\u52a1\u53d1\u73b0"),(0,r.kt)("p",null,"Kubernetes \u670d\u52a1\u53d1\u73b0\u4ee5 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/using-api/api-concepts"},(0,r.kt)("em",{parentName:"a"},"List-Watch"))," \u65b9\u5f0f\u76d1\u542c ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io"},(0,r.kt)("em",{parentName:"a"},"Kubernetes"))," \u96c6\u7fa4 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/services-networking/service"},(0,r.kt)("em",{parentName:"a"},"Endpoints"))," \u8d44\u6e90\u7684\u5b9e\u65f6\u53d8\u5316\uff0c\u5e76\u5c06\u5176\u503c\u5b58\u50a8\u5230 ngx.shared.DICT \u4e2d\u3002"),(0,r.kt)("p",null,"\u540c\u65f6\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/discovery"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery \u89c4\u8303"))," \u63d0\u4f9b\u4e86\u8282\u70b9\u67e5\u8be2\u63a5\u53e3\u3002"),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5728\u56db\u5c42\u4e2d\u4f7f\u7528 Kubernetes \u670d\u52a1\u53d1\u73b0\u8981\u6c42 OpenResty \u7248\u672c\u5927\u4e8e\u7b49\u4e8e 1.19.9.1"))),(0,r.kt)("h2",{id:"kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u4f7f\u7528"},"Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u76ee\u524d Kubernetes \u670d\u52a1\u53d1\u73b0\u652f\u6301\u5355\u96c6\u7fa4\u548c\u591a\u96c6\u7fa4\u6a21\u5f0f\uff0c\u5206\u522b\u9002\u7528\u4e8e\u5f85\u53d1\u73b0\u7684\u670d\u52a1\u5206\u5e03\u5728\u5355\u4e2a\u6216\u591a\u4e2a Kubernetes \u7684\u573a\u666f\u3002"),(0,r.kt)("h3",{id:"\u5355\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f"},"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f"),(0,r.kt)("p",null,"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u5b8c\u6574\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: ${KUBERNETES_SERVICE_HOST} #default ${KUBERNETES_SERVICE_HOST}\n\n      # apiserver port, options [port number, environment variable]\n      port: ${KUBERNETES_SERVICE_PORT}  #default ${KUBERNETES_SERVICE_PORT}\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size, 1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,r.kt)("p",null,"\u5982\u679c Kubernetes \u670d\u52a1\u53d1\u73b0\u8fd0\u884c\u5728 Pod \u5185\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u6700\u7b80\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes: { }\n")),(0,r.kt)("p",null,"\u5982\u679c Kubernetes \u670d\u52a1\u53d1\u73b0\u8fd0\u884c\u5728 Pod \u5916\uff0c\u4f60\u9700\u8981\u65b0\u5efa\u6216\u9009\u53d6\u6307\u5b9a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount")),", \u83b7\u53d6\u5176 Token \u503c\uff0c\u7136\u540e\u4f7f\u7528\u5982\u4e0b\u914d\u7f6e\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},"discovery:\n  kubernetes:\n    service:\n      schema: https\n      host: # enter apiserver host value here\n      port: # enter apiServer port value here\n    client:\n      token: # enter serviceaccount token value here\n      #token_file: # enter token file path here\n")),(0,r.kt)("h3",{id:"\u5355\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3"},"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3"),(0,r.kt)("p",null,"\u5355\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/discovery"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery \u89c4\u8303"))," \u63d0\u4f9b\u8282\u70b9\u67e5\u8be2\u63a5\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\uff1a"),"\nnodes(service_name)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\nservice_name \u5fc5\u987b\u6ee1\u8db3\u683c\u5f0f\uff1a","[namespace]","/","[name]",":","[portName]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"namespace: Endpoints \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name: Endpoints \u7684\u8d44\u6e90\u540d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"portName: Endpoints \u5b9a\u4e49\u5305\u542b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name")," \u503c\uff0c\u5982\u679c Endpoints \u6ca1\u6709\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name"),"\uff0c\u8bf7\u4f9d\u6b21\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"targetPort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," \u4ee3\u66ff\u3002\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name")," \u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u4f7f\u7528\u540e\u4e24\u8005\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\uff1a"),"\n\u4ee5\u5982\u4e0b Endpoints \u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,r.kt)("p",null,'nodes("default/plat-dev:port") \u8c03\u7528\u4f1a\u5f97\u5230\u5982\u4e0b\u7684\u8fd4\u56de\u503c\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,r.kt)("h3",{id:"\u591a\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f"},"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u914d\u7f6e\u683c\u5f0f"),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u5b8c\u6574\u914d\u7f6e\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'discovery:\n  kubernetes:\n  - id: release  # a custom name refer to the cluster, pattern ^[a-z0-9]{1,8}\n    service:\n      # apiserver schema, options [http, https]\n      schema: https #default https\n\n      # apiserver host, options [ipv4, ipv6, domain, environment variable]\n      host: "1.cluster.com"\n\n      # apiserver port, options [port number, environment variable]\n      port: "6443"\n\n    client:\n      # serviceaccount token or token_file\n      token_file: /var/run/secrets/kubernetes.io/serviceaccount/token\n\n      #token: |-\n       # eyJhbGciOiJSUzI1NiIsImtpZCI6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEif\n       # 6Ikx5ME1DNWdnbmhQNkZCNlZYMXBsT3pYU3BBS2swYzBPSkN3ZnBESGpkUEEifeyJhbGciOiJSUzI1NiIsImtpZCI\n\n    default_weight: 50 # weight assigned to each discovered endpoint. default 50, minimum 0\n\n    # kubernetes discovery support namespace_selector\n    # you can use one of [equal, not_equal, match, not_match] filter namespace\n    namespace_selector:\n      # only save endpoints with namespace equal default\n      equal: default\n\n      # only save endpoints with namespace not equal default\n      #not_equal: default\n\n      # only save endpoints with namespace match one of [default, ^my-[a-z]+$]\n      #match:\n       #- default\n       #- ^my-[a-z]+$\n\n      # only save endpoints with namespace not match one of [default, ^my-[a-z]+$]\n      #not_match:\n       #- default\n       #- ^my-[a-z]+$\n\n    # kubernetes discovery support label_selector\n    # for the expression of label_selector, please refer to https://kubernetes.io/docs/concepts/overview/working-with-objects/labels\n    label_selector: |-\n      first="a",second="b"\n\n    # reserved lua shared memory size,1m memory can store about 1000 pieces of endpoint\n    shared_size: 1m #default 1m\n')),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u6ca1\u6709\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"service")," \u548c ",(0,r.kt)("inlineCode",{parentName:"p"},"client")," \u57df\u586b\u5145\u9ed8\u8ba4\u503c\uff0c\u4f60\u9700\u8981\u6839\u636e\u96c6\u7fa4\u914d\u7f6e\u60c5\u51b5\u81ea\u884c\u586b\u5145\u3002"),(0,r.kt)("h3",{id:"\u591a\u96c6\u7fa4\u6a21\u5f0f-kubernetes-\u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3"},"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u7684\u67e5\u8be2\u63a5\u53e3"),(0,r.kt)("p",null,"\u591a\u96c6\u7fa4\u6a21\u5f0f Kubernetes \u670d\u52a1\u53d1\u73b0\u9075\u5faa ",(0,r.kt)("a",{parentName:"p",href:"/zh/docs/apisix/discovery"},(0,r.kt)("em",{parentName:"a"},"APISIX Discovery \u89c4\u8303"))," \u63d0\u4f9b\u8282\u70b9\u67e5\u8be2\u63a5\u53e3\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u51fd\u6570\uff1a"),"\nnodes(service_name)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf4\u660e\uff1a"),"\nservice_name \u5fc5\u987b\u6ee1\u8db3\u683c\u5f0f\uff1a","[id]","/","[namespace]","/","[name]",":","[portName]"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"id: Kubernetes \u670d\u52a1\u53d1\u73b0\u914d\u7f6e\u4e2d\u5b9a\u4e49\u7684\u96c6\u7fa4 id \u503c")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"namespace: Endpoints \u6240\u5728\u7684\u547d\u540d\u7a7a\u95f4")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"name: Endpoints \u7684\u8d44\u6e90\u540d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"portName: Endpoints \u5b9a\u4e49\u5305\u542b\u7684 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name")," \u503c\uff0c\u5982\u679c Endpoints \u6ca1\u6709\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name"),"\uff0c\u8bf7\u4f9d\u6b21\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"targetPort"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"port")," \u4ee3\u66ff\u3002\u8bbe\u7f6e\u4e86 ",(0,r.kt)("inlineCode",{parentName:"p"},"ports.name")," \u7684\u60c5\u51b5\u4e0b\uff0c\u4e0d\u80fd\u4f7f\u7528\u540e\u4e24\u8005\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8fd4\u56de\u503c\uff1a"),"\n\u4ee5\u5982\u4e0b Endpoints \u4e3a\u4f8b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Endpoints\nmetadata:\n  name: plat-dev\n  namespace: default\nsubsets:\n  - addresses:\n      - ip: "10.5.10.109"\n      - ip: "10.5.10.110"\n    ports:\n      - port: 3306\n        name: port\n')),(0,r.kt)("p",null,'nodes("release/default/plat-dev:port") \u8c03\u7528\u4f1a\u5f97\u5230\u5982\u4e0b\u7684\u8fd4\u56de\u503c\uff1a'),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' {\n     {\n         host="10.5.10.109",\n         port= 3306,\n         weight= 50,\n     },\n     {\n         host="10.5.10.110",\n         port= 3306,\n         weight= 50,\n     },\n }\n')),(0,r.kt)("h2",{id:"qa"},"Q&A"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: \u4e3a\u4ec0\u4e48\u53ea\u652f\u6301\u914d\u7f6e token \u6765\u8bbf\u95ee Kubernetes APIServer?")),(0,r.kt)("p",null,"A: \u4e00\u822c\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u6709\u4e09\u79cd\u65b9\u5f0f\u53ef\u4ee5\u5b8c\u6210\u4e0e Kubernetes APIServer \u7684\u8ba4\u8bc1\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"mTLS"),(0,r.kt)("li",{parentName:"ul"},"Token"),(0,r.kt)("li",{parentName:"ul"},"Basic authentication")),(0,r.kt)("p",null,"\u56e0\u4e3a lua-resty-http \u76ee\u524d\u4e0d\u652f\u6301 mTLS, Basic authentication \u4e0d\u88ab\u63a8\u8350\u4f7f\u7528\uff0c\u6240\u4ee5\u5f53\u524d\u53ea\u5b9e\u73b0\u4e86 Token \u8ba4\u8bc1\u65b9\u5f0f\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: APISIX \u7ee7\u627f\u4e86 NGINX \u7684\u591a\u8fdb\u7a0b\u6a21\u578b\uff0c\u662f\u5426\u610f\u5473\u7740\u6bcf\u4e2a APISIX \u5de5\u4f5c\u8fdb\u7a0b\u90fd\u4f1a\u76d1\u542c Kubernetes Endpoints\uff1f")),(0,r.kt)("p",null,"A: Kubernetes \u670d\u52a1\u53d1\u73b0\u53ea\u4f7f\u7528\u7279\u6743\u8fdb\u7a0b\u76d1\u542c Kubernetes Endpoints\uff0c\u7136\u540e\u5c06\u5176\u503c\u5b58\u50a8\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT")," \u4e2d\uff0c\u5de5\u4f5c\u8fdb\u7a0b\u901a\u8fc7\u67e5\u8be2 ",(0,r.kt)("inlineCode",{parentName:"p"},"ngx.shared.DICT")," \u6765\u83b7\u53d6\u7ed3\u679c\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: ",(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," \u9700\u8981\u7684\u6743\u9650\u6709\u54ea\u4e9b\uff1f")),(0,r.kt)("p",null,"A: ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," \u9700\u8981\u96c6\u7fa4\u7ea7 ","[ get,list,watch ]"," endpoints \u8d44\u6e90\u7684\u7684\u6743\u9650\uff0c\u5176\u58f0\u660e\u5f0f\u5b9a\u4e49\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'kind: ServiceAccount\napiVersion: v1\nmetadata:\n name: apisix-test\n namespace: default\n---\n\nkind: ClusterRole\napiVersion: rbac.authorization.k8s.io/v1\nmetadata:\n name: apisix-test\nrules:\n- apiGroups: [ "" ]\n  resources: [ endpoints ]\n  verbs: [ get,list,watch ]\n---\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n name: apisix-test\nroleRef:\n apiGroup: rbac.authorization.k8s.io\n kind: ClusterRole\n name: apisix-test\nsubjects:\n - kind: ServiceAccount\n   name: apisix-test\n   namespace: default\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Q: \u600e\u6837\u83b7\u53d6\u6307\u5b9a ",(0,r.kt)("a",{parentName:"strong",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," \u7684 Token \u503c\uff1f")),(0,r.kt)("p",null,"A: \u5047\u5b9a\u4f60\u6307\u5b9a\u7684 ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-service-account/"},(0,r.kt)("em",{parentName:"a"},"ServiceAccount"))," \u8d44\u6e90\u540d\u4e3a\u201ckubernetes-discovery\u201c, \u547d\u540d\u7a7a\u95f4\u4e3a\u201capisix\u201d, \u8bf7\u6309\u5982\u4e0b\u6b65\u9aa4\u83b7\u53d6\u5176 Token \u503c\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6 ",(0,r.kt)("em",{parentName:"p"},"Secret")," \u8d44\u6e90\u540d\u3002\u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u8f93\u51fa\u7684\u7b2c\u4e00\u5217\u5185\u5bb9\u5c31\u662f\u76ee\u6807 ",(0,r.kt)("em",{parentName:"p"},"Secret")," \u8d44\u6e90\u540d\uff1a"),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secrets | grep kubernetes-discovery\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u83b7\u53d6 Token \u503c\u3002\u5047\u5b9a\u4f60\u83b7\u53d6\u5230\u7684 ",(0,r.kt)("em",{parentName:"p"},"Secret"),' \u8d44\u6e90\u540d\u4e3a "kubernetes-discovery-token-c64cv", \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4\uff0c\u8f93\u51fa\u5185\u5bb9\u5c31\u662f\u76ee\u6807 Token \u503c\uff1a'),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"kubectl -n apisix get secret kubernetes-discovery-token-c64cv -o jsonpath={.data.token} | base64 -d\n")))))}c.isMDXComponent=!0}}]);