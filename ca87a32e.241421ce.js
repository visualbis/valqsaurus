(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return s}));var r=n(3),a=n(7),i=(n(0),n(190)),c={id:"and",title:"AND"},o={unversionedId:"references/formulas/and",id:"references/formulas/and",isDocsHomePage:!1,title:"AND",description:"An AND statement returns TRUE only if all the arguments are TRUE and returns FALSE if any of the arguments is FALSE.",source:"@site/docs/references/formulas/and.mdx",slug:"/references/formulas/and",permalink:"/references/formulas/and",version:"current",sidebar:"functionSideBar",previous:{title:"IF",permalink:"/references/formulas/if"},next:{title:"SWITCH",permalink:"/references/formulas/switch"}},l=[{value:"Syntax",id:"syntax",children:[]},{value:"Arguments",id:"arguments",children:[]},{value:"Return value",id:"return-value",children:[]},{value:"Remarks",id:"remarks",children:[]},{value:"Example",id:"example",children:[]},{value:"Excel Equivalent",id:"excel-equivalent",children:[]}],u={rightToc:l};function s(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"An ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," statement returns TRUE only if ",Object(i.b)("strong",{parentName:"p"},"all")," the arguments are TRUE and returns FALSE if any of the arguments is FALSE. "),Object(i.b)("h2",{id:"syntax"},"Syntax"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"AND ( logical_test1, [logical_test2], ... )\n")),Object(i.b)("h2",{id:"arguments"},"Arguments"),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"logical_test1")," \u2013 The first condition to be evaluated. This is a required argument."),Object(i.b)("p",null,Object(i.b)("inlineCode",{parentName:"p"},"logical_test2, \u2026"),"  \u2013 The additional conditions to be evaluated. These are optional arguments."),Object(i.b)("h2",{id:"return-value"},"Return value"),Object(i.b)("p",null,"Either True or False."),Object(i.b)("h2",{id:"remarks"},"Remarks"),Object(i.b)("p",null,"The ",Object(i.b)("inlineCode",{parentName:"p"},"AND")," function accepts multiple conditions."),Object(i.b)("h2",{id:"example"},"Example"),Object(i.b)("p",null,"Consider a scenario in which if the number of licenses are greater than 500 and usage period is greater than 24 months,\nthen the price should be $20 else $25."),Object(i.b)("p",null,"To achieve this, the formula should be"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-javascript"}),"IF(AND(Num_of_Licenses>500,Duration<24),20,25)\n")),Object(i.b)("h2",{id:"excel-equivalent"},"Excel Equivalent"),Object(i.b)("p",null,Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://support.office.com/en-gb/article/and-function-5f19b2e8-e1df-4408-897a-ce285a19e9d9"}),"AND")))}s.isMDXComponent=!0},190:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),s=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(n),f=r,d=p["".concat(c,".").concat(f)]||p[f]||b[f]||i;return n?a.a.createElement(d,o(o({ref:t},u),{},{components:n})):a.a.createElement(d,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,c=new Array(i);c[0]=f;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:r,c[1]=o;for(var u=2;u<i;u++)c[u]=n[u];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"}}]);