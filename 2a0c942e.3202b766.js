(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{136:function(e,t,A){"use strict";A.d(t,"a",(function(){return h}));var a=A(0),r=A.n(a);function n(e,t,A){return t in e?Object.defineProperty(e,t,{value:A,enumerable:!0,configurable:!0,writable:!0}):e[t]=A,e}function o(e,t){var A=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),A.push.apply(A,a)}return A}function i(e){for(var t=1;t<arguments.length;t++){var A=null!=arguments[t]?arguments[t]:{};t%2?o(Object(A),!0).forEach((function(t){n(e,t,A[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(A)):o(Object(A)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(A,t))}))}return e}function c(e,t){if(null==e)return{};var A,a,r=function(e,t){if(null==e)return{};var A,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)A=n[a],t.indexOf(A)>=0||(r[A]=e[A]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)A=n[a],t.indexOf(A)>=0||Object.prototype.propertyIsEnumerable.call(e,A)&&(r[A]=e[A])}return r}var f=r.a.createContext({}),s=function(e){var t=r.a.useContext(f),A=t;return e&&(A="function"==typeof e?e(t):i(i({},t),e)),A},l={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var A=e.components,a=e.mdxType,n=e.originalType,o=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(A),h=a,w=p["".concat(o,".").concat(h)]||p[h]||l[h]||n;return A?r.a.createElement(w,i(i({ref:t},f),{},{components:A})):r.a.createElement(w,i({ref:t},f))}));function h(e,t){var A=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var n=A.length,o=new Array(n);o[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var f=2;f<n;f++)o[f]=A[f];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,A)}p.displayName="MDXCreateElement"},268:function(e,t,A){"use strict";A.r(t),t.default="data:image/png;base64,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"},269:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image3-43e5cab59380cca388fa6b1673897ce6.jpg"},270:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image5-a9812049d594be588d8069e129a34e8e.jpg"},271:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image7-22774b336e18b3c8dbf8d432fbd8f149.jpg"},272:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image9-46f733421f70474de976b2d0bf63b336.jpg"},273:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image11-b38292ffcaa58ecd9885bcdc4ff6d7cc.jpg"},274:function(e,t,A){"use strict";A.r(t),t.default=A.p+"assets/images/image13-d39d6d94f52f34121c1623f027104e59.jpg"},275:function(e,t,A){"use strict";A.r(t),t.default="data:image/jpeg;base64,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"},88:function(e,t,A){"use strict";A.r(t),A.d(t,"frontMatter",(function(){return o})),A.d(t,"metadata",(function(){return i})),A.d(t,"toc",(function(){return c})),A.d(t,"default",(function(){return s}));var a=A(3),r=A(7),n=(A(0),A(136)),o={id:"SAF-149",title:"Purchase Order Receipt (SAF-149)",sidebar_label:"Purchase Order Receipt",slug:"/149"},i={unversionedId:"SAF-149",id:"SAF-149",isDocsHomePage:!1,title:"Purchase Order Receipt (SAF-149)",description:"Step-By-Step Guideline",source:"@site/docs\\SAF-149.md",slug:"/149",permalink:"/docs/149",editUrl:"https://github.com/sense-i-co/docs/edit/main/docs/SAF-149.md",version:"current",sidebar_label:"Purchase Order Receipt",sidebar:"docs",previous:{title:"Supplier Information (SAF-1203)",permalink:"/docs/1203"},next:{title:"Purchase Order Invoice (SAF-152)",permalink:"/docs/152"}},c=[{value:"Step-By-Step Guideline",id:"step-by-step-guideline",children:[]}],f={toc:c};function s(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(n.a)("wrapper",Object(a.a)({},f,o,{components:t,mdxType:"MDXLayout"}),Object(n.a)("h2",{id:"step-by-step-guideline"},"Step-By-Step Guideline"),Object(n.a)("hr",null),Object(n.a)("ol",null,Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Click on the ",Object(n.a)("strong",{parentName:"p"},"Supplier")," option in the Main Menu.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Click on the ",Object(n.a)("strong",{parentName:"p"},"Purchase Order")," item on the Drop Down Menu.  "))),Object(n.a)("p",null,Object(n.a)("img",{src:A(268).default}),"  "),Object(n.a)("p",null,'The system will open a screen titled "Maintain Purchase Order." This\nscreen lists all of the Purchase Orders that have already been captured\nin the system within the From and To Date specified in the Search Panel.',Object(n.a)("br",{parentName:"p"}),"\n","Note that you can change the information displayed in this list by\nchanging the dates and other information in the Search Criteria Panel\nabove the list of orders.  "),Object(n.a)("p",null,Object(n.a)("img",{src:A(269).default}),"  "),Object(n.a)("ol",{start:3},Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Click on the Purchase Order in the list for which you wish to\ncapture a Receipt.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Click on the Receive button on the Form Bar to view a list of\nreceipts for this order."))),Object(n.a)("p",null,'The system will open a screen titled "Receipts for Purchase Order\nNumber XYZ." This screen will show a list of all the Purchase Order\nReceipts (in other words the previous deliveries by suppliers) that\nhave been captured for this Purchase Order. If this is the first time\nyou are receiving materials against this Purchase Order the system\nwill obviously list no Purchase Order Receipts.'),Object(n.a)("ol",{start:5},Object(n.a)("li",{parentName:"ol"},"Click on the Add button on the form bar to open the Purchase Order\nReceipt screen.")),Object(n.a)("p",null,Object(n.a)("img",{src:A(270).default}),"  "),Object(n.a)("p",null,'The system will display a screen titled "Add Purchase Order Receipt."\nThis screen will automatically list all of the outstanding items\nagainst the Purchase Order you have selected.  '),Object(n.a)("ol",{start:6},Object(n.a)("li",{parentName:"ol"},"You can enter the Supplier's Delivery Note Number in the Supplier\nReference field if you wish to keep track of and match the computer\nrecords to the Supplier's documents.")),Object(n.a)("p",null,Object(n.a)("img",{src:A(271).default}),"  "),Object(n.a)("ol",{start:7},Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Note the grid at beneath the Order\nHeader lists the item code, the item name and the outstanding\nquantity for each item on the Purchase Order. As you capture\nreceipts against this Purchase Order the system will automatically\nupdate the Outstanding Quantity to make it easy for you to keep\ntrack of what items your suppliers must deliver.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"You will need to check and count the items delivered by your\nsupplier and then once you have obtained the correct quantity, enter\nthe quantity received in the Quantity column for each item.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"When you have completed capturing the quantity of each item\nreceived, you need to remove items that the supplier has not\ndelivered. To do this, click the Remove Item button on the form bar.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Once you have completed capturing the details of the receipt, click\nthe Close button on the form bar.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"The system will display a confirmation dialog asking you if you wish\nto activate the Purchase Order Receipt. If you are confident that\nall the information is accurate, click the Yes button."))),Object(n.a)("p",null,Object(n.a)("img",{src:A(272).default}),"  "),Object(n.a)("ol",{start:12},Object(n.a)("li",{parentName:"ol"},'If the supplier\'s delivery has only partially fulfilled the Purchase\nOrder, the system will present a second dialog asking you if you\nwish to Cancel the Outstanding Items. You should only cancel the\noutstanding items if you no longer wish to receive these. If you do\nso, the Purchase Order will be marked as closed and you will not be\nable to capture any future receipts against it. Normally you would\nchoose "No."')),Object(n.a)("p",null,Object(n.a)("img",{src:A(273).default}),"  "),Object(n.a)("ol",{start:13},Object(n.a)("li",{parentName:"ol"},"The screen will return you to the Purchase Order Receipt screen and\nlist all the receipts that have been captured against the selected\nPurchase Order. Click the Search button on the form bar.")),Object(n.a)("p",null,Object(n.a)("img",{src:A(274).default}),"  "),Object(n.a)("ol",{start:14},Object(n.a)("li",{parentName:"ol"},"To print the Purchase Order Receipt and attach it to the Supplier's\nDelivery Note, click the Print button.  ")),Object(n.a)("p",null,Object(n.a)("img",{src:A(275).default}),"  "),Object(n.a)("ol",{start:15},Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"If you need to record any notes about the Purchase Order or the\nReceipt, click the Notes button on the form bar.")),Object(n.a)("li",{parentName:"ol"},Object(n.a)("p",{parentName:"li"},"Once you have completed capturing the receipt, click the Close\nbutton on the form bar."))),Object(n.a)("p",null,Object(n.a)("strong",{parentName:"p"},"This is the end of this procedure.")))}s.isMDXComponent=!0}}]);