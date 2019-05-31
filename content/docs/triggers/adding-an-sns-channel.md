---
title: "Adding an SNS channel"
date: 2019-05-10T13:21:42+03:00
linktitle: "Adding an SNS channel"
description: 'Adding an SNS channel'
categories: ["DTriggers"]
---

## Creating an SNS topic

Logbird allows publishing to public and private SNS topics.

### Granting Logbird access to trigger private SNS topic

To grant Logbird access to the SNS topic, add Logbird AWS account (423847353785) to the allowed AWS accounts.

#### When creating a new topic

If you want to create a new SNS topic, just add the Logbird AWS account under specified AWS accounts in `Access policy`:

![creating sns](/img/docs/sns-topic-creating-logbird-access.png "Adding Logbird account when creating SNS topic")

#### When editing an existing topic

When editing the SNS topic, add to the access policy Statement array, and make sure to replace the sns ARN with your correct region, account id and topic name:

```
    {
      "Sid": "__console_pub_0",
      "Effect": "Allow",
      "Principal": {
        "AWS": "arn:aws:iam::423847353785:root"
      },
      "Action": "SNS:Publish",
      "Resource": "arn:aws:sns:<REGION>:<AWS ACCOUNT ID>:<SNS TOPIC NAME>"
    }
```

End result:

![editing sns](/img/docs/sns-topic-json-edit.png "Adding Logbird account when editing SNS topic")