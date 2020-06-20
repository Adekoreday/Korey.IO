---
path: ./content
date: 2020-06-20T01:06:33.410Z
title: SEARCH IN BASH
description: This article describes how to log various application interaction,
  request and response using the winston logger
tags:
  - Bash
---

# Search In Bash

To Implement Search in bash the following are commands that might come handy 

### FIND
The find command is used to find files and folders in a directory

```bash
find newfolder/
```
The above command finds all the content of the folder

To find a specific file in a directory use the following

```bash
find newfolder/ -name aaa.txt
```
To find a specific type of content in a directory

```bash
find newfolder/ -type file
```

### GREP

The grep command is used to find the content of a file and when it finds a match it prints out the line that matches search.

Example
To find "so" in a text file called b.txt

```bash
grep so b.txt
```
Note the grep command is case sensitive
```bash
grep so b.txt
```
is different  from 
```bash
grep So b.txt
```

We could also use 
```bash
grep -v So b.txt
```
the above is used to find lines which does not contain "So"
