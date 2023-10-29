"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[166],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>A});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(a),A=n,h=m["".concat(o,".").concat(A)]||m[A]||s[A]||l;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=m;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},72321:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>s,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=a(25773),n=(a(27378),a(35318));const l={title:"GCP\u3001AWS\u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5\u5bf9\u6bd4",authors:[{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"\u6797\u4e9a\u4fca",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4"}],keywords:["API \u7f51\u5173","ARM","Azure","AWS","Oracle","Google","Apache APISIX"],description:"\u672c\u6587\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u6765\u6bd4\u8f83 GCP\u3001AWS \u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002",tags:["Ecosystem"]},i=void 0,p={permalink:"/zh/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix",source:"@site/blog/2022/08/12/arm-performance-google-aws-azure-with-apisix.md",title:"GCP\u3001AWS\u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5\u5bf9\u6bd4",description:"\u672c\u6587\u4f7f\u7528 API \u7f51\u5173 Apache APISIX \u6765\u6bd4\u8f83 GCP\u3001AWS \u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002",date:"2022-08-12T00:00:00.000Z",formattedDate:"2022\u5e748\u670812\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:10.76,truncated:!0,authors:[{name:"\u8d75\u58eb\u745e",title:"Author",url:"https://github.com/soulbird",image_url:"https://github.com/soulbird.png",imageURL:"https://github.com/soulbird.png"},{name:"\u82cf\u94b0",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"},{name:"\u6797\u4e9a\u4fca",title:"Technical Writer",url:"https://github.com/Yilialinn",image_url:"https://avatars.githubusercontent.com/u/114121331?v=4",imageURL:"https://avatars.githubusercontent.com/u/114121331?v=4"}],prevItem:{title:"Apache APISIX \u8fd0\u884c\u65f6\u52a8\u6001\u8c03\u8bd5\u529f\u80fd\u8be6\u89e3",permalink:"/zh/blog/2022/08/19/apache-apisix-runtime-dynamic-debugging"},nextItem:{title:"\u793e\u533a\u53cc\u5468\u62a5 (7.16 - 7.31)",permalink:"/zh/blog/2022/08/09/weekly-report-0731"}},o={authorsImageUrls:[void 0,void 0,void 0]},u=[{value:"\u80cc\u666f",id:"\u80cc\u666f",children:[],level:2},{value:"\u4e91\u5382\u5546 ARM \u670d\u52a1\u5668\u4ecb\u7ecd",id:"\u4e91\u5382\u5546-arm-\u670d\u52a1\u5668\u4ecb\u7ecd",children:[{value:"AWS Graviton",id:"aws-graviton",children:[],level:3},{value:"Google Cloud Platform T2A",id:"google-cloud-platform-t2a",children:[],level:3},{value:"Azure ARM-based Virtual Machines",id:"azure-arm-based-virtual-machines",children:[],level:3},{value:"Oracle Cloud Infrastructure Ampere A1 Compute",id:"oracle-cloud-infrastructure-ampere-a1-compute",children:[],level:3}],level:2},{value:"\u4e91\u5382\u5546 ARM \u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5",id:"\u4e91\u5382\u5546-arm-\u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5",children:[{value:"\u6d4b\u8bd5\u7528\u4f8b",id:"\u6d4b\u8bd5\u7528\u4f8b",children:[],level:3},{value:"\u6d4b\u8bd5\u7ed3\u679c",id:"\u6d4b\u8bd5\u7ed3\u679c",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",children:[],level:2}],c={toc:u};function s(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4f7f\u7528 Apache APISIX \u6765\u6bd4\u8f83 GCP\u3001AWS\u3001Azure \u548c Oracle ARM \u67b6\u6784\u670d\u52a1\u5668\u5728\u7f51\u7edc IO \u5bc6\u96c6\u578b\u573a\u666f\u4e0b\u7684\u6027\u80fd\u3002")),(0,n.kt)("h2",{id:"\u80cc\u666f"},"\u80cc\u666f"),(0,n.kt)("p",null,"ARM \u67b6\u6784\u5c5e\u4e8e ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Reduced_instruction_set_computer"},"RISC\uff08Reduced instruction set computer\uff09\u8bbe\u8ba1\u5bb6\u65cf"),"\uff0cRISC \u5fae\u5904\u7406\u5668\u67b6\u6784\u8bbe\u8ba1\u901a\u8fc7\u4f7f\u7528\u4e00\u7ec4\u9ad8\u5ea6\u4f18\u5316\u7684\u6307\u4ee4\uff0c\u4f7f\u5c0f\u578b\u5904\u7406\u5668\u80fd\u591f\u6709\u6548\u5730\u5904\u7406\u590d\u6742\u7684\u4efb\u52a1\u3002ARM \u67b6\u6784\u88ab\u5e7f\u6cdb\u5730\u4f7f\u7528\u5728\u8bb8\u591a\u5d4c\u5165\u5f0f\u7cfb\u7edf\u8bbe\u8ba1\u4e2d\uff0c\u5df2\u6210\u4e3a\u5168\u7403\u6700\u5927\u7684\u8ba1\u7b97\u673a\u751f\u6001\u7cfb\u7edf\u548c\u79fb\u52a8\u8bbe\u5907\u7684\u57fa\u77f3\uff0c\u7531\u4e8e\u5b83\u529f\u8017\u4f4e\u3001\u6210\u672c\u4f4e\u3001\u6548\u80fd\u9ad8\u4ee5\u53ca\u8bb8\u53ef\u7075\u6d3b\uff0c\u8bb8\u591a\u4e13\u5bb6\u89c6\u5176\u4e3a\u4e91\u8ba1\u7b97\u7684\u672a\u6765\u3002\u56e0\u6b64\uff0c\u4ee5 AWS\uff08Amazon Web Services\uff09\u3001GCP\uff08Google Cloud Platform\uff09\u3001Azure\uff08Microsoft Azure\uff09\u548c Oracle \u4e3a\u9996\u7684\u4e3b\u6d41\u4e91\u5382\u5546\u90fd\u9646\u7eed\u63a8\u51fa\u4e86 ARM \u67b6\u6784\u7684\u670d\u52a1\u5668\uff0c\u672c\u6587\u5c06\u9009\u53d6\u8fd9\u51e0\u4e2a\u5382\u5546\u7684\u670d\u52a1\u5668\u8fdb\u884c\u6027\u80fd\u6d4b\u8bd5\u3002\u9996\u5148\u8ba9\u6211\u4eec\u4e86\u89e3\u4e0b\u8fd9\u56db\u5927\u5382\u5546\u53ca\u5176\u4ea7\u54c1\u3002"),(0,n.kt)("h2",{id:"\u4e91\u5382\u5546-arm-\u670d\u52a1\u5668\u4ecb\u7ecd"},"\u4e91\u5382\u5546 ARM \u670d\u52a1\u5668\u4ecb\u7ecd"),(0,n.kt)("h3",{id:"aws-graviton"},"AWS Graviton"),(0,n.kt)("p",null,"\u81ea 2018 \u5e74\u8d77\uff0c\u7ecf\u5386\u56db\u5e74\u7684\u53d1\u5c55\uff0cAWS Graviton \u5df2\u7ecf\u53d1\u5c55\u5230\u7b2c\u4e09\u4ee3\uff0cAWS \u8bbe\u8ba1\u7684 AWS Graviton \u5904\u7406\u5668\u4e3a Amazon EC2 \u4e2d\u8fd0\u884c\u7684\u4e91\u5de5\u4f5c\u8d1f\u8f7d\u63d0\u4f9b\u6700\u4f73\u6027\u4ef7\u6bd4\u3002\u8fd9\u4e09\u4ee3\u5904\u7406\u5668\u7684\u7279\u5f81\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AWS Graviton1")," \u5904\u7406\u5668\u91c7\u7528\u5b9a\u5236\u82af\u7247\u548c 64 \u4f4d Neoverse \u5185\u6838\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AWS Graviton2")," \u5904\u7406\u5668\u57fa\u4e8e Graviton2 \u7684\u5b9e\u4f8b\u652f\u6301\u5e7f\u6cdb\u7684\u901a\u7528\u578b\u3001\u7a81\u53d1\u578b\u3001\u8ba1\u7b97\u4f18\u5316\u578b\u3001\u5185\u5b58\u4f18\u5316\u578b\u3001\u5b58\u50a8\u4f18\u5316\u578b\u548c\u52a0\u901f\u8ba1\u7b97\u578b\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5305\u62ec\u5e94\u7528\u7a0b\u5e8f\u670d\u52a1\u5668\u3001\u5fae\u670d\u52a1\u3001\u9ad8\u6027\u80fd\u8ba1\u7b97 (HPC)\u3001\u57fa\u4e8e CPU \u7684\u673a\u5668\u5b66\u4e60 (ML) \u63a8\u7406\u3001\u89c6\u9891\u7f16\u7801\u3001\u7535\u5b50\u8bbe\u8ba1\u81ea\u52a8\u5316\u3001\u6e38\u620f\u3001\u5f00\u6e90\u6570\u636e\u5e93\u548c\u5185\u5b58\u4e2d\u7684\u7f13\u5b58\u3002\u540c\u65f6\u4e3a\u63d0\u4f9b\u4e00\u7ad9\u5f0f\u670d\u52a1\u4f53\u9a8c\uff0c\u8bb8\u591a AWS \u670d\u52a1\u4e5f\u652f\u6301\u57fa\u4e8e Graviton2 \u7684\u5b9e\u4f8b\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"AWS Graviton3")," \u5904\u7406\u5668\u4f5c\u4e3a\u8be5\u7cfb\u5217\u7684\u6700\u65b0\u4ea7\u54c1\uff0c\u76f8\u6bd4 AWS Graviton2 \u8ba1\u7b97\u6027\u80fd\u63d0\u9ad825%\uff0c\u6d6e\u70b9\u6027\u80fd\u63d0\u9ad82\u500d\uff0c\u52a0\u5bc6\u5de5\u4f5c\u8d1f\u8f7d\u6027\u80fd\u6700\u591a\u52a0\u5feb 2 \u500d\u3002\u9488\u5bf9\u673a\u5668\u5b66\u4e60 (ML) \u5de5\u4f5c\u8d1f\u8f7d\uff0cAWS Graviton3 \u5904\u7406\u5668\u6240\u63d0\u4f9b\u7684\u6027\u80fd\u6bd4 AWS Graviton2 \u5904\u7406\u5668\u9ad8\u51fa\u591a\u8fbe 3 \u500d\uff0c\u5e76\u652f\u6301 bfloat16\u3002\u5b83\u4eec\u8fd8\u652f\u6301 DDR5 \u5185\u5b58\uff0c\u76f8\u6bd4 DDR4 \u5185\u5b58\u5e26\u5bbd\u589e\u52a0\u4e86 50%\u3002")),(0,n.kt)("p",null,"\u4e0b\u56fe\u5c55\u793a\u4e86\u642d\u8f7d AWS Graviton3 \u5904\u7406\u5668\u7684\u4e3b\u8981\u673a\u578b\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0812/1.png",alt:"AWS Graviton3 \u5904\u7406\u5668\u4e3b\u8981\u673a\u578b"})),(0,n.kt)("h3",{id:"google-cloud-platform-t2a"},"Google Cloud Platform T2A"),(0,n.kt)("p",null,"2022\u5e747\u6708\uff0c\u8c37\u6b4c\u4e91\u9996\u6b21\u63a8\u51fa ARM \u67b6\u6784\u7684\u865a\u62df\u673a\u9884\u89c8\u7248\uff0c\u5b83\u7531 Ampere\xae Altra\xae \u5904\u7406\u5668\u63d0\u4f9b\u652f\u6301\uff0c\u63d0\u4f9b\u5353\u8d8a\u7684\u5355\u7ebf\u7a0b\u6027\u80fd\u3002T2A VM \u6709\u591a\u79cd\u9884\u5b9a\u4e49\u7684 VM \u4ea7\u54c1\u5f62\u6001\uff0c\u6bcf\u4e2a VM \u6700\u591a\u6709 48 \u4e2a vCPU\uff0c\u6bcf\u4e2a vCPU \u6709 4GB \u5185\u5b58\u3002\u5b83\u4eec\u53ef\u4ee5\u63d0\u4f9b\u9ad8\u8fbe 32 Gbps \u7684\u7f51\u7edc\u5e26\u5bbd\u548c\u5e7f\u6cdb\u7684\u7f51\u7edc\u9644\u52a0\u5b58\u50a8\u9009\u9879\uff0c\u4f7f T2A VM \u975e\u5e38\u9002\u5408\u6a2a\u5411\u6269\u5c55\u5de5\u4f5c\u8d1f\u8f7d\uff0c\u5305\u62ec Web \u670d\u52a1\u5668\u3001\u5bb9\u5668\u5316\u5fae\u670d\u52a1\u3001\u6570\u636e\u8bb0\u5f55\u5904\u7406\u3001\u5a92\u4f53\u8f6c\u7801\u548c\u5927\u578b Java \u5e94\u7528\u7a0b\u5e8f\u3002\u53e6\u5916\uff0c\u5b83\u8fd8\u5177\u5907\u4ee5\u4e0b\u4e24\u5927\u7279\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u4e0e\u8c37\u6b4c\u4e91\u751f\u6001\u7cfb\u7edf\u96c6\u6210"),"\uff1aT2A \u865a\u62df\u673a\u652f\u6301\u5927\u591a\u6570\u6d41\u884c\u7684Linux\u64cd\u4f5c\u7cfb\u7edf\uff0c\u4f8b\u5982 RHEL\u3001CentOS\u3001Ubuntu \u548c Rocky Linux\uff1b\u8fd8\u652f\u6301 Container-Optimized OS\uff0c\u4ee5\u5feb\u901f\u3001\u9ad8\u6548\u3001\u5b89\u5168\u5730\u542f\u52a8 Docker \u5bb9\u5668\uff1b\u540c\u65f6\uff0c\u5728 Google Cloud \u4e0a\u6784\u5efa\u5e94\u7528\u7a0b\u5e8f\u7684\u5f00\u53d1\u4eba\u5458\u53ef\u4ee5\u5c06\u591a\u4e2a Google Cloud \u670d\u52a1\u4e0e T2A \u865a\u62df\u673a\u4e00\u8d77\u4f7f\u7528\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"ISV \u5408\u4f5c\u4f19\u4f34\u548c\u751f\u6001\u7cfb\u7edf"),"\uff1aAmpere \u5f53\u524d\u5df2\u7f57\u5217\u4e86 100 \u591a\u4e2a\u5df2\u7ecf\u5728\u57fa\u4e8e Ampere \u7684 T2A \u865a\u62df\u673a\u4e0a\u8fd0\u884c\u7684\u5e94\u7528\u7a0b\u5e8f\u3001\u6570\u636e\u5e93\u3001\u4e91\u539f\u751f\u8f6f\u4ef6\u548c\u7f16\u7a0b\u8bed\u8a00\uff0c\u6570\u91cf\u8fd8\u5728\u4e0d\u65ad\u589e\u52a0\u3002")),(0,n.kt)("p",null,"\u4e3b\u8981\u673a\u578b\u5982\u4e0b\u56fe\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0812/2.png",alt:"Tau T2A VM"})),(0,n.kt)("h3",{id:"azure-arm-based-virtual-machines"},"Azure ARM-based Virtual Machines"),(0,n.kt)("p",null,"2022 \u5e74 4 \u6708\uff0c\u5fae\u8f6f\u5ba3\u5e03\u63a8\u51fa\u57fa\u4e8e Ampere\xae Altra\xae Arm \u5904\u7406\u5668\u7684 Azure \u865a\u62df\u673a\u7cfb\u5217\u9884\u89c8\u7248\u3002\u65b0\u7684 VM \u65e8\u5728\u9ad8\u6548\u8fd0\u884c\u6a2a\u5411\u6269\u5c55\u5de5\u4f5c\u8d1f\u8f7d\u3001Web \u670d\u52a1\u5668\u3001\u5e94\u7528\u7a0b\u5e8f\u670d\u52a1\u5668\u3001\u5f00\u6e90\u6570\u636e\u5e93\u3001\u4e91\u539f\u751f\u4ee5\u53ca\u4e30\u5bcc\u7684 .NET \u5e94\u7528\u7a0b\u5e8f\u3001Java \u5e94\u7528\u7a0b\u5e8f\u3001\u6e38\u620f\u670d\u52a1\u5668\u548c\u5a92\u4f53\u670d\u52a1\u5668\u7b49\u3002\u65b0\u7684 VM \u7cfb\u5217\u5305\u62ec\u901a\u7528 Dpsv5 \u548c\u5185\u5b58\u4f18\u5316\u7684 Epsv5 VM\uff0c\u4e3b\u8981\u673a\u578b\u5982\u4e0b\u56fe\u6240\u793a:"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0812/3.png",alt:"Dpsv5 \u548c Epsv5 VM"})),(0,n.kt)("h3",{id:"oracle-cloud-infrastructure-ampere-a1-compute"},"Oracle Cloud Infrastructure Ampere A1 Compute"),(0,n.kt)("p",null,"2021 \u5e74 5 \u6708\u5e95\uff0c\u7532\u9aa8\u6587\u53d1\u5e03\u4e86\u9996\u6b3e\u4ee5 Arm \u4e3a\u57fa\u7840\u7684\u8fd0\u7b97\u4ea7\u54c1\uff1aOCI Ampere A1 Compute\u3002\u8be5\u4ea7\u54c1\u5c06\u53ef\u4ee5\u5728 Oracle \u4e91\u7aef\u57fa\u7840\u8bbe\u65bd (Oracle Cloud Infrastructure\uff0c\u4ee5\u4e0b\u7b80\u79f0 OCI) \u4e0a\u8fd0\u884c\uff0c\u4e3b\u8981\u673a\u578b\u662f\uff1aVM.Standard.A1.Flex\uff08\u4ee5\u4e0b\u7b80\u79f0 OCI A1\uff09\uff0c\u5176CPU \u6838\u5fc3\u548c\u5185\u5b58\u90fd\u53ef\u4ee5\u7075\u6d3b\u914d\u7f6e\u3002"),(0,n.kt)("p",null,"\u4e3a\u4e86\u652f\u6301 OCI \u4e2d\u7684\u65b0 Ampere A1 Compute \u5b9e\u4f8b\uff0c Oracle \u521b\u5efa\u4e86\u4e00\u4e2a ",(0,n.kt)("a",{parentName:"p",href:"https://blogs.oracle.com/cloud-infrastructure/oracle-makes-building-applications-on-ampere-a1-compute-instances-easy"},"Arm \u5f00\u53d1\u4eba\u5458\u751f\u6001\u7cfb\u7edf"),"\uff0c\u4f7f\u5f00\u53d1\u4eba\u5458\u80fd\u591f\u5728 OCI Arm \u5b9e\u4f8b\u4e0a\u65e0\u7f1d\u8f6c\u6362\u3001\u6784\u5efa\u548c\u8fd0\u884c\u5e94\u7528\u7a0b\u5e8f\u3002\u6b64\u5916\uff0cOracle \u5df2\u4e0e Ampere Computing\u3001Arm\u3001GitLab\u3001Jenkins \u7b49\u516c\u53f8\u5408\u4f5c\uff0c\u4ee5\u52a0\u901f Arm \u5f00\u53d1\u8005\u751f\u6001\u7cfb\u7edf\u3002Arm \u5904\u7406\u5668\u5df2\u4ece\u79fb\u52a8\u8bbe\u5907\u53d1\u5c55\u4e3a\u4e91\u7aef\u670d\u52a1\u5668\uff0c\u4e3a\u5f00\u53d1\u4eba\u5458\u63d0\u4f9b\u5de5\u5177\u548c\u5e73\u53f0\uff0c\u4ee5\u8fc7\u6e21\u3001\u6784\u5efa\u548c\u8fd0\u884c\u57fa\u4e8e Arm \u7684\u5de5\u4f5c\u8d1f\u8f7d\u3002"),(0,n.kt)("h2",{id:"\u4e91\u5382\u5546-arm-\u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5"},"\u4e91\u5382\u5546 ARM \u670d\u52a1\u5668\u6027\u80fd\u6d4b\u8bd5"),(0,n.kt)("p",null,"\u4e0b\u9762\u6211\u4eec\u5c06\u901a\u8fc7\u6d4b\u8bd5\u5355\u6838\u5fc3\u6027\u80fd\u6765\u53cd\u6620\u5404\u670d\u52a1\u5668\u7684\u6574\u4f53\u6027\u80fd\u3002\u8fd9\u91cc\u9009\u53d6\u7f51\u7edc IO \u5bc6\u96c6\u578b\u7684 API \u7f51\u5173 ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX"),"\uff0c\u5206\u522b\u5728 AWS c7g.large\u3001GCP t2a-standard-2\u3001Azure D2ps v5\uff08\u5c5e\u4e8e Dpsv5 \u7cfb\u5217\uff0c\u53cc\u6838 CPU\uff09\u548c OCI A1 \u56db\u6b3e\u673a\u578b\u4e0a\u7ed1\u5b9a\u5355\u4e2a CPU \u6838\u5fc3\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff0c\u5e76\u901a\u8fc7 QPS \u548c\u54cd\u5e94\u5ef6\u8fdf\u4e24\u4e2a\u6307\u6807\u6765\u5206\u6790\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"Apache APISIX")," \u662f\u4e00\u4e2a\u4e91\u539f\u751f\u3001\u9ad8\u6027\u80fd\u3001\u53ef\u6269\u5c55\u3001\u5f00\u6e90\u7684 API \u7f51\u5173\u3002\u4e0e\u4f20\u7edf API \u7f51\u5173\u76f8\u6bd4\uff0cApache APISIX \u57fa\u4e8e NGINX \u4e0e LuaJIT \u5f00\u53d1\uff0c\u5177\u6709\u52a8\u6001\u8def\u7531\u548c\u63d2\u4ef6\u70ed\u52a0\u8f7d\u7b49\u7279\u6027\uff0c\u975e\u5e38\u9002\u5408\u4e91\u539f\u751f\u67b6\u6784\u4e0b\u7684 API \u7ba1\u7406\u3002\u67b6\u6784\u56fe\u5982\u4e0b\u6240\u793a\uff1a"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0812/4.png",alt:"Apache APISIX"})),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528 Apache APISIX \u5206\u522b\u5728 AWS c7g.large\u3001GCP t2a-standard-2\u3001Azure D2ps v5 \uff08\u867d\u7136\u540d\u79f0\u542bD2ps\uff0c\u4f46\u5b9e\u9645\u662f\u5c5e\u4e8e Dpsv5 \u7cfb\u5217\u7684\u53cc\u6838 CPU\uff09\u548c OCI A1 \u56db\u6b3e\u673a\u578b\u4e0a\u7ed1\u5b9a\u5355\u4e2a CPU \u6838\u5fc3\u8fdb\u884c\u538b\u529b\u6d4b\u8bd5\uff0c\u5e76\u901a\u8fc7 QPS \u548c\u54cd\u5e94\u5ef6\u8fdf\u4e24\u4e2a\u6307\u6807\u6765\u5206\u6790\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002"),(0,n.kt)("p",null,"\u6211\u4eec\u5c06\u4f7f\u7528 APISIX \u5b98\u65b9\u5f00\u6e90\u7684",(0,n.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/benchmark/run.sh"},"\u6027\u80fd\u6d4b\u8bd5\u811a\u672c"),"\u8fdb\u884c\u6d4b\u8bd5\u3002"),(0,n.kt)("h3",{id:"\u6d4b\u8bd5\u7528\u4f8b"},"\u6d4b\u8bd5\u7528\u4f8b"),(0,n.kt)("p",null,"\u672c\u6587\u6211\u4eec\u5c06\u6d4b\u8bd5 Apache APISIX \u5728\u4e24\u4e2a\u5178\u578b\u573a\u666f\u4e0b\u7684\u8868\u73b0\uff0c\u4ee5\u4fbf\u83b7\u53d6\u66f4\u52a0\u771f\u5b9e\u3001\u4e30\u5bcc\u7684\u6d4b\u8bd5\u6570\u636e\u8fdb\u884c\u5bf9\u6bd4\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u573a\u666f\u4e00\uff1a\u5355\u4e2a\u4e0a\u6e38\u3002")," \u8be5\u573a\u666f\u4e0b\u4f7f\u7528\u5355\u4e2a\u4e0a\u6e38\uff08\u4e0d\u5305\u542b\u4efb\u4f55\u63d2\u4ef6\uff09\uff0c\u4e3b\u8981\u6d4b\u8bd5 APISIX \u5728\u7eaf\u4ee3\u7406\u56de\u6e90\u6a21\u5f0f\u4e0b\u7684\u6027\u80fd\u8868\u73b0\u3002"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u573a\u666f\u4e8c\uff1a\u5355\u4e0a\u6e38+\u591a\u63d2\u4ef6\u3002")," \u8be5\u573a\u666f\u4f7f\u7528\u5355\u4e0a\u6e38\u4e0e\u591a\u63d2\u4ef6\u914d\u5408\uff0c\u5728\u8fd9\u91cc\u4f7f\u7528\u4e86\u4e24\u4e2a\u63d2\u4ef6\u3002\u4e3b\u8981\u6d4b\u8bd5 APISIX \u5728\u5f00\u542f ",(0,n.kt)("inlineCode",{parentName:"li"},"limit-count")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"prometheus")," \u4e24\u4e2a\u6838\u5fc3\u6d88\u8017\u6027\u80fd\u63d2\u4ef6\u65f6\u7684\u6027\u80fd\u8868\u73b0\u3002")),(0,n.kt)("h3",{id:"\u6d4b\u8bd5\u7ed3\u679c"},"\u6d4b\u8bd5\u7ed3\u679c"),(0,n.kt)("p",null,"\u4e0b\u56fe\u662fAWS c7g.large\u3001GCP t2a-standard-2\u3001Azure D2ps v5 \u548c OCI A1 \u56db\u6b3e\u673a\u578b\u7684 QPS\uff08\u6bcf\u79d2\u67e5\u8be2\u6570\uff09\u6d4b\u8bd5\u7ed3\u679c\uff0cQPS \u6570\u503c\u8d8a\u5927\u4ee3\u8868\u8be5\u670d\u52a1\u5668\u7684\u6027\u80fd\u8d8a\u597d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/14/6348f70deefc4.png",alt:"QPS \u7ed3\u679c"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6027\u80fd\u4ece\u4f18\u81f3\u52a3\u8fdb\u884c\u6392\u5e8f\uff1a"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},"\u573a\u666f\u4e00\uff1aAWS c7g.large > Azure D2ps v5 > OCI A1 > GCP t2a-standard-2")),(0,n.kt)("p",{parentName:"li"},"  \u5728\u5355\u4e2a\u4e0a\u6e38\u4e0d\u5305\u542b\u4efb\u4f55\u63d2\u4ef6\u7684\u60c5\u51b5\u4e0b\uff0c AWS c7g.large \u7684 QPS \u8fbe\u5230 23000 \u6b21/\u79d2\uff0c\u6027\u80fd\u51e0\u4e4e\u662f\u6700\u843d\u540e\u7684 GCP t2a-standard-2 \uff08QPS \u4e3a 11300 \u6b21/\u79d2\uff09\u7684\u4e24\u500d\uff0cAzure D2ps v5\u3001OCI A1 \u548c GCP t2a-standard-2 \u8fd9\u4e09\u8005\u5dee\u8ddd\u4e0d\u5927\uff0cOCI A1 \u548c GCP t2a-standard-2 \u6027\u80fd\u76f8\u5f53\uff0c\u4ec5\u76f8\u5dee 200 \u6b21/\u79d2\u3002"),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("strong",{parentName:"p"},"\u573a\u666f\u4e8c\uff1aAWS c7g.large > Azure D2ps v5 > GCP t2a-standard-2 > OCI A1")),(0,n.kt)("p",{parentName:"li"},"  \u5728\u5355\u4e2a\u4e0a\u6e38\u53ca\u4e24\u4e2a\u63d2\u4ef6\u7684\u573a\u666f\u4e0b\uff0c AWS c7g.large \u7684 QPS \u8fbe 18000 \u6b21/\u79d2\uff0c\u4ecd\u4fdd\u6301\u9886\u5148\uff0c\u4f46\u5dee\u8ddd\u6709\u6240\u7f29\u5c0f\uff0cAzure D2ps v5 \u7684\u6027\u80fd\u7565\u9ad8\u4e8e OCI A1\uff0c\u4ec5\u76f8\u5dee 400 \u6b21/\u79d2\u3002"))),(0,n.kt)("p",null,"\u4e0b\u56fe\u662f\u54cd\u5e94\u5ef6\u8fdf\u6d4b\u8bd5\u7ed3\u679c\uff0c\u5355\u4f4d\u4e3a\u6beb\u79d2\u3002\u6570\u503c\u8d8a\u5c0f\u4ee3\u8868\u5176\u6027\u80fd\u8d8a\u597d\u3002"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/10/14/6348f70d506dd.png",alt:"\u54cd\u5e94\u5ef6\u8fdf\u7ed3\u679c"})),(0,n.kt)("p",null,"\u4ece\u54cd\u5e94\u5ef6\u8fdf\u6765\u770b\uff0c\u5728\u7c7b\u4f3c Apache APISIX \u8fd9\u79cd\u7f51\u7edc IO \u5bc6\u96c6\u578b\u7684 API \u7f51\u5173\u4e0b\uff0c\u8fd9\u56db\u8005\u7684\u6027\u80fd\u8868\u73b0\u7ed3\u8bba\u5982\u4e0b\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u5c06\u6027\u80fd\u4ece\u4f18\u81f3\u52a3\u8fdb\u884c\u6392\u5e8f\uff1a"),(0,n.kt)("p",{parentName:"li"},"   ",(0,n.kt)("strong",{parentName:"p"},"\u573a\u666f\u4e00\u548c\u573a\u666f\u4e8c\u5747\u4e3a\uff1aAWS c7g.large > Azure D2ps v5 > GCP t2a-standard-2 > OCI A1")),(0,n.kt)("p",{parentName:"li"},"\u5728\u8fd9\u4e24\u4e2a\u573a\u666f\u4e0b\uff0cAWS c7g.large \u7684\u6027\u80fd\u51e0\u4e4e\u90fd\u662f OCI A1 \u7684\u4e24\u500d\uff0c\u540e\u4e09\u8005\u7684\u5dee\u8ddd\u4e0d\u5927\u3002"))),(0,n.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,n.kt)("p",null,"\u901a\u8fc7 Apache APISIX \u7684\u6027\u80fd\u6d4b\u8bd5\u7ed3\u679c\u5206\u6790\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u51fa AWS Graviton3 \u62e5\u6709\u6bd4 GCP T2A\u3001Azure Dpsv5 \u548c OCI A1 \u66f4\u9ad8\u7684\u6027\u80fd\u3002\u6211\u4eec\u5728\u6d4b\u8bd5\u8fc7\u7a0b\u4e2d\u4ec5\u4f7f\u7528\u4e86 Apache APISIX \u7ed1\u5b9a\u5355\u6838\u5fc3\u6d4b\u8bd5\uff0c\u5982\u679c\u4f7f\u7528\u591a\u6838\uff0c\u8fd9\u56db\u8005\u6240\u5448\u73b0\u7684\u6027\u80fd\u53ef\u80fd\u4f1a\u6709\u6240\u4e0d\u540c\u3002"),(0,n.kt)("p",null,"\u540e\u7eed\u6709\u53ef\u80fd\u4f1a\u4f7f\u7528\u591a\u6838\u8fdb\u884c\u66f4\u591a\u6d4b\u8bd5\uff0c\u656c\u8bf7\u5173\u6ce8\uff01"),(0,n.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://aws.amazon.com/cn/blogs/aws/new-amazon-ec2-c7g-instances-powered-by-aws-graviton3-processors/"},"New \u2013 Amazon EC2 C7g Instances, Powered by AWS Graviton3 Processors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://cloud.google.com/compute/docs/general-purpose-machines#t2a_machines"},"Tau T2A machine series (Preview)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://azure.microsoft.com/en-us/blog/now-in-preview-azure-virtual-machines-with-ampere-altra-armbased-processors/"},"Now in preview: Azure Virtual Machines with Ampere Altra Arm-based processors")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://www.oracle.com/hk/cloud/compute/arm/"},"Ampere A1 Compute"))))}s.isMDXComponent=!0}}]);