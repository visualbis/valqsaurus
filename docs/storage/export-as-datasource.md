---
id: export-as-datasource
title: Export Data to Web
sidebar_label: Export Data To Web
---

import useBaseUrl from "@docusaurus/useBaseUrl";
import Link from '@docusaurus/Link';
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

**Export As Datasource** feature allows the *Data Series* (Baseline, Comparison, Historical, and Planning Series) and *Scenarios* of a ValQ model to be made available in a JSON format on the web. This Web URL will be a protected resource and an authorization key will be needed to access the JSON data. This feature can be used in some use cases like:
- Writing back the data from ValQ to a source system by reading the JSON
- Import the data back to the Power BI report (Using Power BI's "*Get Data from Web*" feature)

> Note: The authorization key will be generated and will be available only to the report admins.

## Create a Web Data Source URL
In order to export the data as Datasource, please follow the below steps:

1. Save the ValQ Model to a workspace, by clicking on the **Upload** label.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Upload Valq Model" src={useBaseUrl('/doc-images/web-datasource/upload-model.png')} />
  </Zoom>
 </div>

*Upload Model to Workspace*

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Upload Popup Screen" src={useBaseUrl('/doc-images/web-datasource/upload-popup.png')} />
  </Zoom>
 </div>

*Upload Popup Screen*

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Model Uploaded" src={useBaseUrl('/doc-images/web-datasource/model-uploaded.png')} />
  </Zoom>
 </div>

*Model uploded to the Workspace*

1. Click on the 3 dots `...` and select **"Export as datasource"**

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export as Datasource" src={useBaseUrl('/doc-images/web-datasource/export-as-datasource.png')} />
  </Zoom>
 </div>

*Export as datasource*

1. Select the **Series** and **Scenarios** names that you want to export

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Create Web Datasource" src={useBaseUrl('/doc-images/web-datasource/create-web-datasource.png')} />
  </Zoom>
 </div>

*Create a Web datasource*

Following are the options available in the *Export format* screen:

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Export Format" src={useBaseUrl('/doc-images/web-datasource/export-format.png')} />
  </Zoom>
 </div>

*Export format*

- **Export format**: Select the export format as *Tree structure* or *Flat structure*
- **Customization**: Select the *Export level of the Nodes* that decides the hierarchy of the Model Nodes
- **Edit Column Names**: Edit and rename the *Column names* by clicking on the editor icon
- [ ] **Export only leaf nodes**: Check the tick box to export just the last Node of the Model.
- Copy and save the **Web URL** and **HTTP request header parameters**.

 > Note: The above Web URL and HTTP request ids are auto-generated.

## Example (Import data from Web datasource URL in Power BI)

In the below example, we'll show how the URL can be consumed in a Power BI report using [Get Data by Web Connector](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example).

1. Go to **Get Data > Web**

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="Get Data by Web Connector" src={useBaseUrl('/doc-images/web-datasource/get-data-web.png')} />
  </Zoom>
 </div>

*Get Data by Web Connector*

2. Select the *Advanced* option

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="web-url-http-request" src={useBaseUrl('/doc-images/web-datasource/web-url-http-request.png')} />
  </Zoom>
 </div>

*Web URL and HTTP request fields*
 
- Enter the Web URL and HTTP request header parameters obtained in the above **export format** section.
  
 > Note: Enter **Authorization** in the HTTP header field

- Click *OK*.
- This pops up an excelsheet preview of the web datasource to be imported.

 <div style={{textAlign: 'center'}}>
  <Zoom>
   <img alt="preview-of-data" src={useBaseUrl('/doc-images/web-datasource/preview-of-data.png')} />
  </Zoom>
 </div>

 *Preview of the data to be imported*

You may click **Load** to continue loading the data or **Transform Data** to further configure the data that will be imported from the web datasource.

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