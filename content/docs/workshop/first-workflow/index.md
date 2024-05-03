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
      - uses: actions/checkout@v3
        with:
          submodules: true
          fetch-depth: 0

      # Install hugo
      - name: Setup Hugo
        uses: peaceiris/actions-hugo@v3
        with:
          hugo-version: 'latest' # WORKSHOP TASK: pin this based on the `config.toml`
          extended: true

      # Build assets
      - name: Build
        run: hugo --minify

      # List built assets
      - run: tree public

      # WORKSHOP TASK: Do something with the built files
```
