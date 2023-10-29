"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3751,2139],{1044:(e,t,a)=>{a.r(t),a.d(t,{default:()=>m});var n=a(7378),l=a(8539),r=a(5013),o=a(6839);const s="tag_Pm3+";function c(e){let{letterEntry:t}=e;return n.createElement("article",null,n.createElement("h2",null,t.letter),n.createElement("ul",{className:"padding--none"},t.tags.map((e=>n.createElement("li",{key:e.permalink,className:s},n.createElement(o.Z,e))))),n.createElement("hr",null))}const i=function(e){let{tags:t}=e;const a=(0,r.PZ)(t);return n.createElement("section",{className:"margin-vert--lg"},a.map((e=>n.createElement(c,{key:e.letter,letterEntry:e}))))};const m=function(e){let{tags:t}=e;const a=(0,r.MA)();return n.createElement(l.Z,{title:a,wrapperClassName:r.kM.wrapper.docsPages,pageClassName:r.kM.page.docsTagsListPage,searchMetadatas:{tag:"doc_tags_list"}},n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,a),n.createElement(i,{tags:t})))))}},6839:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7378),l=a(8944),r=a(4142);const o="tag_JoRF",s="tagRegular_BENv",c="tagWithCount_3p8+";const i=function(e){const{permalink:t,name:a,count:i}=e;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o,{[s]:!i,[c]:i})},a,i&&n.createElement("span",null,i))}},4058:(e,t,a)=>{a.d(t,{Z:()=>_});var n=a(5773),l=a(7378),r=a(4142),o=a(8948),s=a(8374),c=a(5423),i=a(5565),m=a(5519),u=a(7645),p=a(9861);const h={container:"container_MP5Z",linksRow:"linksRow_iwpv",linksCol:"linksCol_a1ec",copyright:"copyright_ZfFh"};var g=a(353),d=a(4338),f=a(4146);const w=JSON.parse('{"$schema":"./event-poster-card-schema.json","show":true,"expire":"2023-07-04","width":400,"config":{"en":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"},"zh":{"image":"https://static.apiseven.com/uploads/2023/06/29/PcXJ4a8R_APISIX%20Singapore%20website%20poster.png","link":"https://apisix.apache.org/docs/general/events/#singapore-meetup","description":"Apache APISIX Community Meetup Singapore"}}}'),E="picWrapper_K7bz",b="closeBtn_QOpn",k="SHOW_EVENT_ENTRY",v=e=>{const{config:t,width:a}=e,{i18n:{currentLocale:n}}=(0,g.Z)(),r=(0,l.useMemo)((()=>t[n]),[n]),[,o]=(0,f.Z)(k,!0),[s,c]=(0,d.useSpring)((()=>({from:{x:500,opacity:0}})));(0,l.useEffect)((()=>{c.start({to:{x:0,opacity:1},delay:800})}),[]);const i=(0,l.useCallback)((async()=>Promise.all(c.start({to:{x:500,opacity:0}})).then((()=>o(!1)))),[c]);return!0===(null==r?void 0:r.disable)?null:l.createElement(d.animated.div,{className:E,style:s},l.createElement("button",{className:b,onClick:i,type:"button"},l.createElement("svg",{role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 352 512"},l.createElement("path",{fill:"currentColor",d:"M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"}))),l.createElement("a",{href:r.link,onClick:i,target:"_blank",rel:"noreferrer"},l.createElement(p.LazyLoadImage,{src:r.image,alt:r.description,width:a,style:{maxWidth:"100vw"}})))},C=()=>{const[e]=(0,f.Z)(k,!0),{show:t,expire:a,...n}=w,r=new Date(a).getTime();return t&&e&&r>Date.now()?l.createElement(v,n):null},Z={links:[{title:"ASF",items:[{label:"Foundation",to:"https://www.apache.org/"},{label:"License",to:"https://www.apache.org/licenses/"},{label:"Events",to:"https://www.apache.org/events/"},{label:"Security",to:"https://www.apache.org/security/"},{label:"Sponsorship",to:"https://www.apache.org/foundation/sponsorship.html"},{label:"Thanks",to:"https://www.apache.org/foundation/thanks.html"}]},{title:"Community",items:[{icon:c.Z,label:"GitHub",to:"https://github.com/apache/apisix/issues"},{icon:m.Z,label:"Slack",to:"/docs/general/join"},{icon:i.Z,label:"Twitter",to:"https://twitter.com/ApacheAPISIX"},{icon:u.Z,label:"YouTube",to:"https://www.youtube.com/channel/UCgPD18cMhOg5rmPVnQhAC8g"}]},{title:"More",items:[{label:"Blog",to:"/blog/",target:"_parent"},{label:"Showcase",to:"/showcase",target:"_parent"},{label:"Plugin Hub",to:"/plugins",target:"_parent"},{label:"Roadmap",to:"https://github.com/apache/apisix/milestones",target:"_parent"}]}],logo:{alt:"Apache Software Foundation",src:"https://static.apiseven.com/202202/asf_logo_wide_small.png",href:"https://www.apache.org/"},copyright:"Copyright \xa9 2019-"+(new Date).getFullYear()+" The Apache Software Foundation. Apache APISIX, APISIX\xae, Apache, the Apache feather logo, and the Apache APISIX project logo are either registered trademarks or trademarks of the Apache Software Foundation."},y=e=>{let{to:t,icon:a,href:c,label:i,prependBaseUrlToHref:m,...u}=e;const p=(0,o.Z)(t),h=(0,o.Z)(c,{forcePrependBaseUrl:!0}),g=c?{href:m?h:c}:{to:p};return l.createElement(r.Z,(0,n.Z)({},g,u),l.createElement(s.JO,{icon:a}),l.createElement("span",null,i))},_=()=>{const{copyright:e,links:t,logo:a}=Z;return Z?l.createElement("footer",{className:h.container},t&&t.length>0&&l.createElement("div",{className:h.linksRow},t.map((e=>{let{title:t,items:a}=e;return l.createElement("div",{key:t,className:h.linksCol},l.createElement("div",null,t),l.createElement("ul",null,a.map((e=>l.createElement("li",{key:e.to,className:"footer__item"},l.createElement(y,e))))))}))),l.createElement("div",{className:h.copyright},l.createElement(r.Z,{href:a.href},l.createElement(p.LazyLoadImage,{alt:a.alt,src:a.src,height:"40px",width:"231.25px"})),l.createElement("div",{className:h.text},e)),l.createElement(C,null)):null}},4867:(e,t,a)=>{a.d(t,{Z:()=>h});var n=a(5773),l=a(7378),r=a(3727),o=a(6281),s=a(353),c=a(5013),i=a(9635),m=a(4142);const u="iconLanguage_zID8",p="localizedBlogLink_cE-3",h=e=>{const{mobile:t,dropdownItemsBefore:a,dropdownItemsAfter:h,...g}=e,{i18n:{currentLocale:d,locales:f,localeConfigs:w}}=(0,s.Z)(),E=(0,c.l5)(),{pathname:b}=(0,i.TH)();if(b.startsWith("/zh/blog"))return l.createElement(m.Z,{className:p,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///blog",target:"_self"},"English Blog");if(b.startsWith("/blog"))return l.createElement(m.Z,{className:p,isNavLink:!0,autoAddBaseUrl:!1,to:"pathname:///zh/blog",target:"_self"},"\u4e2d\u6587\u535a\u5ba2");function k(e){return w[e].label}const v=[...a,...f.map((e=>{const t="pathname://"+E.createUrl({locale:e,fullyQualified:!1});return{isNavLink:!0,label:k(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...h],C=t?"Languages":k(d);return l.createElement(r.Z,(0,n.Z)({},g,{href:"#",mobile:t,label:l.createElement("span",null,l.createElement(o.Z,{className:u}),l.createElement("span",null,C)),items:v}))}},5403:(e,t,a)=>{a.d(t,{Z:()=>k});var n=a(5773),l=a(7378),r=a(1542),o=a(353),s=a(8948),c=a(4142),i=a(5361),m=a(9033),u=a(9495),p=a(2492),h=a(7489),g=a(1787);const d="searchBox_fBfG";let f=null;function w(e){let{hit:t,children:a}=e;return l.createElement("a",{href:t.url,target:"_parent"},a)}function E(e){let{state:t,onClose:a}=e;const{generateSearchPageLink:n}=(0,m.Z)();return l.createElement(c.Z,{to:n(t.query),onClick:a,target:"_blank"},"See all ",t.context.nbHits," results")}function b(e){var t,c;let{contextualSearch:m,...b}=e;const{siteMetadata:k}=(0,o.Z)(),v=(0,h.Z)(),C=null!=(t=null==(c=b.searchParameters)?void 0:c.facetFilters)?t:[],Z=m?[...v,...C]:C,y={...b.searchParameters,facetFilters:Z},{withBaseUrl:_}=(0,s.C)(),S=(0,l.useRef)(null),A=(0,l.useRef)(null),[N,P]=(0,l.useState)(!1),[I,L]=(0,l.useState)(null),x=(0,l.useCallback)((()=>f?Promise.resolve():Promise.all([a.e(6295).then(a.bind(a,6295)),Promise.all([a.e(532),a.e(9127)]).then(a.bind(a,9127)),Promise.all([a.e(532),a.e(160)]).then(a.bind(a,160))]).then((e=>{let[{DocSearchModal:t}]=e;f=t}))),[]),B=(0,l.useCallback)((()=>{x().then((()=>{S.current=document.createElement("div"),document.body.insertBefore(S.current,document.body.firstChild),P(!0)}))}),[x,P]),M=(0,l.useCallback)((()=>{P(!1),S.current.remove()}),[P]),R=(0,l.useCallback)((e=>{x().then((()=>{P(!0),L(e.key)}))}),[x,P,L]),T=(0,l.useRef)({navigate(e){let{itemUrl:t}=e;location.assign(t)}}).current,F=(0,l.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:_(""+t.pathname+t.hash)}})))).current,z=(0,l.useMemo)((()=>e=>l.createElement(E,(0,n.Z)({},e,{onClose:M}))),[M]),X=(0,l.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",k.docusaurusVersion),e)),[k.docusaurusVersion]);(0,u.D)({isOpen:N,onOpen:B,onClose:M,onInput:R,searchButtonRef:A});const O=(0,g.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return l.createElement(l.Fragment,null,l.createElement(i.Z,null,l.createElement("link",{rel:"preconnect",href:"https://"+b.appId+"-dsn.algolia.net",crossOrigin:"anonymous"})),l.createElement("div",{className:d},l.createElement(p.a,{onTouchStart:x,onFocus:x,onMouseOver:x,onClick:B,ref:A,translations:{buttonText:O,buttonAriaLabel:O}})),N&&(0,r.createPortal)(l.createElement(f,(0,n.Z)({onClose:M,initialScrollY:window.scrollY,initialQuery:I,navigator:T,transformItems:F,hitComponent:w,resultsFooterComponent:z,transformSearchClient:X},b,{searchParameters:y})),S.current))}const k=function(){const{siteConfig:e}=(0,o.Z)();return l.createElement(b,e.themeConfig.algolia)}}}]);