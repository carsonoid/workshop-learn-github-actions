---
weight: 2
title: 2 - Introducing GitHub Actions
---

# Where We are

By now you should have a new repository and Codespace running, this workspace includes all the assets for this workshop. However, you can't view the workshop without running `hugo` in your Codespace and accessing a port forward.

## What We Want

- A new publically available website for the workshop based on your repo
- Automatic builds of the workshop for commits to ensure that PRs never merge if they break builds
- Automatic publishing changes that have been merged into `main` to the public website.

## What We Don't Want

- To have to install anything locally
- To have to have any servers to maintain
- To have to pay anything for our tiny little personal project

{{<                                                               page-break first="true">}}

# Introducing GitHub Actions

Thankfully, GitHub Actions can give us everything we need. But before we start writing yaml files
we need to understand the fundamental building blocks of GitHub Actions.

{{< hint info >}}
The yaml snippets below are simplified to help understand the main building-blocks of GitHub Actions. They will not work if copied directly.
{{< /hint >}}

{{<                                                               page-break >}}


## Runners



{{<                                                               page-break >}}


## Steps

Steps are the smallest building blocks of GitHub Actions. They are defined in yaml and can be as simple
as executing a single command or as complex as running a nested series of steps.

A simple yaml definition for a "Build" step might look like this:

```yaml
name: Build
run: hugo
```

{{<                                                               page-break >}}

## Jobs

Jobs are collections of one or more steps that should be run in sequence.

> All the steps in a job are run on the same host without any automatic cleanup between them. This is fundamentally different from
> many other CI/CD systems

A simple yaml definition for a `Build` job containing our `Build` step might look like this:

```yaml
name: Build
runs-on: ubuntu-20.04
steps:
  - name: Build
    run: hugo
```

Notice the `Build` step from is now nested in the `steps` list

{{<                                                               page-break >}}

## Workflows

Workflows are collections of one or more jobs that should be potentially executed **using the same trigger conditions**.

```yaml
name: CI/CD
on: push # The trigger conditions
jobs:
  build:
    name: Build
    runs-on: ubuntu-20.04
    steps:
      - name: Build
        run: hugo
```

Notice the `Build` job from is now nested in the `jobs` list

{{<                                                               page-break last="true" nextRef="/workshop/3-first-workflow" >}}
