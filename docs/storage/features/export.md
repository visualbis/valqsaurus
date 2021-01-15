---
id: export
title: Export Datasource
sidebar_label: 2. Export Datasource
hide_title: true
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../../src/ProductTag.js";

<Tag
header="Export Datasource"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

**Export As Datasource** feature allows the *Data Series* (Baseline, Comparison, Historical, and Planning Series) and *Scenarios* of a ValQ model to be made available in a JSON format on the web. 

This Web URL will be a protected resource and an authorization key will be needed to access the JSON data. This feature can be used in some use cases like:
- [Export](#create-a-web-data-source-url) the data from ValQ by creating a web data source
- [Import](#import-data-from-web-datasource-url-and-parameters-in-power-bi) the data back into Power BI (Using Power BI's "Get Data from Web" feature) or any other application for further analysis
- [Live Sync](#live-syncing-simulations-with-the-export-file-that-fetches-real-time-data) simulations with the export file that fetches real-time data

:::note
The authorization key will be generated and will only be available to report Admins.
:::

## Create a Web Data Source URL

1. Click on the 3 dots `...` next to your user profile and select **"Export as datasource"**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export as Datasource" src={useBaseUrl('/doc-images/web-datasource/export-as-datasource.png')} />
  </Zoom>
 </div>

 *Select Export as datasource*

2. You can either **Select** certain *Series/Scenarios* to export, or **Export all** of them.

 - Choose the *Series/Scenarios* to export:
  
 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Select the Series/Scenarios to export" src={useBaseUrl('/doc-images/web-datasource/create-web-datasource.png')} />
  </Zoom>
 </div>
 
 *Select Series/Scenarios to create a Web datasource*

 - Export all the *Series/Scenarios*:

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export all the Series/Scenarios" src={useBaseUrl('/doc-images/web-datasource/export-all.png')} height="530" />
  </Zoom>
 </div>

 *Export all Series/Scenarios*
 
3. Click **Next**.

4. The data can be exported in either a *Tree structure* or a *Flat structure* as shown in the **Export format** screen:

 a. The data is exported in a tree format just like the ValQ model.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export Format" src={useBaseUrl('/doc-images/web-datasource/export-format.png')} />
  </Zoom>
 </div>

 *Export format with Tree structure*

   - **Customization**: The tab allows you to select the indicated fields.
   - **Export up to level**: Select the node-level hierarchy to export.
   - [ ] **Export only leaf nodes**: Select the check box to export just the last *Node* of the Model.
   - To edit a column name click the pencil editor icon next to the column field.

 b. The data is exported in the form of a flat table and includes all nodes listed in a column.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export Format with Flat structure" src={useBaseUrl('/doc-images/web-datasource/export-format-flat-structure.png')} height="470"/>
  </Zoom>
 </div>

 *Export format with Flat structure*

   - **Customization**: The tab in the *Flat* structure has an additional field - *Show Parent title*.
   :::note
   The Flat structure does not have the options to export the *node-level hierarchy* or export just the *leaf nodes*.
   :::

2. Copy and save the **Web URL** and **HTTP request header parameters**.

 :::note
 The above Web URL and HTTP request ids are auto-generated. Copy the ids and save them in a file to be used to import the data later.
 :::

2. Click **Done**.

## Import data from web datasource URL and parameters in Power BI

In the below example, we'll show how the URL can be consumed in a Power BI report using [Get Data by Web Connector](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example).

1. In the PowerBI app go to **Home > Get Data > Web**.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Get Data by Web Connector" src={useBaseUrl('/doc-images/web-datasource/get-data-web.png')} />
  </Zoom>
 </div>

 *Get Data by Web Connector*

1. Select the *Advanced* option

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="web-url-http-request" src={useBaseUrl('/doc-images/web-datasource/web-url-http-request.png')} />
  </Zoom>
 </div>

 *Import web data with Advanced option*

 :::important
 Type **Authorization** in the HTTP header field.
 :::
 
 Enter the Web URL and HTTP request header parameters obtained in the above **export format** section.  

1. Click **OK**.
 This pops up a preview of the *web datasource* to be imported.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="preview-of-data" src={useBaseUrl('/doc-images/web-datasource/preview-of-data.png')} />
  </Zoom>
 </div>

 *Preview of the data to be imported*

 > Click **Load** to continue loading the data or **Transform Data** to further configure the data that will be imported from the *web datasource*.

<!--
 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Transform Data" src={useBaseUrl('/doc-images/web-datasource/transform-data.png')} />
  </Zoom>
 </div>

 *Screenshot: Transform Data*

  - Choose the data model *Columns* you want to export
  - Edit Web URL and permissions under the *Data Source Settings*

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Datasource Settings" src={useBaseUrl('/doc-images/web-datasource/datasource-settings.png')} />
  </Zoom>
 </div>

 *Screenshot: Datasource Settings*

  - Apply and save the changes.
  - Select the *Fields* and <Link to={useBaseUrl('docs/model/new')}>create a Model</Link>.

> Success: Your web source data has been loaded into the ValQ Custom visuals.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="web-datasource-imported" src={useBaseUrl('/doc-images/web-datasource/web-datasource-imported.png')} />
  </Zoom>
 </div>

 *Screenshot: Web Datasource imported*
-->

## Live syncing simulations with the export file that fetches real-time data

ValQ data can be used as input for other visuals and further analysis. You can run further simulations to the scenarios and instantly synchronize the new scenario data with the export file by refreshing the data query.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt=""
      src={useBaseUrl("/doc-images/live-synch.png")}
      width={550}
      height={350}
    />
  </Zoom>
</div>

*Live synch simulations*