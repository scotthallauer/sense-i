(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{107:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return f}));var n=a(3),r=a(7),o=(a(0),a(118)),i={id:"SAF-4041",title:"Customer Ledger (SAF-4041)",sidebar_label:"Customer Ledger",slug:"/4041"},c={unversionedId:"SAF-4041",id:"SAF-4041",isDocsHomePage:!1,title:"Customer Ledger (SAF-4041)",description:"_",source:"@site/docs\\SAF-4041.md",slug:"/4041",permalink:"/docs/4041",editUrl:"https://github.com/sense-i-co/docs/edit/main/docs/SAF-4041.md",version:"current",sidebar_label:"Customer Ledger",sidebar:"docs",previous:{title:"Supplier Payment Run (SAF-4058)",permalink:"/docs/4058"},next:{title:"Template Document",permalink:"/docs/XXX-000"}},s=[{value:"Purpose",id:"purpose",children:[]},{value:"When to use",id:"when-to-use",children:[]},{value:"Search Options",id:"search-options",children:[]},{value:"Understanding the Information displayed",id:"understanding-the-information-displayed",children:[]}],l={toc:s};function f(e){var t=e.components,i=Object(r.a)(e,["components"]);return Object(o.a)("wrapper",Object(n.a)({},l,i,{components:t,mdxType:"MDXLayout"}),Object(o.a)("hr",null),Object(o.a)("h2",{id:"purpose"},"Purpose"),Object(o.a)("p",null,"The purpose of this procedure is to describe the steps you need to\ntake to generate a report of that lists all transactions that have\noccurred between the Company and its Customers for one or more\nperiods.  "),Object(o.a)("p",null,"This document is called a Customer Ledger and is generated for either\na specific customer or for all the customers for a given set of\nperiods.  "),Object(o.a)("p",null,"The report lists all the transactions between the company and the\ncustomers in the selected periods and shows what transactions have\nbeen captured."),Object(o.a)("h2",{id:"when-to-use"},"When to use"),Object(o.a)("p",null,"You would use this procedure either during the course of a month if\nyou were querying the status of a customer's account and then at the\nend of the month you would generate statements for all customers to\nadvise them what payments they will need to make during the coming\nperiod.  "),Object(o.a)("p",null,"To generate a Customer Ledger perform the following steps...  "),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click on Finance on the main menu.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click Customers on the drop down menu.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click AR Statement (for Accounts Receivable) on the side menu.  "))),Object(o.a)("p",null,Object(o.a)("img",{src:a(405).default}),"  "),Object(o.a)("p",null,'The system will open a screen titled "Accounts Receivable Statement."\nThis provides you with a set of criteria that you can use to filter\nthe information that will be used to generate Customer Statements.'),Object(o.a)("p",null,Object(o.a)("img",{src:a(406).default}),"  "),Object(o.a)("p",null,"You will notice that as you enter the screen there is no information\ndisplayed. This prevents the system from running unnecessary queries\nand instead you need to enter some information in the search panel at\nthe top of the screen before the system will display any information\nin the report.  "),Object(o.a)("h2",{id:"search-options"},"Search Options"),Object(o.a)("ol",{start:4},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"You can filter the list of transactions in the Accounts Receivable\nStatement screen to show only those transactions that belong to a\nspecific CUSTOMER GROUP. To do this select one Customer Group from\nthe drop down list of Account Groups.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"You can also choose to view only those transactions that occur for a\nspecific customer. To do this, enter the customer's account code in\nthe Customer Code field in the search panel. You can also click on\nthe three-dot button in the Customer Code field and search for a\nspecific customer by name using the pop-up Select Customer window.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"You can choose to view only those transactions that occur AFTER a\nspecific date. To do so select the starting date from the drop down\ncalendar that is displayed in the From Date field.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"You can choose to exclude transactions that occur AFTER a specific\ndate. To do so select the ending date from the drop down calendar\nthat is displayed in the To date field.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"When you have entered specific information in the Search Panel,\nclick the Search button on the form bar. Note that you can also\nchoose to click the Search button without entering any information\nin the Search Panel and the system will then display all the\ninformation related to Customer transactions on the screen.  "))),Object(o.a)("h2",{id:"understanding-the-information-displayed"},"Understanding the Information displayed"),Object(o.a)("p",null,"The system displays a comprehensive list of information about the\nvarious transactions captured against each customer's account in the\ncolumns on the screen.  "),Object(o.a)("p",null,Object(o.a)("img",{src:a(407).default}),"  "),Object(o.a)("ol",{start:9},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The customer's account code is displayed in the Code column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The name of the customer is displayed in the Customer Name column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The transaction type is displayed in the Transaction Type column.  "))),Object(o.a)("p",null,"The instalment can be caused by a deposit that needs be paid when\nplacing a Purchase Order, then the Transaction Type will be SO or",".","..  "),Object(o.a)("p",null,"The instalment can be caused by an invoice received from a customer,\nthen the Transaction Type will be SO Invoice.  "),Object(o.a)("p",null,"A payment received from a customer is assigned a Transaction Type of\nReceipt.  "),Object(o.a)("ol",{start:12},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays the transaction number in the Transaction No\ncolumn. This allows you to easily find any transaction that has been\ncaptured against that customer's account.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays the date of the transaction in the Transaction\nDate column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Any additional reference number, such as an internal order number or\njob number that was captured on the Sales Order or Sales Order\nInvoice is displayed in the Reference Number column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays the Term Detail Name in the Payment Terms\ncolumn. This is the rule in the payment terms that created the\ninstalment displayed in the list.  "))),Object(o.a)("p",null,Object(o.a)("img",{src:a(408).default}),"  "),Object(o.a)("ol",{start:16},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays any transaction that increased the customer's\naccount balance in the Debit column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays any transaction that decreased the customer's\naccount balance in the Credit column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system displays the running balance after each debit or credit\ntransaction in the Balance column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"The system display information about any payments made to date\nagainst a specific instalment in the Payments to Date column.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"To print a statement for the customer, click the Print button on the\nform bar and  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"then click the Customer Ledger menu item.  "))),Object(o.a)("p",null,Object(o.a)("img",{src:a(409).default}),"  "),Object(o.a)("ol",{start:22},Object(o.a)("li",{parentName:"ol"},"The system displays the report in a Print Preview window.  ")),Object(o.a)("p",null,Object(o.a)("img",{src:a(410).default}),"  "),Object(o.a)("p",null,"You can choose to either print, fax or email the ledger."),Object(o.a)("ol",{start:23},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"To simply Print the Customer Ledger, click the Printer Icon.  ")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"To close this screen, click the close button at the top of the\nscreen.  "))),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"This is the end of this procedure.")))}f.isMDXComponent=!0},118:function(e,t,a){"use strict";a.d(t,"a",(function(){return A}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=r.a.createContext({}),f=function(e){var t=r.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=f(a),A=n,d=u["".concat(i,".").concat(A)]||u[A]||p[A]||o;return a?r.a.createElement(d,c(c({ref:t},l),{},{components:a})):r.a.createElement(d,c({ref:t},l))}));function A(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=u;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},405:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image1-31c83d3218284582e359685a56a448ea.jpg"},406:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-dc6599c7e3d897f122546579a370b2d1.jpg"},407:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image5-94fd36d836cc6ebb674f833a6d0cb135.jpg"},408:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-447dd1ad19fb31aa3f2c8a5e171f4be5.jpg"},409:function(e,t,a){"use strict";a.r(t),t.default="data:image/jpeg;base64,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"},410:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-62a90ffeeb24fd815ef587715ebaa31e.jpg"}}]);