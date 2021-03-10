(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{115:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(138),a=n(141),s=n(146),c=n(155),l=n(147);const u={title:"Operations Management System",description:"Effective operations drive business success and are the key to improving sales and profits"},f={heading:r.a.createElement(r.a.Fragment,null,"Effective Operations Drive Business Success And Are ",r.a.createElement(s.a,null,"The Key To Improving Sales And Profits"))},p=[{heading:r.a.createElement(r.a.Fragment,null,"Effective Operations Drive ",r.a.createElement(s.a,null,"Sales and Profit!")),content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"For your business to thrive and grow it needs to consistently fulfill customer orders on time, at the right quality and cost. The ability to do this improves your reputation, drives both repeat and new sales and ensures the continued profitability of your business. But achieving this is one of the hardest steps in developing any successful business and key to making it possible is an Effective Operations Management System."),r.a.createElement("p",null,"An effective Operations Management System helps you ensure that all orders flow smoothly through your business and that this happens consistently, without having to be there yourself all the time."),r.a.createElement("p",null,"And an effective Operations Management System gives you the ability to control and monitor every aspect of your business in real-time. It is the ONE FUNDAMENTAL COMPONENTS OF BUSINESS SUCCESS."),r.a.createElement("p",null,"The Sense-i Operations Management System consists of 12 key process areas designed to improve the performance of and control you have over key business areas."),r.a.createElement(l.a,{src:"/img/pages/systems/operations-management/modules.png",areas:[{link:"/",boundary:{topLeft:[8,116],bottomRight:[294,283]}}]}),r.a.createElement("p",null,"The success of your and any business is determined by how well your team fulfills customers\u2019 orders and is on top of the communication between your company and your customers. The more your deliver exactly the right product and service on time as promised, the better your company does. And you have to control the costs of the entire process to ensure you run profitably.  Broken and fragmented information flows and a myriad of different spreadsheets put you into spreadsheet hell and take a huge toll on business owners and managers personally."),r.a.createElement("p",null,"To be certain that every customer orders flow through every step in your business smoothly and profitably you must ensure that every single step in the Order Management process is performed within a single Operations Management System and that no external spreadsheets, manual calculations or other systems are used. This is essential if you want to eliminate recapturing information, reduce mistakes and overhead costs and speed up order processing and be competitive in the market, which is essential for success."),r.a.createElement(c.a,{src:"/img/pages/systems/operations-management/report.png"}),r.a.createElement("p",null,"Each of the modules in the Sense-I Operations Management System can be implemented and customized to suit the exact needs of your business. Modules can be implemented separately to focus on specific business issues and yet, despite their flexibility, all the modules work together seamlessly off your company\u2019s database in a completely integrated manner. Every transaction captured by your team updates information in the financial and performance management systems in real-time giving you in real-time control and complete insight into every aspect of your business."),r.a.createElement("p",null,"Over the past 25 years Sense-I has worked closely with leading companies to develop flexible solutions that address the real needs and challenges faced by small and medium sized businesses. The result of this is the most complete and flexible, proven, reliable and robust Operations Management System for manufacturing, retail, wholesale and services industries."),r.a.createElement("p",null,"For more information on the systems that can help you achieve success and gain control, profit and freedom in your business click on each of the nine links above or contact us on ",r.a.createElement(a.a,{to:"mailto:info@sense-i.co"},"info@sense-i.co"),"."))}];t.default=function(){return r.a.createElement(i.a,{metadata:u,banner:f,sections:p})}},138:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(140);n(55);function a(e){const{heading:t,children:n}=e;return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},t&&r.a.createElement("h2",null,t),n))}t.a=function(e){const{metadata:t,banner:n,sections:o}=e;return r.a.createElement(i.a,{title:t&&t.title,description:t&&t.description,wrapperClassName:"template-default"},n&&n.heading&&r.a.createElement("header",{className:"hero hero--primary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,n.heading))),r.a.createElement("main",null,o.map(((e,t)=>r.a.createElement(a,{key:t,heading:e.heading},e.content)))))}},142:function(e,t,n){"use strict";var o=n(148).ReactElementResize;o.ReactElementResize=o,e.exports=o},146:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(137);n(56);t.a=function(e){const{children:t,mode:n,color:o}=e;if(n&&"background"==n)var a="highlight-background",s=o&&{backgroundColor:o};else a="highlight-text",s=o&&{color:o};return r.a.createElement("span",{className:Object(i.a)("component-highlight",a),style:s},t)}},147:function(e,t,n){"use strict";var o=n(0),r=n.n(o),i=n(142),a=n.n(i);n(57);class s extends r.a.Component{constructor(e){super(e),this.imgRef=r.a.createRef();const t=e.src.split("/").slice(-1)[0],n=Math.floor(1e4*Math.random()+1);this.mapID=[t,n,"map"].join("-"),this.src=e.src,this.caption=e.caption,this.maxWidth=e.maxWidth,this.areas=e.areas,this.naturalWidth=null,this.state={displayRatio:1}}init(){if(!this.naturalWidth){var e=this,t=new Image,n=this.imgRef.current;t.onload=function(){e.naturalWidth=t.width,e.setState({displayRatio:n.width/t.width})},t.src=this.src}}resize(){if(this.naturalWidth){var e=this.imgRef.current;this.setState({displayRatio:e.width/this.naturalWidth})}}componentDidMount(){this.init()}render(){return r.a.createElement("figure",{className:"component-imagemap"},r.a.createElement(a.a,{onResize:()=>this.resize()}),r.a.createElement("img",{ref:this.imgRef,src:this.src,useMap:"#"+this.mapID,style:this.maxWidth&&{maxWidth:this.maxWidth}}),r.a.createElement("map",{name:this.mapID,ref:this.mapRef},this.areas.map(((e,t)=>r.a.createElement(c,{key:t,link:e.link,boundary:e.boundary,displayRatio:this.state.displayRatio})))),r.a.createElement("figcaption",null,this.caption))}}function c(e){const{link:t,boundary:n,displayRatio:o}=e;var i="",a=[];return n.topLeft&&n.bottomRight?(i="rect",a=n.topLeft.concat(n.bottomRight)):n.centre&&n.radius?(i="circle",a=n.centre.concat([n.radius])):n.points&&(i="poly",a=[].concat.apply([],n.points)),r.a.createElement("area",{shape:i,coords:a.map((e=>e*o)).join(),href:t})}t.a=s},148:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReactElementResize=void 0;var o=i(n(0)),r=i(n(149));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",border:"none",background:"transparent",pointerEvents:"none",zIndex:-1},b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?m(e):t}(this,p(t).call(this,e)),h(m(n),"state",{width:-1,height:-1,offsetLeft:-1,offsetTop:-1,scrollLeft:-1,scrollTop:-1}),h(m(n),"onContainerRef",(function(e){n.container=e})),h(m(n),"onResize",(function(){var e=n.sensor.contentWindow,t=e.innerWidth,o=e.innerHeight;(0,n.props.onResize)({width:t,height:o}),n.setState({width:t,height:o})})),h(m(n),"onScroll",(function(){var e=n.container,t=e.offsetLeft,o=e.offsetTop,r=e.scrollLeft,i=e.scrollTop;(0,n.props.onScroll)({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:i}),n.setState({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:i})})),h(m(n),"onSensorRef",(function(e){n.sensor=e}));var o=e.debounceTimeout,i=e.debounceOptions,s=e.onResize,c=e.onScroll;return s&&(n.onResizeDebounced=o>-1?(0,r.default)(n.onResize,o,i):n.onResize),c&&(n.onScrollDebounced=o>-1?(0,r.default)(n.onScroll,o,i):n.onScroll),n}var n,i,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(this.sensor.contentWindow.addEventListener("resize",this.onResizeDebounced,!1),this.rafOnResize=window.requestAnimationFrame(this.onResize)),n&&(this.container.addEventListener("scroll",this.onScrollDebounced,!1),this.rafOnScroll=window.requestAnimationFrame(this.onScroll))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(window.cancelAnimationFrame(this.rafOnResize),this.sensor.contentWindow.removeEventListener("resize",this.onResizeDebounced,!1),this.onResizeDebounced.cancel&&this.onResizeDebounced.cancel()),n&&(window.cancelAnimationFrame(this.rafOnScroll),this.container.removeEventListener("scroll",this.onScrollDebounced,!1),this.onScrollDebounced.cancel&&this.onScrollDebounced.cancel())}},{key:"render",value:function(){var e=this.props,t=e.onResize,n=e.onScroll,r=(e.debounceTimeout,e.debounceOptions,e.style),i=e.children,a=u(e,["onResize","onScroll","debounceTimeout","debounceOptions","style","children"]),c=this.state,f=c.width,p=c.height,m=c.offsetLeft,d=c.offsetTop,h=c.scrollLeft,b=c.scrollTop,v=t&&f>-1&&p>-1||n&&m>-1&&d>-1&&h>-1&&b>-1;return o.default.createElement("div",s({ref:this.onContainerRef,style:l({position:"relative"},r)},a),t?o.default.createElement("iframe",{ref:this.onSensorRef,title:"Element resize sensor",style:y}):null,v?i({width:f,height:p,offsetLeft:m,offsetTop:d,scrollLeft:h,scrollTop:b}):null)}}])&&f(n.prototype,i),c&&f(n,c),t}(o.default.Component);t.ReactElementResize=b,h(b,"defaultProps",{onResize:void 0,onScroll:void 0,debounceTimeout:-1,debounceOptions:void 0,style:{},children:function(){return null}})},149:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,p=Math.min,m=function(){return l.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||i.test(e)?a(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,a,s,c,l=0,u=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,l=t,a=e.apply(i,n)}function g(e){return l=e,s=setTimeout(E,t),u?v(e):a}function O(e){var n=e-c;return void 0===c||n>=t||n<0||y&&e-l>=i}function E(){var e=m();if(O(e))return w(e);s=setTimeout(E,function(e){var n=t-(e-c);return y?p(n,i-(e-l)):n}(e))}function w(e){return s=void 0,b&&o?v(e):(o=r=void 0,a)}function S(){var e=m(),n=O(e);if(o=arguments,r=this,c=e,n){if(void 0===s)return g(c);if(y)return s=setTimeout(E,t),v(c)}return void 0===s&&(s=setTimeout(E,t)),a}return t=h(t)||0,d(n)&&(u=!!n.leading,i=(y="maxWait"in n)?f(h(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=r=s=void 0},S.flush=function(){return void 0===s?a:w(m())},S}}).call(this,n(23))},155:function(e,t,n){"use strict";var o=n(0),r=n.n(o);n(58);t.a=function(e){const{src:t,caption:n,maxWidth:o}=e;return r.a.createElement("figure",{className:"component-image"},r.a.createElement("img",{src:t,style:o&&{maxWidth:o}}),r.a.createElement("figcaption",null,n))}}}]);