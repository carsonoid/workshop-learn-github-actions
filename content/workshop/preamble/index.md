---
weight: -1000
title: "Preamble"
params:
  slides: true
---

# Preamble
{{< slide first="true">}}

Before you dive into the workshop, there are a few basic things it may help to understand

{{< /slide >}}

## YAML, YAML, and more YAML
{{< slide >}}

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

{{< /slide >}}

## Workshop Architecture
{{< slide >}}

- A repository On Github
- GitHub Codespaces to edit code
- GitHub Actions for CICD
  - GitHub hosted runners
- Github Pages for web hosting

{{< figure src="/diagrams/arch/arch.png" width="100%" class="text-center">}}

{{< /slide >}}

## About Hugo - The generator for this site
{{< slide last="true" nextRef="/workshop/1-create-repo/" >}}

{{< figure src="/hugo-logo-512x512.png" width="50%" class="text-center">}}


GitHub Actions (our CICD) and GitHub Pages (our hosting platorm) don't require you to use any particular language or tool.
But this specific workshop is built on the wonderful, open-source [Hugo](https://gohugo.io/) static site generator and the
[hugo-book theme](https://github.com/alex-shpak/hugo-book).

{{< /slide >}}
