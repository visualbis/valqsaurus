(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{132:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return u}));var r=n(1),a=n(9),i=(n(0),n(160)),o=(n(156),{id:"understanding-variances",title:"Understanding Variances"}),c={id:"general/understanding-variances",title:"Understanding Variances",description:"import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.",source:"@site/docs/general/understanding-variances.mdx",permalink:"/valqsaurus/docs/general/understanding-variances",sidebar:"sideBar",previous:{title:"General features of ValQ Custom Visual",permalink:"/valqsaurus/docs/general/getting-started"},next:{title:"Understanding the Node Widget Information",permalink:"/valqsaurus/docs/general/understanding-node-widget"}},l=[],s={rightToc:l};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"The starting point for a simulation is a selection of two versions\n-",Object(i.b)("strong",{parentName:"p"},"Primary Version")," and a ",Object(i.b)("strong",{parentName:"p"},"Comparison Version")," and a year. For\ninstance a forecast vs current budget."),Object(i.b)("p",null,"Once we start simulating, changes are applied to the primary version. We\ncall this changing version the Simulation."),Object(i.b)("p",null,"To understand the improvements we achieve, we also keep track of the\noriginal values from the primary version without simulation changes. We\ntherefore have 3 data series in the model that we calculate and compare:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Simulation (The Primary Version including applied variations)"),Object(i.b)("li",{parentName:"ol"},"Original (The Primary Version without variations)"),Object(i.b)("li",{parentName:"ol"},"Target (The Comparison Version)")),Object(i.b)("p",null,"Based on the above, we calculate the following variances:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simulated Variance (Simulation vs Target)")),Object(i.b)("p",null,"Q: If we changed these things, would we hit target?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Simulation Impact (Simulation vs Original)")),Object(i.b)("p",null,"Q: How much would we improve if we made these changes?"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Original Variance (Original vs. Target)")),Object(i.b)("p",null,"Q: What was our variance if we did nothing?"))}u.isMDXComponent=!0},155:function(e,t,n){"use strict";var r=n(0),a=n(48);t.a=function(){return Object(r.useContext)(a.a)}},156:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));n(159);var r=n(155);function a(e){var t=(Object(r.a)().siteConfig||{}).baseUrl,n=void 0===t?"/":t;if(!e)return e;return/^(https?:|\/\/)/.test(e)?e:e.startsWith("/")?n+e.slice(1):n+e}},157:function(e,t,n){var r=n(66),a=n(23);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},158:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},159:function(e,t,n){"use strict";var r=n(17),a=n(34),i=n(157),o="".startsWith;r(r.P+r.F*n(158)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},160:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return b}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),u=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},p=function(e){var t=u(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=r,b=p["".concat(o,".").concat(f)]||p[f]||d[f]||i;return n?a.a.createElement(b,c({ref:t},s,{components:n})):a.a.createElement(b,c({ref:t},s))}));function b(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var s=2;s<i;s++)o[s]=n[s];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);