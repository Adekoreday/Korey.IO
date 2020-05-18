---
path: ./content
date: 2020-05-18T00:20:56.038Z
title: NODEJS THE BIIG PICTURE
description: An extensive explanation of fundamentals of how node.js works
tags:
  - Nodejs
---
## Node.JS Big Picture.

Nodejs is a powerful javascript runtime which is built on top of google chrome v8 engine and also leverage on the libuv library for handling asychronous IO operations. Many of which involves multi threading and accessing hardware specific functionality.

!WeeW That was complex enough

### Let's Break It Down

The google chrome v8 engine enables us to run javascript code outside the browser, which is the main reason node.js was built on top of the chrome v8 engine.

### Why Libuv library

The libuv library is written in  c and c++ which expose ability to manipulate the low level computer functionality such as networking, database queries, Child processes, thread pooling etc.

Nodejs was binded to this library to enable our javascript code to manipulate this low level functionality.

### HOW DOES NODE ACHIEVE THIS ?

Bindings basically are libraries that "bind" two different programming languages so that code written in one language can be used in code written in another library.

It's well known that node.js uses bindings to binds javascript functions to their equivalent libuv functions written in c++.

### HOW DOES NODEJS PROGRAM RUNS

The nodejs program runs on a single thread and has an event loop which prevents asynchronous code from blocking the thread execution.

Before we proceed we define some terms

#### Process:

A process is an instance of a computer program running. e.g the instance of your microsoft word app running on your PC is a process

#### Thread

This is the basic unit of work in a process.

#### Thread Pool

The thread pool consist of a group of threads awaiting execution.

#### Scheduling

This is an action by the OS to deteermine which thread in the thread pool to process at a specific time depending on the available resouces.

#### EVENT LOOP

The nodejs runs the program content and pushes any asynchronous task to be handled by event loop before the program can be exited the event loop must be empty i.e. all asynchronous code would have been executed.

All asynchronous task are grouped into the following

1. PendingTimers
2. PendingOperations
3. PendingOSTasks

##### PENDING TIMERS

These includes all pending `setTimeout` , `setInterval` and `setImmediate` functions.

##### PENDING OPERATIONS

These includes long running operations such as reading from files on the hard drives

##### PENDING OS OPERATIONS

These includes operations that are handled by the OS not CPU intensive e.g network calls, server listening on a PORT

The Event loop perform the following checks on the above operations and check if their callbacks are ready to be executed. 

1. check pending timers and see if any of thier callbacks is ready to be executed.
2. check PendingOSTask or pending operations and relevant callbacks 

Below is a typical pseudo code of how event loop will execute pending asynchronous tasks as described above.
