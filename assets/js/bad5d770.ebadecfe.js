"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7599],{35318:(e,t,i)=>{i.d(t,{Zo:()=>h,kt:()=>p});var a=i(27378);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function s(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?s(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):s(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function r(e,t){if(null==e)return{};var i,a,n=function(e,t){if(null==e)return{};var i,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)i=s[a],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},h=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var i=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,h=r(e,["components","mdxType","originalType","parentName"]),u=c(i),p=n,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||s;return i?a.createElement(f,o(o({ref:t},h),{},{components:i})):a.createElement(f,o({ref:t},h))}));function p(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=i.length,o=new Array(s);o[0]=u;var r={};for(var l in t)hasOwnProperty.call(t,l)&&(r[l]=t[l]);r.originalType=e,r.mdxType="string"==typeof e?e:n,o[1]=r;for(var c=2;c<s;c++)o[c]=i[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,i)}u.displayName="MDXCreateElement"},85310:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>d,frontMatter:()=>s,metadata:()=>r,toc:()=>c});var a=i(25773),n=(i(27378),i(35318));const s={title:"Practice of localized application with API gateway in the Middle East",authors:[{name:"Lilin Hu",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["API Gateway","Apache APISIX","Beeto","the Middle East","Traffic","Security"],description:"This article introduces how the Middle East social software Beeto uses APISIX to achieve localized deployment in security and scalability.",tags:["Case Studies"],image:"https://static.apiseven.com/2022/blog/0817/beeto.png"},o=void 0,r={permalink:"/blog/2022/06/14/beeto-with-apache-apisix",source:"@site/blog/2022/06/14/beeto-with-apache-apisix.md",title:"Practice of localized application with API gateway in the Middle East",description:"This article introduces how the Middle East social software Beeto uses APISIX to achieve localized deployment in security and scalability.",date:"2022-06-14T00:00:00.000Z",formattedDate:"June 14, 2022",tags:[{label:"Case Studies",permalink:"/blog/tags/case-studies"}],readingTime:12.73,truncated:!0,authors:[{name:"Lilin Hu",title:"Author"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"Build automated operation platform based on Apache APISIX",permalink:"/blog/2022/06/14/automated-operation-base-apache-apisix"},nextItem:{title:"Implementation of canary release solution based on Apache APISIX",permalink:"/blog/2022/06/14/how-mse-supports-canary-release-with-apache-apisix"}},l={authorsImageUrls:[void 0,void 0]},c=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Pain points in architecture design",id:"pain-points-in-architecture-design",children:[{value:"Monolithic Service",id:"monolithic-service",children:[],level:3},{value:"Difficulty in landing multiple services",id:"difficulty-in-landing-multiple-services",children:[],level:3}],level:2},{value:"APISIX for Beeto architecture",id:"apisix-for-beeto-architecture",children:[],level:2},{value:"Practices applying APISIX",id:"practices-applying-apisix",children:[{value:"Security: Authentication Plugin",id:"security-authentication-plugin",children:[{value:"North-South Traffic: Cookie",id:"north-south-traffic-cookie",children:[],level:4},{value:"East-West Traffic: Token",id:"east-west-traffic-token",children:[],level:4}],level:3},{value:"Scalability: Stateless Service Scaling Migration",id:"scalability-stateless-service-scaling-migration",children:[],level:3},{value:"Functional Extensibility: Business Dynamic Forwarding",id:"functional-extensibility-business-dynamic-forwarding",children:[],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],h={toc:c};function d(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},h,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"This article is based on the sharing made by Hu Lilin (Beeto Platform R&D) at the ",(0,n.kt)("a",{parentName:"p",href:"https://apisix-summit.org/"},"Apache APISIX Summit ASIA 2022"),", and introduces how the Middle East social software Beeto uses APISIX to achieve localized deployment.")),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Beeto is a social app for the Middle East market focusing on Arabic language, with localized product design and technical architecture. It has been ranked No.4 in the Top Charts list of Saudi iOS app store, surpassing the old social giant Facebook."),(0,n.kt)("p",null,"In fact, the Middle East is considered a more mature region in the Internet field, with a very high penetration of active users in social networks, especially in the Saudi region, where the Internet users have reached 90% in 2019, and the penetration rate of active users in Saudi Arabia will already be ranked 9th in 2020."),(0,n.kt)("p",null,'The maturity of the Internet market has brought about international software coverage, with the likes of WhatsApp, YouTube and Instagram being the mainstream local social software. But looking back, you will find that there is basically no localized social software in the Middle East like Weibo in China. Therefore, before Beeto was born, we aimed at the direction of "Middle East Internet is mature and high penetration rate, but little localization" and started to prepare the product focusing on "localization features".'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-en1.png",alt:"Localization appeal"})),(0,n.kt)("p",null,"Beeto in the Middle East is actually benchmarked against feed stream applications like Twitter and Facebook, so a relatively complete framework was planned from the beginning in the deployment of the business architecture. For example, to meet the social attributes of relationship interaction, content consumption (graphics, live video, crosstown advertising, etc.), as well as financial and service categories of reward, cash withdrawal, voting and lottery, and other kinds of business, and even including the platform side of the regulation, content security audit and other requirements."),(0,n.kt)("p",null,"As we mentioned earlier, the maturity of the Internet in the Middle East market is bound to have high quality requirements for a product launch, so to effectively enter the Middle East market, it is not possible to make a simple functional application first and go live."),(0,n.kt)("p",null,"So the first version of Beeto's business structure is a complete, and in line with the mainstream social software should have a variety of features in one product. At the same time, Beeto's goal was clear: to become the largest Arabic social platform and the best Arabic community in the Middle East with \"localized features\"."),(0,n.kt)("h2",{id:"pain-points-in-architecture-design"},"Pain points in architecture design"),(0,n.kt)("p",null,"In order to go local, Beeto needs to meet the existing local social needs at the business level, but also needs to do some localization operations at the technical level, such as service deployment and data storage. Technical friends familiar with Weibo or Twitter should know that it takes dozens or even hundreds of architectural systems to collaborate behind such a huge information flow product."),(0,n.kt)("h3",{id:"monolithic-service"},"Monolithic Service"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-en2.png",alt:"Service division"})),(0,n.kt)("p",null,"The current Beeto product's services can be divided into these categories. The implementation of these services actually needs to be deployed locally in the Middle East. If we split each business by service, each service is actually a separate monolithic architecture."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en3.png",alt:"monolithic architecture"})),(0,n.kt)("p",null,"The above diagram shows a very common deployment architecture. Take Beeto's feed stream service, if you want to realize the user browsing feed stream demand, you have to support public network access, i.e. north-south traffic access; at the same time, the feed stream service will also provide some internal calls in the form of similar topic business, i.e. east-west traffic calls. Therefore, the overall service property is to explicitly support both external and internal invocation modes, and user traffic is load balanced through seven layers and assigned to different servers before invoking different storage resources, similar to the east-west direction. The whole seven-tier cluster is responsible for handling north-south and east-west traffic, load balancing, security authentication and node monitoring."),(0,n.kt)("p",null,"When the services of multiple services are combined together, the overall architecture is formed as shown below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en4.png",alt:"Overall architecture"})),(0,n.kt)("p",null,"As you can see, several services exist in both the adaptation layer, the business layer and the basic service layer. The deployment architecture of each service has the single architectural details mentioned earlier, so there are several seven-tier clusters in between, which is actually a very large and complex set of system architecture already."),(0,n.kt)("p",null,"But because the current Beeto product is still in the start-up phase, especially the product itself in the Middle East local landing, while the R & D staff in China situation, according to the above-mentioned scale deployment, need to invest very large server costs and maintenance costs. Also later as business increases, the number of individual services will inevitably increase, both in terms of cost and O&M operations will become more difficult to control."),(0,n.kt)("h3",{id:"difficulty-in-landing-multiple-services"},"Difficulty in landing multiple services"),(0,n.kt)("p",null,"In addition to the complexity of deploying the architecture mentioned above, the invocation between services within the cluster is actually very complex."),(0,n.kt)("p",null,"North-south traffic is dispersed across service pools, and east-west traffic is interspersed across services, with the invocation relationships between these services intertwined. For each set of services, these invocation relationships need to be maintained, resulting in unclear and unmanageable invocation chains."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/06/blog/beeto-5.png",alt:"Technical stack differentiation"})),(0,n.kt)("p",null,"In addition to the complexity of the invocation relationship, there are also differences in the technology stack between each service. For example, in terms of invocation protocols, some services provide HTTP while others are RPC; and in terms of development languages, there is a mix of Java, Go, and other languages."),(0,n.kt)("p",null,"From these details, it can be seen that such a multi-service architecture system will obviously expose the problem of high deployment and maintenance costs when local implementation is carried out, while each set of seven layers of services requires investment in server costs, and the differences in the traffic of each service will lead to uneven traffic, resulting in low utilization of resources such as servers, resulting in a waste of resources."),(0,n.kt)("p",null,"Since the current cost of Beeto is focused on business upgrades and iterations, the architecture design is more inclined to facilitate maintenance and unified management, so how to achieve this goal?"),(0,n.kt)("h2",{id:"apisix-for-beeto-architecture"},"APISIX for Beeto architecture"),(0,n.kt)("p",null,"In order to solve the pain point of inconvenient service management and high cost investment, and to benefit from the dynamic performance of APISIX with etcd which is more in line with Beeto's product requirements, APISIX was introduced as a gateway in the architecture deployment and a cluster of gateways was built, as shown in the figure below."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en6.png",alt:"New architecture"})),(0,n.kt)("p",null,"The gateway cluster provides extension tools such as registry, service control, service monitoring, protocol forwarding and application plugins for all services. The clusters of each service can be registered at the gateway in a unified manner, and new services up and down can all be done directly through the gateway."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en7.png",alt:"Cluster link"})),(0,n.kt)("p",null,"Also with the introduction of gateways, the call links for the entire cluster become very clear. North-south traffic is routed and forwarded by the gateway, while east-west traffic is forwarded by the gateway for services on the intranet. At the functional level, APISIX is responsible for unified maintenance of the authentication invoked by these traffic flows, so that the performance differences and traffic differences between the services are clearly understood at the gateway level."),(0,n.kt)("p",null,"To summarize, the introduction of APISIX gateways for architectural integration."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Solved the problem of unified north-south and east-west traffic, saved resources and labor costs, and realized dynamic and unified management."),(0,n.kt)("li",{parentName:"ul"},"The deployment architecture of business services focuses on the services themselves, thus realizing the independent existence of the gateway and business insensitivity."),(0,n.kt)("li",{parentName:"ul"},"Through extension plugins, functions such as permission verification, route distribution and health check of each service are hosted by the gateway."),(0,n.kt)("li",{parentName:"ul"},"New business go-live and service migration can be done dynamically, which is very friendly to operation and maintenance.")),(0,n.kt)("p",null,"Of course, as the gateway carries all the traffic in this architecture, the number of services will increase later as the services continue to expand, and the maintenance cost of the gateway will then increase, and new response options will need to be considered. However, in the current context, this solution is still the optimal choice."),(0,n.kt)("h2",{id:"practices-applying-apisix"},"Practices applying APISIX"),(0,n.kt)("p",null,"Apache APISIX as a gateway can handle multiple policies such as security authentication, service forwarding, and health checks in a unified way at the gateway layer. Therefore, Beeto has done a lot of experimentation at the business practice level after the introduction of APISIX."),(0,n.kt)("h3",{id:"security-authentication-plugin"},"Security: Authentication Plugin"),(0,n.kt)("h4",{id:"north-south-traffic-cookie"},"North-South Traffic: Cookie"),(0,n.kt)("p",null,"We talked earlier about the public network users' access traffic uniformly passing through the gateway. The authentication for public network users is based on user requests authenticated by cookies. When a user request arrives at the gateway carrying a cookie, it is authenticated at the gateway by an authentication plugin."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en8.png",alt:"Cookie handling process"})),(0,n.kt)("p",null,"As shown in the flowchart above, the plugin internally performs localization validation and then performs authentication verification of the remote service according to the policy. When the request completes the cookie verification, it is then forwarded to the specified service."),(0,n.kt)("p",null,"The advantages of doing so are mainly in two aspects."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The information security of user cookies is ensured. Because cookies are sensitive data, the execution process ensures that only the gateway layer can receive and process them, and no other business layers can access them. Prevent security problems caused by inconsistent business processing rules, but also effectively avoid the human factor and irregularities caused by cookie leakage and other security issues."),(0,n.kt)("li",{parentName:"ul"},"Reduce the complexity of each service cookie authentication. As mentioned above, cookies need to be verified locally or remotely in the process, and when cookies are upgraded, each service needs to be upgraded simultaneously. Through the gateway for unified management and verification, in the processing of business services to eliminate the cost of verification, only need to focus on the results, using the results of business rules processing, thus ensuring that each business processing more focused on the business itself.")),(0,n.kt)("h4",{id:"east-west-traffic-token"},"East-West Traffic: Token"),(0,n.kt)("p",null,'In the diagram below, Service A calls Service B. Generally speaking, it is only necessary to provide an API when calling each other. However, in the internal process, we need to understand "who called the API, how it was called, whether permission verification is required, and whether the researcher needs to be controlled", and so on, which need to be handled internally.'),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en9.png",alt:"Token handling process"})),(0,n.kt)("p",null,"With the APISIX gateway, the process becomes much simpler. All the internal service calls only need to register with the Auth Authentication Service, and each service is issued an App key, which is used to indicate the identity ID of the service. After the authentication is passed, the authentication mark will be passed to the invoked service, and the whole process will be unified for authentication registration and completion of mutual invocation."),(0,n.kt)("p",null,"Thanks to the Token rule of App key, the above operation is easy to trace the source of invocation, so as to carry out troubleshooting and permission control, and also play an effective control on illegal invocation."),(0,n.kt)("p",null,"So whether it is the authentication of north-south traffic or east-west traffic, the advantage of unified authentication is to ensure the security and uniformity of the cluster, and it is very helpful in problem identification and invocation control."),(0,n.kt)("h3",{id:"scalability-stateless-service-scaling-migration"},"Scalability: Stateless Service Scaling Migration"),(0,n.kt)("p",null,"The overall deployment architecture of Beeto's clusters is based on APISIX gateway clusters - stateless service business service clusters - stateful service data center clusters from top to bottom. When deployed locally in the Middle East, they are deployed on major cloud clusters. According to the scale of cloud coverage in the Middle East and the cloud vendors in different regions, the expansion and migration of cloud services need to be considered when deploying the services."),(0,n.kt)("p",null,"In the process of migration, Beeto focused on the migration of stateless services. Because of the migration cost of the data center, it is not suitable to do dynamic adjustment; at the same time, most of the request pressure is carried by the stateless service, so it is very important to ensure that the stateless service has a good scalability premise."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en10.png",alt:"Migration process"})),(0,n.kt)("p",null,"In Beeto's architecture, service scalability is mainly reflected in two aspects, namely, individual service scalability and overall cluster scalability. For example, if a single service runs out of resources and needs to be scaled up, APISIX gateways can be used to dynamically add nodes to achieve the scaling. Similarly, in cross-cluster or cross-cloud situations, cluster scalability can be achieved by deploying multiple APISIX gateways and migrating different services to different gateway nodes."),(0,n.kt)("p",null,"For business services, the overall architecture remains unchanged, and dynamic scaling of individual services and service migration can be achieved at the gateway layer. The scheme and objectives of the whole process are clear, and once changes are involved, they do not cause instability of the overall architecture."),(0,n.kt)("h3",{id:"functional-extensibility-business-dynamic-forwarding"},"Functional Extensibility: Business Dynamic Forwarding"),(0,n.kt)("p",null,"In addition to these familiar gateway general scenarios, Apache APISIX also provides a great help to Beeto at the business dynamic forwarding level."),(0,n.kt)("p",null,"Those who are familiar with the UI and back-end of APP should know that different product pages are provided by different services. A page is made up of different modules, and the content of them is all sent from the interface. What module's data is sent down from the interface is rendered as what on the end. This is a joint client-side rendering specification, which aims to make the client-side rendering process more generic and the business processing more flexible."),(0,n.kt)("p",null,"For example, in the implementation of PageA above, the client calls the interface of Service A, sends the corresponding module data, and completes the rendering of PageA. This operation causes a problem, the client needs to maintain each page and interface to each service. If the content changes, it is necessary to make a release solution, which is not friendly in terms of operability and efficiency."),(0,n.kt)("p",null,"The main idea to solve the above problem is to realize the unified distribution of services in the overall architecture. That is, the client first unifies the request interface address, forwards all requests of this type to one interface, processes the request parameters and URL rules for the URL address at the gateway layer, and then introduces the distribution plugin. Finally, according to the configuration rules, the parsed requests are forwarded directly to the specified services at the gateway layer."),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://static.apiseven.com/2022/blog/0614/beeto-en12.png",alt:"Business dynamic forwarding"})),(0,n.kt)("p",null,"The client only needs to determine the rendering specification throughout the process and does not need to care about the source of the data. The gateway layer takes the responsibility of service distribution and forwards the traffic directly. Meanwhile, the plugin configuration file in APISIX can be dynamically updated in real time, and the forwarding rules can be dynamically adjusted, which is very flexible. In fact, for applications like BFF (Backend for Frontend) architecture, such requirements can be solved at the gateway layer."),(0,n.kt)("h2",{id:"summary"},"Summary"),(0,n.kt)("p",null,"This article presents Beeto's design thinking and business-level application practices after the introduction of Apache APISIX gateway from Beeto's product design perspective. With the support of APISIX gateway, it helps Beeto to realize the scenario of localized deployment, unified management and friendly operation and maintenance in the Middle East, while controlling the resource cost and business product lines."))}d.isMDXComponent=!0}}]);