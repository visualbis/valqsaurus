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

<div class="center">
  <Zoom>
    <img alt="ValQ touch support default view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-valq-view.png")} />
  </Zoom>
  <p>ValQ touch support default view</p>
</div>

## ValQ features optimized for touch support

The default touch-enabled ValQ visual screen has unique touch features both in the **Navigation Panel** on the left and in the **Canvas (table/tree) view** on the right.

## **Navigation Panel**

The *Scenarios* section is expanded by default, while all other components are collapsed. The **Compare Scenarios** feature is now a button.

### Switch between Desktop and Touch-friendly version

You can switch between *Desktop* and *Touch-enabled devices* mode with a tap on the **Turn off Touch Controls** button. The button is available at the top in the Navigation panel.

<!--
### Compare Scenarios
Tap *Compare Scenarios* to select and compare multiple scenarios.

<div class="center">
  <Zoom>
    <img alt="Select the scenarios to compare" src={useBaseUrl("/doc-images/simulate_tab/touch-support/compare-scenarios.png")} />
  </Zoom>
</div>

*Select the scenarios to compare*

<div class="center">
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

 <div class="center">
  <Zoom>
    <img alt="Default Canvas Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-tree-view.png")} />
  </Zoom>
  <p>Default Canvas Tree view</p>
 </div>

 <div class="center">
  <Zoom>
    <img alt="Default Canvas Table view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/default-table-view.png")} />
  </Zoom>
  <p>Default Canvas Table view</p>
 </div>

**Node selection Touch Bar options**

3. **Delete** - Deletes the simulated value and restores the original value of the node.
4. [Node Slider](#node-slider) - Simulates a node.
5. **Month wise simulations**
6. [Comments](#comment) on the node from the users who share the model.
7. **Plan series** - Shortcut icon to create Planning series.
8. [Node details](#node-details) such as *Node description, Simulation impact and variances, Line and column chart*, and *Waterfall chart*.

 <div class="center">
  <Zoom>
    <img alt="Node Touch Bar menu Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-tree-view.png")}/>
  </Zoom>
  <p>Node Touch Bar menu Tree view</p>
 </div>

### Search

The Mac-style spotlight search allows you to search a node in the model. Tap on *Search* and start typing the node's name:

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/search-mac-spotlight.png")}/>
  </Zoom>
  <p>Type the name of the node in the search box</p>
</div>

* In the *Tree* view, the *Copper Sold* node is selected and the model is expanded up to the selected node level.

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-selected-tree-view.png")}/>
  </Zoom>
  <p>The searched node is selected in tree view</p>
</div>

* In the *Table* view, just the searched node is displayed.

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-selected-table-view.png")} />
  </Zoom>
  <p>Node searched in table view</p>
</div>

:::note
The selected node is not expanded to show the child nodes by default, in both the tree/table views.
:::

### Go-to-level

The *Go-to-level* option helps in expanding the node-level hierarchy in a model.
Tree/table view are inter-linked and get auto-updated on each selection.

<div class="center">
  <Zoom>
    <img alt="Node-level hierarchy Tree view" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-go-to-level.png")} />
  </Zoom>
  <p>Node-level hierarchy Tree view</p>
</div>

In a *Table* view, you can tap on the plus(+)/minus(-) symbol next to each node to expand/collapse the node hierarchy.

<div class="center">
  <Zoom>
    <img alt="Table view of node-level hierarchy" src={useBaseUrl("/doc-images/simulate_tab/touch-support/go-to-level-table-view.png")} height="450"/>
  </Zoom>
  <p>Node-level hierarchy expansion in Table view</p>
</div>

### Node slider

Simulating a node comes in handy with the improved slider.
Tap and select a node (*Copper Price*) to enable the slider. In the below screenshot the node is simulated by 6% by moving the slider.

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-slider.png")} />
  </Zoom>
  <p>Copper Price node simulated by 6% in tree view</p>
</div>

The same node simulation(6% better) in the *Table* view:

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-simulation-table-view.png")} />
  </Zoom>
  <p>Node search and simulation in table view</p>
</div>

### Comment

Commenting is allowed by the users on the Planning series and shared scenarios.

- To enter new comments, click on the comments icon from the Plan and Simulate tabs respectively.
You can also edit/delete the comments owned by you.

In the **Simulate** tab, tap on a node and then tap the **Comments** icon in the Touch Bar menu.

<div class="center">
  <Zoom>
    <img alt="Enter node comment" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-comment.png")} />
  </Zoom>
  <p>Type a new comment on the node</p>
</div>

### Node details

Select a node either in *Tree/Table* view and tap *details* to view the node details.

A detailed node's information screen is displayed:

<div class="center">
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-details.png")} />
  </Zoom>
  <p>Node Details</p>
</div>

Tap close(x) at the top right corner to exit out of the *node details* screen.

:::note
To switch between the node menu and the default touch-enabled ValQ screen, click anywhere on the Canvas.
:::
