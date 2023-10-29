"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6449],{35318:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(27378);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=l(r),b=a,f=m["".concat(c,".").concat(b)]||m[b]||u[b]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},44705:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var n=r(25773),a=(r(27378),r(35318));const o={title:"Stable Product Delivery with Cypress",author:"Yi Sun",authorURL:"https://github.com/LiteSun",authorImageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4",keywords:["API Gateway","APISIX","Apache APISIX","Helm Chart"],description:"This article describes what E2E testing is and why the API Gateway Apache APISIX dashboard uses Cypress for stable product delivery.",tags:["Ecosystem"]},i=void 0,s={permalink:"/blog/2021/02/08/stable-product-delivery-with-cypress",source:"@site/blog/2021/02/08/stable-product-delivery-with-cypress.md",title:"Stable Product Delivery with Cypress",description:"This article describes what E2E testing is and why the API Gateway Apache APISIX dashboard uses Cypress for stable product delivery.",date:"2021-02-08T00:00:00.000Z",formattedDate:"February 8, 2021",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:5.515,truncated:!0,authors:[{name:"Yi Sun",url:"https://github.com/LiteSun",imageURL:"https://avatars.githubusercontent.com/u/31329157?s=400&u=e81b4bb4db2be162c1fcac6d188f5b0f82f71920&v=4"}],prevItem:{title:"Install Apache APISIX from Helm Charts",permalink:"/blog/2021/02/26/install-apache-apisix-from-helm-charts"},nextItem:{title:"Run Ingress APISIX on Amazon EKS",permalink:"/blog/2021/01/21/run-ingress-apisix-on-amazon-eks"}},c={authorsImageUrls:[void 0]},l=[],p={toc:l};function u(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"This article explains how Yi Sun, GitHub ID ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/LiteSun"},"@LiteSun"),", became Apache APISIX Committer from ",(0,a.kt)("a",{parentName:"p",href:"https://www.apiseven.com/"},"API7.ai"),", implements stable product delivery with Cypress.")))}u.isMDXComponent=!0}}]);