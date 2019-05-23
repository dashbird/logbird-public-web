---
title: "Query language"
date: 2019-05-10T13:21:42+03:00
linktitle: "Query language"
description: 'How to use query language'
categories: ["CRules"]
categories_weight: 50
---

## Logbird Query Language

Query language is powerful way to parse your log lines and capture data for your events.

It is possible to pipe multiple parsers together and pick only the result you need.

```
// foo walks into a bar {"foo":"bar","abc":"xyz"}

*walks*
| parse "bar *" as data
| json field=data abc
| fields abc

// abc: xyz
```

## Matching

It is possible to match any log line using wildcards. That can be only as first part of the query and it won't have any capture groups as result.

```
report *
// Matches all lines starting with "report "

*duration*
// Matches all lines including word duration

*test
// Matches all lines ending with "test"
```
## Parsing

### Anchor

Using start and stop anchor you can capture data from log lines.

Syntax:

```
| parse [field=<field_name>] "<start_anchor>*<stop_anchor>" as <field>
```

Examples:

```
parse "GET * HTTP/1.1 * * " as url, code, size

  parse "GET * " as url
| parse "HTTP/1.1 * " as code
```

### Regex

Whenever simple anchor parsing doesn't work, you can use more powerful regular expression. You need to have at least 1 capture group.

Syntax:

```
| parse regex [field=<field_name>] "<start_expression>(?<field_name><field_expression>)<stop_expression>"
```

Examples:

```
parse regex "GET (?<url>(.*?)) "
// parses url from the logline
```

### JSON

Syntax:

```
| json [field=<field_name>] "<name_or_key>"[, "<name_or_key>", ...] [as <field> ...]
```

Examples:

```
json
// parses logline as JSON and exports it as fields

  json log
| json field=log name, value

json accountId, accountName as id, name
```

## Where

It is possible to filter based on captured groups.

Available operators are: `=`, `<>`, `<=`, `>=`, `<`, `>`

For comparing strings use quotes `field = "value"`

Syntax:

```
| where <boolean expression>
```

Examples:

```
| where foo = "bar"
| where status = 200
| where size < 30
```

## Fields

Fields are capture groups from the parsed results. If you don't need all of them, then you can filter them.

Syntax:

```
| fields <name>[, <name>, ...]
```

Examples:

```
  json
| fields name
// Capture group onlu contains name instead of the whole JSON document


  parse "GET * HTTP/1.1 * * " as url, code, size
| fields code
// Capture groups only contains code
```
