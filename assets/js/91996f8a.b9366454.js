(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{120:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return h}));var n=a(3),o=a(7),i=(a(0),a(162)),r={id:"SAF-1916B",title:"Resolve Errors with G/L Batches and Journals (SAF-1916B)",sidebar_label:"Resolve Errors-G/L Batches and Journals",slug:"/1916B"},l={unversionedId:"SAF-1916B",id:"SAF-1916B",isDocsHomePage:!1,title:"Resolve Errors with G/L Batches and Journals (SAF-1916B)",description:"Step-by-step Guideline",source:"@site/docs/SAF-1916B.md",slug:"/1916B",permalink:"/docs/1916B",editUrl:"https://github.com/sense-i-co/docs/edit/main/docs/SAF-1916B.md",version:"current",sidebar_label:"Resolve Errors-G/L Batches and Journals",sidebar:"docs",previous:{title:"Create Manual Batches and Journals (SAF-1916)",permalink:"/docs/1916"},next:{title:"Post General Ledger Journal Batches (SAF-1916C)",permalink:"/docs/1916C"}},s=[{value:"Step-by-step Guideline",id:"step-by-step-guideline",children:[]},{value:"Using The Quick Filter",id:"using-the-quick-filter",children:[]},{value:"Isolate GL Batches With Problem Journals",id:"isolate-gl-batches-with-problem-journals",children:[]},{value:"Purchase Order Receipt For Inventory Items",id:"purchase-order-receipt-for-inventory-items",children:[]}],c={toc:s};function h(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.a)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.a)("h2",{id:"step-by-step-guideline"},"Step-by-step Guideline"),Object(i.a)("hr",null),Object(i.a)("p",null,"In order to generate accurate and meaningful financial information for\nthe company, you will need to ensure that all the transactions for a\nparticular period have been captured in the General Ledger and that\nthese transactions have been posted. The system will not let you post\ntransactions that do not balance or that have incorrect accounts\nlinked to them."),Object(i.a)("p",null,"As part of the process of preparing financial statements you will need\nto identify and isolate any journals that contain such errors."),Object(i.a)("p",null,"First, you will need to identify which batches contain journals that\nare not ready to be posted."),Object(i.a)("p",null,"Next, you will need to identify the cause of the problems with any\nsuch journals."),Object(i.a)("p",null,"Then, you will need to delete the problem journals from these batches."),Object(i.a)("p",null,"Finally, for the problem journals that you have deleted, you will need\nto resolve the underlying issues or cause of the problem and then\nre-import them into the General Ledger."),Object(i.a)("p",null,"The General Ledger system provides you with a way to easily identify\nany batches that contain journals that will not post. This is either\nbecause the journals do not balance or because the system cannot\nassign the correct account to one of the rows in a journal."),Object(i.a)("p",null,'Steps 1 to 8 below are a repeat of the steps described in the\nprocedure "',Object(i.a)("strong",{parentName:"p"},"Review Imported GL Batches"),'."'),Object(i.a)("ol",null,Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click on the Finance option on the Main Menu.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then click the General Ledger menu item on the drop down menu.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then click G/L Batch."))),Object(i.a)("p",null,Object(i.a)("img",{src:a(537).default}),"  "),Object(i.a)("p",null,'The system will open a screen titled "Maintain G/L Batch." This screen\ndisplays all the batches that exist in the General Ledger that match\nthe search criteria you have entered.  '),Object(i.a)("p",null,Object(i.a)("img",{src:a(538).default}),"  "),Object(i.a)("p",null,"The information that is displayed in the grid can be used to select,\nsort and organise information about the General Ledger batches."),Object(i.a)("p",null,"A.  The system displays the number of the Batch in the G/L Batch column.\nThis information is useful for auditing purposes."),Object(i.a)("p",null,"B.  The system displays a description of the Batch. This description is\ncreated by combining the Accounting Period and the Type of\nTransaction in the Batch. This helps you to easily identify a batch\ncontaining a specific type of transaction."),Object(i.a)("p",null,"C.  The system displays the Transaction Type Code that relates to the\ntransactions included in the batch in the Transaction Type Code.\nThis helps you to quickly identify and select any specific group of\nTransactions you wish to import."),Object(i.a)("p",null,"D.  You might for example decide that you want to import and review all\ninvoices from suppliers. You would then select the POINV or Purchase\nOrder Invoice transaction row."),Object(i.a)("p",null,"E.  The name of each Transaction Type is displayed in the Transaction\nType Name field."),Object(i.a)("p",null,"F.  The system indicates whether the Batch was created from Sub-Ledger\ntransactions or if it was Manually created in the General Ledger."),Object(i.a)("p",null,'G.  The system displays a "Ready to Post Status" in the Ready to Post\ncolumn.'),Object(i.a)("p",null,'If the "Ready to Post Status" is Yes, then all the journals contained\nwithin the batch balance and contain the information required to be\nposted.'),Object(i.a)("p",null,'If the "Ready to Post Status" is No, then either the underlying\njournals are missing information or they do not balance. You will need\nto open each batch that has a "Ready to Post Status" of "No", identify\nthe journals that are problematic and then delete them from the batch.\nYou will then need to fix the underlying cause of the error and\nre-import the transaction that have been deleted for not balancing.'),Object(i.a)("p",null,'H.  The system will display that Status of the batch in the Status\ncolumn. This will either be "Open" or "Posted."'),Object(i.a)("p",null,'If the batch status is "Open" then the batch has not yet been posted.\nIf the Batch is a Manual Batch then you can change any of the underlying\njournals or add new ones.',Object(i.a)("br",{parentName:"p"}),"\n","If the batch is a batch that has been created by importing\ntransactions from a subledger, then you will not be able to add\njournals, nor change existing journals but you will be able to delete\nselected journals."),Object(i.a)("p",null,'If the batch status is "Posted" then the batch is no longer open and\nhas been posted.'),Object(i.a)("p",null,"You cannot add, delete or modify the journals in a posted batch."),Object(i.a)("p",null,"I.  The Total Financial Value of all the Transactions in the batch\n(Inclusive of Tax Amount where Tax is applicable) is displayed in\nthe Batch Total column. You can use this to compare the Total Value\nthat will be created in the General Ledger Batch for the Accounting\nPeriod to a list of the Transaction on which the Batch has been\ncreated. In our example above, you could print a list of all the\nPurchase Order Invoices captured in the system for the selected\nperiod and compare the total on the printed list to the total on the\nMaintain Sub-Ledger Import screen."),Object(i.a)("p",null,"J.  The system displays the number of transactions that are included in\nthe Batch in the No of Journals column."),Object(i.a)("p",null,"K.  The system displays information that is useful for auditing purposes\nin the Audit Band. This includes the name of the user who created\nthe batch, the date on which the batch was created. If the batch has\nbeen posted, the system displays the name of the user who posted the\nbatch and the date on which the batch was posted. You can use this\ninformation to monitor and track the source of the journal batches\nand identify any user with whom you need to resolve mistakes."),Object(i.a)("h2",{id:"using-the-quick-filter"},"Using The Quick Filter"),Object(i.a)("p",null,"You can any of the columns to analyse, filter, group and select the\ntransaction types with which you wish to work. Use the Quick Search\nfeatures that are built into the Column Headings on every list screen\nto quickly select the rows you need."),Object(i.a)("p",null,"When working with General Ledger Batches you are usually trying to\nfinalise the transactions for a specific Accounting Period. The first\nstep you should take is to filter the list to show only those batches\nfor the Accounting Period on which you are focused."),Object(i.a)("p",null,"You can use the Quick Filter to do this."),Object(i.a)("ol",{start:4},Object(i.a)("li",{parentName:"ol"},"If you click on the right hand side of most column headings on a\nlist screen you will notice the system displays a small black arrow\nhead. If you click on this button the system will display all of the\nunique values in the list screen.")),Object(i.a)("p",null,"This is known as the Quick Filter List."),Object(i.a)("ol",{start:5},Object(i.a)("li",{parentName:"ol"},"In the Period Information band, click the Quick Filter arrow in the\nAccounting Period column. Then click on the Accounting Period on\nwhich you wish to focus.")),Object(i.a)("p",null,Object(i.a)("img",{src:a(539).default}),"  "),Object(i.a)("p",null,"The system will then reduce the records displayed in the grid to show\nonly those batches that match the Accounting Period you have selected."),Object(i.a)("h2",{id:"isolate-gl-batches-with-problem-journals"},"Isolate GL Batches With Problem Journals"),Object(i.a)("ol",{start:6},Object(i.a)("li",{parentName:"ol"},"Sort the GL batches into those that are Ready to Post and those that\nare not. To do this, click the Ready to Post Column. The system will\nsort the batches into those that are Not Ready to Post and then\nthose that are Ready to Post.")),Object(i.a)("p",null,'The system will sort the list of GL Batches for the Accounting Period\non which you are focused into those that are not ready to post (i.e.\ntheir Ready To Post Status is "No") and then will display those whose\nready to post status is "Yes."'),Object(i.a)("p",null,Object(i.a)("img",{src:a(540).default}),"  "),Object(i.a)("ol",{start:7},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Click on the row for the next Batch in that list that has a Ready to\nPost status of "No" and that contains the Journals that cannot be\nposted.  ')),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click the Journals button.  "))),Object(i.a)("p",null,Object(i.a)("img",{src:a(541).default}),"  "),Object(i.a)("p",null,"The system will open the Maintain G/L Journal screen. This screen\nlists all of the individual Journals contained in GL Batch you have\nselected."),Object(i.a)("p",null,Object(i.a)("img",{src:a(542).default}),"  "),Object(i.a)("ol",{start:9},Object(i.a)("li",{parentName:"ol"},'Isolate all the Journals in the GL Batch you have selected that have\nare "Ready to Post" status of "No." You can use the Quick Filter on\nthe Ready To Post column and select "No" from the drop down list.  ')),Object(i.a)("p",null,'The system will filter the list of Journal in the selected GL Batch\nand show only those that have a "Ready To Post" status of "No" in the\nlist.  '),Object(i.a)("ol",{start:10},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click on the row that contains the next journal in the list that is\nnot ready to post.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click the View button."))),Object(i.a)("p",null,"The system will open the View G/L Journal screen."),Object(i.a)("p",null,"This screen displays the details and all of the transaction legs that\nmake up the journal."),Object(i.a)("p",null,"This includes the values and accounts to which each value is posted."),Object(i.a)("p",null,Object(i.a)("img",{src:a(543).default}),"  "),Object(i.a)("p",null,"You will notice when you open a GL Journal that the system lists each\ndetail or leg of the transaction on a separate row and that for\ntransactions that contain several details, the system will list each\ndetail on a separate row. This means that in many journals the same\nAccount Group, Account No and Account Name will appear on several\ndifferent rows. This makes it a little complex when trying to validate\nthe structure of a Journal."),Object(i.a)("p",null,"To check the accuracy and completeness of the rows in the selected\nJournal you need to compare the TOTAL VALUES posted to each of the\nACCOUNTS in the JOURNAL to the VALUES AND ACCOUNT GROUPS PRESCRIBED IN\nTHE POSTING GUIDELINES."),Object(i.a)("p",null,"To do this, you need to modify the way in which the information in the\nJournal screen is displayed."),Object(i.a)("ol",{start:12},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Position the cursor anywhere in the grid, then right click the mouse\nand select Grid Layout.")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then select the Enable Groups option for the list of items that\nappear next to the Grid Layout option."))),Object(i.a)("p",null,Object(i.a)("img",{src:a(544).default}),"  "),Object(i.a)("p",null,"You will notice that the system displays a dark grey bar above the\ngrid or worksheet with text in white font."),Object(i.a)("p",null,Object(i.a)("img",{src:a(545).default}),"  "),Object(i.a)("p",null,"You can then rearrange the information in the Journal detail grid by\ndragging either the Account Name column or the Account Group and then\nthe Account Name column heading into the dark grey Group By bar."),Object(i.a)("p",null,Object(i.a)("img",{src:a(546).default}),"  "),Object(i.a)("ol",{start:14},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Click on the heading for the column that you wish to group by, in\nthis example the Account Name.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then hold the mouse click down and drag the selected column heading\ninto the Group By bar and then let the mouse click go.  "))),Object(i.a)("p",null,"You will now notice that the system has grouped all of the details for\nthe Journal by the column you have dragged into the Group By bar and\nthat subtotals are displayed in both the Debit Amount and Credit\nAmount columns for each group."),Object(i.a)("p",null,Object(i.a)("img",{src:a(547).default}),"  "),Object(i.a)("p",null,"The system displays totals for each value at each GROUP ROW."),Object(i.a)("p",null,"You can also nest or stack the grouping items one underneath the other\nto create a view that totals and enables you to analyse the\ninformation at different levels of detail For example, you could\nchoose to first group and total information by Account Group and then\nunderneath that by Account Name."),Object(i.a)("p",null,Object(i.a)("img",{src:a(548).default}),"  "),Object(i.a)("p",null,Object(i.a)("img",{src:a(549).default}),"  "),Object(i.a)("ol",{start:16},Object(i.a)("li",{parentName:"ol"},"You can click on the + sign next to any grouped item to reveal the\ndetails underneath the grouped item that are used to calculate its\ntotal.  ")),Object(i.a)("p",null,"Now, to check the integrity of the Journal and its underlying\ntransaction you need to perform five steps. These are; "),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Identify the Transaction Type"),Object(i.a)("li",{parentName:"ul"},"Retrieve the Posting Guidelines for the specific Transaction Type"),Object(i.a)("li",{parentName:"ul"},"Retrieve the Amount Type Guidelines"),Object(i.a)("li",{parentName:"ul"},"Access the original transaction document"),Object(i.a)("li",{parentName:"ul"},"And then compare the information from these items to identify the\ncause of the problem.")),Object(i.a)("p",null,"Use the information in the Journal Header panel to identify the\nnecessary transaction information."),Object(i.a)("p",null,Object(i.a)("img",{src:a(232).default}),"  "),Object(i.a)("ol",{start:17},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Identify the Transaction Type from the Source Code and Transaction\nType fields in the Journal Header. In the above example, the\nTransaction Type is "Purchase Order Receipt" and the code for this\ntransaction type is "POREC."  ')),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Retrieve the document titled "General Ledger Posting Guidelines" and\nin this document find the appropriate diagram illustrating how the\nGeneral Ledger posts the specific Transaction Type you have\nidentified.  '))),Object(i.a)("h2",{id:"purchase-order-receipt-for-inventory-items"},"Purchase Order Receipt For Inventory Items"),Object(i.a)("p",null,Object(i.a)("img",{src:a(550).default}),"  "),Object(i.a)("p",null,"The General Ledger Posting Guideline for the Purchase Order Receipt\nTransaction.  "),Object(i.a)("ol",{start:19},Object(i.a)("li",{parentName:"ol"},"Next, you need to identify the Original Transaction Number for the\nselected Transaction. You will find this in the Journal Header Panel\nin the Reference No field.")),Object(i.a)("p",null,Object(i.a)("img",{src:a(232).default}),"  "),Object(i.a)("ol",{start:20},Object(i.a)("li",{parentName:"ol"},"Open the original transaction in the system. You can use the Men\nPath guideline in the General Leger Posting Guideline to find the\noriginal transaction. In the case of the Transaction Type of\nPurchase Order Receipt the path is Main Menu -- Supplier -- Purchase\nOrder Receipt. Select this option to open the list screen for this\ntransaction type.  ")),Object(i.a)("p",null,Object(i.a)("img",{src:a(551).default}),"  "),Object(i.a)("ol",{start:21},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Type the number of the original transaction for the journal (as\nidentified in step 19 above) into the Transaction No field  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then click the Search button on the form bar.  "))),Object(i.a)("p",null,Object(i.a)("img",{src:a(552).default}),"  "),Object(i.a)("ol",{start:23},Object(i.a)("li",{parentName:"ol"},"Click on the row containing the Original Transaction and then click\nthe Print button.  ")),Object(i.a)("p",null,"The system will print the original document. This will enable you to\nanalyse the values and items on the transaction in detail.  "),Object(i.a)("ol",{start:24},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Retrieve the Amount Type Guideline  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Calculate the values for each Amount Type that should be used by the\nsystem to post the original transaction. Look at the Amount Types on\nthe Posting Guideline and calculate the values from those that\nappear in the Original Transaction.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Record these next to each Account on the Posting Guideline as\nappropriate.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Compare the recorded totals to the values for each Account in the\nView Journal screen.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Identify any difference between the values in the View Journal\nscreen and those values that you have calculated and recorded on the\nPosting Guideline.  "))),Object(i.a)("p",null,"Next you need to identify the SOURCE ENTITY where the difference\noccurs. In other words, does the difference between the system Journal\nAmount and the calculated amount appear for..."),Object(i.a)("ul",null,Object(i.a)("li",{parentName:"ul"},"Customer"),Object(i.a)("li",{parentName:"ul"},"Supplier"),Object(i.a)("li",{parentName:"ul"},"Item (Material, Machine, Component, Expense, Product)"),Object(i.a)("li",{parentName:"ul"},"Tax Item  "),Object(i.a)("li",{parentName:"ul"},"Bank Account  "),Object(i.a)("li",{parentName:"ul"},"Bank Charge.")),Object(i.a)("ol",{start:29},Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Once you have identified the source of the problem, go to the\nGeneral Ledger Account Settings procedure and follow the steps\ndescribed to check all the General Ledger Account Links have been\ndefined and that the accounts used are correct.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"If you find that a link between one of the SOURCE ENTITIES and the\nGeneral Ledger is missing then add the link or if it is pointing to\nan incorrect account, then remove the link and add the correct\naccount.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Once you have done this, close the View Journal screen.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},"Then Delete the Journal from the GL Batch.  ")),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Repeat steps 10 to 32 for each Journal that has a Ready to Post\nstatus of "No."  ')),Object(i.a)("li",{parentName:"ol"},Object(i.a)("p",{parentName:"li"},'Once you have identified and resolved any Journal errors in the\nGeneral and deleted these Journals, re-import the necessary batches\nusing the procedure titled "',Object(i.a)("strong",{parentName:"p"},"Import Sub-ledger Batches"),'."'))),Object(i.a)("p",null,Object(i.a)("strong",{parentName:"p"},"This is the end of the procedure.")))}h.isMDXComponent=!0},162:function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),h=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,r=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=h(a),p=n,b=d["".concat(r,".").concat(p)]||d[p]||u[p]||i;return a?o.a.createElement(b,l(l({ref:t},c),{},{components:a})):o.a.createElement(b,l({ref:t},c))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,r[1]=l;for(var c=2;c<i;c++)r[c]=a[c];return o.a.createElement.apply(null,r)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},232:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image27-43920ee108a9eddc85358e623d0a5065.jpg"},537:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image01-ee09760a3991c0c1eac197f5dc489063.png"},538:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image3-cf787f47d018104e140806b3574614cc.jpg"},539:function(e,t,a){"use strict";a.r(t),t.default="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAAAAAAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCABlAFQDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9A/iNN4W8G2HiDxFren6Zb6XpltNqV/eSaakzJFHGZZZCAjOxADHABJ7AmpP+Ef0f/oB6T/4LoP8A4iuG/aPs/E3iLxR4S0Lw5okGsJHqK6/qEeqXMtlp8sVl5bwQvdxQzPFN9sls7iNAmJFs51Y7dyt4xpWn694a0Twx4U8baZ4s0zwZ4Z/tPS5Y/A7arKPM3Wc2jRwT2CR3txbw2E1xbNM6LG01s/m5kETN50r8z1NkfUH/AAj+j/8AQD0n/wAF0H/xFH/CP6P/ANAPSf8AwXQf/EV4NoX9s/8ACxh/wk3/AAsj/hIftmm/2F9n3/ZP7O+x2n2r7f8AZ/8AiU+Z9o/tLzd/77H/AB78/ZK4XR/+Fgx6XoNzZ/8ACdHV7Oz06++IS339olG1GHVdLluVsEm+SSM26a0DFpgaGRCiBW3W6mde4H1n/wAI/o//AEA9J/8ABdB/8RWZ53hVtQ+xQ6ZpN3dLefYJo7PS45/ss/2f7QEnKRkQZiKsDJtB8yIA5kQN8+eHtO8W/Fr456q2qv8AEHw14AuJtVnhtWuLrS1uIVsvDotBvRhJAryfbpkVHilDC4SQKTcwnzK80v4sQ/DPW9cFp4ztPH/iSGHVr86bFdwmQnwHPAjeTCBHDMNUgZTGqrIJEtdygfZsuz7gfcf/AAj+j/8AQD0n/wAF0H/xFH/CP6P/ANAPSf8AwXQf/EV85+NND8UeE/G02jSah461f4bn+y9Q17ULSa+uL+eSWPWEuGt5LQfaEzcw6Mz29iEjiViRFHDJLu9D/Zf1RtY+EUc/2vVr2BNd163tpNdluZL0W0Wr3kcCSm6Pn7kiRExL867cNgipd0r3Gddb2qXyyyW3hPw6YFnlhVpY41Y7JGQkgW5xkrnqauWOhG5vbeGXwt4biikkVGdI0ZlBOCQPs4yfbI+tZsnjXw94E8Otf+Jde0zw9YyaldQJdareR2sTSGeZggaRgCxCscdcKfStXwD8RvCfxAv2/wCEX8UaN4k+ySxfaP7I1CG68neTs3+Wx252tjPXafSumOGxMqX1hQl7P+azt232FzRvbqa/hfwromttqon0TS0+y3YgTy9PgGV8mJ8nKHnLn8AKK1Ph/wDe8Rf9hIf+ktvRWtOKcU2Zvc8n/ah+KN78L5/CjWviHw34Sg1rXRpl3rniuFpbKziGn3dyCQLi3+ZpLaOMEyAfvOhOBXOeB/2iNPk0G7l1/UoPEjpqMlnpureCdHu76DXbdILeWW7tra3N1IIYZLj7LJIHkRZYsF0aQRra+I/xO8J+M/Hnh6/sh4wu08HeJLuWWTS/AetX9vczw2l7ps8CTw2pjOyWeTLqXGYSvfI4P42/8In8XtT8P6q/hrXLvUdGhurWG38XfBvXtb08xXDQNI/2f7PCVmDW0QWQSYCtKpVt4K80otyehaeh6fcftAeCbjVIYrTxbYwWNreJFe39xZTtYzJJpU2oosN98tuMWyLctLukRYxtYK0sbC1H8fvBj6ZcXbXOrW88M0cH9k3WgahDqsrSK7IYrB4BcyqywzsGjiZcW85ziGQr8/6p8PvBeseH7vw/OfiPHot1qL3UiWvwt1m3lFu3hk6CYk8uwWGNtp88MkQRThBEFGa07uSbVvEUfjPUNR8VSeP7Oa0awvLX4O+JItKjit4dQhVZbRlaWRimrXuWW5QZEB24jcSz7PyY7nu3wV+IU/xQ8Ct4guIPs2/V9WsoY2tZbVxBbajc20Jkil/eJIY4ULqwUhy3yr90d1XhPwn+IGmfDvwaNJ1K18cazqMuo6jqdzeWvwv8Q2kTy3l9PduEia2kKKrTlQC7HCg55rsf+F8eH/8AoA/ED/w3fiD/AOQahwlfRDujqPGHgPwz8RNMi03xV4d0nxNp0UwuI7TWLGK7iSUKyhwkikBgrMM4zhiO9aml6XZaHplppum2kGn6dZwpb21paxLFFBEihUREUAKqqAAAMAACuD/4Xx4f/wCgD8QP/Dd+IP8A5Bo/4Xx4f/6APxA/8N34g/8AkGlyT7BdGteeDdE+IXgXWPDniPTYdW0XUbi8hubO4B2uv2mQggjBVgQGVlIZWAIIIBqT4J/CPwz8EPCuk+FfCtl9k063lV5JZCGnupjgPPM4A3yNgZOAAAqqFVVUc9ovxj8P2Nk8cul+Od7XE82F+HXiM4Dyu4B/4l/UBhn3rTtfjp4ahuoZG0vx2VRwxx8OvEWeD/14V6EMTjI4d4NTl7JyUnG75eZK17bXtpci0L83U9K+H/3vEX/YSH/pLb0VgfA3xzpXjy18W3OljUIvsetC0ubfVNLutOuIZfsVpJteC5jjkXKSRsCVwQwIzRTp6RVyJblb9mn/AJJ1q/8A2Ofiz/1IdRr1WvKv2af+Sdav/wBjn4s/9SHUa9VrQRxXxg8a33gHwQdR0yK3k1K61PTNGtXu1Z4YJb6/t7JJ3RWUyLG1wJDGGQuEKh03bxz+gfGr+2PjJqXhlrXy/Db+Zpuk6x5eIrzVbQCS/gWbeUkwk6LGiDf5mnaqHAFuM6vxz8L6p4t+H62+j2v26/sdZ0fWls1kVHuUsdTtb2SGNnIQSulu6JvZU3su50XLDi/D/wCyrp3h238Malb+JNYfxtpOpxazc6zNqF5LY3N5JIx1SePS3uTaW7Xkc98n7tP3P2xmTlRQM5X4E/tP+KfiPD4HutasNHSDxBqdno0sNhDLE0Utx4Ttdd89WaVwVWQ3cPllclZYW3gxMJvp6vmv4cfsyap8Kb/4b6VZ6j/bthouswa1fapJAtqkaWvhWPQUhVPMd2llcLOMDYqLKrOGWPzfpSgGFFFFAgooooA8q+Df/JRfjt/2Odt/6j2jUUfBv/kovx2/7HO2/wDUe0aigA/Zp/5J1q//AGOfiz/1IdRr1WvKv2af+Sdav/2Ofiz/ANSHUa9VoA5X4neOv+Fd+EZNXSy/tK7lvbLTLO1aXyUkury7htLcSSbWMcXmzx73CuypuKo5AU8p4a+Kfi/xhrE17pHgrT7vwRDrN3or3/8AbpTVg9teSWU832JrcQ+Us8Mjf8fW8wrvCGQiA2/2htJvtW+G8TWFncX76f4g0HWJ4LSJpZvstnq9nd3LJGoLyMsMErCNAzuVCorMQpyvA/hP4i+AdQufD2n2nhebwpP4g1DWW8QXOo3LXwivNQmv5YBp624TcDcPbrJ9qwMLMUPMBBnfyfELwtDpdvqcniXR00240yXWobxr+IQy6fGsbSXavuw0CLNEWlB2gSISfmGeft/jv4IuPFWo6J/wkGnxfY/DNt4v/tGS9gFnPpUzzp9qik3/ADRR/Z9zyY2Ks0J3Hfx4tpf7Nvj+DTvCOk6gfB+oaN4L8GTeEtMge4vVn1B0uNKkhvXnjVGspZF007TD5j2UwjlSS6PyJqt+zn4va1nvZLzw/NrN7ZaHd3aQobWJtS0rXJtXRXaKELJ9ra6mSe6WKLbIhmW2YTGGEDQ9fi+N3w6nt/DlxH4+8LyQeJZnttDlXWbYrqsqyCJ47U78TMJGVCqZIZgOpxXQeF/FmieONCttb8Oazp/iDRrrd5Go6XdJc28u1ijbJEJVsMrKcHgqR1FfNfir9mXxv42l+I2tXk/h/TNZ8aeGfEumSadBfT3FvY3V9Y6LZWoFwbdGli26Q0kjmJGUzBFSQLvPr/hvwn4p8HeK/ibqdnaaPqUHiTU21mwWfUZbdllj0rTbOGCUC3cKryWtyWkUsUUREJIXYRgHQfETx1/wr3TtI1KWy+22F1rNhpFyUl2yw/bLhLSGRFKkSYuJ4AylkxGZHBZkWN+qryr44abrniTw7p2kW+lefNJ4z8PT2Rs2ebda2uo2d9czXBMapb7EtrrAZmVtkQVjJMsVeq0AeVfBv/kovx2/7HO2/wDUe0aij4N/8lF+O3/Y523/AKj2jUUCMH4B32p/8IvPp2nT2lt5/irxpcSSXVs03+r8SXagALImM+aecnoK9V+x+Jv+gvpP/gql/wDkmvLv2c7eVtNecRuYU8SeOEaQKdqs3ia4KgnsSFbA/wBk+le31NhmV4o1/wD4RjQrnUhpuoaxJFtWLT9Lg864uJHYIkaAkKuWZQXkZI0GXkdEVnHmsf7R9rd3C6PY+CfFGoeNo5riK88HwnT1vrJYI7WWSSSZ7tbRlEeoWDYjuHY/alG3KTCPtfijrPifQPAup3vg3Qv+Ek8SL5SWmn74l+/KiPLiWWFJPKRnl8oyxeZ5ewSRlg48V0Dw/wCIvCvirw346svhl4wvbm1stY0vV7LUL/Rm13U7q8fS5V1KR1vRatFt09odolRowIY4oFhRQlAeleD/ANoLwl4+8ZaJ4d0IaxePrHh9vEtlqU2kXNrYz2YFmVMc0yIJWZb+E7Y9+zDLJ5bAKT4c/HbSfiTqmn2lto2saTBrGmPregX2pLb+TrenI0Ia6gEU0jxKBdWrbLlIZMXC/JlZAnK/Cv4Q+IfAOqfA+0vo7e6g8IfDm88NanfWkwMIvC2ihAgba7K4srhg2wYCDdtLAHlfhb8IfHBt/h3ot7HrHw/fwD4Gl8IS+IrSbTrhtQuGk0o/aLBG+0gwFdMlBN1DFJtuIsRht3lID0lP2idD/t2S1l0PxBHoz3t/pdj4gitEubfUb+yW4a6tILeGR7wyp9ivQN1uqubZgjOXi8zoPAPxOXxrqmraPfeHdY8I+IdMht7u40fWjavN9lnaZIJw9rPPEVd7a4Xb5m8GEllUMhbyDSfh/wCOtO13w/pNt4V3f8Iv4z8R+MYtavtRgh0vUkv11g21rG0bS3SShtVgEjPbBF8mcq0mIxL2vwZ8O6zH4+8ceKb3w3rHhTTdahso4tP8TahBf6l9qjlvJJ3WWK4uRHaFbmBYrdZgkbJcFIYvMLSsD1+iiigR5V8G/wDkovx2/wCxztv/AFHtGoo+Df8AyUX47f8AY523/qPaNRQBi/AHWL618H3Wn6fZW93NceLPGU5a5umgVVj8R3i4+WN8kmUdh0r0e88RaxptxYW93aaDa3F/Mbazim1p0a5lEbymOMG3y7COKR9oydsbHopNeKfDfw3feMvhr4m0DTNauPDeparffEKxtdatN3nWEsviG5RLhNrKd0bMHGGU5UYI61zv7PH7OPxR1j4oWPxa/aH8SW+ueNvDcM2j+GNH0STy9NsYthgn1EqgUPPdqGfBUBVkGVUiOK2kZ45/wUH/AGmvjf8AC/8AaS8M+B/hV4k/su11Hw3FqMlo1jYyIJPPuxLPJNcxsIo0igDO7MsaJGzsVAZq+fY/2sv2yX1S4tG8faTbwQwxz/2vdP4ch0qVZGkWMRag6i1mZmhnUJHKzZt5xjMMgXsv+Covgy3+IP7angbQbvW7Dw7a3Pg+J5dR1K4hgijSO41CRlVppI4/McIUjWSSNGkdFZ0BLDwfxLZX3if4ea58OYr3wlpFxaXmiXfh/S28Z6VPbxaVbjWRP5mpfaBbyXJudQEjxl1djcM0cKQqEj/aMtw2E+oUG6VNycU3zRTerte/X9LXbWl/OnKXM9Wdlrn7Z37ZvhfwfN4p1vXNW0XQItS/sc32peGNPtla8zOGhQSWwLsjWs6vtB8tk2vtJUE8Zftq/tfeAdLiv9b8c28EBmFrOlvZaJdTWFwVZhb3kUUTPaTEJJiG4WNyYZRtzG4Xy/4wePNA8YaX8fr/AEnVbe5g1/4nWWsaYjExzXVmV1xvOWJwH2gTw7sqNplQNgsBXUfF/wAQeELe4+Kmqazd2/iTQPHXxCh8TaRY+G/EFqt9c6esesHzZCqXBsmDX9mTFcwrIdzqFBRynqrCYa8VLCU7vpyK/wBl2V+q5nf06akcz/mZ1Gpftq/tfaT4PTxLc+ObddOMMV1JClloj31vbylRDcT2axG4hhk8yLZNJGqN58O1j5se7L8U/t8ftZ+CbfQZte8Z3GlJr2mprGmi50HTFa4s3kkjjmC/Z8hWaJyu4Dcu1hlWUnLm1jwgbfXfEviHWrebwZ4i8E+FfDLQ6JqVrJrLzWcmhi+iSzZzLCyJp19tlnjWFjGmGYSx7+X/AGuPHXhj4jL8NNY8P69catP/AGDdQXFlJpsVjHpkX9r38lvapCl3cGFY45PLjgLYSCO2IYiTbG6OFwlSpCEsLCzevuLT3b223TunfttcHKVviN7/AIeaftKf9FI/8oWm/wDyNR/w80/aU/6KR/5QtN/+Rq+X6K9n+ycu/wCgeH/gMf8AIz9pPuftn/wS0+JviX4xfB34geL/ABfqX9r+ItR8Zy/arzyIoPM8vS9OiT5IlVBhI0HAGcZPOTRXL/8ABGf/AJNn8Xf9jnc/+kFhRX8+5pCNPH14QVkpySS6as9SHwo+ivDvwr+KfgeLVbDw38QPB8Wi3Wtapq8EOqeDbq5uIftt9PeNG8qarEr7WuGUMI1yFHGa1v8AhHPjf/0UP4f/APhB33/y5oorzCz5p/aW/wCCcPi79qjx3YeLPFnxb0XT9Rs9Nj0uOLRvBs0UJiSWWUMRJqUh3bpm5zjAHHUnyX/hyVP/ANFqj/8ACTP/AMnUUV7VHOsww9NUqVZqK2Rm6cG7tB/w5Kn/AOi1R/8AhJn/AOTqP+HJU/8A0WqP/wAJM/8AydRRW3+sGaf8/wCQvZQ7B/w5Kn/6LVH/AOEmf/k6j/hyVP8A9Fqj/wDCTP8A8nUUUf6wZp/z/kHsodg/4clT/wDRao//AAkz/wDJ1H/Dkqf/AKLVH/4SZ/8Ak6iij/WDNP8An/IPZQ7H2T+xj+yw37Ivwx1bwi3igeLW1DWpdX+2jTvsWzfBBD5ezzZM48jO7d/FjHGSUUV4dSpOtOVSbu27t+bNFpoj/9k="},540:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image7-cabe41f0ad66ac6feed60f1974db2f37.jpg"},541:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image9-fb48d73330c9b9a12b8d760401a2fdb1.jpg"},542:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image11-67a4c906f0f1badcb904d02b835e315e.jpg"},543:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image13-4bc0ec0415314b2df2fadd0d28d80453.jpg"},544:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image15-080e72f47151fe468a88425b30871d32.jpg"},545:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image17-680c50f162cdc5bb554fa3ee66bae561.jpg"},546:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image19-ecdf47cde8aa0e2a7a49484ce126e8d1.jpg"},547:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image21-8fc4058c17ce88d81da67f03540cb446.jpg"},548:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image23-9213abf73c0686bf7275ea4aec401bc3.jpg"},549:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image25-dddfb972bf9bc24bbedd023b10e3601d.jpg"},550:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image29-37a9568f340f549d9973c6a75c969f98.jpg"},551:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image30-17a0426c1980b5d69746afc76f22797e.jpg"},552:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/image33-de6f53e98fee9afa93babacc3d8dea85.jpg"}}]);