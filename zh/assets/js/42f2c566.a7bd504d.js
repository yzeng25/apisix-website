"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[52851],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,g=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(g,i(i({ref:t},u),{},{components:n})):r.createElement(g,i({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85505:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const l={title:"\u6279\u5904\u7406\u5668"},i=void 0,o={unversionedId:"batch-processor",id:"version-3.2/batch-processor",isDocsHomePage:!1,title:"\u6279\u5904\u7406\u5668",description:"\u6279\u5904\u7406\u5668\u53ef\u7528\u4e8e\u805a\u5408\u6761\u76ee\uff08\u65e5\u5fd7/\u4efb\u4f55\u6570\u636e\uff09\u5e76\u8fdb\u884c\u6279\u5904\u7406\u3002\n\u5f53 batch_max_size \u8bbe\u7f6e\u4e3a 1 \u65f6\uff0c\u5904\u7406\u5668\u5c06\u7acb\u5373\u6267\u884c\u6bcf\u4e2a\u6761\u76ee\u3002\u5c06\u6279\u5904\u7406\u7684\u6700\u5927\u503c\u8bbe\u7f6e\u4e3a\u5927\u4e8e 1 \u5c06\u5f00\u59cb\u805a\u5408\u6761\u76ee\uff0c\u76f4\u5230\u8fbe\u5230\u6700\u5927\u503c\u6216\u8d85\u65f6\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs-docs-apisix/version-3.2/batch-processor.md",sourceDirName:".",slug:"/batch-processor",permalink:"/zh/docs/apisix/3.2/batch-processor",editUrl:"/zh/edit#https://github.com/apache/apisix/edit/release/3.2/docs/zh/latest/batch-processor.md",tags:[],version:"3.2",frontMatter:{title:"\u6279\u5904\u7406\u5668"},sidebar:"version-3.2/docs",previous:{title:"\u8bc1\u4e66",permalink:"/zh/docs/apisix/3.2/certificate"},next:{title:"\u538b\u529b\u6d4b\u8bd5",permalink:"/zh/docs/apisix/3.2/benchmark"}},c=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",children:[]}],p={toc:c};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6279\u5904\u7406\u5668\u53ef\u7528\u4e8e\u805a\u5408\u6761\u76ee\uff08\u65e5\u5fd7/\u4efb\u4f55\u6570\u636e\uff09\u5e76\u8fdb\u884c\u6279\u5904\u7406\u3002\n\u5f53 ",(0,a.kt)("inlineCode",{parentName:"p"},"batch_max_size")," \u8bbe\u7f6e\u4e3a 1 \u65f6\uff0c\u5904\u7406\u5668\u5c06\u7acb\u5373\u6267\u884c\u6bcf\u4e2a\u6761\u76ee\u3002\u5c06\u6279\u5904\u7406\u7684\u6700\u5927\u503c\u8bbe\u7f6e\u4e3a\u5927\u4e8e 1 \u5c06\u5f00\u59cb\u805a\u5408\u6761\u76ee\uff0c\u76f4\u5230\u8fbe\u5230\u6700\u5927\u503c\u6216\u8d85\u65f6\u3002"),(0,a.kt)("h2",{id:"\u914d\u7f6e"},"\u914d\u7f6e"),(0,a.kt)("p",null,"\u521b\u5efa\u6279\u5904\u7406\u5668\u7684\u552f\u4e00\u5fc5\u9700\u53c2\u6570\u662f\u51fd\u6570\u3002\u5f53\u6279\u5904\u7406\u8fbe\u5230\u6700\u5927\u503c\u6216\u7f13\u51b2\u533a\u6301\u7eed\u65f6\u95f4\u8d85\u8fc7\u65f6\uff0c\u51fd\u6570\u5c06\u88ab\u6267\u884c\u3002"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"\u540d\u79f0"),(0,a.kt)("th",{parentName:"tr",align:null},"\u7c7b\u578b"),(0,a.kt)("th",{parentName:"tr",align:null},"\u5fc5\u9009\u9879"),(0,a.kt)("th",{parentName:"tr",align:null},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u6709\u6548\u503c"),(0,a.kt)("th",{parentName:"tr",align:null},"\u63cf\u8ff0"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"name"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"xxx logger"),(0,a.kt)("td",{parentName:"tr",align:null},'["http logger", "Some strings",...]'),(0,a.kt)("td",{parentName:"tr",align:null},"\u7528\u4e8e\u6807\u8bc6\u6279\u5904\u7406\u5668\u7684\u552f\u4e00\u6807\u8bc6\u7b26\uff0c\u9ed8\u8ba4\u4e3a\u8c03\u7528\u6279\u5904\u7406\u5668\u7684\u65e5\u5fd7\u63d2\u4ef6\u540d\u5b57\uff0c\u5982\u914d\u7f6e\u63d2\u4ef6\u4e3a ",(0,a.kt)("inlineCode",{parentName:"td"},"http logger"),"\uff0cname \u9ed8\u8ba4\u4e3a http logger\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"batch_max_size"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"1000"),(0,a.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u8bbe\u7f6e\u6bcf\u6279\u53d1\u9001\u65e5\u5fd7\u7684\u6700\u5927\u6761\u6570\uff0c\u5f53\u65e5\u5fd7\u6761\u6570\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u503c\u65f6\uff0c\u4f1a\u81ea\u52a8\u63a8\u9001\u5168\u90e8\u65e5\u5fd7\u5230  HTTP/HTTPS \u670d\u52a1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"inactive_timeout"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5237\u65b0\u7f13\u51b2\u533a\u7684\u6700\u5927\u65f6\u95f4\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\uff0c\u5f53\u8fbe\u5230\u6700\u5927\u7684\u5237\u65b0\u65f6\u95f4\u65f6\uff0c\u65e0\u8bba\u7f13\u51b2\u533a\u4e2d\u7684\u65e5\u5fd7\u6570\u91cf\u662f\u5426\u8fbe\u5230\u8bbe\u7f6e\u7684\u6700\u5927\u6761\u6570\uff0c\u4e5f\u4f1a\u81ea\u52a8\u5c06\u5168\u90e8\u65e5\u5fd7\u63a8\u9001\u5230  HTTP/HTTPS \u670d\u52a1\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"buffer_duration"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"60"),(0,a.kt)("td",{parentName:"tr",align:null},"[1,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5fc5\u987b\u5148\u5904\u7406\u6279\u6b21\u4e2d\u6700\u65e7\u6761\u76ee\u7684\u6700\u957f\u671f\u9650\uff08\u4ee5\u79d2\u4e3a\u5355\u4f4d\uff09\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"max_retry_count"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u4ece\u5904\u7406\u7ba1\u9053\u4e2d\u79fb\u9664\u4e4b\u524d\u7684\u6700\u5927\u91cd\u8bd5\u6b21\u6570\u3002")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"retry_delay"),(0,a.kt)("td",{parentName:"tr",align:null},"integer"),(0,a.kt)("td",{parentName:"tr",align:null},"\u53ef\u9009"),(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"[0,...]"),(0,a.kt)("td",{parentName:"tr",align:null},"\u5982\u679c\u6267\u884c\u5931\u8d25\uff0c\u5219\u5e94\u5ef6\u8fdf\u6267\u884c\u6d41\u7a0b\u7684\u79d2\u6570\u3002")))),(0,a.kt)("p",null,"\u4ee5\u4e0b\u4ee3\u7801\u663e\u793a\u4e86\u5982\u4f55\u5728\u4f60\u7684\u63d2\u4ef6\u4e2d\u4f7f\u7528\u6279\u5904\u7406\u5668\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local bp_manager_mod = require("apisix.utils.batch-processor-manager")\n...\n\nlocal plugin_name = "xxx-logger"\nlocal batch_processor_manager = bp_manager_mod.new(plugin_name)\nlocal schema = {...}\nlocal _M = {\n    ...\n    name = plugin_name,\n    schema = batch_processor_manager:wrap_schema(schema),\n}\n\n...\n\n\nfunction _M.log(conf, ctx)\n    local entry = {...} -- data to log\n\n    if batch_processor_manager:add_entry(conf, entry) then\n        return\n    end\n    -- create a new processor if not found\n\n    -- entries is an array table of entry, which can be processed in batch\n    local func = function(entries)\n        -- serialize to json array core.json.encode(entries)\n        -- process/send data\n        return true\n        -- return false, err_msg, first_fail if failed\n        -- first_fail(optional) indicates first_fail-1 entries have been successfully processed\n        -- and during processing of entries[first_fail], the error occurred. So the batch processor\n        -- only retries for the entries having index >= first_fail as per the retry policy.\n    end\n    batch_processor_manager:add_entry_to_new_processor(conf, entry, ctx, func)\nend\n')),(0,a.kt)("p",null,"\u6279\u5904\u7406\u5668\u7684\u914d\u7f6e\u5c06\u901a\u8fc7\u8be5\u63d2\u4ef6\u7684\u914d\u7f6e\u8bbe\u7f6e\u3002\n\u4e3e\u4e2a\u4f8b\u5b50\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-shell"},'curl http://127.0.0.1:9180/apisix/admin/routes/1 -H \'X-API-KEY: edd1c9f034335f136f87ad84b625c8f1\' -X PUT -d \'\n{\n      "plugins": {\n            "http-logger": {\n                "uri": "http://mockbin.org/bin/:ID",\n                "batch_max_size": 10,\n                "max_retry_count": 1\n            }\n       },\n      "upstream": {\n           "type": "roundrobin",\n           "nodes": {\n               "127.0.0.1:1980": 1\n           }\n      },\n      "uri": "/hello"\n}\'\n')),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u7684\u63d2\u4ef6\u53ea\u4f7f\u7528\u4e00\u4e2a\u5168\u5c40\u7684\u6279\u5904\u7406\u5668\uff0c\n\u4f60\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5b83\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-lua"},'local entry = {...} -- data to log\nif log_buffer then\n    log_buffer:push(entry)\n    return\nend\n\nlocal config_bat = {\n    name = config.name,\n    retry_delay = config.retry_delay,\n    ...\n}\n\nlocal err\n-- entries is an array table of entry, which can be processed in batch\nlocal func = function(entries)\n    ...\n    return true\n    -- return false, err_msg, first_fail if failed\nend\nlog_buffer, err = batch_processor:new(func, config_bat)\n\nif not log_buffer then\n    core.log.warn("error when creating the batch processor: ", err)\n    return\nend\n\nlog_buffer:push(entry)\n')),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a\u8bf7\u786e\u4fdd\u6279\u5904\u7406\u7684\u6700\u5927\u503c\uff08\u6761\u76ee\u6570\uff09\u5728\u51fd\u6570\u6267\u884c\u7684\u8303\u56f4\u5185\u3002\n\u5237\u65b0\u6279\u5904\u7406\u7684\u8ba1\u65f6\u5668\u57fa\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," \u914d\u7f6e\u8fd0\u884c\u3002\u56e0\u6b64\uff0c\u4e3a\u4e86\u83b7\u5f97\u6700\u4f73\u4f7f\u7528\u6548\u679c\uff0c\n\u4fdd\u6301 ",(0,a.kt)("inlineCode",{parentName:"p"},"inactive_timeout")," \u5c0f\u4e8e ",(0,a.kt)("inlineCode",{parentName:"p"},"buffer_duration"),"\u3002"))}u.isMDXComponent=!0}}]);