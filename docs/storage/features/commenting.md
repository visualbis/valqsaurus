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
import { Tag } from "../../../src/ProductTag.js";

<Tag
header="Commenting"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

The model collaboration feature allows the members added to a model to view, share, and comment on each other's changes.
The *Model creator* must <Link to={useBaseUrl("docs/storage/features/save-model")}>Save and upload</Link> the model before collaborating with other users.
In addition, the model must also be shared with users/groups with a dedicated <Link to={useBaseUrl('#')}>user role</Link>.

Users of the model can view the comments on *Planning series* and *shared Scenarios* by clicking on the *comments* icon from the **Plan** and **Simulate** tabs respectively.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/all-comments-planning.png")} />
  </Zoom>
</div>

*Comments for Planning series*

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/all-comments-scenario.png")} />
  </Zoom>
</div>

*Comments for Simulations*

### Add comments for Planning

Go to the **Plan** tab and select the *series*.
Click on the cell you want to comment and click the *Comment* icon on the menubar/bezel.
In the *Comments* menu, type your comments and click *Post*.

Your comment is saved to the comment section for Planning under the planning series and node hierarchy alongside your username and time stamp.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/planning-series-add-comments.png")} />
  </Zoom>
</div>

### Add comments for Simulation

On the Simulate canvas, hover over the node that you want to comment on and click on the *comment* icon above the node.
Write your comment in the *Comments* box and click *Post*.

Your comment is saved to the comment section for Simulation under the scenario name and node hierarchy alongside your username and time stamp.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/node-level-commenting-on-scenario.png")} />
  </Zoom>
</div>

*Comment on a simulated node*

### View, Edit, Delete Comments

As a security feature, only the user who writes the comments has permission to edit and delete the comments.

In the below screenshot, the logged-in user("ValQ test user") can only edit/delete its own comment.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/edit-delete-comments.png")} />
  </Zoom>
</div>

*Comments edit/delete access*