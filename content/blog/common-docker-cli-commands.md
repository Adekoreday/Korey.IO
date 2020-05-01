---
path: ./content
date: 2020-05-01T10:30:58.791Z
title: COMMON DOCKER CLI COMMANDS
description: A list of common docker command needed to containerise your
  applications using docker
tags:
  - DevOps
  - Docker
---
In the process of developing web Apps with Docker I find these commands useful.

This command pulls an image from docker hub
```docker pull "image identifier"```


list all images on the machine
```docker images ```

list all containers on the machine
```docker ps```

list all containers their size on disk and virtual size(the size the container and the image it's running on)
```docker ps -s ```

Start a specific container on your local machine
```docker start "container name"```

Stop a specific container on your local machine
```docker stop "container name"```


```docker build -t imagename:tag . ```
The above command adds an image name and optionally a tag with such name in the build command. Note the ` dot ` after the imagename:tag, this specifies the build context directory.

The build context is a collection of files to be used by the build process while building the docker image.

we can specify that build context should be from another path or Url
then our command becomes

```docker build -t imagename:tag  ./mypath ```
the above command specifies for path on my machine I want the build context to be.

```docker build -t imagename:tag  URL```
replace the URL with maybe a repository URL where you want your build context to be.

```docker build -f dockerfiles/Dockerfile.debug  -t imagename:tag . ```
build image from a debug Dockerfile 

```docker build -f dockerfiles/Dockerfile.prod  -t new_imagename:tag . ```
build image from a production Dockerfile


```docker run -p 49161:4000 -d adeyemiadekorede/auth```
Runs the container on a specific port on the background.

```docker container ls -a```
List all containers on the machine
