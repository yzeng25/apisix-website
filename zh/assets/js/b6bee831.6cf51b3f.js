"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[78325],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,g=d["".concat(o,".").concat(m)]||d[m]||c[m]||l;return n?r.createElement(g,p(p({ref:t},u),{},{components:n})):r.createElement(g,p({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var s=2;s<l;s++)p[s]=n[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},57851:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>p,default:()=>u,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(87462),a=(n(67294),n(3905));const l={title:"ext-plugin-post-resp",keywords:["APISIX","Plugin","ext-plugin-post-resp"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-resp` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},p=void 0,i={unversionedId:"plugins/ext-plugin-post-resp",id:"version-3.0/plugins/ext-plugin-post-resp",isDocsHomePage:!1,title:"ext-plugin-post-resp",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-resp` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.0/plugins/ext-plugin-post-resp.md",sourceDirName:"plugins",slug:"/plugins/ext-plugin-post-resp",permalink:"/zh/docs/apisix/3.0/plugins/ext-plugin-post-resp",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.0/docs/zh/latest/plugins/ext-plugin-post-resp.md",tags:[],version:"3.0",frontMatter:{title:"ext-plugin-post-resp",keywords:["APISIX","Plugin","ext-plugin-post-resp"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5173\u4e8e Apache APISIX `ext-plugin-post-resp` \u63d2\u4ef6\u7684\u57fa\u672c\u4fe1\u606f\u53ca\u4f7f\u7528\u65b9\u6cd5\u3002"},sidebar:"version-3.0/docs",previous:{title:"ext-plugin-post-req",permalink:"/zh/docs/apisix/3.0/plugins/ext-plugin-post-req"},next:{title:"response-rewrite",permalink:"/zh/docs/apisix/3.0/plugins/response-rewrite"}},o=[{value:"\u63cf\u8ff0",id:"\u63cf\u8ff0",children:[]},{value:"\u5c5e\u6027",id:"\u5c5e\u6027",children:[]},{value:"\u542f\u7528\u63d2\u4ef6",id:"\u542f\u7528\u63d2\u4ef6",children:[]},{value:"\u6d4b\u8bd5\u63d2\u4ef6",id:"\u6d4b\u8bd5\u63d2\u4ef6",children:[]},{value:"\u7981\u7528\u63d2\u4ef6",id:"\u7981\u7528\u63d2\u4ef6",children:[]}],s={toc:o};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u63cf\u8ff0"},"\u63cf\u8ff0"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-resp")," \u63d2\u4ef6\u7528\u4e8e\u5728\u6267\u884c\u5185\u7f6e Lua \u63d2\u4ef6\u4e4b\u524d\u548c\u5728 Plugin Runner \u5185\u8fd0\u884c\u7279\u5b9a\u7684 External Plugin\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-resp")," \u63d2\u4ef6\u5c06\u5728\u8bf7\u6c42\u83b7\u53d6\u5230\u4e0a\u6e38\u7684\u54cd\u5e94\u4e4b\u540e\u6267\u884c\u3002"),(0,a.kt)("p",null,"\u542f\u7528\u672c\u63d2\u4ef6\u4e4b\u540e\uff0cAPISIX \u5c06\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/api7/lua-resty-http"},"lua-resty-http")," \u5e93\u5411\u4e0a\u6e38\u53d1\u8d77\u8bf7\u6c42\uff0c\u8fd9\u4f1a\u5bfc\u81f4\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.0/plugins/proxy-control"},"proxy-control")," \u63d2\u4ef6\u4e0d\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.0/plugins/proxy-mirror"},"proxy-mirror")," \u63d2\u4ef6\u4e0d\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.0/plugins/proxy-cache"},"proxy-cache")," \u63d2\u4ef6\u4e0d\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/zh/docs/apisix/3.0/mtls#apisix-%E4%B8%8E%E4%B8%8A%E6%B8%B8%E9%97%B4%E7%9A%84%E5%8F%8C%E5%90%91%E8%AE%A4%E8%AF%81"},"APISIX \u4e0e\u4e0a\u6e38\u95f4\u7684\u53cc\u5411\u8ba4\u8bc1")," \u529f\u80fd\u5c1a\u4e0d\u53ef\u7528")),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u60f3\u4e86\u89e3\u66f4\u591a\u5173\u4e8e External Plugin \u7684\u4fe1\u606f\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/zh/docs/apisix/3.0/external-plugin"},"External Plugin")," \u3002"),(0,a.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"External Plugin \u6267\u884c\u7684\u7ed3\u679c\u4f1a\u5f71\u54cd\u5f53\u524d\u8bf7\u6c42\u7684\u54cd\u5e94\u3002"))),(0,a.kt)("h2",{id:"\u5c5e\u6027"},"\u5c5e\u6027"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"conf"),(0,a.kt)("td",{parentName:"tr",align:null},"array"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null}),(0,a.kt)("td",{parentName:"tr",align:null},'[{"name": "ext-plugin-A", "value": "{\\"enable\\":\\"feature\\"}"}]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u5728 Plugin Runner \u5185\u6267\u884c\u7684\u63d2\u4ef6\u5217\u8868\u7684\u914d\u7f6e\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"allow_degradation"),(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5426"),(0,a.kt)("td",{parentName:"tr",align:null},"false"),(0,a.kt)("td",{parentName:"tr",align:null},"[false, true]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5f53 Plugin Runner \u4e34\u65f6\u4e0d\u53ef\u7528\u65f6\u662f\u5426\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\uff0c\u5f53\u503c\u8bbe\u7f6e\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"true")," \u65f6\u5219\u81ea\u52a8\u5141\u8bb8\u8bf7\u6c42\u7ee7\u7eed\u3002")))),(0,a.kt)("h2",{id:"\u542f\u7528\u63d2\u4ef6"},"\u542f\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u793a\u4f8b\u5c55\u793a\u4e86\u5982\u4f55\u5728\u6307\u5b9a\u8def\u7531\u4e2d\u542f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-resp")," \u63d2\u4ef6\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl -i http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "plugins": {\n        "ext-plugin-post-resp": {\n            "conf" : [\n                {"name": "ext-plugin-A", "value": "{\\"enable\\":\\"feature\\"}"}\n            ]\n        }\n    },\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')),(0,a.kt)("h2",{id:"\u6d4b\u8bd5\u63d2\u4ef6"},"\u6d4b\u8bd5\u63d2\u4ef6"),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u547d\u4ee4\u542f\u7528\u63d2\u4ef6\u540e\uff0c\u53ef\u4ee5\u4f7f\u7528\u5982\u4e0b\u547d\u4ee4\u6d4b\u8bd5\u63d2\u4ef6\u662f\u5426\u542f\u7528\u6210\u529f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},"curl -i http://127.0.0.1:9080/index.html\n")),(0,a.kt)("p",null,"\u5728\u8fd4\u56de\u7ed3\u679c\u4e2d\u53ef\u4ee5\u770b\u5230\u521a\u521a\u914d\u7f6e\u7684 Plugin Runner \u5df2\u7ecf\u88ab\u89e6\u53d1\uff0c\u540c\u65f6 ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-A")," \u63d2\u4ef6\u4e5f\u5df2\u7ecf\u88ab\u6267\u884c\u3002"),(0,a.kt)("h2",{id:"\u7981\u7528\u63d2\u4ef6"},"\u7981\u7528\u63d2\u4ef6"),(0,a.kt)("p",null,"\u5f53\u4f60\u9700\u8981\u7981\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"ext-plugin-post-resp")," \u63d2\u4ef6\u65f6\uff0c\u53ef\u901a\u8fc7\u4ee5\u4e0b\u547d\u4ee4\u5220\u9664\u76f8\u5e94\u7684 JSON \u914d\u7f6e\uff0cAPISIX \u5c06\u4f1a\u81ea\u52a8\u91cd\u65b0\u52a0\u8f7d\u76f8\u5173\u914d\u7f6e\uff0c\u65e0\u9700\u91cd\u542f\u670d\u52a1\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "uri": "/index.html",\n    "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\'\n')))}u.isMDXComponent=!0}}]);