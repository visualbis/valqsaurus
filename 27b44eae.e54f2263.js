(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{130:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return d}));var a=n(1),r=n(9),o=(n(0),n(160)),c=n(156),s={id:"storage-collaboration",title:"Storage and Collaboration"},i={id:"storage/storage-collaboration",title:"Storage and Collaboration",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/storage/storage-collaboration.mdx",permalink:"/valqsaurus/docs/storage/storage-collaboration",sidebar:"sideBar",previous:{title:"Variance Analysis",permalink:"/valqsaurus/docs/analysis/variance-analysis"},next:{title:"List of Formulas and Functions",permalink:"/valqsaurus/docs/faq/formula-list"}},l=[],u={rightToc:l};function d(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The storage feature allows user to access, store, audit, collaborate,\nsynchronize, and run further analysis on the baseline, comparison, and\nthe simulated data series across the entire model scenarios. Users\nrequire a dedicated ValQ workspace access authenticated by their Office\n365 credentials."),Object(o.b)("p",null,"After successful login, user can see additional options such as Sync,\nComments, and History Log"),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.1.png")}),Object(o.b)("p",null,"In the screenshot model, lets assume the user deletes a node 'Ryan\nSmith'"),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.2.1.png")}),Object(o.b)("p",null,"Lets also assume the user simulates on another node 'Chris Morris'"),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.2.2.png")}),Object(o.b)("p",null,"User can comment on the changes made by clicking the 'Comments' icon on\ntop of the node. The comment along with the username and time log is\nsaved and displayed."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.3.png")}),Object(o.b)("p",null,"User can synchronize and store the changes to the workspace by clicking\nthe 'Sync' icon, naming the model, and clicking 'Upload'."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.4.png")}),Object(o.b)("p",null,"The 'History Log' has captured the model and scenario level changes made\nby the user in a chronological order. This icon helps in auditing the\nchanges in the ValQ model."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.5.png")}),Object(o.b)("p",null,"The comments can also be tracked under the model level 'Comments' icon.\nComments window displays all user comments at Scenario-Node level."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.6.png")}),Object(o.b)("p",null,"ValQ has also been made collaborative - Users who are a part of the same\nworkspace can also collaborate on the same ValQ model. Assuming a second\nuser accessing the same model simulates on the existing scenario,\ncreates additional scenario, adds a new node, and comments on the\nchanges done. To store these changes, the user also synchronizes them to\nthe workapce."),Object(o.b)("p",null,"Once the first user logs in, all the changes made by the second user are\nsynced up and displayed at the ValQ canvas."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.7.png")}),Object(o.b)("p",null,"The changes at a Model/Scenario level are captured at the History Log.\nThe comments in chronological order between users are displayed at a\nNode-Scenario level"),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.8.png")}),Object(o.b)("p",null,"Lastly, users can also export their export all the data values fed and\ngenerated from ValQ - namely, basline, comparison, and scenario data.\nUnder the 'Sync' window, users can export their ValQ data by clicking\n'Export model as a web data source', making the data series and scenario\nselection, and clicking 'Download CSV' (through Power BI Service) or\ncopy-pasting the URLs into Excel (through Power BI Desktop)"),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.9.1.png")}),Object(o.b)("p",null,"In Excel, the copied URLs are fed into the 'From Web' - 'Advanced'\nwindow to generate the exported data."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.10.png")}),Object(o.b)("p",null,"Users can also run further simulations to their scenarios and instantly\nsynchronize the new data by refreshing the data query within 'Queries &\nConnections' in Excel."),Object(o.b)("img",{alt:"",src:Object(c.a)("/doc-images//SC.11.png")}))}d.isMDXComponent=!0},155:function(e,t,n){"use strict";var a=n(0),r=n(48);t.a=function(){return Object(a.useContext)(r.a)}},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n(159);var a=n(155);function r(e){var t=(Object(a.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},157:function(e,t,n){var a=n(66),r=n(23);e.exports=function(e,t,n){if(a(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(r(e))}},158:function(e,t,n){var a=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[a]=!1,!"/./"[e](t)}catch(r){}}return!0}},159:function(e,t,n){"use strict";var a=n(17),r=n(34),o=n(157),c="".startsWith;a(a.P+a.F*n(158)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),n=r(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),a=String(e);return c?c.call(t,a,n):t.slice(n,n+a.length)===a}})},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,m=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);