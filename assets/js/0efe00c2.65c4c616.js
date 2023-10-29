"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[75401],{3905:(t,e,a)=>{a.d(e,{Zo:()=>m,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var o=r.createContext({}),d=function(t){var e=r.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},c=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),c=d(a),s=n,k=c["".concat(o,".").concat(s)]||c[s]||u[s]||l;return a?r.createElement(k,i(i({ref:e},m),{},{components:a})):r.createElement(k,i({ref:e},m))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=c;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var d=2;d<l;d++)i[d]=a[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},84071:(t,e,a)=>{a.r(e),a.d(e,{contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var r=a(87462),n=(a(67294),a(3905));const l={title:"APISIX variable"},i=void 0,p={unversionedId:"apisix-variable",id:"version-2.15/apisix-variable",isDocsHomePage:!1,title:"APISIX variable",description:"Besides Nginx variable, APISIX also provides\nadditional variables.",source:"@site/docs-apisix_versioned_docs/version-2.15/apisix-variable.md",sourceDirName:".",slug:"/apisix-variable",permalink:"/docs/apisix/2.15/apisix-variable",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.15/docs/en/latest/apisix-variable.md",tags:[],version:"2.15",frontMatter:{title:"APISIX variable"},sidebar:"version-2.15/docs",previous:{title:"Plugin Develop",permalink:"/docs/apisix/2.15/plugin-develop"},next:{title:"External Plugin",permalink:"/docs/apisix/2.15/external-plugin"}},o=[],d={toc:o};function m(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Besides ",(0,n.kt)("a",{parentName:"p",href:"http://nginx.org/en/docs/varindex.html"},"Nginx variable"),", APISIX also provides\nadditional variables."),(0,n.kt)("p",null,"List in alphabetical order:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Variable Name"),(0,n.kt)("th",{parentName:"tr",align:null},"Origin"),(0,n.kt)("th",{parentName:"tr",align:null},"Description"),(0,n.kt)("th",{parentName:"tr",align:null},"Example"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"balancer_ip"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"the IP of picked upstream server"),(0,n.kt)("td",{parentName:"tr",align:null},"1.1.1.1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"balancer_port"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"the port of picked upstream server"),(0,n.kt)("td",{parentName:"tr",align:null},"80")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"consumer_name"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"username of ",(0,n.kt)("inlineCode",{parentName:"td"},"consumer")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graphql_name"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"the ",(0,n.kt)("a",{parentName:"td",href:"https://graphql.org/learn/queries/#operation-name"},"operation name")," of GraphQL"),(0,n.kt)("td",{parentName:"tr",align:null},"HeroComparison")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graphql_operation"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"the operation type of GraphQL"),(0,n.kt)("td",{parentName:"tr",align:null},"mutation")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"graphql_root_fields"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"the top level fields of GraphQL"),(0,n.kt)("td",{parentName:"tr",align:null},'["hero"]')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"mqtt_client_id"),(0,n.kt)("td",{parentName:"tr",align:null},"mqtt-proxy"),(0,n.kt)("td",{parentName:"tr",align:null},"the client id in MQTT protocol"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"route_id"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"id of ",(0,n.kt)("inlineCode",{parentName:"td"},"route")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"route_name"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"name of ",(0,n.kt)("inlineCode",{parentName:"td"},"route")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service_id"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"id of ",(0,n.kt)("inlineCode",{parentName:"td"},"service")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"service_name"),(0,n.kt)("td",{parentName:"tr",align:null},"core"),(0,n.kt)("td",{parentName:"tr",align:null},"name of ",(0,n.kt)("inlineCode",{parentName:"td"},"service")),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"redis_cmd_line"),(0,n.kt)("td",{parentName:"tr",align:null},"Redis"),(0,n.kt)("td",{parentName:"tr",align:null},"the content of Redis command"),(0,n.kt)("td",{parentName:"tr",align:null})),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"rpc_time"),(0,n.kt)("td",{parentName:"tr",align:null},"xRPC"),(0,n.kt)("td",{parentName:"tr",align:null},"time spent at the rpc request level"),(0,n.kt)("td",{parentName:"tr",align:null})))),(0,n.kt)("p",null,"You can also ",(0,n.kt)("a",{parentName:"p",href:"/docs/apisix/2.15/plugin-develop#register-custom-variable"},"register your own variable"),"."))}m.isMDXComponent=!0}}]);