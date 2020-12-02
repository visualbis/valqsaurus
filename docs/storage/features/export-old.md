---
id: export-old
title: Export Model as Data source
sidebar_label: Export Data source
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

<div style={{textAlign: 'justify'}}>


Export as datasource feature allows the data series and scenarios of a ValQ model to be made available in a JSON format on the web.
This web URL will be a protected resource and an authorization key will be needed to access the JSON data.
This feature can be used in some use cases like:

</div>

> **Note**: The authorization key will be generated and will be available only to the report admins.

### Create a web data source URL

To export the data as a data source, please follow the below steps:

1. Save the ValQ model to a workspace by clicking the Upload button on the top right corner of the visual.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Upload Valq Model to your logged in Workspace"
      src={useBaseUrl("/doc-images/upload-model.png")}
    />
  </Zoom>
</div>

_Upload ValQ model to Workspace_

2. Name the model and click Upload on the pop-up window.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Upload Popup Screen"
      src={useBaseUrl("/doc-images/web-datasource/upload-popup.png")}
    />
  </Zoom>
</div>
<br />

3. You'll see the following message once the model gets uploaded.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Model Uploaded"
      src={useBaseUrl("/doc-images/web-datasource/model-uploaded.png")}
    />
  </Zoom>
</div>
<br />

4. Click on the 3 dots `...` and select Export as datasource option.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Export as Datasource"
      src={useBaseUrl("/doc-images/web-datasource/export-as-datasource.png")}
    />
  </Zoom>
</div>
<br />

5. Select the Series and Scenarios that you want to export.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Create Web Datasource"
      src={useBaseUrl("/doc-images/web-datasource/create-web-datasource.png")}
      width={320}
      height={470}
    />
  </Zoom>
</div>
<br />

6. Following are the options available in the Export format screen:

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Export Format"
      src={useBaseUrl("/doc-images/web-datasource/export-format.png")}
      width={500}
      height={485}
    />
  </Zoom>
</div>
<br />

- **Export format**: Select the export format as a Tree structure or Flat structure
- **Customization**: Select the Export level of the nodes that decides the hierarchy of the model nodes
- **Edit Column Names**: Edit and rename the column names by clicking on the editor icon
- [ ] **Export only leaf nodes**: Check the tick box to export just the last level nodes of the model
- Copy and save the **web URL** and **HTTP request header parameters**.

> **Note**: The above Web URL and HTTP request ids are auto-generated.

7. Click Done.

### Import data from web data source URL and parameters in Power BI

In the below example, we'll show how the URL can be consumed in a Power BI report using [Get Data by Web Connector](https://docs.microsoft.com/en-us/power-bi/connect-data/desktop-connect-to-web-by-example).

1. Go to Get Data > Web under the Home tab.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="Get Data by Web Connector"
      src={useBaseUrl("/doc-images/web-datasource/get-data-web.png")}
      width={400}
      height={450}
    />
  </Zoom>


  
</div>
<br />

2. Select the Advanced option and enter the web URL and HTTP request header parameters obtained from the above export format section.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="web-url-http-request"
      src={useBaseUrl("/doc-images/web-datasource/web-url-http-request.png")}
      width={550}
      height={400}
    />
  </Zoom>
</div>
<br />

> **Note**: It is important to note that 'Authorization' needs to be typed out under HTTP request header parameters as it is not available in the dropdown.

3. Click OK.

- This pops up a preview of the web data source to be imported.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img
      alt="preview-of-data"
      src={useBaseUrl("/doc-images/web-datasource/preview-of-data.png")}
      width={750}
      height={530}
    />
  </Zoom>
</div>
<br />

<div style={{ textAlign: "justify" }}>
  You may click Load to continue loading the data or Transform Data to further
  configure the data that will be imported from the web data source.
</div>

### Live syncing simulations with the export file that fetches real-time data

<div style={{ textAlign: "justify" }}>
  ValQ data can be used as input for other visuals and further analysis. You can
  run further simulations to the scenarios and instantly synchronize the new
  scenario data with the export file by refreshing the data query.
</div> <br />

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
