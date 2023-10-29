"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[30659],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>c});var i=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)t=a[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var p=i.createContext({}),s=function(e){var n=i.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return i.createElement(p.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},g=i.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),g=s(t),c=r,h=g["".concat(p,".").concat(c)]||g[c]||d[c]||a;return t?i.createElement(h,o(o({ref:n},u),{},{components:t})):i.createElement(h,o({ref:n},u))}));function c(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,o=new Array(a);o[0]=g;var l={};for(var p in n)hasOwnProperty.call(n,p)&&(l[p]=n[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<a;s++)o[s]=t[s];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}g.displayName="MDXCreateElement"},93821:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var i=t(87462),r=(t(67294),t(3905));const a={title:"Getting started"},o=void 0,l={unversionedId:"getting-started",id:"version-0.5.0/getting-started",isDocsHomePage:!1,title:"Getting started",description:"Go (>= 1.15)",source:"@site/docs-apisix-go-plugin-runner_versioned_docs/version-0.5.0/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/zh/docs/go-plugin-runner/getting-started",editUrl:"/zh/edit#https://github.com/apache/apisix-go-plugin-runner/edit/release/0.5.0/docs/zh/latest/getting-started.md",tags:[],version:"0.5.0",frontMatter:{title:"Getting started"},sidebar:"version-0.5.0/docs",next:{title:"Developer Guide",permalink:"/zh/docs/go-plugin-runner/developer-guide"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Compatibility with Golang",id:"compatibility-with-golang",children:[]},{value:"Compatibility with Apache APISIX",id:"compatibility-with-apache-apisix",children:[]}]},{value:"Installation",id:"installation",children:[]},{value:"Development",id:"development",children:[{value:"Developing with the Go Runner SDK",id:"developing-with-the-go-runner-sdk",children:[]},{value:"Setting up APISIX (debugging)",id:"setting-up-apisix-debugging",children:[]},{value:"Setting up APISIX (running)",id:"setting-up-apisix-running",children:[]}]}],s={toc:p};function u(e){let{components:n,...t}=e;return(0,r.kt)("wrapper",(0,i.Z)({},s,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,r.kt)("h3",{id:"compatibility-with-golang"},"Compatibility with Golang"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go (>= 1.15)")),(0,r.kt)("h3",{id:"compatibility-with-apache-apisix"},"Compatibility with Apache APISIX"),(0,r.kt)("p",null,"The following table describes the compatibility between apisix-go-plugin-runner and\n",(0,r.kt)("a",{parentName:"p",href:"https://apisix.apache.org"},"Apache APISIX"),"."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"right"},"apisix-go-plugin-runner"),(0,r.kt)("th",{parentName:"tr",align:"right"},"Apache APISIX"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"master")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"master")," is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0.5.0")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},">= 3.0.0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"3.0.0")," is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0.4.0")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},">= 2.14.1"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2.14.1")," is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0.3.0")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},">= 2.13.0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2.13.0")," is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0.2.0")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},">= 2.9.0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2.9.0")," is recommended.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},"0.1.0")),(0,r.kt)("td",{parentName:"tr",align:"right"},(0,r.kt)("inlineCode",{parentName:"td"},">= 2.7.0"),", ",(0,r.kt)("inlineCode",{parentName:"td"},"2.7.0")," is recommended.")))),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("p",null,"For now, we need to use Go Runner as a library. ",(0,r.kt)("inlineCode",{parentName:"p"},"cmd/go-runner")," in this project is an official example showing how to use the Go Runner SDK.\nWe will also support loading pre-compiled plugins through the Go Plugin mechanism later."),(0,r.kt)("h2",{id:"development"},"Development"),(0,r.kt)("h3",{id:"developing-with-the-go-runner-sdk"},"Developing with the Go Runner SDK"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ tree cmd/go-runner\ncmd/go-runner\n\u251c\u2500\u2500 main.go\n\u251c\u2500\u2500 main_test.go\n\u251c\u2500\u2500 plugins\n\u2502 \u251c\u2500\u2500 say.go\n\u2502 \u2514\u2500\u2500 say_test.go\n\u2514\u2500\u2500 version.go\n")),(0,r.kt)("p",null,"Above is the directory structure of the official example. ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go")," is the entry point, where the most critical part is:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},"cfg := runner.RunnerConfig{}\n...\nrunner.Run(cfg)\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RunnerConfig")," can be used to control the log level and log output location."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"runner.Run")," will make the application listen to the target socket path, receive requests and execute the registered plugins. The application will remain in this state until it exits."),(0,r.kt)("p",null,"Then let's look at the plugin implementation."),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"plugins/say.go"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'func init() {\n    err := plugin.RegisterPlugin(&Say{})\n    if err ! = nil {\n        log.Fatalf("failed to register plugin say: %s", err)\n    }\n}\n')),(0,r.kt)("p",null,"Since ",(0,r.kt)("inlineCode",{parentName:"p"},"main.go")," imports the plugins package,"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'import (\n  ...\n    _ "github.com/apache/apisix-go-plugin-runner/cmd/go-runner/plugins"\n  ...\n)\n')),(0,r.kt)("p",null,"in this way we register ",(0,r.kt)("inlineCode",{parentName:"p"},"Say")," with ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin.RegisterPlugin")," before executing ",(0,r.kt)("inlineCode",{parentName:"p"},"runner.Run"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Say")," needs to implement the following methods:"),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Name")," method returns the plugin name."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (p *Say) Name() string {\n    return "say"\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ParseConf")," will be called when the plugin configuration changes, parsing the configuration and returning the plugin specific configuration."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"func (p *Say) ParseConf(in []byte) (interface{}, error) {\n    conf := SayConf{}\n    err := json.Unmarshal(in, &conf)\n    return conf, err\n}\n")),(0,r.kt)("p",null,"The configuration of the plugin looks like this."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'type SayConf struct {\n    Body string `json: "body"`\n}\n')),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"RequestFilter")," will be executed on every request with the say plugin configured."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'func (p *Say) RequestFilter(conf interface{}, w http.ResponseWriter, r pkgHTTP.Request) {\n    body := conf.(SayConf).\n    if len(body) == 0 {\n        return\n    }\n\n    w.Header().Add("X-Resp-A6-Runner", "Go")\n    _, err := w.Write([]byte(body))\n    if err ! = nil {\n        log.Errorf("failed to write: %s", err)\n    }\n}\n')),(0,r.kt)("p",null,"We can see that the RequestFilter takes the value of the body set in the configuration as the response body. If we call ",(0,r.kt)("inlineCode",{parentName:"p"},"Write")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"WriteHeader")," of the ",(0,r.kt)("inlineCode",{parentName:"p"},"http.ResponseWriter"),"\n(respond directly in the plugin), it will response directly in the APISIX without touching the upstream. We can also set response headers in the plugin and touch the upstream\nat the same time by set RespHeader in ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Request"),"."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"ResponseFilter")," supports rewriting the response during the response phase, we can see an example of its use in the ResponseRewrite plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-go"},'type RegexFilter struct {\n    Regex   string `json:"regex"`\n    Scope   string `json:"scope"`\n    Replace string `json:"replace"`\n    \n    regexComplied *regexp.Regexp\n}\n\ntype ResponseRewriteConf struct {\n    Status  int               `json:"status"`\n    Headers map[string]string `json:"headers"`\n    Body    string            `json:"body"`\n    Filters []RegexFilter     `json:"filters"`\n}\n\nfunc (p *ResponseRewrite) ResponseFilter(conf interface{}, w pkgHTTP.Response) {\n    cfg := conf.(ResponseRewriteConf)\n    if cfg.Status > 0 {\n        w.WriteHeader(200)\n    }\n\n    w.Header().Set("X-Resp-A6-Runner", "Go")\n    if len(cfg.Headers) > 0 {\n        for k, v := range cfg.Headers {\n            w.Header().Set(k, v)\n        }\n    }\n\n    body := []byte(cfg.Body)\n    if len(cfg.Filters) > 0 {\n        originBody, err := w.ReadBody()\n\n        ......\n\n        for i := 0; i < len(cfg.Filters); i++ {\n            f := cfg.Filters[i]\n            found := f.regexComplied.Find(originBody)\n            if found != nil {\n                matched = true\n                if f.Scope == "once" {\n                    originBody = bytes.Replace(originBody, found, []byte(f.Replace), 1)\n                } else if f.Scope == "global" {\n                    originBody = bytes.ReplaceAll(originBody, found, []byte(f.Replace))\n                }\n            }\n        }\n\n        .......\n\n    }\n    if len(cfg.Body) == 0 {\n        return\n    }\n    _, err := w.Write([]byte(cfg.Body))\n    if err != nil {\n        log.Errorf("failed to write: %s", err)\n    }\n}\n')),(0,r.kt)("p",null,"We can see that ",(0,r.kt)("inlineCode",{parentName:"p"},"ResponseFilter")," will rewrite the status, header, and response body of the response phase according to the configuration."),(0,r.kt)("p",null,"In addition, we can also get the status and headers in the original response through ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Response"),"."),(0,r.kt)("p",null,"For the ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Request")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"pkgHTTP.Response"),", you can refer to the ",(0,r.kt)("a",{parentName:"p",href:"https://pkg.go.dev/github.com/apache/apisix-go-plugin-runner"},"API documentation")," provided by the Go Runner SDK."),(0,r.kt)("p",null,"After building the application (",(0,r.kt)("inlineCode",{parentName:"p"},"make build")," in the example), we need to set some environment variables at runtime:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock"))),(0,r.kt)("p",null,"Like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"APISIX_LISTEN_ADDRESS=unix:/tmp/runner.sock ./go-runner run\n")),(0,r.kt)("p",null,"The application will listen to ",(0,r.kt)("inlineCode",{parentName:"p"},"/tmp/runner.sock")," when it runs."),(0,r.kt)("h3",{id:"setting-up-apisix-debugging"},"Setting up APISIX (debugging)"),(0,r.kt)("p",null,"First you need to have APISIX on your machine, which needs to be on the same instance as Go Runner."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://raw.githubusercontent.com/apache/apisix-go-plugin-runner/release/0.5.0/docs/assets/images/runner-overview.png",alt:"runner-overview"})),(0,r.kt)("p",null,"The diagram above shows the workflow of APISIX on the left, while the plugin runner on the right is responsible for running external plugins written in different languages. apisix-go-plugin-runner is one such runner that supports Go."),(0,r.kt)("p",null,"When you configure a plugin runner in APISIX, APISIX will treat the plugin runner as a child process of its own. This sub-process belongs to the same user as the APISIX process. When we restart or reload APISIX, the plugin runner will also be restarted."),(0,r.kt)("p",null,"If you configure the ext-plugin-* plugin for a given route, a request to hit that route will trigger APISIX to make an RPC call to the plugin runner via a unix socket. The call is broken down into two phases."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"ext-plugin-pre-req: executed during handling the request, before most of the APISIX built-in plugins (Lua language plugins)"),(0,r.kt)("li",{parentName:"ul"},"ext-plugin-post-req: executed during handling the request, after most of the APISIX built-in plugins (Lua language plugins)"),(0,r.kt)("li",{parentName:"ul"},"ext-plugin-post-resp: executed during handling the response, after most of the APISIX built-in plugins (Lua language plugins)")),(0,r.kt)("p",null,"Configure the timing of plugin runner execution as needed."),(0,r.kt)("p",null,"The plugin runner handles the RPC calls, creates a mock request from it, then runs the plugins written in other languages and returns the results to APISIX."),(0,r.kt)("p",null,"The order of execution of these plugins is defined in the ext-plugin-* plugin configuration. Like other plugins, they can be enabled and disabled on the fly."),(0,r.kt)("p",null,"Let's go back to the examples. To show how to develop Go plugins, we first set APISIX into debug mode. Add the following configuration to config.yaml."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"ext-plugin:\n  path_for_test: /tmp/runner.sock\n")),(0,r.kt)("p",null,"This configuration means that after hitting a routing rule, APISIX will make an RPC request to /tmp/runner.sock."),(0,r.kt)("p",null,"Next, prepare the routing rule."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'curl http://127.0.0.1:9080/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n  "uri": "/get",\n  "plugins": {\n    "ext-plugin-pre-req": {\n      "conf": [\n        { "name": "say", "value":"{\\"body\\":\\"hello\\"}"}\n      ]\n    }\n  },\n  "upstream": {\n        "type": "roundrobin",\n        "nodes": {\n            "127.0.0.1:1980": 1\n        }\n    }\n}\n\'\n')),(0,r.kt)("p",null,"Note that the plugin name is configured in ",(0,r.kt)("inlineCode",{parentName:"p"},"name")," and the plugin configuration (after JSON serialization) is placed in ",(0,r.kt)("inlineCode",{parentName:"p"},"value"),"."),(0,r.kt)("p",null,"If you see ",(0,r.kt)("inlineCode",{parentName:"p"},"refresh cache and try again")," warning on APISIX side and ",(0,r.kt)("inlineCode",{parentName:"p"},"key not found")," warning on Runner side during development, this is due to configuration cache inconsistency. Because the Runner is not managed by APISIX in the development state, the internal state may be inconsistent. Don't worry, APISIX will retry."),(0,r.kt)("p",null,"Then we request: curl 127.0.0.1:9080/get"),(0,r.kt)("p",null,"We can see that the interface returns hello and does not access anything upstream."),(0,r.kt)("h3",{id:"setting-up-apisix-running"},"Setting up APISIX (running)"),(0,r.kt)("h4",{id:"setting-up-directly"},"Setting up directly"),(0,r.kt)("p",null,"Here's an example of go-runner, you just need to configure the command line to run it inside ext-plugin:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'ext-plugin:\n  # path_for_test: /tmp/runner.sock\n  cmd: ["/path/to/apisix-go-plugin-runner/go-runner", "run"]\n')),(0,r.kt)("p",null,"APISIX will treat the plugin runner as a child process of its own, managing its entire lifecycle."),(0,r.kt)("p",null,"APISIX will automatically assign a unix socket address for the runner to listen to when it starts. environment variables do not need to be set manually."),(0,r.kt)("h4",{id:"setting-up-in-container"},"Setting up in container"),(0,r.kt)("p",null,"First you need to prepare the go-runner binary. Use this command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"make build\n")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"When you use a Linux distribution such as Alpine Linux that is not based on standard glibc, you must turn off Golang's CGO support via the ",(0,r.kt)("inlineCode",{parentName:"p"},"CGO_ENABLED=0")," environment variable to avoid libc ABI incompatibilities. "),(0,r.kt)("p",{parentName:"div"},"If you want to use CGO, then you must build the binaries using the Go compiler and the C compiler in the same Linux distribution."))),(0,r.kt)("p",null,"Then you need to rebuild the container image to include the go-runner binary. You can use the following Dockerfile:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FROM apache/apisix:2.15.0-debian\n\nCOPY ./go-runner /usr/local/apisix-go-plugin-runner/go-runner\n")),(0,r.kt)("p",null,"Finally, you can push and run your custom image, just configure the binary path and commands in the configuration file via ",(0,r.kt)("inlineCode",{parentName:"p"},"ext-plugin.cmd")," to start APISIX with go plugin runner."))}u.isMDXComponent=!0}}]);