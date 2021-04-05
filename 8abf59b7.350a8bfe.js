(window.webpackJsonp=window.webpackJsonp||[]).push([[77],{144:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return d})),a.d(t,"default",(function(){return u}));var n=a(3),i=a(7),l=(a(0),a(190)),o=a(191),s=a(193),c=a(195),r=(a(54),{id:"plan_features",title:"Plan Features",sidebar_label:"Plan Features"}),b={unversionedId:"planning/plan_features",id:"planning/plan_features",isDocsHomePage:!1,title:"Plan Features",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/planning/plan_features.mdx",slug:"/planning/plan_features",permalink:"/planning/plan_features",version:"current",sidebar_label:"Plan Features",sidebar:"sideBar",previous:{title:"Create New Series",permalink:"/planning/create_new_series"},next:{title:"Time Series Forecasting",permalink:"/planning/time_series"}},d=[{value:"1. View existing series",id:"1-view-existing-series",children:[]},{value:"2. Add New Series",id:"2-add-new-series",children:[]},{value:"3. Action Menu",id:"3-action-menu",children:[{value:"3.1 Allocate Children",id:"31-allocate-children",children:[]},{value:"3.2 Auto Forecast",id:"32-auto-forecast",children:[]},{value:"3.3 Hold and Release",id:"33-hold-and-release",children:[]},{value:"3.4 Comments",id:"34-comments",children:[]},{value:"3.5 Weight",id:"35-weight",children:[]},{value:"Example 1: Spread by Weights with Overwrite Values",id:"example-1-spread-by-weights-with-overwrite-values",children:[]},{value:"Example 2: Spread by Weights with Append to Values",id:"example-2-spread-by-weights-with-append-to-values",children:[]},{value:"3.6 Equals",id:"36-equals",children:[]},{value:"Example 3: Equal with Overwrite Values",id:"example-3-equal-with-overwrite-values",children:[]},{value:"Example 4: Equal with Append to Values",id:"example-4-equal-with-append-to-values",children:[]},{value:"3.7 Trend",id:"37-trend",children:[]},{value:"Example 5: Increase Trend By Percentage with Overwrite Values",id:"example-5-increase-trend-by-percentage-with-overwrite-values",children:[]},{value:"Example 6: Increase Trend By Value with Append to Values",id:"example-6-increase-trend-by-value-with-append-to-values",children:[]},{value:"3.8 Copy-to",id:"38-copy-to",children:[]},{value:"Example 7: Copy-to",id:"example-7-copy-to",children:[]},{value:"3.9 Refresh Datasource",id:"39-refresh-datasource",children:[]},{value:"3.10 View Allocation History",id:"310-view-allocation-history",children:[]},{value:"3.11 Show hidden nodes",id:"311-show-hidden-nodes",children:[]}]},{value:"4. Search for a node",id:"4-search-for-a-node",children:[]},{value:"5. View node configuration",id:"5-view-node-configuration",children:[]},{value:"6. Size columns to fit",id:"6-size-columns-to-fit",children:[]},{value:"7. Writeback",id:"7-writeback",children:[]}],h={rightToc:d};function u(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},h,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"The Plan tab consists of an Action Menu bar with various options to help create a plan and a table with the ValQ model in a hierarchical format along with the period values for each node."),Object(l.b)("p",null,"Now let's take a look at the contents of the Plan tab in detail."),Object(l.b)("h2",{id:"1-view-existing-series"},"1. View existing series"),Object(l.b)("div",{style:{textAlign:"justify"}},"You can see the name of the series you are currently working with on the top.")," ",Object(l.b)("br",null)," ",Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"The Plan Tab Toolbar",src:Object(o.a)("/doc-images/plan/plan-tab-toolbar.png")}))),Object(l.b)("div",{style:{textAlign:"justify"}},"On clicking the settings icon next to the series name, the current series can be set as primary or comparison series across all the tabs on ValQ. You can also rename or delete the series here.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"New Series",src:Object(o.a)("/doc-images/plan/plan5.2.png")}))),Object(l.b)("h2",{id:"2-add-new-series"},"2. Add New Series"),Object(l.b)("p",null,"Click the ",Object(l.b)("a",{style:{color:"blue"}},"+ New Series")," tab to add a new (or another) series to the Plan tab. Refer the section ",Object(l.b)(s.a,{to:Object(o.a)("planning/create_new_series"),mdxType:"Link"},"Create New Series"),"."),Object(l.b)("h2",{id:"3-action-menu"},"3. Action Menu"),Object(l.b)("p",null,"The Plan action menu has the following features:"),Object(l.b)("div",null,Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Action Menu",src:Object(o.a)("/doc-images/plan/plan-action-toolbar.png")}))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#36-allocate-children"}),"Allocate Children")," - Allocate values to a node's children"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#35-auto-forecast"}),"Auto Forecast")," - Perform time series forecasting"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#37-hold-and-release"}),"Hold and Release")," - Hold and Release cells on Plan tab"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#38-comments"}),"Comments")," - Add comments to a cell"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#31-weight"}),"Weight")," - Allocate node values with weights from another node"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#32-equals"}),"Equals")," - Allocate node values equally"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#33-trend"}),"Trend")," - Apply trend to node period values"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#34-copy-to"}),"Copy-to")," - Copy a period value to all other periods of the node"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#39-refresh-datasource"}),"Refresh Datasource")," - Refresh the source data on the ",Object(l.b)("em",{parentName:"li"},"Plan")," tab"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#310-view-allocation-history"}),"View Allocation History")," - View all the changes made in the ",Object(l.b)("em",{parentName:"li"},"Plan")," tab"),Object(l.b)("li",{parentName:"ol"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#311-show-hidden-nodes"}),"Show Hidden Nodes")," - Display the nodes kept as hidden")),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Before you begin, here a few key points to understand the Plan tab operations better:"),Object(l.b)("ol",{parentName:"div"},Object(l.b)("li",{parentName:"ol"},"Weight and Equals are available only for total values"),Object(l.b)("li",{parentName:"ol"},"Trend and Copy-to are available only for period values"),Object(l.b)("li",{parentName:"ol"},"ValQ provides two methods of distribution - Overwrite Values and Append to Values"),Object(l.b)("li",{parentName:"ol"},"Overwrite Values replaces the existing values with the new values"),Object(l.b)("li",{parentName:"ol"},"Append to Values retains the existing values and adds/subtracts the change to the same.")))),Object(l.b)("h3",{id:"31-allocate-children"},"3.1 Allocate Children"),Object(l.b)("div",{style:{textAlign:"justify"}},"So far we have covered the options that perform allocation horizontally. Weight and Equal options under Allocate Children are used to allocate values to the children and Copy-to is used to copy a node's value to its sibling nodes.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Allocate Children",src:Object(o.a)("/doc-images/plan/allocate-children.png")}))),Object(l.b)("h3",{id:"32-auto-forecast"},"3.2 Auto Forecast"),Object(l.b)("p",null,"Auto Forecast enables the user to apply Time Series Forecasting methods to the plan. This option is covered in a separate section,\nclick ",Object(l.b)(s.a,{to:Object(o.a)("planning/time_series"),mdxType:"Link"},"here")," to know more about it."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Auto Forecast",src:Object(o.a)("/doc-images/plan/auto-forecast.png")}))),Object(l.b)("h3",{id:"33-hold-and-release"},"3.3 Hold and Release"),Object(l.b)("p",null,"Hold and Release can be used to lock or unlock cells as needed. The feature can be applied on cell, period, row or column level. The cells kept on hold does not get affected by any of the allocation methods."),Object(l.b)("p",null,"Select the cell(s) and click ",Object(l.b)("strong",{parentName:"p"},"Hold"),"."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Hold and Release cells",src:Object(o.a)("/doc-images/plan/hold-cell.png")})),Object(l.b)("p",null,"Selected cells locked with a lock symbol")),Object(l.b)("p",null,"Select the cell(s) and click ",Object(l.b)("strong",{parentName:"p"},"Release"),"."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Hold and Release cells",src:Object(o.a)("/doc-images/plan/release-cell.png")}))),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The single lock icon serves as a toggle to hold and release the cell value."))),Object(l.b)("h3",{id:"34-comments"},"3.4 Comments"),Object(l.b)("p",null,"The Coments icon helps the user to add, modify, or delete and collaborate the comments on the model at the cell level."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Planning Comments",src:Object(o.a)("/doc-images/plan/plan-comments.png")}))),Object(l.b)("h3",{id:"35-weight"},"3.5 Weight"),Object(l.b)("div",{style:{textAlign:"justify"}},"Weight distributes a node's total value among the periods based on the series and the node selected by the user. The total value can be changed by editing the value inside the box indicated by the arrow, you can choose a different node from the same series or a node from another series.")," ",Object(l.b)("br",null),Object(l.b)("p",null,"With the Change action option, the user can choose to Overwrite Values or Append to Values."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/plan/plan7.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,"Let's understand Spread by Weights with Overwrite Values and Append to Values using illustrations:"),Object(l.b)("h3",{id:"example-1-spread-by-weights-with-overwrite-values"},"Example 1: Spread by Weights with Overwrite Values"),Object(l.b)("div",{style:{textAlign:"justify"}},"In the below example, the name of the series is 'New Series', 'Overall Result' is the parent node and 'East' and 'Midwest' are child nodes. Overall Result's Calculation Method is the sum of its children.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"Here 'East' node's total is changed from 30 to 120 and the weight is applied based on another node 'Midwest' from the same series 'New Series'. Change action is selected as Overwrite Values.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{height:"500",alt:"Spread by Weight",src:Object(o.a)("/doc-images/plan/weight ow.png")}))),Object(l.b)("div",{style:{textAlign:"justify"}},"As you can observe from the above Figure, the new total of 120 is distributed as period values based on the spread of the 'Midwest' node. The new values of 'East' node take the place of the existing values. The parent node 'Overall Result' also gets changed as a result of this action.")," ",Object(l.b)("h3",{id:"example-2-spread-by-weights-with-append-to-values"},"Example 2: Spread by Weights with Append to Values"),Object(l.b)("div",{style:{textAlign:"justify"}},"In the below example, the name of the series is 'New Series', 'Overall Result' is the parent node and 'East' and 'Midwest' are child nodes. Overall Result's Calculation Method is the sum of its children.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"Here 'East' node's total is changed from 30 to 120 and the weight is applied based on another node 'Midwest' from the same series 'New Series'. Change action is selected as Append to Values.")," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{height:"500",alt:"Spread by weight with append to values",src:Object(o.a)("/doc-images/plan/weight ap.png")}))),Object(l.b)("div",{style:{textAlign:"justify"}},"As you can observe from the above Figure, the new total is 120 and the difference between the original total and the new total is 90 (120-30). Based on the spread of the 'Midwest' node, the difference of 90 is distributed by way of addition to the existing period values. The parent node 'Overall Result' also gets changed as a result of this action."),Object(l.b)("h3",{id:"36-equals"},"3.6 Equals"),Object(l.b)("div",{style:{textAlign:"justify"}},"Equals distribute a node's new total value equally over the periods. With the Change action option, the user can choose to Overwrite Values or Append to Values."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Plan Equals",src:Object(o.a)("/doc-images/plan/plan-equals.png")}))),Object(l.b)("p",null,"Let's understand Equal with Overwrite Values and Append to Values using illustrations:"),Object(l.b)("h3",{id:"example-3-equal-with-overwrite-values"},"Example 3: Equal with Overwrite Values"),Object(l.b)("p",null,"Here, the total value of the 'East' node is changed from 60 to 90 and Change action is selected as Overwrite Values."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Equal wit Overwrite values",height:"400",src:Object(o.a)("/doc-images/plan/equals ow.png")})))," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"As you can observe, the new total value of 90 is distributed equally to all the period values. The new values of the 'East' take the place of the existing values."),Object(l.b)("h3",{id:"example-4-equal-with-append-to-values"},"Example 4: Equal with Append to Values"),Object(l.b)("p",null,"Here, the total value of the 'East' node is changed from 60 to 90 and Change action is selected as Append to Values."),Object(l.b)("div",{style:{textAlign:"center"}},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Equal with Append to Values",height:"400",src:Object(o.a)("/doc-images/plan/equals ap.png")})))," ",Object(l.b)("br",null),Object(l.b)("p",null,"As you can observe, the new total value is 90 and the difference between the original total and the new total is 30 (90-60). The difference of 30 is now distributed by way of addition to the existing period values."),Object(l.b)("h3",{id:"37-trend"},"3.7 Trend"),Object(l.b)("p",null,"Trend enables the user to increase/decrease the existing period values of a node - By Percentage or By Value. With the Change action option, the user can choose to Overwrite Values or Append to Values."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"trend allocation",src:Object(o.a)("/doc-images/plan/trend.png")}))),Object(l.b)("h3",{id:"example-5-increase-trend-by-percentage-with-overwrite-values"},"Example 5: Increase Trend By Percentage with Overwrite Values"),Object(l.b)("div",{style:{textAlign:"justify"}},"In the below example, the Jan period value of the 'East' node is 1000. The Trend is selected as an increase of 10% and Change action is chosen as Overwrite Values.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Increase Trend",src:Object(o.a)("/doc-images/plan/trend ow.png")})))," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"As you can observe, the Jan value of the 'East' node is 1000 and the remaining period values are incremented by 10% of the previous period value. The new values of the 'East' take the place of the existing values."),Object(l.b)("h3",{id:"example-6-increase-trend-by-value-with-append-to-values"},"Example 6: Increase Trend By Value with Append to Values"),Object(l.b)("div",{style:{textAlign:"justify"}},"In the below example, the Jan period value of the 'East' node is 1000. The Trend is selected as an increase by the value of 100 and Change action is chosen as Append to Values.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Increase Trend By Value with Append to Values",src:Object(o.a)("/doc-images/plan/trend ap.png")})))," ",Object(l.b)("br",null),Object(l.b)("div",{style:{textAlign:"justify"}},"As you can observe, the Jan value of the 'East' node is 1000 and the remaining period values are incremented by 100 in addition to the existing period values.")," ",Object(l.b)("br",null),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"Note")," ",Object(l.b)("br",null),"\nThe Increase Trend option accepts both positive and negative values")),Object(l.b)("h3",{id:"38-copy-to"},"3.8 Copy-to"),Object(l.b)("p",null,"Copy-to option takes a node's period value and applies the same value to the remaining periods of that node. The change gets updated to the parent node as well and is highlighted in yellow as seen below."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Copy-to icon",src:Object(o.a)("/doc-images/plan/copy-to.png")}))),Object(l.b)("h3",{id:"example-7-copy-to"},"Example 7: Copy-to"),Object(l.b)("div",{style:{textAlign:"justify"}},"In the below example, the Jan period value of the 'East' node has been copied to all the other period values of the node 'East' using the option Copy-to. The new values of the 'East' take the place of the existing values and then ValQ re-calculates the total as a sum of its period values.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Apply Copy-to property",src:Object(o.a)("/doc-images/plan/plan10.1.png")}))),Object(l.b)("h3",{id:"39-refresh-datasource"},"3.9 Refresh Datasource"),Object(l.b)("div",{style:{textAlign:"justify"}},"Refresh Datasource can be used in case of any changes to the input data. On clicking Refresh Datasource, the plan gets updated and the allocation performed on the plan gets re-applied on the recent data.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Refresh Datasource",src:Object(o.a)("/doc-images/plan/refresh-datasource.png")}))),Object(l.b)("h3",{id:"310-view-allocation-history"},"3.10 View Allocation History"),Object(l.b)("div",{style:{textAlign:"justify"}},"View Allocation History is used to view the changes performed and also to roll back changes when needed. Reset all deletes all the allocation adjustments made to the series and Restore to this step can be used to get to any point in the Allocation History.")," ",Object(l.b)("br",null),Object(l.b)("h3",{id:"311-show-hidden-nodes"},"3.11 Show hidden nodes"),Object(l.b)("div",{style:{textAlign:"justify"}},"You have an option to display the nodes that were hidden while building the model under the Model tab. Here, East is the hidden node and on selecting the Show hidden node option, it gets displayed. However, notice that the Overall Result doesn't get affected.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Show hidden node",src:Object(o.a)("/doc-images/plan/hidden-node.png")}))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"}," Note")," ",Object(l.b)("br",null)," Upon enabling show hidden node, the node stays hidden on the other tabs")),Object(l.b)("h2",{id:"4-search-for-a-node"},"4. Search for a node"),Object(l.b)("div",{style:{textAlign:"justify"}},"You can take a look at a particular node and it's children by entering the node name or ID using the search bar. The model along with period values get displayed in a table form. In case, the empty series has been chosen as the series to start with, only the structure and relationships are displayed and not the values.")," ",Object(l.b)("br",null),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"ValQ logo",src:Object(o.a)("/doc-images/plan/search-node.png")}))),Object(l.b)("h2",{id:"5-view-node-configuration"},"5. View node configuration"),Object(l.b)("div",{style:{textAlign:"justify"}},"On clicking any cell with value, the number format and scaling that were configured while modeling is retained. You can see the absolute value on the Value Bar and the Calculation Method and Time Aggregation on the footer as highlighted in the below image."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"View Node configuration",src:Object(o.a)("/doc-images/plan/plan17.png")}))),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"}," Note")),Object(l.b)("p",{parentName:"blockquote"},"Just like a formula bar in spreadsheets, you can perform basic operations on a value in the value bar")),Object(l.b)("h2",{id:"6-size-columns-to-fit"},"6. Size columns to fit"),Object(l.b)("p",null,"You can auto-size the tabular columns to fit to the visual window size for a better view. To do so, click the ",Object(l.b)("strong",{parentName:"p"},"Size columns to fit")," on the toolbar."),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Column default width",src:Object(o.a)("/doc-images/plan/column-default-width.png")})),Object(l.b)("p",null,"Column's default width")),Object(l.b)("p",null,"Below is the screenshot after you select the columns re-size option:"),Object(l.b)("div",{class:"center"},Object(l.b)(c.a,{mdxType:"Zoom"},Object(l.b)("img",{alt:"Columns fit to auto-size",src:Object(o.a)("/doc-images/plan/col-fit-size.png")})),Object(l.b)("p",null,"Columns fit to auto-size")),Object(l.b)("h2",{id:"7-writeback"},"7. Writeback"),Object(l.b)("p",null,"The ",Object(l.b)(s.a,{to:Object(o.a)("model/general#3-writeback"),mdxType:"Link"},"Writeback")," feature to is also included in the Plan tab.\nThe Writeback option from the Plan tab only allows you to trigger sending the series data onto a Writeback API."),Object(l.b)("p",null,"To send both series and scenarios (shared scenarios) select the option under the Simulation tab."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"You can access the Writeback feature from both the Simulation as well as Plan tab.")))}u.isMDXComponent=!0},193:function(e,t,a){"use strict";var n=a(0),i=a.n(n),l=a(10),o=a(192),s=a(8),c=Object(n.createContext)({collectLink:function(){}}),r=a(191),b=function(e,t){var a={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(a[n[i]]=e[n[i]])}return a};t.a=function(e){var t,a,d,h=e.isNavLink,u=e.to,p=e.href,m=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],g=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),v=Object(r.b)().withBaseUrl,f=Object(n.useContext)(c),w=u||p,y=Object(o.a)(w),x=null==w?void 0:w.replace("pathname://",""),A=void 0!==x?function(e){return e.startsWith("/")}(a=x)?v(a):a:void 0,N=Object(n.useRef)(!1),T=h?l.e:l.c,k=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!k&&y&&window.docusaurus.prefetch(A),function(){k&&d&&d.disconnect()}}),[A,k,y]);var V=null!==(t=null==A?void 0:A.startsWith("#"))&&void 0!==t&&t,E=!A||!y||V;return A&&y&&!V&&!j&&f.collectLink(A),E?i.a.createElement("a",Object.assign({href:A},w&&!y&&{target:"_blank",rel:"noopener noreferrer"},g)):i.a.createElement(T,Object.assign({},g,{onMouseEnter:function(){N.current||(window.docusaurus.preload(A),N.current=!0)},innerRef:function(e){var t,a;k&&e&&y&&(t=e,a=function(){window.docusaurus.prefetch(A)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){t===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(t),d.disconnect(),a())}))}))).observe(t))},to:A||""},h&&{isActive:O,activeClassName:m}))}}}]);