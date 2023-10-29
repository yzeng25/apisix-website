"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[8783],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(n),h=o,g=d["".concat(l,".").concat(h)]||d[h]||p[h]||i;return n?r.createElement(g,a(a({ref:t},u),{},{components:n})):r.createElement(g,a({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,a[1]=s;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},25921:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const i={title:"Contributing to apisix-ingress-controller"},a=void 0,s={unversionedId:"contribute",id:"version-0.4.0/contribute",isDocsHomePage:!1,title:"Contributing to apisix-ingress-controller",description:"Firstly, thanks for your interest in contributing! I hope that this will be a\npleasant first experience for you, and that you will return to continue\ncontributing.",source:"@site/docs-apisix-ingress-controller_versioned_docs/version-0.4.0/contribute.md",sourceDirName:".",slug:"/contribute",permalink:"/zh/docs/ingress-controller/0.4.0/contribute",editUrl:"/zh/edit#https://github.com/apache/apisix-ingress-controller/edit/v0.4.0/docs/zh/latest/contribute.md",tags:[],version:"0.4.0",frontMatter:{title:"Contributing to apisix-ingress-controller"},sidebar:"version-0.4.0/docs",previous:{title:"Developing for Apache APISIX Ingress Controller",permalink:"/zh/docs/ingress-controller/0.4.0/development"},next:{title:"FAQ",permalink:"/zh/docs/ingress-controller/0.4.0/FAQ"}},l=[{value:"How to contribute",id:"how-to-contribute",children:[]},{value:"How to report a bug",id:"how-to-report-a-bug",children:[]},{value:"How to add a new feature or change an existing one",id:"how-to-add-a-new-feature-or-change-an-existing-one",children:[]}],c={toc:l};function u(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Firstly, thanks for your interest in contributing! I hope that this will be a\npleasant first experience for you, and that you will return to continue\ncontributing."),(0,o.kt)("h2",{id:"how-to-contribute"},"How to contribute"),(0,o.kt)("p",null,"Most of the contributions that we receive are code contributions, but you can\nalso contribute to the documentation or simply report solid bugs\nfor us to fix."),(0,o.kt)("p",null," For new contributors, please take a look at issues with a tag called ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22good+first+issue%22"},"Good first issue")," or ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues?q=is%3Aissue+is%3Aopen+label%3A%22help+wanted%22"},"Help wanted"),"."),(0,o.kt)("h2",{id:"how-to-report-a-bug"},"How to report a bug"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Ensure the bug was not already reported")," by searching on GitHub under ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"Issues"),".")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"If you're unable to find an open issue addressing the problem, ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues/new"},"open a new one"),". Be sure to include a ",(0,o.kt)("strong",{parentName:"p"},"title and clear description"),", as much relevant information as possible, and a ",(0,o.kt)("strong",{parentName:"p"},"code sample")," or an ",(0,o.kt)("strong",{parentName:"p"},"executable test case")," demonstrating the expected behavior that is not occurring."))),(0,o.kt)("h2",{id:"how-to-add-a-new-feature-or-change-an-existing-one"},"How to add a new feature or change an existing one"),(0,o.kt)("p",null,"Before making any significant changes, please ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix-ingress-controller/issues"},"open an issue"),". Discussing your proposed changes ahead of time will make the contribution process smooth for everyone."),(0,o.kt)("p",null,"Once we've discussed your changes and you've got your code ready, make sure that tests are passing and open your pull request. Your PR is most likely to be accepted if it:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Update the README.md with details of changes to the interface."),(0,o.kt)("li",{parentName:"ul"},"Includes tests for new functionality."),(0,o.kt)("li",{parentName:"ul"},'References the original issue in the description, e.g. "Resolves #123".'),(0,o.kt)("li",{parentName:"ul"},"Has a ",(0,o.kt)("a",{parentName:"li",href:"http://tbaggery.com/2008/04/19/a-note-about-git-commit-messages.html"},"good commit message"),".")))}u.isMDXComponent=!0}}]);