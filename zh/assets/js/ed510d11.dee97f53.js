"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[467],{35318:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var r=t(27378);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),u=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=u(e.components);return r.createElement(o.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},k=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),k=u(t),m=a,d=k["".concat(o,".").concat(m)]||k[m]||c[m]||l;return t?r.createElement(d,i(i({ref:n},s),{},{components:t})):r.createElement(d,i({ref:n},s))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=k;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}k.displayName="MDXCreateElement"},18601:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>c,frontMatter:()=>l,metadata:()=>p,toc:()=>u});var r=t(25773),a=(t(27378),t(35318));const l={title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0",authors:[{name:"\u94b1\u52c7",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4"}],keywords:["Apache APISIX","API \u7f51\u5173","Eureka","\u670d\u52a1\u53d1\u73b0","\u670d\u52a1\u6ce8\u518c"],description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4e2d\u542f\u7528 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u8bca\u65ad\u5de5\u5177\u5feb\u901f\u53d1\u73b0\u94fe\u8def\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\u3002",tags:["Ecosystem"]},i=void 0,p={permalink:"/zh/blog/2022/03/05/apisix-integration-eureka-service-discovery",source:"@site/blog/2022/03/05/apisix-integration-eureka-service-discovery.md",title:"API \u7f51\u5173 Apache APISIX \u96c6\u6210 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0",description:"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728\u4e91\u539f\u751f API \u7f51\u5173 Apache APISIX \u4e2d\u542f\u7528 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\uff0c\u5e76\u4e14\u4ecb\u7ecd\u4e86\u5982\u4f55\u4f7f\u7528\u8bca\u65ad\u5de5\u5177\u5feb\u901f\u53d1\u73b0\u94fe\u8def\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\u3002",date:"2022-03-05T00:00:00.000Z",formattedDate:"2022\u5e743\u67085\u65e5",tags:[{label:"Ecosystem",permalink:"/zh/blog/tags/ecosystem"}],readingTime:8.83,truncated:!0,authors:[{name:"\u94b1\u52c7",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4",imageURL:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"\u97e9\u98de",title:"Technical Writer",url:"https://github.com/hf400159",image_url:"https://avatars.githubusercontent.com/u/97138894?v=4",imageURL:"https://avatars.githubusercontent.com/u/97138894?v=4"}],prevItem:{title:"\u793e\u533a\u53cc\u5468\u62a5\uff083.1-3.14\uff09",permalink:"/zh/blog/2022/03/24/weekly-report-0314"},nextItem:{title:"API \u7f51\u5173\u96c6\u6210 ClickHouse \u63d2\u4ef6\u63d0\u5347\u5168\u94fe\u8def\u65e5\u5fd7\u6548\u7387",permalink:"/zh/blog/2022/03/04/apigateway-clickhouse-makes-logging-easier"}},o={authorsImageUrls:[void 0,void 0]},u=[{value:"\u51c6\u5907\u9636\u6bb5",id:"\u51c6\u5907\u9636\u6bb5",children:[],level:2},{value:"Eureka Server",id:"eureka-server",children:[{value:"\u63a5\u5165 Eureka Client \u7684 HTTP \u670d\u52a1",id:"\u63a5\u5165-eureka-client-\u7684-http-\u670d\u52a1",children:[],level:3}],level:2},{value:"\u4f7f\u7528 APISIX \u4ee3\u7406 SpringCloud \u5e94\u7528",id:"\u4f7f\u7528-apisix-\u4ee3\u7406-springcloud-\u5e94\u7528",children:[{value:"\u542f\u52a8 Apache APISIX",id:"\u542f\u52a8-apache-apisix",children:[],level:3},{value:"\u521b\u5efa\u8def\u7531",id:"\u521b\u5efa\u8def\u7531",children:[],level:3},{value:"\u8bf7\u6c42\u8def\u7531",id:"\u8bf7\u6c42\u8def\u7531",children:[],level:3},{value:"\u6a21\u62df\u5b9e\u4f8b\u5b95\u673a",id:"\u6a21\u62df\u5b9e\u4f8b\u5b95\u673a",children:[],level:3},{value:"\u8bca\u65ad\u5de5\u5177",id:"\u8bca\u65ad\u5de5\u5177",children:[],level:3}],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],s={toc:u};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"\u672c\u6587\u4ecb\u7ecd\u4e86\u5982\u4f55\u5728 API \u7f51\u5173 Apache APISIX \u4e2d\u542f\u7528 Eureka \u4f5c\u4e3a\u670d\u52a1\u53d1\u73b0\u4ee5\u53ca\u5982\u4f55\u4f7f\u7528\u8bca\u65ad\u5de5\u5177\u53d1\u73b0\u94fe\u8def\u4e2d\u51fa\u73b0\u7684\u95ee\u9898\u3002")),(0,a.kt)("p",null,"\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\uff0c\u5927\u578b\u590d\u6742\u7684\u7cfb\u7edf\u6309\u529f\u80fd\u6216\u8005\u4e1a\u52a1\u9700\u6c42\u5782\u76f4\u5207\u5206\u6210\u66f4\u5c0f\u7684\u5b50\u7cfb\u7edf\uff0c\u8fd9\u4e9b\u5b50\u7cfb\u7edf\u4ee5\u72ec\u7acb\u90e8\u7f72\u7684\u5b50\u8fdb\u7a0b\u5b58\u5728\uff0c\u5b83\u4eec\u4e4b\u95f4\u901a\u8fc7\u7f51\u7edc\u8c03\u7528\u8fdb\u884c\u901a\u4fe1\u3002\u8fd9\u4e9b\u72ec\u7acb\u90e8\u7f72\u7684\u670d\u52a1\u5982\u4f55\u53d1\u73b0\u5bf9\u65b9\u6210\u4e3a\u4e86\u9996\u5148\u8981\u89e3\u51b3\u7684\u95ee\u9898\uff0c\u6240\u4ee5\u5728\u5fae\u670d\u52a1\u67b6\u6784\u4e2d\u5f80\u5f80\u90fd\u4f1a\u5b58\u5728\u4e00\u4e2a\u4e2d\u5fc3\u5316\u7684\u6ce8\u518c\u4e2d\u5fc3\u3002"),(0,a.kt)("p",null,"Spring \u4f5c\u4e3a Java \u751f\u6001\u4e2d\u6700\u6838\u5fc3\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u4ece Spring MVC \u5230 Spring Boot \u6301\u7eed\u4e0d\u65ad\u89e3\u653e\u7740 Java \u5f00\u53d1\u8005\u7684\u751f\u4ea7\u529b\uff0c\u800c Spring Cloud \u662f Spring \u9762\u5411\u4e91\u539f\u751f\u65f6\u4ee3\u5fae\u670d\u52a1\u67b6\u6784\u7ed9\u51fa\u7684\u7b54\u6848\u3002"),(0,a.kt)("p",null,"\u5728 Spring Cloud \u4e2d\uff0cEureka \u5c31\u626e\u6f14\u4e86\u6ce8\u518c\u4e2d\u5fc3\u7684\u89d2\u8272\u3002Eureka \u662f\u4e00\u6b3e\u7531 Netflix \u5f00\u6e90\uff0c\u4f7f\u7528 Java \u8bed\u8a00\u7f16\u5199\u7684\u6ce8\u518c\u4e2d\u5fc3\u670d\u52a1\uff0c\u5176\u5728 Netflix \u7684\u57fa\u7840\u8bbe\u65bd\u4e2d\u626e\u6f14\u7740\u91cd\u8981\u89d2\u8272\u3002"),(0,a.kt)("p",null,"Apache APISIX \u662f\u4e00\u4e2a\u52a8\u6001\u3001\u5b9e\u65f6\u3001\u9ad8\u6027\u80fd\u7684 API \u7f51\u5173\uff0c\u63d0\u4f9b\u4e86\u8d1f\u8f7d\u5747\u8861\u3001\u52a8\u6001\u4e0a\u6e38\u3001\u7070\u5ea6\u53d1\u5e03\u3001\u670d\u52a1\u7194\u65ad\u3001\u8eab\u4efd\u8ba4\u8bc1\u3001\u53ef\u89c2\u6d4b\u6027\u7b49\u4e30\u5bcc\u7684\u6d41\u91cf\u7ba1\u7406\u529f\u80fd\u3002Apache APISIX \u4f5c\u4e3a\u4e1a\u754c\u9886\u5148\u7684\u5fae\u670d\u52a1 API \u7f51\u5173\uff0c\u5bf9 Eureka \u63d0\u4f9b\u4e86\u539f\u751f\u652f\u6301\u3002\u672c\u6587\u5c06\u4f1a\u4f7f\u7528 Spring Cloud \u6f14\u793a\u9879\u76ee\u4f5c\u4e3a\u6848\u4f8b\uff0c\u4e3a\u5927\u5bb6\u5c55\u793a Apache APISIX \u5bf9\u63a5 Eureka \u670d\u52a1\u53d1\u73b0\u7684\u4e3b\u8981\u529f\u80fd\u53ca\u7279\u6027\u3002"),(0,a.kt)("h2",{id:"\u51c6\u5907\u9636\u6bb5"},"\u51c6\u5907\u9636\u6bb5"),(0,a.kt)("p",null,"\u672c\u6b21\u6f14\u793a\u4f7f\u7528 Spring \u5b98\u65b9\u63d0\u4f9b\u7684 ",(0,a.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-cloud-netflix#overview"},(0,a.kt)("inlineCode",{parentName:"a"},"spring-cloud-netflix"))," \u6559\u7a0b\u4f5c\u4e3a\u793a\u4f8b\uff0c\u8be5\u6559\u7a0b\u4e2d\u63d0\u4f9b\u4e86\u4f7f\u7528 SpringBoot \u542f\u52a8\u7684 Eureka Server \u4f5c\u4e3a Spring Cloud \u7684\u6ce8\u518c\u4e2d\u5fc3\uff0c\u6211\u4eec\u4e5f\u4f7f\u7528\u76f8\u540c\u7684\u65b9\u5f0f\u6765\u542f\u52a8\u7528\u4e8e\u6f14\u793a\u7684 Eureka \u670d\u52a1\u7aef\u3002\u8be5\u9879\u76ee\u5730\u5740\u8bf7\u8bbf\u95ee ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/spring-cloud-samples/eureka%EF%BC%8C"},(0,a.kt)("inlineCode",{parentName:"a"},"spring-cloud-samples/eureka")),"\u3002"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\u5c06\u4e3a\u60a8\u4ecb\u7ecd\u76f8\u5173\u4ee3\u7801\u548c\u542f\u52a8\u65b9\u5f0f\u3002"),(0,a.kt)("h2",{id:"eureka-server"},"Eureka Server"),(0,a.kt)("p",null,"Spring Cloud \u4e3a Eureka \u63d0\u4f9b\u4e86\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"EnableEurekaServer")," \u7684\u6ce8\u89e3\uff0c\u53ef\u4ee5\u76f4\u63a5\u4ee5 Spring Boot \u7684\u65b9\u5f0f\u542f\u52a8\u4e00\u4e2a Eureka Server\u3002"),(0,a.kt)("p",null,"\u4ee3\u7801\u793a\u4f8b\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Java"},"@SpringBootApplication\n@EnableEurekaServer\npublic class EurekaApplication {\n        public static void main(String[] args) {\n                SpringApplication.run(EurekaApplication.class\uff0cargs);\n        }\n}\n")),(0,a.kt)("p",null,"\u542f\u52a8\u65b9\u5f0f\u53ef\u76f4\u63a5\u53c2\u8003\u4e0b\u65b9\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},"git clone git@github.com:spring-cloud-samples/eureka.git\n# \u5728\u9879\u76ee\u6839\u76ee\u5f55\u6267\u884c\n./gradlew bootRun\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"resources")," \u76ee\u5f55\u4e2d\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"application.yml")," \u6587\u4ef6\u5b9a\u4e49\u4e86 Eureka Server \u76d1\u542c\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"8761")," \u7aef\u53e3\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"server:\n  port: 8761\n")),(0,a.kt)("h3",{id:"\u63a5\u5165-eureka-client-\u7684-http-\u670d\u52a1"},"\u63a5\u5165 Eureka Client \u7684 HTTP \u670d\u52a1"),(0,a.kt)("p",null,"\u4e0e ",(0,a.kt)("inlineCode",{parentName:"p"},"EnableEurekaServer")," \u5bf9\u5e94\u7684\u5ba2\u6237\u7aef\u6ce8\u89e3\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"EnableEurekaClient"),"\uff0c\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"EnableEurekaClient")," \u53ef\u4ee5\u975e\u5e38\u7b80\u5355\u5f97\u5c06\u4e00\u4e2a\u4f7f\u7528 Spring Boot \u542f\u52a8\u7684 HTTP \u5e94\u7528\u6ce8\u518c\u5230 Eureka \u4e0a\u3002"),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4e3a\u793a\u4f8b\u4ee3\u7801\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Java"},'@SpringBootApplication\n@EnableEurekaClient\n@RestController\npublic class Application {\n\n        @Value("${server.port}")\n        int serverPort;\n\n        @RequestMapping("/")\n        public String home() {\n                return String.format("server-%s",serverPort);\n        }\n\n        public static void main(String[] args) {\n                new SpringApplicationBuilder(Application.class).web(WebApplicationType.SERVLET).run(args);\n        }\n\n}\n')),(0,a.kt)("p",null,"\u8fd9\u91cc\u6211\u4eec\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"/")," \u8def\u5f84\u4e0a\u66b4\u9732\u4e00\u4e2a HTTP \u670d\u52a1\uff0c\u8fd4\u56de\u5f53\u524d Spring Boot \u4f7f\u7528\u7684\u7aef\u53e3\uff0c\u8fd9\u6837\u6211\u4eec\u53ef\u4ee5\u4f7f\u7528\u4e0d\u540c\u7684\u914d\u7f6e\u6587\u4ef6\uff0c\u542f\u52a8\u591a\u4e2a\u5b9e\u4f8b\uff0c\u6765\u6f14\u793a APISIX \u5bf9\u6ce8\u518c\u5230 Eureka \u7684\u670d\u52a1\u7aef\u5b9e\u4f8b\u5217\u8868\u8fdb\u884c\u8d1f\u8f7d\u5747\u8861\u7684\u6548\u679c\u3002"),(0,a.kt)("p",null,"\u914d\u7f6e\u6587\u4ef6\u5982\u4e0b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JAVA"},"spring.application.name=a-bootiful-client #\u5c06\u4f1a\u4f5c\u4e3a\u6ce8\u518c\u5230 Eureka \u4e2d\u7684 application name\nserver.port=8080 # \u4fee\u6539\u76d1\u542c\u7aef\u53e3\u4ee5\u542f\u52a8\u591a\u4e2a\u5b9e\u4f8b\n")),(0,a.kt)("p",null,"\u8bbe\u7f6e\u76d1\u542c\u7aef\u53e3\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"8081"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"8082"),"\uff0c\u5e76\u542f\u52a8\u4e09\u4e2a Spring Boot \u5b9e\u4f8b\uff0c\u5b8c\u6210\u540e\uff0c\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee Eureka Server \u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"8761")," \u7aef\u53e3\uff0c\u53ef\u4ee5\u67e5\u770b\u670d\u52a1\u6ce8\u518c\u7684\u7ed3\u679c\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646350535070-7615a784-df05-4e94-a88e-b039c111de53.png",alt:"error/results example.png"})),(0,a.kt)("p",null,"\u60a8\u53ef\u4ee5\u770b\u5230\u5e94\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"A-BOOTIFUL-CLIENT")," (\u6ce8\u610f\uff1aspring.application.name \u88ab\u5168\u90e8\u8f6c\u4e3a\u5927\u5199\u5b57\u7b26)\u4e0b\u6ce8\u518c\u4e86\u4e09\u4e2a\u5b9e\u4f8b\uff0c\u5206\u522b\u66b4\u9732\u4e86 ",(0,a.kt)("inlineCode",{parentName:"p"},"8080"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"8081"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"8082")," \u7aef\u53e3\uff0c\u5e76\u4e14\u5747\u5904\u4e8e UP \u72b6\u6001\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528-apisix-\u4ee3\u7406-springcloud-\u5e94\u7528"},"\u4f7f\u7528 APISIX \u4ee3\u7406 SpringCloud \u5e94\u7528"),(0,a.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u5c06\u4f1a\u5b9e\u73b0\u5982\u4e0b\u56fe\u6240\u793a\u7684\u8bf7\u6c42\u94fe\u8def\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1646350644536-7b68a4a3-b523-4c82-8e19-822624ff2c95.png",alt:"error/request link.png"})),(0,a.kt)("h3",{id:"\u542f\u52a8-apache-apisix"},"\u542f\u52a8 Apache APISIX"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u9700\u8981\u5728 Apache APISIX \u7684\u914d\u7f6e\u6587\u4ef6 ",(0,a.kt)("inlineCode",{parentName:"p"},"config.yaml")," \u4e2d\u627e\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"apisix.discovery"),"\uff0c\u4fee\u6539 Eureka Server \u8fde\u63a5\u4fe1\u606f\u7684\u76f8\u5173\u914d\u7f6e\uff0c\u5e76\u542f\u52a8 APISIX\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'  discovery:                       # service discovery center\n      eureka:\n        host:                        # it\'s possible to define multiple eureka hosts addresses of the same eureka cluster.\n          - "http://172.23.79.129:8761" # Access address of Eureka Server started by Spring Boot\n        prefix: /eureka/\n        fetch_interval: 30           # default 30s\n        weight: 100                  # default weight for node\n        timeout:\n          connect: 2000              # default 2000ms\n          send: 2000                 # default 2000ms\n          read: 5000                 # default 5000ms\n\n')),(0,a.kt)("h3",{id:"\u521b\u5efa\u8def\u7531"},"\u521b\u5efa\u8def\u7531"),(0,a.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a Route\uff0c\u5e76\u5728 Upstream \u4e2d\u914d\u7f6e\u542f\u7528 Eureka Service Discovery \u63d2\u4ef6\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"upstream.discovery_type")," \u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"eureka"),"\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"upstream.service_name")," \u662f\u5e94\u7528\u5728 Eureka \u4e2d\u6ce8\u518c\u7684\u5e94\u7528\u540d ",(0,a.kt)("inlineCode",{parentName:"li"},"A-BOOTIFUL-CLIENT"),"\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://172.30.45.72:9180/apisix/admin/routes/1 \\\n-H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -i -d \'\n    "uri": "/*",\n    "host": "eureka-demo",\n    "upstream": {\n        "service_name": "A-BOOTIFUL-CLIENT",\n        "type": "roundrobin",\n        "discovery_type": "eureka"\n    }\n}\'\n')),(0,a.kt)("h3",{id:"\u8bf7\u6c42\u8def\u7531"},"\u8bf7\u6c42\u8def\u7531"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"curl")," \u547d\u4ee4\u8fdb\u884c\u591a\u6b21\u8bf7\u6c42\uff0c\u9a8c\u8bc1\u8d1f\u8f7d\u5747\u8861\u6548\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8081%\n$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8080%\n$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8082%\n$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8081%\n$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8080%\n$ curl http://172.30.45.72:9080/ -H "Host: eureka-demo"\nserver-8082%\n')),(0,a.kt)("p",null,"\u4ece\u4e0a\u8ff0\u8fd4\u56de\u7ed3\u679c\u53ef\u4ee5\u770b\u5230\uff0c\u8bf7\u6c42\u88ab\u4f9d\u6b21\u5206\u914d\u5230 Eureka \u4e2d\u6ce8\u518c\u7684\u4e09\u4e2a\u5b9e\u4f8b\u4e0a\uff0c\u8fd9\u662f\u56e0\u4e3a\u6211\u4eec\u4f7f\u7528\u7684\u8d1f\u8f7d\u5747\u8861\u7b97\u6cd5\u662f ",(0,a.kt)("inlineCode",{parentName:"p"},"roundrobin"),"\uff0c\u6240\u6709\u7684\u540e\u7aef\u5b9e\u4f8b\u4f1a\u88ab\u8f6e\u6d41\u5206\u914d\u8bf7\u6c42\u3002"),(0,a.kt)("h3",{id:"\u6a21\u62df\u5b9e\u4f8b\u5b95\u673a"},"\u6a21\u62df\u5b9e\u4f8b\u5b95\u673a"),(0,a.kt)("p",null,"\u5173\u95ed\u5176\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"8081")," \u5b9e\u4f8b\uff0c\u6a21\u62df\u5b9e\u4f8b\u5b95\u673a\u573a\u666f\uff0c\u89c2\u5bdf\u8bf7\u6c42\u6548\u679c\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'$ while true; do curl http://172.30.45.72:9080/ -H "Host: eureka-demo"; echo; sleep 1; done\n\nserver-8080\nserver-8082\nserver-8081\n\nserver-8080\nserver-8082\nserver-8081\n\nserver-8080\nserver-8082\n\nserver-8080\nserver-8082\n')),(0,a.kt)("p",null,"\u7531\u4e0a\u8ff0\u7ed3\u679c\u53ef\u4ee5\u770b\u51fa\uff0c\u5173\u95ed ",(0,a.kt)("inlineCode",{parentName:"p"},"8081")," \u5b9e\u4f8b\u540e\uff0cApache APISIX \u4f1a\u53ca\u65f6\u540c\u6b65\u5230 Eureka \u7684\u6700\u65b0\u5b9e\u4f8b\u5217\u8868\uff0c\u7136\u540e\u5c06\u8bf7\u6c42\u8f6c\u53d1\u7ed9\u6b63\u786e\u7684\u540e\u7aef\u3002"),(0,a.kt)("h3",{id:"\u8bca\u65ad\u5de5\u5177"},"\u8bca\u65ad\u5de5\u5177"),(0,a.kt)("p",null,"\u5728\u5fae\u670d\u52a1\u7cfb\u7edf\u4e2d\uff0c\u7ecf\u5e38\u4f1a\u9047\u5230\u975e\u9884\u671f\u8f6c\u53d1\u7684\u95ee\u9898\uff0c\u8fd9\u4e9b\u95ee\u9898\u7684\u539f\u56e0\u53ef\u80fd\u6765\u81ea\u670d\u52a1\u53d1\u73b0\u4e2d\u7684\u5404\u4e2a\u94fe\u8def\uff0c\u4f8b\u5982\uff1a\u5ba2\u6237\u7aef\u6ce8\u518c\u5f02\u5e38\uff0c\u6ce8\u518c\u4e2d\u5fc3\u672c\u8eab\u6570\u636e\u5f02\u5e38\uff0c\u7f51\u5173\u8bfb\u53d6\u6ce8\u518c\u6570\u636e\u5f02\u5e38\u7b49\u7b49\uff0c\u56e0\u6b64\u53d1\u751f\u5f02\u5e38\u65f6\u94fe\u8def\u4e2d\u53ef\u4ee5\u4f7f\u7528\u7684\u8bca\u65ad\u5de5\u5177\u5c06\u4f1a\u5c24\u4e3a\u91cd\u8981\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5 APISIX \u5728 Service Discovery \u63d2\u4ef6\u4e2d\u63d0\u4f9b\u4e86\u4e00\u4e2a\u8bca\u65ad\u63a5\u53e3\uff0c\u53ef\u4ee5\u65b9\u4fbf\u7684\u67e5\u8be2\u51fa\u5f53\u524d\u7f51\u5173\u6b63\u5728\u4f7f\u7528\u7684\u670d\u52a1\u5217\u8868\uff0c\u7ed3\u5408\u6ce8\u518c\u4e2d\u5fc3\u7684\u63a7\u5236\u53f0\uff0c\u6211\u4eec\u5c31\u5bf9\u7f51\u5173\u5230\u6ce8\u518c\u4e2d\u5fc3\u8fd9\u4e00\u94fe\u8def\u505a\u51fa\u5feb\u901f\u8bca\u65ad\u3002"),(0,a.kt)("p",null,"\u8bca\u65ad\u63a5\u53e3\u9ed8\u8ba4\u66b4\u9732\u5728\u56de\u73af\u63a5\u53e3\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"9090")," \u7aef\u53e3\uff0c\u8bbf\u95ee\u65b9\u5f0f\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"GET /v1/discovery/{discovery_type}/dump"),"\uff0c\u4f8b\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-Shell"},'curl http://localhost:9090/v1/discovery/eureka/dump\n\n{\n  "services": {\n    "A-BOOTIFUL-CLIENT": [\n      {\n        "weight": 100,\n        "metadata": {\n          "management.port": "8081"\n        },\n        "host": "192.168.50.164",\n        "port": 8081\n      },\n      {\n        "weight": 100,\n        "metadata": {\n          "management.port": "8080"\n        },\n        "host": "192.168.50.164",\n        "port": 8080\n      },\n      {\n        "weight": 100,\n        "metadata": {\n          "management.port": "8082"\n        },\n        "host": "192.168.50.164",\n        "port": 8082\n      }\n    ]\n  },\n  "config": {\n    "prefix": "\\/eureka\\/",\n    "timeout": {\n      "connect": 2000,\n      "send": 2000,\n      "read": 5000\n    },\n    "fetch_interval": 30,\n    "host": [\n      "http:\\/\\/172.23.79.129:8761"\n    ],\n    "weight": 100\n  }\n}\n')),(0,a.kt)("p",null,"\u901a\u8fc7\u4e0a\u8ff0\u793a\u4f8b\u5c31\u53ef\u4ee5\u67e5\u8be2\u5230 APISIX \u6b63\u5728\u4f7f\u7528\u7684 Eureka \u6570\u636e\u3002"),(0,a.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,a.kt)("p",null,"Spring Cloud \u662f\u4e00\u4e2a\u5e7f\u53d7\u7528\u6237\u6b22\u8fce\u7684\u5fae\u670d\u52a1\u6846\u67b6\uff0c\u800c Apache APISIX \u901a\u8fc7\u652f\u6301 Eureka Service Discovery \u63d0\u4f9b\u4e86\u5904\u7406 Spring Cloud \u5e94\u7528\u6d41\u91cf\u7684\u80fd\u529b\uff0c\u6211\u4eec\u53ef\u4ee5\u770b\u5230\u8fd9\u4e24\u4e2a\u751f\u6001\u7684\u7d27\u5bc6\u7ed3\u5408\uff0c\u8ba9\u5fae\u670d\u52a1\u67b6\u6784\u7684\u843d\u5730\u53d8\u5f97\u66f4\u52a0\u7b80\u5355\u9ad8\u6548\uff0c\u4ece\u800c\u8ba9\u4e1a\u52a1\u5f00\u53d1\u53ef\u4ee5\u66f4\u52a0\u7684\u4e13\u6ce8\u4e8e\u4e1a\u52a1\u4ef7\u503c\u3002"),(0,a.kt)("p",null,"\u5173\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"eureka")," \u63d2\u4ef6\u7684\u66f4\u591a\u8bf4\u660e\u548c\u5b8c\u6574\u914d\u7f6e\u4fe1\u606f\uff0c\u53ef\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/zh/docs/apisix/discovery#%E5%A6%82%E4%BD%95%E6%89%A9%E5%B1%95%E6%B3%A8%E5%86%8C%E4%B8%AD%E5%BF%83%EF%BC%9F"},"Apache APISIX \u5b98\u7f51\u6587\u6863"),"\u3002"),(0,a.kt)("p",null,"Apache APISIX \u9879\u76ee\u76ee\u524d\u6b63\u5728\u5f00\u53d1\u5176\u4ed6\u63d2\u4ef6\u4ee5\u652f\u6301\u96c6\u6210\u66f4\u591a\u670d\u52a1\uff0c\u5982\u679c\u60a8\u5bf9\u6b64\u6709\u5174\u8da3\uff0c\u60a8\u53ef\u4ee5\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/discussions"},"GitHub Discussions")," \u53d1\u8d77\u8ba8\u8bba\uff0c\u6216\u901a\u8fc7",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/general/join"},"\u90ae\u4ef6\u5217\u8868"),"\u8fdb\u884c\u4ea4\u6d41."))}c.isMDXComponent=!0}}]);