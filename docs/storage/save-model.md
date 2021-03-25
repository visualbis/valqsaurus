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
import { Tag } from "../../src/ProductTag.js";

<Tag
  header="Upload ValQ model to your Workspace"
  image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

Uploading the model facilities various collaboration functionalities such as saving the model to a workspace, sharing your model, assigning model level user security, adding comments, conducting audit trail, sharing scenarios, model merge and exporting the model as a data source to be used for other visuals or further analysis.

### Login to Workspace

A user must log in to the workspace to upload a model.
* In the *ValQ Visual* click **Login to Workspace** at the top right corner and select the Workspace you want to save your model to.

<div class="center">
  <Zoom>
    <img alt="Connect visuals with the workspace" src={useBaseUrl("/doc-images/storage/visual-login-to-workspace.png")} />
  </Zoom>
  <p>Log-in to your Workspace</p>
</div>

* The **Upload** button is now enabled next to your profile icon at the bezel.

<div class="center">
  <Zoom>
    <img alt="Upload button highlighted" src={useBaseUrl("/doc-images/storage/upload-button.png")} />
  </Zoom>
  <p>Model ready to be uploaded</p>
</div>

### Upload the Model

* In the Model shown, let us assume you delete a node `Ryan Smith`

<div class="center">
  <Zoom>
    <img alt="Delete a node" src={useBaseUrl("/doc-images/storage/delete-node.png")} />
  </Zoom>
  <p>Delete a Node</p>
</div>

* Simulate on the node `Chris Morris`

<div class="center">
  <Zoom>
    <img alt="Simulate on the node for analysis" src={useBaseUrl("/doc-images/storage/simulate-node.png")} />
  </Zoom>
  <p>Simulating the node for 25% higher performance</p>
</div>

* Click **Upload**.
* In the pop window enter a **Model Name** and select
- [x] *Enable Autosave* (To enable saving the changes automatically).

<div class="center">
  <Zoom>
    <img alt="Upload mode to Workspace" src={useBaseUrl("/doc-images/storage/upload-model.png")} />
  </Zoom>
  <p>Upload and save the model to your Workspace</p>
</div>

* Click **Upload**.

:::success
Your model has been uploaded to <Link to ={useBaseUrl('storage/admin-console#models')}>Admin console</Link>
:::

Once the model is uploaded, 3 additional icons appear at the bezel - *Save*, *<Link to={useBaseUrl('storage/commenting')}>Comments</Link>*, and 3 dots `...`.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Bezel icons" src={useBaseUrl("/doc-images/bezel-icons.png")} />
  </Zoom>
  <p>Bezel Icons</p>
</div>

> The `...` icon has 3 more features - *<Link to={useBaseUrl('storage/export')}>Export as Datasource</Link>*, *<Link to={useBaseUrl('storage/history-logs')}>History Log</Link>*, and *<Link to={useBaseUrl('storage/user-security#assign-roles-at-the-model-level---model-settings')}>Settings (Model Settings)</Link>*.
