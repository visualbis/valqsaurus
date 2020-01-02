---
id: settings
title: Settings
---

Using the Settings Tab, you will be able to configure the settings for
the Navigation Panel, Nodes, Canvas, Number Formatting, Conditional
Formatting and Color Theme.

## Navigation Panel

In the Settings Tab, you can enable/disable the Navigation Panel as
shown in the below Figure.

![Enable /Disable Navigation Panel](/doc-images/edn.png)

In the Navigation Panel settings, you will be able to configure the
entire settings for the Navigation Panel. The following properties can
be configured for the Navigation Panel.

1.  Scenarios - You can enable/disable the Visibility option for the
    Scenarios using the Eye icon and also set the Label for the Scenario
    using the Edit icon in the Navigation Panel (see Figure below).

![Scenarios](/doc-images/nav1.png)

You will be also able to download the xml files of the Scenarios from
the Scenario Window in the Navigation Panel by clicking the Download
option (see Figure below). In our example, the data for the Scenario 2
has been downloaded.

![xml download of the Scenario 2 data](/doc-images/16.4.png)

2.  Sub Models - You can enable/disable the Visibility option for the
    Sub Models using the Eye icon and set the Label for the Sub Models
    using the Edit icon and further select the Nodes from Tree/Sub-Tree
    List from the Navigation Panel. You can also enable/disable the
    property for filtering the list based on the selected sub tree (see
    Figure below).

![Scenarios](/doc-images/nav2.png)

3.  Simulation Period - You can enable/disable the Visibility option for
    the Simulation Period using the Eye icon and also set the Label for
    the Simulation Period using the Edit icon in the Navigation Panel
    (see Figure below). You can also set the Simulation Period Start and
    Simulation Period End. When you need to start the simulation from
    the current month, then you can select the "Start to current Month"
    option (see Figure below).

![Simulation Period](/doc-images/nav3.png)

4.  Value Display - You can enable/disable the Visibility option for the
    Value Display using the Eye icon and set the Label for the Value
    Display using the Edit icon. You can select the Primary Period,
    Scaling options and Default Scaling options for the Value Display in
    the Navigation Panel (see Figure below).

![Value Display](/doc-images/nav4.png)

5.  Key Inputs - You can enable/disable the Visibility option for the
    Key Inputs using the Eye icon and set the Label for the Key Inputs
    using the Edit icon. Further you can also select the Key Assumptions
    to be displayed as List by selecting the required Nodes in the
    Navigation Panel (see Figure below).

![Key Inputs](/doc-images/nav5.png)

6.  KPIs - You can enable/disable the Visibility option for the KPIs
    using the Eye icon, set the Label for the KPIs using the Edit icon
    and further select the KPIs to be displayed as List by selecting the
    required Nodes in the Navigation Panel (see Figure below).

![KPIs](/doc-images/nav6.png)

7.  Constraints - You can enable/disable the Visibility option for the
    Constraints using the Eye icon, set the Label for the Constraints
    using the Edit icon and further select the Constraints to be
    displayed as List by selecting the required Nodes in the Navigation
    Panel. You can also enable/disable the property for sorting the
    constraints based on utilization (see Figure below).

![Constraints](/doc-images/nav7.png)

Based on the above settings, you will be able to view the valQ screen
with "Exit Design Mode" button (see Figure below).

![Exit Design Mode](/doc-images/nav8.png)

By clicking the Exit Design Mode button in the right canvas, you will be
able to view the valQ screen with Navigation Panel based on the above
set of configurations, (see Figure below).

![valQ screen with Navigation Panel](/doc-images/nav9.png)

## Nodes

This Node settings allows you to map the Nodes to queries in the ID,
Text or ID + Text Formats. In the Node Mapping settings in valQ, the
Data Mapping Format has 2 options as listed below: listed below (see
Figure below).

1.  Map based on ID or Text - For example, you can use this option if
    the field value exactly matches your Node’s unique ID or Text (e.g.,
    Text - ‘Canada’)
2.  Map based on ID-Text Pair - For example, you can use this option if
    your field has a key-text format (e.g., ‘CA:Canada’), and your
    Node’s ID corresponds to a key (e.g.,‘CA’).

![Data Mapping Format](/doc-images/nm1.png)

For our example, we would explore the settings for Map based on ID-Text
Pair. The data source which is assigned for the Node Mapping is shown
below:

![Excel Data Source with Node Mapping](/doc-images/14.11.png)

From the above Figure, you will be able to view the Node ID as 6 and tab
as 6:SparklingWater\_GrossSales.

Based on the above configuration, you will be able to view the valQ
screen as shown below.

![valQ screen with Node Mapping](/doc-images/14.12.png)

From the above Figure, you will be able to observe that the key-text
format here is 6:SparklingWater\_GrossSales.

You will be also able to configure the Default Node Style with three
different options namely Standard, Full and Minimal as shown in the
below Figure.

![Default Node Style](/doc-images/nm3.png)

You will be able to enable/disable the Node Elements like Variance,
Trend Spark Line, Secondary Value/Variance and Descendant Node Count
(see Figure below).

![Node Settings](/doc-images/nm4.png)

By enabling the option "Data Source Exception", you can use the Data
provided in "Manual" Calculation Method when the Data Source Method
returns no value for the Node.

For our example, the Waterfall Chart Type is selected as "Horizontal".
Based on the above settings you will be able to view the valQ screen as
shown below.

![valQ screen with Node Settings](/doc-images/nm5.png)

From the above Figure, you can observe that the Node Styles is set to
“Standard” Type and the Node Elements like Variance, Trend Spark Line,
Secondary Value/Variance and Descendant Node Count are displayed in the
Node based on the configuration.

By clicking the Node, you will observe that the Waterfall chart type in
the Pop up screen is rendered as Horizontal Chart Type based on our
settings (see Figure below).

![Pop up screen showing Horizontal Chart Type](/doc-images/nm6.png)

As part of the New Release, when the Node Style is selected as
"Standard", you can view the Node Elements Variance, Trend Spark Line
and Secondary Value/Variance being selected by default (see Figure
below).

![Node Elements for Standard Node Style](/doc-images/va1.png)

When the Node Style is being selected as "Minimal", then you will be
able to view only the Node element Variance being selected by default
(see Figure below).

![Node Element for Minimal Node Style](/doc-images/va2.png)

When the Node Style is being selected as "Full", then you will be able
to view all the Node elements without any default selection.

### Contribution and Performance Variance Percentage

As part of the New Release, you will be now able to view the
Contribution and Performance Variance Percentage being displayed at the
Node Level. For our example, the Node Style has been selected as "Full"
and the Node Elements: Variance, Contribution Percentage, Performance
Variance Percentage, Trend Spark Line and Secondary Value/Variance have
been selected (see Figure below).

![Node Style and Node Element Selection](/doc-images/va3.png)

For our example, the property Sort Based On is set to the option
"Contribution Percentage" and the property Sort Order has been set to
the option "Ascending" (see Figure above).

Based on the above settings, you will be able view the Nodes displaying
the Contribution Percentage values in Ascending order (see Figure
below).

![Node showing Contribution Percentage values in Ascending
order](/doc-images/va4.png)

Similarly, you will be also able to view the Performance Variance
Percentage values in the Ascending Order based on the configuration (see
Figure below).

![Node showing Performance Variance Percentage values in Ascending
order](/doc-images/va5.png)

## Canvas

In the Canvas settings, you will be able to configure the following
properties:

1.  You can set the property Default Visual to the option Tree or Table
    based on your choice. For our example, the property has been set to
    the option Table (see Figure below).

![Canvas with Default Visual settings](/doc-images/cv1.png)

Based on the above settings, you will be able to view the valQ screen
with the Table appearance (see Figure below).

![Canvas with default Table Visual](/doc-images/cv2.png)

2.  For our example, set the property "Start the model with the
    following KPI" to the option "9:Total Cost" (see Figure below).

![Canvas Settings](/doc-images/cv3.png)

3.  Set the property " Expand hierarchy upto the following number of
    levels by default" to the value 2 (see Figure above).
4.  In the area Footer Toolbar, enable the property Enable Node Search
    and enable the property Enable Hiding Empty Nodes.
5.  Set the property Default Canvas Zoom (%) to the value 100.
6.  Set the property Default Table Style to the option "Standard". This
    settings for the Table can be visualized only when the property
    "Default Visual" is selected as "Table".
7.  Set the property Hint Text as "Hover a node and drag the slider left
    or right to simulate changes".

Based on the above configuration, you will be able to view the valQ
screen as shown below.

![valQ screen with Canvas Settings](/doc-images/cv4.png)

From the above Figure, you can observe that the first node starts with
Total Cost. By default the Hierarchy of the Nodes are maintained upto 2
level. The Node level Search is enabled and you will not be able to
visualize the Nodes with empty values based on the above configuration.
You will be able to view the Canvas zoomed at 100% and the Hint is
appearing with the Text as given in the settings.

## Number Formatting

In the Number Formatting settings, you will be able to configure the
following properties:

1.  In the area Scale Suffix, set the property Thousands to "k" (see
    Figure below).

![Number Formatting Settings](/doc-images/nf1.png)

2.  Set the property Millions to "m" (see Figure above).
3.  Set the property Billions to "b".
4.  Set the property Trillions to "t".
5.  In the area Display Formatting, set the property Display zeroes as
    to the option "0".
6.  Set the property Display Negative values as to the option "(0)".
7.  Set the property Decimal Separator to ".".
8.  Set the property Thousands Separator to ",".

Based on the above configuration, you will be able to view the valQ
screen as shown below.

![valQ screen with Number Formatting Settings](/doc-images/nf2.png)

From the above Figure, you can observe that the zero value is displayed
as "0" based on our configuration. The negative value has been
represented as "(5,690)". The thousand separator is represented as
6,942. The scale suffix settings will be displayed based on the data set
that we use.

## Conditional Formatting

In the Conditional Formatting settings, you will be able to set Alert
Threshold and Rules. You will be able to configure the following
properties for the Conditional Formatting.

1.  You can enable/disable the property Enable Conditional Formatting as
    shown in the below.

![Conditional Formatting Settings](/doc-images/cf1.png)

2.  In the area Format based on, select the option Variance as shown in
    the above Figure. Now configure the Formatting Threshold values as
    highlighted in the above Figure. Based on the above settings, you
    will be able to view the Tree as shown below.

![Conditional Formatting - Format based on Variance
Percentage](/doc-images/cf2.png)

3.  After simulation, you can observe that the variance percentage value
    for the Node "Income" falls in the Threshold range 22% which is
    above 0% and based on that condition, the status bar for the Node is
    green color (see Figure above). Similarly the variance percentage
    value for the Node "Investment and Others" falls in the Threshold
    range (26%)\* which is below -10% and based on that condition, the
    status bar for the Node is red color.
4.  Now select the option Simulation as shown in the below Figure.

![Conditional Formatting Settings](/doc-images/cf3.png)

5.  Based on the above settings, you will be able to view the Tree as
    shown below.

![Conditional Formatting - Format based on Simulation
Percentage](/doc-images/cf4.png)

6.  After simulation, you can observe that the simulation percentage
    value for the Node "Income" falls in the Threshold range 29% which
    is above 0% and based on that condition, the status bar for the Node
    is green color (see Figure above). Similarly the simulation
    percentage value for the Node "Investment and Others" falls in the
    Threshold range (37%)\* which is below -10% and based on that
    condition, the status bar for the Node is red color.

Note: \* indicates the negative values.

## Color Theme

In the Color Theme settings, you will be able to configure the following
properties:

1.  You will be able to select the Light Theme or Dark Theme based on
    your choice (see Figure below). For our example, the Light Theme has
    been selected.

![Color Theme Settings](/doc-images/clr1.png)

2.  Set the property "Choose Navigational Panel Theme" to the option
    Dark.
3.  Set the Main and Accent color for the Canvas to the color as shown
    in the above Figure.
4.  For the Tree Widget, set the colors for the properties Font Color,
    Background, Derived Nodes, Highlighted and Connectors to the
    required colors as shown in the above Figure.
5.  You will be able to view the valQ screen having Light Theme color
    along with different colors selected for both the canvas as well as
    the tree widget based on the configured settings.

![valQ screen with Color Theme Settings](/doc-images/clr2.png)

Also you can observe that the Navigation Panel will be shown in Dark
Theme based on the configuration.

![Navigation Panel with Dark Theme](/doc-images/clr3.png)

For our example, you have configured the Highlighted color for the Node
as Red Color (see Figure below).

![Highlighted Color Settings for Node](/doc-images/hc1.png)

Based on the above configuration, you can observe that when you click
and Node in the Navigation panel, the Node in the right pane will be
highlighted based on the color selection. For our example, the Node is
being highlighted in Red color.

![Node Highlighted color appearing in Red color](/doc-images/hc2.png)

## Additional Properties of Settings Tab

The Navigation Panel in the valQ screen will be configured based on the
below listed properties.

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Area</th>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Navigation Panel</td>
<td>Enable Navigation Panel</td>
<td>This property enables/disables the Navigation Panel in the valQ screen.</td>
</tr>
<tr class="even">
<td></td>
<td>Scenarios</td>
<td>You can enable/disable the Visibility option for the Scenarios using the Eye icon and also set the Label for the Scenario using the Edit icon in the Navigation Panel Settings.</td>
</tr>
<tr class="odd">
<td></td>
<td>Sub Models</td>
<td>You can enable/disable the Visibility option for the Sub Models using the Eye icon and set the Label for the Sub Models using the Edit icon in the Navigation Panel Settings. You can select the Nodes from Tree/Sub-Tree List. You can also enable/disable the property for filtering the list based on the selected sub tree.</td>
</tr>
<tr class="even">
<td></td>
<td>Simulation Period</td>
<td><p>You can enable/disable the Visibility option for the Simulation Period using the Eye icon and also set the Label for the Simulation Period using the Edit icon in the Navigation Panel Settings.</p>
<p>You can also set the Simulation Period Start and Simulation Period End. When you need to start the simulation from the current month, then you can select the "Start to current Month" option</p></td>
</tr>
<tr class="odd">
<td></td>
<td>Value Display</td>
<td>You can enable/disable the Visibility option for the Value Display using the Eye icon and set the Label for the Value Display using the Edit icon. You can select the Primary Period, Scaling options and Default Scaling options for the Value Display in the Navigation Panel.</td>
</tr>
<tr class="even">
<td></td>
<td>Key Inputs</td>
<td>You can enable/disable the Visibility option for the Key Inputs using the Eye icon and set the Label for the Key Inputs using the Edit icon. Further you can also select the Key Assumptions to be displayed as List by selecting the required Nodes in the Navigation Panel</td>
</tr>
<tr class="odd">
<td></td>
<td>KPIs</td>
<td>You can enable/disable the Visibility option for the KPIs using the Eye icon, set the Label for the KPIs using the Edit icon and further select the KPIs to be displayed as List by selecting the required Nodes in the Navigation Panel.</td>
</tr>
<tr class="even">
<td></td>
<td>Constraints</td>
<td>You can enable/disable the Visibility option for the Constraints using the Eye icon, set the Label for the Constraints using the Edit icon and further select the Constraints to be displayed as List by selecting the required Nodes in the Navigation Panel. You can also enable/disable the property for sorting the constraints based on utilization.</td>
</tr>
<tr class="odd">
<td>Nodes</td>
<td>Data Mapping Format</td>
<td>This Node settings allows you to map the Nodes to queries in the ID, Text or ID + Text Formats.</td>
</tr>
<tr class="even">
<td></td>
<td>Map based on ID or Text</td>
<td>For example, you can use this option if the field value exactly matches your Node’s unique ID or Text (e.g., Text -‘Canada’)</td>
</tr>
<tr class="odd">
<td></td>
<td>Map based on ID-Text Pair</td>
<td>For example, you can use this option if your field has a key-text format (e.g., ‘CA:Canada’), and your Node’s ID corresponds to a key (e.g.,‘CA’).</td>
</tr>
<tr class="even">
<td></td>
<td>ID-Text Pair Separator</td>
<td>You can provide the inputs for the ID-Text Pair format.</td>
</tr>
<tr class="odd">
<td></td>
<td>Default Node Style</td>
<td>This property is used to configure the style of the Node. The options are Standard, Full and Minimal.</td>
</tr>
<tr class="even">
<td></td>
<td>Node Elements</td>
<td><p>This property is used to display the below listed elements in the Node:</p>
<ol type="1">
<li>Variance</li>
<li>Trend Sparkline</li>
<li>Secondary Value/Variance</li>
<li>Descendant Node Count</li>
</ol></td>
</tr>
<tr class="odd">
<td></td>
<td>Data Source Exceptions</td>
<td>By enabling the option "Data Source Exception", you can use the Data provided in "Manual" Calculation Method when the Data Source Method returns no value for the Node.</td>
</tr>
<tr class="even">
<td></td>
<td>Waterfall Chart Type</td>
<td>The Pop up screen will be appearing with the type of the Waterfall Chart being selected. The options are Vertical and Horizontal.</td>
</tr>
<tr class="odd">
<td>Number Formatting</td>
<td>Scale Suffix</td>
<td>This property sets the Thousands, Millions, Billions and Trillions Suffix for the scale.</td>
</tr>
<tr class="even">
<td></td>
<td>Display Formatting</td>
<td><p>This property sets the Number Formatting for the following fields:</p>
<ol type="1">
<li>Display zeroes as None, - or 0</li>
<li>Display Negative Value as ( 0), -0 or 0-</li>
<li>Decimal Separator as “.”</li>
<li>Thousand Separator as “,”</li>
</ol></td>
</tr>
<tr class="odd">
<td>Canvas</td>
<td>Default Visual</td>
<td>This property sets the Default Visual as Tree or Table in the right pane.</td>
</tr>
<tr class="even">
<td></td>
<td>Start the Model with the following KPI</td>
<td>The Model will get started based on the on the selection the specific Node from the list.</td>
</tr>
<tr class="odd">
<td></td>
<td>Expand Hierarchy upto the following number of levels by default</td>
<td>Using this property, you can expand the hierarchy upto the following number of levels by default. The minimum level is 2.</td>
</tr>
<tr class="even">
<td></td>
<td>Footer Toolbar – Enable Node Search</td>
<td>This property enables/disables the Node Search in the canvas.</td>
</tr>
<tr class="odd">
<td></td>
<td>Footer Toolbar – Enable hiding empty nodes</td>
<td>This property hide Nodes that have no value mapped to it or have null value for all its periods.</td>
</tr>
<tr class="even">
<td></td>
<td>Default canvas zoom (%)</td>
<td>This property sets the default zoom ratio for the canvas.</td>
</tr>
<tr class="odd">
<td></td>
<td>Enable Conditional Formatting</td>
<td>This property enables/disables the Conditional Formatting</td>
</tr>
<tr class="even">
<td></td>
<td>Default Table Style</td>
<td>This property is used to configure the style of the Table. The options are Standard and Full.</td>
</tr>
<tr class="odd">
<td></td>
<td>Hint</td>
<td>This property sets the Hint which appears at the top of the canvas.</td>
</tr>
<tr class="even">
<td>Conditional Formatting</td>
<td>Enable Conditional Formatting</td>
<td>This property enables/disables the Conditional Formatting property.</td>
</tr>
<tr class="odd">
<td></td>
<td>Format based on</td>
<td>Each node will have a status bar property to indicate whether the trend of values is favorable and this property can be configured using these options Variance and Simulation.</td>
</tr>
<tr class="even">
<td></td>
<td>Formatting Thresholds (%)</td>
<td><p>The Status bar color will be changed based on the percentage of deviant from initial value. The color ranges are given below:</p>
<ol type="1">
<li>Red - Below:- 10%</li>
<li>Yellow - Between: -10% to-1%</li>
<li>White - Between: -1% to1%</li>
<li>Green - Above: 1%</li>
</ol></td>
</tr>
<tr class="odd">
<td>Color Theme</td>
<td>Choose Canvas Theme</td>
<td>This Property sets the Theme for the Node. The options are Light Theme and Dark Theme.</td>
</tr>
<tr class="even">
<td></td>
<td>Choose Navigation Panel Theme</td>
<td>This property sets the color for the Navigational Theme. The options are Dark and Light.</td>
</tr>
<tr class="odd">
<td></td>
<td>Canvas</td>
<td>This property sets the Main Color and Accent Color for the Canvas.</td>
</tr>
<tr class="even">
<td></td>
<td>Tree widget</td>
<td>This property sets the Font color, Background color, Derived Nodes color, Highlighted Node color and Node Connectors color for the Tree Widget.</td>
</tr>
</tbody>
</table>

*Additional Properties of Settings Tab*