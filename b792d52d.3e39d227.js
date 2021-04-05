(window.webpackJsonp=window.webpackJsonp||[]).push([[87],{153:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),c=(a(0),a(190)),s=a(191),b=a(193),l=a(195),i={id:"user-security",title:"User Security in ValQ",sidebar_label:"6. User Security"},o={unversionedId:"storage/user-security",id:"storage/user-security",isDocsHomePage:!1,title:"User Security in ValQ",description:"ValQ Collaborate (Enterprise Edition) introduces security features to restrict access to your models/nodes, scenarios, planning series to a given set of users and groups.",source:"@site/docs/storage/user-security.mdx",slug:"/storage/user-security",permalink:"/storage/user-security",version:"current",sidebar_label:"6. User Security",sidebar:"sideBar",previous:{title:"Model Merge",permalink:"/storage/model-merge"},next:{title:"Admin Console Portal",permalink:"/storage/admin-console"}},d=[{value:"Security Roles and Level of Permissions",id:"security-roles-and-level-of-permissions",children:[{value:"Understand the User Roles",id:"understand-the-user-roles",children:[]},{value:"Scope of User Roles in ValQ features",id:"scope-of-user-roles-in-valq-features",children:[]}]},{value:"Manage Model Access",id:"manage-model-access",children:[]},{value:"Manage Node Access",id:"manage-node-access",children:[]},{value:"Manage Scenario Access",id:"manage-scenario-access",children:[]},{value:"Manage Series Access",id:"manage-series-access",children:[]}],m={rightToc:d};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"ValQ Collaborate (Enterprise Edition) introduces security features to restrict access to your models/nodes, scenarios, planning series to a given set of users and groups."),Object(c.b)("p",null,"The security feature helps you to manage the view/edit access on your model for users or groups.\nUser and group management is administered through ",Object(c.b)(b.a,{to:Object(s.a)("storage/admin-console"),mdxType:"Link"},"Admin console")," page."),Object(c.b)("h2",{id:"security-roles-and-level-of-permissions"},"Security Roles and Level of Permissions"),Object(c.b)("p",null,"You can manage the model level data security by using roles and then adding users to these different roles. A role has certain access controls and permissions."),Object(c.b)("h3",{id:"understand-the-user-roles"},"Understand the User Roles"),Object(c.b)("p",null,"User security roles define a set of access privileges in ValQ model functionalities such as Model, Nodes, Scenarios, Planning series, Comments, etc. "),Object(c.b)("p",null,"The following table describes the privileges of a user role in ValQ: "),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Security Role"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Privileges"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Admin")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Create and edit model/scenarios/series"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Admin role can be assigned to a user or group by the ",Object(c.b)("em",{parentName:"td"},"Model creator",Object(c.b)("sup",null,"1"))," or other admins.  Note: The model/scenario can be deleted only by the ",Object(c.b)("em",{parentName:"td"},"Model creator"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Analyzer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("ul",null,Object(c.b)("li",null,"Cannot access the Model tab"),Object(c.b)("li",null,"Can copy, edit, share, download and compare shared scenarios"),Object(c.b)("li",null,"Cannot delete the shared scenario/series"))),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This role has read/write access on the shared scenarios/series and read access on the nodes.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("strong",{parentName:"td"},"Viewer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View shared model, nodes and scenarios"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"This role has view-only access on the shared model and scenarios by default. ",Object(c.b)("strong",{parentName:"td"},"Note"),": A viewer can be granted edit",Object(c.b)("sup",null,"2")," permissions on certain features.")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("sup",null,"1"),"Model creator/owner is the default Admin who can add other users as admins or members."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("sup",null,"2"),'ValQ features when shared with the "Limited to certain users" option, only selected users or groups can be given view-only or edit access.')),Object(c.b)("h3",{id:"scope-of-user-roles-in-valq-features"},"Scope of User Roles in ValQ features"),Object(c.b)("p",null,"The scope of the access is defined by the user\u2019s roles and permissions granted in the ValQ visuals by the ",Object(c.b)("em",{parentName:"p"},"Model creator")," or an ",Object(c.b)("em",{parentName:"p"},"Admin"),".\nFollowing are the privileges assigned on the shared model:"),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Feature"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Admin"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Analyzer"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Viewer"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Editing the model/security settings"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Creating private scenarios/series"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"View/compare/copy/download/edit shared scenarios/series"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes, if given edit access",Object(c.b)("sup",null,"2")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes, if given edit access",Object(c.b)("sup",null,"2")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes, if given edit access",Object(c.b)("sup",null,"2"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Share/Delete shared scenario/series"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Configure Node Security access"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Comments"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Variance Analysis"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Attribution Analysis"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Sensitivity Analysis"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Audit logs"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Export as datasource"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Yes"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"No")))),Object(c.b)("sup",null,"2"),'ValQ features when shared with the "Limited to certain users" option, only selected users/groups are given view-only or edit access.',Object(c.b)("h2",{id:"manage-model-access"},"Manage Model Access"),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"Model owner(default Admin)")," can add other members to the model with the above-defined roles as ",Object(c.b)("em",{parentName:"p"},"Admin, Analyzer"),", or a ",Object(c.b)("em",{parentName:"p"},"Viewer"),"."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Before you begin, you must ",Object(c.b)("strong",{parentName:"p"},"Upload")," your model to the workspace.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Click on the 3 dots ",Object(c.b)("inlineCode",{parentName:"p"},"...")," next to your User profile and select ",Object(c.b)("strong",{parentName:"p"},"Settings"),".")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"In the ",Object(c.b)("strong",{parentName:"p"},"Model Settings > Security")," section add other users/groups to the model."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Add users/groups to a model",src:Object(s.a)("/doc-images/storage/user-security-roles.png")})),Object(c.b)("p",null,"Add users/groups and assign model-level user roles"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Following are the users/roles:"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"testQA user1 is added as an ",Object(c.b)("em",{parentName:"li"},"Admin"),"."),Object(c.b)("li",{parentName:"ul"},"ValQ Test User as an ",Object(c.b)("em",{parentName:"li"},"Analyzer"),"."),Object(c.b)("li",{parentName:"ul"},"finance-group as a ",Object(c.b)("em",{parentName:"li"},"Viewer"),". All the members (user3, user4) of the group are assigned ",Object(c.b)("em",{parentName:"li"},"Viewer")," level access.")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"A user can view the assigned model-level roles and permissions in the ",Object(c.b)("em",{parentName:"p"},"Model Settings")," side panel as shown in the above screenshot.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 1: ",Object(c.b)("em",{parentName:"p"},"Admin")," has complete access to the ",Object(c.b)("strong",{parentName:"p"},"Model")," Tab and sub-menus. An ",Object(c.b)("em",{parentName:"p"},"Admin")," can edit/add/delete the ",Object(c.b)("em",{parentName:"p"},"Nodes"),". Also is allowed to edit the user security access on the model to other users.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 2: ",Object(c.b)("em",{parentName:"p"},"Analyzer")," and ",Object(c.b)("em",{parentName:"p"},"Viewer")," do not have access to the Model tab as shown in the below screenshot."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"An Analyzer cannot access the model/data series/export/writeback",src:Object(s.a)("/doc-images/storage/analyzer-no-model-access.png")})),Object(c.b)("p",null,"Model tab and functionalities(data series, export, writeback, etc.) disabled")))),Object(c.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(c.b)("h5",{parentName:"div"},Object(c.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(c.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(c.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(c.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(c.b)("p",{parentName:"div"},"Any member that is either not added as a user or part of a group added to the model, will not be able to access the ValQ report. "))),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Non-member of the model denied access to ValQ report",src:Object(s.a)("/doc-images/storage/access-denied.png")})),Object(c.b)("p",null,"Access denied to a non-member of the model")),Object(c.b)("h2",{id:"manage-node-access"},"Manage Node Access"),Object(c.b)("p",null,"Model owner/admins can provide node level access control to groups and users added to the model."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Select the Node and click the ",Object(c.b)(b.a,{to:Object(s.a)("model/node#node-editor"),mdxType:"Link"},"editor icon")," next to the node.  "),Object(c.b)("li",{parentName:"ul"},"In the ",Object(c.b)("strong",{parentName:"li"},"Edit Node")," pop-up window select ",Object(c.b)("strong",{parentName:"li"},"Access Control"),".")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"The same parent level access control will be applied for the child nodes as well. ")),Object(c.b)("p",null,"The selected Nodes and the child nodes can be shared with the following 2 options:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Groups and users added to the model (default)")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Access control permission given to all users/groups",src:Object(s.a)("/doc-images/storage/node-access-control-all.png")})),Object(c.b)("p",null,"Consumer Node accessible to all users/groups"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Limit to selected groups and users")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node accessible by Admins alone",src:Object(s.a)("/doc-images/storage/node-accessible-limited-users.png")})),Object(c.b)("p",null,"Industrials Node shared with limited groups and users(Admins alone)")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 1: Admin alone has access to the ",Object(c.b)("em",{parentName:"p"},"Industrials")," node"),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node accessible by Admins",src:Object(s.a)("/doc-images/storage/node-accessible-to-admin.png")})),Object(c.b)("p",null,"An Admin has access to Industrials node"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 2: ",Object(c.b)("em",{parentName:"p"},"Analyzer")," and ",Object(c.b)("em",{parentName:"p"},"Viewer")," cannot access the ",Object(c.b)("em",{parentName:"p"},"Industrials")," node"),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node hidden for Analyzer and Viewer",src:Object(s.a)("/doc-images/storage/node-hidden-analyzer-viewer.png")})),Object(c.b)("p",null,"A viewer login with no Industrials node in the model")))),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"Industrials sub-model is no longer listed in the ",Object(c.b)("em",{parentName:"p"},"Navigation panel")," for the users with ",Object(c.b)("em",{parentName:"p"},"Analyzer")," and ",Object(c.b)("em",{parentName:"p"},"Viewer")," roles.")),Object(c.b)("h2",{id:"manage-scenario-access"},"Manage Scenario Access"),Object(c.b)("p",null,"On the ",Object(c.b)("strong",{parentName:"p"},"Simulate")," tab select the ",Object(c.b)("em",{parentName:"p"},"scenario")," to be shared and click the ",Object(c.b)("em",{parentName:"p"},"share")," icon next to the ",Object(c.b)("em",{parentName:"p"},"scenario"),".\n",Object(c.b)("em",{parentName:"p"},"Scenarios")," can be kept private by the ",Object(c.b)("em",{parentName:"p"},"Model creator")," or shared with the following 2 options:"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Groups and users added to the model (default)")),Object(c.b)("p",{parentName:"li"},"All the members of the group will be able to access ",Object(c.b)("em",{parentName:"p"},"scenario 1")," based on their role privileges."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Node accessible by Admins alone",src:Object(s.a)("/doc-images/storage/scenario-sharing-all.png")})),Object(c.b)("p",null,"Scenario1 shared with groups and users added to the model")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Admin")," and ",Object(c.b)("em",{parentName:"li"},"Analyzer")," can view, compare, download, copy, and edit the shared scenario. "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("em",{parentName:"li"},"Viewer")," can only view, compare and download the shared scenario."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Limit to selected groups and users")),Object(c.b)("p",{parentName:"li"},"Admin/Analyzer given 'view-only' access on ",Object(c.b)("em",{parentName:"p"},"scenario2"),", and 'edit-access' given to the ",Object(c.b)("em",{parentName:"p"},"Finance group(Viewer)")," group."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Admin/Analyzer with view access, Viewer with edit access",src:Object(s.a)("/doc-images/storage/sharing-scenario-limited-user.png")})),Object(c.b)("p",null,"Scenario shared with edit-access to the group")))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 1: ",Object(c.b)("em",{parentName:"p"},"Admin")," and ",Object(c.b)("em",{parentName:"p"},"Analyzer")," can only view, compare, download and copy the shared scenario."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Analyzer can only copy/compare scenario2",src:Object(s.a)("/doc-images/storage/analyzer-view-access-scenario2.png")})),Object(c.b)("p",null,"Analyzer with view access on shared scenario2"))),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},Object(c.b)("em",{parentName:"p"},"Viewer")," can view, compare, download, and edit(As given edit access) the shared scenarios. "),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Viewers with copy/edit/share/download access on scenario2",src:Object(s.a)("/doc-images/storage/user3-edit-share-access-scenario2.png")})),Object(c.b)("p",null,"Viewer has edit access on shared scenario2")))),Object(c.b)("h2",{id:"manage-series-access"},"Manage Series Access"),Object(c.b)("p",null,"A ",Object(c.b)("em",{parentName:"p"},"Model creator/Admin")," can keep the series private, share with users/groups, or limit to certain users."),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"No other user other than the Model owner is allowed to rename/delete/share the series.")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"On the ",Object(c.b)("strong",{parentName:"li"},"Plan")," tab, select any series name and click the ",Object(c.b)("strong",{parentName:"li"},"Share")," icon in the top right ribbon bar."),Object(c.b)("li",{parentName:"ul"},"In the ",Object(c.b)("strong",{parentName:"li"},"Share Settings")," pop window select one of the following options:")),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Private")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Mar forecast series kept private to the creator/admin",src:Object(s.a)("/doc-images/storage/mar-frcst-private.png")})),Object(c.b)("p",null,"March forecast series kept private and only accessible by the series owner"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Group and users added to the model")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Give access control on jan-frcst series to groups and users added to the model",src:Object(s.a)("/doc-images/storage/jan-frcst-shared-all-groups.png")})),Object(c.b)("p",null,"jan-frcst series shared with all users/groups")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 1: Admins/Analyzers have complete access to the series, except for the ",Object(c.b)("em",{parentName:"p"},"share/rename/delete")," access.")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"Case 2: Viewers just have 'view-only' access and cannot edit the series."),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Viewer given limited view access, Admin/Analyzer complete access",src:Object(s.a)("/doc-images/storage/viewer-jan-frcst-view-only.png")})),Object(c.b)("p",null,"Viewer with the view-only access"))))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Limit to selected groups and users")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Viewer alone has edit access on feb-frcst series",src:Object(s.a)("/doc-images/storage/feb-frcst-series-limited-users.png")})),Object(c.b)("p",null,"View-only access to Admin/Analyzer")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Case 1: ",Object(c.b)("em",{parentName:"li"},"Admins/Analyzers")," cannot edit the series. The users can only ",Object(c.b)("em",{parentName:"li"},"Comment, re-size the columns to fit, Show hidden nodes"),", and ",Object(c.b)("em",{parentName:"li"},"View Allocation History"),".")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"View only access on the series",src:Object(s.a)("/doc-images/storage/analyzer-view-access-on-series.png")})),Object(c.b)("p",null,"View-only access on a series")),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"Case 2: ",Object(c.b)("em",{parentName:"li"},"Viewers")," with ",Object(c.b)("em",{parentName:"li"},"edit-access")," can edit the series, but cannot rename/delete/share the series.")),Object(c.b)("div",{class:"center"},Object(c.b)(l.a,{mdxType:"Zoom"},Object(c.b)("img",{alt:"Edit access on a series",src:Object(s.a)("/doc-images/storage/viewer-feb-frcst-edit-access.png")})),Object(c.b)("p",null,"Viewer with edit access on shared series")))))}p.isMDXComponent=!0},193:function(e,t,a){"use strict";var n=a(0),r=a.n(n),c=a(10),s=a(192),b=a(8),l=Object(n.createContext)({collectLink:function(){}}),i=a(191),o=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)t.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(a[n[r]]=e[n[r]])}return a};t.a=function(e){var t,a,d,m=e.isNavLink,p=e.to,O=e.href,j=e.activeClassName,u=e.isActive,g=e["data-noBrokenLinkCheck"],h=o(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),N=Object(i.b)().withBaseUrl,y=Object(n.useContext)(l),v=p||O,w=Object(s.a)(v),f=null==v?void 0:v.replace("pathname://",""),A=void 0!==f?function(e){return e.startsWith("/")}(a=f)?N(a):a:void 0,V=Object(n.useRef)(!1),M=m?c.e:c.c,k=b.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&w&&window.docusaurus.prefetch(A),function(){k&&d&&d.disconnect()}}),[A,k,w]);var x=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,T=!A||!w||x;return A&&w&&!x&&!g&&y.collectLink(A),T?r.a.createElement("a",Object.assign({href:A},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},h)):r.a.createElement(M,Object.assign({},h,{onMouseEnter:function(){V.current||(window.docusaurus.preload(A),V.current=!0)},innerRef:function(e){var t,a;k&&e&&w&&(t=e,a=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:A||""},m&&{isActive:u,activeClassName:j}))}}}]);