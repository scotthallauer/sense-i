(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{121:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),a=n(142),i=n(153),s=n(161),c=n(148),l=n(145);const u={title:"Financial Management System"},f={heading:r.a.createElement(r.a.Fragment,null,"Real-Time, Comprehensive Financial Controls ",r.a.createElement(i.a,null,"Ensure Continued Profitability And Positive Cash Flow"))},m=[{heading:r.a.createElement(r.a.Fragment,null,"Complete Financial Control ",r.a.createElement(i.a,null,"Drives Your Profits & Cash-flow!")),content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"For your to achieve business success you must ensure it is consistently profitable and generates a steady and positive cash-flow."),r.a.createElement("p",null,"Having access to accurate and up-to-date financial information in real-time is crucial to business success. Erratic profitability and inconsistent cash-flow hampers your ability to keep day to operations running and places your business at serious risk. Poor cashflow also forces you to have to make short-term decisions about prioritizing orders, limit your ability to buy the materials you need, which in turn leads to down-time, increased costs and even the late delivery customers' orders. This disrupts the smooth flow of orders through a company in ways that reduce profitability, undermine staff morale and limits your ability to grow your business and achieve success you strive for."),r.a.createElement("p",null,"The Sense-i Financial Management System consists of 9 key process areas ",r.a.createElement(i.a,{mode:"background"},"that provide you with complete control of all the transactions in your business and the real-time financial reports and analysis you need to manage every aspect of your company's continued financial success"),"."),r.a.createElement("p",null,"All the modules in the System integrate seamlessly and in real-time with all the other modules in the overall Sense-i Enterprise and Operations Management System."),r.a.createElement(c.a,{src:"/img/pages/systems/financial-management/modules.png",caption:"A Complete and Fully Integrated Accounting System Gives You Total Financial Control",maxWidth:"700px",areas:[{link:"/",boundary:{topLeft:[30,202],bottomRight:[482,465]}}]}),r.a.createElement("p",null,"The system gives you complete control of all your banking transactions. You can quickly capture customer receipts, supplier payments and bank charges. And you can easily reconcile your bank accounts to ensure the information in your system is accurate and up-to-date."),r.a.createElement("p",null,"You can easily manage and control your debtors and creditors. For your creditors you can quickly reconcile supplier accounts and process payments. For customers, easily generate statements and produce aging reports."),r.a.createElement("p",null,"And the system enables you to efficiently process all your journals and generate a complete set of financial reports. This includes a Trial Balance, Balance Sheet, Income Statement and Cash Statement and complete audit trails."),r.a.createElement(s.a,{src:"/img/pages/systems/financial-management/screenshot.png",maxWidth:"800px"}),r.a.createElement("p",null,"Comprehensive, Real-Time Financial Controls help you to manage your customer receipts and control the timing of all the payments you need to make to ensure that the continued smooth flow of orders and resources through your business."),r.a.createElement("p",null,"And when your Financial Management System is fully integrated with your Operations Management System then ",r.a.createElement(i.a,{mode:"background"},"you have real-time access to the cash-flow implications of every Sales Order, Purchase Order, Customer and Supplier Delivery as they occur"),"."),r.a.createElement("p",null,"What is more, partial deliveries and changing due dates enable you to assess the financial impact of changes to your financial position as they occur, without having to spend time doing calculations or compiling reports."),r.a.createElement("p",null,"Powerful audit reports give you unparalleled access o detailed information about every transaction in your business and allows you to easily detect mistakes, theft and fraud and prevent unnecessary expenses and loss."),r.a.createElement("p",null,"For more information on how these financial controls systems that can help you achieve success and gain control, profit and freedom in your business click on each of the five links above or contact us on ",r.a.createElement(l.a,{to:"mailto:info@sense-i.co"},"info@sense-i.co"),"."))}];t.default=function(){return r.a.createElement(a.a,{metadata:u,banner:f,sections:m})}},142:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(143);n(56);function i(e){const{heading:t,children:n}=e;return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},t&&r.a.createElement("h2",null,t),n))}t.a=function(e){const{metadata:t,banner:n,sections:o}=e;return r.a.createElement(a.a,{title:t&&t.title,description:t&&t.description,wrapperClassName:"template-default"},n&&n.heading&&r.a.createElement("header",{className:"hero hero--primary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,n.heading))),r.a.createElement("main",null,o.map(((e,t)=>r.a.createElement(i,{key:t,heading:e.heading},e.content)))))}},144:function(e,t,n){"use strict";var o=n(149).ReactElementResize;o.ReactElementResize=o,e.exports=o},148:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(144),i=n.n(a);n(57);class s extends r.a.Component{constructor(e){super(e),this.imgRef=r.a.createRef();const t=e.src.split("/").slice(-1)[0],n=Math.floor(1e4*Math.random()+1);this.mapID=[t,n,"map"].join("-"),this.src=e.src,this.caption=e.caption,this.maxWidth=e.maxWidth,this.areas=e.areas,this.naturalWidth=null,this.state={displayRatio:1}}init(){if(!this.naturalWidth){var e=this,t=new Image,n=this.imgRef.current;t.onload=function(){e.naturalWidth=t.width,e.setState({displayRatio:n.width/t.width})},t.src=this.src}}resize(){if(this.naturalWidth){var e=this.imgRef.current;this.setState({displayRatio:e.width/this.naturalWidth})}}componentDidMount(){this.init()}render(){return r.a.createElement("figure",{className:"component-imagemap"},r.a.createElement(i.a,{onResize:()=>this.resize()}),r.a.createElement("img",{ref:this.imgRef,src:this.src,useMap:"#"+this.mapID,style:this.maxWidth&&{maxWidth:this.maxWidth}}),r.a.createElement("map",{name:this.mapID,ref:this.mapRef},this.areas.map(((e,t)=>r.a.createElement(c,{key:t,link:e.link,boundary:e.boundary,displayRatio:this.state.displayRatio})))),r.a.createElement("figcaption",null,this.caption))}}function c(e){const{link:t,boundary:n,displayRatio:o}=e;var a="",i=[];return n.topLeft&&n.bottomRight?(a="rect",i=n.topLeft.concat(n.bottomRight)):n.centre&&n.radius?(a="circle",i=n.centre.concat([n.radius])):n.points&&(a="poly",i=[].concat.apply([],n.points)),r.a.createElement("area",{shape:a,coords:i.map((e=>e*o)).join(),href:t})}t.a=s},149:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReactElementResize=void 0;var o=a(n(0)),r=a(n(150));function a(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){h(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function h(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",border:"none",background:"transparent",pointerEvents:"none",zIndex:-1},b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==i(t)&&"function"!=typeof t?p(e):t}(this,m(t).call(this,e)),h(p(n),"state",{width:-1,height:-1,offsetLeft:-1,offsetTop:-1,scrollLeft:-1,scrollTop:-1}),h(p(n),"onContainerRef",(function(e){n.container=e})),h(p(n),"onResize",(function(){var e=n.sensor.contentWindow,t=e.innerWidth,o=e.innerHeight;(0,n.props.onResize)({width:t,height:o}),n.setState({width:t,height:o})})),h(p(n),"onScroll",(function(){var e=n.container,t=e.offsetLeft,o=e.offsetTop,r=e.scrollLeft,a=e.scrollTop;(0,n.props.onScroll)({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:a}),n.setState({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:a})})),h(p(n),"onSensorRef",(function(e){n.sensor=e}));var o=e.debounceTimeout,a=e.debounceOptions,s=e.onResize,c=e.onScroll;return s&&(n.onResizeDebounced=o>-1?(0,r.default)(n.onResize,o,a):n.onResize),c&&(n.onScrollDebounced=o>-1?(0,r.default)(n.onScroll,o,a):n.onScroll),n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(a=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(this.sensor.contentWindow.addEventListener("resize",this.onResizeDebounced,!1),this.rafOnResize=window.requestAnimationFrame(this.onResize)),n&&(this.container.addEventListener("scroll",this.onScrollDebounced,!1),this.rafOnScroll=window.requestAnimationFrame(this.onScroll))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(window.cancelAnimationFrame(this.rafOnResize),this.sensor.contentWindow.removeEventListener("resize",this.onResizeDebounced,!1),this.onResizeDebounced.cancel&&this.onResizeDebounced.cancel()),n&&(window.cancelAnimationFrame(this.rafOnScroll),this.container.removeEventListener("scroll",this.onScrollDebounced,!1),this.onScrollDebounced.cancel&&this.onScrollDebounced.cancel())}},{key:"render",value:function(){var e=this.props,t=e.onResize,n=e.onScroll,r=(e.debounceTimeout,e.debounceOptions,e.style),a=e.children,i=u(e,["onResize","onScroll","debounceTimeout","debounceOptions","style","children"]),c=this.state,f=c.width,m=c.height,p=c.offsetLeft,d=c.offsetTop,h=c.scrollLeft,b=c.scrollTop,g=t&&f>-1&&m>-1||n&&p>-1&&d>-1&&h>-1&&b>-1;return o.default.createElement("div",s({ref:this.onContainerRef,style:l({position:"relative"},r)},i),t?o.default.createElement("iframe",{ref:this.onSensorRef,title:"Element resize sensor",style:y}):null,g?a({width:f,height:m,offsetLeft:p,offsetTop:d,scrollLeft:h,scrollTop:b}):null)}}])&&f(n.prototype,a),c&&f(n,c),t}(o.default.Component);t.ReactElementResize=b,h(b,"defaultProps",{onResize:void 0,onScroll:void 0,debounceTimeout:-1,debounceOptions:void 0,style:{},children:function(){return null}})},150:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,a=/^0o[0-7]+$/i,i=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,m=Math.min,p=function(){return l.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function h(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||a.test(e)?i(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,a,i,s,c,l=0,u=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,a=r;return o=r=void 0,l=t,i=e.apply(a,n)}function v(e){return l=e,s=setTimeout(E,t),u?g(e):i}function w(e){var n=e-c;return void 0===c||n>=t||n<0||y&&e-l>=a}function E(){var e=p();if(w(e))return O(e);s=setTimeout(E,function(e){var n=t-(e-c);return y?m(n,a-(e-l)):n}(e))}function O(e){return s=void 0,b&&o?g(e):(o=r=void 0,i)}function S(){var e=p(),n=w(e);if(o=arguments,r=this,c=e,n){if(void 0===s)return v(c);if(y)return s=setTimeout(E,t),g(c)}return void 0===s&&(s=setTimeout(E,t)),i}return t=h(t)||0,d(n)&&(u=!!n.leading,a=(y="maxWait"in n)?f(h(n.maxWait)||0,t):a,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=r=s=void 0},S.flush=function(){return void 0===s?i:O(p())},S}}).call(this,n(23))},153:function(e,t,n){"use strict";var o=n(0),r=n.n(o),a=n(140);n(58);t.a=function(e){const{children:t,mode:n,color:o}=e;if(n&&"background"==n)var i="highlight-background",s=o&&{backgroundColor:o};else i="highlight-text",s=o&&{color:o};return r.a.createElement("span",{className:Object(a.a)("component-highlight",i),style:s},t)}},161:function(e,t,n){"use strict";var o=n(0),r=n.n(o);n(59);t.a=function(e){const{src:t,caption:n,maxWidth:o}=e;return r.a.createElement("figure",{className:"component-image"},r.a.createElement("img",{src:t,style:o&&{maxWidth:o}}),r.a.createElement("figcaption",null,n))}}}]);