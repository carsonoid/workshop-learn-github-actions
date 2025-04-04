---
weight: -1000
title: "Preamble"
---

# Preamble

Before you dive into the workshop, there are a few basic things it may help to understand

{{<                                                               page-break first="true">}}

## About GitHub Actions

### YAML, YAML, and more YAML

GitHub Actions relies heavily on YAML for defining the work to be done.

Some basic yaml features that will help you understand the files in this workshop

```yaml
a: yaml
object: uses
colons: to separate keys and values
```

```yaml
list-descr:
  - a
  - yaml
  - list
  - uses hypens to separate items
```

```yaml
list-of-objects:

  - a: yaml
    list: of objects

  - uses: hypens
    to: start new objects

list-of-objects:
  - a: yaml
    list: of objects
  - uses: hypens
    to: start new objects
```

{{<                                                               page-break >}}

### Basic Architecture

- A repository On Github
- GitHub Codespaces to edit code
- GitHub Actions for CICD
  - GitHub hosted runners
- Github Pages for web hosting

{{< figure src="/diagrams/arch/arch.png" width="100%" class="text-center">}}

{{<                                                               page-break >}}

## About Hugo - The generator for this site

{{< figure src="/hugo-logo-512x512.png" width="50%" class="text-center">}}


GitHub Actions (our CICD) and GitHub Pages (our hosting platorm) don't require you to use any particular language or tool.
But this specific workshop is built on the wonderful, open-source [Hugo](https://gohugo.io/) static site generator and the
[hugo-book theme](https://github.com/alex-shpak/hugo-book).

{{<                                                               page-break last="true" nextRef="/workshop/1-create-repo/" >}}
