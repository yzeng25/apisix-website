"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[66181],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),o=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=o(e.components);return a.createElement(u.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,d=p(e,["components","mdxType","originalType","parentName"]),c=o(n),m=r,g=c["".concat(u,".").concat(m)]||c[m]||s[m]||l;return n?a.createElement(g,i(i({ref:t},d),{},{components:n})):a.createElement(g,i({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var u in t)hasOwnProperty.call(t,u)&&(p[u]=t[u]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var o=2;o<l;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},16114:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>d,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var a=n(87462),r=(n(67294),n(3905));const l={title:"ldap-auth",keywords:["APISIX","Plugin","LDAP Authentication","ldap-auth"],description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX ldap-auth \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},i=void 0,p={unversionedId:"plugins/ldap-auth",id:"version-3.2/plugins/ldap-auth",isDocsHomePage:!1,title:"ldap-auth",description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX ldap-auth \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.2/plugins/ldap-auth.md",sourceDirName:"plugins",slug:"/plugins/ldap-auth",permalink:"/zh/docs/apisix/3.2/plugins/ldap-auth",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/plugins/ldap-auth.md",tags:[],version:"3.2",frontMatter:{title:"ldap-auth",keywords:["APISIX","Plugin","LDAP Authentication","ldap-auth"],description:"\u672c\u7bc7\u6587\u6863\u4ecb\u7ecd\u4e86 Apache APISIX ldap-auth \u63d2\u4ef6\u7684\u76f8\u5173\u4fe1\u606f\u3002"},sidebar:"version-3.2/docs",previous:{title:"authz-casbin",permalink:"/zh/docs/apisix/3.2/plugins/authz-casbin"},next:{title:"opa",permalink:"/zh/docs/apisix/3.2/plugins/opa"}},u=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],o={toc:u};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ldap-auth")," \u63d2\u4ef6\u53ef\u7528\u4e8e\u7ed9\u8def\u7531\u6216\u670d\u52a1\u6dfb\u52a0 LDAP \u8eab\u4efd\u8ba4\u8bc1\uff0c\u8be5\u63d2\u4ef6\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-ldap"},"lua-resty-ldap")," \u8fde\u63a5 LDAP \u670d\u52a1\u5668\u3002"),(0,r.kt)("p",null,"\u8be5\u63d2\u4ef6\u9700\u8981\u4e0e Consumer \u4e00\u8d77\u914d\u5408\u4f7f\u7528\uff0cAPI \u7684\u8c03\u7528\u65b9\u53ef\u4ee5\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Basic_access_authentication"},"basic authentication")," \u4e0e LDAP \u670d\u52a1\u5668\u8fdb\u884c\u8ba4\u8bc1\u3002"),(0,r.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,r.kt)("p",null,"Consumer \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"user_dn"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP \u5ba2\u6237\u7aef\u7684 dn\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"cn=user01,ou=users,dc=example,dc=org"),"\u3002\u8be5\u5b57\u6bb5\u652f\u6301\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"td",href:"/zh/docs/apisix/3.2/terminology/secret"},"APISIX Secret")," \u8d44\u6e90\uff0c\u5c06\u503c\u4fdd\u5b58\u5728 Secret Manager \u4e2d\u3002")))),(0,r.kt)("p",null,"Route \u7aef\uff1a"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,r.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,r.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,r.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,r.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base_dn"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP \u670d\u52a1\u5668\u7684 dn\uff0c\u4f8b\u5982\uff1a",(0,r.kt)("inlineCode",{parentName:"td"},"ou=users,dc=example,dc=org"),"\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ldap_uri"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"LDAP \u670d\u52a1\u5668\u7684 URI\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"use_tls"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true")," \u5219\u8868\u793a\u542f\u7528 TLS\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tls_verify"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"\u662f\u5426\u6821\u9a8c LDAP \u670d\u52a1\u5668\u7684\u8bc1\u4e66\u3002\u5982\u679c\u8bbe\u7f6e\u4e3a ",(0,r.kt)("inlineCode",{parentName:"td"},"true"),"\uff0c\u4f60\u5fc5\u987b\u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"td"},"config.yaml")," \u91cc\u9762\u7684 ",(0,r.kt)("inlineCode",{parentName:"td"},"ssl_trusted_certificate"),"\uff0c\u5e76\u4e14\u786e\u4fdd ",(0,r.kt)("inlineCode",{parentName:"td"},"ldap_uri")," \u91cc\u7684 host \u548c\u670d\u52a1\u5668\u8bc1\u4e66\u4e2d\u7684 host \u5339\u914d\u3002")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"uid"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,r.kt)("td",{parentName:"tr",align:null},"cn"),(0,r.kt)("td",{parentName:"tr",align:null},"UID \u5c5e\u6027\u3002")))),(0,r.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u9996\u5148\uff0c\u4f60\u9700\u8981\u521b\u5efa\u4e00\u4e2a Consumer \u5e76\u5728\u5176\u4e2d\u914d\u7f6e\u8be5\u63d2\u4ef6\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "foo",\n    "plugins": {\n        "ldap-auth": {\n            "user_dn": "cn=user01,ou=users,dc=example,dc=org"\n        }\n    }\n}\'\n')),(0,r.kt)("p",null,"\u7136\u540e\u5c31\u53ef\u4ee5\u5728\u6307\u5b9a\u8def\u7531\u6216\u670d\u52a1\u4e2d\u542f\u7528\u8be5\u63d2\u4ef6\uff0c\u5177\u4f53\u4ee3\u7801\u5982\u4e0b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {\n        "ldap-auth": {\n            "base_dn": "ou=users,dc=example,dc=org",\n            "ldap_uri": "localhost:1389",\n            "uid": "cn"\n        },\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,r.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u65b9\u6cd5\u914d\u7f6e\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -uuser01:password1 http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"HTTP/1.1 200 OK\n...\nhello, world\n")),(0,r.kt)("p",null,"\u5982\u679c\u6388\u6743\u4fe1\u606f\u8bf7\u6c42\u5934\u4e22\u5931\u6216\u65e0\u6548\uff0c\u5219\u8bf7\u6c42\u5c06\u88ab\u62d2\u7edd\uff08\u5982\u4e0b\u5c55\u793a\u4e86\u51e0\u79cd\u8fd4\u56de\u7ed3\u679c\uff09\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing authorization in request"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -uuser:password1 http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user authorization"}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i -uuser01:passwordfalse http://127.0.0.1:9080/hello\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Invalid user authorization"}\n')),(0,r.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,r.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"ldap-auth")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\u3002APISIX \u5c06\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/hello",\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}d.isMDXComponent=!0}}]);