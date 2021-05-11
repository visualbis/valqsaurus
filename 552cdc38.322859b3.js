(window.webpackJsonp=window.webpackJsonp||[]).push([[45],{112:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return b})),t.d(a,"rightToc",(function(){return u})),t.d(a,"default",(function(){return d}));var n=t(3),i=t(7),s=(t(0),t(192)),o=t(193),r=t(195),c=t(197),l=(t(54),{id:"analyze_overview",title:"Analyze Tab",sidebar_label:"Analyze Tab"}),b={unversionedId:"analysis/analyze_overview",id:"analysis/analyze_overview",isDocsHomePage:!1,title:"Analyze Tab",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/analysis/analyze_overview.mdx",slug:"/analysis/analyze_overview",permalink:"/analysis/analyze_overview",version:"current",sidebar_label:"Analyze Tab",sidebar:"sideBar",previous:{title:"Support for Touch Devices",permalink:"/simulation/touch-support"},next:{title:"Variance Analysis",permalink:"/analysis/variance_analysis"}},u=[],y={rightToc:u};function d(e){var a=e.components,t=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},y,t,{components:a,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Run advanced analysis on your data model and evaluate your business performance to take actions using ValQ\u2019s Analyze tab."),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Analyze Tab",src:Object(o.a)("/doc-images/analyze/analyze-tab.png")})),Object(s.b)("p",null,"Analyze tab and the 3 types of analysis")),Object(s.b)("p",null,"Below are the 3 types of analysis that you can perform:"),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/variance_analysis"),mdxType:"Link"},"Variance Analysis"),": Compare multiple series/scenario to calculate the absolute and percentage variance for each node in the model.")),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Variance Analysis",src:Object(o.a)("/doc-images/analyze/var-analysis.png")}))),Object(s.b)("ol",{start:2},Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/attribution-analysis"),mdxType:"Link"},"Attribution Analysis"),": Evaluate the simulation impact of various input nodes and it's cumulative effect on the Key Performance Indicator.")),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Attribution Analysis",src:Object(o.a)("/doc-images/analyze/attr-analysis.png")}))),Object(s.b)("ol",{start:3},Object(s.b)("li",{parentName:"ol"},Object(s.b)(r.a,{to:Object(o.a)("analysis/sensitivity-analysis"),mdxType:"Link"},"Sensitivity Analysis"),": Identify and analyze how the output node gets affected in response to deviation in a value driver represented by way of a tornado chart.")),Object(s.b)("div",{class:"center"},Object(s.b)(c.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sensitivity Analysis",src:Object(o.a)("/doc-images/analyze/sensitivity-analysis.png")}))))}d.isMDXComponent=!0},195:function(e,a,t){"use strict";var n=t(0),i=t.n(n),s=t(10),o=t(194),r=t(8),c=Object(n.createContext)({collectLink:function(){}}),l=t(193),b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)a.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(t[n[i]]=e[n[i]])}return t};a.a=function(e){var a,t,u,y=e.isNavLink,d=e.to,p=e.href,v=e.activeClassName,m=e.isActive,O=e["data-noBrokenLinkCheck"],f=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),j=Object(l.b)().withBaseUrl,h=Object(n.useContext)(c),w=d||p,g=Object(o.a)(w),k=null==w?void 0:w.replace("pathname://",""),z=void 0!==k?function(e){return e.startsWith("/")}(t=k)?j(t):t:void 0,A=Object(n.useRef)(!1),T=y?s.e:s.c,x=r.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&g&&window.docusaurus.prefetch(z),function(){x&&u&&u.disconnect()}}),[z,x,g]);var _=null!==(a=null==z?void 0:z.startsWith("#"))&&void 0!==a&&a,L=!z||!g||_;return z&&g&&!_&&!O&&h.collectLink(z),L?i.a.createElement("a",Object.assign({href:z},w&&!g&&{target:"_blank",rel:"noopener noreferrer"},f)):i.a.createElement(T,Object.assign({},f,{onMouseEnter:function(){A.current||(window.docusaurus.preload(z),A.current=!0)},innerRef:function(e){var a,t;x&&e&&g&&(a=e,t=function(){window.docusaurus.prefetch(z)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(a),u.disconnect(),t())}))}))).observe(a))},to:z||""},y&&{isActive:m,activeClassName:v}))}}}]);