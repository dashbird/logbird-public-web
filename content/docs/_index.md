---
date: 2019-05-05
title: "What is Logbird?"
linktitle: "What is Logbird?"
description: 'Why we created Logbird?'
categories: ["ABasics"]
category_weight: 100
---
<h1 class='h2 font-weight-light'>Logbird allows services to <b>communicate using logs</b>.</h1>

**It's a channel for catching log events, analysing them and triggering activity.** It offers a gateway to stream logs into and filter them for events. Events can be analyzed in the platform or used to trigger activity (SNS, Webhooks, Slack, Email etc). Logbird does not retain or index logs, making it cost-efficient and scalable for large-scale machine logs.

<h3 class='font-weight-light'>So what can I use it for?</h3>
The concept of a gateway can be applied to a wide range of use-cases. Below are some that inspired us to build Logbird.

<h4>Issue and event tracking for applications.</h4>
Modern applications, often built on managed (or at least hybrid) infrastructures, expand over multiple cloud services (AWS Lambda, Appsync, ECS, API Gateway, Aurora etc.) Usin log analytics for monitorign would get expensive at scale and be quite hard to set up since it requires knowhow. With Logbird, you could set community-managed filters to all clod service logs and track the failure events. Check out our <a href='/rules/library' target='_blank'>list of ready-made filters</a>.

<h4 class='mt-2'>Move data between services.</h4>
Tracking user activity and sending events to sales and marketing tools demands development time. Using Logbird, the developer can automate communication between different services by logging out the event data and forwarding it with Logbird. In Logbird, it's easy for business people to run analytics and decide themselves of what to do with the data. For instance, they could send it to Zapier with a webhook, or log it out with Slack or send an email instead.

<h4>Alternative execution flow.</h4>
Logbird could be used to trigger code executions asynchronously. Instead of starting a process during the execution, log out a line that can be processed by Logbird and triggered an event for. 

<h4>Build a data pipeline.</h4>
Downstream data entry can make batch operations easier and reduce load to databases and speed up the execution by reducing requests. You can use Logbird to extract JSON data from logs and insert it to data sources asynchronously.

<h3 class='font-weight-light'>How it works?</h3>
Currently, Logbird integrates automatically with CloudWatch and also provides HTTP endpoints to ingest logs. For event matching, Logbird has it's <a href='/docs/rules/query-language' target='_blank'>own query language</a> which is mainly inspired by SumoLogic's query language. In addition, Logbird supports regular expressions, glob patterns and simple word matching. After the event is matched, you can look at the matched events from the platform and set triggers for caught events to
automate processes.
