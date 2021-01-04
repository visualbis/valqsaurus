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
* You can also enable/disable the touch support functionality and switch back to general ValQ features.

## ValQ features optimized for touch support

The default touch-enabled ValQ visual screen has unique touch features both in the **Navigation Panel** on the left and in the **Canvas (table/tree) view** on the right.

## **Navigation Panel**

The *Scenarios* section is expanded by default, while all other components are collapsed. The *Compare Scenarios* features is now a button.

### Toggle Touch-friendly mode

The **Touch-friendly toggle mode** is available in the **Simulate > Navigation Panel > Visualization** section.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/toggle-touch-support.png")} />
  </Zoom>
</div>

*Touch-friendly mode toggle on/off*

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
ValQ visual touch bar options **Tree** Vs **Table** view:

<div style={{ float: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/initial-visual-screen.png")}/>
  </Zoom>
</div>

*Default touch-enabled visual screen Tree Vs Table view*

1. **Search** a node in the model.
2. **Go-to-level** selection that displays the node hierarchy.
3. **Comment** on the node from the users who share the model.
4. **Plan series** creation.
5. **Node details** such as *Node description, Simulation impact and variances, Line and column chart*, and *Waterfall chart*.

> The 3 node related icons in the *Tree/Table* view are enabled only when you select a node.

### Search

The Mac-style spotlight search allows you to search a node in the model. Tap on *Search* and start typing the node's name:

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/search-mac-spotlight.png")} />
  </Zoom>
</div>

*Type the name of the node in the search box*

* In the *Tree* view, *Copper Price* node is selected and the model is expanded up to the selected node level.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-selected.png")} />
  </Zoom>
</div>

*The searched node is selected in tree view*

* In the *Table* view, just the searched node is displayed and expanded up-to its child nodes.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-search-table-view.png")} />
  </Zoom>
</div>

*Node search in table view*

### Go-to-level

The *Go-to-level* option is available only in a *Tree* view and allows you to select the node-level hierarchy to expand the ValQ model to.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-go-to-level.png")} />
  </Zoom>
</div>

*Node-level hierarchy*

:::note
The other icons are node related and gets enabled when you select a node.
:::

In a *Table* view, you can tap on the plus(+)/minus(-) symbol next to each node to expand/collapse the node hierarchy.

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

The *Comment* icon allows you to comment on the selected node.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/simulate_tab/touch-support/node-comment-box.png")} />
  </Zoom>
</div>

*Comment on a node*

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
