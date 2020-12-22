---
id: save-model
sidebar_label: 1. Saving Model To Workspace
title: Saving Model To Workspace
hide_title: true
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../../src/ProductTag.js";

<Tag
  header="Upload ValQ model to your Workspace"
  image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

Uploading the model facilities various collaboration functionalities such as saving the model to a workspace, sharing your model, assigning model level user security, adding comments, conducting audit trail, sharing scenarios, model merge and exporting the model as a data source to be used for other visuals or further analysis.

### Login to Workspace

A user must log in to the workspace to upload a model.
* In the *ValQ Visual* click **Login to Workspace** at the top right corner and select the Workspace you want to save your model to.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Connect visuals with the workspace" src={useBaseUrl("/doc-images/storage/visual-login-to-workspace.png")} />
  </Zoom>
</div>

*Login to your Workspace*

* The **Upload** button is now enabled next to your profile icon at the bezel.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Upload button highlighted" src={useBaseUrl("/doc-images/storage/upload-button.png")} />
  </Zoom>
</div>

*Model ready to be uploaded*

### Upload the Model

* In the Model shown, let us assume you delete a node `Ryan Smith`

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Delete a node" src={useBaseUrl("/doc-images/storage/delete-node.png")} />
  </Zoom>
</div>

*Delete a node*

* Simulate on the node `Chris Morris`

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Simulate on the node for analysis" src={useBaseUrl("/doc-images/storage/simulate-node.png")} />
  </Zoom>
</div>

*Simulating the node for 25% higher performance*

* Click **Upload**.
* In the pop window enter a **Model Name** and select
- [x] *Enable Autosave* (To enable saving the changes automatically).

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Upload mode to Workspace" src={useBaseUrl("/doc-images/storage/features/upload-model.png")} />
  </Zoom>
</div>

*Upload and save model to your workspace*

* Click **Upload**.

:::success
Your model has been uploaded to <Link to ={useBaseUrl('docs/storage/admin-console#models')}>Admin console</Link>
:::

Once the model is uploaded, 3 additional icons appear at the bezel - *Save*, *<Link to={useBaseUrl('docs/storage/features/commenting')}>Comments</Link>*, and 3 dots `...`.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Bezel icons" src={useBaseUrl("/doc-images/bezel-icons.png")} />
  </Zoom>
</div>

*Bezel icons*

> The `...` icon has 3 more features - *<Link to={useBaseUrl('docs/storage/features/export')}>Export as Datasource</Link>*, *<Link to={useBaseUrl('docs/storage/features/history-logs')}>History Log</Link>*, and *<Link to={useBaseUrl('docs/storage/features/user-security#assign-roles-at-the-model-level---model-settings')}>Settings (Model Settings)</Link>*.