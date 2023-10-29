"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4278],{35318:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>m});var n=a(27378);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),l=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=l(a),m=o,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return a?n.createElement(h,r(r({ref:t},c),{},{components:a})):n.createElement(h,r({ref:t},c))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=d;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var l=2;l<i;l++)r[l]=a[l];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},25700:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var n=a(25773),o=(a(27378),a(35318));const i={title:"Makes Convenienter to Proxy Dubbo in Apache APISIX",authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4"}],keywords:["Apache APISIX","Apache Dubbo","Proxy","API Gateway"],description:"This article describes how to use APISIX to implement a proxy for Dubbo. You can use dubbo-proxy plugin to build backend system of Dubbo framework.",tags:["Ecosystem","Plugins"],image:"https://static.apiseven.com/2022/blog/0818/plugins/Dubbo.png"},r=void 0,s={permalink:"/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix",source:"@site/blog/2022/01/13/how-to-proxy-dubbo-in-apache-apisix.md",title:"Makes Convenienter to Proxy Dubbo in Apache APISIX",description:"This article describes how to use APISIX to implement a proxy for Dubbo. You can use dubbo-proxy plugin to build backend system of Dubbo framework.",date:"2022-01-13T00:00:00.000Z",formattedDate:"January 13, 2022",tags:[{label:"Ecosystem",permalink:"/blog/tags/ecosystem"},{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:6.285,truncated:!0,authors:[{name:"Yong Qian",title:"Author",url:"https://github.com/nic-6443",image_url:"https://avatars.githubusercontent.com/u/22141303?v=4",imageURL:"https://avatars.githubusercontent.com/u/22141303?v=4"},{name:"Sylvia",title:"Technical Writer",url:"https://github.com/SylviaBABY",image_url:"https://avatars.githubusercontent.com/u/39793568?v=4",imageURL:"https://avatars.githubusercontent.com/u/39793568?v=4"}],prevItem:{title:"APISIX integrate with Kafka for real-time log monitoring",permalink:"/blog/2022/01/17/apisix-kafka-integration"},nextItem:{title:"Webinar | From API to Database",permalink:"/blog/2022/01/11/apisix-with-shardingsphere-meetup"}},p={authorsImageUrls:[void 0,void 0]},l=[{value:"Background",id:"background",children:[],level:2},{value:"How to use",id:"how-to-use",children:[{value:"Getting Started: Installation and Use",id:"getting-started-installation-and-use",children:[{value:"Interface implementation",id:"interface-implementation",children:[],level:4},{value:"Operation steps",id:"operation-steps",children:[],level:4}],level:3},{value:"Advanced: Complex Scenario Example",id:"advanced-complex-scenario-example",children:[{value:"Operation steps",id:"operation-steps-1",children:[],level:4}],level:3}],level:2},{value:"Summary",id:"summary",children:[],level:2}],c={toc:l};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"This article describes how to use APISIX to implement a proxy for Dubbo. You can use dubbo-proxy plugin to build backend system of Dubbo framework.")),(0,o.kt)("h2",{id:"background"},"Background"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://dubbo.apache.org/en/"},"Apache Dubbo")," is a MicroService development framework open sourced by Alibaba and donated to Apache, which provides two key capabilities of RPC communication and microservice governance. It has not only been validated by Ali's massive traffic in e-commerce scenario, but also been widely implemented in domestic technology companies."),(0,o.kt)("p",null,'In practical application scenarios, Apache Dubbo is generally used as the implementation framework for RPC calls between back-end systems, and when HTTP interfaces need to be provided to the front-end, the Dubbo Service is packaged as an HTTP interface through a "glue layer" and then delivered to the front-end system.'),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"Apache APISIX")," is the top open source project of Apache Software Foundation and the most active open source gateway project today. As a dynamic, real-time, high-performance open source API gateway, Apache APISIX provides rich traffic management features such as load balancing, dynamic upstream, grayscale publishing, service meltdown, authentication, observability, and more."),(0,o.kt)("p",null,"Benefiting from the advantages of Apache Dubbo application scenarios, Apache APISIX is based on the open source project tengine/mod_dubbo module to equip Apache Dubbo services with HTTP gateway capabilities. Dubbo Service can be easily published as an HTTP service via the dubbo-proxy plugin."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://static.apiseven.com/202108/1641873664933-65d02cb3-ec3e-4b95-945d-91cfb8106751.png",alt:"Architecture Diagram"})),(0,o.kt)("h2",{id:"how-to-use"},"How to use"),(0,o.kt)("h3",{id:"getting-started-installation-and-use"},"Getting Started: Installation and Use"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Here we recommend using the Apache APISIX version 2.11 image for installation. This version of APISIX-Base has the Dubbo module compiled by default, so you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," plugin directly.")),(0,o.kt)("p",null,"In the next steps, we will use the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/apache/dubbo-samples"},(0,o.kt)("inlineCode",{parentName:"a"},"dubbo-samples"))," project for a partial demonstration. This project is a demo application implemented using Apache Dubbo, and in this article we use one of the sub-modules as the Dubbo Provider."),(0,o.kt)("p",null,"Before we get into the action, let's take a brief look at the definition, configuration, and implementation of the Dubbo interface."),(0,o.kt)("h4",{id:"interface-implementation"},"Interface implementation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface DemoService {\n\n    /**\n     * standard samples dubbo infterace demo\n     * @param context pass http infos\n     * @return Map<String, Object></> pass to response http\n     **/\n    Map<String, Object> apisixDubbo(Map<String, Object> httpRequestContext);\n}\n")),(0,o.kt)("p",null,"As shown above, the Dubbo interface is defined in a fixed way. The ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," of method parameters represents the information passed by APISIX to the Dubbo Provider about the HTTP request (e.g. header, body, ...). The ",(0,o.kt)("inlineCode",{parentName:"p"},"Map")," of the method return value indicates how the Dubbo Provider passes some information to APISIX about the HTTP response to be returned."),(0,o.kt)("p",null,"After the interface information, the DemoService can be published via XML configuration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-xml"},'\x3c!-- service implementation, as same as regular local bean --\x3e\n<bean id="demoService" class="org.apache.dubbo.samples.provider.DemoServiceImpl"/>\n\n\x3c!-- declare the service interface to be exported --\x3e\n<dubbo:service interface="org.apache.dubbo.samples.apisix.DemoService" ref="demoService"/>\n')),(0,o.kt)("p",null,"After the above configuration, the Consumer can access the ",(0,o.kt)("inlineCode",{parentName:"p"},"apisixDubbo")," method through ",(0,o.kt)("inlineCode",{parentName:"p"},"org.apache.dubbo.samples.apisix.DemoService")," The specific interface implementation is as follows."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DemoServiceImpl implements DemoService {\n    @Override\n    public Map<String, Object> apisixDubbo(Map<String, Object> httpRequestContext) {\n        for (Map.Entry<String, Object> entry : httpRequestContext.entrySet()) {\n            System.out.println("Key = " + entry.getKey() + ", Value = " + entry.getValue());\n        }\n\n        Map<String, Object> ret = new HashMap<String, Object>();\n        ret.put("body", "dubbo success\\n"); // http response body\n        ret.put("status", "200"); // http response status\n        ret.put("test", "123"); // http response header\n\n        return ret;\n    }\n}\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"In the above code, ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoServiceImpl")," prints the received ",(0,o.kt)("inlineCode",{parentName:"p"},"httpRequestContext")," and describes the HTTP response to the Dubbo request by returning a Map object with the specified Key."))),(0,o.kt)("h4",{id:"operation-steps"},"Operation steps"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Start ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/apache/dubbo-samples/tree/master/dubbo-samples-tengine#install-dubbo"},(0,o.kt)("inlineCode",{parentName:"a"},"dubbo-samples")),"."),(0,o.kt)("li",{parentName:"ol"},"Enable the ",(0,o.kt)("inlineCode",{parentName:"li"},"dubbo-proxy")," plugin in the ",(0,o.kt)("inlineCode",{parentName:"li"},"config.yaml")," file.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# Add this in config.yaml\nplugins:\n  - ... # plugin you need\n  - dubbo-proxy\n")),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"Create an Upstream that points to the Dubbo Provider.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/upstreams/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "nodes": {\n        "127.0.0.1:20880": 1\n    },\n    "type": "roundrobin"\n}\'\n')),(0,o.kt)("ol",{start:4},(0,o.kt)("li",{parentName:"ol"},"Expose an HTTP route for the DemoService.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1  -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "host": "example.org"\n    "uris": [\n        "/demo"\n    ],\n    "plugins": {\n        "dubbo-proxy": {\n            "service_name": "org.apache.dubbo.samples.apisix.DemoService",\n            "service_version": "0.0.0",\n            "method": "apisixDubbo"\n        }\n    },\n    "upstream_id": 1\n}\'\n')),(0,o.kt)("ol",{start:5},(0,o.kt)("li",{parentName:"ol"},"Use the curl command to request Apache APISIX and view the returned results.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/demo  -H "Host: example.org"  -X POST --data \'{"name": "hello"}\'\n\n< HTTP/1.1 200 OK\n< Date: Sun, 26 Dec 2021 11:33:27 GMT\n< Content-Type: text/plain; charset=utf-8\n< Content-Length: 14\n< Connection: keep-alive\n< test: 123\n< Server: APISIX/2.11.0\n<\ndubbo success\n')),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The above code returns the ",(0,o.kt)("inlineCode",{parentName:"p"},"test: 123")," Header, and the ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo success")," string as the body. This is the same as what we expected in the ",(0,o.kt)("inlineCode",{parentName:"p"},"DemoServiceImpl")," code."))),(0,o.kt)("ol",{start:6},(0,o.kt)("li",{parentName:"ol"},"You can view the logs of the Dubbo Provider.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Key = content-length, Value = 17\nKey = host, Value = example.org\nKey = content-type, Value = application/x-www-form-urlencoded\nKey = body, Value = [B@70754265\nKey = accept, Value = */*\nKey = user-agent, Value = curl/7.80.0\n")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The Header and Body of the HTTP request are available through the ",(0,o.kt)("inlineCode",{parentName:"p"},"httpRequestContext"),', where the Header is used as a Map element, while the Body has a fixed string "body" as the Key value and a Byte array as the Value.'))),(0,o.kt)("h3",{id:"advanced-complex-scenario-example"},"Advanced: Complex Scenario Example"),(0,o.kt)("p",null,"As you can see in the simple use case above, we do publish Dubbo Service as an HTTP service via Apache APISIX, but there are obvious limitations in its use. For example, the parameters and return values of the interface must be ",(0,o.kt)("inlineCode",{parentName:"p"},"Map<String, Object>"),"."),(0,o.kt)("p",null,"So, how do you expose the HTTP service through Apache APISIX if there is an interface in your project that is already defined, but does not meet the above restrictions?"),(0,o.kt)("h4",{id:"operation-steps-1"},"Operation steps"),(0,o.kt)("p",null,"For the above scenario, we can use the HTTP Request Body to describe the Service and Method to be invoked and the corresponding parameters, and then use the reflection mechanism of Java to realize the invocation of the target method. Finally, the return value is serialized to JSON and written to the HTTP Response Body."),(0,o.kt)("p",null,'This will further enhance the "HTTP to Dubbo" capability of Apache APISIX and apply it to all existing Dubbo services. For details, see the following.'),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Add a Dubbo Service for existing projects to handle HTTP to Dubbo conversions in a unified way.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DubboInvocationParameter {\n    private String type;\n    private String value;\n}\n\npublic class DubboInvocation {\n    private String service;\n    private String method;\n    private DubboInvocationParameter[] parameters;\n}\n\npublic interface HTTP2DubboService {\n    Map<String, Object> invoke(Map<String, Object> context)  throws Exception;\n}\n\n\n@Component\npublic class HTTP2DubboServiceImpl implements HTTP2DubboService {\n\n    @Autowired\n    private ApplicationContext appContext;\n\n    @Override\n    public Map<String, Object> invoke(Map<String, Object> context) throws Exception {\n        DubboInvocation invocation = JSONObject.parseObject((byte[]) context.get("body"), DubboInvocation.class);\n        Object[] args = new Object[invocation.getParameters().size()];\n        for (int i = 0; i < args.length; i++) {\n            DubboInvocationParameter parameter = invocation.getParameters().get(i);\n            args[i] = JSONObject.parseObject(parameter.getValue(), Class.forName(parameter.getType()));\n        }\n\n        Object svc = appContext.getBean(Class.forName(invocation.getService()));\n        Object result = svc.getClass().getMethod(invocation.getMethod()).invoke(args);\n        Map<String, Object> httpResponse = new HashMap<>();\n        httpResponse.put("status", 200);\n        httpResponse.put("body", JSONObject.toJSONString(result));\n        return httpResponse;\n    }\n\n}\n')),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"Initiate the relevant call with the following command request.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9080/demo  -H "Host: example.org"  -X POST --data \'\n{\n    "service": "org.apache.dubbo.samples.apisix.DemoService",\n    "method": "createUser",\n    "parameters": [\n        {\n            "type": "org.apache.dubbo.samples.apisix.User",\n            "value": "{\'name\': \'hello\'}"\n        }\n    ]\n}\'\n')),(0,o.kt)("h2",{id:"summary"},"Summary"),(0,o.kt)("p",null,"In this article, we introduced how to use Apache APISIX to implement a proxy for Dubbo Service. By introducing the ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," plugin, you can build a simpler and more efficient traffic link for the back-end system of Dubbo framework."),(0,o.kt)("p",null,"We hope that the above steps and use cases will provide you with ideas for using it in relevant scenarios. For more information about the ",(0,o.kt)("inlineCode",{parentName:"p"},"dubbo-proxy")," plugin, please refer to the ",(0,o.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/dubbo-proxy/"},"official documentation"),"."))}u.isMDXComponent=!0}}]);