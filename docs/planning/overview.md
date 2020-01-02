---
id: overview
title: Understanding the features
---

With the Plan Tab, it is possible to create new plans based on existing
data (e.g. prior period actuals or existing budget) or from scratch
(Zero-based budgeting).

On clicking the Plan Tab, the 'New Series' popup opens. Before creating
a new series the user is required to click on the 'Lock' button. This
ensures that the node hierarchy is fixed and no structural changes are
possible unless unlocked again.

![Locking the model](assets//PL_1.png)

Once locked, the new series can be renamed and the base series can be
chosen. The new series can be created based on 'Budget', 'Forecast' or
from scratch by selecting 'Empty Series' option. In the figure below,
the series has been named 'Jan Forecast' and 'Budget' has been selected
as the series to start with.

![Creating a new series](assets//PL_2.png)

On clicking 'Submit', the 'Input Editor' screen opens.

The name of the series gets highlighted as shown in the figure below.
The footer highlights the base series from which the particular series
has been created.

![Input Editor screen](assets//PL_3.png)

The newly created series can be set as the primary or the comparison
series by clicking on the settings icon. The series can also be renamed
or deleted by choosing the appropriate option.

![Context Menu](assets//PL_4.png)

In the 'Action Menu’, options to allocate values, add notes, refresh
datasource and view history are present.

![Action Menu](assets//PL_5.png)

1.  'Weight' and 'Equals' options can be used to allocate a node's
    a. 'Total' value across all periods
2.  'Trend' and 'Copy-to' options can be used to edit period values
3.  Child nodes can be allocated either by weight or equally by choosing
    a. the 'Weight' or 'Equal' option in the 'Allocate children' section.
    b. 'Copy-to' can be used to copy a node's value to its sibling nodes.
4.  'Hold' and 'Release' can be used to lock or unlock certain cells as
    a. needed.
5.  'Note' option lets the user to add, modify or delete notes.
6.  On clicking 'Refresh Datasource', the newly created series gets
    a. updated if there are any changes to the input data.
7.  'View History' can be used to view the changes performed and also
    a. roll back changes.

There is a 'Search' option which is particularly useful when using large
models. On entering a node name or node ID, only the corresponding node
and its child nodes get displayed.

![Search option for filtering nodes](assets//PL_6.png)

The model along with the overall and period values get displayed in a
table form. In case, the empty series has been chosen as the series to
start with, only the structure and relationships are displayed and not
the values.

On selecting a cell, additional information such as the calculation
method and time aggregation for the node appears in the footer. The
number format and scaling that were configured while modelling are
retained. The 'Number Bar' will have the absolute value irrespective of
the format and scaling.

![Table view](assets//PL_8.png)

