---
id: new
title: Creating a new ValQ Model
sidebar_label: Creating a new ValQ Model
---
The Model tab has two panels in which the left panel represents the
Advanced Editor and the right panel denotes the canvas which represents
the Value Driver Tree visuals (see Figure below).

![Left Panel and Right Canvas](/doc-images/catg.png)

The Model tab has five different Tab options (see Figure below).

![Tab option for the Model tab](/doc-images/tabs.png)

The Tab options for the Model tab has been listed below:

1.  New Tab – To configure the design for the Value Driver Tree using
    the options such as Sample Demo Tree, Create a Simple Dynamic Tree,
    Import an Advanced Tree and Create a New value driver tree from the
    scratch.
2.  Node Tab – To configure the settings of Nodes and Child Nodes for
    the Value Driver Tree
3.  Data Series Tab – To configure the data settings such as Data Series
    Manager, Time Aggregation Labels and Data Sorting.
4.  Settings Tab – To configure the settings parameters such as
    Navigational Panel, Nodes, Canvas, Number Formatting, Conditional
    Formatting and Color Theme.
5.  General Tab – To configure the General settings such as License
    Registration, Export and Writeback functions.

In the next sections, you will be able to understand on how to design a
value driver tree using these five different Tab categories in detail.

As an initial step, follow the below steps to configure the design for
the value driver tree in Power BI.

1.  Navigate to the “Visualizations Panel” and “Fields” Panel in Power
    BI (see Figure below).

![Power BI with Visualizations and Fields Panel](/doc-images/11.1.png)

2.  In the Visualizations Panel, select the valQ Custom Visual and
    extend the screen to its full view as shown in the Figure below.

![valQ Screen - Measures to be assigned](/doc-images/eleven.png)

3.  To create a value driver tree (valQ) in Power BI, it is mandatory to
    assign a Data Source to the value driver tree. For our example, a
    data source (sample data shown below) has been assigned to the value
    driver tree.

![Sample Data](/doc-images/11.2.png)

4.  Now at least one Measure Value has to be assigned to the property
    “Values” in Visualizations panel. In our example, we have assigned
    the Measure Value “∑ Actual” to the property “Values” by clicking
    the check box option against the Measure Value “∑ Actual” (see
    Figure below).

![Assigning the Measure Value](/doc-images/11.3.png)

## New Tab

The Value Driver Tree can be created in Power BI using the below listed
options by clicking the New Tab in the left panel (see Figure below)

  - Open a Sample Model
  - Create a Simple Model
  - Create an Advanced Model
  - Import an Advanced Model

![New Tab](/doc-images/12.1.png)

## Open a Sample Model

Click the “New” Tab in the left panel. Now navigate to the Open a Sample
Model option. You will be able to explore a Demo Tree. By clicking the
Open a Sample Model option, you will be able to view the Loading sample
screen as shown below and also you can search for the specific sample to
get loaded (see Figure below).

![Loading screen](/doc-images/12.2a.png)

For our example, the sample “Mining Industry” has been selected.

![Selection of sample model](/doc-images/12.2.png)

Based on the selection, you will be able to view the valQ screen as
shown below. As part of the latest Release, each Node in the Advance
Editor panel will be having an Icon which represents the Node Type.

![valQ screen with Nodes settings](/doc-images/12.3.png)

The Nodes hierarchy will be displayed in the Advance Editor option as
shown in the above Figure. Here you will be able to add number of child
nodes from the parent node “Net Profit”. By clicking the Parent Node,
you will be able to add number of child nodes as shown below. Also you
will be able to expand, collapse and delete the entire Nodes Hierarchy
using the options “Expand”, “Collapse” and “Delete” (see Figure above).

As part of the New Release, the "Lock" and "Unlock" options have been
included in the Advance Editor for the Node Tab (see Figure below). By
clicking the lock option, you will not be able to edit the configuration
done for the Node (see Figure below).

![Lock option in Node Tab](/doc-images/lck1.png)

By clicking the Unlock option, you will be able to edit the
configuration done for the Node (see Figure below).

![Unlock option in Node Tab](/doc-images/lck2.png)

By providing the Node Name in the Search option on the right canvas, you
will be able to search for the particular Node when there are more
number of nodes appearing on the right canvas.

![Node Search option in right canvas](/doc-images/12.4.png)

For our example, the Node name is given as “Operating Hours” and based
on the search you will be able to view the Node as shown in the Figure
below.

![Display of the Searched Node](/doc-images/12.5.png)

![Nodes Structure with Add option](/doc-images/12.6.png)

In the above Figure, you can observe that by clicking the “+” button, a
Node “Copy of Net Profit” has been added. Similarly you can edit the
Parent Node details by clicking the Edit button as shown below. For our
example, the Edit button has been clicked.

![Nodes Structure with Edit option](/doc-images/12.7.png)

By clicking the Edit option you will be able to view the Edit Settings
for the Node. The Edit Settings are categorized as follows:

1.  General
2.  Configuration
3.  Display
4.  Simulation
5.  Business Definition
6.  Conditional Formatting
7.  Secondary KPI

#### General

In General settings you will be able to configure the Node details such
as Unique ID, Title and the Title Prefix when outside the Tree with the
values as shown in the below Figure. The Title Prefix can be set at Node
Level and during simulation it is useful to identify at which node the
parameter value changes. The additional properties of the Node Tab has
been listed in Section 13.2.

![Edit Node – General Settings](/doc-images/12.8.png)

Based on the above configuration, you will be able to view the valQ
screen as shown below.

![valQ screen with General settings](/doc-images/12.9.png)

From the above Figure, you can observe that the Unique ID for the Parent
Node is “TOP” and the Title of the Parent Node is “Net Profit”.

In our other example as shown below, we have configured the Title Prefix
for two different Nodes (see Figures below).

![Node with Prefix value as Spouse 1](/doc-images/12.10.png)

![Node with Prefix value as Spouse 2](/doc-images/12.11.png)

Based on the above set of configurations, you will be able to view the
valQ screens as shown below.

![valQ screen with Spouse 1 Prefix](/doc-images/12.12.png)

![valQ screen with Spouse 2 Prefix](/doc-images/12.13.png)

From the above two Figures you can observe that the “Gross Salary” is
the common Title for two different Nodes. In order to differentiate
them, we have provided the value for “Title Prefix when outside the
Tree” as Spouse1 for one Node and Spouse 2 for the other Node. After
simulation, you can see which Node’s value has been changed.

#### Configuration

In Configuration Settings, you will be able to configure the Node
details such as Calculation Method, Time Aggregation, Desired Trend and
Value Range with the values as shown in the below Figure.

![Edit Node – Configuration Settings](/doc-images/12.14.png)

Based on the above Configuration settings, you will be able to view the
valQ screen as shown in the below Figure.

![valQ with Configuration settings](/doc-images/12.15.png)

From the above Figure you can observe that in the Navigation Panel, the
value that is displayed in the Constraints section will lie in the range
from minimum 10 to maximum 100 for a specific month based on the
configuration done for the Value Range. In our example, the calculation
method is selected as 'Subtract Children (a-b-c)' meaning that from the
first child node the other child nodes will get subtracted and its
result will be displayed in the Parent Node. The Time Aggregation is set
to Sum of Periods where we have considered 12 months as period. As the
result of simulation, each Node will display the values based on the Sum
of Periods. Also the “Desired Trend” has been set to the Increase
option. When simulated, the desired Trend for the Revenue will be
increasing and the value for the Total Cost will be decreasing.

For the Calculation Method being selected as 'Data Source', you can
follow the steps as explained in the following link :
<https://valq.com/blogs/3-methods-of-mapping-valq-nodes-to-data/>

For other options of calculation method, you can refer the link:
<https://valq.com/blogs/assigning-values-to-nodes-in-valq/>

On selecting 'Formula' and clicking on the formula field, you will be
able to see a dropdown of the formulas that are supported. For a list of
formulas that are available in valQ, you can refer to the link
`Functions`

**Template Nodes**

Also you can create a Template Node for the already existing Node. It is
very specific that the Template Nodes should not map the Parent Node.
You need to select the particular Node and copy a Node under the
selected Node for creating the Template Node.

In the below Figure as an example, you can observe that a copy of
Revenue Node has been created by the right click copy and paste actions.
Now the copied Revenue Node version is labelled as “Revenue 2” in
General Property of the Edit Node Window (see Figure below).

![Edit Node: Copy of Revenue Node labelled as Revenue
2](/doc-images/13.3.png)

Now navigate to the Configuration property of the Edit Node Window. Set
the Calculation Method to the option Template based on the node. Also
set the Node to use as Template to the option 1:Revenue (see Figure
below).

![Edit Node: Calculation Method selected as Template based on other node
and Revenue Node to be used as Template](/doc-images/13.4.png)

Based on the above configuration, you will be able to view the Templated
Node Revenue 2 having all its Nodes similar to the Revenue Node as per
our example.

![Templated Node](/doc-images/13.5.png)

#### Display

In the Display Settings, you will be able to configure the Node Display
settings such as Node Display, Scale, Value Decimal Places, Value
Prefix, Value Suffix and Details on Click with the values as shown in
the below Figure.

![Edit Node – Display Settings](/doc-images/12.16.png)

Based on the above Display settings, you will be able to view the valQ
screen as shown in the below Figure.

![valQ with Display settings](/doc-images/12.17.png)

From the above Figure, you can observe that the Node Display is set to
“Show” option. The Scale has been set to the User Selected option and
now you can edit the Scaling options in the Value Display under Settings
Tab. When the Scale is set to other options you will not be able to edit
the Scaling options in the Value Display. You can also view the Nodes
with the values configured with Value Decimal Places as “0”, Value
Prefix as “$” and Value Suffix as “r”.

Since the Details on Click option is enabled in the Display settings,
you can observe the Pop up screen being displayed after clicking the
Node “Net Profit” (see Figure below). If the Details on Click option is
disabled in the Display settings, then you will not be able to view the
Pop up screen.

![Pop up screen](/doc-images/12.18.png)

**Composite Node Display**

A Node in a tree can now be added with a maximum of two composite nodes
which can be taken from any nodes. For our example, the below Figure
shows the Tree structure with several nodes.

![Tree with several nodes](/doc-images/cnd1.png)

For our example, two child nodes from the Node “Total Cost” needs to be
included as composite nodes to the Node “Revenue”. For adding the
composite nodes, go to the configuration settings window of the Node
“Revenue” by clicking the Edit and Configure Node option (see Figure
below).

![Adding Composite Nodes](/doc-images/cnd2.png)

In the Edit Node panel, go to the Display settings and add the Nodes
“10:Production Cost” and “36: Realisation Cost” as Composite Nodes to
the Node Revenue (see Figure above). Now the Tree structure will get
configured based on the above settings (see Figure below).

![Tree with composite nodes](/doc-images/cnd3.png)

You can observe that the Nodes “10:Production Cost” and “36: Realisation
Cost” have been added as the composite nodes to the node “Revenue”. Also
when a simulation is done in the actual Nodes (10:Production Cost” and
“36: Realisation Cost), the similar simulation will get reflected in
the composite nodes and it is vice versa (see Figure below).

![Composite Node with simulated values](/doc-images/cnd4.png)

The composite nodes will have no effect in the Table view structure of
the Tree. In the Quick Editor screen, you can view the composite node
ids in a separate column by enabling the composite node option from the
“selected columns” drop down menu (see Figure below).

![Quick Editor with composite node id display](/doc-images/cnd5.png)

#### Simulation

In the Simulation Settings, you will be able to configure Simulation
details such as selection of Default Simulation Method and assigning the
Node for the Linked Simulation (see Figure below). You have the option
to enable/disable the Simulation function for the Node (see Figure
below).

![valQ with Simulation Settings](/doc-images/12.19.png)

In this Simulation Settings, you have selected the Default Method as
“Constant" for the Simulation and you have selected the Node for the
Linked Simulation as “First Node” (see Figure above). Based on the above
settings you will be able to view the valQ page as shown in the Figure
below. The other options for the Default Simulation Method are Change
Percentage, Manual and Growth Percentage.

![valQ screen with Constant value selection](/doc-images/12.20.png)

From the above Figure, you will be able to view the pop window as shown
in the above screen by clicking the Arrow icon in the Net Profit Node as
shown in the Figure below.

![Net Profit Node](/doc-images/12.21.png)

Now click the Edit option in the pop window as shown in the Figure
below.

![Edit option](/doc-images/12.22.png)

By clicking the Edit option, you will be able to view and edit the input
values for the Simulation Period (see Figure below).

![Edit Inputs for Simulation Periods](/doc-images/12.23.png)

For our example, the value for March month has been edited and as a
result it gets reflected for all the Nodes.

#### Business Definition

Using this option, you will be able to configure the Business Definition
details such as Description, Header, Footer and Technical Notes with the
values as shown in the below Figure.

![valQ with Business Definition Settings](/doc-images/12.24.png)

Based on the above settings, you will be able to view the Business
Definitions details in the Pop up screen as shown below.

![Pop up screen with Business Definitions](/doc-images/12.25.png)

#### Conditional Formatting

Using the Conditional Formatting option, you will be able to apply the
Alert Thresholds and Rules at the specific Node Level (see Figure
below). For our example, the Node "Revenue" has been selected.

![Conditional Formatting Settings for Node](/doc-images/cfn1.png)

In the Conditional Formatting settings for the Node "Revenue", you have
3 different options as highlighted in the above Figure.

When the option "Global or Inherited Rule" is selected, then the
Conditional Formatting Rules configured as Global Level in the Settings
Tab will be applied here.

Now set the option as "Custom Rule: Overwrites default or any inherited
rules" as shown in the below Figure.

![Conditional Formatting Settings for Node - Custom Rule option with
Percentage selection](/doc-images/cfn2.png)

The Custom Rule option can be configured based on variance percentage
values and the values applied at period level (see Figure above).

For our first example, set the option for the Custom Rule as
"Percentage" and also enable the property "Apply to Descendants". Set
the Threshold values as shown in the above Figure. After simulation, you
can find that the Variance percentage value for the Node "Revenue" falls
in the Threshold range (4%)\* which is between -10% to -1% and based on
that condition, the status bar for the Node Revenue is yellow color (see
Figure below).

![Custom Rule option with Percentage value selection for the Node
"Revenue"](/doc-images/cfn3.png)

Also you can observe that the Descendant Node "Copper Price" has been
updated with the same Threshold settings based on our configuration. The
Variance percentage value for the Descendant Node "Copper Price" falls
in the Threshold range (8%)\* which is Above 1% and based on that
condition, the status bar for the Descendant Node "Copper Price" is
green color (see Figure below).

![Custom Rule option with Percentage value selection for the Descendant
Node "Copper Price"](/doc-images/cfn4.png)

For our second example, set the option for the Custom Rule as "Value
(applied at Period Level) - see Figure below.

![Custom Rule option with value selection for the Node
"Revenue"](/doc-images/cfn5.png)

Set the Threshold values as shown in the above Figure. After simulation,
you can find that the Metric value for the Node "Revenue" falls in the
Threshold range (522.3)\* which is Above 1 and based on that condition,
the status bar for the Node Revenue is green color (see Figure below).

![Custom Rule option with Value selection for the Node
"Revenue"](/doc-images/cfn6.png)

**Note:** "\*" denotes that the Metric values get calculated based on
the Period Level. For example when it is a Year, it will take the value
of 12 being multiplied with the range value that we provide.

Now set the option to "Hidden: No Rule will be applied to this Node".
You can observe that no range values can be provided for the Conditional
Formatting and since there will be no status color for that Node being
simulated.

#### Secondary KPIs

Secondary KPIs helps user to aggregate and visualize additional or
alternate KPI values in the node widget. Specifically, in a model with
two data series, these are the set of secondary metrics captured under
the primary value of the node

![](/doc-images/SecKPI.1.png)

As a default, there are three secondary values displayed for a dual
series data in the following order i. Full Period Variance between
baseline and comparison metric (in % and absolute values) ii. Baseline
metric value for the first period in the series iii. Variance for the
first period between baseline and comparison metric (in % and absolute
values)

![](/doc-images/SecKPI.2.png)

Secondary KPI option lets users to customize these secondary values or
metric according to their preference

Users can achieve this using: I. Secondary KPI option based on Formulas
II. Secondary KPI option based on Template

1.  Secondary KPI option based on Formulas

In the below model screenshot, the user can display the data value from
Operating Profit %’ and ‘Operating Expense Ratio’ as Secondary KPI
values to the TOP node ‘Operating profit’.

![](/doc-images/SecKPIF.1.png)

Under the 'Operating Profit' node setting's 'Secondary KPI' ribbon, user
needs to select the 'Formula' button and fill-in the label name and the
custom formula for his additional Secondary KPIs

![](/doc-images/SecKPIF.2.png)

![](/doc-images/SecKPIF.3.png)

Upon completing, the user can see ‘Operating Profit %’ and ‘Ops Expense
Ratio’ values displayed as Secondary KPI values to ‘Operating profit’

![](/doc-images/SecKPIF.4.png)

2.  Secondary KPI option based on Template

In the model, user can display ‘Contribution’ of each of the child nodes
Water, Beverages, and Others to their parent node Gross Profit. User
should define ‘Contribution’ as a Formula in one of the nodes and call
them out for ‘Contribution’ calculation using the Template option at the
other nodes.

![](/doc-images/SecKPIT.1.png)

In this example, user can define the formula in 'Water' node under the
node setting's Secondary KPI by selecting 'Formula' button and defining
the 'Custom Formula' Upon completion, 'Contribution %' is displayed as a
Secondary value of the node widget.

![](/doc-images/SecKPIT.2.png)

To borrow this formula on other nodes, user can fo into the Secondary
KPI setting of the 'Beverages' node, select the 'Template' button, and
choose to display the same formula as the 'Water' node. User can
instantly see the corresponding 'Contribution %' at the 'Beverage' node.

![](/doc-images/SecKPIT.3.png)

Similarly, following the same steps for the 'Other' node helps the user
to instantly visualize ‘Contribution %’ for the all the child nodes to
Gross Profit

![](/doc-images/SecKPIT.4.png)

## Create a Simple Model

Using this option, it is very simple for the beginners to create a tree
automatically based on their own data source. By clicking the Create a
Simple Model option, you will be able to view the valQ screen as shown
in the below Figure.

![Simple Dynamic Tree created with one single
Measure](/doc-images/12.26.png)

By default, the Measure “Actual” has been selected as a Mandatory
criteria for getting the Tree widget. Now you can select the other
Measures and Dimensions based on your choice as indicated in the Figure
below.

![Simple Dynamic Tree created with Measures and
Dimensions](/doc-images/12.27.png)

From the above Figure, you can observe that the other Measure “Forecast”
is assigned to “Value” and the Dimensions namely Account and Product has
been assigned to the “tab” and the Period\_MON is assigned to “Time
period”. Now based the assigned data source, the Tree is being
configured. Hence now you can create a tree directly from your data. For
step by step instructions on how to get started to build a Dynamic
Model, please follow this link:
[https://ValQ.com/wp-content/uploads/ValQ-for-microsoft-power-bi-beginners-tutorial.pdf](https://valq.com/wp-content/uploads/valq-for-microsoft-power-bi-beginners-tutorial.pdf).

**Note**: For Dynamic Model, you will be able to view the Root Node and
first three Nodes in the next level hierarchy under the Sub Models
section of the Navigation Panel (see Figure below).

![Sub Models Section showing the Root Node and first three Nodes in the
next level hierarchy](/doc-images/dsm.png)

#### Read only Dynamic Tree in Editor

When Dynamic Model is selected, you will be able to only view the value
driver tree with Parent and Children Nodes and you cannot undergo any
configuration part on it. But you can generate a copy of the Parent Node
and proceed with configuration part based on your choice (see Figure
below).

![Read Only Dynamic Tree](/doc-images/12.28.png)

#### Dynamic Scaling on Dynamic Tree

Based on your data source, the value driver tree will get generated and
the Number Scaling for all the Nodes will be updated appropriately based
on the data source (see Figure below). For our example, the Number
Scaling is “0.0b”.

![Dynamic Scaling on Dynamic Tree](/doc-images/12.29.png)

As part of the New Release, you have the option to convert the Dynamic
Model to an Advanced Model (see Figure below).

![Option for converting Dynamic Model to an Advanced
Model](/doc-images/conv1.png)

When the option is clicked, now you will be prompted for the Message
window as shown below.

![Confirmation Message](/doc-images/conv1a.png)

After clicking Yes, you will be able to edit the configuration for all
the level of Nodes similar to the Advance Model (see Figure below).

![Dynamic Model converted to an Advanced Model](/doc-images/conv2.png)

## Create an Advanced Model

This option is used to create a Tree in valQ manually Node by Node based
on your choice. By clicking the Create New from Scratch option, you will
be able to view the valQ screen as shown in the below Figure.

![Create New from Scratch](/doc-images/12.38.png)

For our example we have created a Parent Node and two child Nodes (see
Figure below).

![Tree with one Parent Node and two Child Nodes](/doc-images/12.39.png)

Now with the help of `Section: Open a Sample Model <OSM>`, you will be
able to configure the General, Configuration, Display, Simulation,
Business Definition and Conditional Formatting settings for the Tree
(Please refer `Section: Open a Sample Model <OSM>` for more details).

## Import an Advanced Model

Using the “Import an Advanced Model” option, you will be able to import
data through two different options as shown below.

![valQ – Import from Excel](/doc-images/12.30.png)

### Import from Excel

Using the option “Import from Excel”, you will be able to paste the JSON
File Data Format text into the Text Editor as shown in the below Figure.

![Configuration Data from Excel Format](/doc-images/12.31.png)

Now based on the above configuration, you will be able to view the Tree
formed with Nodes in the valQ screen.

![valQ screen derived from Excel Data](/doc-images/12.32.png)

As part of the New Release, you will be able to retain the existing
Navigation Panel configuration and apply the same for the next Tree
configuration. For our example, the Figure below shows the Navigation
panel for the first Tree configuration.

![Navigation Panel for the first tree configuration](/doc-images/12.33.png)

Now navigate to the Import an Advanced Model option in New Tab and paste
the JSON File Data Format text for the second tree into the Text Editor
as shown in the below Figure.

![Import a Tree](/doc-images/12.34.png)

Now select the option “I am reimporting the current model – retain my
settings” so that you will able to view the second tree configuration
being applied with the Navigation Panel settings already configured for
the first tree (see Figure below).

![Navigation Panel for the second tree configuration](/doc-images/12.35.png)

### Import from an Export File

Using this option “Import from an Export File”, you will be able to
paste the Export file data format from an already exported tree data as
shown in the below Figure. This Export File will be generated by
navigating to the Settings Tab and by clicking the Export button.

![Configuration Data from Export File Data Format](/doc-images/12.36.png)

Now based on the above configuration, you will be able to view the Tree
formed with Nodes in the valQ screen.

![valQ screen derived from Export File Data Format](/doc-images/12.37.png)

## Additional Properties of New Tab

| **Property**             | **Description**                                                                                                                                                                                                                                                                                              |
| ------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Open a Sample Model      | Using this model, you can load the required model from the sample valQ Models. The sample Models are Mining Industry, P\&L for Small and Medium-Size Business, Personal Finance and Simple Sales Projections.                                                                                                |
| Create a Simple Model    | Using this Model, you can build a Dynamic valQ Model (For details, please refer: <span class="title-ref">https://ValQ.com/wp-content/uplo ads/ValQ-for-microsoft-power-bi-b eginners-tutorial.pdf \<https://va lq.com/wp-content/uploads/valq-fo r-microsoft-power-bi-beginners-tu torial.pdf\></span>\_\_ ) |
| Create an Advanced Model | Using this Model, you can import a Tree by selecting the data from an Excel file or by selecting the data from an Export File.                                                                                                                                                                               |
| Import an Advanced Model | This Model can be used for creating a Tree with Nodes right from the beginning.                                                                                                                                                                                                                              |

*Additional Properties of New Tab*
