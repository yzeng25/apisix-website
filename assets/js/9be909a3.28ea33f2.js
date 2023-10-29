"use strict";(self.webpackChunkdoc=self.webpackChunkdoc||[]).push([[21750],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>f});var i=t(67294);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function r(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,i,s=function(e,n){if(null==e)return{};var t,i,s={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(s[t]=e[t]);return s}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var a=i.createContext({}),l=function(e){var n=i.useContext(a),t=n;return e&&(t="function"==typeof e?e(n):r(r({},n),e)),t},c=function(e){var n=l(e.components);return i.createElement(a.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},d=i.forwardRef((function(e,n){var t=e.components,s=e.mdxType,o=e.originalType,a=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),d=l(t),f=s,m=d["".concat(a,".").concat(f)]||d[f]||u[f]||o;return t?i.createElement(m,r(r({ref:n},c),{},{components:t})):i.createElement(m,r({ref:n},c))}));function f(e,n){var t=arguments,s=n&&n.mdxType;if("string"==typeof e||s){var o=t.length,r=new Array(o);r[0]=d;var p={};for(var a in n)hasOwnProperty.call(n,a)&&(p[a]=n[a]);p.originalType=e,p.mdxType="string"==typeof e?e:s,r[1]=p;for(var l=2;l<o;l++)r[l]=t[l];return i.createElement.apply(null,r)}return i.createElement.apply(null,t)}d.displayName="MDXCreateElement"},64579:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>p,toc:()=>a});var i=t(87462),s=(t(67294),t(3905));const o={id:"support-fips-in-apisix",title:"Support FIPS in APISIX",keywords:["API gateway","Apache APISIX","Code Contribution","Building APISIX","OpenSSL 3.0 FIPS"],description:"Compile apisix-base with OpenSSL 3.0 (FIPS enabled)"},r=void 0,p={unversionedId:"support-fips-in-apisix",id:"version-3.1/support-fips-in-apisix",isDocsHomePage:!1,title:"Support FIPS in APISIX",description:"Compile apisix-base with OpenSSL 3.0 (FIPS enabled)",source:"@site/docs-apisix_versioned_docs/version-3.1/support-fips-in-apisix.md",sourceDirName:".",slug:"/support-fips-in-apisix",permalink:"/docs/apisix/3.1/support-fips-in-apisix",editUrl:"/edit#https://github.com/apache/apisix/edit/release/3.1/docs/en/latest/support-fips-in-apisix.md",tags:[],version:"3.1",frontMatter:{id:"support-fips-in-apisix",title:"Support FIPS in APISIX",keywords:["API gateway","Apache APISIX","Code Contribution","Building APISIX","OpenSSL 3.0 FIPS"],description:"Compile apisix-base with OpenSSL 3.0 (FIPS enabled)"},sidebar:"version-3.1/docs",previous:{title:"Building APISIX from source",permalink:"/docs/apisix/3.1/building-apisix"},next:{title:"External Plugin",permalink:"/docs/apisix/3.1/external-plugin"}},a=[{value:"Compilation",id:"compilation",children:[]}],l={toc:a};function c(e){let{components:n,...t}=e;return(0,s.kt)("wrapper",(0,i.Z)({},l,t,{components:n,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"OpenSSL 3.0 ",(0,s.kt)("a",{parentName:"p",href:"https://www.openssl.org/blog/blog/2022/08/24/FIPS-validation-certificate-issued/"},"supports")," ",(0,s.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/FIPS_140-2"},"FIPS")," mode. To support FIPS in APISIX, you can compile apisix-base with OpenSSL 3.0."),(0,s.kt)("h2",{id:"compilation"},"Compilation"),(0,s.kt)("p",null,"To compile apisix-base with OpenSSL 3.0, run the commands below as root user:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-bash"},'cd $(mktemp -d)\nOPENSSL3_PREFIX=${OPENSSL3_PREFIX-/usr/local}\napt install -y build-essential\ngit clone https://github.com/openssl/openssl\ncd openssl\n./Configure --prefix=$OPENSSL3_PREFIX/openssl-3.0 enable-fips\nmake install\necho $OPENSSL3_PREFIX/openssl-3.0/lib64 > /etc/ld.so.conf.d/openssl3.conf\nldconfig\n$OPENSSL3_PREFIX/openssl-3.0/bin/openssl fipsinstall -out $OPENSSL3_PREFIX/openssl-3.0/ssl/fipsmodule.cnf -module $OPENSSL3_PREFIX/openssl-3.0/lib64/ossl-modules/fips.so\nsed -i \'s@# .include fipsmodule.cnf@.include \'"$OPENSSL3_PREFIX"\'/openssl-3.0/ssl/fipsmodule.cnf@g; s/# \\(fips = fips_sect\\)/\\1\\nbase = base_sect\\n\\n[base_sect]\\nactivate=1\\n/g\' $OPENSSL3_PREFIX/openssl-3.0/ssl/openssl.cnf\ncd ..\n\nexport cc_opt="-I$OPENSSL3_PREFIX/openssl-3.0/include"\nexport ld_opt="-L$OPENSSL3_PREFIX/openssl-3.0/lib64 -Wl,-rpath,$OPENSSL3_PREFIX/openssl-3.0/lib64"\n\nwget https://raw.githubusercontent.com/api7/apisix-build-tools/master/build-apisix-base.sh\nchmod +x build-apisix-base.sh\n./build-apisix-base.sh latest\n')),(0,s.kt)("p",null,"This will install apisix-base to ",(0,s.kt)("inlineCode",{parentName:"p"},"/usr/local/openresty-debug"),"."))}c.isMDXComponent=!0}}]);