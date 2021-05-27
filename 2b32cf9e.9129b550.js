(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{195:function(e,a,t){"use strict";var n=t(0),r=t.n(n),i=t(10),o=t(194),s=t(8),c=Object(n.createContext)({collectLink:function(){}}),l=t(193),b=function(e,a){var t={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&a.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var r=0;for(n=Object.getOwnPropertySymbols(e);r<n.length;r++)a.indexOf(n[r])<0&&Object.prototype.propertyIsEnumerable.call(e,n[r])&&(t[n[r]]=e[n[r]])}return t};a.a=function(e){var a,t,d,p=e.isNavLink,m=e.to,h=e.href,u=e.activeClassName,O=e.isActive,j=e["data-noBrokenLinkCheck"],y=b(e,["isNavLink","to","href","activeClassName","isActive","data-noBrokenLinkCheck"]),f=Object(l.b)().withBaseUrl,g=Object(n.useContext)(c),v=m||h,w=Object(o.a)(v),N=null==v?void 0:v.replace("pathname://",""),S=void 0!==N?function(e){return e.startsWith("/")}(t=N)?f(t):t:void 0,A=Object(n.useRef)(!1),T=p?i.e:i.c,x=s.a.canUseIntersectionObserver;Object(n.useEffect)((function(){return!x&&w&&window.docusaurus.prefetch(S),function(){x&&d&&d.disconnect()}}),[S,x,w]);var C=null!==(a=null==S?void 0:S.startsWith("#"))&&void 0!==a&&a,z=!S||!w||C;return S&&w&&!C&&!j&&g.collectLink(S),z?r.a.createElement("a",Object.assign({href:S},v&&!w&&{target:"_blank",rel:"noopener noreferrer"},y)):r.a.createElement(T,Object.assign({},y,{onMouseEnter:function(){A.current||(window.docusaurus.preload(S),A.current=!0)},innerRef:function(e){var a,t;x&&e&&w&&(a=e,t=function(){window.docusaurus.prefetch(S)},(d=new window.IntersectionObserver((function(e){e.forEach((function(e){a===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(d.unobserve(a),d.disconnect(),t())}))}))).observe(a))},to:S||""},p&&{isActive:O,activeClassName:u}))}},89:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return l})),t.d(a,"rightToc",(function(){return b})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),i=(t(0),t(192)),o=t(193),s=(t(195),t(197)),c=(t(54),{id:"variance_analysis",title:"Variance Analysis",sidebar_label:"Variance Analysis"}),l={unversionedId:"analysis/variance_analysis",id:"analysis/variance_analysis",isDocsHomePage:!1,title:"Variance Analysis",description:'import "react-medium-image-zoom/dist/styles.css";',source:"@site/docs/analysis/variance_analysis.mdx",slug:"/analysis/variance_analysis",permalink:"/analysis/variance_analysis",version:"current",sidebar_label:"Variance Analysis",sidebar:"sideBar",previous:{title:"Analyze Tab",permalink:"/analysis/analyze_overview"},next:{title:"Attribution Analysis",permalink:"/analysis/attribution-analysis"}},b=[{value:"Pre-requisite",id:"pre-requisite",children:[]},{value:"Features of Variance Analysis",id:"features-of-variance-analysis",children:[]},{value:"1. Set Base Series",id:"1-set-base-series",children:[]},{value:"2. Choose Compared Series",id:"2-choose-compared-series",children:[]},{value:"3. Select Period for Data Series",id:"3-select-period-for-data-series",children:[{value:"3.1 Same Period for Base Series and Compared Series",id:"31-same-period-for-base-series-and-compared-series",children:[]},{value:"3.2 Custom Period for Base Series and Compared Series",id:"32-custom-period-for-base-series-and-compared-series",children:[]}]},{value:"4. Choose Time Range for report",id:"4-choose-time-range-for-report",children:[{value:"4.1 Built-in Time Range",id:"41-built-in-time-range",children:[]},{value:"4.2 Add Custom Time Range",id:"42-add-custom-time-range",children:[]}]},{value:"5. Show/hide Absolute variance and % variance",id:"5-showhide-absolute-variance-and--variance",children:[]},{value:"6. Show/hide Unit column",id:"6-showhide-unit-column",children:[]},{value:"7. Download the report as excel",id:"7-download-the-report-as-excel",children:[]},{value:"8. Include hidden nodes to report",id:"8-include-hidden-nodes-to-report",children:[]},{value:"9. Search for a node in the report",id:"9-search-for-a-node-in-the-report",children:[]},{value:"10. Apply Filter to report",id:"10-apply-filter-to-report",children:[]},{value:"11. Hide the features panel",id:"11-hide-the-features-panel",children:[]}],d={rightToc:b};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},d,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Variance Analysis calculates variances against a benchmark for the KPIs to\nunderstand how it's performance impacts the business. ValQ's Variance Analysis\nhelps compare the values of two or more data series for each of the nodes in\nthe model and calculate variances - absolute and percentage for all the nodes."),Object(i.b)("p",null,"Select the first option ",Object(i.b)("em",{parentName:"p"},"Variance Analysis")," from the ",Object(i.b)("strong",{parentName:"p"},"Analyze")," drop-down menu."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"Variance Analysis tab",src:Object(o.a)("/doc-images/analyze/variance-analysis-tab.png")}))),Object(i.b)("p",null,"Here's the Variance Analysis screen on ValQ"),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/variance-analysis-main.png")})),Object(i.b)("p",null,"Variance Analysis")),Object(i.b)("h2",{id:"pre-requisite"},"Pre-requisite"),Object(i.b)("p",null,"A ValQ model with Comparison series is needed to perform a Variance Analysis."),Object(i.b)("h2",{id:"features-of-variance-analysis"},"Features of Variance Analysis"),Object(i.b)("p",null,"The Variance Analysis screen consists of two panels:"),Object(i.b)("p",null,"On the top, you will find a panel containing the features that help to build the Variance analysis report as per your needs."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/va-toolbar.png")})),Object(i.b)("p",null,"Variance Analysis menubar")),Object(i.b)("p",null,"The other panel shows the Variance Analysis report that you have built based on the model and it's configuration."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/va-report.png")})),Object(i.b)("p",null,"Variance Analysis Report")),Object(i.b)("div",{style:{textAlign:"justify"}},"Now let's take a look at the contents of Variance Analysis and learn how to create a Variance Analysis report.")," ",Object(i.b)("br",null),Object(i.b)("p",null,"Following are the features and steps to create a ",Object(i.b)("em",{parentName:"p"},"Variance Analysis")," report:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#pre-requisite"}),"Pre-requisite")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#features-of-variance-analysis"}),"Features of Variance Analysis")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#1-set-base-series"}),"1. Set Base Series")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#2-choose-compared-series"}),"2. Choose Compared Series")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#3-select-period-for-data-series"}),"3. Select Period for Data Series"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#31-same-period-for-base-series-and-compared-series"}),"3.1 Same Period for Base Series and Compared Series")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#32-custom-period-for-base-series-and-compared-series"}),"3.2 Custom Period for Base Series and Compared Series")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#4-choose-time-range-for-report"}),"4. Choose Time Range for report"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#41-built-in-time-range"}),"4.1 Built-in Time Range")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#42-add-custom-time-range"}),"4.2 Add Custom Time Range")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#5-showhide-absolute-variance-and--variance"}),"5. Show/hide Absolute variance and % variance")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#6-showhide-unit-column"}),"6. Show/hide Unit column")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#7-download-the-report-as-excel"}),"7. Download the report as excel")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#8-include-hidden-nodes-to-report"}),"8. Include hidden nodes to report")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#9-search-for-a-node-in-the-report"}),"9. Search for a node in the report")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#10-apply-filter-to-report"}),"10. Apply Filter to report")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#11-hide-the-features-panel"}),"11. Hide the features panel"))),Object(i.b)("h2",{id:"1-set-base-series"},"1. Set Base Series"),Object(i.b)("p",null,"Base Series can be selected either from the available Data Series or Scenarios created under the Simulate tab.\nHere, a Data Series - '2020 Actuals' is set as Base Series."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/base-series.png")})),Object(i.b)("p",null,"Selecting data series as the base series")),Object(i.b)("p",null,"Instead, a Scenario that you have created in the Simulate tab can also be set as Base Series.\nHere, a Scenario - 'Scenario 1' is set as Base Series."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/scenario-base-series.png")})),Object(i.b)("p",null,"Selecting a scenario as the base series")),Object(i.b)("h2",{id:"2-choose-compared-series"},"2. Choose Compared Series"),Object(i.b)("p",null,"One or more Data Series can be chosen as Comparison Series."),Object(i.b)("p",null,"Here, Data Series - '2020 Actuals' and '2020 Forecast' are chosen as Compared Series."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/comparison-series.png")})),Object(i.b)("p",null,"Select Comparison Series")),Object(i.b)("h2",{id:"3-select-period-for-data-series"},"3. Select Period for Data Series"),Object(i.b)("p",null,"The period values of the base series and compared series for the purpose of Variance Analysis can be selected as described below."),Object(i.b)("h3",{id:"31-same-period-for-base-series-and-compared-series"},"3.1 Same Period for Base Series and Compared Series"),Object(i.b)("p",null,"Select a period from the drop-down to get the same period values of both series. In the below example, 'Apr' is selected from the drop-down. Variance Analysis is performed between April period values of 2020 Actuals and April period values of 2020 Forecast."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/time-period.png")})),Object(i.b)("p",null,"Time period selection for comparison series")),Object(i.b)("h3",{id:"32-custom-period-for-base-series-and-compared-series"},"3.2 Custom Period for Base Series and Compared Series"),Object(i.b)("p",null,"To customize your selection, click on the Custom option from the drop-down and set different periods for the Base Series and Compared Series."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze6.png")})),Object(i.b)("p",null,"Customized time period selection")),Object(i.b)("h2",{id:"4-choose-time-range-for-report"},"4. Choose Time Range for report"),Object(i.b)("p",null,"The time period for which Variance Analysis is performed can be set in the following ways:"),Object(i.b)("h3",{id:"41-built-in-time-range"},"4.1 Built-in Time Range"),Object(i.b)("p",null,"Choose the duration from the drop-down to specify the time range for which you\nwould like to run the analysis. Here, you can select multiple time range like\nFull-year, Quarter, Year-to-date, etc. ValQ performs a Variance Analysis for\nevery selected range."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{width:"350",alt:"",src:Object(o.a)("/doc-images/analyze/analyze7.png")})),Object(i.b)("div",{class:"center"},Object(i.b)("p",null,"Built-in time range selection"))),Object(i.b)("p",null,"The time range - Periodic, Quarter, Full Year options have been selected as\nhighlighted in the above image. The canvas displays the Variance Analysis\nreport as below based on our selection. Analysis for Full Year can be seen as\nyou slide on the canvas."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/fullyear-timerange.png")})),Object(i.b)("p",null,"Full-year time period analysis")),Object(i.b)("h3",{id:"42-add-custom-time-range"},"4.2 Add Custom Time Range"),Object(i.b)("p",null,"You can also add a Custom time range by selecting the custom option from the\ndrop-down. The Custom time range can be selected along with other time ranges\nwhich is displayed at the end of the report."),Object(i.b)("p",null,"Hover over the selection period(s) box to select the start month and the end month."),Object(i.b)("div",{class:"table-center"},Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Option"),Object(i.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"+Add")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Add a new Custom time range")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Clear")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Clear the selection to make a new selection")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(i.b)("strong",{parentName:"td"},"Apply")),Object(i.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Saves the selection as a Custom time range"))))),"Check the box to add the Custom selection to the report.",Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze8.png")})),Object(i.b)("p",null,"Custom time period selection")),Object(i.b)("p",null,"The Custom time range ",Object(i.b)("em",{parentName:"p"},"Jan-Apr")," has been set as shown in the above image. The\ncanvas displays the Variance Analysis for the Custom time range as below."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/custom-timeperiod.png")})),Object(i.b)("div",{class:"center"},Object(i.b)("p",null,"Custom time period analysis report"))),Object(i.b)("h2",{id:"5-showhide-absolute-variance-and--variance"},"5. Show/hide Absolute variance and % variance"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Check the Absolute variance box to display variances in absolute terms"),Object(i.b)("li",{parentName:"ul"},"Check the % variance box to add variances as a percentage.")),Object(i.b)("p",null,"ValQ adds the variances to all the nodes on the model for the selected time range. The positive variances are shown in green and the negative ones in red."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze9.png")})),Object(i.b)("p",null,"Absolute and percentage variances")),Object(i.b)("h2",{id:"6-showhide-unit-column"},"6. Show/hide Unit column"),Object(i.b)("p",null,"The unit column is seen by default on Variance Analysis as below. To hide the column, un-check the unit to disable the feature."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/var-analysis-unit.png")})),Object(i.b)("p",null,"hide/un-hide node value units")),Object(i.b)("h2",{id:"7-download-the-report-as-excel"},"7. Download the report as excel"),Object(i.b)("p",null,"Download as Excel is used to download the Variance Analysis report as an excel file to your system."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze11.png")})),Object(i.b)("p",null,"Download the report as an excel sheet")),Object(i.b)("h2",{id:"8-include-hidden-nodes-to-report"},"8. Include hidden nodes to report"),Object(i.b)("p",null,"Enable ",Object(i.b)("strong",{parentName:"p"},"Show hidden nodes")," option to display the nodes that were hidden while building the model under the Model tab."),Object(i.b)("p",null,"Here, the node 'East' and its children are hidden."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/node-hidden.png")})),Object(i.b)("p",null,"Enable the hidden nodes")),Object(i.b)("p",null,"Check the ",Object(i.b)("em",{parentName:"p"},"Show hidden nodes")," option to display the 'East' node and its children. Note that the Overall Result remains the same."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/node-shown.png")})),Object(i.b)("p",null,"Hidden nodes now displayed")),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"}," Note")," ",Object(i.b)("br",null)," On enabling Show hidden nodes option, the nodes stays hidden on the other tabs.")),Object(i.b)("h2",{id:"9-search-for-a-node-in-the-report"},"9. Search for a node in the report"),Object(i.b)("p",null,"Search for a particular node by its title as highlighted below. This feature can be used to identify a node when a model\nhas a large number of nodes."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze14.png")})),Object(i.b)("p",null,"Search for a node")),Object(i.b)("h2",{id:"10-apply-filter-to-report"},"10. Apply Filter to report"),Object(i.b)("p",null,"Use the Filter option to analyze critical influencers."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{width:"100",alt:"",src:Object(o.a)("/doc-images/analyze/filter.png")}))),Object(i.b)("p",null,"There are two types of filters:"),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter by Parent"),": This allows you to analyze variance for a specific branch within the model. For example, you may be interested in analyzing variance for a particular location or product."),Object(i.b)("p",null,Object(i.b)("strong",{parentName:"p"},"Filter by Variance"),": This allows you to identify top \u2018n\u2019 analysis for categories showing the most variances for a particular period chosen from the drop-down."),Object(i.b)("blockquote",null,Object(i.b)("p",{parentName:"blockquote"},Object(i.b)("strong",{parentName:"p"},"Note")," ",Object(i.b)("br",null)," You have the option to display only positive variances or only negative variances or both")),Object(i.b)("p",null,"In this example, filter By Variance has been applied to filter the top 5 variances for the Full Year."),Object(i.b)("div",{style:{textAlign:"center"}},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze12.1.png")})),Object(i.b)("div",{class:"center"},Object(i.b)("p",null,"Filter by Variance"))),Object(i.b)("p",null,"The below image shows the Variance Analysis for the top 5 variances for the full\nyear. Observe the results to see both positive and negative variances. The\nValue Bar displays the filter that has been applied."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze12.2.png")})),Object(i.b)("p",null,"Report filtered by top 5 variances")),Object(i.b)("p",null,"To remove the filter simply click on the 'X' next to the filter."),Object(i.b)("p",null,"Here's the same filter with only negative variances. The report below shows the bottom 5 performers."),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze12.3.png")})),Object(i.b)("p",null,"Reports filtered with only negative variances")),Object(i.b)("h2",{id:"11-hide-the-features-panel"},"11. Hide the features panel"),Object(i.b)("div",{style:{textAlign:"justify"}},"Click on '^' to hide the features panel on the Variance Analysis screen. Hide the panel to take a clear look at the report and you can use this view as presentation mode.")," ",Object(i.b)("br",null),Object(i.b)("div",{class:"center"},Object(i.b)(s.a,{mdxType:"Zoom"},Object(i.b)("img",{alt:"",src:Object(o.a)("/doc-images/analyze/analyze13.png")})),Object(i.b)("p",null,"Hide the features panel")))}p.isMDXComponent=!0}}]);