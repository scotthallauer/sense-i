(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{147:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return s})),n.d(t,"toc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(3),c=n(7),o=(n(0),n(162)),r={id:"SAF-1912",title:"Maintain Default Posting Accounts (SAF-1912)",sidebar_label:"Default Posting Accounts",slug:"/1912"},s={unversionedId:"SAF-1912",id:"SAF-1912",isDocsHomePage:!1,title:"Maintain Default Posting Accounts (SAF-1912)",description:"Step-by-step Guideline",source:"@site/docs/SAF-1912.md",slug:"/1912",permalink:"/docs/1912",editUrl:"https://github.com/sense-i-co/docs/edit/main/docs/SAF-1912.md",version:"current",sidebar_label:"Default Posting Accounts",sidebar:"docs",previous:{title:"Maintain Chart Of Accounts (SAF-1911)",permalink:"/docs/1911"},next:{title:"Maintain Import Sub-Ledger Batches (SAF-4065)",permalink:"/docs/4065"}},i=[{value:"Step-by-step Guideline",id:"step-by-step-guideline",children:[]},{value:"Setting Up The Default Accounts",id:"setting-up-the-default-accounts",children:[]},{value:"Understanding The Purpose Of Each Default Account",id:"understanding-the-purpose-of-each-default-account",children:[{value:"The Work-in-Progress Account",id:"the-work-in-progress-account",children:[]},{value:"Settlement Discount",id:"settlement-discount",children:[]},{value:"A/P - POREC Clearing Account",id:"ap---porec-clearing-account",children:[]},{value:"A/R - SODN Clearing Account",id:"ar---sodn-clearing-account",children:[]},{value:"Tax Control Account",id:"tax-control-account",children:[]},{value:"Departmental Accounting",id:"departmental-accounting",children:[]}]}],l={toc:i};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(o.a)("wrapper",Object(a.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.a)("h2",{id:"step-by-step-guideline"},"Step-by-step Guideline"),Object(o.a)("hr",null),Object(o.a)("ol",null,Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Click on the ",Object(o.a)("strong",{parentName:"p"},"Finance")," option on the Main Menu.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Then click the ",Object(o.a)("strong",{parentName:"p"},"Settings")," menu item on the drop down menu.")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Then click ",Object(o.a)("strong",{parentName:"p"},"General Ledger")," and select ",Object(o.a)("strong",{parentName:"p"},"Defaults"),"."))),Object(o.a)("p",null,Object(o.a)("img",{src:n(658).default}),"  "),Object(o.a)("p",null,'The system will open a screen titled "',Object(o.a)("strong",{parentName:"p"},"G/L Accounts"),'."\nThis screen lists all of the Accounts that have been defined in the\nGeneral Ledger.'),Object(o.a)("p",null,Object(o.a)("img",{src:n(659).default}),"  "),Object(o.a)("h2",{id:"setting-up-the-default-accounts"},"Setting Up The Default Accounts"),Object(o.a)("p",null,"You will set-up each of the Default Accounts in the same way."),Object(o.a)("p",null,"This is described in steps 5 to 7 below..."),Object(o.a)("ol",{start:5},Object(o.a)("li",{parentName:"ol"},"To select an Account to act as the Default Posting Account, click on\nthe three dot button in each of the Default Account fields as\ndescribed below.")),Object(o.a)("p",null,Object(o.a)("img",{src:n(660).default}),"  "),Object(o.a)("p",null,"The system will open a window allows you to click on an Account from\nyour ",Object(o.a)("strong",{parentName:"p"},"Chart of Accounts list"),"."),Object(o.a)("p",null,"You can use the any of the ",Object(o.a)("strong",{parentName:"p"},"Search Fields")," at the top of the screen and\nthe Quick Filter List described above to filter the list if you need\nto do so."),Object(o.a)("ol",{start:6},Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Once you have found the Account you wish to use, click on the\n",Object(o.a)("strong",{parentName:"p"},"appropriate row"),".")),Object(o.a)("li",{parentName:"ol"},Object(o.a)("p",{parentName:"li"},"Then click the ",Object(o.a)("strong",{parentName:"p"},"Select")," button."))),Object(o.a)("p",null,"The system will return you to the ",Object(o.a)("strong",{parentName:"p"},"Default G/L Account")," window and\ndisplay the Account Name of the Account you have selected in the\nDefault Account panel."),Object(o.a)("p",null,"You will then repeat these steps for each of the Default Accounts you\nneed to define for your company."),Object(o.a)("h2",{id:"understanding-the-purpose-of-each-default-account"},"Understanding The Purpose Of Each Default Account"),Object(o.a)("h3",{id:"the-work-in-progress-account"},"The Work-in-Progress Account"),Object(o.a)("p",null,"This is a default account used for storing the financial value of all\nmaterials that are issued from the material stores to process orders."),Object(o.a)("p",null,"The balance of the account is increased by the Process Order Issue\ntransaction, that is materials booked out of the store."),Object(o.a)("p",null,"The balance of the account is reduced by the Process Order Issue\nReturn transaction, that is all materials returned from production (or\noperations or construction, depending on your company) to the store."),Object(o.a)("p",null,"The balance on the account is also influenced by the value of\nmaterials in completed process orders. As process orders are completed\nthe balance in the Work-In-Progress account is reduced because by\ncompleting a process order (or job) the materials are moving from\nproduction into a Finished Goods store or to the Customer."),Object(o.a)("p",null,"You should set up a Work In Progress on the Balance Sheet in the\nInventory -- Work-in-Progress account and then select this account as\nthe default."),Object(o.a)("h3",{id:"settlement-discount"},"Settlement Discount"),Object(o.a)("p",null,"This is a default account used for storing the financial value of all\nDiscount Taken when paying accounts. Any discount journals or\ndiscounts recorded on a payment to a supplier is stored in this\naccount."),Object(o.a)("p",null,"You should set up a Discount Allowed account in the Income Statement\nin the Other Income Account Group and then select this account as the\ndefault."),Object(o.a)("h3",{id:"ap---porec-clearing-account"},"A/P - POREC Clearing Account"),Object(o.a)("p",null,"This is the Accounts Payable -- Purchase Order Receipt Clearing\nAccount. The term POREC (Purchase Order Receipt) and GRN (Goods\nReceived Note) are completely interchangeable."),Object(o.a)("p",null,"This is a default account used to ensure that the Invoices received\nfrom Suppliers correspond to the Goods Delivered."),Object(o.a)("p",null,"The balance on this account is increased by the Purchase Order Receipt\ntransaction that is created to process deliveries received from\nSuppliers. (note that the Purchase Order Receipt transaction is\nsometimes known as a Goods Received Note.)"),Object(o.a)("p",null,"The balance of this account is decreased by the Purchase Order Return\ntransaction that is created to process any items returned to\nsuppliers."),Object(o.a)("p",null,"In addition, Purchase Order Invoices and Purchase Order Credit Notes\nupdate the balance on this account."),Object(o.a)("p",null,"The Purchase Order Invoice will decrease the balance on this account\nas it offsets the Purchase Order Receipt values."),Object(o.a)("p",null,"The Purchase Order Credit Note will increase the balance on this\naccount as it offsets the Purchase Order Return transaction."),Object(o.a)("p",null,"You should set up a GRN Clearing Account on the Balance Sheet in the\nAccounts Payable Account Group and then select this account as the\ndefault."),Object(o.a)("h3",{id:"ar---sodn-clearing-account"},"A/R - SODN Clearing Account"),Object(o.a)("p",null,"This is the Accounts Receivable - Sales Order Delivery Note Clearing\nAccount."),Object(o.a)("p",null,"This is a default account used to ensure that the Customers are\nInvoiced for all deliveries made to them."),Object(o.a)("p",null,"The balance on this account is increased by the Sales Order Delivery\nNote transaction that is created whenever goods are delivered to\ncustomers."),Object(o.a)("p",null,"The balance of this account is decreased by the Sales Order Return\ntransaction that is created to process any items returned by Customers\nto the company."),Object(o.a)("p",null,"In addition, Sales Order Invoices and Sales Order Credit Notes update\nthe balance on this account."),Object(o.a)("p",null,"The Sales Order Invoice will decrease the balance on this account as\nit offsets the Sales Order Delivery Notes values."),Object(o.a)("p",null,"The Sales Order Credit Note will increase the balance on this account\nas it offsets the Sales Order Return transaction."),Object(o.a)("p",null,"You should set up a A/R -- SODN Clearing Account on the Balance Sheet\nin the Accounts Receivable Account Group and then select this account\nas the default."),Object(o.a)("h3",{id:"tax-control-account"},"Tax Control Account"),Object(o.a)("p",null,"This is a default account used to store the value of the tax component\non all Sales, Purchases and Sundry Bank transactions."),Object(o.a)("p",null,"You should set up a default Tax Account on the Balance Sheet in the\nTaxes Due Account Group and then select this account as the default."),Object(o.a)("h3",{id:"departmental-accounting"},"Departmental Accounting"),Object(o.a)("p",null,"The final default setting for the General Ledger is the Departmental\nAccounting. Check this box if your company has more than one factory,\nwarehouse or retail outlet and you wish to allocate and report on\nincome and expenditure separately for each department."),Object(o.a)("p",null,"Once you have defined the Default Accounts you need, click ",Object(o.a)("strong",{parentName:"p"},"Save"),"\nand the ",Object(o.a)("strong",{parentName:"p"},"Close"),"."),Object(o.a)("p",null,"The system will Close the Default G/L Accounts screen and return you to\nthe main screen in the application."),Object(o.a)("p",null,Object(o.a)("strong",{parentName:"p"},"This is the end of the procedure.")))}u.isMDXComponent=!0},162:function(e,t,n){"use strict";n.d(t,"a",(function(){return h}));var a=n(0),c=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=u(n),h=a,b=p["".concat(r,".").concat(h)]||p[h]||d[h]||o;return n?c.a.createElement(b,s(s({ref:t},l),{},{components:n})):c.a.createElement(b,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,r[1]=s;for(var l=2;l<o;l++)r[l]=n[l];return c.a.createElement.apply(null,r)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},658:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image01-0a68190f66208de6e80541e033aa81e0.png"},659:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image3-c734a0e19d4a7422506130365d2075dd.jpg"},660:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/image5-3c27e0af880cfc6dd0b73ee7091463fc.jpg"}}]);