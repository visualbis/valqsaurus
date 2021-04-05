(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{193:function(e,t,a){"use strict";var l=a(0),i=a.n(l),n=a(10),c=a(192),o=a(8),b=Object(l.createContext)({collectLink:function(){}}),r=a(191),s=function(e,t){var a={};for(var l in e)Object.prototype.hasOwnProperty.call(e,l)&&t.indexOf(l)<0&&(a[l]=e[l]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(l=Object.getOwnPropertySymbols(e);i<l.length;i++)t.indexOf(l[i])<0&&Object.prototype.propertyIsEnumerable.call(e,l[i])&&(a[l[i]]=e[l[i]])}return a};t.a=function(e){var t,a,u,m=e.isNavLink,p=e.to,O=e.href,d=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],v=s(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(r.b)().withBaseUrl,f=Object(l.useContext)(b),y=p||O,w=Object(c.a)(y),N=null==y?void 0:y.replace("pathname://",""),V=void 0!==N?function(e){return e.startsWith("/")}(a=N)?h(a):a:void 0,Q=Object(l.useRef)(!1),k=m?n.e:n.c,x=o.a.canUseIntersectionObserver;Object(l.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(V),function(){x&&u&&u.disconnect()}}),[V,x,w]);var I=null!==(t=null==V?void 0:V.startsWith("#"))&&void 0!==t&&t,T=!V||!w||I;return V&&w&&!I&&!g&&f.collectLink(V),T?i.a.createElement("a",Object.assign({href:V},y&&!w&&{target:"_blank",rel:"noopener noreferrer"},v)):i.a.createElement(k,Object.assign({},v,{onMouseEnter:function(){Q.current||(window.docusaurus.preload(V),Q.current=!0)},innerRef:function(e){var t,a;x&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(V)},(u=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(u.unobserve(t),u.disconnect(),a())}))}))).observe(t))},to:V||""},m&&{isActive:j,activeClassName:d}))}},72:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return s})),a.d(t,"default",(function(){return m}));var l=a(3),i=a(7),n=(a(0),a(190)),c=a(191),o=(a(193),a(195)),b=(a(54),{id:"install",title:"How to add ValQ in PowerBI",sidebar_label:"Installing ValQ"}),r={unversionedId:"intro/install",id:"intro/install",isDocsHomePage:!1,title:"How to add ValQ in PowerBI",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/intro/install.mdx",slug:"/intro/install",permalink:"/intro/install",version:"current",sidebar_label:"Installing ValQ",sidebar:"sideBar",previous:{title:"ValQ Workspace or Account",permalink:"/intro/valq-workspace"},next:{title:"Using ValQ - An Example",permalink:"/intro/model"}},s=[{value:"1. Import a visual from a file",id:"1-import-a-visual-from-a-file",children:[]},{value:"2. Get more visuals - AppSource",id:"2-get-more-visuals---appsource",children:[]},{value:"3. Get more visuals - My organization",id:"3-get-more-visuals---my-organization",children:[]},{value:"Launch ValQ",id:"launch-valq",children:[]}],u={rightToc:s};function m(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(l.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"You can use any of the following three ways to get ValQ added to Microsoft Power BI:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"#1-import-a-visual-from-a-file"}),"Import a visual from a file")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"#2-get-more-visuals---appsource"}),"Get more visuals - AppSource")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("a",Object(l.a)({parentName:"li"},{href:"#3-get-more-visuals---my-organization"}),"Get more visuals - My organization"))),Object(n.b)("h3",{id:"1-import-a-visual-from-a-file"},"1. Import a visual from a file"),Object(n.b)("p",null,"Import a visual from a file option is used when you have ValQ as a ",Object(n.b)("inlineCode",{parentName:"p"},".pbiviz")," file in your local machine."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Click on the 3 dots ",Object(n.b)("inlineCode",{parentName:"p"},"...")," under the Visualizations pane and select ",Object(n.b)("strong",{parentName:"p"},"Import a visual from a file"),"."),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install2.png")})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Now select the ",Object(n.b)("inlineCode",{parentName:"p"},".pbiviz")," file available in your local desktop to import ValQ into Power BI."),Object(n.b)("br",null),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install5.png")})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Once the file gets imported, Click ",Object(n.b)("strong",{parentName:"p"},"OK"),"."),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install6.png")})))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"You have successfully added ValQ to Microsoft Power BI.\nThe ValQ icon now appears under the Visualizations pane."))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/valq-visual.png")}))),Object(n.b)("h3",{id:"2-get-more-visuals---appsource"},"2. Get more visuals - AppSource"),Object(n.b)("p",null,"This option is used to download ValQ from the AppSource marketplace."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click on the 3 ",Object(n.b)("inlineCode",{parentName:"li"},"...")," under the Visualizations pane and select ",Object(n.b)("strong",{parentName:"li"},"Get more visuals"),".")),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install3.png")})))," ",Object(n.b)("br",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.",Object(n.b)("br",null))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"Sign-in to ValQ",src:Object(c.a)("/doc-images/install/sign-in.png")}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Search for ValQ in the search bar and add the visual to Power BI and click ",Object(n.b)("strong",{parentName:"li"},"Add"),".",Object(n.b)("br",null))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{width:"650",alt:"ValQ get",src:Object(c.a)("/doc-images/install/install9.png")})))," ",Object(n.b)("br",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Once the file gets imported, click ",Object(n.b)("strong",{parentName:"li"},"OK"),".",Object(n.b)("br",null))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install6.png")})))," ",Object(n.b)("br",null),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You have successfully added ValQ to Microsoft Power BI. ",Object(n.b)("strong",{parentName:"li"},"ValQ")," is now listed in the Visualizations pane.",Object(n.b)("br",null))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/valq-visual.png")}))),Object(n.b)("h3",{id:"3-get-more-visuals---my-organization"},"3. Get more visuals - My organization"),Object(n.b)("p",null,"Use this option to download ValQ when the visual is a part of ",Object(n.b)("em",{parentName:"p"},"My Organization")," marketplace."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Click on the 3 dots ",Object(n.b)("inlineCode",{parentName:"li"},"...")," in the Visualizations pane and choose ",Object(n.b)("strong",{parentName:"li"},"Get more visuals"),".")),Object(n.b)("div",{style:{textAlign:"center"}},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install3.png")}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"If you have not signed in to Microsoft Power BI already, you would be prompted to sign in to access the marketplace.")),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{width:"500",alt:"ValQ get",src:Object(c.a)("/doc-images/install/install8.png")}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Switch to the ",Object(n.b)("strong",{parentName:"li"},"MY ORGANIZATION")," tab to identify the ValQ visual and click ",Object(n.b)("strong",{parentName:"li"},"Add"),".")),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install12.png")})))," ",Object(n.b)("br",null),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"ValQ will be available here only if the administrator from your organization has enabled the ValQ visual.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Once the file gets imported, click ",Object(n.b)("strong",{parentName:"li"},"OK"),".",Object(n.b)("br",null))),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install6.png")}))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"You have successfully added ValQ to Microsoft Power BI. ValQ is listed under the Visualizations pane.")),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/valq-visual.png")}))),Object(n.b)("h2",{id:"launch-valq"},"Launch ValQ"),Object(n.b)("p",null,"Click on the ValQ icon in the Visualization pane. You will see the ValQ visual on the canvas."),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install13.png")}))),Object(n.b)("p",null,"Expand the visual to fit the screen. Start using ValQ by assigning value to the visual."),Object(n.b)("div",{class:"center"},Object(n.b)(o.a,{mdxType:"Zoom"},Object(n.b)("img",{alt:"ValQ get",src:Object(c.a)("/doc-images/install/install14.png")}))))}m.isMDXComponent=!0}}]);