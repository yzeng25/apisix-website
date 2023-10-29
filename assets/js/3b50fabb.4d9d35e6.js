"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[47040],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),u=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?a.createElement(k,i(i({ref:t},s),{},{components:n})):a.createElement(k,i({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,i=new Array(l);i[0]=c;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:r,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},67408:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const l={title:"jwt-auth",keywords:["APISIX","Plugin","JWT Auth","jwt-auth"],description:"This document contains information about the Apache APISIX jwt-auth Plugin."},i=void 0,p={unversionedId:"plugins/jwt-auth",id:"version-3.2/plugins/jwt-auth",isDocsHomePage:!1,title:"jwt-auth",description:"This document contains information about the Apache APISIX jwt-auth Plugin.",source:"@site/docs-apisix_versioned_docs/version-3.2/plugins/jwt-auth.md",sourceDirName:"plugins",slug:"/plugins/jwt-auth",permalink:"/docs/apisix/3.2/plugins/jwt-auth",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.2/docs/en/latest/plugins/jwt-auth.md",tags:[],version:"3.2",frontMatter:{title:"jwt-auth",keywords:["APISIX","Plugin","JWT Auth","jwt-auth"],description:"This document contains information about the Apache APISIX jwt-auth Plugin."},sidebar:"version-3.2/docs",previous:{title:"key-auth",permalink:"/docs/apisix/3.2/plugins/key-auth"},next:{title:"basic-auth",permalink:"/docs/apisix/3.2/plugins/basic-auth"}},o=[{value:"Description",id:"description",children:[]},{value:"Attributes",id:"attributes",children:[]},{value:"API",id:"api",children:[]},{value:"Enabling the Plugin",id:"enabling-the-plugin",children:[]},{value:"Example usage",id:"example-usage",children:[]},{value:"Disable Plugin",id:"disable-plugin",children:[]}],u={toc:o};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"description"},"Description"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," Plugin is used to add ",(0,r.kt)("a",{parentName:"p",href:"https://jwt.io/"},"JWT")," authentication to a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/terminology/service"},"Service")," or a ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/terminology/route"},"Route"),"."),(0,r.kt)("p",null,"A ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/terminology/consumer"},"Consumer")," of the service then needs to provide a key through a query string, a request header or a cookie to verify its request."),(0,r.kt)("h2",{id:"attributes"},"Attributes"),(0,r.kt)("p",null,"For Consumer:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Valid values"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Unique key for a Consumer.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"secret"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"The encryption key. If unspecified, auto generated in the background. This field supports saving the value in Secret Manager using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/3.2/terminology/secret"},"APISIX Secret")," resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"public_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True if ",(0,r.kt)("inlineCode",{parentName:"td"},"RS256")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ES256")," is set for the ",(0,r.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RSA or ECDSA public key. This field supports saving the value in Secret Manager using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/3.2/terminology/secret"},"APISIX Secret")," resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"private_key"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"True if ",(0,r.kt)("inlineCode",{parentName:"td"},"RS256")," or ",(0,r.kt)("inlineCode",{parentName:"td"},"ES256")," is set for the ",(0,r.kt)("inlineCode",{parentName:"td"},"algorithm")," attribute."),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"RSA or ECDSA private key. This field supports saving the value in Secret Manager using the ",(0,r.kt)("a",{parentName:"td",href:"/docs/apisix/3.2/terminology/secret"},"APISIX Secret")," resource.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"algorithm"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},'"HS256"'),(0,r.kt)("td",{parentName:"tr",align:null},'["HS256", "HS512", "RS256", "ES256"]'),(0,r.kt)("td",{parentName:"tr",align:null},"Encryption algorithm.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"exp"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"86400"),(0,r.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Expiry time of the token in seconds.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"base64_secret"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null}),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true if the secret is base64 encoded.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"lifetime_grace_period"),(0,r.kt)("td",{parentName:"tr",align:null},"integer"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"0"),(0,r.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,r.kt)("td",{parentName:"tr",align:null},"Define the leeway in seconds to account for clock skew between the server that generated the jwt and the server validating it. Value should be zero (0) or a positive integer.")))),(0,r.kt)("p",null,"NOTE: ",(0,r.kt)("inlineCode",{parentName:"p"},'encrypt_fields = {"secret", "private_key"}')," is also defined in the schema, which means that the field will be stored encrypted in etcd. See ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/plugin-develop#encrypted-storage-fields"},"encrypted storage fields"),"."),(0,r.kt)("p",null,"For Route:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Name"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Required"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"),(0,r.kt)("th",{parentName:"tr",align:null},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"header"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"authorization"),(0,r.kt)("td",{parentName:"tr",align:null},"The header to get the token from.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"query"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"jwt"),(0,r.kt)("td",{parentName:"tr",align:null},"The query string to get the token from. Lower priority than header.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"cookie"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"jwt"),(0,r.kt)("td",{parentName:"tr",align:null},"The cookie to get the token from. Lower priority than query.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"hide_credentials"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"False"),(0,r.kt)("td",{parentName:"tr",align:null},"false"),(0,r.kt)("td",{parentName:"tr",align:null},"Set to true will not pass the authorization request of header\\query\\cookie to the Upstream.")))),(0,r.kt)("p",null,"You can implement ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," with ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/"},"HashiCorp Vault")," to store and fetch secrets and RSA keys pairs from its ",(0,r.kt)("a",{parentName:"p",href:"https://www.vaultproject.io/docs/secrets/kv"},"encrypted KV engine")," using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/terminology/secret"},"APISIX Secret")," resource."),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"This Plugin adds ",(0,r.kt)("inlineCode",{parentName:"p"},"/apisix/plugin/jwt/sign")," as an endpoint."),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"You may need to use the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/plugins/public-api"},"public-api")," plugin to expose this endpoint."))),(0,r.kt)("h2",{id:"enabling-the-plugin"},"Enabling the Plugin"),(0,r.kt)("p",null,"To enable the Plugin, you have to create a Consumer object with the JWT token and configure your Route to use JWT authentication."),(0,r.kt)("p",null,"First, you can create a Consumer object through the Admin API:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "secret": "my-secret-key"\n        }\n    }\n}\'\n')),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"The ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," Plugin uses the HS256 algorithm by default. To use the RS256 algorithm, you can configure the public key and private key and specify the algorithm:"),(0,r.kt)("pre",{parentName:"div"},(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "kerouac",\n    "plugins": {\n        "jwt-auth": {\n            "key": "user-key",\n            "public_key": "-----BEGIN PUBLIC KEY-----\\n\u2026\u2026\\n-----END PUBLIC KEY-----",\n            "private_key": "-----BEGIN RSA PRIVATE KEY-----\\n\u2026\u2026\\n-----END RSA PRIVATE KEY-----",\n            "algorithm": "RS256"\n        }\n    }\n}\'\n')))),(0,r.kt)("p",null,"Once you have created a Consumer object, you can configure a Route to authenticate requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "plugins": {\n        "jwt-auth": {}\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,r.kt)("h2",{id:"example-usage"},"Example usage"),(0,r.kt)("p",null,"You need to first setup a Route for an API that signs the token using the ",(0,r.kt)("a",{parentName:"p",href:"/docs/apisix/3.2/plugins/public-api"},"public-api")," Plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/jas -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/apisix/plugin/jwt/sign",\n    "plugins": {\n        "public-api": {}\n    }\n}\'\n')),(0,r.kt)("p",null,"Now, we can get a token:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Without extension payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Wed, 24 Jul 2019 10:33:31 GMT\nContent-Type: text/plain\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX web server\n\neyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"With extension payload:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl -G --data-urlencode \'payload={"uid":10000,"uname":"test"}\' http://127.0.0.1:9080/apisix/plugin/jwt/sign?key=user-key -i\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"HTTP/1.1 200 OK\nDate: Wed, 21 Apr 2021 06:43:59 GMT\nContent-Type: text/plain; charset=utf-8\nTransfer-Encoding: chunked\nConnection: keep-alive\nServer: APISIX/2.4\n\neyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmFtZSI6InRlc3QiLCJ1aWQiOjEwMDAwLCJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTYxOTA3MzgzOX0.jI9-Rpz1gc3u8Y6lZy8I43RXyCu0nSHANCvfn0YZUCY\n")),(0,r.kt)("p",null,"You can now use this token while making requests:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html -H 'Authorization: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI' -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("p",null,"Without the token, you will receive an error:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'HTTP/1.1 401 Unauthorized\n...\n{"message":"Missing JWT token in request"}\n')),(0,r.kt)("p",null,"You can also pass the token as query parameters:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("p",null,"And also as cookies:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"curl http://127.0.0.1:9080/index.html --cookie jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJrZXkiOiJ1c2VyLWtleSIsImV4cCI6MTU2NDA1MDgxMX0.Us8zh_4VjJXF-TmR5f8cif8mBU7SuefPlpxhH0jbPVI -i\n")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'HTTP/1.1 200 OK\nContent-Type: text/html\nContent-Length: 13175\n...\nAccept-Ranges: bytes\n\n<!DOCTYPE html>\n<html lang="cn">\n...\n')),(0,r.kt)("h2",{id:"disable-plugin"},"Disable Plugin"),(0,r.kt)("p",null,"To disable the ",(0,r.kt)("inlineCode",{parentName:"p"},"jwt-auth")," Plugin, you can delete the corresponding JSON configuration from the Plugin configuration. APISIX will automatically reload and you do not have to restart for this to take effect."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "methods": ["GET"],\n    "uri": "/index.html",\n    "id": 1,\n    "plugins": {},\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}s.isMDXComponent=!0}}]);