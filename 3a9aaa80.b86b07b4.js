(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{206:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(11),s=a(205),c=a(8),i=Object(n.createContext)({collectLink:function(){}}),b=a(204),m=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,l,d=e.isNavLink,u=e.to,p=e.href,O=e.activeClassName,j=e.isActive,g=e["data-noBrokenLinkCheck"],v=m(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),h=Object(b.b)().withBaseUrl,f=Object(n.useContext)(i),w=u||p,N=Object(s.a)(w),k=null==w?void 0:w.replace("pathname://",""),M=void 0!==k?function(e){return e.startsWith("/")}(a=k)?h(a):a:void 0,y=Object(n.useRef)(!1),A=d?o.e:o.c,C=c.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!C&&N&&window.docusaurus.prefetch(M),function(){C&&l&&l.disconnect()}}),[M,C,N]);var x=null!==(t=null==M?void 0:M.startsWith("#"))&&void 0!==t&&t,U=!M||!N||x;return M&&N&&!x&&!g&&f.collectLink(M),U?r.a.createElement("a",Object.assign({href:M},w&&!N&&{target:"_blank",rel:"noopener noreferrer"},v)):r.a.createElement(A,Object.assign({},v,{onMouseEnter:function(){y.current||(window.docusaurus.preload(M),y.current=!0)},innerRef:function(e){var t,a;C&&e&&N&&(t=e,a=function(){window.docusaurus.prefetch(M)},(l=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(l.unobserve(t),l.disconnect(),a())}))}))).observe(t))},to:M||""},d&&{isActive:j,activeClassName:O}))}},99:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return m})),a.d(t,"default",(function(){return d}));var n=a(3),r=a(7),o=(a(0),a(203)),s=a(204),c=(a(206),a(208)),i={id:"manage-users",title:"Manage Users In Your Workspace (Admin Console)",sidebar_label:"Manage Users In Your Workspace (Admin Console)"},b={unversionedId:"storage/features/manage-users",id:"storage/features/manage-users",isDocsHomePage:!1,title:"Manage Users In Your Workspace (Admin Console)",description:"User Manager page allows Workspace Admins/members to add/remove users and groups to the workspace.",source:"@site/docs/storage/features/manage-users.md",slug:"/storage/features/manage-users",permalink:"/docs/storage/features/manage-users",version:"current",sidebar_label:"Manage Users In Your Workspace (Admin Console)"},m=[{value:"User Manager",id:"user-manager",children:[]}],l={rightToc:m};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"User Manager")," page allows ",Object(o.b)("em",{parentName:"p"},"Workspace Admins/members")," to add/remove users and groups to the workspace."),Object(o.b)("h2",{id:"user-manager"},"User Manager"),Object(o.b)("p",null,"To Add New Members: "),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Add members and assign access control on the model",src:Object(s.a)("/doc-images/storage/add-member.png")}))),Object(o.b)("p",null," ",Object(o.b)("em",{parentName:"p"},"Add new members to the workspace")),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Click the ",Object(o.b)("strong",{parentName:"li"},"Add Member")," button at the top right corner."),Object(o.b)("li",{parentName:"ul"},"Enter the ",Object(o.b)("strong",{parentName:"li"},"Email")," address of the user you want to add to the workspace and click ",Object(o.b)("strong",{parentName:"li"},"Add"),"."),Object(o.b)("li",{parentName:"ul"},"Assign member role as ",Object(o.b)("strong",{parentName:"li"},"Admin, Billing Admin")," or ",Object(o.b)("strong",{parentName:"li"},"Member"),". Each member will be able to access the workspace based on the ",Object(o.b)("em",{parentName:"li"},"Role")," assigned.")),Object(o.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"Members who request to access your model will be shown under the ",Object(o.b)("em",{parentName:"p"},"Request Pending")," list and you can choose to accept/deny the request."))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Click on ",Object(o.b)("strong",{parentName:"p"},"Bulk upload")," next to ",Object(o.b)("em",{parentName:"p"},"Add Member")," to import a complete list of members from a CSV file."),Object(o.b)("div",{style:{textAlign:"center"}},Object(o.b)(c.a,{mdxType:"Zoom"},Object(o.b)("img",{alt:"Bulk upload members from a CSV file",src:Object(s.a)("/doc-images/storage/bulk-upload-csv.png")}))),Object(o.b)("p",{parentName:"li"},Object(o.b)("em",{parentName:"p"},"Bulk upload members")))),Object(o.b)("div",{className:"admonition admonition-success alert alert--success"},Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(o.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"}),Object(o.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"})))),"success")),Object(o.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(o.b)("p",{parentName:"div"},"You can now share ValQ Visual Models with the members added to your workspace."))))}d.isMDXComponent=!0}}]);