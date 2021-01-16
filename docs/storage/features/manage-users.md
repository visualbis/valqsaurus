---
id: manage-users
title: Manage Users In Your Workspace (Admin Console)
sidebar_label: Manage Users In Your Workspace (Admin Console)
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";

*User Manager* page allows *Workspace Admins/members* to add/remove users and groups to the workspace.

## User Manager

To Add New Members: 

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Add members and assign access control on the model" src={useBaseUrl('/doc-images/storage/add-member.png')} />
  </Zoom>
 </div>

 *Add new members to the workspace*

- Click the **Add Member** button at the top right corner.
- Enter the **Email** address of the user you want to add to the workspace and click **Add**.
- Assign member role as **Admin, Billing Admin** or **Member**. Each member will be able to access the workspace based on the *Role* assigned.

:::note
Members who request to access your model will be shown under the *Request Pending* list and you can choose to accept/deny the request.
:::

- Click on **Bulk upload** next to *Add Member* to import a complete list of members from a CSV file.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Bulk upload members from a CSV file" src={useBaseUrl('/doc-images/storage/bulk-upload-csv.png')} />
  </Zoom>
 </div>

 *Bulk upload members*

:::success
You can now share ValQ Visual Models with the members added to your workspace.
:::
