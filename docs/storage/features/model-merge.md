---
id: model-merge
title: Model Merge
sidebar_label: 5. Model Merge
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";

You can now merge your models with models created by other users within a workspace.
This facilitates ease of maintenance as large models can be broken down and managed independently.
A large model with several entities is easily categorized and maintained as sub-models and consolidated in the main model.

:::note
You can only link a leaf node and not the parent node.
:::

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/link-only-leaf-node.png")} />
  </Zoom>
 </div>

*Link only a leaf node*

## Sub Models

Sub Models are listed under **Navigation Panel > Sub Models** section. 

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Sub Models listed under Nav Panel" src={useBaseUrl("/doc-images/storage/sub-models-navpanel.png")} />
  </Zoom>
 </div>

 *Sub Models section*

 These are the default sub-models created at the time of Model creation.

## Merge the Model

1. Add Child Node
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Add a child node to link to another model" src={useBaseUrl("/doc-images/storage/add-child-node.png")} />
  </Zoom>
 </div>

 *Add a Child Node*

2. Select the child node and click on the editor icon next to the node.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Configure child node to link to another model" src={useBaseUrl("/doc-images/storage/select-edit-child-node.png")} />
  </Zoom>
 </div>
 
 *Select Node Configuration*

 In the **Node Configuration** pop up window:
   - Rename the Node Title
    <div style={{ textAlign: "center" }}>
        <Zoom>
          <img alt="Rename Node Title" src={useBaseUrl("/doc-images/storage/edit-node-title.png")} />
        </Zoom>
    </div>
 
   *Rename Node Title*

   - Select the **Node Type** as *Link to workspace model*
  
    <div style={{ textAlign: "center" }}>
        <Zoom>
          <img alt="Rename Node Title" src={useBaseUrl("/doc-images/storage/link-to-workspace-model.png")} />
        </Zoom>
    </div>

   - Select a *Workspace model* in your workspace that you want to link your sub model to.
   - Click **Finish**

The new node which is an independent Sub Model is added in the visual and identified by a unique icon.

<div style={{ textAlign: "center" }}>
     <Zoom>
          <img alt="Linked Node unique identifier icon" src={useBaseUrl("/doc-images/storage/sub-model-icon.png")} />
     </Zoom>
</div>

*Unique identifier icon next to the Linked Node*

> The Sub Model *Personal Finance* is now listed in the Navigation Panel
<div style={{ textAlign: "center" }}>
        <Zoom>
          <img alt="Rename Node Title" src={useBaseUrl("/doc-images/storage/new-sub-model-navpanel.png")} />
        </Zoom>
</div>

To go back to the overall model, click on *Net Profit* under the *Sub Models* section.