---
date: 2019-05-05
title: "What is Logbird?"
linktitle: "What is Logbird?"
description: 'Why we created Logbird?'
categories: ["ABasics"]
category_weight: 100
---

<h1 class='h2 font-weight-light'><b>Logbird</b> - gateway for logs.</h1>

**Logbird proposes that logs could be used for communication between applications.** It offers a gateway for catching events from application logs and triggering activity for matched events. Events can be caught by filtering log streams and can contain data extracted from logs. Filters can be regular expressions, glob, words or custom Logbird's DSL. For matched events, users can trigger actions and send data to applications.

<h3 class='font-weight-light'>So what can I use it for?</h3>
The concept of a gateway is simple and can be applied for a wide range of use-cases. Below are some that inspired us to build it.

<h4>Analytics and failure/event detection for modern applications.</h4>
A lot of modern applications are built on top of managed (serverless) services. They produce large amounts logs and limit programmatic access to the user - both factors contribute to less visibility into application performance and failure events. A possible use case here is to pipe all logs from managed services to Logbird and apply a collection of filters that recognize failure-patterns. For example, AWS Lambda can fail with timeout, early exit, exception and there are dozens of more
services that have similar workings.

<h4 class='mt-2'>Workflow automation.</h4>
By logging out business events, it's easy to automate business processes. For example, in case of a new user signs up, log out the user info and use Logbird to send it to Pipedrive. The biggest benefit here is that it simplifies getting access to data for sales and marketing teams and allows 

<h4>Alternative code flow.</h4>
Logbird triggers could be used as event-sources. In a world that's moving towards managed services, a lot of applications will be hybrid for a long time and communication through logs is an efficient way to communicate between those.

<h4>Data transfer.</h4>
Downstream data entry to databases can make batch-inserting easier and reduce load to databases while speeding up the code execution by avoiding requests to databases.

<h3 class='font-weight-light'>How it works?</h3>
Filters can be regular expressions, glob patterns, simple words or conditions defined by Logbird's own domain specific language (DSL).
