---
id: user-security
title: User Security in ValQ
sidebar_label: 6. User Security
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import { Tag } from "../../../src/ProductTag.js";

<Tag
header="User Security in ValQ"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

ValQ Collaborate (Enterprise Edition) introduces security features to restrict access to your models/nodes, scenarios, planning series to a given set of users and groups.

The security feature helps you to manage the view/edit access on your model for users or groups.
User and group management is administered through <Link to={useBaseUrl('docs/storage/admin-console')}>Admin console</Link> page.

## Security roles and level of permissions

You can manage the model level data security by using roles and then adding users to these different roles. A role has certain access controls and permissions.

### Understand the user roles

User security roles define a set of access privileges in ValQ model functionalities such as Model, Nodes, Scenarios, Planning series, Comments, etc. 

The following table describes the privileges of a user role in ValQ: 

| Security Role | Privileges                                                                                                                                                                                                               | Description                                                                                                                                                            |
|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| **Admin**     | Create and edit model/scenarios/series                                                                                                                                                                                   | Admin role can be assigned to a user or group by the *Model creator<sup>1</sup>* or other admins.  Note: The model/scenario can be deleted only by the *Model creator* |
| **Analyzer**  | <ul><li>Cannot access the Model tab</li><li>Can copy, edit, share, download and compare shared scenarios</li><li>View/edit/delete shared series based on the access</li><li>Cannot delete the shared scenarios</li></ul> | This role has read/write access on the shared scenarios/series and read access on the nodes.                                                                           |
| **Viewer**    | View shared model, nodes and scenarios                                                                                                                                                                                   | This role has view-only access on the shared model and scenarios by default. **Note**: A viewer can be granted edit<sup>2</sup> permissions on certain features.       |

- <sup>1</sup>Model creator is the default Admin who can add other users as admins or members.
- <sup>2</sup>ValQ features when shared with the "Limited to certain users" option, only selected users or groups can be given view-only or edit access.

### Scope of user roles in the ValQ features 

The scope of the access is defined by the user’s roles and permissions granted in the ValQ visuals by the *Model creator* or an *Admin*. 

| Feature                                                | Admin                                 | Analyzer                              | Viewer                                |
|--------------------------------------------------------|---------------------------------------|---------------------------------------|---------------------------------------|
| Editing the model/model security                       | Yes                                   | No                                    | No                                    |
| Creating a Scenario/Series                             | Yes                                   | Yes                                   | No                                    |
| View/Compare/copy/download/edit/share scenarios/series | Yes, if given edit access<sup>2</sup> | Yes, if given edit access<sup>2</sup> | Yes, if given edit access<sup>2</sup> |
| Delete scenario/series                                 | Yes                                   | No                                    | No                                    |
| Configure Node Security access                         | Yes                                   | No                                    | No                                    |
| Comments                                               | Yes                                   | Yes                                   | Yes                                   |
| Variance Analysis                                      | Yes                                   | Yes                                   | Yes                                   |
| Attribution Analysis                                   | Yes                                   | Yes                                   | Yes                                   |
| Sensitivity Analysis                                   | Yes                                   | Yes                                   | Yes                                   |
| Audit logs                                             | Yes                                   | Yes                                   | Yes                                   |
| Export as datasource                                   | Yes                                   | No                                    | No                                    |

<sup>2</sup>ValQ features when shared with the "Limited to certain users" option, only selected users/groups are given view-only or edit access.

### To assign user roles

The *Model creator* automatically becomes the *Admin* of the model and can add other members to the model with the above-defined roles as *Admin, Analyzer*, or a *Viewer*. 

Following are the steps to assign user roles: 
* Login to ValQ with your Microsoft account and select the assigned workspace  
* Assign data to the Visual and create a Model. Refer [how to build a ValQ model](https://docs.valq.com/docs/model/new) for more details. 
* Upload a model to the workspace by clicking the **Upload** button next to the user profile 
* Click on the 3 dots `...` next to your user profile and select **Settings**.
* In the **Model Settings > Security** section add other users/groups to the model.

#### Assign roles at the Model level - Model Settings

A *Model Creator/Admin* can search and add other users/groups to the model and assign the roles – Admin, Analyzer, and Viewer.

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Add users/groups to a model" src={useBaseUrl('/doc-images/storage/user-security-roles.png')} />
  </Zoom>
</div>  

*Add users/groups and assign model-level user roles* 

:::tip
A user can view the assigned model-level roles and permissions in the *Model Settings* side panel as shown in the above screenshot.
:::

Following are the roles assigned in the above model:
1. *testQA user1* is added as an *Admin*.
1. *ValQ Test User* as an *Analyzer*.
1. *finance-group* as a *Viewer*. All the members of the group are assigned *Viewer* level access permissions on the model. *testQA user3* and *testQA user4* are the members added to the group.

### Manage Model Access 

* *Admin* has complete access on the Model tab, and can create, edit, delete and share the model.
* *Analyzer* and *Viewer* do not have access to the Model tab as shown in the below screenshot.

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="An Analyzer cannot access the model/data series/export/writeback" src={useBaseUrl('/doc-images/storage/analyzer-no-model-access.png')} />
  </Zoom>
</div> 

*Model tab and functionalities disabled for Analyzer* 

> An Analyzer/Viewer cannot access model functionalities like *data series, export, writeback*, etc.

:::note 
Any member that is either not added as a user or part of a group added to the model, will not be able to access the ValQ report. 
:::

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Non-member of the model denied access to ValQ report" src={useBaseUrl('/doc-images/storage/access-denied.png')} />
  </Zoom>
</div> 

*Access denied to a non-member of the model*

### Manage Node Access

You can provide node level access control to groups and users added to the model.
- Select the Node and click the <Link to={useBaseUrl('docs/model/node#node-editor')}>editor icon</Link> next to the node.  
- In the **Edit Node** pop up window select **Access Control** to set node-level permissions.

:::note 
The same parent level access control will be applied for the child nodes as well. 
::: 

The selected Nodes and the child nodes can be shared with the following 2 options:

1. **Groups and users added to the model (default)**

  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Access control permission given to groups/users added to the model" src={useBaseUrl('/doc-images/storage/node-access-control-all.png')} />
   </Zoom>
  </div>

  *Consumer* Node shared with groups/users added to the model* 

1. **Limit to selected groups and users**

  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Node accessible by Admins alone" src={useBaseUrl('/doc-images/storage/node-accessible-limited-users.png')} />
   </Zoom>
  </div>

  *Industrials Node shared with limited groups and users* 

  * Case 1: Admin alone has access to the *Industrials* node
  
  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Node accessible by Admins" src={useBaseUrl('/doc-images/storage/node-accessible-to-admin.png')} />
   </Zoom>
  </div>

  *An Admin has access to Industrials node*

  * Case 2: *Analyzer* and *Viewer* cannot access the *Industrials* node

  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Node hidden for Analyzer and Viewer" src={useBaseUrl('/doc-images/storage/node-hidden-analyzer-viewer.png')} />
   </Zoom>
  </div>

  *A viewer login with no Industrials node in the model*

:::note
Industrials sub-model is no longer listed in the *Navigation panel* for the users with *Analyzer* and *Viewer* roles.
:::

:::important
Node level access permissions can also be applied on a leaf node.
:::

### Manage Scenario Access

On the **Simulate** tab select the *scenario* to be shared and click the *share* icon next to the *scenario*.
*Scenarios* can be kept private by the *Model creator* or shared with the following 2 options:
1. **Groups and users added to the model (default)**

  All the members of the group will be able to access *scenario 1* based on their role privileges.
  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Node accessible by Admins alone" src={useBaseUrl('/doc-images/storage/scenario-sharing-all.png')} />
   </Zoom>
  </div>

  *Scenario1 shared with groups and users added to the model*

    * *Admin* and *Analyzer* can create a new scenario, view, compare, download, copy, share, and edit the shared scenario. 
    * *Viewer* can only view, compare and download the shared scenario.
  
1. **Limit to selected groups and users**

  *Scenario 2* is shared view-only access to *Admin* and *Viewer* and edit-access to the *Finance group(Viewer)* group.
  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Admin/Analyzer with view access, Viewer with edit access" src={useBaseUrl('/doc-images/storage/sharing-scenario-limited-user.png')} />
   </Zoom>
  </div>

  *Scenario shared with edit-access to the group*

- Case 1: *Admin* and *Analyzer* can only view, compare, download and copy the shared scenario.

  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Analyzer can only copy/compare scenario2" src={useBaseUrl('/doc-images/storage/analyzer-view-access-scenario2.png')} />
   </Zoom>
  </div>

  *Analyzer with view access on shared scenario2* 

- *Viewer* can create new scenarios. View, compare, download, copy, share, and edit the shared scenario. 

  <div style={{textAlign: 'center'}}>
   <Zoom>
    <img alt="Viewers with copy/edit/share/download access on scenario2" src={useBaseUrl('/doc-images/storage/user3-edit-share-access-scenario2.png')} />
   </Zoom>
  </div>

  *Viewer has edit access on shared scenario2* 

### Manage Series Access

A *Model creator/Admin* can choose to:
1. [Keep the series *Private*](#private)
2. [*Share with all groups and users added to the model*](#group-and-users-added-to-the-model) or 
3. [*Limit to selected groups and users*](#limit-to-selected-groups-and-users) with view-only or edit access 

To share any series:
* On the **Plan** tab, select the *'mar-frcst'* series and click the *Share* icon in the top right ribbon bar.
* In the **Share Settings** pop window select one of the following options.

#### Private

A *Private Series* created by the *Model creator* is not be accessible by any other user or group member.
<div style={{textAlign: 'center'}}>
  <Zoom>
<img alt="Mar forecast series kept private to the creator/admin" src={useBaseUrl('/doc-images/storage/mar-frcst-private.png')} />
  </Zoom>
</div>

*Mar forecast series kept private and only accessible by the series owner*

#### Group and users added to the model

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Give access control on jan-frcst series to groups and users added to the model" src={useBaseUrl('/doc-images/storage/jan-frcst-shared-all-groups.png')} />
  </Zoom>
</div>

*Sharing jan-frcst series with groups and members added to the model* 

- case 1: *Admins* and *Analyzers* have complete access over the shared series, whereas *Viewers* have view-only access. 

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Viewer given limited view access, Admin/Analyzer complete access" src={useBaseUrl('/doc-images/storage/viewer-jan-frcst-view-only.png')} />
  </Zoom>
</div>

*Viewer can only view the series, cannot edit/share/view allocation history*

#### Limit to selected groups and users
  
*Admin* (user1) and *Analyzer* are given view-only access and *Viewer* ("Finance Group" members) is given edit access on '*feb-frcst*' series.

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Viewer alone has edit access on feb-frcst series" src={useBaseUrl('/doc-images/storage/feb-frcst-series-limited-users.png')} />
  </Zoom>
</div> 

*feb-frcst sharing with selected groups and users*

- Case 2: An *Analyzer* and *Admin* with view-only access cannot edit, share or view allocation history. 

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Viewer alone has edit access on feb-frcst series" src={useBaseUrl('/doc-images/storage/analyzer-feb-frcst-view-only-access.png')} />
  </Zoom>
</div> 

*Analyzer with view-only access on feb-frcst series* 

- Case 3: A *Viewer* has edit access on the '*feb-frcst*' series and can edit/share/view allocation history.

<div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Viewer has edit access permission, Admin/Analyzer do not" src={useBaseUrl('/doc-images/storage/viewer-feb-frcst-edit-access.png')} />
  </Zoom>
</div> 

*Viewer with edit access on shared series*  

> *mar-frcst* series is only accessible by the *Model creator* and hidden for *Analyzers* and *Viewers* as in the above screenshot.