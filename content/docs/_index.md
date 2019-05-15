---
date: 2019-05-05
title: "What is Logbird?"
linktitle: "What is Logbird?"
description: 'Why we created Logbird?'
categories: ["ABasics"]
category_weight: 100
---

<h1 class='h2 font-weight-light'><b>Logbird</b> - gateway for logs.</h1>

**Logbird is channel for matching log events and triggering activity.** It offers a gateway to stream logs into and pattern-match events to trigger activity. Filters can be regular expressions, glob, words or custom Logbird's DSL. For matched events, users can trigger SNS notifications, webhooks, emails, slack notification etc. Logbird does not retain logs, making it cost-efficient and simple.

<h3 class='font-weight-light'>So what can I use it for?</h3>
The concept of a gateway can be applied to a wide range of use-cases. Below are some that inspired us to build it.

<h4>Issue and event tracking for applications.</h4>
Modern applications, built on managed services infrastructures, usually expand through a number of different technologies (think AWS Lambda, API Gateway, Aurora etc.) One way to centrally track for problems and specific events would be log-analytics yet it would be very expensive at scale. With Logbird, you could set community-managed filters to those services log streams and only catch the problematic logs and events.

<h4 class='mt-2'>Information sharing with other services.</h4>
Tracking user activity and getting events to sales and marketing services has always demanded development time. With Logbird, the developer only needs to log out the event data in a JSON and set up Logbird. Business and marketing teams can later collect the data and decide where to send it using a webhook or other integrations.

<h4>Code execution path.</h4>
Logbird could be used to trigger code executions asynchronously. By just logging out info a developer could reduce the execution overhead and simplify application logic.

<h4>Data transfer.</h4>
Downstream data entry to databases can make batch-inserting easier and reduce load to databases while speeding up the code execution by avoiding requests to databases.

<h3 class='font-weight-light'>How it works?</h3>
Currently, Logbird supports HTTP API endpoints and a CloudWatch Kinesis stream for log ingest. The filters can be Logbird's own DSL, regular expression, glob pattern and word matching.
