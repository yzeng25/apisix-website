"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[5593],{35318:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var o=n(27378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),p=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return o.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||r;return n?o.createElement(h,i(i({ref:t},u),{},{components:n})):o.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},87791:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>p});var o=n(25773),a=(n(27378),n(35318));const r={title:"Connecting IoT Devices to the Cloud with APISIX MQTT Proxy",authors:[{name:"Navendu Pottekkat",title:"Author",url:"https://github.com/navendu-pottekkat",image_url:"https://avatars.githubusercontent.com/u/49474499"}],keywords:["IoT","MQTT","Cloud","TLS"],description:"A guide to using Apache APISIX as an MQTT proxy to connect IoT devices to the cloud.",tags:["Plugins"],image:"https://static.apiseven.com/uploads/2023/06/23/kdd9TigM_mqtt-apisix-cover.png"},i=void 0,l={permalink:"/blog/2023/06/30/apisix-mqtt-proxy",source:"@site/blog/2023/06/30/apisix-mqtt-proxy.md",title:"Connecting IoT Devices to the Cloud with APISIX MQTT Proxy",description:"A guide to using Apache APISIX as an MQTT proxy to connect IoT devices to the cloud.",date:"2023-06-30T00:00:00.000Z",formattedDate:"June 30, 2023",tags:[{label:"Plugins",permalink:"/blog/tags/plugins"}],readingTime:6.055,truncated:!0,authors:[{name:"Navendu Pottekkat",title:"Author",url:"https://github.com/navendu-pottekkat",image_url:"https://avatars.githubusercontent.com/u/49474499",imageURL:"https://avatars.githubusercontent.com/u/49474499"}],prevItem:{title:"Biweekly Report (June 19 - July 02)",permalink:"/blog/2023/07/05/weekly-report"},nextItem:{title:"Release Apache APISIX 3.4.0",permalink:"/blog/2023/06/30/release-apache-apisix-3.4.0"}},s={authorsImageUrls:[void 0]},p=[{value:"Why an MQTT Proxy?",id:"why-an-mqtt-proxy",children:[],level:2},{value:"A Unified Entry Point",id:"a-unified-entry-point",children:[],level:2},{value:"Decoupling from the Cloud",id:"decoupling-from-the-cloud",children:[],level:2},{value:"TLS All the Way!",id:"tls-all-the-way",children:[],level:2},{value:"Improving the MQTT Proxy",id:"improving-the-mqtt-proxy",children:[],level:2}],u={toc:p};function c(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"APISIX's support for ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/stream-proxy/"},"stream routes")," and, in extension, the MQTT protocol is often overlooked. Let's change this by looking at an end-to-end example of how APISIX can act as an MQTT proxy.")),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://navendu.me/posts/iot-to-cloud/"})),(0,a.kt)("p",null,"People typically use the ",(0,a.kt)("a",{parentName:"p",href:"https://mqtt.org/"},"MQTT protocol")," when transferring data from IoT devices because of its low overhead and ease of implementation."),(0,a.kt)("p",null,"MQTT was created for sending small chunks of data over unreliable networks and uses a binary format rather than the typical text-based format used in protocols like HTTP or SMTP. With ",(0,a.kt)("a",{parentName:"p",href:"https://mqtt.org/software/"},"client libraries")," in multiple programming languages, you are unlikely to have to implement the protocol on your own but use an existing library."),(0,a.kt)("p",null,'As your IoT devices move to the cloud, you face a different challenge of managing multiple protocols seamlessly. Questions arise like "How can I use a single entry point for all my traffic?", "How do I decouple my IoT and cloud infrastructure with little overhead?", and "How can I do all this securely?"'),(0,a.kt)("p",null,"This article attempts to answer these questions using Apache APISIX, which supports HTTP and MQTT protocols, to proxy requests between your devices, message brokers, and the cloud."),(0,a.kt)("h2",{id:"why-an-mqtt-proxy"},"Why an MQTT Proxy?"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/"},"APISIX")," is primarily used as an API gateway for routing HTTP traffic."),(0,a.kt)("p",null,"As an IoT developer recently pointed out, APISIX's support for ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/stream-proxy/"},"stream routes")," and, in extension, the MQTT protocol is often overlooked. Let's change this by looking at an end-to-end example of how APISIX can act as an MQTT proxy."),(0,a.kt)("p",null,'In this example, you own two warehouses and an office. Data from your warehouses and the office are sent to the storage, monitoring, and analytics services deployed in your cloud through APISIX over HTTP. We will refer to this as "the system."'),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/23/kYSewzBm_system.png",alt:"The system"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Apache APISIX will route all requests from your warehouses and office to appropriate services in your cloud backend.")),(0,a.kt)("p",null,"You now decide to add two IoT devices to improve the efficiency of the system:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"A flow meter to measure the flow rate of water in your warehouses."),(0,a.kt)("li",{parentName:"ol"},"A light sensor to measure the illuminance in your office and warehouses.")),(0,a.kt)("p",null,"These devices are small, energy-efficient, and support the MQTT protocol. The measurements from the flow meter are used by an automatic valve to control the water flow rate, and the light sensor is used to maintain optimal lighting."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/23/RFsl83wC_iot-system.png",alt:"System upgrade"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Here, the devices will send messages directly to your MQTT broker. Multiple clients including phones, PCs, valves, and your cloud services are subscribed to the broker.")),(0,a.kt)("p",null,"As shown above, you can deploy this system independently from your cloud infrastructure. But the toll of maintaining separate infrastructures for your IoT devices and cloud can also be pretty high both in terms of cost and effort."),(0,a.kt)("p",null,"However, combining the two systems is not a trivial task. You must work with multiple protocols but use a single entry point to reduce infrastructure costs and maintenance overhead. This is where being pragmatic and using APISIX pays you off."),(0,a.kt)("h2",{id:"a-unified-entry-point"},"A Unified Entry Point"),(0,a.kt)("p",null,"Apache APISIX supports MQTT and HTTP protocols and can work as a proxy between your IoT devices and the cloud. APISIX supports this through the ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugins/mqtt-proxy/"},"mqtt-proxy")," plugin, which allows it to load balance and route MQTT messages between brokers."),(0,a.kt)("p",null,"With the APISIX MQTT proxy, your system can look something like this:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/23/ZDWIZblC_mqtt-proxy.png",alt:"APISIX MQTT proxy"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Now in addition to your HTTP traffic, APISIX also manages your MQTT traffic and can route it between your message brokers.")),(0,a.kt)("p",null,"APISIX will do all the heavy lifting and process both HTTP and MQTT requests, removing any additional overhead from your cloud or IoT devices."),(0,a.kt)("p",null,"Routing MQTT messages is useful when you want to use multiple brokers. The ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," plugin routes the messages based on its ",(0,a.kt)("inlineCode",{parentName:"p"},"clientId")," using a consistent hashing algorithm. This allows you to send messages from different clients to different brokers dynamically. For example, you can send messages from the flow meters and light sensors to different brokers."),(0,a.kt)("p",null,"In practice, you can configure this in the ",(0,a.kt)("inlineCode",{parentName:"p"},"mqtt-proxy")," plugin. The example below shows the configuration in ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/deployment-modes/#standalone"},"standalone mode"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="config.yaml"',title:'"config.yaml"'},"apisix:\n  enable_admin: false\n  stream_proxy:\n    only: false # allow HTTP as well\n    tcp:\n      - addr: 9000\n        tls: false\ndeployment:\n  role: data_plane # deploy APISIX in standalone mode as a data plane\n  role_data_plane:\n    config_provider: yaml\nstream_plugins:\n  - mqtt-proxy # enable the mqtt-proxy plugin\n#END\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="apisix.yaml"',title:'"apisix.yaml"'},'stream_routes:\n  - id: 1\n    upstream_id: 1\n    plugins:\n      mqtt-proxy:\n        protocol_name: "MQTT"\n        protocol_level: 5 # use MQTT 5.0\nupstreams:\n  # configure multiple brokers\n  - nodes:\n      "host.docker.internal:1883": 1\n      "host.docker.internal:1884": 1\n    type: chash\n    key: mqtt_client_id\n    id: 1\n#END\n')),(0,a.kt)("p",null,"You can also use the ",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/admin-api/"},"Admin API")," to configure this on the fly:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/stream_routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n    "plugins": {\n        "mqtt-proxy": {\n            "protocol_name": "MQTT",\n            "protocol_level": 5\n        }\n    },\n    "upstream": {\n        "type": "chash",\n        "key": "mqtt_client_id",\n        "nodes": [\n        {\n            "host": "host.docker.internal",\n            "port": 1883,\n            "weight": 1\n        },\n        {\n            "host": "host.docker.internal",\n            "port": 1884,\n            "weight": 1\n        }\n        ]\n    }\n}\'\n')),(0,a.kt)("h2",{id:"decoupling-from-the-cloud"},"Decoupling from the Cloud"),(0,a.kt)("p",null,"Using multiple message brokers is a straightforward way to separate the cloud from your IoT devices while keeping them connected."),(0,a.kt)("p",null,"In our example, you can deploy a broker locally with the IoT devices and use a different broker for the cloud. APISIX will be able to route traffic between the two as shown below:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/23/AEAsH053_mqtt-proxy-decoupled.png",alt:"Decoupling"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"The broker in the local network will communicate with the valve and rest of the clients in the local network. APISIX will route the required messages to the broker deployed in your cloud which different clients in the cloud can subscribe to.")),(0,a.kt)("p",null,"Decoupling has its benefits. Now APISIX can handle the communication with the cloud, and your devices can communicate with APISIX instead of directly with the cloud."),(0,a.kt)("h2",{id:"tls-all-the-way"},"TLS All the Way!"),(0,a.kt)("p",null,"Another critical requirement for any communication system is security."),(0,a.kt)("p",null,"With APISIX as the MQTT proxy, security would mean securing the IoT device-to-APISIX and APISIX-to-cloud channels. The diagram below illustrates how APISIX achieves this through TLS authentication:"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://static.apiseven.com/uploads/2023/06/23/6Yb8oSu6_mqtt-proxy-tls.png",alt:"Securing communications"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"APISIX can secure the client-to-APISIX and APISIX-to-broker communication.")),(0,a.kt)("p",null,"In practice, we can update our configuration files to enable mutual TLS for the route (IoT-to-APISIX) and the upstream (APISIX-to-cloud):"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{title="config.yaml"}',"{title":'"config.yaml"}'},"apisix:\n  enable_admin: false\n  stream_proxy:\n    only: false # allow HTTP as well\n    tcp:\n      - addr: 9000\n        tls: true # enable TLS authentication\ndeployment:\n  role: data_plane # deploy APISIX in standalone mode as a data plane\n  role_data_plane:\n    config_provider: yaml\nstream_plugins:\n  - mqtt-proxy # enable the mqtt-proxy plugin\n#END\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'{title="apisix.yaml"}',"{title":'"apisix.yaml"}'},'stream_routes:\n  - id: 1\n    upstream_id: 1\n    sni: mqtt.navendu.me\n    plugins:\n      mqtt-proxy:\n        protocol_name: "MQTT"\n        protocol_level: 5 # use MQTT 5.0\nupstreams:\n  # configure multiple brokers\n  - nodes:\n      "host.docker.internal:1883": 1\n      "host.docker.internal:1884": 1\n    scheme: tls # enable TLS on upstream\n    type: chash\n    key: mqtt_client_id\n    id: 1\n#END\n')),(0,a.kt)("p",null,"For a complete guide on configuring TLS,\xa0",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/next/stream-proxy/#accept-tls-over-tcp-connection"},"refer to the documentation"),"."),(0,a.kt)("h2",{id:"improving-the-mqtt-proxy"},"Improving the MQTT Proxy"),(0,a.kt)("p",null,"One of the key features of Apache APISIX is that it is\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix"},"entirely open source"),"\xa0and\xa0",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/plugins/"},"extensible"),". You can add more features like MQTT transcoding to the\xa0",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/apisix/blob/master/apisix/stream/plugins/mqtt-proxy.lua"},"MQTT plugin"),"\xa0or\xa0",(0,a.kt)("a",{parentName:"p",href:"https://apisix.apache.org/docs/apisix/plugin-develop/"},"create new plugins"),"\xa0for your specific MQTT proxy."),(0,a.kt)("p",null,"We are seeing more users using APISIX for its MQTT support, which is bound to increase further as MQTT becomes the default protocol for communication between IoT devices."),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"A special thank you to\xa0",(0,a.kt)("a",{parentName:"em",href:"https://github.com/alfonsogonz"},"Alfonso Gonz\xe1lez"),"\xa0for his input and review. Alfonso and his team use APISIX's MQTT proxy features in production.")))}c.isMDXComponent=!0}}]);