---
path: ./content
date: 2020-05-18T00:20:56.038Z
title: NODEJS THE BIG PICTURE
description: An extensive explanation of fundamentals of how node.js works
tags:
  - Nodejs
---

# Node.JS Big Picture.

Nodejs is a powerful javascript runtime which is built on top of google chrome v8 engine and also leverage on the libuv library for handling asychronous IO operations. Many of which involves multi threading and accessing hardware specific functionality.

!WeeW That was complex enough

### Let's Break It Down
The google chrome v8 engine enables us to run javascript code outside the browser, which is the main reason node.js was built on top of the chrome v8 engine.

## Why Libuv library

The libuv library is written in  c and c++ which expose ability to manipulate the low level computer functionality such as networking, database queries, Child processes, thread pooling etc.

Nodejs was binded to this library to enable our javascript code to manipulate this low level functionality.

## HOW DOES NODE ACHIEVE THIS ?
Bindings basically are libraries that "bind" two different programming languages so that code written in one language can be used in code written in another library.

It's well known that node.js uses bindings to binds javascript functions to their equivalent libuv functions written in c++.

## HOW DOES NODEJS PROGRAM RUNS
The nodejs program runs on a single thread and has an event loop which prevents asynchronous code from blocking the thread execution.

Before we proceed we define some terms

## Process: 
A process is an instance of a computer program running. e.g the instance of your microsoft word app running on your PC is a process

## Thread
This is the basic unit of work in a process.

#### Thread Pool
The thread pool consist of a group of threads awaiting execution.

## Scheduling
This is an action by the OS to deteermine which thread in the thread pool to process at a specific time depending on the available resouces.

## EVENT LOOP
The nodejs runs the program content on a single thread, at the heart of this thread is the event loop which handles asynchronous code in the program. node pushes these async code to the event loop and thus prevent blockage of the thread.

All asynchronous task are grouped into the following

1.  PendingTimers
2. PendingOperations
3. PendingOSTasks

## PENDING TIMERS
These includes all pending `setTimeout` , `setInterval` and `setImmediate` functions.

## PENDING OPERATIONS
These includes long running operations such as reading from files on the hard drives

## PENDING OS OPERATIONS
These includes operations that are handled by the OS not CPU intensive e.g network calls, server listening on a PORT

The Event loop works by performing tick, the following below occours on every tick on event loop. 

1. check pending timers and see if any of thier timeouts have expired, then calls relevant callbacks
2. check PendingOSTask or pending operations and calls relevant callbacks 
3. Pends execution temporarily and waits for new events to occour, i.e. whenever a new pendingTimer, pending Operations or pendingOsOperations is completed.
4. Look at the pendingTimers and call any functions with setImmediate
5. Handle close events.


After all the pending tasks in the event loop have been executed the node.js program exits.
