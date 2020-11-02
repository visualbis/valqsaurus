---
id: export
title: Export Datasource
sidebar_label: 2. Export Datasource
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

**Export As Datasource** feature allows the *Data Series* (Baseline, Comparison, Historical, and Planning Series) and *Scenarios* of a ValQ model to be made available in a JSON format on the web. 

This Web URL will be a protected resource and an authorization key will be needed to access the JSON data. This feature can be used in some use cases like:
- <Link to={useBaseUrl("docs/storage/export#create-a-web-data-source-url")}>Export</Link> the data from ValQ by creating a web data source
- [Import](#import-data-from-web-datasource-url-and-parameters-in-power-bi) the data back into Power BI (Using Power BI's "Get Data from Web" feature) or any other application for further analysis
- [Live Synching](#live-syncing-simulations-with-the-export-file-that-fetches-real-time-data) simulations with the export file that fetches real-time data

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

1. Select the **Series** and **Scenarios** that you want to export.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Select the Series/Scenarios to upload" src={useBaseUrl('/doc-images/web-datasource/create-web-datasource.png')} />
  </Zoom>
 </div>
 
 *Select Series/Scenarios to create a Web datasource*

1. Following are the options available in the *Export format* screen:

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export Format" src={useBaseUrl('/doc-images/web-datasource/export-format.png')} />
  </Zoom>
 </div>

 *Export format*

   - **Export format**: Select the export format as *Tree structure* or *Flat structure*
   - **Customization**: Select the *Export level of the Nodes* that decides the hierarchy of the Model Nodes
   - **Edit Column Names**: Edit and rename the *Column names* by clicking on the editor icon
   - [ ] **Export only leaf nodes**: Select the check box to export just the last *Node* of the Model.
   - Copy and save the **Web URL** and **HTTP request header parameters**.

 :::note
 The above Web URL and HTTP request ids are auto-generated. Copy the ids and save them in a file to be used to import the data later.
 :::

1. Click **Done**.

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