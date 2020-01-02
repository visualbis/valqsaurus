---
id: conducting-what-if
title: Conducting what-if analysis
---
One of the main aspects of the valQ Custom Visual is to be able to
simulate the impacts changes to key drivers such as prices have on the
full year forecast. As we can’t change the past, such a simulated change
should only be applied to future period. The valQ Custom Visual have
this capability. When performing what-if analysis, the period that a
simulation should be applied from is selected in the Side Panel (current
period is default):

![What-if-Analysis](assets/7.1.png)

Assuming that we calculate fuel cost based on litre per month and price
as $/l and we are at the end of period 9, the simulated cost should be
calculated first at the monthly level with the % change applied to
period 9 and onwards. Once the individual months are calculated, they
can then be aggregated based on the rule of the node (sum for diesel
cost, weighted average for diesel price):

![](assets/formula.png)

When hovering over a node, the bottom half of the node becomes a slider.
Drag the slider left to vary the node by a negatively, drag right for
positive. As you drag, the values for the selected node is dynamically
recalculated and displayed. When releasing, the tree will immediately
recalculate all dependent nodes and show the result.

![Simulation](assets/7.2.png)

A simulation change is either a pct. Change, a fixed future price or a
pct. Growth depending on the simulation model defined for the value
driver.

The default method for the driver can be seen on the simulation tooltip.
You can also change the selected model by selecting at the bottom of the
tooltip.

![Simulation Tooltip](assets/7.3.png)

Understanding that a change is applied to the selected periods only is
particularly important to understand when displaying the Full Year value
and the node is using a weighted average. The displayed value is the
weighted average value for the full year, not the value for future
periods.

A simplified example will help understanding this critical concept.
Let’s assume that the diesel price is $1.014 for all periods and the
monthly fuel consumption is constant as well at 1m litres and we have
selected period 9 as we want to apply the simulation to the remaining
periods of the year.

We now drag the slider for the fuel price to the right and the node will
show the new weighted average value. Let’s say we drag it to the right
so the full year weighted average is $1.030. As the first 8 periods were
$1.014, the weighted average of $1.030 means that the simulated price
change is equivalent of a future fuel price of $1.20. To better
understand the individual future period simulations when looking a Full
Year aggregated number, it is useful to pay attention to the Month Data
also shown on the node. The real world is a little more complex as the
price is not necessarily the same every month and the fuel consumed is
unlikely to be constant as well. Below is an example of such a
simulation based on a real data set:

![Simulation](assets/7.4.png)

The weighted average price was 1.014. We now simulated a 2% increase in
the prices selected and future periods which equates to a new weighted
average price of 1.030. If you look at the month Value, you can see for
the selected month, this equates to the higher price of 1.195.

Multiple variations can be applied in parallel as they are expressed as
pct. The top left % indicate the cumulative impact on this particular
node of all simulation that impacts it.

Any node with a variation will have the blue pen icon in the top middle
showing the percentage the node has been varied with. For quick what-if
analysis at any level and a dynamic work process from the general to the
specific, you can apply a simulation on any level.

Certain nodes may have been locked from changes in the model. This is
generally when there is a specific reason not to vary this node directly
for consistency purposes. A locked node will not have the grey pen icon
![image48](assets/media/image46.png)or a slider when
hovering.

Certain nodes may be displayed multiple times in the tree. An example is
Material Moved as it affects Mining and Mill Throughput. In these
scenarios, one node is linked to the other. If you simulate a change in
a linked node, the node it is pointing to is instead changed so it
applies both to the selected node and anywhere else where the driver is
used. If a node is a linked node, it has the Linked node text in the
bottom right corner:

![Simulation](assets/7.5.png)
