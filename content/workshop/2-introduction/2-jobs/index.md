---
weight: 2
title: "2 - Jobs"
---

# Jobs

In GitHub Actions, jobs represent a series of steps that are executed in order. Important things to know about jobs:

* Jobs must run on a single [runner](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job)
* Jobs have a `workspace` which persists between steps
* Jobs can trigger other jobs
* Jobs *must* be defined inside a [workflow](https://docs.github.com/en/actions/writing-workflows/about-workflows)

{{< page-break last="true" nextRef="/workshop/2-introduction/3-workflows" >}}
