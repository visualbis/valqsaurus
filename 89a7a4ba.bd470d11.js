(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return u}));var r=a(1),n=a(9),i=(a(0),a(177)),o=a(178),l={id:"data-series",title:"Data Series"},s={id:"model/data-series",title:"Data Series",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/model/data-series.mdx",permalink:"/valqsaurus/docs/model/data-series",sidebar:"sideBar",previous:{title:"Node",permalink:"/valqsaurus/docs/model/node"},next:{title:"Settings",permalink:"/valqsaurus/docs/model/settings"}},c=[{value:"Data Series Manager",id:"data-series-manager",children:[]},{value:"Time Aggregation Labels",id:"time-aggregation-labels",children:[]},{value:"Data Sorting",id:"data-sorting",children:[]},{value:"Additional Properties of Data Series Tab",id:"additional-properties-of-data-series-tab",children:[]}],b={rightToc:c};function u(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Using the \u201cData Series\u201d Tab, you will be able to configure the Data\nsettings for the Tree created in valQ. There are 3 different options as\nlisted below to configure the data settings for the Tree (see Figure\nbelow)."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Data Series Manager"),Object(i.b)("li",{parentName:"ol"},"Time Aggregation Labels"),Object(i.b)("li",{parentName:"ol"},"Data Sorting")),Object(i.b)("img",{alt:"Data Series Tab",src:Object(o.a)("/doc-images/dma.png")}),Object(i.b)("h2",{id:"data-series-manager"},"Data Series Manager"),Object(i.b)("p",null,'Using the option "Data Series Manager", you will be able to configure\nthe Periods and Data Series for the Tree (see Figure below).'),Object(i.b)("img",{alt:"Data Series Tab \u2013 Data Series Manager",src:Object(o.a)("/doc-images/dm1.png")}),Object(i.b)("p",null,"For our example, we have the data source having periods from Jan to Dec,\nBudget and Forecast values. The Budget values will be the Comparison\nvalues and the Forecast values will be the Baseline values. Follow the\nbelow steps for configuring the values in the Data Series Manager."),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Set the property Period(s) per data series to the value 5."),Object(i.b)("li",{parentName:"ol"},"Configure the Period Labels as Jan, Feb, Mar, Apr, May (see Figure\nabove)."),Object(i.b)("li",{parentName:"ol"},"Enable the property Include comparison data series. You can view\nboth the Baseline and Comparison values."),Object(i.b)("li",{parentName:"ol"},"When the property Include comparison data series is disabled, then\nyou will be able to view only the Baseline Series."),Object(i.b)("li",{parentName:"ol"},"Since our data set has the Additional values Additional 1 and\nAdditional 2, it will be displayed as Additional Series (see Figure\nabove)."),Object(i.b)("li",{parentName:"ol"},"When you click the Baseline label, you will be able view the\nBaseline values as Forecast values as shown below.")),Object(i.b)("img",{alt:"Baseline Values",src:Object(o.a)("/doc-images/dm2.png")}),Object(i.b)("ol",{start:7},Object(i.b)("li",{parentName:"ol"},"When you click the Comparison label, you will be able view the\nComparison values as the Budget values as shown below")),Object(i.b)("img",{alt:"Comparison Values",src:Object(o.a)("/doc-images/dm3.png")}),Object(i.b)("p",null,"Based on the above set of configuration steps, you will be able to view\nthe valQ screen as shown below."),Object(i.b)("img",{alt:"valQ screen configured with Periods and Data Series",src:Object(o.a)("/doc-images/dm4.png")}),Object(i.b)("p",null,"You can observe from the above Figure that after simulating the Node\nSale Allowances, you will be able to view the Baseline data in\ncomparison with simulated Baseline data."),Object(i.b)("h2",{id:"time-aggregation-labels"},"Time Aggregation Labels"),Object(i.b)("p",null,"Using the option \u201cTime Aggregation Labels\u201d, you will be able to\nconfigure the Active Period, Till Prior Period, All Periods and\nSimulation Period settings (see Figure below)."),Object(i.b)("img",{alt:"Data Label \u2013 Time Aggregation Labels",src:Object(o.a)("/doc-images/14.7.png")}),Object(i.b)("p",null,"Based on the above configuration, you will be able to view the valQ\nscreen as shown below."),Object(i.b)("img",{alt:"valQ screen with time aggregation labels",src:Object(o.a)("/doc-images/14.8.png")}),Object(i.b)("p",null,"From the above Figure, you will be able to view the Time Aggregation\nLabels as highlighted in the valQ screen."),Object(i.b)("h2",{id:"data-sorting"},"Data Sorting"),Object(i.b)("p",null,"Using the Data Sorting settings, you will be able to view and customize\nyour Data Source. You will be able to select the Sort fields, sort the\ndata with Ascending or Descending Order and select the Start With field\nwith the required Month (see Figure below)."),Object(i.b)("img",{alt:"Data Sorting Settings",src:Object(o.a)("/doc-images/14.13.png")}),Object(i.b)("h2",{id:"additional-properties-of-data-series-tab"},"Additional Properties of Data Series Tab"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"Additional Properties of Data Series Tab")))}u.isMDXComponent=!0},176:function(e,t,a){"use strict";var r=a(0),n=a(48);t.a=function(){return Object(r.useContext)(n.a)}},177:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return p}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=n.a.createContext({}),b=function(e){var t=n.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},u=function(e){var t=b(e.components);return n.a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},g=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=b(a),g=r,p=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return a?n.a.createElement(p,l({ref:t},c,{components:a})):n.a.createElement(p,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=g;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}g.displayName="MDXCreateElement"},178:function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));a(181);var r=a(176);function n(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,a=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?a+e.slice(1):a+e}},179:function(e,t,a){var r=a(66),n=a(23);e.exports=function(e,t,a){if(r(t))throw TypeError("String#"+a+" doesn't accept regex!");return String(n(e))}},180:function(e,t,a){var r=a(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(a){try{return t[r]=!1,!"/./"[e](t)}catch(n){}}return!0}},181:function(e,t,a){"use strict";var r=a(17),n=a(34),i=a(179),o="".startsWith;r(r.P+r.F*a(180)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),a=n(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,a):t.slice(a,a+r.length)===r}})}}]);