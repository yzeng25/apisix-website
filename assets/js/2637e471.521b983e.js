"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[35095],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),h=o,m=d["".concat(l,".").concat(h)]||d[h]||u[h]||a;return n?r.createElement(m,s(s({ref:t},c),{},{components:n})):r.createElement(m,s({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},47226:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>i,toc:()=>l});var r=n(87462),o=(n(67294),n(3905));const a={title:"Introducing APISIX's testing framework"},s=void 0,i={unversionedId:"internal/testing-framework",id:"version-2.14/internal/testing-framework",isDocsHomePage:!1,title:"Introducing APISIX's testing framework",description:"APISIX uses a testing framework based on test-nginx: https://github.com/openresty/test-nginx.\nFor details, you can check the documentation of this project.",source:"@site/docs-apisix_versioned_docs/version-2.14/internal/testing-framework.md",sourceDirName:"internal",slug:"/internal/testing-framework",permalink:"/docs/apisix/2.14/internal/testing-framework",editUrl:"/edit#https://github.com/apache/apisix/edit/release/2.14/docs/en/latest/internal/testing-framework.md",tags:[],version:"2.14",frontMatter:{title:"Introducing APISIX's testing framework"},sidebar:"version-2.14/docs",previous:{title:"The Implementation of Plugin Runner",permalink:"/docs/apisix/2.14/internal/plugin-runner"},next:{title:"Configuration file switching based on environment variables",permalink:"/docs/apisix/2.14/profile"}},l=[{value:"Test file",id:"test-file",children:[]},{value:"Preparing the configuration",id:"preparing-the-configuration",children:[]},{value:"Preparing the upstream",id:"preparing-the-upstream",children:[]},{value:"Send request",id:"send-request",children:[]},{value:"Send TCP request",id:"send-tcp-request",children:[]},{value:"Assertions",id:"assertions",children:[]},{value:"Upstream",id:"upstream",children:[]},{value:"Run the test",id:"run-the-test",children:[]},{value:"Tips",id:"tips",children:[{value:"Debugging test cases",id:"debugging-test-cases",children:[]},{value:"Running only some test cases",id:"running-only-some-test-cases",children:[]},{value:"Executing Shell Commands",id:"executing-shell-commands",children:[]}]}],p={toc:l};function c(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"APISIX uses a testing framework based on test-nginx: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/openresty/test-nginx"},"https://github.com/openresty/test-nginx"),".\nFor details, you can check the ",(0,o.kt)("a",{parentName:"p",href:"https://metacpan.org/pod/Test::Nginx"},"documentation")," of this project."),(0,o.kt)("p",null,"If you want to test the CLI behavior of APISIX (",(0,o.kt)("inlineCode",{parentName:"p"},"./bin/apisix"),"),\nyou need to write a shell script in the t/cli directory to test it. You can refer to the existing test scripts for more details."),(0,o.kt)("p",null,"If you want to test the others, you need to write test code based on the framework."),(0,o.kt)("p",null,"Here, we briefly describe how to do simple testing based on this framework."),(0,o.kt)("h2",{id:"test-file"},"Test file"),(0,o.kt)("p",null,"you need to write test cases in the t/ directory, in a corresponding ",(0,o.kt)("inlineCode",{parentName:"p"},".t")," file. Note that a single test file should not exceed ",(0,o.kt)("inlineCode",{parentName:"p"},"800")," lines, and if it is too long, it needs to be divided by a suffix. For example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"t/\n\u251c\u2500\u2500 admin\n\u2502 \u251c\u2500\u2500 consumers.t\n\u2502 \u251c\u2500\u2500 consumers2.t\n")),(0,o.kt)("p",null,"Both ",(0,o.kt)("inlineCode",{parentName:"p"},"consumers.t")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"consumers2.t")," contain tests for consumers in the Admin API."),(0,o.kt)("p",null,"Some of the test files start with this paragraph:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'add_block_preprocessor(sub {\n    my ($block) = @_;\n\n    if (! $block->request) {\n        $block->set_value("request", "GET /t");\n    }\n\n    if (! $block->no_error_log && ! $block->error_log) {\n        $block->set_value("no_error_log", "[error]\\n[alert]");\n    }\n});\n')),(0,o.kt)("p",null,"It means that all tests in this test file that do not define ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," are set to ",(0,o.kt)("inlineCode",{parentName:"p"},"GET /t"),". The same is true for error_log."),(0,o.kt)("h2",{id:"preparing-the-configuration"},"Preparing the configuration"),(0,o.kt)("p",null,"When testing a behavior, we need to prepare the configuration."),(0,o.kt)("p",null,"If the configuration is from etcd:\nWe can set up specific configurations through the Admin API."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'=== TEST 7: refer to empty nodes upstream\n--- config\n    location /t {\n        content_by_lua_block {\n            local core = require("apisix.core")\n            local t = require("lib.test_admin").test\n            local code, message = t(\'/apisix/admin/routes/1\',\n                ngx.HTTP_PUT,\n                [[{\n                    "methods": ["GET"],\n                    "upstream_id": "1",\n                    "uri": "/index.html"\n                }]]\n                )\n\n            if code >= 300 then\n                ngx.status = code\n                ngx.print(message)\n                return\n            end\n\n            ngx.say(message)\n        }\n    }\n--- request\nGET /t\n--- response_body\npassed\n')),(0,o.kt)("p",null,"Then trigger it in a later test:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=== TEST 8: hit empty nodes upstream\n--- request\nGET /index.html\n--- error_code: 503\n--- error_log\nno valid upstream node\n")),(0,o.kt)("h2",{id:"preparing-the-upstream"},"Preparing the upstream"),(0,o.kt)("p",null,"To test the code, we need to provide a mock upstream."),(0,o.kt)("p",null,"For HTTP request, the upstream code is put in ",(0,o.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua"),". HTTP request with\na given ",(0,o.kt)("inlineCode",{parentName:"p"},"path")," will trigger the method in same name. For example, a call to ",(0,o.kt)("inlineCode",{parentName:"p"},"/server_port"),"\nwill call the ",(0,o.kt)("inlineCode",{parentName:"p"},"_M.server_port"),"."),(0,o.kt)("p",null,"For TCP request, a dummy upstream is used:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'local sock = ngx.req.socket()\nlocal data = sock:receive("1")\nngx.say("hello world")\n')),(0,o.kt)("p",null,"If you want to custom the TCP upstream logic, you can use:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--- stream_upstream_code\nlocal sock = ngx.req.socket()\nlocal data = sock:receive("1")\nngx.sleep(0.2)\nngx.say("hello world")\n')),(0,o.kt)("h2",{id:"send-request"},"Send request"),(0,o.kt)("p",null,"We can initiate a request with ",(0,o.kt)("inlineCode",{parentName:"p"},"request")," and set the request headers with ",(0,o.kt)("inlineCode",{parentName:"p"},"more_headers"),"."),(0,o.kt)("p",null,"For example."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- request\nPUT /hello?xx=y&xx=z&&y=&&z\nbody part of the request\n--- more_headers\nX-Req: foo\nX-Req: bar\nX-Resp: cat\n")),(0,o.kt)("p",null,"Lua code can be used to send multiple requests."),(0,o.kt)("p",null,"One request after another:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--- config\n    location /t {\n        content_by_lua_block {\n            local http = require "resty.http"\n            local uri = "http://127.0.0.1:" .. ngx.var.server_port\n                        .. "/server_port"\n\n            local ports_count = {}\n            for i = 1, 12 do\n                local httpc = http.new()\n                local res, err = httpc:request_uri(uri, {method = "GET"})\n                if not res then\n                    ngx.say(err)\n                    return\n                end\n                ports_count[res.body] = (ports_count[res.body] or 0) + 1\n            end\n        }\n    }\n')),(0,o.kt)("p",null,"Sending multiple requests concurrently:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--- config\n    location /t {\n        content_by_lua_block {\n            local http = require "resty.http"\n            local uri = "http://127.0.0.1:" .. ngx.var.server_port\n                        .. "/server_port?var=2&var2="\n\n\n            local t = {}\n            local ports_count = {}\n            for i = 1, 180 do\n                local th = assert(ngx.thread.spawn(function(i)\n                    local httpc = http.new()\n                    local res, err = httpc:request_uri(uri..i, {method = "GET"})\n                    if not res then\n                        ngx.log(ngx.ERR, err)\n                        return\n                    end\n                    ports_count[res.body] = (ports_count[res.body] or 0) + 1\n                end, i))\n                table.insert(t, th)\n            end\n            for i, th in ipairs(t) do\n                ngx.thread.wait(th)\n            end\n        }\n    }\n')),(0,o.kt)("h2",{id:"send-tcp-request"},"Send TCP request"),(0,o.kt)("p",null,"We can use ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_request")," to send a TCP request, for example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- stream_request\nhello\n")),(0,o.kt)("p",null,"To send a TLS over TCP request, we can combine ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_tls_request")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_sni"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- stream_tls_request\nmmm\n--- stream_sni: xx.com\n")),(0,o.kt)("h2",{id:"assertions"},"Assertions"),(0,o.kt)("p",null,"The following assertions are commonly used."),(0,o.kt)("p",null,"Check status (if not set, the framework will check if the request has 200 status code)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- error_code: 405\n")),(0,o.kt)("p",null,"Check response headers."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- response_headers\nX-Resp: foo\nX-Req: foo, bar\n")),(0,o.kt)("p",null,"Check response body."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--- response_body\n[{"count":12, "port": "1982"}]\n')),(0,o.kt)("p",null,"Check the TCP response."),(0,o.kt)("p",null,"When the request is sent via ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- stream_response\nreceive stream response error: connection reset by peer\n")),(0,o.kt)("p",null,"When the request is sent via ",(0,o.kt)("inlineCode",{parentName:"p"},"stream_tls_request"),":"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"--- response_body\nreceive stream response error: connection reset by peer\n")),(0,o.kt)("p",null,"Checking the error log (via grep error log with regular expression)."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'--- grep_error_log eval\nqr/hash_on: header|chash_key: "custom-one"/\n--- grep_error_log_out\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\nhash_on: header\nchash_key: "custom-one"\n')),(0,o.kt)("p",null,"The default log level is ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", but you can get the debug level log with ",(0,o.kt)("inlineCode",{parentName:"p"},"-- log_level: debug"),"."),(0,o.kt)("h2",{id:"upstream"},"Upstream"),(0,o.kt)("p",null,"The test framework listens to multiple ports when it is started."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"1980/1981/1982/5044: HTTP upstream port"),(0,o.kt)("li",{parentName:"ul"},"1983: HTTPS upstream port"),(0,o.kt)("li",{parentName:"ul"},"1984: APISIX HTTP port. Can be used to verify HTTP related gateway logic, such as concurrent access to an API."),(0,o.kt)("li",{parentName:"ul"},"1985: APISIX TCP port. Can be used to verify TCP related gateway logic, such as concurrent access to an API."),(0,o.kt)("li",{parentName:"ul"},"1994: APISIX HTTPS port. Can be used to verify HTTPS related gateway logic, such as testing certificate matching logic."),(0,o.kt)("li",{parentName:"ul"},"1995: TCP upstream port"),(0,o.kt)("li",{parentName:"ul"},"2005: APISIX TLS over TCP port. Can be used to verify TLS over TCP related gateway logic, such as concurrent access to an API.")),(0,o.kt)("p",null,"The methods in ",(0,o.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua")," are executed when accessing the upstream port. ",(0,o.kt)("inlineCode",{parentName:"p"},"_M.go")," is the entry point for this file.\nWhen the request accesses the upstream ",(0,o.kt)("inlineCode",{parentName:"p"},"/xxx"),", the ",(0,o.kt)("inlineCode",{parentName:"p"},"_M.xxx")," method is executed. For example, a request for ",(0,o.kt)("inlineCode",{parentName:"p"},"/hello")," will execute ",(0,o.kt)("inlineCode",{parentName:"p"},"_M.hello"),".\nThis allows us to write methods inside ",(0,o.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua")," to emulate specific upstream logic, such as sending special responses."),(0,o.kt)("p",null,"Note that before adding new methods to ",(0,o.kt)("inlineCode",{parentName:"p"},"t/lib/server.lua"),", make sure that you can reuse existing methods."),(0,o.kt)("h2",{id:"run-the-test"},"Run the test"),(0,o.kt)("p",null,"Assume your current work directory is the root of the apisix source code."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Install our fork of ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/openresty/test-nginx"},"test-nginx")," to ",(0,o.kt)("inlineCode",{parentName:"li"},"../test-nginx"),"."),(0,o.kt)("li",{parentName:"ol"},"Run the test: ",(0,o.kt)("inlineCode",{parentName:"li"},"prove -I. -I../test-nginx/inc -I../test-nginx/lib -r t/path/to/file.t"),".")),(0,o.kt)("h2",{id:"tips"},"Tips"),(0,o.kt)("h3",{id:"debugging-test-cases"},"Debugging test cases"),(0,o.kt)("p",null,"The Nginx configuration and logs generated by the test cases are located in the t/servroot directory. The Nginx configuration template for testing is located in t/APISIX.pm."),(0,o.kt)("h3",{id:"running-only-some-test-cases"},"Running only some test cases"),(0,o.kt)("p",null,"Three notes can be used to control which parts of the tests are executed."),(0,o.kt)("p",null,"FIRST & LAST:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=== TEST 1: vars rule with ! (set)\n--- FIRST\n--- config\n...\n--- response_body\npassed\n\n\n\n=== TEST 2: vars rule with ! (hit)\n--- request\nGET /hello?name=jack&age=17\n--- LAST\n--- error_code: 403\n--- response_body\nFault Injection!\n")),(0,o.kt)("p",null,"ONLY:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'=== TEST 1: list empty resources\n--- ONLY\n--- config\n...\n--- response_body\n{"action":"get","count":0,"node":{"dir":true,"key":"/apisix/upstreams","nodes":[]}}\n')),(0,o.kt)("h3",{id:"executing-shell-commands"},"Executing Shell Commands"),(0,o.kt)("p",null,"It is possible to execute shell commands while writing tests in test-nginx for APISIX. We expose this feature via ",(0,o.kt)("inlineCode",{parentName:"p"},"exec")," code block. The ",(0,o.kt)("inlineCode",{parentName:"p"},"stdout")," of the executed process can be captured via ",(0,o.kt)("inlineCode",{parentName:"p"},"response_body")," code block and ",(0,o.kt)("inlineCode",{parentName:"p"},"stderr")," (if any) can be captured by filtering error.log through ",(0,o.kt)("inlineCode",{parentName:"p"},"grep_error_log"),". Here is an example:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"=== TEST 1: check exec stdout\n--- exec\necho hello world\n--- response_body\nhello world\n\n\n=== TEST 2: when exec returns an error\n--- exec\nechxo hello world\n--- grep_error_log eval\nqr/failed to execute the script [ -~]*/\n--- grep_error_log_out\nfailed to execute the script with status: 127, reason: exit, stderr: /bin/sh: 1: echxo: not found\n")))}c.isMDXComponent=!0}}]);