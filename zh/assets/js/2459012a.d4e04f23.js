"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[8433],{35318:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>u});var r=a(27378);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function p(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?p(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):p(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},p=Object.keys(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)a=p[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),o=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},h=function(e){var t=o(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,p=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=o(a),u=i,k=m["".concat(s,".").concat(u)]||m[u]||c[u]||p;return a?r.createElement(k,n(n({ref:t},h),{},{components:a})):r.createElement(k,n({ref:t},h))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var p=a.length,n=new Array(p);n[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,n[1]=l;for(var o=2;o<p;o++)n[o]=a[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},18064:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>n,default:()=>c,frontMatter:()=>p,metadata:()=>l,toc:()=>o});var r=a(25773),i=(a(27378),a(35318));const p={title:"\u793e\u533a\u53cc\u5468\u62a5 (11.21 - 12.04)",keywords:["Apache APISIX","API \u7f51\u5173","\u793e\u533a\u5468\u62a5","\u8d21\u732e\u8005"],description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u56fd\u5bc6\u5bc6\u7801\u5957\u4ef6\uff0c\u57df\u540d\u89e3\u6790\u4f18\u5316\uff0cAdmin API \u901a\u8fc7 gRPC \u534f\u8bae\u94fe\u63a5 ectd \u7b49\u65b0\u529f\u80fd\u3002",tags:["Community"],image:"https://static.apiseven.com/2022/12/08/6391537255a28.png"},n=void 0,l={permalink:"/zh/blog/2022/12/04/weekly-report-1204",source:"@site/blog/2022/12/04/weekly-report-1204.md",title:"\u793e\u533a\u53cc\u5468\u62a5 (11.21 - 12.04)",description:"\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u8fd1\u4e24\u5468\u65b0\u589e\u4e86\u56fd\u5bc6\u5bc6\u7801\u5957\u4ef6\uff0c\u57df\u540d\u89e3\u6790\u4f18\u5316\uff0cAdmin API \u901a\u8fc7 gRPC \u534f\u8bae\u94fe\u63a5 ectd \u7b49\u65b0\u529f\u80fd\u3002",date:"2022-12-04T00:00:00.000Z",formattedDate:"2022\u5e7412\u67084\u65e5",tags:[{label:"Community",permalink:"/zh/blog/tags/community"}],readingTime:4.92,truncated:!0,authors:[],prevItem:{title:"APISIX \u5728\u541b\u6da6\u4eba\u529b\u4e91\u539f\u751f\u5e73\u53f0\u7684\u67b6\u6784\u5b9e\u8df5",permalink:"/zh/blog/2022/12/07/junrunrenli-with-apisix"},nextItem:{title:"\u8bd1\u6587 | A poor man's API",permalink:"/zh/blog/2022/11/28/a-poor-man\u2018s-api"}},s={authorsImageUrls:[]},o=[{value:"\u5bfc\u8bed",id:"\u5bfc\u8bed",children:[],level:2},{value:"\u8d21\u732e\u8005\u7edf\u8ba1",id:"\u8d21\u732e\u8005\u7edf\u8ba1",children:[],level:2},{value:"Good first issue",id:"good-first-issue",children:[{value:"Issue #8413",id:"issue-8413",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9",children:[{value:"Apache APISIX",id:"apache-apisix",children:[],level:3},{value:"Apache APISIX Ingress",id:"apache-apisix-ingress",children:[],level:3}],level:2},{value:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350",children:[],level:2}],h={toc:o};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u4ece 11.21 - 12.04\uff0c\u6709 22 \u4f4d\u5f00\u53d1\u8005\u4e3a Apache APISIX \u63d0\u4ea4\u4e86 61 \u4e2a commits\u3002\u611f\u8c22\u8fd9\u4e9b\u5c0f\u4f19\u4f34\u4e3a Apache APISIX \u6dfb\u7816\u52a0\u74e6\uff0c\u662f\u4f60\u4eec\u7684\u65e0\u79c1\u4ed8\u51fa\uff0c\u8ba9 Apache APISIX \u9879\u76ee\u53d8\u5f97\u66f4\u597d\uff01")),(0,i.kt)("h2",{id:"\u5bfc\u8bed"},"\u5bfc\u8bed"),(0,i.kt)("p",null,"Apache APISIX \u4ece\u5f00\u6e90\u7b2c\u4e00\u5929\u5c31\u4ee5\u793e\u533a\u65b9\u5f0f\u6210\u957f\uff0c\u8fc5\u901f\u6210\u4e3a\u5168\u4e16\u754c\u6700\u6d3b\u8dc3\u7684\u5f00\u6e90 API \u7f51\u5173\u9879\u76ee\u3002\u8fd9\u4e9b\u6210\u5c31\uff0c\u79bb\u4e0d\u5f00\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u7684\u5171\u540c\u594b\u6597\u3002"),(0,i.kt)("p",null,"\u201c\u72ec\u884c\u8005\u901f\uff0c\u4f17\u884c\u8005\u8fdc\u201d\u3002Apache APISIX \u793e\u533a\u5468\u62a5\u5e0c\u671b\u53ef\u4ee5\u5e2e\u52a9\u793e\u533a\u5c0f\u4f19\u4f34\u4eec\u66f4\u597d\u5730\u638c\u63e1 Apache APISIX \u793e\u533a\u7684\u8fdb\u5c55\uff0c\u65b9\u4fbf\u5927\u5bb6\u53c2\u4e0e\u5230 Apache APISIX \u793e\u533a\u4e2d\u6765\u3002"),(0,i.kt)("p",null,"\u6211\u4eec\u8fd8\u6574\u7406\u4e86\u4e00\u4e9b\u9002\u5408\u65b0\u6765\u793e\u533a\u7684\u5c0f\u4f19\u4f34\u4eec\u53c2\u52a0\u7684 issue\uff01\u611f\u5174\u8da3\u7684\u540c\u5b66\u4eec\uff0c\u8d70\u8fc7\u8def\u8fc7\u4e0d\u8981\u9519\u8fc7\uff01"),(0,i.kt)("h2",{id:"\u8d21\u732e\u8005\u7edf\u8ba1"},"\u8d21\u732e\u8005\u7edf\u8ba1"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/08/639153c8987d9.png",alt:"\u672c\u5468\u8d21\u732e\u8005\u540d\u5355"})),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/12/08/639153c959ebe.png",alt:"\u672c\u5468\u65b0\u664b\u8d21\u732e\u8005"})),(0,i.kt)("h2",{id:"good-first-issue"},"Good first issue"),(0,i.kt)("h3",{id:"issue-8413"},"Issue #8413"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u94fe\u63a5"),"\uff1a",(0,i.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/issues/8413"},"https://github.com/apache/apisix/issues/8413")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"\u95ee\u9898\u63cf\u8ff0"),"\uff1a\u5c06\u9650\u5236\u8ba1\u6570\u63d2\u4ef6\u4e0e\u652f\u6301 tls/ssl \u7684 Redis Cluster \u4e00\u8d77\u4f7f\u7528\u3002"),(0,i.kt)("h2",{id:"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"},"\u8fd1\u671f\u529f\u80fd\u7279\u6027\u4eae\u70b9"),(0,i.kt)("h3",{id:"apache-apisix"},"Apache APISIX"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8261"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-mirror")," \u63d2\u4ef6\u652f\u6301\u6307\u5b9a\u955c\u50cf\u8bf7\u6c42\u7684\u524d\u7f00"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/Gallardot"},"Gallardot"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8206"},(0,i.kt)("inlineCode",{parentName:"a"},"jwt-auth")," \u652f\u6301\u9690\u85cf\u5ba2\u6237\u7aef\u8ba4\u8bc1\u51ed\u636e"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/pixeldin"},"pixeldin"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8298"},"APISIX \u652f\u6301 FIPS \u5bc6\u7801\u5957\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kingluo"},"kingluo"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8356"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-mirror")," \u63d2\u4ef6\u652f\u6301\u89e3\u6790\u57df\u540d"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spacewander"},"spacewander"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/7639"},(0,i.kt)("inlineCode",{parentName:"a"},"grpc-transcode")," \u63d2\u4ef6\u652f\u6301\u5728\u8fd4\u56de\u4f53\u4e2d\u5c55\u793a\u89e3\u6790\u8fc7\u7684 grpc-status-details-bin"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/monkeyDluffy6017"},"monkeyDluffy6017"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8270"},"\u57df\u540d\u89e3\u6790\u65f6\u4f18\u5148\u89e3\u6790\u672c\u5730\u7684 ",(0,i.kt)("inlineCode",{parentName:"a"},"/etc/hosts")," \u6587\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/TenYearsIn"},"TenYearsIn"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8336"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-rewrite")," \u63d2\u4ef6\u652f\u6301\u663e\u5f0f\u8bbe\u7f6e\u548c\u5220\u9664 header"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/mscb402"},"mscb402"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8389"},"\u652f\u6301\u56fd\u5bc6\u5bc6\u7801\u5957\u4ef6"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spacewander"},"spacewander"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8390"},"\u652f\u6301\u5c06\u654f\u611f\u5b57\u6bb5\u5b58\u50a8\u5728\u7b2c\u4e09\u65b9\u670d\u52a1\u4e2d\uff0c\u5982 Vault"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/soulbird"},"soulbird")," ",(0,i.kt)("a",{parentName:"li",href:"https://github.com/kingluo"},"kingluo"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8403"},"\u652f\u6301\u654f\u611f\u5b57\u6bb5\u8fdb\u884c\u81ea\u52a8\u52a0\u5bc6\u548c\u89e3\u5bc6\uff0c\u4fdd\u62a4\u654f\u611f\u5b57\u6bb5"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tzssangglass"},"tzssangglass"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8279"},(0,i.kt)("inlineCode",{parentName:"a"},"syslog")," \u63d2\u4ef6\u652f\u6301\u8bbe\u7f6e log format"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/fatihusta"},"fatihusta"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix/pull/8411"},"Admin API \u901a\u8fc7 gRPC \u534f\u8bae\u8fde\u63a5 etcd"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/spacewander"},"spacewander"),"\uff09")),(0,i.kt)("h3",{id:"apache-apisix-ingress"},"Apache APISIX Ingress"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1480"},"\u5728\u65e5\u5fd7\u4e2d\u9690\u85cf\u5bc6\u94a5\u4fe1\u606f"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/macmiranda"},"macmiranda"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1471"},"\u53ef\u4ee5\u901a\u8fc7 annotation \u7684\u65b9\u5f0f\u6765\u8fdb\u884c\u8bf7\u6c42\u65b9\u6cd5\u7684\u63a7\u5236"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/incubator4"},"incubator4"),"\uff09"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/apache/apisix-ingress-controller/pull/1465"},"\u5141\u8bb8\u5728 APISIX Ingress \u4e0e\u670d\u52a1\u6ce8\u518c/\u53d1\u73b0\u4e2d\u5fc3\u8fdb\u884c\u96c6\u6210"),"\uff08\u8d21\u732e\u8005\uff1a",(0,i.kt)("a",{parentName:"li",href:"https://github.com/tao12345666333"},"tao12345666333"),"\uff09")),(0,i.kt)("p",null,"Apache APISIX \u7684\u9879\u76ee\u5b98\u7f51\u548c Github \u4e0a\u7684 Issue \u4e0a\u5df2\u7ecf\u79ef\u7d2f\u4e86\u6bd4\u8f83\u4e30\u5bcc\u7684\u6587\u6863\u6559\u7a0b\u548c\u4f7f\u7528\u7ecf\u9a8c\uff0c\u5982\u679c\u60a8\u9047\u5230\u95ee\u9898\u53ef\u4ee5\u7ffb\u9605\u6587\u6863\uff0c\u7528\u5173\u952e\u8bcd\u5728 Issue \u4e2d\u641c\u7d22\uff0c\u4e5f\u53ef\u4ee5\u53c2\u4e0e Issue \u4e0a\u7684\u8ba8\u8bba\uff0c\u63d0\u51fa\u81ea\u5df1\u7684\u60f3\u6cd5\u548c\u5b9e\u8df5\u7ecf\u9a8c\u3002"),(0,i.kt)("h2",{id:"\u8fd1\u671f\u535a\u6587\u63a8\u8350"},"\u8fd1\u671f\u535a\u6587\u63a8\u8350"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/12/a-poor-man%E2%80%98s-api/"},"\u8bd1\u6587 | A poor man's API")),(0,i.kt)("p",{parentName:"li"},"  \u672c\u6587\u5c06\u5c55\u793a\u5982\u4f55\u5728\u4e0d\u7f16\u5199\u4efb\u4f55\u4ee3\u7801\u7684\u60c5\u51b5\u4e0b\uff0c\u7b80\u5355\u5b9e\u73b0\u4e00\u4e2a API \u5b9e\u8df5\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/25/how-apisix-support-1000-pods/"},"APISIX Ingress \u662f\u5982\u4f55\u652f\u6301\u4e0a\u5343\u4e2a Pod \u526f\u672c\u7684\u5e94\u7528")),(0,i.kt)("p",{parentName:"li"},"  \u672c\u6587\u901a\u8fc7\u4ecb\u7ecd Kubernetes \u4e2d\u4e0a\u5343\u4e2a Pod \u526f\u672c\u5e94\u7528\u573a\u666f\u7684\u89e3\u6790\uff0c\u63d0\u51fa\u6280\u672f\u5b9e\u73b0\u7684\u56f0\u96be\u3002\u4ecb\u7ecd APISIX Ingress \u662f\u5982\u4f55\u89e3\u51b3\u8fd9\u4e00\u96be\u9898\u7684\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/10/what-is-service-in-microservice-discovery/"},"\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u662f\u4ec0\u4e48")),(0,i.kt)("p",{parentName:"li"},"  \u672c\u6587\u901a\u8fc7\u670d\u52a1\u53d1\u73b0\u7684\u76f8\u5173\u80cc\u666f\u548c APISIX \u5bf9\u4e8e\u670d\u52a1\u53d1\u73b0\u7684\u5e94\u7528\u4e0e\u5b9e\u8df5\uff0c\u6765\u4ecb\u7ecd\u5fae\u670d\u52a1\u4e2d\u7684\u670d\u52a1\u53d1\u73b0\u5185\u5bb9\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/13/vivo-with-apache-apisix/"},"\u5b9e\u8df5\u4e00\u5e74\u4e4b\u4e45\uff0cvivo \u5982\u4f55\u57fa\u4e8e APISIX \u8fdb\u884c\u4e1a\u52a1\u57fa\u7840\u67b6\u6784\u7684\u6f14\u8fdb")),(0,i.kt)("p",{parentName:"li"},"  \u672c\u6587\u4ece\u5e94\u7528 APISIX \u540e\u7684\u8c03\u6574\u4e0e\u5b9e\u8df5\u56f0\u96be\u89d2\u5ea6\u5165\u624b\uff0c\u4e3a\u5927\u5bb6\u5e26\u6765\u4e86 vivo \u57fa\u4e8e APISIX \u7684\u4f01\u4e1a\u5b9e\u8df5\u7ec6\u8282\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/11/05/tencent-blueking-with-apisix/"},"\u817e\u8baf\u84dd\u9cb8 API \u7f51\u5173\u5982\u4f55\u501f\u52a9 APISIX \u5b9e\u73b0\u4ea7\u54c1\u5347\u7ea7\u4e0e\u4e1a\u52a1\u5b8c\u5584")),(0,i.kt)("p",{parentName:"li"},"  \u672c\u6587\u4ece\u84dd\u9cb8\u7f51\u5173\u7684\u8fed\u4ee3\u8fc7\u7a0b\u548c\u5e94\u7528 APISIX \u540e\u7684\u4ea7\u54c1\u5b9e\u8df5\u89d2\u5ea6\uff0c\u4e3a\u5927\u5bb6\u5448\u73b0\u4e86\u57fa\u4e8e APISIX \u7684\u7f51\u5173\u5e94\u7528\u5b9e\u4f8b\u3002")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/blog/2022/10/28/apisix-ingress-with-horizon-ai/"},"\u4ece Traefik \u5230 APISIX\uff0c\u6c7d\u8f66\u667a\u80fd\u8ba1\u7b97\u5e73\u53f0\u516c\u53f8\u300c\u5730\u5e73\u7ebf\u300d\u5728 Ingress Controller \u7684\u63a2\u7d22\u548c\u5b9e\u8df5")),(0,i.kt)("p",{parentName:"li"},"  \u5730\u5e73\u7ebf\u4f5c\u4e3a\u4e00\u5bb6\u81f4\u529b\u4e8e\u6c7d\u8f66\u81ea\u52a8\u9a7e\u9a76\u82af\u7247\u7684\u516c\u53f8\uff0c\u5728\u4e1a\u52a1\u8fed\u4ee3\u4e2d\u4e3a\u4f55\u4ece Traefik \u5207\u6362\u5230\u4e86 APISIX Ingress \u53bb\u652f\u6491\u4e1a\u52a1\uff1f"))))}c.isMDXComponent=!0}}]);