---
title: "Creating Filters"
date: 2019-05-27T13:40:23+03:00
linktitle: "Creating Filters"
description: 'Creating Filters'
draft: true
categories: ["BFilters"]
---

## Creating a filter

After you have loaded your logs into Logbird by configuring a collector you will need to create a Filter to on the log sources to see relevant events.

Logbird allows creating filters from scratch or a predefined template.

![creating filter](/img/docs/create-new-filter.png "Create a new filter")

Each filter specifies a set of rules to filter the logs by and also the log sources - which are the logs you want this filter to be applied to.

After the filter is created you will be able to add rules and log sources:

![created filter](/img/docs/filter-created.png "Created filter")

### Adding a rule

Click on 'Add rule' button next to 'Rules'.

For instuctions on how to configure a rule, please consult <a href='/docs/rules/rule-library/' target='_blank'>rules documentation</a> 

### Adding a log source

Click on 'Manage' button next to 'Log Sources'.
A list of log sources will be shown. You can search through the log sources:

![searching log source](/img/docs/add-log-source-searching.png "Searching for a log source")

Make sure you have checked all resources you want the Filter to be applied to and hit 'Save':

![selecting log source](/img/docs/add-log-source-checked.png "Selecting for a log source")

### Enabling/Disabling a filter

Select a filter. Toggle switch to enable/disable it.

### End result

After filter is created and populated with rules and log sources it will look like this:

![Filter created and populated](/img/docs/filter-created-and-populated.png "Filter created and populated")
