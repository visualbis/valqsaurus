(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{168:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(203)),c={id:"rate",title:"RATE"},i={unversionedId:"references/formulas/rate",id:"references/formulas/rate",isDocsHomePage:!1,title:"RATE",description:"The RATE function returns the interest rate per period of a loan or an investment.",source:"@site/docs/references/formulas/rate.mdx",slug:"/references/formulas/rate",permalink:"/docs/references/formulas/rate",version:"current",sidebar:"functionSideBar",previous:{title:"CUMPRINC",permalink:"/docs/references/formulas/cumprinc"},next:{title:"RANGE",permalink:"/docs/references/formulas/range"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"RATE")," function returns the interest rate per period of a loan or an investment."),Object(o.b)("h2",{id:"syntax"},"Syntax"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"RATE (Nper, PMT, PV, [FV], [Type], [Guess])\n")),Object(o.b)("h2",{id:"arguments"},"Arguments"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Nper")," \u2013 The total number of periods."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PMT")," \u2013 The payment made each period."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"PV")," \u2013 The present value - the total amount that a series of future payments is worth now. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"FV")," \u2013 The future value or a cash balance you want to attain after the last payment is made. This is an optional argument."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Type")," \u2013 Indicates when the payments are made. Type is zero if payments are made at the end of the period and non-zero if payments are made at the start of the period. "),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"Guess")," \u2013 Estimate of what the rate will be. This is an optional argument."),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("p",null,"Consider a series of $2000 payments made at the end of each year for 6 years. The objective is to calculate the interest rate where the present value is $10,000.  "),Object(o.b)("p",null,"To calculate the present value, the formula should be "),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"RATE (Number of Periods, PMT, Present Value,0)\n")),Object(o.b)("p",null,"The interest rate is calculated to be 5.47%."),Object(o.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(o.b)("p",null,Object(o.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-us/article/RATE-function-9F665657-4A7E-4BB7-A030-83FC59E748CE"}),"RATE")))}p.isMDXComponent=!0},203:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),p=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),f=r,m=s["".concat(c,".").concat(f)]||s[f]||b[f]||o;return n?a.a.createElement(m,i(i({ref:t},u),{},{components:n})):a.a.createElement(m,i({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=f;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);