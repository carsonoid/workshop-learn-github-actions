---
weight: 5
title: 5 - Dependencies
publishDate: 3023-10-19T00:40:04-07:00 # hide for now
params:
  slides: true
---


# Dependencies
{{< slide first="true" last="true" prevRef="workshop/4-actions/">}}

{{< columns-image ratio="1:3">}}
{{< figure
  src="/art/bluegreen-dog-icons/turning.png"
  link="/credits"
  width="100%"
>}}

<--->

Some actions like integration tests may need the build system to run 3rd party services in order for the
action to have what it needs to complete. This often includes things like:

* databases
* message queues
* cloud service emulators

Luckily GitHub Actions provides a way to instruct jobs to automatically provide these kinds of
services via Docker containers.
{{</ columns-image >}}

TODO....

{{< /slide >}}
