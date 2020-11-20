---
id: history-logs
title: History Logs
sidebar_label: 4. History Logs
hide_title: true
---

import useBaseUrl from "@docusaurus/useBaseUrl"; // Add to the top of the file below the front matter.
import Link from "@docusaurus/Link";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { Tag } from "../../../src/ProductTag.js";

<Tag
header="History Logs"
image={useBaseUrl("/doc-images/valq-collaborate.png")}
/>

A log of changes made to the model/series/scenarios is maintained in chronological order.
The logs are grouped as *Planning* and *Simulation* logs.
To view, the history logs click on the 3 dots `... > History Log` next to your profile on each **Plan** and **Simulate** tab respectively.

## Planning Series Logs

Go to the **Plan** tab and click `... > History log`.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="Select Planning series history logs" src={useBaseUrl("/doc-images/storage/features/open-series-history-logs.png")} />
  </Zoom>
</div>

*Open the history logs for the Planning series*

The logged-in user can view a log of changes made by other users on the selected series.
You can click on the dropdown list to select the series to display the logs for.

<div style={{ textAlign: "center" }}>
  <Zoom>
    <img alt="A log of changes in Planning series by all the users" src={useBaseUrl("/doc-images/storage/features/planning-history-logs.png")} />
  </Zoom>
</div>

*Log changes on the Planning(brazil) series from all users*

A user member with edit access on the selected *Series* can:
- Restore the default series values by clicking *Reset All* at the top right corner.
- Restore to a single step by clicking *Restore to this step*.

## Simulation Logs

The logged-in user is allowed to view the simulation logs of shared *model/scenario/writeback* by other users.
  
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