---
id: node
title: Node
---
Each node represents a metric, and can contain the following:

  - Name of the value driver or KPI
  - A sparkline graph indicating the recent trend
  - The value of the metric in bold letters

![Node Details](assets/13.1.png)

In addition, each node also contains several performance metrics (see
Figure below). They are listed as follows:

  - The Fiscal Year variance of the metric vs. a benchmark (in this
    case, Sales Forecast vs. Sales Budget) – this is shown in both % and
    absolute terms
  - Absolute value of the metric for the current month (usually the
    first period in the series)
  - Variance of the metric vs. a benchmark for the current month – this
    is shown in both % and absolute terms.

A node may be decorated by a performance indicator color band on the
left – typically Green (for good), Amber (neither good nor bad) and Red
(Poor).

![Node Details](assets/13.2.png)

The entire configuration part of the Node Tab has been already explained
in detail in `Section: Open a Sample Model <OSM>`.

## Quick Editor in Node Tab

Using the Quick Editor option in the Node Tab, you will be able to view
the entire Tree Hierarchy in a Grid View. For our example, the below
Figure shows the normal Tree Hierarchy View.

![Normal Tree Hierarchy View](assets/qe1.png)

After clicking the Quick Editor option as shown in the above Figure, you
will be able to view the Grid View as shown below. You can observe that
there will be a Business View information in the Formula column and it
will get displayed when you select the Business View option (see Figure
below).

![Grid View](assets/qe2.png)

In the Grid View, you will be able to edit the changes and save it so
that the changes will get reflected in the Tree Structure which can be
viewed in the canvas. In the Grid View, you can also Expand and Collapse
the Node Structure using the Expand and Collapse icons (see Figure
below).

![Grid View in Expanded Form](assets/qe3.png)

For our example, the above Figure shows the expanded form of the Grid
View. The below Figure shows the collapsed form of the Grid View.

![Grid View in Collapsed Form](assets/qe4.png)

You will be able to import and export the data in the form of excel file
using the Import from Excel and Export to Excel buttons as shown in the
below Figure.

![Grid View - Import from Excel and Export to Excel](assets/qe5.png)

The Export to Excel File button will be only functional in the web
version of the Power BI (see Figure below).

![Export to Excel File](assets/qe6.png)

The exported file can be edited and it can be imported by clicking the
Import from Excel File button.

![Import from Excel File](assets/qe7.png)

The import function can be done by browsing the location of the file
(see Figure below).

![File Location](assets/qe8.png)

The Columns cab be filtered based on the selection from “Selected
Columns” Drop Down (see Figure below). All the Columns can be selected
to get displayed in the grid or the user can select the columns of their
choice.

![Filtering Columns in the grid](assets/qe9.png)

The below Figure shows that all the columns are being selected and they
are displayed in the grid. The user can scroll the Horizontal scroll bar
in order to view the remaining columns.

![Grid Display with all the columns being selected.](assets/qe10.png)

The below Figure shows that only the selected columns get displayed in
the grid.

![Grid Display with the selected columns](assets/qe11.png)

Also the user has the option to edit the properties like Formula,
Calculation Method and Aggregation Method directly in the Grid view
where it gets updated in the actual properties in the Advanced Editor.
In our example, you can view that the Formula has been double clicked
for editing (see Figure below).

![Grid view edit for Formula Column](assets/qe12.png)

The above Figure shows that the Formula for the row item Copper Sold has
been edited. As another example, the below Figure shows that the
Calculation Method has been edited.

![Grid view edit for Calculation Method Column](assets/qe13.png)

In a similar way, the following columns can be edited in the Grid view.

  - Manual Data for Primary
  - Manual Data for Comparison

The below Figures represents the screen shots for both Manual Data for
Primary and Manual Data for Secondary.

![Grid View Edit for Primary Data](assets/qe14.png)

![Grid View Edit for Comparison Data](assets/qe15.png)

The Node Search for the columns Linked Node, Linked Simulation Node and
Weighted Average Node in the Data Grid will be in Drop Down List and the
user can select the appropriate Node from the Drop Down List. For our
example, the Node Search for the Linked Simulation Node has been done
(see Figure below).

![Node Search for Linked Simulation Node Column](assets/qe16.png)

Similarly the Node Search for the Source Key Column will be in Drop Down
List showing the Nodes from the assigned Data Source and the user can
select the appropriate Node from the Drop Down List (see Figure below).

![Node Search for Source Key Column](assets/qe17.png)

There is an option to lock the simulation for the Node in the Grid View.
The same function can be also done in the exported Excel File and the
Excel file can be imported in the Grid to see the updates done for the
locked simulation.

The below Figure shows the Locked Simulation in the Grid View.

![Locked Simulation in Grid View](assets/qe18.png)

The below Figure shows the Locked Simulation in the Excel File which can
be imported to the Grid view.

![Locked Simulation in Excel File](assets/qe19.png)

The rows can be reordered for the child nodes which exists under a
Parent Node. The below Figure shows the Grid view before reordering the
child nodes.

![Grid view before reordering the child nodes](assets/qe20.png)

The below Figure shows the Grid view after reordering the child nodes.

![Grid view after reordering the child nodes](assets/qe21.png)

## Additional Properties of Node Tab

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th><strong>Area</strong></th>
<th><strong>Property</strong></th>
<th><strong>Description</strong></th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>General</td>
<td>Unique ID</td>
<td>This property shows the Unique ID for the Node and it can be edited.</td>
</tr>
<tr class="even">
<td></td>
<td>Title</td>
<td>This property sets the Title for Node.</td>
</tr>
<tr class="odd">
<td></td>
<td>Title Prefix when outside Tree</td>
<td>This property sets the Title Prefix for the Node when outside the Tree.</td>
</tr>
<tr class="even">
<td>Configuration</td>
<td>Calculation Method</td>
<td><p>This property sets the Calculation Method for the Node. The options are Data Source, Sum Children (a+b+c….), Subtract Children (a-b-c….), Multiply Children (a*b*c….), Divide Children (a/b/c….), Formula, Linked to Node, Manual and Templated based on other node.</p>
<p><strong>Note:</strong> When the Calc. Method is selected as Linked to Node option, then you can select the desired Node from the Nodes List.</p></td>
</tr>
<tr class="odd">
<td></td>
<td>Source Key</td>
<td>This property sets the Source Key for the Node. You can map the Node value with data source using the source key.</td>
</tr>
<tr class="even">
<td></td>
<td>Time Aggregation</td>
<td>This property sets the Time Aggregation for the Node. The options are Sum of Periods, Average, Formula, Last and Cumulative.</td>
</tr>
<tr class="odd">
<td></td>
<td>Desired Trend</td>
<td><p>This property sets the Desired Trend for the Node. The options are Decrease and Increase.</p>
<p>For example, the desired Trend for the Revenue usually increases and the desired Trend for the Cost decreases.</p></td>
</tr>
<tr class="even">
<td></td>
<td>Value Range</td>
<td>This property sets the Value Range for the Node.</td>
</tr>
<tr class="odd">
<td></td>
<td>Dynamic Children from Data Source</td>
<td><p>If the referenced data source row is a hierarchy node with children or has dimension below in the data source, the children can be automatically generated based on the data source.</p>
<p>If Node Mapping selected is "Automatic based on text" then any special character and space in the member text will be replaced by "__"(double underscore) in the Unique Id for the Node. Eg. "Total Cost" will become "Total__Cost".</p></td>
</tr>
<tr class="even">
<td></td>
<td>Dynamic Children Simulation</td>
<td>Children settings will generally be cascaded from the configuration of this node except visualization, calculation method and simulation. The children will always be with visual style normal. Aggregation formulas can dynamically be generated and simulation feature set based on the below options like All, Nodes w/o children and None.</td>
</tr>
<tr class="odd">
<td>Display</td>
<td>Node display</td>
<td>This property decides on how the Node will be displayed in the Tree Widget. The options are Show, Derived and Hidden.</td>
</tr>
<tr class="even">
<td></td>
<td>Scale</td>
<td>This property sets the Scale for the Node. The options are None, User Selected, 0m, 0k and Pct.</td>
</tr>
<tr class="odd">
<td></td>
<td>Value Decimal Places</td>
<td>This property sets the Value Decimal Places for the Node. The range is from 0 to 7.</td>
</tr>
<tr class="even">
<td></td>
<td>Value Prefix</td>
<td>This property sets the Prefix Value for the Node.</td>
</tr>
<tr class="odd">
<td></td>
<td>Value Suffix</td>
<td>This property sets the Suffix Value for the Node.</td>
</tr>
<tr class="even">
<td></td>
<td>Details On Click</td>
<td>This property shows the Pop up screen upon clicking.</td>
</tr>
<tr class="odd">
<td>Simulation</td>
<td>Enable Simulation</td>
<td>This property enables or disables the Simulation.</td>
</tr>
<tr class="even">
<td></td>
<td>Default Method</td>
<td><p>This property sets the Default Method for the Simulation. The options are</p>
<ol type="1">
<li><p>Change Percentage:</p>
<p>% Change applied to baseline in future periods.</p></li>
<li><p>Manual:</p>
<p>Values set manually for each period.</p></li>
<li><p>Growth Percentage:</p>
<p>% Growth applied to baseline in future periods.</p></li>
<li><p>Constant:</p>
<p>Constant Value for future periods.</p></li>
</ol></td>
</tr>
<tr class="odd">
<td></td>
<td>Linked Simulation</td>
<td>Using this property, you can select the desired Node from the Nodes List for Linked Simulation. It updates the simulation concurrently with the Linked Node.</td>
</tr>
<tr class="even">
<td>Business Definition</td>
<td></td>
<td><p>This information will be included in each node's details page (open by clicking on the node in the tree widget). They are listed as follows:</p>
<ol type="1">
<li><p>Description:</p>
<p>This property sets the Description for the Node.</p></li>
<li><p>Header:</p>
<p>This property sets the Header for the Node.</p></li>
<li><p>Footer:</p>
<p>This property sets the Footer for the Node.</p></li>
<li><p>Technical Notes:</p>
<p>This property sets the Technical Notes for the Node.</p></li>
</ol></td>
</tr>
<tr class="odd">
<td>Conditional Formatting</td>
<td></td>
<td><p>The Conditional Formatting Rules can be set for the Tree. The options are</p>
<ol type="1">
<li>Global or Inherited Rule</li>
<li>Custom Rule: Overwrites default or any inherited rule.</li>
<li>Hidden: No Rule will be applied to the Node</li>
</ol>
<p>You can set the values for the Color Range.</p>
<p>When the option is selected as “Custom Rule”, then you can configure the Range values at Simulation/Variance Percentage and Node values applied at Period Level.</p></td>
</tr>
</tbody>
</table>

*Additional Properties of Node Tab*

