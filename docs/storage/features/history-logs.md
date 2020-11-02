---
id: history-logs
title: History Logs
sidebar_label: 4. History Logs
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

A log of changes made to the model/series/scenarios is maintained in chronological order.
To view, the history logs click on the 3 dots `... > History Log` next to your profile.
The logs are grouped as *Planning* and *Simulation* logs.

## Planning Series Logs

The logged-in user with view/edit access on the series can view all the other user's changes on the series.
You can click on the dropdown list to select the series to display the logs for.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="A log of changes in Planning series by all the users" src={useBaseUrl("/doc-images/storage/features/planning-history-logs.png")} />
  </Zoom>
</div>

*Log changes on the Planning series from all users*

To restore the default series values, click *Reset All* at the top right corner.

## Simulation Logs

The logged-on user is allowed to view the simulation logs of shared *model/scenario/writeback* by other users.
  
<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="" src={useBaseUrl("/doc-images/storage/features/simulation-scenario-history-logs.png")} />
  </Zoom>
</div>

*Changes made by users on model/scenarios/writeback*

You can *Filter* the resulted logs by:
* Users: Search the logs by user names
* Dates: Filter the logs by the date created
* Type: Filter logs by type of feature such as - model/scenario/writeback

