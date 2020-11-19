---
id: model-merge
title: Model Merge
sidebar_label: 5. Model Merge
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";

You can now merge your models with models created by other users across workspaces. This facilitates ease of maintenance as large models can be broken down and managed independently. A large model with several entities is easily categorized and maintained as sub-models and consolidated in the main model.

## Configure Model Merge

Let's take a firm that has its business operation across different regions and the Board of Directors wants to review the final profit and loss statement.
Repeating the profile and loss statement of each region leads to a model with several thousands of nodes.

It would be easier for the Region/Branch managers to create and update the profit and loss statement for their respective regions and then have it consolidated for the Board of Directors meeting.

Below is the Model merge workflow that helps us achieve such a consolidated report.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/model-merge-workflow.png")} />
  </Zoom>
 </div>

*Model Merge workflow*

In our ValQ visual, we create a consolidated model that links to regional sub-models - *Argentina, Brazil*, and *Chile*.

The consolidated report reflects the simulations that are done in the individual regional reports.
Now there are 2 ways you can link to different models:

1. [Linking a node to an entire model](#case-1-linking-nodes-to-an-entire-model).
2. [Linking a node to a single business key node](#case-2-linking-node-to-a-single-node-from-a-model) from another model.

### Individual P&L models

Following are the screenshots of the individual models:

a. Model *Argentina* with 28 nodes.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/argentina.png")} />
  </Zoom>
 </div>

b. Model *Brazil* with 28 nodes.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/brazil.png")} />
  </Zoom>
 </div>

c. Model *Chile* with 28 nodes.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/chile.png")} />
  </Zoom>
 </div>

### Create the main model

- Go to **Model > New > Create an Advanced Model** in the ValQ visual.
- In the **Model > Node** navigation panel, click on the plus `+` icon next to the parent node *Total*. This adds a *Child Node*. Similarly, add 3 *Child Nodes*.
- Click on the edit icon next to each node.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/edit-configure-node.png")} />
  </Zoom>
 </div>

*Configure child node to track separate sub-models*

 - In the **Node Configuration** pop up window, rename the Node **Title**.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/rename-node-argentina.png")} />
  </Zoom>
 </div>

*Renaming the Node Title to Argentina*

- Click the *Configuration* option:
  - Select the **Node Type** as *Link to workspace model.*
  - *Select a workspace model* as *Model Merge(Argentina)*.

### Case 1: Linking nodes to an entire model

- Select **Linking To** option as **Entire workspace model**

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/link-node-to-argentina-model.png")} />
  </Zoom>
 </div>

*Configure the node to link to another workspace model*

Similarly, edit and connect the other 2 *Child Nodes* to *Brazil* and *Chile* models respectively.

The below screenshot shows the 3 *Child Nodes* linked to the respective models with the total count of nodes in each model.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/consolidated-child-nodes-linked.png")} />
  </Zoom>
 </div>

:::note
Linked nodes are indicated by a special linked icon both in the **Model > Node** navigation panel on the left and in the ValQ visual pane on the right.
:::

### Case 2: Linking node to a single node from a model

Lets create a 4th child node and link the node to a single node *Receita Liquida* from the *Argentina* model.
Add another *Child node* as highlighted in the *Navigation Panel* on the left.

- In the **Edit Node** pop-up window, select **Node Type** as *Link to workspace model*
- *Select a workspace model* as *Model Merge(Argentina)*
- Select **Linking To** option as **Node in the model**

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/link-to-a-node.png")} />
  </Zoom>
 </div>

- *Select a node to link* as *Receita Liquida* (This is the node from the *Argentina* model).

## Series Mapping

In the **Map data series** section, you can map the series of the main model with the linked sub-models. 

Mapping the series is helpful in tracking linked series changes from the present model and is mapped in 2 ways: 

1. In the **Edit Node** pop window under the **Map data series** section

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Map series" src={useBaseUrl("/doc-images/storage/features/map-series-edit-node.png")} />
  </Zoom>
 </div>

 *Map model series with the linking models*

2. Go to **Model > Data Series > Linked Model Mapping**

Click on *Map Series* tab. Map the series of the *Consolidated* model with the respective linked model series.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Map seres" src={useBaseUrl("/doc-images/storage/features/map-series.png")} />
  </Zoom>
 </div>

 *Map series with the respective model series*

## Scenarios Mapping

Click the *Map Scenarios* tab in the *main/consolidated* model to map the shared Scenarios from the sub-models.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/model-merge-mapping_scenarios.png")} />
  </Zoom>
 </div>

## Using the Model merge report

- **Tree view/Table view**

Here is the *Consolidated* model with the first 3 child nodes linked to entire sub-models and the 4th node that is linked to a single node from the *Argentina* model.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/consolidated-nodes.png")} />
  </Zoom>
 </div>

*Consolidated model with nodes connected to sub-models*

### Final result in the consolidated model

- Series changes

Click the **Refresh** button on the ribbon bar to view the linked series changes in the present consolidated model.

- Scenario changes

When you simulate on a shared scenario from a sub-model, you can view the changes in the main model by clicking the *Refresh linked scenarios* icon next to the scenario.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/scenario-mapping-refreshed.png")} />
  </Zoom>
 </div>

Note the change in each model and the resulted value in the main model.

### Limitations

You can only link a leaf node and not the parent node.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/features/link-only-leaf-node.png")} />
  </Zoom>
 </div>

*Link only a leaf node*