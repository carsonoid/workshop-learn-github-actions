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

TODO: What the heck should go here? Is this about GitHub Actions architecture or the workshop's architecture?

I think a graphic showing the architecture of what we are building would be useful. Main things to diagram:

1. A source repo for the workshop
2. GitHub Codespaces
3. GitHub Actions (no workflows, jobs, or steps yet)
4. GitHub Pages
5. Someone loading the resulting page from the publish workflow

{{<                                                               page-break >}}

## About Hugo - The generator for this site

GitHub Actions (our CICD) and GitHub Pages (our hosting platorm) don't require you to use any particular language or tool.
But this specific workshop is built on the wonderful, open-source [Hugo](https://gohugo.io/) static site generator and the
[hugo-book theme](https://github.com/alex-shpak/hugo-book).

You will not need to install hugo locally, it actually comes bundled into Codespaces

{{<                                                               page-break last="true" nextRef="/workshop/1-create-repo/" >}}
