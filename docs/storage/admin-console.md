---
id: admin-console
title: Admin Console
sidebar_label: Administration
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

You can add users and groups to your *Workspace* from the **Admin Console** Portal page.

## What is a Workspace

A workspace is a virtual space to save and share your data. (and all its entities.)

When you upload ValQ models to a *Workspace*, your models are automatically saved on the cloud and accessible to you via **Admin Console** Portal page.

- With the *Enterprise* edition you can move and manage your workspaces on a private cloud.
- You can upload and collaborate your models with other users and groups within the workspaces.

*Admin Console* is a platform to manage users and groups added to the models and acts as an interface between the ValQ visual and backend server.

## Architecture

## Admin Console Member Roles

## Admin Console Features

### Admin Console Dashboard

### Manage Users

### Groups

### Models

### Shared Models

Admin console provides 3 levels of access permissions to user roles as described in the table below.

| Role            | Privilege                                                                                                                                             | Description                                                                                                                              |
|-----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| Workspace Admin | View Billing/License information, Manage Users (add/remove/edit role), Manage groups (add/edit/delete), Models (view/delete), and view shared models. | Top-level user-created automatically on workspace sign up. This user is assumed as the Admin user.                                       |
| Billing Admin   | View Billing/License information. No users/groups information available                                                                               | Special user created only for viewing billing data, licenses available/assigned                                                          |
| Member          | View the groups and members, and shared model details such as scenarios, and series.                                                                  | This is the regular user or standard end-user of the product. This user can only access models shared with groups the user is a part of. |

## Admin Console Login

1. Open the ValQ visual and click on your **User profile > management console**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Open the Admin portal console page for the logged in user" src={useBaseUrl('/doc-images/storage/valq-console-login.png')} />
  </Zoom>
 </div> 

 *ValQ Console login link for the logged-in user*

1. Click **OK** to browse to the ValQ application page

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Click OK to navigate to the ValQ app page" src={useBaseUrl('/doc-images/storage/ok-open-console-page.png')} />
  </Zoom>
 </div>

 *allow the navigation to ValQ app management console page*

 <!-- 2. Click on **Sign in with Microsoft**, and enter your username and password and click **Sign in** -->

1. Select the **Private Tenant Workspace**

 <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Select the workspace to upload your models to" src={useBaseUrl('/doc-images/storage/select-workspace.png')} />
  </Zoom>
 </div>
   
 
 *Select Workspace*

  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Admin console page" src={useBaseUrl('/doc-images/storage/admin-console-welcome.png')} />
  </Zoom>
 </div>
 
 *Admin Console page as accessible by the Workspace Admin*

 :::success
 You are logged into your Admin Console page.
 :::

## Admin Console Dashboard

The **Dashboard** gives a quick summary of the Collaborate plan that you have selected as shown in the above screenshot.

- *License Details*: This section lists out your *Workspace Name, Domain, Plan, Expiry Date, Trial*, and *Users Limit* (Number of users that can be added to the Workspace depends on the Collaborate plan that you purchased).

- *Profile*: This section provides the User *Name*, and *Email*

The following are the general features available on the *Admin Console* page.

- [Dashboard](#admin-console-dashboard): A summary of the plan selected
- <Link to={useBaseUrl('storage/manage-users')}>User Manager</Link>: Adding/removing users to the workspace
- Groups: Adding/removing users to a group with desired roles
- Models: Model details created by the owner
- Shared Models: Model details shared by others with the logged-in user

All the other members who are not authorized as *Workspace Admins* can only access the **Groups, Models*, and *Shared Models* page.

  <div style={{textAlign: 'center'}}>
  <Zoom>
    <img alt="Admin console page" src={useBaseUrl('/doc-images/storage/members-admin-page.png')} />
  </Zoom>
 </div>

 *Admin page features available to a regular member*

To change the current workspace, click on your **Username > Switch Workspace**.