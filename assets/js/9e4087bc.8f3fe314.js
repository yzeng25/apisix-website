"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3608,2139],{6876:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(7378),l=a(8539),r=a(4142),o=a(1787);function s(e){let{year:t,posts:a}=e;return n.createElement(n.Fragment,null,n.createElement("h3",null,t),n.createElement("ul",null,a.map((e=>n.createElement("li",{key:e.metadata.date},n.createElement(r.Z,{to:e.metadata.permalink},e.metadata.formattedDate," - ",e.metadata.title))))))}function c(e){let{years:t}=e;return n.createElement("section",{className:"margin-vert--lg"},n.createElement("div",{className:"container"},n.createElement("div",{className:"row"},t.map(((e,t)=>n.createElement("div",{key:t,className:"col col--4 margin-vert--lg"},n.createElement(s,e)))))))}function i(e){let{archive:t}=e;const a=(0,o.I)({id:"theme.blog.archive.title",message:"Archive",description:"The page & hero title of the blog archive page"}),r=(0,o.I)({id:"theme.blog.archive.description",message:"Archive",description:"The page & hero description of the blog archive page"}),s=function(e){const t=e.reduceRight(((e,t)=>{const a=t.metadata.date.split("-")[0],n=e.get(a)||[];return e.set(a,[t,...n])}),new Map);return Array.from(t,(e=>{let[t,a]=e;return{year:t,posts:a}}))}(t.blogPosts);return n.createElement(l.Z,{title:a,description:r},n.createElement("header",{className:"hero hero--primary"},n.createElement("div",{className:"container"},n.createElement("h1",{className:"hero__title"},a),n.createElement("p",{className:"hero__subtitle"},r))),n.createElement("main",null,s.length>0&&n.createElement(c,{years:s})))}},4058:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(5773),l=a(7378),r=a(4142),o=a(8948),s=a(8374),c=a(5423),i=a(5565),m=a(5519),h=a(7645),u=a(9861);const p={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"};var g=a(353),d=a(4338),f=a(4146);const b=JSON.parse('{"$schema":"./event-poster-card-schema.json","show":true,"expire":"2023-07-04","width":400,"config":{"en":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"},"zh":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"}}}'),w="picWrapper_K7bz",E="closeBtn_QOpn",v="SHOW_EVENT_ENTRY",k=e=>{const{config:t,width:a}=e,{i18n:{currentLocale:n}}=(0,g.Z)(),r=(0,l.useMemo)((()=>t[n]),[n]),[,o]=(0,f.Z)(v,!0),[s,c]=(0,d.useSpring)((()=>({from:{x:500,opacity:0}})));(0,l.useEffect)((()=>{c.start({to:{x:0,opacity:1},delay:800})}),[]);const i=(0,l.useCallback)((async()=>Promise.all(c.start({to:{x:500,opacity:0}})).then((()=>o(!1)))),[c]);return!0===(null==r?void 0:r.disable)?null:l.createElement(d.animated.div,{className:w,style:s},l.createElement("button",{className:E,onClick:i,type:"button"},l.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},l.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),l.createElement("a",{href:r.link,onClick:i,target:"_blank",rel:"noreferrer"},l.createElement(u.LazyLoadImage,{src:r.image,alt:r.description,width:a,style:{maxWidth:"100vw"}})))},y=()=>{const[e]=(0,f.Z)(v,!0),{show:t,expire:a,...n}=b,r=new Date(a).getTime();return t&&e&&r>Date.now()?l.createElement(k,n):null},C={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:h.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"},{label:"Roadmap",to:"https://github.com/apache/apisix/milestones",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},S=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:m,...h}=e;const u=(0,o.Z)(t),p=(0,o.Z)(c,{forcePrependBaseUrl:!0}),g=c?{href:m?p:c}:{to:u};return l.createElement(r.Z,(0,n.Z)({},g,h),l.createElement(s.JO,{icon:a}),l.createElement("span",null,i))},_=()=>{const{copyright:e,links:t,logo:a}=C;return C?l.createElement("footer",{className:p.container},t&&t.length>0&&l.createElement("div",{className:p.linksRow},t.map((e=>{let{title:t,items:a}=e;return l.createElement("div",{key:t,className:p.linksCol},l.createElement("div",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.to,className:"footer__item"},l.createElement(S,e))))))}))),l.createElement("div",{className:p.copyright},l.createElement(r.Z,{href:a.href},l.createElement(u.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),l.createElement("div",{className:p.text},e)),l.createElement(y,null)):null}},4867:(e,t,a)=>{a.d(t,{Z:()=>p});var n=a(5773),l=a(7378),r=a(3727),o=a(6281),s=a(353),c=a(5013),i=a(9635),m=a(4142);const h="iconLanguage_zID8",u="localizedBlogLink_cE-3",p=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:p,...g}=e,{i18n:{currentLocale:d,locales:f,localeConfigs:b}}=(0,s.Z)(),w=(0,c.l5)(),{pathname:E}=(0,i.TH)();if(E.startsWith("/zh/blog"))return l.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(E.startsWith("/blog"))return l.createElement(m.Z,{className:u,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function v(e){return b[e].label}const k=[...a,...f.map((e=>{const t="pathname://"+w.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...p],y=t?"Languages":v(d);return l.createElement(r.Z,(0,n.Z)({},g,{href:"#",mobile:t,label:l.createElement("span",null,l.createElement(o.Z,{className:h}),l.createElement("span",null,y)),items:k}))}},5403:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(5773),l=a(7378),r=a(1542),o=a(353),s=a(8948),c=a(4142),i=a(5361),m=a(9033),h=a(9495),u=a(2492),p=a(7489),g=a(1787);const d="searchBox_fBfG";let f=null;function b(e){let{hit:t,children:a}=e;return l.createElement("a",{href:t.url,target:"_parent"},a)}function w(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,m.Z)();return l.createElement(c.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function E(e){var t,c;let{contextualSearch:m,...E}=e;const{siteMetadata:v}=(0,o.Z)(),k=(0,p.Z)(),y=null!=(t=null==(c=E.searchParameters)?void 0:c.facetFilters)?t:[],C=m?[...k,...y]:y,S={...E.searchParameters,facetFilters:C},{withBaseUrl:_}=(0,s.C)(),Z=(0,l.useRef)(null),A=(0,l.useRef)(null),[I,N]=(0,l.useState)(!1),[P,x]=(0,l.useState)(null),L=(0,l.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),B=(0,l.useCallback)((()=>{L().then((()=>{Z.current=document.createElement("div"),document.body.insertBefore(Z.current,document.body.firstChild),N(!0)}))}),[L,N]),T=(0,l.useCallback)((()=>{N(!1),Z.current.remove()}),[N]),R=(0,l.useCallback)((e=>{L().then((()=>{N(!0),x(e.key)}))}),[L,N,x]),F=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,M=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(""+t.pathname+t.hash)}})))).current,z=(0,l.useMemo)((()=>e=>l.createElement(w,(0,n.Z)({},e,{onClose:T}))),[T]),X=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",v.docusaurusVersion),e)),[v.docusaurusVersion]);(0,h.D)({isOpen:I,onOpen:B,onClose:T,onInput:R,searchButtonRef:A});const O=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(i.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+E.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:d},l.createElement(u.a,{onTouchStart:L,onFocus:L,onMouseOver:L,onClick:B,ref:A,translations:{buttonText:O,buttonAriaLabel:O}})),I&&(0,r.createPortal)(l.createElement(f,(0,n.Z)({onClose:T,initialScrollY:window.scrollY,initialQuery:P,navigator:F,transformItems:M,hitComponent:b,resultsFooterComponent:z,transformSearchClient:X},E,{searchParameters:S})),Z.current))}const v=function(){const{siteConfig:e}=(0,o.Z)();return l.createElement(E,e.themeConfig.algolia)}}}]);