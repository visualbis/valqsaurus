---
id: commenting
title: Commenting
sidebar_label: 3. Commenting
hide_title: true
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../src/ProductTag.js";

<Tag
header="Commenting"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

The model collaboration feature allows the members added to a model to view, share, and comment on each other's changes.
The *Model creator* must <Link to={useBaseUrl("storage/save-model")}>Save and upload</Link> the model before collaborating with other users.
In addition, the model must also be shared with the selected users/groups.

Users of the model can view the comments on *Planning series* and *shared Scenarios* by clicking on the *comments* icon from the **Plan** and **Simulate** tabs respectively.

<div class="center">
  <Zoom>
    <img alt="Series comments" src={useBaseUrl("/doc-images/storage/features/all-comments-planning.png")} />
  </Zoom>
  <p>Comments for Planning Series</p>
</div>

<div class="center">
  <Zoom>
    <img alt="Simulation comments" src={useBaseUrl("/doc-images/storage/features/all-comments-scenario.png")} />
  </Zoom>
  <p>Comments for Simulations</p>
</div>

### Add comments for Planning

Go to the **Plan** tab and select the *series*.
Click on the cell you want to comment, and click the *Comment* icon on the menubar/bezel.
In the *Comments* menu, type your comments and click *Post*.

Your comment is saved to the comment section for Planning under the planning series and node hierarchy alongside your username and time stamp.

<div class="center">
  <Zoom>
    <img alt="Node commenting" src={useBaseUrl("/doc-images/storage/features/planning-series-add-comments.png")} />
  </Zoom>
  <p>Comment on the selected node</p>
</div>

### Add comments for Scenarios

On the Simulate canvas, hover over the node that you want to comment on and click on the *comment* icon above the node.
Write your comment in the *Comments* box and click *Post*.

Your comment is saved to the comment section for Simulation under the scenario name and node hierarchy alongside your username and time stamp.

<div class="center">
  <Zoom>
    <img alt="Comment on a simulated node" src={useBaseUrl("/doc-images/storage/features/node-level-commenting-on-scenario.png")} />
  </Zoom>
  <p>Comment on a simulated node</p>
</div>

### View, Edit, Delete Comments

As a security feature, only the user who writes the comments has permission to edit and delete the comments.

In the below screenshot, the logged-in user("ValQ test user") alone can  edit/delete the comment written by self.

<div class="center">
  <Zoom>
    <img alt="Comments edit/delete access" src={useBaseUrl("/doc-images/storage/features/edit-delete-comments.png")} />
  </Zoom>
  <p>Comments edit/delete access</p>
</div>
