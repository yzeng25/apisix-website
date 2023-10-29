"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[67735],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>d});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function i(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function p(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=t.createContext({}),s=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):i(i({},n),e)),r},c=function(e){var n=s(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},m=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=s(r),d=o,g=m["".concat(l,".").concat(d)]||m[d]||u[d]||a;return r?t.createElement(g,i(i({ref:n},c),{},{components:r})):t.createElement(g,i({ref:n},c))}));function d(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var l in n)hasOwnProperty.call(n,l)&&(p[l]=n[l]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var s=2;s<a;s++)i[s]=r[s];return t.createElement.apply(null,i)}return t.createElement.apply(null,r)}m.displayName="MDXCreateElement"},90468:(e,n,r)=>{r.r(n),r.d(n,{contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var t=r(87462),o=(r(67294),r(3905));const a={title:"Consumer Groups",keywords:["API \u7f51\u5173","Apache APISIX","Consumer Groups"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer Group \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},i=void 0,p={unversionedId:"terminology/consumer-group",id:"version-3.1/terminology/consumer-group",isDocsHomePage:!1,title:"Consumer Groups",description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer Group \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.1/terminology/consumer-group.md",sourceDirName:"terminology",slug:"/terminology/consumer-group",permalink:"/zh/docs/apisix/3.1/terminology/consumer-group",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.1/docs/zh/latest/terminology/consumer-group.md",tags:[],version:"3.1",frontMatter:{title:"Consumer Groups",keywords:["API \u7f51\u5173","Apache APISIX","Consumer Groups"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86 Apache APISIX Consumer Group \u5bf9\u8c61\u7684\u6982\u5ff5\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.1/docs",previous:{title:"Consumer",permalink:"/zh/docs/apisix/3.1/terminology/consumer"},next:{title:"Global rules",permalink:"/zh/docs/apisix/3.1/terminology/global-rule"}},l=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u914d\u7f6e\u793a\u4f8b",id:"\u914d\u7f6e\u793a\u4f8b",children:[]}],s={toc:l};function c(e){let{components:n,...r}=e;return(0,o.kt)("wrapper",(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,o.kt)("p",null,"\u901a\u8fc7 Consumer Groups\uff0c\u4f60\u53ef\u4ee5\u5728\u540c\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\u4e2d\u542f\u7528\u4efb\u610f\u6570\u91cf\u7684",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/terminology/plugin"},"\u63d2\u4ef6"),"\uff0c\u5e76\u5728\u4e00\u4e2a\u6216\u8005\u591a\u4e2a",(0,o.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.1/terminology/consumer"},"\u6d88\u8d39\u8005"),"\u4e2d\u5f15\u7528\u8be5\u6d88\u8d39\u8005\u7ec4\u3002"),(0,o.kt)("h2",{id:"\u914d\u7f6e\u793a\u4f8b"},"\u914d\u7f6e\u793a\u4f8b"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u521b\u5efa\u6d88\u8d39\u8005\u7ec4\u5e76\u5c06\u5176\u7ed1\u5b9a\u5230\u6d88\u8d39\u8005\u4e2d\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumer_groups/company_a \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "limit-count": {\n            "count": 200,\n            "time_window": 60,\n            "rejected_code": 503,\n            "group": "$consumer_group_id"\n        }\n    }\n}\'\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/consumers \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "username": "jack",\n    "plugins": {\n        "key-auth": {\n            "key": "auth-one"\n        }\n    },\n    "group_id": "company_a"\n}\'\n')),(0,o.kt)("p",null,"\u5f53 APISIX \u65e0\u6cd5\u627e\u5230 ",(0,o.kt)("inlineCode",{parentName:"p"},"group_id")," \u4e2d\u5b9a\u4e49\u7684\u6d88\u8d39\u8005\u7ec4\u65f6\uff0c\u521b\u5efa\u6216\u8005\u66f4\u65b0\u6d88\u8d39\u8005\u7684\u8bf7\u6c42\u5c06\u4f1a\u7ec8\u6b62\uff0c\u5e76\u8fd4\u56de\u9519\u8bef\u7801 ",(0,o.kt)("inlineCode",{parentName:"p"},"404"),"\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u6d88\u8d39\u8005\u5df2\u7ecf\u914d\u7f6e\u4e86 ",(0,o.kt)("inlineCode",{parentName:"p"},"plugins")," \u5b57\u6bb5\uff0c\u90a3\u4e48\u6d88\u8d39\u8005\u7ec4\u4e2d\u914d\u7f6e\u7684\u63d2\u4ef6\u5c06\u4e0e\u4e4b\u5408\u5e76\u3002"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u6b64\u5904\u9700\u8981\u6ce8\u610f\u4e24\u70b9\uff1a"),(0,o.kt)("ol",{parentName:"div"},(0,o.kt)("li",{parentName:"ol"},"\u5f53\u5728\u540c\u4e00\u4e2a\u63d2\u4ef6\u5206\u522b\u914d\u7f6e\u5728",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.1/terminology/consumer"},"\u6d88\u8d39\u8005"),"\u3001",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.1/terminology/route"},"\u8def\u7531"),"\u3001",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.1/terminology/plugin-config"},"\u63d2\u4ef6\u914d\u7f6e"),"\u548c",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.1/terminology/service"},"\u670d\u52a1"),"\u4e2d\u65f6\uff0c\u53ea\u6709\u4e00\u4efd\u914d\u7f6e\u662f\u751f\u6548\u7684\uff0c\u5e76\u4e14\u6d88\u8d39\u8005\u7684\u4f18\u5148\u7ea7\u6700\u9ad8\u3002\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.1/terminology/plugin"},"Plugin"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u6d88\u8d39\u8005\u548c\u6d88\u8d39\u8005\u7ec4\u914d\u7f6e\u4e86\u76f8\u540c\u7684\u63d2\u4ef6\uff0c\u5219\u6d88\u8d39\u8005\u4e2d\u7684\u63d2\u4ef6\u914d\u7f6e\u4f18\u5148\u7ea7\u66f4\u9ad8\u3002\u5bf9\u4e8e\u7b2c\u4e00\u70b9\uff0c\u56e0\u4e3a\u6d88\u8d39\u8005\u7ec4\u9700\u8981\u914d\u7f6e\u5728\u6d88\u8d39\u8005\u4e2d\uff0c\u56e0\u6b64\u4f60\u53ea\u9700\u5173\u5fc3\u6d88\u8d39\u8005\u4e2d\u63d2\u4ef6\u7684\u4f18\u5148\u7ea7\u3002")))),(0,o.kt)("p",null,"\u5982\u4e0b\u793a\u4f8b\uff0c\u5047\u5982\u4f60\u914d\u7f6e\u4e86\u4e00\u4e2a\u6d88\u8d39\u8005\u7ec4\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=\u201cConsumer Group\u201d",title:"\u201cConsumer","Group\u201d":!0},'{\n    "id": "bar",\n    "plugins": {\n        "response-rewrite": {\n            "body": "hello"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u5e76\u914d\u7f6e\u4e86\u6d88\u8d39\u8005\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-json",metastring:"title=\u201cConsumer\u201d",title:"\u201cConsumer\u201d"},'{\n    "username": "foo",\n    "group_id": "bar",\n    "plugins": {\n        "basic-auth": {\n            "username": "foo",\n            "password": "bar"\n        },\n        "response-rewrite": {\n            "body": "world"\n        }\n    }\n}\n')),(0,o.kt)("p",null,"\u90a3\u4e48 ",(0,o.kt)("inlineCode",{parentName:"p"},"response-rewrite")," \u4e2d\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"body")," \u5c06\u4fdd\u7559 ",(0,o.kt)("inlineCode",{parentName:"p"},"world"),"\u3002"))}c.isMDXComponent=!0}}]);