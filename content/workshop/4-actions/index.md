---
weight: 4
title: 4 - Actions
params:
  slides: true
---


# Actions

{{< slide first="true" prevRef="workshop/2-introduction/3-workflows/">}}

At this point you should have public web page for the workshop built off your repository and
hosted under your GitHub handle. This section of the workshop will

- break down the actions currently in the `CI/CD` workflow and job.
- guide you through two kinds of custom actions

{{< /slide >}}


## Current Actions

{{< slide >}}

The `CI/CD` job currently has two kinds of actions defined

* [3rd Party Actions](https://docs.github.com/en/actions/writing-workflows/choosing-what-your-workflow-does/using-pre-written-building-blocks-in-your-workflow#overview)
* Custom "shell" actions

{{< /slide >}}


### 3rd Party Actions

{{< slide >}}

These are actions that are defined in other GitHub Repositories. They encapsulate a
specific behavior or step and can often be very complex behind the scenes.

```yaml
- name: Checkout
  uses: actions/checkout@v3
  with:
    submodules: true
    fetch-depth: 0
```

{{< /slide >}}


### Custom "shell" actions
{{< slide >}}

These are actions that are defined entirely in the workflow step itself. They run using the default shell of the runner
unless `shell` is specified.

It is common to use yaml multiline strings to put relatively long scripts into the action directly.

```yaml
- name: Build
  run: |
    # there is no built-in env variable for the repo name without owner, so we have to parse it out
    REPO_NAME=$(echo "${GITHUB_REPOSITORY}" | cut -d'/' -f2)
    hugo --minify -b "https://${GITHUB_REPOSITORY_OWNER}.github.io/$REPO_NAME/"
```

These kinds of actions are infinitely flexible but can be highly dependent on the runner and workflow environment.
Shell scripting is also has a lot of potential pitfalls and easy mistakes that can be made.

Never the less: it is a very common kind of action to use and is often "just enough" to get work done while incurring almost
no overhead.

{{< /slide >}}


## New Actions

{{< slide >}}

There are two more types of actions that can be very useful:

- [Composite Actions](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-composite-action)
- [Javascript Actions](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-javascript-action)
- [Docker Container Actions](https://docs.github.com/en/actions/sharing-automations/creating-actions/creating-a-docker-container-action)

{{< /slide >}}

### Composite Actions

{{< slide >}}

Composite Actions are a way to combine one or more other actions into a single unit. They are often used to automate complex behaviors into a more streamlined interface.

Creating and using a new Composite Action locally is as easy as creating a new directory and writing an `action.yaml` file.

{{< /slide >}}


#### Build it

{{< slide >}}

To define a new custom composite action: create a new file at `.github/actions/build/action.yaml` with the content below. You might notice that this we are simply moving the `Setup Hugo` and `Build` steps from the original workflow. That is true, but we have now made our own "build" abstraction that is easier to re-use and simplifies the main workflow.

```yaml
name: 'Build'
description: 'Build the workshop web assets'
runs:
  using: "composite"
  steps:
    - name: Setup Hugo
      uses: peaceiris/actions-hugo@v3
      with:
        hugo-version: 'latest'
        extended: true

    - name: Build
      shell: bash
      run: |
        # there is no built-in env variable for the repo name without owner, so we have to parse it out
        REPO_NAME=$(echo "${GITHUB_REPOSITORY}" | cut -d'/' -f2)
        hugo --minify -b "https://${GITHUB_REPOSITORY_OWNER}.github.io/$REPO_NAME/"
```

{{< /slide >}}

#### Use it

{{< slide >}}

Then reference it in a job by using a local path reference after checkout.

You can simply remove the old `Setup Hugo` and `Build` steps from `.github/workflows/ci-cd.yaml` and replace them with the new action.

```yaml
- name: Build
  uses: ./.github/actions/build
```

{{< hint info >}}
You might notice that using a custom action is a lot like using a 3rd party action.
<br /><br />
 That's because 3rd party actions are simply custom actions that have been given dedicated repositories. All 3rd party actions that you use are either composite actions or javascript actions that are simply hosted in a dedicated repository instead of a directory in your own repository.
{{< /hint >}}

{{< /slide >}}

### Javascript Actions

{{< slide >}}

{{< /slide >}}


### Docker Container Actions

{{< slide last="true" >}}

{{< /slide >}}

