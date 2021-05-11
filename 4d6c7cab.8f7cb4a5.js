(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{108:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return d})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return p}));var o=a(3),n=a(7),i=(a(0),a(192)),l=a(193),c=a(195),s=a(196),r=a(197),b=(a(54),{id:"model",title:"Using ValQ - An Example",sidebar_label:"Using ValQ - An Example"}),d={unversionedId:"intro/model",id:"intro/model",isDocsHomePage:!1,title:"Using ValQ - An Example",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/model.mdx",slug:"/intro/model",permalink:"/intro/model",version:"current",sidebar_label:"Using ValQ - An Example",sidebar:"sideBar",previous:{title:"How to add ValQ in PowerBI",permalink:"/intro/install"},next:{title:"Understanding Nodes in ValQ",permalink:"/intro/node"}},m=[{value:"Step-by-Step Guide",id:"step-by-step-guide",children:[{value:"1. Import data from Excel",id:"1-import-data-from-excel",children:[]},{value:"2. Assign your data fields to ValQ",id:"2-assign-your-data-fields-to-valq",children:[]}]}],u={rightToc:m};function p(e){var t=e.components,b=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(o.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Learn how to create your first model using ValQ in less than 5 minutes. Try it out now with the below resource(s):"),Object(i.b)(s.a,{video:"https://player.vimeo.com/video/330327639",responsive:!0,width:640,height:480,mdxType:"Vimeo"}),Object(i.b)("h2",{id:"step-by-step-guide"},"Step-by-Step Guide"),Object(i.b)("p",null,"Learn how to visualize your sales data with the following steps:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#step-by-step-guide"}),"Step-by-Step Guide"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#1-import-data-from-excel"}),"1. Import data from Excel")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(o.a)({parentName:"li"},{href:"#2-assign-your-data-fields-to-valq"}),"2. Assign your data fields to ValQ"))))),Object(i.b)("h3",{id:"1-import-data-from-excel"},"1. Import data from Excel"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"a) We have a simple dataset as shown below that measures sales performance for a combination or region, product category & sales rep. Download the dataset ",Object(i.b)("a",{target:"_blank",href:a(257).default},"here")," and try for yourself.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/1.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"b) To import this data into Power BI, go to File and select Get Data. Now choose Excel to import the sales data.")),Object(i.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-heading"}),Object(i.b)("h5",{parentName:"div"},Object(i.b)("span",Object(o.a)({parentName:"h5"},{className:"admonition-icon"}),Object(i.b)("svg",Object(o.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(i.b)("path",Object(o.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(i.b)("div",Object(o.a)({parentName:"div"},{className:"admonition-content"}),Object(i.b)("p",{parentName:"div"},"ValQ consumes data that is structured in columnar format. If the data is of any other structure such as a Crosstab, convert the data into columns at the source. "),Object(i.b)("p",{parentName:"div"},"If it is not feasible to change into columnar structure at the source, you can use Power BI\u2019s Query Editor to transform the data and then load it to ValQ."))),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/2.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"c) Go to the file location and select the file to be imported. Click Open.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/3.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"d) Select the Sales Data(Columnar) checkbox to preview the dataset and click Load.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/4.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"e) You will now see the dataset under the Fields pane on the right.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/5.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},'f) Click on the ValQ icon under the Visualizations pane. If you don\u2019t see this option, you will have to first download and install{" "} ',Object(i.b)(c.a,{to:Object(l.a)("intro/install"),mdxType:"Link"}," ValQ "),". Now resize the ValQ visual in the canvas to full screen.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/6.png")}))),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"g) Assign Sales Forecast from the Fields pane to the visual to activate ValQ. You will now see the following. Close the popup window.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/8.png")}))),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note"),"\nAt least one Value field has to be added to run ValQ")),Object(i.b)("h3",{id:"2-assign-your-data-fields-to-valq"},"2. Assign your data fields to ValQ"),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"a) Click on the ",Object(i.b)("strong",{parentName:"li"},"Create a Simple Model")," option.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/9.png")}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"b) You will only see Sales Forecast now. We need to start assigning additional fields now.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/10.png")}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"c) Map additional fields to the visual as shown below.")),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{height:"550",alt:"ValQ get",src:Object(l.a)("/doc-images/build/7.png")}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"d) Note how ValQ has instantly built the visualization from the data.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/11.png")}))),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"e) Click on the ",Object(i.b)("strong",{parentName:"li"},">")," icon at the right of the East node to reveal its children. You can expand/collapse any node like this.")),Object(i.b)("div",{class:"center"},Object(i.b)(r.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"ValQ get",src:Object(l.a)("/doc-images/build/13.png")}))),Object(i.b)("p",null,"You have built your first visualization using ValQ. Take some time to explore this model further."),Object(i.b)("p",null,"ValQ also packages few inbuilt examples as samples, click ",Object(i.b)(c.a,{to:Object(l.a)("model/new#1-open-a-sample-model"),mdxType:"Link"},"here")," for ValQ samples. To explore more such models, visit ",Object(i.b)("a",{href:"https://valq.com/demos",target:"_blank"}," Demos "),"."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},"Based on the data fields assigned above, you can also build ",Object(i.b)(c.a,{to:Object(l.a)("model/new#2-create-a-simple-model"),mdxType:"Link"},"Simple Model")," and ",Object(i.b)(c.a,{to:Object(l.a)("model/new#3-create-an-advanced-model"),mdxType:"Link"},"Advanced Models"),".")))}p.isMDXComponent=!0},195:function(e,t,a){"use strict";var o=a(0),n=a.n(o),i=a(10),l=a(194),c=a(8),s=Object(o.createContext)({collectLink:function(){}}),r=a(193),b=function(e,t){var a={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(a[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var n=0;for(o=Object.getOwnPropertySymbols(e);n<o.length;n++)t.indexOf(o[n])<0&&Object.prototype.propertyIsEnumerable.call(e,o[n])&&(a[o[n]]=e[o[n]])}return a};t.a=function(e){var t,a,d,m=e.isNavLink,u=e.to,p=e.href,O=e.activeClassName,j=e.isActive,h=e["data-noBrokenLinkCheck"],g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(r.b)().withBaseUrl,v=Object(o.useContext)(s),w=u||p,y=Object(l.a)(w),x=null==w?void 0:w.replace("pathname://",""),N=void 0!==x?function(e){return e.startsWith("/")}(a=x)?f(a):a:void 0,V=Object(o.useRef)(!1),k=m?i.e:i.c,Q=c.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!Q&&y&&window.docusaurus.prefetch(N),function(){Q&&d&&d.disconnect()}}),[N,Q,y]);var T=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,E=!N||!y||T;return N&&y&&!T&&!h&&v.collectLink(N),E?n.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):n.a.createElement(k,Object.assign({},g,{onMouseEnter:function(){V.current||(window.docusaurus.preload(N),V.current=!0)},innerRef:function(e){var t,a;Q&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:N||""},m&&{isActive:j,activeClassName:O}))}},196:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var o=a(0),n=a.n(o),i=function(e){return n.a.createElement("div",null,n.a.createElement("div",{style:{padding:"56.25% 0 0 0",position:"relative"}},n.a.createElement("iframe",{style:{position:"absolute",top:0,left:0,width:"100%",height:"100%"},src:e.video,width:"640",height:"360",frameborder:"0",allow:"autoplay; fullscreen"})))}},257:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/files/Sales_Performance_Data-fa92616ab8640608208e06a964c26ba2.xlsx"}}]);