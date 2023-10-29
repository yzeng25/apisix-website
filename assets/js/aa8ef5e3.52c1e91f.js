"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7867],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var r=a(27378);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),l=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},c=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=l(a),m=n,d=u["".concat(p,".").concat(m)]||u[m]||h[m]||i;return a?r.createElement(d,s(s({ref:t},c),{},{components:a})):r.createElement(d,s({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,s[1]=o;for(var l=2;l<i;l++)s[l]=a[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},74128:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var r=a(25773),n=(a(27378),a(35318));const i={title:"Building event-driven API services using CQRS, API Gateway and Serverless",authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607"}],keywords:["API Gateway","Apache APISIX","API","Event driven","CQRS","Serverless"],description:"This blog post explores how to build event-driven API Services using these 3 well-known patterns to build a highly scalable and distributed system.",tags:["Ecosystem"],image:"https://static.apiseven.com/2022/11/01/63612aab60c8d.png"},s=void 0,o={permalink:"/blog/2022/09/23/build-event-driven-api",source:"@site/blog/2022/09/23/build-event-driven-api.md",title:"Building event-driven API services using CQRS, API Gateway and Serverless",description:"This blog post explores how to build event-driven API Services using these 3 well-known patterns to build a highly scalable and distributed system.",date:"2022-09-23T00:00:00.000Z",formattedDate:"September 23, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"}],readingTime:7.415,truncated:!0,authors:[{name:"Bobur Umurzokov",title:"Author",url:"https://github.com/Boburmirzo",image_url:"https://avatars.githubusercontent.com/u/14247607",imageURL:"https://avatars.githubusercontent.com/u/14247607"}],prevItem:{title:"Apache APISIX loves Rust!",permalink:"/blog/2022/09/28/rust-loves-apisix"},nextItem:{title:"Why Is Apache APISIX the Best API Gateway?",permalink:"/blog/2022/09/13/why-is-apache-apisix-the-best-api-gateway"}},p={authorsImageUrls:[void 0]},l=[{value:"The event-driven architecture",id:"the-event-driven-architecture",children:[],level:2},{value:"Why not use simply CRUD",id:"why-not-use-simply-crud",children:[],level:2},{value:"CQRS",id:"cqrs",children:[],level:2},{value:"API Gateway",id:"api-gateway",children:[],level:2},{value:"Serverless event processing",id:"serverless-event-processing",children:[],level:2},{value:"Conclusion",id:"conclusion",children:[{value:"Related resources",id:"related-resources",children:[],level:3},{value:"Recommended content",id:"recommended-content",children:[],level:3},{value:"Community\u2935\ufe0f",id:"community\ufe0f",children:[],level:3}],level:2}],c={toc:l};function h(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This blog post explores how to build event-driven API Services using these 3 well-known patterns to build a highly scalable and distributed system. We will break down each concept and understand the role of each in our particular approach.")),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/24/632e047d6835c.jpg",alt:"Event Driven Api Services"})),(0,n.kt)("p",null,"Developing API services using ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/cqrs"},"CQRS"),", ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/api-gateway/"},"API Gateway")," and ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/architecture/serverless/serverless-architecture"},"Serverless")," combine three patterns, using the ",(0,n.kt)("strong",{parentName:"p"},"command query responsibility separation")," (",(0,n.kt)("em",{parentName:"p"},"CQRS"),") pattern, the ",(0,n.kt)("strong",{parentName:"p"},"event sourcing pattern"),", and the ",(0,n.kt)("strong",{parentName:"p"},"API Gateway")," pattern. The CQRS pattern separates the responsibilities of the command and query models. The event sourcing pattern takes advantage of asynchronous ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/guide/architecture-styles/event-driven"},"event-driven")," communication to improve the overall user experience. Furthermore, an API gateway should also be implemented as a resource router, thus preventing API consumers from having to deal with different URLs depending on the action being performed."),(0,n.kt)("p",null,"Although the three concepts are independent, they complement each other well. This blog post explores how to build event-driven API Services using these ",(0,n.kt)("strong",{parentName:"p"},"3 well-known patterns")," to build a highly scalable and ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Distributed_computing"},"distributed system"),". We will break down each concept and understand the role of each in our particular approach."),(0,n.kt)("h2",{id:"the-event-driven-architecture"},"The event-driven architecture"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"event-driven architecture")," makes use of events to trigger and communicate between decoupled services.  Each service publishes an event whenever it updates its data. Other services subscribe to events. When an event is received, a service updates its data."),(0,n.kt)("p",null,"This architecture has several benefits such as you completely ",(0,n.kt)("strong",{parentName:"p"},"decoupling")," producer and consumer services.  If one service has a failure, the rest will keep running. Consumers can respond to events immediately as they arrive. It adds ",(0,n.kt)("strong",{parentName:"p"},"agility")," as well. If you want to add another service, you can just have it subscribe to an event and have it generate new events of its own. The existing services don\u2019t know or care that this has happened, so there\u2019s no impact on them."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/20/63289f6bb3090.png",alt:"Event driven diagram"})),(0,n.kt)("h2",{id:"why-not-use-simply-crud"},"Why not use simply CRUD"),(0,n.kt)("p",null,"Usually, we use the same data model to query and update a database that is similar to the basic ",(0,n.kt)("strong",{parentName:"p"},"CRUD")," operations (",(0,n.kt)("strong",{parentName:"p"},"\u201cCREATE\u201d, \u201cREAD\u201d, \u201cUPDATE\u201d, and \u201cDELETE\u201d"),") and it is the most straightforward way of dealing with data manipulation. We can build API services by following this simple principle. Any tool or framework that advertises itself as a quick method to bring your application to the market. But modern applications involve more complex business processes with workflows, validation, and business logic that are difficult to express using the classic CRUD paradigm."),(0,n.kt)("p",null,"Some of the following challenges you can think of:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u26d4\ufe0f Since for both read and write operations, and the same DTO or data transfer object are used, there\u2019s a chance that read and write operations will be out of sync.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u26d4\ufe0f The application can perform a majority of reading queries (for example, searches) where your logic is not optimized for only read operations.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u26d4\ufe0f As both read and write activities are permitted, security and permissions become more complicated to manage.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u26d4\ufe0f Different data representations are required in order to address the multiple API consumer needs."))),(0,n.kt)("p",null,"As a result of these difficulties, a new set of data manipulation patterns known as ",(0,n.kt)("strong",{parentName:"p"},"CQRS")," has arisen to enhance the classic CRUD methodology."),(0,n.kt)("h2",{id:"cqrs"},"CQRS"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"CQRS")," stands for ",(0,n.kt)("em",{parentName:"p"},"Command and Query Responsibility Segregation"),", a pattern that separates reads and writes into different models, using commands to update data, and queries to read data."),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This CQRS pattern, as it is known today, was first introduced by ",(0,n.kt)("em",{parentName:"p"},"Greg Young")," and was inspired by ",(0,n.kt)("em",{parentName:"p"},"Bertrand Meyer's")," command-query separation principle. Since its introduction, the pattern has gained a lot of popularity, and several resources can be found online describing its many flavors. This ",(0,n.kt)("a",{parentName:"p",href:"https://cqrs.files.wordpress.com/2010/11/cqrs_documents.pdf"},"link")," is a good source describing ",(0,n.kt)("em",{parentName:"p"},"Young's")," original thinking behind the pattern.")),(0,n.kt)("p",null,"This pattern helps, as instead of having a standard service and storage supporting traditional CRUD operations, ",(0,n.kt)("strong",{parentName:"p"},"query and upsert")," (updates or creates) responsibilities are split (segregated) into different services, each with its own storage. Technically, this can be implemented in HTTP so that the ",(0,n.kt)("strong",{parentName:"p"},"Command API")," is implemented exclusively with POST routes (The write side uses a schema that is optimized for updates), while the ",(0,n.kt)("strong",{parentName:"p"},"Query API")," is implemented exclusively with GET routes (The read side can use a schema that is optimized for queries) as it is illustrated in the below diagram."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/20/63289f6ad9d61.png",alt:"CQRS pattern example diagram"})),(0,n.kt)("p",null,"This pattern is typically combined with yet another ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/architecture/patterns/event-sourcing"},(0,n.kt)("strong",{parentName:"a"},"event sourcing pattern")),", as it ensures that all changes made through Command API, are reflected in the read storage as well. The problem with the CQRS scenario, the read storage won't be immediately updated as part of one transaction (for example, as in the CRUD API service case because CRUD systems perform update operations directly against a data store). As a result, the query part will be not aware of the latest changes. Such a delay in storage reflecting the latest state of a resource is referred to as eventual consistency.  The event sourcing pattern is very useful because it enables different systems to consume resource state changes as a series of events in the log via an Event Hub capability as you can see in the below diagram."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/20/6328a7ca2abbc.png",alt:"Event sourcing with CQRS diagram"})),(0,n.kt)("p",null,"The diagram also shows the product's query operations performed against the read-only storage and the product's command operations persisted in an Event Hub capability. They are then picked up by another service called ",(0,n.kt)("strong",{parentName:"p"},"Upsert service")," responsible for upserting (create, update, and logical deletes) the read storage. Once an upsert action takes place, an event is generated that can be consumed by other services interested in any changes of state in product records."),(0,n.kt)("h2",{id:"api-gateway"},"API Gateway"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Command and Query services APIs")," can be managed via lightweight, independently deployable, and scalable ",(0,n.kt)("strong",{parentName:"p"},"API gateways")," that can run anywhere that allow developers to manage API endpoints. They can handle extremely large volumes, as they run on highly scalable platforms, for example, ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX"),", ",(0,n.kt)("a",{parentName:"p",href:"https://docs.konghq.com/"},"Kong"),", ",(0,n.kt)("a",{parentName:"p",href:"https://tyk.io/"},"Tyk"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://www.getambassador.io/"},"Ambassador")," to name a few."),(0,n.kt)("p",null,"API Gateway can help with the challenges that you meet with implementing standard policies (for example, ",(0,n.kt)("em",{parentName:"p"},"authorization, throttling, and rate limiting"),") for APIs. As an ",(0,n.kt)("strong",{parentName:"p"},"API Gateway")," acts as a central proxy to route all incoming requests from your clients to intended destinations (backend services)."),(0,n.kt)("p",null,"You can utilize the API Gateway to expose a ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Representational_state_transfer"},"REST API")," in front of an event-driven integration. The below diagram illustrates the pattern first and foremost by showing how an API gateway implements resourcing routing to route read calls to the product's query service and upsert calls to the product's command service."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/20/6328a93c92d67.png",alt:"Building event-driven API services using CQRS, API Gateway and Serverless (2).png"})),(0,n.kt)("h2",{id:"serverless-event-processing"},"Serverless event processing"),(0,n.kt)("p",null,"We can create our consumer services by using ",(0,n.kt)("strong",{parentName:"p"},"Serverless functions"),". ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Serverless_computing"},"Serverless")," is a popular event-driven architectural style that is rapidly gaining traction when building and operating cloud-native applications. Serverless platforms can be categorized into two broad categories, Function as a ",(0,n.kt)("em",{parentName:"p"},"Service (FaaS)")," and ",(0,n.kt)("em",{parentName:"p"},"Backend as a Service (BaaS)"),". The FaaS method allows customers to build, deploy, run, and manage their applications without managing the underlying infrastructure. When events arrive at the Event Hub, a new serverless (a piece of code or a function) is triggered to handle the event as it is shown in the next diagram."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/09/20/6328a7ca42d26.png",alt:"Serverless, CQRS, Event sourcing and API Gateway"})),(0,n.kt)("p",null,"There are many FaaS providers in the market and each platform has unique scenarios in which it shines. The largest cloud companies (",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/"},"AWS"),", ",(0,n.kt)("a",{parentName:"p",href:"https://azure.microsoft.com/en-us/"},"Azure"),", ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/"},"Google"),") provide solutions (",(0,n.kt)("a",{parentName:"p",href:"https://aws.amazon.com/lambda/"},"AWS Lambda"),", ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/azure/azure-functions/functions-overview"},"Azure Functions"),", and ",(0,n.kt)("a",{parentName:"p",href:"https://cloud.google.com/functions"},"Google Cloud Function")," respectively) that are meant to fit nearly every situation with generic cloud products."),(0,n.kt)("h2",{id:"conclusion"},"Conclusion"),(0,n.kt)("p",null,"The blog post demonstrated shortly how to build event-driven API services by using some well-known patterns that is flexible to change and more easily decomposed."),(0,n.kt)("p",null,"Despite some notable advantages the approach has, there are also some disadvantages as well. It increases the complexity of implementation, especially when compared with traditional CRUD services."),(0,n.kt)("p",null,"Since our example is based on traditional REST APIs all use HTTP as the transport and protocol layer, the situation is much more complex when it comes to event-driven APIs. However, the same approach can also be applied to multiple different protocols (for example, ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/WebSocket"},"WebSockets"),", ",(0,n.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT"),", or ",(0,n.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Server-sent_events"},"SSE"),") depending on the capabilities offered by the API gateway chosen (",(0,n.kt)("em",{parentName:"p"},"For example, ",(0,n.kt)("a",{parentName:"em",href:"https://apisix.apache.org/"},"Apache APISIX")," supports the proxy of ",(0,n.kt)("a",{parentName:"em",href:"https://apisix.apache.org/docs/apisix/plugins/grpc-web/"},"gRPC Web")," protocol by means of its plug-in"),") how it handles conversions from one protocol to another."),(0,n.kt)("h3",{id:"related-resources"},"Related resources"),(0,n.kt)("p",null,"\u2794 ",(0,n.kt)("a",{parentName:"p",href:"https://martinfowler.com/articles/201701-event-driven.html"},"What do you mean by \u201cEvent-Driven\u201d?"),"."),(0,n.kt)("p",null,"\u2794 ",(0,n.kt)("a",{parentName:"p",href:"https://docs.microsoft.com/en-us/azure/architecture/patterns/cqrs"},"Command Query Responsibility Segregation"),"."),(0,n.kt)("p",null,"\u2794 ",(0,n.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/dotnet/architecture/serverless/serverless-architecture"},"Serverless architecture"),"."),(0,n.kt)("p",null,"\u2794 ",(0,n.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/terminology/api-gateway/"},"API Gateway"),"."),(0,n.kt)("h3",{id:"recommended-content"},"Recommended content"),(0,n.kt)("p",null,"\u2794 Watch Video Tutorial:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/dUOjJkb61so"},"Getting Started with Apache APISIX"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/hMFjhwLMtQ8"},"APIs security with Apache APISIX"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://youtu.be/aWzo0ysH__c"},"Implementing resilient applications with API Gateway (Circuit breaker)"),"."))),(0,n.kt)("p",null,"\u2794 Read the blog posts:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://dev.to/apisix/implementing-resilient-applications-with-api-gateway-health-check-338c"},"Implementing resilient applications with API Gateway (Health Check)"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("a",{parentName:"p",href:"https://dev.to/apisix/overview-of-apache-apisix-api-gateway-plugins-2m8o"},"Overview of Apache APISIX API Gateway Plugins"),"."))),(0,n.kt)("h3",{id:"community\ufe0f"},"Community\u2935\ufe0f"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\ud83d\ude4b ",(0,n.kt)("a",{parentName:"li",href:"https://apisix.apache.org/docs/general/join/"},"Join the Apache APISIX Community")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udc26 ",(0,n.kt)("a",{parentName:"li",href:"https://twitter.com/ApacheAPISIX"},"Follow us on Twitter")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udcdd ",(0,n.kt)("a",{parentName:"li",href:"https://join.slack.com/t/the-asf/shared_invite/zt-vlfbf7ch-HkbNHiU_uDlcH_RvaHv9gQ"},"Find us on Slack")),(0,n.kt)("li",{parentName:"ul"},"\ud83d\udce7 ",(0,n.kt)("a",{parentName:"li",href:"dev@apisix.apache.org"},"Mail to us")," with your questions.")))}h.isMDXComponent=!0}}]);