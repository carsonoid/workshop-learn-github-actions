---
weight: 3
title: "3 - Workflows"
params:
  slides: true
---

## Introduction To Workflows
{{< slide first="true" last="true" nextRef="/workshop/3-first-workflow" >}}

In GitHub Actions, workflows are a colleciton of jobs. Important things to know about workflows

* Workflows can define multiple jobs
* Workflows can be called many ways:
  * By code change
  * Manually
  * By other workflows
* Workflows do not actually execute directly, they only define jobs which get executed

{{< /slide >}}
