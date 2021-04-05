(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{148:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return b})),a.d(t,"default",(function(){return d}));var n=a(3),i=a(7),s=(a(0),a(190)),r=a(191),o=(a(193),a(195)),c=(a(54),{id:"sensitivity-analysis",title:"Sensitivity Analysis",sidebar_label:"Sensitivity Analysis"}),l={unversionedId:"analysis/sensitivity-analysis",id:"analysis/sensitivity-analysis",isDocsHomePage:!1,title:"Sensitivity Analysis",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/analysis/sensitivity-analysis.mdx",slug:"/analysis/sensitivity-analysis",permalink:"/analysis/sensitivity-analysis",version:"current",sidebar_label:"Sensitivity Analysis",sidebar:"sideBar",previous:{title:"Attribution Analysis",permalink:"/analysis/attribution-analysis"},next:{title:"ValQ Collaborate Enterprise Edition",permalink:"/storage/valq-collaborate"}},b=[{value:"Key Features",id:"key-features",children:[]},{value:"Create a Sensitivity Analysis chart",id:"create-a-sensitivity-analysis-chart",children:[{value:"Edit the Analysis report",id:"edit-the-analysis-report",children:[]},{value:"Sensitivity Analysis based simulation",id:"sensitivity-analysis-based-simulation",children:[]}]},{value:"Sensitivity Analysis summary",id:"sensitivity-analysis-summary",children:[]}],p={rightToc:b};function d(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(s.b)("wrapper",Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"In a business model, you can now analyze how different input variables affect the selected target node in the form of a tornado chart."),Object(s.b)("p",null,"The sensitivity analysis feature allows you to select the input nodes to be simulated and the percentage of variance to determine the result on the output node. A summary of all the resulted sensitivity analysis reports helps in a deeper analysis of the key performance nodes."),Object(s.b)("h2",{id:"key-features"},"Key Features"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},"The analysis is done by selecting one output driver(node) from the model and selecting up to 20 input drivers."),Object(s.b)("li",{parentName:"ul"},"The percentage variation is provided as input. If 10% is provided as an input all the input nodes will be simulated by +10% and -10% and recorded value for the output will be plotted in the tornado chart."),Object(s.b)("li",{parentName:"ul"},"A summary report of multiple tornado charts helps in a deeper analysis."),Object(s.b)("li",{parentName:"ul"},"Usually, the tornado analysis is performed on the historical Series as a precursor to the planning operation, but we will allow the user to select a series and run the analysis for flexibility.")),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Attribution Analysis",src:Object(r.a)("/doc-images/analyze/sensitivity-tab.png")})),Object(s.b)("p",null,"Sensitivity Analysis tab")),Object(s.b)("h2",{id:"create-a-sensitivity-analysis-chart"},"Create a Sensitivity Analysis chart"),Object(s.b)("p",null,"Let's consider a Mining model where the  ",Object(s.b)("strong",{parentName:"p"},"Net Profit")," has a base value of $56.8m."),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Mining Model",src:Object(r.a)("/doc-images/analyze/mining-model.png")})),Object(s.b)("p",null,"Mining Model with Key input nodes highlighted")),Object(s.b)("p",null,"Say, you want to analyze how multiple ",Object(s.b)("em",{parentName:"p"},"key Inputs")," - ",Object(s.b)("em",{parentName:"p"},"Copper Price, Diesel Price"),", and ",Object(s.b)("em",{parentName:"p"},"Mill Throughput")," value change will affect the overall ",Object(s.b)("em",{parentName:"p"},"Net Profit"),". "),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Go to ",Object(s.b)("strong",{parentName:"p"},"Analyze > Sensitivity Analysis")),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sensitivity Analysis",src:Object(r.a)("/doc-images/analyze/sensitivity-analysis-option.png")})),Object(s.b)("p",null,"Select Sensitivity Analysis option"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Fill in the ",Object(s.b)("strong",{parentName:"p"},"New Sensitivity Chart")," with the following fields: "),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Analysis Name"),": A relevant name of the chart"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Series"),": Select the Series from the drop-down list"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Output Node"),": The resultant node that is affected by the simulation"),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Deviation"),": Percentage of variance applied on the input nodes. This value must be between 1 and 100."),Object(s.b)("li",{parentName:"ul"},Object(s.b)("strong",{parentName:"li"},"Period"),": Time period")),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"New Sensitivity Chart",src:Object(r.a)("/doc-images/analyze/create-analysis.png")})),Object(s.b)("p",null,"Fill in the new sensitivity chart fields"))),Object(s.b)("li",{parentName:"ol"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Next")))),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"In the ",Object(s.b)("strong",{parentName:"p"},"Node Selection")," window, click the plus (+) sign next to the 3 ",Object(s.b)("em",{parentName:"p"},"Key Input")," nodes to select them."),Object(s.b)("ul",{parentName:"li"},Object(s.b)("li",{parentName:"ul"},"Start typing a node's name in the ",Object(s.b)("strong",{parentName:"li"},"Search")," box to search for the related node.")),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Select input nodes",src:Object(r.a)("/doc-images/analyze/select-input-nodes.png")})),Object(s.b)("p",null,"Key input nodes selected in the right pane")),Object(s.b)("div",Object(n.a)({parentName:"li"},{className:"admonition admonition-note alert alert--secondary"}),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"You can select up to 20 nodes.")))),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"Click ",Object(s.b)("strong",{parentName:"p"},"Save"),"."))),Object(s.b)("p",null,"Your ",Object(s.b)("em",{parentName:"p"},"Sensitivity Analysis")," chart will be created as shown in the screenshot below:"),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Sensitivity Analysis chart for Net Profit",src:Object(r.a)("/doc-images/analyze/sensitivity-analysis-chart.png")})),Object(s.b)("p",null,"Sensitivity Analysis chart for Net Profit")),Object(s.b)("p",null,"As you hover over each input node's bar, each node indicates the same ",Object(s.b)("strong",{parentName:"p"},"Base")," value ($56.81m) as ",Object(s.b)("em",{parentName:"p"},"Net Profit"),", ",Object(s.b)("strong",{parentName:"p"},"Variance")," change in the value, and the resulted ",Object(s.b)("strong",{parentName:"p"},"Low")," and ",Object(s.b)("strong",{parentName:"p"},"High")," output node values when the input node is simulated by +/- Deviation percentage."),Object(s.b)("h3",{id:"edit-the-analysis-report"},"Edit the Analysis report"),Object(s.b)("p",null,"Once you create your report, use the top menu label to edit the report.",Object(s.b)("br",{parentName:"p"}),"\n","You can edit the report's ",Object(s.b)("em",{parentName:"p"},"Name"),", ",Object(s.b)("em",{parentName:"p"},"Series"),", ",Object(s.b)("em",{parentName:"p"},"Output Node"),", ",Object(s.b)("em",{parentName:"p"},"Deviation")," percentage, time ",Object(s.b)("em",{parentName:"p"},"Period"),", and ",Object(s.b)("em",{parentName:"p"},"Input Nodes"),".\nThe report is auto-updated and saved to your workspace."),Object(s.b)("h3",{id:"sensitivity-analysis-based-simulation"},"Sensitivity Analysis based simulation"),Object(s.b)("p",null,"Go to the ",Object(s.b)("strong",{parentName:"p"},"Simulate")," tab and simulate the ",Object(s.b)("em",{parentName:"p"},"Mill Throughput")," node by +/- 10%.\nThe simulation affects the ",Object(s.b)("em",{parentName:"p"},"Net Profit")," output node and changes the value to $93.1m as depicted by our ",Object(s.b)("em",{parentName:"p"},"Sensitivity Analysis")," report."),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Simulate Mill Throughput by +10%",src:Object(r.a)("/doc-images/analyze/simulate-node-better.png")})),Object(s.b)("p",null,"Input node deviation (+10%) effect on the output node")),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"Simulate Mill Throughput by -10%",src:Object(r.a)("/doc-images/analyze/simulate-node-worst.png")})),Object(s.b)("p",null,"Input node deviation (-10%) effect on the output node")),Object(s.b)("h2",{id:"sensitivity-analysis-summary"},"Sensitivity Analysis summary"),Object(s.b)("p",null,"To get a consolidated view of all the analysis reports, click ",Object(s.b)("strong",{parentName:"p"},"View Summary")," at the top right corner on the ",Object(s.b)("em",{parentName:"p"},"Sensitivity Analysis")," screen."),Object(s.b)("div",{class:"center"},Object(s.b)(o.a,{mdxType:"Zoom"},Object(s.b)("img",{alt:"",src:Object(r.a)("/doc-images/analyze/sensitivity-analysis-summary.png")})),Object(s.b)("p",null,"Sensitivity Analysis summary")),Object(s.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(s.b)("h5",{parentName:"div"},Object(s.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(s.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(s.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(s.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(s.b)("p",{parentName:"div"},"When an input node has no direct effect on the output node, the tornado chart displays no bar for the input driver.\nAs is the case in the ",Object(s.b)("em",{parentName:"p"},"Mining")," report, the input nodes ",Object(s.b)("em",{parentName:"p"},"Recovery")," and ",Object(s.b)("em",{parentName:"p"},"Copper Sold")," do not affect the ",Object(s.b)("em",{parentName:"p"},"Mining")," node."))))}d.isMDXComponent=!0},193:function(e,t,a){"use strict";var n=a(0),i=a.n(n),s=a(10),r=a(192),o=a(8),c=Object(n.createContext)({collectLink:function(){}}),l=a(191),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,p,d=e.isNavLink,m=e.to,u=e.href,O=e.activeClassName,y=e.isActive,h=e["data-noBrokenLinkCheck"],j=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(l.b)().withBaseUrl,N=Object(n.useContext)(c),g=m||u,f=Object(r.a)(g),w=null==g?void 0:g.replace("pathname://",""),S=void 0!==w?function(e){return e.startsWith("/")}(a=w)?v(a):a:void 0,A=Object(n.useRef)(!1),k=d?s.e:s.c,T=o.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!T&&f&&window.docusaurus.prefetch(S),function(){T&&p&&p.disconnect()}}),[S,T,f]);var x=null!==(t=null==S?void 0:S.startsWith("#"))&&void 0!==t&&t,M=!S||!f||x;return S&&f&&!x&&!h&&N.collectLink(S),M?i.a.createElement("a",Object.assign({href:S},g&&!f&&{target:"_blank",rel:"noopener noreferrer"},j)):i.a.createElement(k,Object.assign({},j,{onMouseEnter:function(){A.current||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){var t,a;T&&e&&f&&(t=e,a=function(){window.docusaurus.prefetch(S)},(p=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(p.unobserve(t),p.disconnect(),a())}))}))).observe(t))},to:S||""},d&&{isActive:y,activeClassName:O}))}}}]);