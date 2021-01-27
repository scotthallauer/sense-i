(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{126:function(e,t,n){"use strict";n.r(t);var o=n(0),i=n.n(o),r=n(131);n(95);var a=function(e){const{children:t,color:n}=e;return i.a.createElement("span",{className:"component-highlight",style:n&&{color:n}},t)},s=n(5),l=n(191),c=n.n(l);function u(e){var t=e.link,n=e.boundary,o=e.displayRatio,r="",a=[];return n.topLeft&&n.bottomRight?(r="rect",a=n.topLeft.concat(n.bottomRight)):n.centre&&n.radius?(r="circle",a=n.centre.concat([n.radius])):n.points&&(r="poly",a=[].concat.apply([],n.points)),i.a.createElement("area",{shape:r,coords:a.map((function(e){return e*o})).join(),href:t})}var f=function(e){function t(t){var n;(n=e.call(this,t)||this).imgRef=i.a.createRef();var o=t.src.split("/").slice(-1)[0],r=Math.floor(1e4*Math.random()+1);return n.mapID=[o,r,"map"].join("-"),n.src=t.src,n.areas=t.areas,n.naturalWidth=null,n.state={displayRatio:1},n}Object(s.a)(t,e);var n=t.prototype;return n.init=function(){if(!this.naturalWidth){var e=this,t=new Image,n=this.imgRef.current;t.onload=function(){e.naturalWidth=t.width,e.setState({displayRatio:n.width/t.width})},t.src=this.src}},n.resize=function(){if(this.naturalWidth){var e=this.imgRef.current;this.setState({displayRatio:e.width/this.naturalWidth})}},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{onResize:function(){return e.resize()}}),i.a.createElement("img",{ref:this.imgRef,onLoad:function(){return e.init()},src:this.src,useMap:"#"+this.mapID}),i.a.createElement("map",{name:this.mapID,ref:this.mapRef},this.areas.map((function(t,n){return i.a.createElement(u,{key:n,link:t.link,boundary:t.boundary,displayRatio:e.state.displayRatio})}))))},t}(i.a.Component),m=n(130),h=(n(96),function(e){function t(t){var n;return(n=e.call(this,t)||this).ref=i.a.createRef(),n.images=t.images,n.options={buttons:!t.options||null==t.options.buttons||t.options.buttons,dots:!t.options||null==t.options.dots||t.options.dots,timer:!t.options||null==t.options.timer||t.options.timer,interval:t.options&&null!=t.options.interval?1e3*t.options.interval:5e3},n.aspectRatio=null,n.timer=null,n.state={selected:0,height:"auto"},n}Object(s.a)(t,e);var n=t.prototype;return n.init=function(){if(null==this.aspectRatio){var e=this,t=new Image;t.onload=function(){e.aspectRatio=t.height/t.width,e.setState({height:e.calcHeight()})},t.src=this.images[0].src}this.startTimer()},n.calcHeight=function(){return null==this.aspectRatio&&this.init(),this.ref.current.offsetWidth*this.aspectRatio},n.resize=function(){null!=this.aspectRatio&&this.setState({height:this.calcHeight()})},n.change=function(e){"next"==e?e=this.state.selected+1:"prev"==e&&(e=this.state.selected-1),e=e<0?this.images.length-1:e%this.images.length,this.startTimer(),this.setState({selected:e})},n.startTimer=function(){if(this.options.timer){this.stopTimer();var e=this;this.timer=setInterval((function(){e.change("next")}),e.options.interval)}},n.stopTimer=function(){null!=this.timer&&clearInterval(this.timer)},n.componentWillUnmount=function(){this.stopTimer()},n.render=function(){var e=this;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,{onResize:function(){return e.resize()}}),i.a.createElement("div",{ref:this.ref,onLoad:function(){return e.init()},className:"component-imagedeck",style:{height:this.state.height}},i.a.createElement("div",{className:Object(m.a)("prev-button",this.options.buttons?"":"hide"),onClick:function(){return e.change("prev")}},"\u2039"),i.a.createElement("div",{className:Object(m.a)("next-button",this.options.buttons?"":"hide"),onClick:function(){return e.change("next")}},"\u203a"),i.a.createElement("div",{className:"image-container",onClick:function(){return e.change("next")}},this.images.map((function(t,n){return i.a.createElement("a",{key:n,href:t.link},i.a.createElement("img",{key:n,src:t.src,"data-selected":n==e.state.selected}))}))),i.a.createElement("div",{className:Object(m.a)("indicator-wrapper",this.options.dots?"":"hide")},i.a.createElement("div",{className:"indicator-container"},this.images.map((function(t,n){return i.a.createElement("div",{className:"indicator-dot",key:n,onClick:function(){return e.change(n)},"data-selected":n==e.state.selected})}))))))},t}(i.a.Component));n(97);var d=function(e){const{title:t,link:n}=e;return i.a.createElement("div",{className:"component-download-button"},i.a.createElement("a",{href:n,target:"_blank",download:!0},i.a.createElement("div",null,t||"Download")))},p=n(137),g={title:"About Us",description:"Background on Sense-i's journey."},b={heading:i.a.createElement(i.a.Fragment,null,"Accelerate The Development Of All Your Systems ",i.a.createElement(a,null,"And Achieve True Business Success!"))},y=[{heading:i.a.createElement(i.a.Fragment,null,"Providing ",i.a.createElement(a,null,"Systems For Success")),content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Since 1985 and the release of the original version of The E-Myth, the Sense-i team has been inspired by Michael Gerber\u2019s vision of successful, highly-organized, innovative and profitable small and medium sized businesses that positively impact the world. His belief that systems play a key role in making this vision a reality has been a guiding principle in all our projects."),i.a.createElement("p",null,"To develop a successful business, owners must implement the systems and processes needed to guide and keep their employees focused on maintaining high performance levels throughout the company. Implementing such systems requires the right combination of;"),i.a.createElement(f,{src:"/img/pages/about-systems.png",areas:[{link:"/",boundary:{topLeft:[100,110],bottomRight:[605,510]}},{link:"/",boundary:{topLeft:[645,110],bottomRight:[1150,510]}},{link:"/",boundary:{centre:[1450,320],radius:200}},{link:"/",boundary:{points:[[90,570],[2270,750],[90,750]]}}]}))},{heading:"Example Slideshow",content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Below is an example of an embedded ImageDeck component."),i.a.createElement(h,{images:[{src:"/img/pages/about-systems.png",link:"/"},{src:"/img/undraw_researching_22gp.svg"},{src:"/img/undraw_dev_focus_b9xo.svg",link:"/docs/"}]}))},{heading:"Example Download",content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Below is an example of an embedded DownloadButton component."),i.a.createElement(d,{title:"Sense-i Installer",link:"/img/logo.png"}))},{heading:"The Challenge Facing Small And Medium Business",content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,'The act of defining an organization\u2019s processes can take several years, not to mention the process of developing and tailoring the software systems needed to control the processes, which in themselves require hundreds of thousands of man-hours to develop. The challenge faced by owners of small and medium sized businesses is that they simply do not have the human, managerial, technical or financial resources to develop and implement the systems they need to succeed. See white paper titled "The small business development trap."'),i.a.createElement("p",null,"And therein lies the opportunity that we at Sense-i realized more than 30 years ago. The need for small and medium-sized growing businesses to have access to the systems, process models and a comprehensive, fully-integrated enterprise-wide information management system at a price they can afford, and in a modular format that allows them to address their unique business needs as they change and grow."))},{heading:i.a.createElement(i.a.Fragment,null,"Real Solutions, ",i.a.createElement(a,null,"Immediate Impact, Rapid Returns")),content:i.a.createElement(i.a.Fragment,null,i.a.createElement("p",null,"Sense-i is uniquely placed to be able to provide you with the education materials, the user training, experienced consultants and the most advanced information management system available today. All tailored to address the specific needs of your business."),i.a.createElement("p",null,"Chat to a Sense-i Advisor, email us at ",i.a.createElement(p.a,{to:"mailto:info@sense-i.co.za"},"info@sense-i.co.za")," or view our systems."))}];t.default=function(){return i.a.createElement(r.a,{metadata:g,banner:b,sections:y})}},131:function(e,t,n){"use strict";var o=n(0),i=n.n(o),r=n(132);n(56);function a(e){const{heading:t,children:n}=e;return i.a.createElement("section",null,i.a.createElement("div",{className:"container"},t&&i.a.createElement("h2",null,t),n))}t.a=function(e){const{metadata:t,banner:n,sections:o}=e;return i.a.createElement(r.a,{title:t&&t.title,description:t&&t.description,wrapperClassName:"template-default"},n&&n.heading&&i.a.createElement("header",{className:"hero hero--primary"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,n.heading))),i.a.createElement("main",null,o.map(((e,t)=>i.a.createElement(a,{key:t,heading:e.heading},e.content)))))}},191:function(e,t,n){"use strict";var o=n(346).ReactElementResize;o.ReactElementResize=o,e.exports=o},346:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ReactElementResize=void 0;var o=r(n(0)),i=r(n(347));function r(e){return e&&e.__esModule?e:{default:e}}function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(n,!0).forEach((function(t){p(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,o,i=function(e,t){if(null==e)return{};var n,o,i={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function f(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function p(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var g={display:"block",position:"absolute",top:0,left:0,width:"100%",height:"100%",overflow:"hidden",border:"none",background:"transparent",pointerEvents:"none",zIndex:-1},b=function(e){function t(e){var n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),n=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?h(e):t}(this,m(t).call(this,e)),p(h(n),"state",{width:-1,height:-1,offsetLeft:-1,offsetTop:-1,scrollLeft:-1,scrollTop:-1}),p(h(n),"onContainerRef",(function(e){n.container=e})),p(h(n),"onResize",(function(){var e=n.sensor.contentWindow,t=e.innerWidth,o=e.innerHeight;(0,n.props.onResize)({width:t,height:o}),n.setState({width:t,height:o})})),p(h(n),"onScroll",(function(){var e=n.container,t=e.offsetLeft,o=e.offsetTop,i=e.scrollLeft,r=e.scrollTop;(0,n.props.onScroll)({offsetLeft:t,offsetTop:o,scrollLeft:i,scrollTop:r}),n.setState({offsetLeft:t,offsetTop:o,scrollLeft:i,scrollTop:r})})),p(h(n),"onSensorRef",(function(e){n.sensor=e}));var o=e.debounceTimeout,r=e.debounceOptions,s=e.onResize,l=e.onScroll;return s&&(n.onResizeDebounced=o>-1?(0,i.default)(n.onResize,o,r):n.onResize),l&&(n.onScrollDebounced=o>-1?(0,i.default)(n.onScroll,o,r):n.onScroll),n}var n,r,l;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),n=t,(r=[{key:"componentDidMount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(this.sensor.contentWindow.addEventListener("resize",this.onResizeDebounced,!1),this.rafOnResize=window.requestAnimationFrame(this.onResize)),n&&(this.container.addEventListener("scroll",this.onScrollDebounced,!1),this.rafOnScroll=window.requestAnimationFrame(this.onScroll))}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.onResize,n=e.onScroll;t&&(window.cancelAnimationFrame(this.rafOnResize),this.sensor.contentWindow.removeEventListener("resize",this.onResizeDebounced,!1),this.onResizeDebounced.cancel&&this.onResizeDebounced.cancel()),n&&(window.cancelAnimationFrame(this.rafOnScroll),this.container.removeEventListener("scroll",this.onScrollDebounced,!1),this.onScrollDebounced.cancel&&this.onScrollDebounced.cancel())}},{key:"render",value:function(){var e=this.props,t=e.onResize,n=e.onScroll,i=(e.debounceTimeout,e.debounceOptions,e.style),r=e.children,a=u(e,["onResize","onScroll","debounceTimeout","debounceOptions","style","children"]),l=this.state,f=l.width,m=l.height,h=l.offsetLeft,d=l.offsetTop,p=l.scrollLeft,b=l.scrollTop,y=t&&f>-1&&m>-1||n&&h>-1&&d>-1&&p>-1&&b>-1;return o.default.createElement("div",s({ref:this.onContainerRef,style:c({position:"relative"},i)},a),t?o.default.createElement("iframe",{ref:this.onSensorRef,title:"Element resize sensor",style:g}):null,y?r({width:f,height:m,offsetLeft:h,offsetTop:d,scrollLeft:p,scrollTop:b}):null)}}])&&f(n.prototype,r),l&&f(n,l),t}(o.default.Component);t.ReactElementResize=b,p(b,"defaultProps",{onResize:void 0,onScroll:void 0,debounceTimeout:-1,debounceOptions:void 0,style:{},children:function(){return null}})},347:function(e,t,n){(function(t){var n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,i=/^0b[01]+$/i,r=/^0o[0-7]+$/i,a=parseInt,s="object"==typeof t&&t&&t.Object===Object&&t,l="object"==typeof self&&self&&self.Object===Object&&self,c=s||l||Function("return this")(),u=Object.prototype.toString,f=Math.max,m=Math.min,h=function(){return c.Date.now()};function d(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function p(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==u.call(e)}(e))return NaN;if(d(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=d(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(n,"");var s=i.test(e);return s||r.test(e)?a(e.slice(2),s?2:8):o.test(e)?NaN:+e}e.exports=function(e,t,n){var o,i,r,a,s,l,c=0,u=!1,g=!1,b=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function y(t){var n=o,r=i;return o=i=void 0,c=t,a=e.apply(r,n)}function v(e){return c=e,s=setTimeout(E,t),u?y(e):a}function w(e){var n=e-l;return void 0===l||n>=t||n<0||g&&e-c>=r}function E(){var e=h();if(w(e))return O(e);s=setTimeout(E,function(e){var n=t-(e-l);return g?m(n,r-(e-c)):n}(e))}function O(e){return s=void 0,b&&o?y(e):(o=i=void 0,a)}function R(){var e=h(),n=w(e);if(o=arguments,i=this,l=e,n){if(void 0===s)return v(l);if(g)return s=setTimeout(E,t),y(l)}return void 0===s&&(s=setTimeout(E,t)),a}return t=p(t)||0,d(n)&&(u=!!n.leading,r=(g="maxWait"in n)?f(p(n.maxWait)||0,t):r,b="trailing"in n?!!n.trailing:b),R.cancel=function(){void 0!==s&&clearTimeout(s),c=0,o=l=i=s=void 0},R.flush=function(){return void 0===s?a:O(h())},R}}).call(this,n(24))}}]);