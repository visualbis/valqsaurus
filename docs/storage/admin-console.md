---
id: admin-console
title: Admin Console Portal
sidebar_label: Administration
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../src/ProductTag.js";

<Tag
header="Admin Console Portal"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

The *Admin Console* portal is used for managing your ValQ Workspace(Account). The ValQ Workspace is your account on the public ValQ cloud.

You can manage groups and users in your workspace, view/edit your models and shared models, and view Licensing status and upgrade.

## Admin Console Features

- [Dashboard](#admin-dashboard)<sup>1</sup>: View the Licensing status and Upgrade plan.
- [User Manager](#manage-users-in-the-workspace)<sup>1</sup>: Manage users in your workspace (add/remove/edit roles).
- [Groups](#manage-groups-and-members-of-the-group)<sup>2</sup>: Manage groups and members added to the groups in your workspace.
- [Models](#models)<sup>2</sup>: View/edit personal Model details.
- [Shared Models](#shared-models)<sup>2</sup>: View shared model details.

:::note
- <sup>1</sup>Feature available for Workspace Admins and regular Admin user roles.
- <sup>2</sup>Feature available for *Workspace Admin, admin*, and *member (limited access)* user roles. 
:::

### Admin Console Member Roles

The current user management allows 3 different user roles and privileges:

| Role              | Description                                                                                                                 |
|-------------------|-----------------------------------------------------------------------------------------------------------------------------|
| **Admin**         | Administer users/groups added to the model, manage user roles, and shared models.                                           |
| **Billing Admin** | Special user created only for viewing billing data, licenses available/assigned.                                            |
| **Member**        | This is the regular user or standard end-user of the product. This user can only access the shared models/series/scenarios. |

:::note
There is also a *Workspace Admin* role that is automatically created on workspace sign-up. This is the most privileged role and is authorized complete administration access in the *Admin Console*.
:::

### Admin Dashboard

The **Dashboard** page provides a summary of the Collaborate plan details that the user has purchased.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-dashboard.png")} />
  </Zoom>
 </div>

*Dashboard page as visible for an admin user role*

- **License Details**: This section lists out your *Workspace Name, Domain, Plan, Expiry Date, Trial*, and *User Limit (*count of users specified at the time of checkout).
    - A *Billing Admin* can upgrade the *Collaborate* plan by clicking on the **Upgrade** button.
- **Profile**: This section lists the User *Name*, and *Email* of the logged-in user.

### Manage Users in the Workspace

Anyone who has an administrator role in a workspace can give others access to that workspace by adding them to the various roles. Workspace creators are automatically administrators.

**User Manager** page provides functionalities to add/remove members and assign *roles* and *groups* to members.
In the **Admin Console** left navigation panel, click **User Manager**.

1. Click **Add Member** button at the top right corner to add a new member and enter the **Email** address.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/add-member.png")} />
  </Zoom>
 </div>

 *An Admin can add new members to the workspace*

1. Click a *Member* to **edit** a member's **Role**, add/remove the member from a **Group**, and to **Remove**(delete) a member.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-edit-member.png")} />
  </Zoom>
 </div>

 *An Admin can edit other member's role and groups*

1. Members who request to access your model will be shown under *Request Pending* list and you can choose to accept/deny the request.
1. Click on **Bulk upload** button at the top right corner to import a complete list of members from a CSV file.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Bulk upload members from csv" src={useBaseUrl("/doc-images/storage/admin-console/bulk-upload-csv.png")} />
  </Zoom>
 </div>

*Bulk upload members*

*User Manager* screen provides further functionalities like:
1. **Search** for members by typing the name/email address in the *Search* box.
2. **Filter** the members based on their roles.
3. **Sort** the member's list by "By Name" or "By Date" in "ascending/descending" order.


 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Filter and sort the member's list" src={useBaseUrl("/doc-images/storage/admin-console/user-manager-filter-sort.png")} />
  </Zoom>
 </div>

 *Filter and sort the member's list*

### Manage Groups and Members of the group

Create a *Group* of selected users in a *Workspace*. The group creation enable you to share the model with a set of users with the same access level permissions.

Select **Groups** in the left navigation panel.

In the *Group* page you can **create a new group**, **edit<sup>4</sup>/remove groups**, **add/remove members** to the *groups*, and **assign member roles**.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/create-group.png")} />
  </Zoom>
 </div>

*Groups page as accessible by a Member*

:::note
<sup>4</sup>Changing a *Group name* is not recommended for the group that is already a part of the shared security feature in a model.
The member is only removed from the group and still added to the Workspace.
The removed member may still be a part of other groups, but will not be able to access the model that is shared with the group.
:::

**Group Management**

- To create a new group click on **Create Group** and enter the *Group name* and *Group description*
- Click **Edit** to modify the *Group name* and *Group description.*
- Click **Remove** next to the **group** to delete the *group*.

**User Management**

- Select and click the *Group* to add new members, edit member roles, and delete members.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/edit-member-role.png")} />
  </Zoom>
 </div>

### Models

The **Models** page lists the models that are created by and private to a *Model creator.*
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/models-page.png")} />
  </Zoom>
 </div>

*Models details as accessed by a member user role*

This page displays a list of *Models* with the following fields*:*

- **Name**: The model name you entered while uploading the model
- **Last updated on**: The latest timestamp when the model was saved
- **Published date**: Date timestamp when the model was published
- **Action**: Delete a model from workspace

**Model Details**

Click on a *Model*  for the following details:

- **Scenario**: List of private and shared *Scenarios* with the details such as - *Scenario Name, Created at (timestamp), Type (Private/Shared)*, and *Owner*.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-model-scenario-details.png")} />
  </Zoom>
 </div>

- **Series**: All the model series listed with: *Series Name, Created at (timestamp), Type (Native/Allocation)*, and *Owner*.

 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-model-series-details.png")} />
  </Zoom>
 </div>

- **Access Control<sup>5</sup>:** Lists the *members* and their *Role* with whom the *Model* has been shared.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-model-access-control.png")} />
  </Zoom>
 </div>

*Workspace Admin can view the access control permissions*

:::note
<sup>5</sup>Access control is visible only to a *Workspace Admin* and not to *admins/members*.
:::

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/model-access-control.png")} />
  </Zoom>
 </div>

*Member user role denied permission to view Access control*

- **Details**: Summarized model details like *Model name, Published at, Created by, Updated at, Udated by*, and *Number of series*.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-model-details.png")} />
  </Zoom>
 </div>

### Shared Models

**Shared Models** page lists all the models uploaded in the common *Workspace* and shared with the logged in user.

> A *Model creator* has more accessibility on the owned model as compared to other *admins/members*.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/admin-console-shared-model.png")} />
  </Zoom>
 </div>

*Models shared with a member*

- A member can view the model *Name, Last updated on (timestamp), Published date, Permission (Model-level user access in ValQ visual),* and *Owner (Model Creator).*
- An *admin/member* is not authorized to view **Access control** details of the users added to the model and the user role.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Linking a parent node to another model not allowed" src={useBaseUrl("/doc-images/storage/admin-console/shared-models-scenarios-series.png")} />
  </Zoom>
 </div>

*Access control permission tab missing for admin/member user role*

- *Scenarios* and *Series* shared with the *User Security* feature are listed. A *member* will not be able to view the *scenario/series* that are not shared with the user role.
