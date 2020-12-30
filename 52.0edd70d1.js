(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{125:function(e,t,n){"use strict";n.r(t);var r=n(0),a=n.n(r),o=n(26),i=n(129),s=n(23),c=n(134),u=n(137);var l=function(e){const{metadata:t}=e;return a.a.createElement("nav",{className:"pagination-nav","aria-label":"Blog list page navigation"},a.a.createElement("div",{className:"pagination-nav__item"},t.previous&&a.a.createElement(u.a,{className:"pagination-nav__link",to:t.previous.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Previous"),a.a.createElement("div",{className:"pagination-nav__label"},"\xab ",t.previous.title))),a.a.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},t.next&&a.a.createElement(u.a,{className:"pagination-nav__link",to:t.next.permalink},a.a.createElement("div",{className:"pagination-nav__sublabel"},"Next"),a.a.createElement("div",{className:"pagination-nav__label"},t.next.title," \xbb"))))},d=n(133);var f=function(){const{siteConfig:{title:e}}=Object(s.default)(),{pluginId:t}=Object(d.useActivePlugin)({failfast:!0}),{savePreferredVersionName:n}=Object(i.useDocsPreferredVersion)(t),r=Object(d.useActiveVersion)(t),{latestDocSuggestion:o,latestVersionSuggestion:c}=Object(d.useDocVersionSuggestions)(t);if(!c)return a.a.createElement(a.a.Fragment,null);const l=null!=o?o:(f=c).docs.find((e=>e.id===f.mainDocId));var f;return a.a.createElement("div",{className:"alert alert--warning margin-bottom--md",role:"alert"},"current"===r.name?a.a.createElement("div",null,"This is unreleased documentation for ",e," ",a.a.createElement("strong",null,r.label)," version."):a.a.createElement("div",null,"This is documentation for ",e," ",a.a.createElement("strong",null,r.label),", which is no longer actively maintained."),a.a.createElement("div",{className:"margin-top--md"},"For up-to-date documentation, see the"," ",a.a.createElement("strong",null,a.a.createElement(u.a,{to:l.path,onClick:()=>n(c.name)},"latest version"))," ","(",c.label,")."))},m=n(130);var g=function(e,t,n){const[a,o]=Object(r.useState)(void 0);Object(r.useEffect)((()=>{function r(){const r=function(){const e=Array.from(document.getElementsByClassName("anchor")),t=e.find((e=>{const{top:t}=e.getBoundingClientRect();return t>=n}));if(t){if(t.getBoundingClientRect().top>=n){const n=e[e.indexOf(t)-1];return null!=n?n:t}return t}return e[e.length-1]}();if(r){let n=0,i=!1;const s=document.getElementsByClassName(e);for(;n<s.length&&!i;){const e=s[n],{href:c}=e,u=decodeURIComponent(c.substring(c.indexOf("#")+1));r.id===u&&(a&&a.classList.remove(t),e.classList.add(t),o(e),i=!0),n+=1}}}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}))},v=n(69),p=n.n(v);const b="table-of-contents__link";function h({toc:e,isChild:t}){return e.length?a.a.createElement("ul",{className:t?"":"table-of-contents table-of-contents__left-border"},e.map((e=>a.a.createElement("li",{key:e.id},a.a.createElement("a",{href:`#${e.id}`,className:b,dangerouslySetInnerHTML:{__html:e.value}}),a.a.createElement(h,{isChild:!0,toc:e.children}))))):null}var E=function({toc:e}){return g(b,"table-of-contents__link--active",100),a.a.createElement("div",{className:Object(m.a)(p.a.tableOfContents,"thin-scrollbar")},a.a.createElement(h,{toc:e}))},D=n(2),P=n(70),_=n.n(P);var O=({className:e,...t})=>a.a.createElement("svg",Object(D.a)({fill:"currentColor",height:"1.2em",width:"1.2em",preserveAspectRatio:"xMidYMid meet",role:"img",viewBox:"0 0 40 40",className:Object(m.a)(_.a.iconEdit,e)},t),a.a.createElement("g",null,a.a.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))),V=n(71),j=n.n(V);t.default=function(e){const{siteConfig:t}=Object(s.default)(),{url:n}=t,{content:r}=e,{metadata:u,frontMatter:{image:g,keywords:v,hide_title:p,hide_table_of_contents:b}}=r,{description:h,title:D,permalink:P,editUrl:_,lastUpdatedAt:V,lastUpdatedBy:y}=u,{pluginId:A}=Object(d.useActivePlugin)({failfast:!0}),w=Object(d.useVersions)(A),C=Object(d.useActiveVersion)(A),N=w.length>1,x=Object(i.useTitleFormatter)(D),L=Object(c.a)(g,{absolute:!0});return a.a.createElement(a.a.Fragment,null,a.a.createElement(o.a,null,a.a.createElement("title",null,x),a.a.createElement("meta",{property:"og:title",content:x}),h&&a.a.createElement("meta",{name:"description",content:h}),h&&a.a.createElement("meta",{property:"og:description",content:h}),v&&v.length&&a.a.createElement("meta",{name:"keywords",content:v.join(",")}),g&&a.a.createElement("meta",{property:"og:image",content:L}),g&&a.a.createElement("meta",{name:"twitter:image",content:L}),g&&a.a.createElement("meta",{name:"twitter:image:alt",content:`Image for ${D}`}),P&&a.a.createElement("meta",{property:"og:url",content:n+P}),P&&a.a.createElement("link",{rel:"canonical",href:n+P})),a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:Object(m.a)("col",{[j.a.docItemCol]:!b})},a.a.createElement(f,null),a.a.createElement("div",{className:j.a.docItemContainer},a.a.createElement("article",null,N&&a.a.createElement("div",null,a.a.createElement("span",{className:"badge badge--secondary"},"Version: ",C.label)),!p&&a.a.createElement("header",null,a.a.createElement("h1",{className:j.a.docTitle},D)),a.a.createElement("div",{className:"markdown"},a.a.createElement(r,null))),(_||V||y)&&a.a.createElement("div",{className:"margin-vert--xl"},a.a.createElement("div",{className:"row"},a.a.createElement("div",{className:"col"},_&&a.a.createElement("a",{href:_,target:"_blank",rel:"noreferrer noopener"},a.a.createElement(O,null),"Edit this page")),(V||y)&&a.a.createElement("div",{className:"col text--right"},a.a.createElement("em",null,a.a.createElement("small",null,"Last updated"," ",V&&a.a.createElement(a.a.Fragment,null,"on"," ",a.a.createElement("time",{dateTime:new Date(1e3*V).toISOString(),className:j.a.docLastUpdatedAt},new Date(1e3*V).toLocaleDateString()),y&&" "),y&&a.a.createElement(a.a.Fragment,null,"by ",a.a.createElement("strong",null,y)),!1))))),a.a.createElement("div",{className:"margin-vert--lg"},a.a.createElement(l,{metadata:u})))),!b&&r.toc&&a.a.createElement("div",{className:"col col--3"},a.a.createElement(E,{toc:r.toc}))))}},129:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=n(142);Object.defineProperty(t,"useThemeConfig",{enumerable:!0,get:function(){return r.useThemeConfig}});var a=n(149);Object.defineProperty(t,"docVersionSearchTag",{enumerable:!0,get:function(){return a.docVersionSearchTag}}),Object.defineProperty(t,"DEFAULT_SEARCH_TAG",{enumerable:!0,get:function(){return a.DEFAULT_SEARCH_TAG}});var o=n(143);Object.defineProperty(t,"isDocsPluginEnabled",{enumerable:!0,get:function(){return o.isDocsPluginEnabled}});var i=n(153);Object.defineProperty(t,"isSamePath",{enumerable:!0,get:function(){return i.isSamePath}});var s=n(154);Object.defineProperty(t,"useTitleFormatter",{enumerable:!0,get:function(){return s.useTitleFormatter}});var c=n(155);Object.defineProperty(t,"useDocsPreferredVersion",{enumerable:!0,get:function(){return c.useDocsPreferredVersion}}),Object.defineProperty(t,"useDocsPreferredVersionByPluginId",{enumerable:!0,get:function(){return c.useDocsPreferredVersionByPluginId}});var u=n(144);Object.defineProperty(t,"DocsPreferredVersionContextProvider",{enumerable:!0,get:function(){return u.DocsPreferredVersionContextProvider}})},130:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},133:function(e,t,n){try{e.exports=n(150)}catch(r){e.exports={}}},134:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var r=n(23),a=n(139);function o(){const{siteConfig:{baseUrl:e="/",url:t}={}}=Object(r.default)();return{withBaseUrl:(n,r)=>function(e,t,n,{forcePrependBaseUrl:r=!1,absolute:o=!1}={}){if(!n)return n;if(n.startsWith("#"))return n;if(Object(a.b)(n))return n;if(r)return t+n;const i=n.startsWith(t)?n:t+n.replace(/^\//,"");return o?e+i:i}(t,e,n,r)}}function i(e,t={}){const{withBaseUrl:n}=o();return n(e,t)}},137:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(9),i=n(139),s=n(10);const c=Object(r.createContext)({collectLink:()=>{}});var u=n(134),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,{isNavLink:n,to:d,href:f,activeClassName:m,isActive:g,"data-noBrokenLinkCheck":v,autoAddBaseUrl:p=!0}=e,b=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck","autoAddBaseUrl"]);const{withBaseUrl:h}=Object(u.b)(),E=Object(r.useContext)(c),D=d||f,P=Object(i.a)(D),_=null==D?void 0:D.replace("pathname://",""),O=void 0!==_?(V=_,p&&(e=>e.startsWith("/"))(V)?h(V):V):void 0;var V;const j=Object(r.useRef)(!1),y=n?o.e:o.c,A=s.a.canUseIntersectionObserver;let w;Object(r.useEffect)((()=>(!A&&P&&window.docusaurus.prefetch(O),()=>{A&&w&&w.disconnect()})),[O,A,P]);const C=null!==(t=null==O?void 0:O.startsWith("#"))&&void 0!==t&&t,N=!O||!P||C;return O&&P&&!C&&!v&&E.collectLink(O),N?a.a.createElement("a",Object.assign({href:O},D&&!P&&{target:"_blank",rel:"noopener noreferrer"},b)):a.a.createElement(y,Object.assign({},b,{onMouseEnter:()=>{j.current||(window.docusaurus.preload(O),j.current=!0)},innerRef:e=>{var t,n;A&&e&&P&&(t=e,n=()=>{window.docusaurus.prefetch(O)},w=new window.IntersectionObserver((e=>{e.forEach((e=>{t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(w.unobserve(t),w.disconnect(),n())}))})),w.observe(t))},to:O||""},n&&{isActive:g,activeClassName:m}))}},138:function(e,t,n){"use strict";n.r(t);var r=n(9);n.d(t,"MemoryRouter",(function(){return r.d})),n.d(t,"Prompt",(function(){return r.f})),n.d(t,"Redirect",(function(){return r.g})),n.d(t,"Route",(function(){return r.h})),n.d(t,"Router",(function(){return r.i})),n.d(t,"StaticRouter",(function(){return r.j})),n.d(t,"Switch",(function(){return r.k})),n.d(t,"generatePath",(function(){return r.l})),n.d(t,"matchPath",(function(){return r.m})),n.d(t,"useHistory",(function(){return r.n})),n.d(t,"useLocation",(function(){return r.o})),n.d(t,"useParams",(function(){return r.p})),n.d(t,"useRouteMatch",(function(){return r.q})),n.d(t,"withRouter",(function(){return r.r})),n.d(t,"BrowserRouter",(function(){return r.a})),n.d(t,"HashRouter",(function(){return r.b})),n.d(t,"Link",(function(){return r.c})),n.d(t,"NavLink",(function(){return r.e}))},139:function(e,t,n){"use strict";function r(e){return!0===/^(\w*:|\/\/)/.test(e)}function a(e){return void 0!==e&&!r(e)}n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}))},142:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useThemeConfig=void 0;const a=r(n(23));t.useThemeConfig=function(){return a.default().siteConfig.themeConfig}},143:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isDocsPluginEnabled=void 0;const r=n(133);t.isDocsPluginEnabled=!!r.useAllDocsData},144:function(e,t,n){"use strict";var r=this&&this.__createBinding||(Object.create?function(e,t,n,r){void 0===r&&(r=n),Object.defineProperty(e,r,{enumerable:!0,get:function(){return t[n]}})}:function(e,t,n,r){void 0===r&&(r=n),e[r]=t[n]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var n in e)"default"!==n&&Object.hasOwnProperty.call(e,n)&&r(t,e,n);return a(t,e),t},i=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionContext=t.DocsPreferredVersionContextProvider=void 0;const s=o(n(0)),c=n(142),u=n(143),l=n(133),d=i(n(156));function f({pluginIds:e,versionPersistence:t,allDocsData:n}){const r={};return e.forEach((e=>{r[e]=function(e){const r=d.default.read(e,t);return n[e].versions.some((e=>e.name===r))?{preferredVersionName:r}:(d.default.clear(e,t),{preferredVersionName:null})}(e)})),r}function m(){const e=l.useAllDocsData(),t=c.useThemeConfig().docs.versionPersistence,n=s.useMemo((()=>Object.keys(e)),[e]),[r,a]=s.useState((()=>function(e){const t={};return e.forEach((e=>{t[e]={preferredVersionName:null}})),t}(n)));s.useEffect((()=>{a(f({allDocsData:e,versionPersistence:t,pluginIds:n}))}),[e,t,n]);return[r,s.useMemo((()=>({savePreferredVersion:function(e,n){d.default.save(e,t,n),a((t=>Object.assign(Object.assign({},t),{[e]:{preferredVersionName:n}})))}})),[a])]}const g=s.createContext(null);function v({children:e}){const t=m();return s.default.createElement(g.Provider,{value:t},e)}t.DocsPreferredVersionContextProvider=function({children:e}){return u.isDocsPluginEnabled?s.default.createElement(v,null,e):s.default.createElement(s.default.Fragment,null,e)},t.useDocsPreferredVersionContext=function(){const e=s.useContext(g);if(!e)throw new Error("Can't find docs preferred context, maybe you forgot to use the DocsPreferredVersionContextProvider ?");return e}},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.docVersionSearchTag=t.DEFAULT_SEARCH_TAG=void 0,t.DEFAULT_SEARCH_TAG="default",t.docVersionSearchTag=function(e,t){return`docs-${e}-${t}`}},150:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocVersionSuggestions=t.useActiveDocContext=t.useActiveVersion=t.useLatestVersion=t.useVersions=t.useActivePluginAndVersion=t.useActivePlugin=t.useDocsData=t.useAllDocsData=void 0;const r=n(138),a=n(151),o=n(152);t.useAllDocsData=()=>a.useAllPluginInstancesData("docusaurus-plugin-content-docs"),t.useDocsData=e=>a.usePluginData("docusaurus-plugin-content-docs",e),t.useActivePlugin=(e={})=>{const n=t.useAllDocsData(),{pathname:a}=r.useLocation();return o.getActivePlugin(n,a,e)},t.useActivePluginAndVersion=(e={})=>{const n=t.useActivePlugin(e),{pathname:a}=r.useLocation();if(n){return{activePlugin:n,activeVersion:o.getActiveVersion(n.pluginData,a)}}},t.useVersions=e=>t.useDocsData(e).versions,t.useLatestVersion=e=>{const n=t.useDocsData(e);return o.getLatestVersion(n)},t.useActiveVersion=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveVersion(n,a)},t.useActiveDocContext=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getActiveDocContext(n,a)},t.useDocVersionSuggestions=e=>{const n=t.useDocsData(e),{pathname:a}=r.useLocation();return o.getDocVersionSuggestions(n,a)}},151:function(e,t,n){"use strict";n.r(t),n.d(t,"default",(function(){return a})),n.d(t,"useAllPluginInstancesData",(function(){return o})),n.d(t,"usePluginData",(function(){return i}));var r=n(23);function a(){const{globalData:e}=Object(r.default)();if(!e)throw new Error("Docusaurus global data not found");return e}function o(e){const t=a()[e];if(!t)throw new Error(`Docusaurus plugin global data not found for pluginName=${e}`);return t}function i(e,t="default"){const n=o(e)[t];if(!n)throw new Error(`Docusaurus plugin global data not found for pluginName=${e} and pluginId=${t}`);return n}},152:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getDocVersionSuggestions=t.getActiveDocContext=t.getActiveVersion=t.getLatestVersion=t.getActivePlugin=void 0;const r=n(138);t.getActivePlugin=function(e,t,n={}){const a=Object.entries(e).find((([e,n])=>!!r.matchPath(t,{path:n.path,exact:!1,strict:!1}))),o=a?{pluginId:a[0],pluginData:a[1]}:void 0;if(!o&&n.failfast)throw new Error(`Can't find active docs plugin for pathname=${t}, while it was expected to be found. Maybe you tried to use a docs feature that can only be used on a docs-related page? Existing docs plugin paths are: ${Object.values(e).map((e=>e.path)).join(", ")}`);return o},t.getLatestVersion=e=>e.versions.find((e=>e.isLast)),t.getActiveVersion=(e,n)=>{const a=t.getLatestVersion(e);return[...e.versions.filter((e=>e!==a)),a].find((e=>!!r.matchPath(n,{path:e.path,exact:!1,strict:!1})))},t.getActiveDocContext=(e,n)=>{const a=t.getActiveVersion(e,n),o=null==a?void 0:a.docs.find((e=>!!r.matchPath(n,{path:e.path,exact:!0,strict:!1})));return{activeVersion:a,activeDoc:o,alternateDocVersions:o?function(t){const n={};return e.versions.forEach((e=>{e.docs.forEach((r=>{r.id===t&&(n[e.name]=r)}))})),n}(o.id):{}}},t.getDocVersionSuggestions=(e,n)=>{const r=t.getLatestVersion(e),a=t.getActiveDocContext(e,n),o=a.activeVersion!==r;return{latestDocSuggestion:o?null==a?void 0:a.alternateDocVersions[r.name]:void 0,latestVersionSuggestion:o?r:void 0}}},153:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isSamePath=void 0,t.isSamePath=(e,t)=>{const n=e=>!e||(null==e?void 0:e.endsWith("/"))?e:`${e}/`;return n(e)===n(t)}},154:function(e,t,n){"use strict";var r=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.useTitleFormatter=void 0;const a=r(n(23));t.useTitleFormatter=e=>{const{siteConfig:t={}}=a.default(),{title:n,titleDelimiter:r="|"}=t;return e&&e.trim().length?`${e.trim()} ${r} ${n}`:n}},155:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.useDocsPreferredVersionByPluginId=t.useDocsPreferredVersion=void 0;const r=n(0),a=n(144),o=n(133),i=n(157);t.useDocsPreferredVersion=function(e=i.DEFAULT_PLUGIN_ID){const t=o.useDocsData(e),[n,s]=a.useDocsPreferredVersionContext(),{preferredVersionName:c}=n[e];return{preferredVersion:c?t.versions.find((e=>e.name===c)):null,savePreferredVersionName:r.useCallback((t=>{s.savePreferredVersion(e,t)}),[s])}},t.useDocsPreferredVersionByPluginId=function(){const e=o.useAllDocsData(),[t]=a.useDocsPreferredVersionContext(),n=Object.keys(e),r={};return n.forEach((n=>{r[n]=function(n){const r=e[n],{preferredVersionName:a}=t[n];return a?r.versions.find((e=>e.name===a)):null}(n)})),r}},156:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const r=e=>`docs-preferred-version-${e}`,a={save:(e,t,n)=>{"none"===t||window.localStorage.setItem(r(e),n)},read:(e,t)=>"none"===t?null:window.localStorage.getItem(r(e)),clear:(e,t)=>{"none"===t||window.localStorage.removeItem(r(e))}};t.default=a},157:function(e,t,n){"use strict";n.r(t),n.d(t,"DEFAULT_PLUGIN_ID",(function(){return r}));const r="default"}}]);