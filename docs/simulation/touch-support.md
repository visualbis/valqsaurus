---
id: touch-support
title: Support for Touch Devices
sidebar_label: Support for Touch Devices
---
import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";

ValQ now provides optimized touch support and makes interacting with models easier for end-users on mobile and touch-screen devices.

* ValQ will automatically detect the touch device and enable the touch features.
* You can also enable/disable the touch support functionality and switch back to general Desktop ValQ features.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="ValQ touch support default view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-valq-view.png")} />
  </Zoom>
</div>

*ValQ touch support default view*


## ValQ features optimized for touch support

The default touch-enabled ValQ visual screen has unique touch features both in the **Navigation Panel** on the left and in the **Canvas (table/tree) view** on the right.

## **Navigation Panel**

The *Scenarios* section is expanded by default, while all other components are collapsed. The **Compare Scenarios** feature is now a button.

### Switch between Desktop and Touch-friendly version

You can switch between *Desktop* and *Touch-enabled devices* mode with a tap on the **Switch to desktop version** button. The button is available at the top in the Navigation panel.

<!--
### Compare Scenarios
Tap *Compare Scenarios* to select and compare multiple scenarios.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Select the scenarios to compare" src={useBaseUrl("/doc-images/simulate_tab/touch-support/compare-scenarios.png")} />
  </Zoom>
</div>

*Select the scenarios to compare*

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Scenarios comparison result" src={useBaseUrl("/doc-images/simulate_tab/touch-support/compare-scenarios-result.png")} />
  </Zoom>
</div>

*Scenarios comparison result*

A *Summary* of the comparison, the *KPIs*, and the *Key inputs* affecting the scenarios are displayed. Tap **Download to Excel** to get comparison result in an xml tabular format for better analysis.
-->
## Table/Tree view

The visual has a *Pinch and Zoom* feature for easier accessibility. The ValQ model is visualized both in the table view and tree view.

 **Default Canvas Touch Bar options**

1. [Search](#search) a node in the model.
1. [Go-to-level](#go-to-level) selection that displays the node hierarchy.

 <div style={{ float: "center" }}>
  <Zoom>
    <img alt="Default Canvas Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-tree-view.png")}/>
  </Zoom>
 </div>

 *Default Canvas Tree view*

 <div style={{ float: "center" }}>
  <Zoom>
    <img alt="Default Canvas Table view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-table-view.png")}/>
  </Zoom>
 </div>

 *Default Canvas Table view*
   
 **Node selection Touch Bar options**

1. **Delete** - Deletes the simulated value and restores the original value of the node.
1. [Node Slider](#node-slider) - Simulates a node.
1. **Month wise simulations**
1. [Comments](#comment) on the node from the users who share the model.
1. **Plan series** - Shortcut icon to create Planning series.
1. [Node details](#node-details) such as *Node description, Simulation impact and variances, Line and column chart*, and *Waterfall chart*.

 <div style={{ float: "center" }}>
  <Zoom>
    <img alt="Node Touch Bar menu Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-tree-view.png")}/>
  </Zoom>
 </div>

 *Node Touch Bar menu Tree view*

### Search

The Mac-style spotlight search allows you to search a node in the model. Tap on *Search* and start typing the node's name:

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/search-mac-spotlight.png")} />
  </Zoom>
</div>

*Type the name of the node in the search box*

* In the *Tree* view, *Copper Sold* node is selected and the model is expanded up to the selected node level.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-selected-tree-view.png")} />
  </Zoom>
</div>

*The searched node is selected in tree view*

* In the *Table* view, just the searched node is displayed.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-selected-table-view.png")} />
  </Zoom>
</div>

*Node searched in table view*

:::note
The selected node is not expanded to show the child nodes by default, in both the tree/table views.
:::

### Go-to-level

The *Go-to-level* option helps in expanding the node-level hierarchy in a model.
Tree/table view are inter-linked and get auto-updated on each selection.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Node-level hierarchy Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-go-to-level.png")} />
  </Zoom>
</div>

*Node-level hierarchy Tree view*

In a *Table* view, you can tap on the plus(+)/minus(-) symbol next to each node to expand/collapse the node hierarchy.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Table view of node-level hierarchy" src={useBaseUrl("/doc-images/simulate_tab/touch-support/go-to-level-table-view.png")} />
  </Zoom>
</div>

*Node-level hierarchy expansion in Table view*

### Node slider

Simulating a node comes in handy with the improved slider.
Tap and select a node (*Copper Price*) to enable the slider. In the below screenshot the node is simulated by 6% by moving the slider.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-slidebar.png")} />
  </Zoom>
</div>

*Copper Price node simulated by 6% in tree view*

The same node simulation(6% better) in the *Table* view:

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-simulation-table-view.png")} />
  </Zoom>
</div>

*Node search and simulation in table view*

### Comment

Commenting is allowed by the users on the Planning series and shared scenarios.
- To *view, edit, and delete* the comments, click on the global **Comments** icon at the bezel.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="View Simulation comments" src={useBaseUrl("/doc-images/simulate_tab/touch-support/view-simulation-comments.png")} />
  </Zoom>
</div>

*View Simulation comments*

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="View Planning series comments" src={useBaseUrl("/doc-images/simulate_tab/touch-support/view-planning-comments.png")} />
  </Zoom>
</div>

*View Planning series Comments*

- To enter new comments, click on the comments icon from the Plan and Simulate tabs respectively.
You can also edit/delete the comments owned by you.

In the **Simulate** tab, tap on a node and then tap the **Comments** icon in the Touch Bar menu.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Enter node comment" src={useBaseUrl("/doc-images/simulate_tab/touch-support/enter-node-comment.png")} />
  </Zoom>
</div>

*Type a new comment on the node*

In the **Plan** tab, tap on a series value and then tap the **Comment** icon in the top menu.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Enter Planning series comment" src={useBaseUrl("/doc-images/simulate_tab/touch-support/enter-planning-comment.png")} />
  </Zoom>
</div>

*Enter Planning comment*

### Node details

Select a node either in *Tree/Table* view and tap *details* to view the node details.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-details-icon-tree.png")} />
  </Zoom>
</div>

*Node details icon in tree view*

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-details-icon-table.png")} />
  </Zoom>
</div>

*Node details icon in table view*

A detailed node's information screen is displayed:

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-details.png")} />
  </Zoom>
</div>

*Node details*

Tap close(x) at the top right corner to exit out of the *node details* screen.

:::note
To switch between the node menu and the default touch-enabled ValQ screen, click anywhere on canvas.
:::
