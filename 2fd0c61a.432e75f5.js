(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{190:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),u=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,b=o(e,["components","mdxType","originalType","parentName"]),s=u(n),O=a,f=s["".concat(c,".").concat(O)]||s[O]||p[O]||l;return n?r.a.createElement(f,i(i({ref:t},b),{},{components:n})):r.a.createElement(f,i({ref:t},b))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=O;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var b=2;b<l;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},191:function(e,t,n){"use strict";n.d(t,"b",(function(){return l})),n.d(t,"a",(function(){return c}));var a=n(22),r=n(192);function l(){var e=Object(a.default)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,l=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var l=void 0===a?{}:a,c=l.forcePrependBaseUrl,i=void 0!==c&&c,o=l.absolute,b=void 0!==o&&o;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(i)return t+n;var u=n.startsWith(t)?n:t+n.replace(/^\//,"");return b?e+u:u}(l,n,e,t)}}}function c(e,t){return void 0===t&&(t={}),(0,l().withBaseUrl)(e,t)}},192:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},193:function(e,t,n){"use strict";var a=n(0),r=n.n(a),l=n(10),c=n(192),i=n(8),o=Object(a.createContext)({collectLink:function(){}}),b=n(191),u=function(e,t){var n={};for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(a=Object.getOwnPropertySymbols(e);r<a.length;r++)t.indexOf(a[r])<0&&Object.prototype.propertyIsEnumerable.call(e,a[r])&&(n[a[r]]=e[a[r]])}return n};t.a=function(e){var t,n,s,p=e.isNavLink,O=e.to,f=e.href,d=e.activeClassName,j=e.isActive,m=e["data-noBrokenLinkCheck"],v=u(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(b.b)().withBaseUrl,g=Object(a.useContext)(o),N=O||f,y=Object(c.a)(N),w=null==N?void 0:N.replace("pathname://",""),x=void 0!==w?function(e){return e.startsWith("/")}(n=w)?h(n):n:void 0,E=Object(a.useRef)(!1),C=p?l.e:l.c,k=i.a.canUseIntersectionObserver;Object(a.useEffect)((function(){return!k&&y&&window.docusaurus.prefetch(x),function(){k&&s&&s.disconnect()}}),[x,k,y]);var P=null!==(t=null==x?void 0:x.startsWith("#"))&&void 0!==t&&t,T=!x||!y||P;return x&&y&&!P&&!m&&g.collectLink(x),T?r.a.createElement("a",Object.assign({href:x},N&&!y&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(C,Object.assign({},v,{onMouseEnter:function(){E.current||(window.docusaurus.preload(x),E.current=!0)},innerRef:function(e){var t,n;k&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(x)},(s=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(s.unobserve(t),s.disconnect(),n())}))}))).observe(t))},to:x||""},p&&{isActive:j,activeClassName:d}))}},92:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),l=(n(0),n(190)),c=n(191),i=n(193),o={id:"if",title:"IF"},b={unversionedId:"references/formulas/if",id:"references/formulas/if",isDocsHomePage:!1,title:"IF",description:"An IF statement returns a value depending on whether the condition that is being evaluated is TRUE or FALSE.",source:"@site/docs/references/formulas/if.mdx",slug:"/references/formulas/if",permalink:"/references/formulas/if",version:"current",sidebar:"functionSideBar",next:{title:"AND",permalink:"/references/formulas/and"}},u=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return Value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],s={rightToc:u};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"An ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," statement returns a value depending on whether the condition that is being evaluated is TRUE or FALSE. "),Object(l.b)("h2",{id:"syntax"},"Syntax"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"IF( logical_test, value_if_true, value_if_false )\n")),Object(l.b)("h2",{id:"arguments"},"Arguments"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"logical_test")," \u2013 The condition to be evaluated."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value_if_true")," \u2013 The value to be returned if the condition is met."),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"value_if_false")," \u2013 The value to be returned if the condition is not met."),Object(l.b)("h2",{id:"return-value"},"Return Value"),Object(l.b)("p",null,"Either ",Object(l.b)("inlineCode",{parentName:"p"},"value_if_true")," or ",Object(l.b)("inlineCode",{parentName:"p"},"value_if_false"),"."),Object(l.b)("h2",{id:"remarks"},"Remarks"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Returns Blank when the formula is misspelled."),Object(l.b)("li",{parentName:"ul"},"The ",Object(l.b)("inlineCode",{parentName:"li"},"IF")," function returns Error in any of the following cases :",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},"value_if_false argument is missing"),Object(l.b)("li",{parentName:"ul"},"The argument value_if_true or value_if_false are not of numeric data type"),Object(l.b)("li",{parentName:"ul"},"Not using appropriate ",Object(l.b)(i.a,{to:Object(c.a)("faq/formula-list#other-operators"),mdxType:"Link"},"operator")," in logical_test")))),Object(l.b)("h2",{id:"example"},"Example"),Object(l.b)("p",null,"Consider the Revenue and Cost of Goods Sold nodes to follow the trend as shown below"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Jan"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Feb"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mar"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Apr"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"May"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Jun"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Revenue"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"100"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"124"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"137"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"23"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"45")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Cost of Goods Sold"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"25")))),Object(l.b)("div",{style:{textAlign:"justify"}},Object(l.b)("p",null,"Now, a new node Gross Profit Margin can be computed using the ",Object(l.b)("inlineCode",{parentName:"p"},"IF")," function.\nGross Profit Margin is calculated as (Revenue-Cost of Goods Sold)/Revenue.\nIn case, Revenue has period value of 0, Gross Profit Margin should return 0.")),Object(l.b)("p",null,"To achieve this, the formula should be "),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-javascript"}),"IF(Revenue==0,0,(Revenue-Cost of Goods Sold)/Revenue)\n")),Object(l.b)("p",null,"The result of the above formula is shown below"),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Parameter"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Jan"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Feb"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Mar"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Apr"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"May"),Object(l.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Jun"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Gross Profit Margin"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"75%"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"80%"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"82%"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"0"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"(9%)"),Object(l.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"44%")))),Object(l.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(l.b)("p",null,Object(l.b)("a",Object(a.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/if-function-69aed7c9-4e8a-4755-a9bc-aa8bbff73be2"}),"IF")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Tip")," ",Object(l.b)("br",null)," Use ",Object(l.b)(i.a,{to:Object(c.a)("references/formulas/switch"),mdxType:"Link"},"SWITCH")," function instead of nesting multiple IF functions")))}p.isMDXComponent=!0}}]);