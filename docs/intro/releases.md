---
id: releases
sidebar_label: Changelog
title: Releases
---

import useBaseUrl from '@docusaurus/useBaseUrl';
import Link from '@docusaurus/Link';
import { Vimeo } from '@site/src/components/Vimeo';

## V2.0 (Jan 20, 2021)

#### Features

* <Link to={useBaseUrl('storage/user-security')}>User Security</Link>
* <Link to={useBaseUrl('model/node#7-secondary-kpis')}>Secondary KPIs in table</Link>
* Node Editor - Full-screen experience
* MemSQL DB Schema + Application Layer Integration
* Sensitivity Analysis
* Variance Analysis
* Time Series forecasting 
* Planning
  - Reference columns
  - Trigger action to send data
  - Multi User support
* Toolbar - Redesign
* Migration - Disallow migration from Collaboration to Certified
* Personalization - Store user settings in the backend
* Feature Map should be part of license hash and not part of the VDT Licensor
* <Link to={useBaseUrl('simulation/touch-support')}>Touch support</Link> for Tree/Table
* Group columns for Quick editor

<details>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/RsJDf792Smo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <ul>
    <li>Refer the <a href="https://valq.com/blogs/valq-2-0-released-with-connected-and-collaborative-planning-features/">ValQ 2.0 Connected and Collaborative Planning Features</a> blog.
    </li>
    </ul>
    <summary>
    <b>Resources</b>
    </summary>  
</details>

#### Enhancements

* Table - Auto fit/Size columns

## V1.9 (Oct 20, 2020)

#### Features

- New Table View - We now have the old table replaced with Gridora on certification build as well.
- Attribution Analysis (available on Enterprise)
- Planning features : Zero-based budgeting
- Secondary KPI for table
- Grid resize functionality (Size to Fit feature) on Table View, Planning Grid and Variance Analysis
- Planning Toolbar changes – UI changes
- <Link to={useBaseUrl('analysis/variance_analysis')}>Variance analysis</Link> fixes – Custom Period and also toolbar changes

#### Bug Fixes & Improvements

- Hide Trend column for a single period
- Deleted KPI cannot be removed from Nav Panel

<!-- 
<details>
    <ul>
    <li><a href={useBaseUrl('https://valq.com/blogs/whats-new-in-valq-1-9/')} download>What’s new in ValQ 1.9?</a></li>
    </ul>
    <summary>
    <b>Assets</b>
    </summary>
</details>
-->

## V1.8.5 (Sep 1, 2020)

#### Bug Fixes & Improvements

- Fix for the editor issue - Canvas section cannot be opened
- Fixes which allows model merge reports to be migrated across workspaces.

## V1.8.4 (Aug 22,2020)

#### Bug Fixes & Improvements

- Download functionality is now enabled on the Power BI desktop
- Fixed Variance analysis & table view issues in Model merge reports
- Fixed Zero display issue in Compare Scenario screen
- IE 11 Copy Scenario issue has been fixed
- Planning - Archive issues are fixed
- Formula issue with <Link to={useBaseUrl('references/formulas/getcurrentrange')}>Get Current Range</Link> is fixed

## V1.8.3 (Jul 30,2020)

#### Features
* Added feature **Rolling Planning** to automatically roll out 12 months forecast over a set time frame.
* Added feature to export your model as a web data source with the option <Link to={useBaseUrl('storage/export')}>Export as datasource</Link>.
* **New Table view** - Table view can now be customized to edit the columns and get summarized views.
* Added the <Link to={useBaseUrl('analysis/attribution-analysis')}>Attribution Analysis</Link> which analysis the key attributes that contribute to the overall result simulation.
* <Link to={useBaseUrl('storage/model-merge')}>Model Merge</Link> enabled for a selected node from the sub-model to another node in the workspace.
  
#### Enhancements
* Made performance based **Member Console changes**
* **Notes** feature is now replaced as **Comments**
* Planning and Allocation history comments now available as consolidated comments.
* Improved the **Writeback** data JSON format
* Enhanced the Node configuration [**Formulas**](https://docs.ValQ.com/docs/faq/formula-list)

<!--
<details>
    <ul>
    <li><a href={useBaseUrl('https://valq.com/blogs/whats-new-in-valq-1-8/')}>What's New in ValQ 1.8?</a></li>
    </ul>
    <summary>
    <b>Assets</b>
    </summary>
</details>
-->

## V1.7.0 (May 12,2020)

#### Features

1. Added **Model Merge** feature that allows users to merge ValQ models from different users within the workspace.
1. Added **[Time Series Forecasting](https://docs.ValQ.com/docs/planning/time_series) - Auto Forecast** feature.
2. The **Member/ValQ Console** account available for users/groups and models management in your workspace.

#### Enhancements

1. Enabled **Scenario Collaboration** (ValQ - Professional, Enterprise) for Private and Shared Scenarios with view/edit access.
1. Enabled **Read-only Mode** in Power BI Service, with read-only access for *Visualization (Table/Tree mode), Nav Panel, Export, Compare, and Variance Analysis* like features.
1. Added **Model Details** in the workspace, along with details like Series/Scenarios under *Member/ValQ Management Console*.
