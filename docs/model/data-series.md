---
id: data-series
title: Data Series
---
Using the “Data Series” Tab, you will be able to configure the Data
settings for the Tree created in valQ. There are 3 different options as
listed below to configure the data settings for the Tree (see Figure
below).

1.  Data Series Manager
2.  Time Aggregation Labels
3.  Data Sorting

![Data Series Tab](assets/dma.png)

## Data Series Manager

Using the option "Data Series Manager", you will be able to configure
the Periods and Data Series for the Tree (see Figure below).

![Data Series Tab – Data Series Manager](assets/dm1.png)

For our example, we have the data source having periods from Jan to Dec,
Budget and Forecast values. The Budget values will be the Comparison
values and the Forecast values will be the Baseline values. Follow the
below steps for configuring the values in the Data Series Manager.

1.  Set the property Period(s) per data series to the value 5.
2.  Configure the Period Labels as Jan, Feb, Mar, Apr, May (see Figure
    above).
3.  Enable the property Include comparison data series. You can view
    both the Baseline and Comparison values.
4.  When the property Include comparison data series is disabled, then
    you will be able to view only the Baseline Series.
5.  Since our data set has the Additional values Additional 1 and
    Additional 2, it will be displayed as Additional Series (see Figure
    above).
6.  When you click the Baseline label, you will be able view the
    Baseline values as Forecast values as shown below.

![Baseline Values](assets/dm2.png)

7.  When you click the Comparison label, you will be able view the
    Comparison values as the Budget values as shown below

![Comparison Values](assets/dm3.png)

Based on the above set of configuration steps, you will be able to view
the valQ screen as shown below.

![valQ screen configured with Periods and Data Series](assets/dm4.png)

You can observe from the above Figure that after simulating the Node
Sale Allowances, you will be able to view the Baseline data in
comparison with simulated Baseline data.

## Time Aggregation Labels

Using the option “Time Aggregation Labels”, you will be able to
configure the Active Period, Till Prior Period, All Periods and
Simulation Period settings (see Figure below).

![Data Label – Time Aggregation Labels](assets/14.7.png)

Based on the above configuration, you will be able to view the valQ
screen as shown below.

![valQ screen with time aggregation labels](assets/14.8.png)

From the above Figure, you will be able to view the Time Aggregation
Labels as highlighted in the valQ screen.

## Data Sorting

Using the Data Sorting settings, you will be able to view and customize
your Data Source. You will be able to select the Sort fields, sort the
data with Ascending or Descending Order and select the Start With field
with the required Month (see Figure below).

![Data Sorting Settings](assets/14.13.png)

## Additional Properties of Data Series Tab

<table>
<colgroup>
<col style="width: 33%" />
<col style="width: 33%" />
<col style="width: 33%" />
</colgroup>
<thead>
<tr class="header">
<th>Area</th>
<th>Property</th>
<th>Description</th>
</tr>
</thead>
<tbody>
<tr class="odd">
<td>Data Series Manager</td>
<td>Periods</td>
<td>Period(s) per data series: It indicates the number of values in the series. As an example, the series with Jan, Feb and Mar can be entered as 3 periods.</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>Period Label(s): The Labels can be given as Jan, Feb, Mar (being separated by commas.</td>
</tr>
<tr class="odd">
<td></td>
<td>Data Series</td>
<td>By enabling this property, you will be able to include the Comparison Data Series.</td>
</tr>
<tr class="even">
<td></td>
<td></td>
<td>The Preview shows all the available Data Series (both Baseline and Comparison) and the Additional Series.</td>
</tr>
<tr class="odd">
<td>Time Aggregation Labels</td>
<td></td>
<td>These labels are used in the navigation panel, nodes and popup screens.</td>
</tr>
<tr class="even">
<td></td>
<td>Active period</td>
<td>This property sets only one period of interest. A Label and a three letter abbreviation can be provided for this property.</td>
</tr>
<tr class="odd">
<td></td>
<td>Till Prior Period</td>
<td>This property sets Total value from beginning to a specific period. A Label and a three letter abbreviation can be provided for this property.</td>
</tr>
<tr class="even">
<td></td>
<td>All periods</td>
<td>This property sets Total value of all periods in the series. A Label and a three letter abbreviation can be provided for this property.</td>
</tr>
<tr class="odd">
<td></td>
<td>Simulation Period</td>
<td>This property sets a specific set of continuous periods. A Label and a three letter abbreviation can be provided for this property.</td>
</tr>
<tr class="even">
<td>Data Sorting</td>
<td></td>
<td><p>The data can be sorted using the below filters:</p>
<p>1. Choose Sort Field(s) from the data source</p>
<p>2. Sort By: Ascending/Descending</p>
<p>3. Start with entry from the data source</p></td>
</tr>
</tbody>
</table>

*Additional Properties of Data Series Tab*