---
weight: 3
title: "3 - First Workflow"
---

# First Workflow


```yaml
name: CI/CD

on:
  push:
    branches: [ main, dev ]

jobs:
  build:
    runs-on: ubuntu-20.04
    permissions:
      contents: write
    steps:
      # Checkout the repository
      - uses: actions/checkout@v2
        with:
          submodules: true
          fetch-depth: 0

      # Install hugo
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v2
        with:
          hugo-version: 'latest' # TODO: pin this based on the `config.toml`
          extended: true

      # Build assets
      - name: Build
        run: hugo --minify
```
