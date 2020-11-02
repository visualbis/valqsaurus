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
Consider moving to a private cloud with the valQ Collaborate Enterprise plan for on-premises business complaint requirements.

## Features of ValQ Collaborate

* <Link to={useBaseUrl('docs/model/general#3-writeback')}>Writeback</Link> - Export your scenarios, series, comments, etc. to an external URL and in turn to a database warehouse.
* <Link to={useBaseUrl('docs/storage/features/export')}>Export data source</Link> - Export scenarios, planning series, etc., from ValQ as a web data source that can be consumed readily from other BI tools for analysis.
* <Link to={useBaseUrl('#')}>Model Merge</Link> - Compose complex (and large) models by merging independent sub-models. Example: When you have models at multiple regions and you'd like to combine them for reporting or planning.
* <Link to={useBaseUrl('docs/storage/user-security')}>User Security</Link> - Configure security for the models. Provide node/scenarios/series level  access permission roles to different users/groups.
* <Link to={useBaseUrl('docs/storage/features/commenting')}>Comments</Link> - Share and collaborate your models and comments on Planning and Scenarios
* <Link to={useBaseUrl('docs/storage/features/history-logs')}>History Logs</Link> - The history of changes in model/scenarios/series/writeback is maintained in chronological order. The history logs are shared among users and can also be restored.

## How to purchase ValQ Collaborate

1. Go to [ValQ Pricing Page](https://valq.com/pricing/#collaborate) and click on the subscription you wish to buy.
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Collaborate subscriptions page comparison" src={useBaseUrl("/doc-images/storage/pricing-page.png")} />
  </Zoom>
 </div>

 *ValQ Collaborate subscriptions pricing page*

2. On the **Sign Up** page fill out the required information such as *Product details, Billing details*, and *Credit Card details*. Enter a *Workspace Name* to create a workspace for uploading and sharing your data. 
 <div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Sign Up for ValQ Collaborate" src={useBaseUrl("/doc-images/storage/signup-page.png")} />
  </Zoom>
 </div>
 
 *ValQ Collaborate sign up page form*

A mail is sent to you with a link to download your ValQ **Visual Build (Web Store build)** for **ValQ Collaborate**.

Click on the **Click here** link in the email and download the ValQ Collaborate visual with the extension `.pbiviz`.

<Link to={useBaseUrl('docs/intro/model')}>Install the visual</Link> in Power BI Desktop by importing this `.pbiviz` file.