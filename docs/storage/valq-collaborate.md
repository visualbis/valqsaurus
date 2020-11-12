---
id: valq-collaborate
title: ValQ Collaborate Enterprise Edition
sidebar_label: Getting Started
hide_title: true
---

import useBaseUrl from '@docusaurus/useBaseUrl'; // Add to the top of the file below the front matter.
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../src/ProductTag.js";

<Tag
header="ValQ Collaborate Enterprise"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

ValQ Collaborate offers storage, export, and collaborative features within ValQ Visual. These features will help you take your planning workflow to the next level with a lot of enterprise integration capabilities. 
:::note
For any requirements not met by the public cloud, consider moving to a private cloud with a collaborative enterprise plan. You get better control over the underlying resources and get to choose and own the infrastructure for your application.
:::

## Features of ValQ Collaborate

* <Link to={useBaseUrl('docs/model/general#3-writeback')}>Writeback</Link> - Post your scenarios, series, comments, etc. to a URL which can be configured to accept an HTTP request and write the data back to your Databases, Sharepoint, Files, etc.
* <Link to={useBaseUrl('docs/storage/features/export')}>Export data source</Link> - Export scenarios, planning series, etc., from ValQ as a web data source that can be consumed readily from other BI tools for analysis.
* <Link to={useBaseUrl('#')}>Model Merge</Link> - Compose complex (and large) models by merging independent sub-models. Example: When you have models at multiple regions and you'd like to combine them for reporting or planning.
* <Link to={useBaseUrl('docs/storage/user-security')}>User Security</Link> - Configure security for the models. Provide node/scenarios/series level  access permission roles to different users/groups.
* <Link to={useBaseUrl('docs/storage/features/commenting')}>Comments</Link> - Share and collaborate your models and comments on Planning and Scenarios
* <Link to={useBaseUrl('docs/storage/features/history-logs')}>History Logs</Link> - The history of changes in model/scenarios/series/writeback is maintained in chronological order. The history logs are shared among users and can also be restored.

## How to purchase ValQ Collaborate

1. Go to [ValQ Pricing Page](https://valq.com/pricing/#collaborate) and click on the plan you wish to buy.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Collaborate subscriptions page comparison" src={useBaseUrl("/doc-images/storage/pricing-page.png")} />
  </Zoom>
 </div>

 *ValQ Collaborate plan pricing page*

2. On the **Sign Up** page fill out the required information such as *Product details, Billing details*, and *Credit Card details*. Enter a *Workspace Name* to create a workspace (this is like your unique account on ValQ Public cloud). 
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Sign Up for ValQ Collaborate" src={useBaseUrl("/doc-images/storage/signup-page.png")} />
  </Zoom>
 </div>
 
 *ValQ Collaborate sign up page form*

A mail is sent to you with a download link for ValQ Collaborate **Visual (Web Store build)**.

Click on the **Click here** link in the email and download the ValQ Collaborate visual with the extension `.pbiviz`.

<Link to={useBaseUrl('docs/intro/model')}>Install the visual</Link> in Power BI Desktop by importing this `.pbiviz` file.

## ValQ Workspace or Account

Login to ValQ visual using your login credentials used at the time of purchasing the license.

- **Admin console**
You'll get access to your ValQ Workspace (Account) from which you can manage the users in your workspace, create groups, etc.,

- **Custom Visual**
You'll be able to Login to your workspace with the registered users in the workspace.