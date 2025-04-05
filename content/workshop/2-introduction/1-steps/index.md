---
weight: 1
title: "1 - Steps"
params:
  slides: true
---

## Introduction To Steps
{{< slide first="true" >}}

Steps are the basic building block for jobs. These are the actual **actions** part of GitHub Actions.
They are essentially a task that you need done. This could be a task that uses code in the repository, but
it does not have to be. A step could essentially do anything.

{{< hint info >}}
Think of steps as analogous to `functions` in code. They are a logical grouping of behaviors.
{{< /hint >}}

{{< /slide >}}

## Examples
{{< slide last="true" nextRef="/workshop/2-introduction/2-jobs" >}}

### Basic

A very basic example of a step might be to fetch the code for the current repo.

```yaml
- name: Checkout
  uses: actions/checkout@v3
```

Steps may have configuration, the format and specifics of the configuration are dependent on action being used.

```yaml
- name: Checkout
  uses: actions/checkout@v3
  with:
    submodules: true
    fetch-depth: 0
```

Steps may also be as simple as running a script:

```yaml
- name: Build
  run: hugo --minify
```

Complex scripts may use the yaml multiline syntax to provide

```yaml
- name: Build
  run: |
    echo "doing thing"
    date
    sleep 1
    echo "done"
```

{{< /slide >}}
