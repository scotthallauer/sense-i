(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{102:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(122);n(82);function a(e){const{heading:t,children:n}=e;return r.a.createElement("section",null,r.a.createElement("div",{className:"container"},t&&r.a.createElement("h2",null,t),n))}var s=function(e){const{metadata:t,banner:n,sections:o}=e;return r.a.createElement(i.a,{title:t&&t.title,description:t&&t.description,wrapperClassName:"template-default"},n&&n.heading&&r.a.createElement("header",{className:"hero hero--primary"},r.a.createElement("div",{className:"container"},r.a.createElement("h1",null,n.heading))),r.a.createElement("main",null,o.map(((e,t)=>r.a.createElement(a,{key:t,heading:e.heading},e.content)))))};n(83);var l=function(e){const{children:t,color:n}=e;return r.a.createElement("span",{className:"component-highlight",style:n&&{color:n}},t)},c=n(288),u=n.n(c);class f extends r.a.Component{constructor(e){super(e);const t=e.src.split("/").slice(-1)[0],n=Math.floor(1e4*Math.random()+1);this.src=e.src,this.areas=e.areas,this.imgID=[t,n,"img"].join("-"),this.mapID=[t,n,"map"].join("-"),this.naturalWidth=null,this.state={displayRatio:1}}init(){if(!this.naturalWidth){var e=this,t=new Image,n=document.getElementById(this.imgID);t.onload=function(){e.naturalWidth=t.width,e.setState({displayRatio:n.width/t.width})},t.src=this.src}}resize(){if(this.naturalWidth){var e=document.getElementById(this.imgID);this.setState({displayRatio:e.width/this.naturalWidth})}}render(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(u.a,{onResize:()=>this.resize()}),r.a.createElement("img",{id:this.imgID,onLoad:()=>this.init(),src:this.src,useMap:"#"+this.mapID}),r.a.createElement("map",{name:this.mapID},this.areas.map(((e,t)=>r.a.createElement(d,{key:t,link:e.link,boundary:e.boundary,displayRatio:this.state.displayRatio})))))}}function d(e){const{link:t,boundary:n,displayRatio:o}=e;var i="",a=[];return n.topLeft&&n.bottomRight?(i="rect",a=n.topLeft.concat(n.bottomRight)):n.centre&&n.radius?(i="circle",a=n.centre.concat([n.radius])):n.points&&(i="poly",a=[].concat.apply([],n.points)),r.a.createElement("area",{shape:i,coords:a.map((e=>e*o)).join(),href:t})}var h=f,p=n(111);const m={title:"About Us",description:"Background on Sense-i's journey."},y={heading:r.a.createElement(r.a.Fragment,null,"Accelerate The Development Of All Your Systems ",r.a.createElement(l,null,"And Achieve True Business Success!"))},b=[{heading:r.a.createElement(r.a.Fragment,null,"Providing ",r.a.createElement(l,null,"Systems For Success")),content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Since 1985 and the release of the original version of The E-Myth, the Sense-i team has been inspired by Michael Gerber\u2019s vision of successful, highly-organized, innovative and profitable small and medium sized businesses that positively impact the world. His belief that systems play a key role in making this vision a reality has been a guiding principle in all our projects."),r.a.createElement("p",null,"To develop a successful business, owners must implement the systems and processes needed to guide and keep their employees focused on maintaining high performance levels throughout the company. Implementing such systems requires the right combination of;"),r.a.createElement(h,{src:"img/pages/about-systems.png",areas:[{link:"/",boundary:{topLeft:[100,110],bottomRight:[605,510]}},{link:"/",boundary:{topLeft:[645,110],bottomRight:[1150,510]}},{link:"/",boundary:{centre:[1450,320],radius:200}},{link:"/",boundary:{points:[[90,570],[2270,750],[90,750]]}}]}))},{heading:"The Challenge Facing Small And Medium Business",content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,'The act of defining an organization\u2019s processes can take several years, not to mention the process of developing and tailoring the software systems needed to control the processes, which in themselves require hundreds of thousands of man-hours to develop. The challenge faced by owners of small and medium sized businesses is that they simply do not have the human, managerial, technical or financial resources to develop and implement the systems they need to succeed. See white paper titled "The small business development trap."'),r.a.createElement("p",null,"And therein lies the opportunity that we at Sense-i realized more than 30 years ago. The need for small and medium-sized growing businesses to have access to the systems, process models and a comprehensive, fully-integrated enterprise-wide information management system at a price they can afford, and in a modular format that allows them to address their unique business needs as they change and grow."))},{heading:r.a.createElement(r.a.Fragment,null,"Real Solutions, ",r.a.createElement(l,null,"Immediate Impact, Rapid Returns")),content:r.a.createElement(r.a.Fragment,null,r.a.createElement("p",null,"Sense-i is uniquely placed to be able to provide you with the education materials, the user training, experienced consultants and the most advanced information management system available today. All tailored to address the specific needs of your business."),r.a.createElement("p",null,"Chat to a Sense-i Advisor, email us at ",r.a.createElement(p.a,{to:"mailto:info@sense-i.co.za"},"info@sense-i.co.za")," or view our systems."))}];t.default=function(){return r.a.createElement(s,{metadata:m,banner:y,sections:b})}},288:function(e,t,n){"use strict";var o=n(289).ReactElementResize;o.ReactElementResize=o,e.exports=o},289:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReactElementResize=void 0;var o=i(n(0)),r=i(n(290));function i(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){m(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",border:"none",background:"transparent",pointerEvents:"none",zIndex:-1},b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?h(e):t}(this,d(t).call(this,e)),m(h(n),"state",{width:-1,height:-1,offsetLeft:-1,offsetTop:-1,scrollLeft:-1,scrollTop:-1}),m(h(n),"onContainerRef",(function(e){n.container=e})),m(h(n),"onResize",(function(){var e=n.sensor.contentWindow,t=e.innerWidth,o=e.innerHeight;(0,n.props.onResize)({width:t,height:o}),n.setState({width:t,height:o})})),m(h(n),"onScroll",(function(){var e=n.container,t=e.offsetLeft,o=e.offsetTop,r=e.scrollLeft,i=e.scrollTop;(0,n.props.onScroll)({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:i}),n.setState({offsetLeft:t,offsetTop:o,scrollLeft:r,scrollTop:i})})),m(h(n),"onSensorRef",(function(e){n.sensor=e}));var o=e.debounceTimeout,i=e.debounceOptions,s=e.onResize,l=e.onScroll;return s&&(n.onResizeDebounced=o>-1?(0,r.default)(n.onResize,o,i):n.onResize),l&&(n.onScrollDebounced=o>-1?(0,r.default)(n.onScroll,o,i):n.onScroll),n}var n,i,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),n=t,(i=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(this.sensor.contentWindow.addEventListener("resize",this.onResizeDebounced,!1),this.rafOnResize=window.requestAnimationFrame(this.onResize)),n&&(this.container.addEventListener("scroll",this.onScrollDebounced,!1),this.rafOnScroll=window.requestAnimationFrame(this.onScroll))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(window.cancelAnimationFrame(this.rafOnResize),this.sensor.contentWindow.removeEventListener("resize",this.onResizeDebounced,!1),this.onResizeDebounced.cancel&&this.onResizeDebounced.cancel()),n&&(window.cancelAnimationFrame(this.rafOnScroll),this.container.removeEventListener("scroll",this.onScrollDebounced,!1),this.onScrollDebounced.cancel&&this.onScrollDebounced.cancel())}},{key:"render",value:function(){var e=this.props,t=e.onResize,n=e.onScroll,r=(e.debounceTimeout,e.debounceOptions,e.style),i=e.children,a=u(e,["onResize","onScroll","debounceTimeout","debounceOptions","style","children"]),l=this.state,f=l.width,d=l.height,h=l.offsetLeft,p=l.offsetTop,m=l.scrollLeft,b=l.scrollTop,v=t&&f>-1&&d>-1||n&&h>-1&&p>-1&&m>-1&&b>-1;return o.default.createElement("div",s({ref:this.onContainerRef,style:c({position:"relative"},r)},a),t?o.default.createElement("iframe",{ref:this.onSensorRef,title:"Element resize sensor",style:y}):null,v?i({width:f,height:d,offsetLeft:h,offsetTop:p,scrollLeft:m,scrollTop:b}):null)}}])&&f(n.prototype,i),l&&f(n,l),t}(o.default.Component);t.ReactElementResize=b,m(b,"defaultProps",{onResize:void 0,onScroll:void 0,debounceTimeout:-1,debounceOptions:void 0,style:{},children:function(){return null}})},290:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,i=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,d=Math.min,h=function(){return c.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function m(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(p(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=p(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=r.test(e);return s||i.test(e)?a(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,r,i,a,s,l,c=0,u=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=o,i=r;return o=r=void 0,c=t,a=e.apply(i,n)}function g(e){return c=e,s=setTimeout(E,t),u?v(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||y&&e-c>=i}function E(){var e=h();if(w(e))return O(e);s=setTimeout(E,function(e){var n=t-(e-l);return y?d(n,i-(e-c)):n}(e))}function O(e){return s=void 0,b&&o?v(e):(o=r=void 0,a)}function S(){var e=h(),n=w(e);if(o=arguments,r=this,l=e,n){if(void 0===s)return g(l);if(y)return s=setTimeout(E,t),v(l)}return void 0===s&&(s=setTimeout(E,t)),a}return t=m(t)||0,p(n)&&(u=!!n.leading,i=(y="maxWait"in n)?f(m(n.maxWait)||0,t):i,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=r=s=void 0},S.flush=function(){return void 0===s?a:O(h())},S}}).call(this,n(23))}}]);