"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[29080],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),f=c(t),d=i,m=f["".concat(s,".").concat(d)]||f[d]||u[d]||o;return t?r.createElement(m,a(a({ref:n},p),{},{components:t})):r.createElement(m,a({ref:n},p))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=f;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},97777:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var r=t(87462),i=(t(67294),t(3905));const o={title:"Configuration file switching based on environment variables"},a=void 0,l={unversionedId:"profile",id:"version-3.4/profile",isDocsHomePage:!1,title:"Configuration file switching based on environment variables",description:"The reason the configuration is extracted from the code is to better adapt to changes. Usually our applications have different\noperating environments such as development environment and production environment. Certain configurations of these applications\nwill definitely be different, such as the address of the configuration center.",source:"@site/docs-apisix_versioned_docs/version-3.4/profile.md",sourceDirName:".",slug:"/profile",permalink:"/docs/apisix/profile",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/profile.md",tags:[],version:"3.4",frontMatter:{title:"Configuration file switching based on environment variables"},sidebar:"version-3.4/docs",previous:{title:"Debug Function",permalink:"/docs/apisix/debug-function"},next:{title:"Upgrade Guide",permalink:"/docs/apisix/upgrade-guide-from-2.15.x-to-3.0.0"}},s=[],c={toc:s};function p(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"The reason the configuration is extracted from the code is to better adapt to changes. Usually our applications have different\noperating environments such as development environment and production environment. Certain configurations of these applications\nwill definitely be different, such as the address of the configuration center."),(0,i.kt)("p",null,"If the configuration of all environments is placed in the same file, it is very difficult to manage. After receiving new\nrequirements, we need to change the parameters in the configuration file to the development environment when developing the\ndevelopment environment. You have to change it back. It's very easy to make mistakes."),(0,i.kt)("p",null,"The solution to the above problem is to distinguish the current running environment through environment variables, and switch\nbetween different configuration files through environment variables. The corresponding environment variable in APISIX is: ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")," is not set, the following three configuration files are used by default:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"conf/config.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/apisix.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/debug.yaml")),(0,i.kt)("p",null,"If the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"APISIX_PROFILE")," is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"prod"),", the following three configuration files are used:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"conf/config-prod.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/apisix-prod.yaml"),(0,i.kt)("li",{parentName:"ul"},"conf/debug-prod.yaml")),(0,i.kt)("p",null,"Although this way will increase the number of configuration files, it can be managed independently, and then version management\ntools such as git can be configured, and version management can be better achieved."))}p.isMDXComponent=!0}}]);