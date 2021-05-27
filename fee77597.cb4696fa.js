(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{188:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return m})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return d})),n.d(t,"default",(function(){return u}));var o=n(3),a=n(7),c=(n(0),n(192)),s=n(193),r=n(195),i=n(197),m=(n(54),{id:"commenting",title:"Commenting",sidebar_label:"5. Commenting"}),l={unversionedId:"storage/commenting",id:"storage/commenting",isDocsHomePage:!1,title:"Commenting",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/storage/commenting.mdx",slug:"/storage/commenting",permalink:"/storage/commenting",version:"current",sidebar_label:"5. Commenting",sidebar:"sideBar",previous:{title:"Export Datasource",permalink:"/storage/export"},next:{title:"History Logs",permalink:"/storage/history-logs"}},d=[{value:"Add comments for Planning",id:"add-comments-for-planning",children:[]},{value:"Add comments for Scenarios",id:"add-comments-for-scenarios",children:[]},{value:"View, Edit, Delete Comments",id:"view-edit-delete-comments",children:[]}],b={rightToc:d};function u(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(o.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The model collaboration feature allows the members added to a model to view, share, and comment on each other's changes.\nThe ",Object(c.b)("em",{parentName:"p"},"Model creator")," must ",Object(c.b)(r.a,{to:Object(s.a)("storage/save-model"),mdxType:"Link"},"Save and upload")," the model before collaborating with other users.\nIn addition, the model must also be shared with the selected users/groups."),Object(c.b)("p",null,"Users of the model can view the comments on ",Object(c.b)("em",{parentName:"p"},"Planning series")," and ",Object(c.b)("em",{parentName:"p"},"shared Scenarios")," by selecting the ",Object(c.b)("img",{width:"40",src:Object(s.a)("static/doc-images/storage/comments-icon.png")})," comments icon from the ",Object(c.b)("strong",{parentName:"p"},"Plan")," and ",Object(c.b)("strong",{parentName:"p"},"Simulate")," tabs respectively."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Series comments",src:Object(s.a)("/doc-images/storage/features/all-comments-planning.png")})),Object(c.b)("p",null,"Comments for Planning Series")),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Simulation comments",src:Object(s.a)("/doc-images/storage/features/all-comments-scenario.png")})),Object(c.b)("p",null,"Comments for Simulations")),Object(c.b)("h3",{id:"add-comments-for-planning"},"Add comments for Planning"),Object(c.b)("p",null,"Go to the ",Object(c.b)("strong",{parentName:"p"},"Plan")," tab and select the ",Object(c.b)("em",{parentName:"p"},"series"),".\nSelect the cell you want to comment, and then select the ",Object(c.b)("strong",{parentName:"p"},"Comment")," icon on the menubar/bezel.\nIn the ",Object(c.b)("em",{parentName:"p"},"Comments")," menu, enter your comments and select ",Object(c.b)("strong",{parentName:"p"},"Post"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node commenting",src:Object(s.a)("/doc-images/storage/features/planning-series-add-comments.png")})),Object(c.b)("p",null,"Comment on the selected node")),Object(c.b)("p",null,"Your comment is saved to the comment section for Planning under the planning series and node hierarchy alongside your username and time stamp."),Object(c.b)("h3",{id:"add-comments-for-scenarios"},"Add comments for Scenarios"),Object(c.b)("p",null,"On the Simulate canvas, hover over the node that you want to comment on and click on the ",Object(c.b)("em",{parentName:"p"},"comment")," icon above the node.\nEnter your comment in the ",Object(c.b)("em",{parentName:"p"},"Comments")," box and select ",Object(c.b)("strong",{parentName:"p"},"Post"),"."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Comment on a simulated node",src:Object(s.a)("/doc-images/storage/features/node-level-commenting-on-scenario.png")})),Object(c.b)("p",null,"Comment on a simulated node")),Object(c.b)("p",null,"Your comment is saved to the comment section for Simulation under the scenario name and node hierarchy alongside your username and time stamp."),Object(c.b)("h3",{id:"view-edit-delete-comments"},"View, Edit, Delete Comments"),Object(c.b)("p",null,"As a security feature, only the user who writes the comments has permission to edit and delete the comments."),Object(c.b)("p",null,"In the below screenshot, the logged-in user alone can edit ( ",Object(c.b)("img",{width:"15",src:Object(s.a)("static/img/edit.png")})," )/delete ( ",Object(c.b)("img",{width:"15",src:Object(s.a)("static/img/delete.png")})," ) the comment written by self."),Object(c.b)("div",{class:"center"},Object(c.b)(i.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Comments edit/delete access",src:Object(s.a)("/doc-images/storage/features/edit-delete-comments.png")})),Object(c.b)("p",null,"Comments edit/delete access")))}u.isMDXComponent=!0},195:function(e,t,n){"use strict";var o=n(0),a=n.n(o),c=n(10),s=n(194),r=n(8),i=Object(o.createContext)({collectLink:function(){}}),m=n(193),l=function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};t.a=function(e){var t,n,d,b=e.isNavLink,u=e.to,p=e.href,g=e.activeClassName,O=e.isActive,h=e["data-noBrokenLinkCheck"],j=l(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(m.b)().withBaseUrl,v=Object(o.useContext)(i),w=u||p,y=Object(s.a)(w),C=null==w?void 0:w.replace("pathname://",""),N=void 0!==C?function(e){return e.startsWith("/")}(n=C)?f(n):n:void 0,k=Object(o.useRef)(!1),x=b?c.e:c.c,S=r.a.canUseIntersectionObserver;Object(o.useEffect)((function(){return!S&&y&&window.docusaurus.prefetch(N),function(){S&&d&&d.disconnect()}}),[N,S,y]);var P=null!==(t=null==N?void 0:N.startsWith("#"))&&void 0!==t&&t,T=!N||!y||P;return N&&y&&!P&&!h&&v.collectLink(N),T?a.a.createElement("a",Object.assign({href:N},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},j)):a.a.createElement(x,Object.assign({},j,{onMouseEnter:function(){k.current||(window.docusaurus.preload(N),k.current=!0)},innerRef:function(e){var t,n;S&&e&&y&&(t=e,n=function(){window.docusaurus.prefetch(N)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),n())}))}))).observe(t))},to:N||""},b&&{isActive:O,activeClassName:g}))}}}]);