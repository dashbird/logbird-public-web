---
title: "Configuring Rules"
date: 2019-05-10T13:21:42+03:00
linktitle: "Configuring Rules"
description: 'Some awesome contet'
categories: ["CRules"]
categories_weight: 50
---

## Logbird allows you to create flexible log queries, which supports picking values (from words and JSONs) found in log lines.

To find the correct log line, the query can start with an asterisk (*) to find the correct line position, check examples.
If it doesn't start with the asterisk, the log line must start exactly like the query starts. So if query starts with `payment` then the log line must start with `payment`.

The query can use multiple matchers, the following matchers are supported:
`<WORD(key1)>` - Will match the string that is in the log at that index
`<JSON(key1, key2.key21)>` - Will pick `key1` and `key2["key21"]` from JSON if it's found in that position

### Examples

A typical query looks like:
```
*payment <WORD(action)> <JSON(email, amount)>
```
This will match a log line:
```
2019-05-07T11:10:40.141Z payment received {"email": "billing@logbird.io", amount: 29, receivedAt: 1557306521824}
```

This will match into:

key | value 
--- | ---
action | received
email | billing@logbird.io
amount | 29
