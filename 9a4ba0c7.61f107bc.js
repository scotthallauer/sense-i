(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{116:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(133);n(95);function a(e){var t=e.heading,n=e.children;return i.a.createElement("section",null,i.a.createElement("div",{className:"container"},t&&i.a.createElement("h2",null,t),n))}var s=function(e){var t=e.metadata,n=e.banner,o=e.sections;return i.a.createElement(r.a,{title:t&&t.title,description:t&&t.description,wrapperClassName:"template-default"},n&&n.heading&&i.a.createElement("header",{className:"hero hero--primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,n.heading))),i.a.createElement("main",null,o.map((function(e,t){return i.a.createElement(a,{key:t,heading:e.heading},e.content)}))))};n(96);var c=function(e){var t=e.children,n=e.color;return i.a.createElement("span",{className:"component-highlight",style:n&&{color:n}},t)},l=n(4),u=n(167),f=n.n(u);function h(e){var t=e.link,n=e.boundary,o=e.displayRatio,r="",a=[];return n.topLeft&&n.bottomRight?(r="rect",a=n.topLeft.concat(n.bottomRight)):n.centre&&n.radius?(r="circle",a=n.centre.concat([n.radius])):n.points&&(r="poly",a=[].concat.apply([],n.points)),i.a.createElement("area",{shape:r,coords:a.map((function(e){return e*o})).join(),href:t})}var d=function(e){function t(t){var n;n=e.call(this,t)||this;var o=t.src.split("/").slice(-1)[0],i=Math.floor(1e4*Math.random()+1);return n.src=t.src,n.areas=t.areas,n.imgID=[o,i,"img"].join("-"),n.mapID=[o,i,"map"].join("-"),n.naturalWidth=null,n.state={displayRatio:1},n}Object(l.a)(t,e);var n=t.prototype;return n.init=function(){if(!this.naturalWidth){var e=this,t=new Image,n=document.getElementById(this.imgID);t.onload=function(){e.naturalWidth=t.width,e.setState({displayRatio:n.width/t.width})},t.src=this.src}},n.resize=function(){if(this.naturalWidth){var e=document.getElementById(this.imgID);this.setState({displayRatio:e.width/this.naturalWidth})}},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{onResize:function(){return e.resize()}}),i.a.createElement("img",{id:this.imgID,onLoad:function(){return e.init()},src:this.src,useMap:"#"+this.mapID}),i.a.createElement("map",{name:this.mapID},this.areas.map((function(t,n){return i.a.createElement(h,{key:n,link:t.link,boundary:t.boundary,displayRatio:e.state.displayRatio})}))))},t}(i.a.Component),m=n(120),p=(n(97),function(e){function t(t){var n;n=e.call(this,t)||this;var o=Math.floor(1e4*Math.random()+1);return n.id=["imagedeck",o].join("-"),n.src=t.src,n.options={buttons:!t.options||null==t.options.buttons||t.options.buttons,dots:!t.options||null==t.options.dots||t.options.dots,timer:!t.options||null==t.options.timer||t.options.timer,interval:t.options&&null!=t.options.interval?1e3*t.options.interval:5e3},n.aspectRatio=null,n.timer=null,n.state={selected:0,height:"auto"},n}Object(l.a)(t,e);var n=t.prototype;return n.init=function(){if(null==this.aspectRatio){var e=this,t=new Image;t.onload=function(){e.aspectRatio=t.height/t.width,e.setState({height:e.calcHeight()})},t.src=this.src[0]}this.startTimer()},n.calcHeight=function(){return null!=this.aspectRatio?document.getElementById(this.id).offsetWidth*this.aspectRatio:"auto"},n.resize=function(){null!=this.aspectRatio&&this.setState({height:this.calcHeight()})},n.change=function(e){"next"==e?e=this.state.selected+1:"prev"==e&&(e=this.state.selected-1),e=e<0?this.src.length-1:e%this.src.length,this.startTimer(),this.setState({selected:e})},n.startTimer=function(){if(this.options.timer){this.stopTimer();var e=this;this.timer=setInterval((function(){e.change("next")}),e.options.interval)}},n.stopTimer=function(){null!=this.timer&&clearInterval(this.timer)},n.componentWillUnmount=function(){this.stopTimer()},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(f.a,{onResize:function(){return e.resize()}}),i.a.createElement("div",{id:this.id,onLoad:function(){return e.init()},className:"component-imagedeck",style:{height:this.state.height}},i.a.createElement("div",{className:Object(m.a)("prev-button",this.options.buttons?"":"hide"),onClick:function(){return e.change("prev")}},"\u2039"),i.a.createElement("div",{className:Object(m.a)("next-button",this.options.buttons?"":"hide"),onClick:function(){return e.change("next")}},"\u203a"),i.a.createElement("div",{className:"image-container",onClick:function(){return e.change("next")}},this.src.map((function(t,n){return i.a.createElement("img",{key:n,src:t,"data-selected":n==e.state.selected})}))),i.a.createElement("div",{className:Object(m.a)("indicator-wrapper",this.options.dots?"":"hide")},i.a.createElement("div",{className:"indicator-container"},this.src.map((function(t,n){return i.a.createElement("div",{className:"indicator-dot",key:n,onClick:function(){return e.change(n)},"data-selected":n==e.state.selected})}))))))},t}(i.a.Component)),y=n(124),b={title:"About Us",description:"Background on Sense-i's journey."},g={heading:i.a.createElement(i.a.Fragment,null,"Accelerate The Development Of All Your Systems ",i.a.createElement(c,null,"And Achieve True Business Success!"))},v=[{heading:i.a.createElement(i.a.Fragment,null,"Providing ",i.a.createElement(c,null,"Systems For Success")),content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Since 1985 and the release of the original version of The E-Myth, the Sense-i team has been inspired by Michael Gerber\u2019s vision of successful, highly-organized, innovative and profitable small and medium sized businesses that positively impact the world. His belief that systems play a key role in making this vision a reality has been a guiding principle in all our projects."),i.a.createElement("p",null,"To develop a successful business, owners must implement the systems and processes needed to guide and keep their employees focused on maintaining high performance levels throughout the company. Implementing such systems requires the right combination of;"),i.a.createElement(d,{src:"img/pages/about-systems.png",areas:[{link:"/",boundary:{topLeft:[100,110],bottomRight:[605,510]}},{link:"/",boundary:{topLeft:[645,110],bottomRight:[1150,510]}},{link:"/",boundary:{centre:[1450,320],radius:200}},{link:"/",boundary:{points:[[90,570],[2270,750],[90,750]]}}]}))},{heading:"Example Slideshow",content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Below is an example of an embedded ImageDeck component."),i.a.createElement(p,{src:["img/pages/about-systems.png","img/undraw_researching_22gp.svg","img/undraw_dev_focus_b9xo.svg"]}))},{heading:"The Challenge Facing Small And Medium Business",content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,'The act of defining an organization\u2019s processes can take several years, not to mention the process of developing and tailoring the software systems needed to control the processes, which in themselves require hundreds of thousands of man-hours to develop. The challenge faced by owners of small and medium sized businesses is that they simply do not have the human, managerial, technical or financial resources to develop and implement the systems they need to succeed. See white paper titled "The small business development trap."'),i.a.createElement("p",null,"And therein lies the opportunity that we at Sense-i realized more than 30 years ago. The need for small and medium-sized growing businesses to have access to the systems, process models and a comprehensive, fully-integrated enterprise-wide information management system at a price they can afford, and in a modular format that allows them to address their unique business needs as they change and grow."))},{heading:i.a.createElement(i.a.Fragment,null,"Real Solutions, ",i.a.createElement(c,null,"Immediate Impact, Rapid Returns")),content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Sense-i is uniquely placed to be able to provide you with the education materials, the user training, experienced consultants and the most advanced information management system available today. All tailored to address the specific needs of your business."),i.a.createElement("p",null,"Chat to a Sense-i Advisor, email us at ",i.a.createElement(y.a,{to:"mailto:info@sense-i.co.za"},"info@sense-i.co.za")," or view our systems."))}];t.default=function(){return i.a.createElement(s,{metadata:b,banner:g,sections:v})}},167:function(e,t,n){"use strict";var o=n(351).ReactElementResize;o.ReactElementResize=o,e.exports=o},351:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReactElementResize=void 0;var o=r(n(0)),i=r(n(352));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var y={display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",border:"none",background:"transparent",pointerEvents:"none",zIndex:-1},b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?d(e):t}(this,h(t).call(this,e)),p(d(n),"state",{width:-1,height:-1,offsetLeft:-1,offsetTop:-1,scrollLeft:-1,scrollTop:-1}),p(d(n),"onContainerRef",(function(e){n.container=e})),p(d(n),"onResize",(function(){var e=n.sensor.contentWindow,t=e.innerWidth,o=e.innerHeight;(0,n.props.onResize)({width:t,height:o}),n.setState({width:t,height:o})})),p(d(n),"onScroll",(function(){var e=n.container,t=e.offsetLeft,o=e.offsetTop,i=e.scrollLeft,r=e.scrollTop;(0,n.props.onScroll)({offsetLeft:t,offsetTop:o,scrollLeft:i,scrollTop:r}),n.setState({offsetLeft:t,offsetTop:o,scrollLeft:i,scrollTop:r})})),p(d(n),"onSensorRef",(function(e){n.sensor=e}));var o=e.debounceTimeout,r=e.debounceOptions,s=e.onResize,c=e.onScroll;return s&&(n.onResizeDebounced=o>-1?(0,i.default)(n.onResize,o,r):n.onResize),c&&(n.onScrollDebounced=o>-1?(0,i.default)(n.onScroll,o,r):n.onScroll),n}var n,r,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(this.sensor.contentWindow.addEventListener("resize",this.onResizeDebounced,!1),this.rafOnResize=window.requestAnimationFrame(this.onResize)),n&&(this.container.addEventListener("scroll",this.onScrollDebounced,!1),this.rafOnScroll=window.requestAnimationFrame(this.onScroll))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(window.cancelAnimationFrame(this.rafOnResize),this.sensor.contentWindow.removeEventListener("resize",this.onResizeDebounced,!1),this.onResizeDebounced.cancel&&this.onResizeDebounced.cancel()),n&&(window.cancelAnimationFrame(this.rafOnScroll),this.container.removeEventListener("scroll",this.onScrollDebounced,!1),this.onScrollDebounced.cancel&&this.onScrollDebounced.cancel())}},{key:"render",value:function(){var e=this.props,t=e.onResize,n=e.onScroll,i=(e.debounceTimeout,e.debounceOptions,e.style),r=e.children,a=u(e,["onResize","onScroll","debounceTimeout","debounceOptions","style","children"]),c=this.state,f=c.width,h=c.height,d=c.offsetLeft,m=c.offsetTop,p=c.scrollLeft,b=c.scrollTop,g=t&&f>-1&&h>-1||n&&d>-1&&m>-1&&p>-1&&b>-1;return o.default.createElement("div",s({ref:this.onContainerRef,style:l({position:"relative"},i)},a),t?o.default.createElement("iframe",{ref:this.onSensorRef,title:"Element resize sensor",style:y}):null,g?r({width:f,height:h,offsetLeft:d,offsetTop:m,scrollLeft:p,scrollTop:b}):null)}}])&&f(n.prototype,r),c&&f(n,c),t}(o.default.Component);t.ReactElementResize=b,p(b,"defaultProps",{onResize:void 0,onScroll:void 0,debounceTimeout:-1,debounceOptions:void 0,style:{},children:function(){return null}})},352:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,l=s||c||Function("return this")(),u=Object.prototype.toString,f=Math.max,h=Math.min,d=function(){return l.Date.now()};function m(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(m(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=m(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=i.test(e);return s||r.test(e)?a(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,i,r,a,s,c,l=0,u=!1,y=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function g(t){var n=o,r=i;return o=i=void 0,l=t,a=e.apply(r,n)}function v(e){return l=e,s=setTimeout(w,t),u?g(e):a}function E(e){var n=e-c;return void 0===c||n>=t||n<0||y&&e-l>=r}function w(){var e=d();if(E(e))return O(e);s=setTimeout(w,function(e){var n=t-(e-c);return y?h(n,r-(e-l)):n}(e))}function O(e){return s=void 0,b&&o?g(e):(o=i=void 0,a)}function S(){var e=d(),n=E(e);if(o=arguments,i=this,c=e,n){if(void 0===s)return v(c);if(y)return s=setTimeout(w,t),g(c)}return void 0===s&&(s=setTimeout(w,t)),a}return t=p(t)||0,m(n)&&(u=!!n.leading,r=(y="maxWait"in n)?f(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),S.cancel=function(){void 0!==s&&clearTimeout(s),l=0,o=c=i=s=void 0},S.flush=function(){return void 0===s?a:O(d())},S}}).call(this,n(23))}}]);