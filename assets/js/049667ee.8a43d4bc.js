"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[99216],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(n),h=r,m=c["".concat(u,".").concat(h)]||c[h]||d[h]||i;return n?a.createElement(m,l(l({ref:t},s),{},{components:n})):a.createElement(m,l({ref:t},s))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},54514:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>l,default:()=>s,frontMatter:()=>i,metadata:()=>o,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const i={title:"key-auth",keywords:["Apache APISIX","API Gateway","Plugin","Key Auth","key-auth"],description:"This document contains information about the Apache APISIX key-auth Plugin."},l=void 0,o={unversionedId:"plugins/key-auth",id:"version-3.4/plugins/key-auth",isDocsHomePage:!1,title:"key-auth",description:"This document contains information about the Apache APISIX key-auth Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.4/plugins/key-auth.md",sourceDirName:"plugins",slug:"/plugins/key-auth",permalink:"/docs/apisix/plugins/key-auth",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/plugins/key-auth.md",tags:[],version:"3.4",frontMatter:{title:"key-auth",keywords:["Apache APISIX","API Gateway","Plugin","Key Auth","key-auth"],description:"This document contains information about the Apache APISIX key-auth Plugin."},sidebar:"version-3.4/docs",previous:{title:"body-transformer",permalink:"/docs/apisix/plugins/body-transformer"},next:{title:"jwt-auth",permalink:"/docs/apisix/plugins/jwt-auth"}},u=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],p={toc:u};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin is used to add an authentication key (API key) to a Route or a Service."),(0,r.kt)("p",null,"This works well with a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/terminology/consumer"},"Consumer"),". Consumers of the API can then add their key to the query string or the header to authenticate their requests."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"For Consumer:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"required"),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key for a Consumer. This field supports saving the value in Secret Manager using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/terminology/secret"},"APISIX Secret")," resource.")))),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"key"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,r.kt)("p",null,"For Route:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Requirement"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The header to get the key from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"apikey"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The query string to get the key from. Lower priority than header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"bool"),(0,r.kt)("td",{parentName:"tr",align:null},"optional"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Apache APISIX will pass the request header or query string that contains the authentication information to the Upstream if ",(0,r.kt)("inlineCode",{parentName:"td"},"hide_credentials")," is ",(0,r.kt)("inlineCode",{parentName:"td"},"false"),". Otherwise the authentication information will be removed before proxying.")))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"To enable the Plugin, you have to create a Consumer object with an authentication key and configure your Route to authenticate requests."),(0,r.kt)("p",null,"First you can create a Consumer object through the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/admin-api"},"Admin API")," with a unique key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"You can also use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/dashboard/USER_GUIDE"},"APISIX Dashboard")," to complete the operation through a web UI."),(0,r.kt)("p",null,"First, create a Consumer object:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/key-auth-1.png",alt:"create a consumer"})),(0,r.kt)("p",null,"You can then add the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin:"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/plugin/key-auth-2.png",alt:"enable key-auth plugin"})),(0,r.kt)("p",null,"Once you have created a Consumer object, you can then configure a Route or a Service to authenticate requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {\n        "key-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"To fetch the key from a different header than ",(0,r.kt)("inlineCode",{parentName:"p"},"apikey"),", change the ",(0,r.kt)("inlineCode",{parentName:"p"},"header")," in the configuration:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n    "key-auth": {\n        "header": "Authorization"\n    }\n}\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"After you have configured the Plugin as mentioned above, you can make a request as shown:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -H 'apikey: auth-one' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\n...\n")),(0,r.kt)("p",null,"And if the request has a missing key or a wrong key:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing API key found in request"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.2:9080/index.html -H 'apikey: abcabcabc' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid API key in request"}\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"key-auth")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);