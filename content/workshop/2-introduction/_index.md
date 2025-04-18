---
weight: 2
title: 2 - Introducing GitHub Actions
params:
  slides: true
---

## Introducing GitHub Actions
{{< slide first="true" >}}

{{< columns-image ratio="1:3" >}}
{{< figure
  src="/art/bluegreen-dog-icons/turning.png"
  link="/credits"
  width="100%"
>}}

<--->

Now that we have bootstrapped our workshop repository, it's time to dig into GitHub Actions!

{{< /columns-image >}}

{{< hint danger >}}
The yaml snippets in this section are simplified to help understand the main building-blocks of GitHub Actions. They will not work if copied directly.

At the end of the section will be a complete file that can safely be copy and pasted.
{{< /hint >}}

{{< /slide >}}

{{< slide  >}}

## Where we are

By now you should have a new repository and Codespace running, this workspace includes all the assets for this workshop. However, you can't view the workshop without running `hugo` in your Codespace and accessing a port forward.

## What We Want

- A new publically available website for the workshop based on your repo
- Automatic builds of the workshop for commits to ensure that PRs never merge if they break builds
- Automatic publishing changes that have been merged into `main` to the public website.

## What We Don't Want

- To have to install anything locally
- To have to have any servers to maintain
- To have to pay anything for our tiny little personal project


{{< /slide >}}

## Actions
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-actions.png"
  width="100%"
>}}

<--->

Actions are the smallest building blocks of GitHub Actions.

They are defined in yaml and can be as simple
as executing a single command or as complex as running a deeply nested series of actions.

Some types of Actions:

- Javascript
- Shell
- Docker
- Composite

> There is a deep-dive on action types later in the workshop

{{< /columns-image >}}
{{< /slide >}}

### Example
{{< slide >}}
A  very simple yaml definition for a "Build" action might look like this:

```yaml
name: Build
run: hugo
```

This action simply defines a human-readble name for the action and tells GitHub to execute the `hugo` command
on the runner.

{{< hint danger icon>}}
### Runners have state!

There are many different runners that are provided by GitHub. You are also able to create
and register your own runners to run workloads. The capabilities of the step can change dramatically
based on the runner you choose to execute the action on.
{{< /hint >}}

{{< /slide >}}

## Jobs
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-jobs.png"
  width="100%"
>}}

<--->

Jobs are collections of one or more steps that should be run in sequence.

Jobs typically define things like:

- Where they will run
- `if` conditions to limit when they will run (optional)
- Actions (steps) to execute as part of the job

{{< hint danger icon>}}
## Jobs Have State!
All the steps in a job are run on the same host without any automatic cleanup between them. This is fundamentally different from
many other CI/CD systems. Especially those build on containers.
{{< /hint >}}

{{< /columns-image >}}


{{</ slide >}}


### Example
{{< slide >}}

A simple yaml definition for a `Build` job containing our `Build` step might look like this:

```yaml
name: Build
runs-on: ubuntu-20.04
steps:
  - name: Build
    run: hugo
```

Notice the `Build` step from is now nested in the `steps` list

{{</ slide >}}

## Workflows
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-workflows.png"
  width="100%"
>}}

<--->

Workflows are collections of one or more jobs that should be potentially executed **using the same trigger conditions**.

Workflow runs can be triggered by many different things:

- Pushes to repository
  - tags
  - branches
- Issues changes
- PR label changes
- Manual Trigger Calls
- Other Workflows Running
- [Many, many, many more events](https://docs.github.com/en/actions/writing-workflows/choosing-when-your-workflow-runs/events-that-trigger-workflows)

{{< /columns-image >}}

{{</ slide >}}


### Example
{{< slide >}}
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

{{< /slide >}}

## Runners
{{< slide >}}

{{< columns-image ratio="1:1" >}}
{{< figure
  src="/diagrams/component-runners.png"
  width="100%"
>}}

<--->

Runners are actual machines, vms, or containers where the configured actions actually run.

{{< hint info icon>}}
## Common Runners

There are [many common runners](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job) you can target in a job.

- `ubuntu-latest`
- `windows-latest`
- `macos-latest`
- `-large` variants of the above for paying users
- [Self-Hosted](https://docs.github.com/en/actions/writing-workflows/choosing-where-your-workflow-runs/choosing-the-runner-for-a-job#choosing-self-hosted-runners)
{{< /hint >}}

{{< /columns-image >}}

{{< /slide >}}

### Runner Cost
{{< slide  last="true" nextRef="/workshop/3-first-workflow" >}}

The usage required for this workshop **will barely touch the free tier each public
repository is alloted**. But if you use actions you should be aware of how billing works.

{{< hint warning icon>}}
## Budgets

All accounts have a default budget of $0. Unless you have explicitly enabled billing you
should not be charged for any Github products used in the course of this workshop.

[You can confirm your account budgets here](https://github.com/settings/billing/budgets)
{{< /hint >}}

### Potential Cost

Along with billing runners by size, runners are also billed by type:

- Self-Hosted runners are free!
  - Outside your hosting and infra costs
- Linux runner minutes are counted 1 to 1
- Windows runner minutes are counted 1 to 3
- MacOS runner minutes are counted **1 to 10**

Savvy users use multiple jobs and to delay the use of expensive runners until they are absolutely needed.

{{< /slide >}}
