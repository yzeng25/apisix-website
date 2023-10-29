"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[61626],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var d=a.createContext({}),p=function(e){var n=a.useContext(d),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},s=function(e){var n=p(e.components);return a.createElement(d.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},u=a.forwardRef((function(e,n){var t=e.components,o=e.mdxType,r=e.originalType,d=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=p(t),m=o,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||r;return t?a.createElement(h,l(l({ref:n},s),{},{components:t})):a.createElement(h,l({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var r=t.length,l=new Array(r);l[0]=u;var i={};for(var d in n)hasOwnProperty.call(n,d)&&(i[d]=n[d]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var p=2;p<r;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},16599:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>l,default:()=>s,frontMatter:()=>r,metadata:()=>i,toc:()=>d});var a=t(87462),o=(t(67294),t(3905));const r={title:"Deployment modes",keywords:["API Gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},l=void 0,i={unversionedId:"deployment-modes",id:"version-3.4/deployment-modes",isDocsHomePage:!1,title:"Deployment modes",description:"Documentation about the three deployment modes of Apache APISIX.",source:"@site/docs-apisix_versioned_docs/version-3.4/deployment-modes.md",sourceDirName:".",slug:"/deployment-modes",permalink:"/docs/apisix/deployment-modes",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.4/docs/en/latest/deployment-modes.md",tags:[],version:"3.4",frontMatter:{title:"Deployment modes",keywords:["API Gateway","Apache APISIX","APISIX deployment modes"],description:"Documentation about the three deployment modes of Apache APISIX."},sidebar:"version-3.4/docs",previous:{title:"Debug mode",permalink:"/docs/apisix/debug-mode"},next:{title:"FAQ",permalink:"/docs/apisix/FAQ"}},d=[{value:"Traditional",id:"traditional",children:[]},{value:"Decoupled",id:"decoupled",children:[]},{value:"Standalone",id:"standalone",children:[{value:"How to configure rules",id:"how-to-configure-rules",children:[]},{value:"How to configure Router",id:"how-to-configure-router",children:[]},{value:"How to configure Router + Service",id:"how-to-configure-router--service",children:[]},{value:"How to configure Router + Upstream",id:"how-to-configure-router--upstream",children:[]},{value:"How to configure Router + Service + Upstream",id:"how-to-configure-router--service--upstream",children:[]},{value:"How to configure Plugins",id:"how-to-configure-plugins",children:[]},{value:"How to enable SSL",id:"how-to-enable-ssl",children:[]},{value:"How to configure global rule",id:"how-to-configure-global-rule",children:[]},{value:"How to configure consumer",id:"how-to-configure-consumer",children:[]},{value:"How to configure plugin metadata",id:"how-to-configure-plugin-metadata",children:[]},{value:"How to configure stream route",id:"how-to-configure-stream-route",children:[]}]}],p={toc:d};function s(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"APISIX has three different deployment modes for different production use cases. The table below summarises the deployment modes:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Deployment mode"),(0,o.kt)("th",{parentName:"tr",align:null},"Roles"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"traditional"),(0,o.kt)("td",{parentName:"tr",align:null},"traditional"),(0,o.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed together. ",(0,o.kt)("inlineCode",{parentName:"td"},"enable_admin")," attribute should be disabled manually.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"decoupled"),(0,o.kt)("td",{parentName:"tr",align:null},"data_plane / control_plane"),(0,o.kt)("td",{parentName:"tr",align:null},"Data plane and control plane are deployed independently.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"standalone"),(0,o.kt)("td",{parentName:"tr",align:null},"data_plane"),(0,o.kt)("td",{parentName:"tr",align:null},"Only ",(0,o.kt)("inlineCode",{parentName:"td"},"data_plane")," is deployed and the configurations are loaded from a local YAML file.")))),(0,o.kt)("p",null,"Each of these deployment modes are explained in detail below."),(0,o.kt)("h2",{id:"traditional"},"Traditional"),(0,o.kt)("p",null,"In the traditional deployment mode, one instance of APISIX will be both the ",(0,o.kt)("inlineCode",{parentName:"p"},"data_plane")," and the ",(0,o.kt)("inlineCode",{parentName:"p"},"control_plane"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/deployment-traditional.png",alt:"traditional deployment mode"})),(0,o.kt)("p",null,"There will be a conf server that listens on the UNIX socket and acts as a proxy between APISIX and etcd. Both the data and the control planes connect to this conf server via HTTP."),(0,o.kt)("p",null,"An example configuration of the traditional deployment mode is shown below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"apisix:\n    node_listen:\n        - port: 9080\ndeployment:\n    role: traditional\n    role_traditional:\n        config_provider: etcd\n    admin:\n        admin_listen:\n            port: 9180\n    etcd:\n       host:\n           - http://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n#END\n")),(0,o.kt)("p",null,"The instance of APISIX deployed as the traditional role will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9080")," to handle user requests, controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"node_listen"),"."),(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9180")," to handle Admin API requests, controlled by ",(0,o.kt)("inlineCode",{parentName:"li"},"admin_listen"),".")),(0,o.kt)("h2",{id:"decoupled"},"Decoupled"),(0,o.kt)("p",null,"In the decoupled deployment mode the ",(0,o.kt)("inlineCode",{parentName:"p"},"data_plane")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"control_plane")," instances of APISIX are deployed separately, i.e., one instance of APISIX is configured to be a ",(0,o.kt)("em",{parentName:"p"},"data plane")," and the other to be a ",(0,o.kt)("em",{parentName:"p"},"control plane"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix/master/docs/assets/images/deployment-cp_and_dp.png",alt:"decoupled"})),(0,o.kt)("p",null,"The instance of APISIX deployed as the data plane will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Fetch the configuration from the ",(0,o.kt)("em",{parentName:"li"},"control plane"),". The default port is ",(0,o.kt)("inlineCode",{parentName:"li"},"9280"),"."),(0,o.kt)("li",{parentName:"ol"},"Performs a health check on all configured control plane addresses before starting the service.",(0,o.kt)("ol",{parentName:"li"},(0,o.kt)("li",{parentName:"ol"},"If the control plane addresses are unavailable, the startup fails and an exception is thrown."),(0,o.kt)("li",{parentName:"ol"},"If at least one control plane address is available, it prints the unhealthy control planes logs, and starts the APISIX service."),(0,o.kt)("li",{parentName:"ol"},"If all control planes are normal, APISIX service is started normally."))),(0,o.kt)("li",{parentName:"ol"},"Once the service is started, it will handle the user requests.")),(0,o.kt)("p",null,"The example below shows the configuration of an APISIX instance as ",(0,o.kt)("em",{parentName:"p"},"data plane")," in the decoupled mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: data_plane\n    role_data_plane:\n       config_provider: control_plane\n       control_plane:\n           host:\n               - https://${Control_Plane_IP}:9280\n           prefix: /apisix\n           timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n#END\n")),(0,o.kt)("p",null,"The instance of APISIX deployed as the control plane will:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9180")," and handle Admin API requests."),(0,o.kt)("li",{parentName:"ol"},"Provide the conf server which will listen on port ",(0,o.kt)("inlineCode",{parentName:"li"},"9280"),". Both the control plane and the data plane will connect to this via HTTPS enforced by mTLS.")),(0,o.kt)("p",null,"The example below shows the configuration of an APISIX instance as ",(0,o.kt)("em",{parentName:"p"},"control plane")," in the decoupled mode:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plane:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n            client_ca_cert: /path/to/ca-cert\n    etcd:\n       host:\n           - https://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n    certs:\n        cert: /path/to/ca-cert\n        cert_key: /path/to/ca-cert\n        trusted_ca_cert: /path/to/ca-cert\n#END\n")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"As OpenResty <= 1.21.4 does not support sending mTLS requests, to accept connections from APISIX running on these OpenResty versions, you need to disable the client certificate verification in the control plane instance as shown below:"),(0,o.kt)("pre",{parentName:"div"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml",metastring:'title="conf/config.yaml"',title:'"conf/config.yaml"'},"deployment:\n    role: control_plane\n    role_control_plane:\n        config_provider: etcd\n        conf_server:\n            listen: 0.0.0.0:9280\n            cert: /path/to/ca-cert\n            cert_key: /path/to/ca-cert\n    etcd:\n       host:\n           - https://${etcd_IP}:${etcd_Port}\n       prefix: /apisix\n       timeout: 30\n    certs:\n        trusted_ca_cert: /path/to/ca-cert\n#END\n")))),(0,o.kt)("h2",{id:"standalone"},"Standalone"),(0,o.kt)("p",null,"Turning on the APISIX node in Stand-alone mode will no longer use the default etcd as the configuration center."),(0,o.kt)("p",null,"This method is more suitable for two types of users:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Kubernetes(k8s)\uff1aDeclarative API that dynamically updates the routing rules with a full yaml configuration."),(0,o.kt)("li",{parentName:"ol"},"Different configuration centers: There are many implementations of the configuration center, such as Consul, etc., using the full yaml file for intermediate conversion.")),(0,o.kt)("p",null,"The routing rules in the ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," file are loaded into memory immediately after the APISIX node service starts. And every time interval (default 1 second), will try to detect whether the file content is updated, if there is an update, reload the rule."),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Note"),": Reloading and updating routing rules are all hot memory updates. There is no replacement of working processes, since it's a hot update."),(0,o.kt)("p",null,"Since the current Admin API is based on the etcd configuration center solution, enable Admin API is not allowed when the Stand-alone mode is enabled."),(0,o.kt)("p",null,"Standalone mode can only be enabled when we set the role of APISIX as data plane. We set ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.role")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"data_plane")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"deployment.role_data_plane.config_provider")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"yaml"),"."),(0,o.kt)("p",null,"Refer to the example below:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"deployment:\n  role: data_plane\n  role_data_plane:\n    config_provider: yaml\n#END\n")),(0,o.kt)("h3",{id:"how-to-configure-rules"},"How to configure rules"),(0,o.kt)("p",null,"All of the rules are stored in one file which named ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml"),",\nAPISIX checks if this file has any change ",(0,o.kt)("strong",{parentName:"p"},"every second"),".\nIf the file is changed & it ends with ",(0,o.kt)("inlineCode",{parentName:"p"},"#END"),",\nAPISIX loads the rules from this file and updates its memory."),(0,o.kt)("p",null,"Here is a mini example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"WARNING"),": APISIX will not load the rules into memory from file ",(0,o.kt)("inlineCode",{parentName:"p"},"conf/apisix.yaml")," if there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"#END")," at the end."),(0,o.kt)("h3",{id:"how-to-configure-router"},"How to configure Router"),(0,o.kt)("p",null,"Single Router\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,o.kt)("p",null,"Multiple Router\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'routes:\n  -\n    uri: /hello\n    upstream:\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n  -\n    uri: /hello2\n    upstream:\n        nodes:\n            "127.0.0.1:1981": 1\n        type: roundrobin\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-router--service"},"How to configure Router + Service"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream:\n            nodes:\n                "127.0.0.1:1980": 1\n            type: roundrobin\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-router--upstream"},"How to configure Router + Upstream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        upstream_id: 1\nupstreams:\n    -\n        id: 1\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-router--service--upstream"},"How to configure Router + Service + Upstream"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'routes:\n    -\n        uri: /hello\n        service_id: 1\nservices:\n    -\n        id: 1\n        upstream_id: 2\nupstreams:\n    -\n        id: 2\n        nodes:\n            "127.0.0.1:1980": 1\n        type: roundrobin\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-plugins"},"How to configure Plugins"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},"# plugins listed here will be hot reloaded and override the boot configuration\nplugins:\n  - name: ip-restriction\n  - name: jwt-auth\n  - name: mqtt-proxy\n    stream: true # set 'stream' to true for stream plugins\n#END\n")),(0,o.kt)("h3",{id:"how-to-enable-ssl"},"How to enable SSL"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yml"},'ssls:\n    -\n        cert: |\n            -----BEGIN CERTIFICATE-----\n            MIIDrzCCApegAwIBAgIJAI3Meu/gJVTLMA0GCSqGSIb3DQEBCwUAMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDAeFw0yMDEwMjgwMzMzMDJaFw0yMTEwMjgwMzMzMDJaMG4xCzAJBgNV\n            BAYTAkNOMREwDwYDVQQIDAhaaGVqaWFuZzERMA8GA1UEBwwISGFuZ3pob3UxDTAL\n            BgNVBAoMBHRlc3QxDTALBgNVBAsMBHRlc3QxGzAZBgNVBAMMEmV0Y2QuY2x1c3Rl\n            ci5sb2NhbDCCASIwDQYJKoZIhvcNAQEBBQADggEPADCCAQoCggEBAJ/qwxCR7g5S\n            s9+VleopkLi5pAszEkHYOBpwF/hDeRdxU0I0e1zZTdTlwwPy2vf8m3kwoq6fmNCt\n            tdUUXh5Wvgi/2OA8HBBzaQFQL1Av9qWwyES5cx6p0ZBwIrcXQIsl1XfNSUpQNTSS\n            D44TGduXUIdeshukPvMvLWLezynf2/WlgVh/haWtDG99r/Gj3uBdjl0m/xGvKvIv\n            NFy6EdgG9fkwcIalutjrUnGl9moGjwKYu4eXW2Zt5el0d1AHXUsqK4voe0p+U2Nz\n            quDmvxteXWdlsz8o5kQT6a4DUtWhpPIfNj9oZfPRs3LhBFQ74N70kVxMOCdec1lU\n            bnFzLIMGlz0CAwEAAaNQME4wHQYDVR0OBBYEFFHeljijrr+SPxlH5fjHRPcC7bv2\n            MB8GA1UdIwQYMBaAFFHeljijrr+SPxlH5fjHRPcC7bv2MAwGA1UdEwQFMAMBAf8w\n            DQYJKoZIhvcNAQELBQADggEBAG6NNTK7sl9nJxeewVuogCdMtkcdnx9onGtCOeiQ\n            qvh5Xwn9akZtoLMVEdceU0ihO4wILlcom3OqHs9WOd6VbgW5a19Thh2toxKidHz5\n            rAaBMyZsQbFb6+vFshZwoCtOLZI/eIZfUUMFqMXlEPrKru1nSddNdai2+zi5rEnM\n            HCot43+3XYuqkvWlOjoi9cP+C4epFYrxpykVbcrtbd7TK+wZNiK3xtDPnVzjdNWL\n            geAEl9xrrk0ss4nO/EreTQgS46gVU+tLC+b23m2dU7dcKZ7RDoiA9bdVc4a2IsaS\n            2MvLL4NZ2nUh8hAEHiLtGMAV3C6xNbEyM07hEpDW6vk6tqk=\n            -----END CERTIFICATE-----\n        key: |\n            -----BEGIN PRIVATE KEY-----\n            MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCf6sMQke4OUrPf\n            lZXqKZC4uaQLMxJB2DgacBf4Q3kXcVNCNHtc2U3U5cMD8tr3/Jt5MKKun5jQrbXV\n            FF4eVr4Iv9jgPBwQc2kBUC9QL/alsMhEuXMeqdGQcCK3F0CLJdV3zUlKUDU0kg+O\n            Exnbl1CHXrIbpD7zLy1i3s8p39v1pYFYf4WlrQxvfa/xo97gXY5dJv8RryryLzRc\n            uhHYBvX5MHCGpbrY61JxpfZqBo8CmLuHl1tmbeXpdHdQB11LKiuL6HtKflNjc6rg\n            5r8bXl1nZbM/KOZEE+muA1LVoaTyHzY/aGXz0bNy4QRUO+De9JFcTDgnXnNZVG5x\n            cyyDBpc9AgMBAAECggEAatcEtehZPJaCeClPPF/Cwbe9YoIfe4BCk186lHI3z7K1\n            5nB7zt+bwVY0AUpagv3wvXoB5lrYVOsJpa9y5iAb3GqYMc/XDCKfD/KLea5hwfcn\n            BctEn0LjsPVKLDrLs2t2gBDWG2EU+udunwQh7XTdp2Nb6V3FdOGbGAg2LgrSwP1g\n            0r4z14F70oWGYyTQ5N8UGuyryVrzQH525OYl38Yt7R6zJ/44FVi/2TvdfHM5ss39\n            SXWi00Q30fzaBEf4AdHVwVCRKctwSbrIOyM53kiScFDmBGRblCWOxXbiFV+d3bjX\n            gf2zxs7QYZrFOzOO7kLtHGua4itEB02497v+1oKDwQKBgQDOBvCVGRe2WpItOLnj\n            SF8iz7Sm+jJGQz0D9FhWyGPvrN7IXGrsXavA1kKRz22dsU8xdKk0yciOB13Wb5y6\n            yLsr/fPBjAhPb4h543VHFjpAQcxpsH51DE0b2oYOWMmz+rXGB5Jy8EkP7Q4njIsc\n            2wLod1dps8OT8zFx1jX3Us6iUQKBgQDGtKkfsvWi3HkwjFTR+/Y0oMz7bSruE5Z8\n            g0VOHPkSr4XiYgLpQxjbNjq8fwsa/jTt1B57+By4xLpZYD0BTFuf5po+igSZhH8s\n            QS5XnUnbM7d6Xr/da7ZkhSmUbEaMeHONSIVpYNgtRo4bB9Mh0l1HWdoevw/w5Ryt\n            L/OQiPhfLQKBgQCh1iG1fPh7bbnVe/HI71iL58xoPbCwMLEFIjMiOFcINirqCG6V\n            LR91Ytj34JCihl1G4/TmWnsH1hGIGDRtJLCiZeHL70u32kzCMkI1jOhFAWqoutMa\n            7obDkmwraONIVW/kFp6bWtSJhhTQTD4adI9cPCKWDXdcCHSWj0Xk+U8HgQKBgBng\n            t1HYhaLzIZlP/U/nh3XtJyTrX7bnuCZ5FhKJNWrYjxAfgY+NXHRYCKg5x2F5j70V\n            be7pLhxmCnrPTMKZhik56AaTBOxVVBaYWoewhUjV4GRAaK5Wc8d9jB+3RizPFwVk\n            V3OU2DJ1SNZ+W2HBOsKrEfwFF/dgby6i2w6MuAP1AoGBAIxvxUygeT/6P0fHN22P\n            zAHFI4v2925wYdb7H//D8DIADyBwv18N6YH8uH7L+USZN7e4p2k8MGGyvTXeC6aX\n            IeVtU6fH57Ddn59VPbF20m8RCSkmBvSdcbyBmqlZSBE+fKwCliKl6u/GH0BNAWKz\n            r8yiEiskqRmy7P7MY9hDmEbG\n            -----END PRIVATE KEY-----\n        snis:\n            - "yourdomain.com"\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-global-rule"},"How to configure global rule"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'global_rules:\n    -\n        id: 1\n        plugins:\n            response-rewrite:\n                body: "hello\\n"\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-consumer"},"How to configure consumer"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"consumers:\n  - username: jwt\n    plugins:\n        jwt-auth:\n            key: user-key\n            secret: my-secret-key\n#END\n")),(0,o.kt)("h3",{id:"how-to-configure-plugin-metadata"},"How to configure plugin metadata"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'upstreams:\n  - id: 1\n    nodes:\n      "127.0.0.1:1980": 1\n    type: roundrobin\nroutes:\n  -\n    uri: /hello\n    upstream_id: 1\n    plugins:\n        http-logger:\n            batch_max_size: 1\n            uri: http://127.0.0.1:1980/log\nplugin_metadata:\n  - id: http-logger # note the id is the plugin name\n    log_format:\n        host: "$host",\n        remote_addr: "$remote_addr"\n#END\n')),(0,o.kt)("h3",{id:"how-to-configure-stream-route"},"How to configure stream route"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'stream_routes:\n  - server_addr: 127.0.0.1\n    server_port: 1985\n    id: 1\n    upstream_id: 1\n    plugins:\n      mqtt-proxy:\n        protocol_name: "MQTT"\n        protocol_level: 4\nupstreams:\n  - nodes:\n      "127.0.0.1:1995": 1\n    type: roundrobin\n    id: 1\n#END\n')))}s.isMDXComponent=!0}}]);