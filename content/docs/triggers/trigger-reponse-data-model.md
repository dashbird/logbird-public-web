---
title: "Trigger Reponse Data Model"
# date: 2019-05-30T16:34:24+03:00
linktitle: "Trigger Reponse Data Model"
description: 'Trigger Reponse Data Model'
categories: ["DTriggers"]
---

## Trigger Reponse Data Model

When the rule with trigger enabled will receive any events that match the rule, the trigger will be activated and depending on the type of the trigger you will receive different notifcations. Curently, the only supported trigger type is SNS trigger.


## SNS trigger

Sends SNS notification with JSON as a string.

For general guide on SNS event structure please refer to [AWS SNS docs](https://docs.aws.amazon.com/sns/) .


#### Response Elements
<style>
.indentLeft {margin-left: 2rem}
</style>

<br/>
`source` Specifies a single log group that acts as the source of the event. An event can come either from a Cloudwatch log group or from your API logs.

*Type*: Object

*Properties*:
<div class="indentLeft">
​		`type` Type of event source. Allowed values are `AWS_CW_LOGGROUP` ,  `API_LOGGROUP`

​		*Type*: String
</div>

<br/>
`collector` Collectors are the log group collections that you have granted Logbird the right to fetch from.

*Type*: Object

*Properties*:
<div class="indentLeft">
​		`id` Collector identifier

​		*Type*: String

​		`name` Name of the collector

​		*Type*: String
</div>

<br/>
`filter` Filter is a set of rules to filter the log groups by.

*Type*: Object
<div class="indentLeft">
*Properties*:

​		`id` Filter identifier

​		*Type*: String

​		`name` Name of the filter

​		*Type*: String
</div>

<br/>
`rule` Rule allows to specify a pattern by which the log group events will be match against.

*Type*: Object

*Properties*:
<div class="indentLeft">
​		`id` Rule identifier

​		*Type*: String

​		`name` Name of the rule

​		*Type*: String

​		`type` Type of the rule. Allowed values are `ql`  (a.k.a logbird query),  `glob`,  `word`,  `regex`

​		*Type*: String

​		`pattern` Rule pattern.

​		*Type*: String
</div>

<br/>
`event` This is the event that the rule matched against.

*Type*: Object

*Properties*:
<div class="indentLeft">
​		`hash` Event identifier

​		*Type*: String

​		`groups` If any of the rules matched a pattern and produced a result it will be return in the groups object.

​		*Type*: Object
        <div class="indentLeft">
​				*Properties*:
                <div class="indentLeft">
​						`<key>` Key is pattern name we asked to match against and  `<value>`  is the the match result.

​						*Type*: String
                </div>
        </div>
</div>


#### Sample response

Contents of sample response from Logbird:

```json
{
    "source": {
        "type": "AWS_CW_LOGGROUP"
    },
    "collector": {
        "id": "dummy_id",
        "name": "My AWS collector"
    },
    "filter": {
        "id": "dummy_id",
        "name": "Email campaign events"
    },
    "rule": {
        "id": "dummy_id",
        "name": "Email received",
        "type": "ql",
        "pattern": "*Email received*\n| parse \"recevied *\" as meta\n| json field=meta sender.email, body.subject as email, subject\n| fields email, subject"
    },
    "event": {
        "hash": "dummy_event_id",
        "groups": {
            "email": "test@test.com",
            "subject": "Testing Notifications"
        }
    }
}
```

