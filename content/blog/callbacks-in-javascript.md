---
path: ./content
date: 2020-07-31T01:14:55.433Z
title: CALLBACKS IN JAVASCRIPT
description: An introduction to callbacks in javascript, this tutorial is the
  part of the Asynchronous Patterns in Javascript on my blog
tags:
  - Nodejs
  - javascript
---
## Callbacks in Javascript

The callback pattern is a javascript asynchronous pattern that enables us to run asynchronous functions one after the other.

### What is an asynchronous function ?
An asynchronous function is a long running function which doesn't block the  execution thread and gets executed later by javascript instead of immediately.
these are promise based functions e.g setTimeout()

### How  Callbacks works ?
```
function delay(duration, done) {

setTimeout(done, duration*1000);

}

console.log('starting delay');

delay(2, () => {

console.log('two seconds delay')

delay(3, () => {

console.log('three seconds delay')
})
})
console.log('another block of code')
```

if you copy the above code to any javascript environment and run you'll have the following output

```bash
starting delay
another block of code
two seconds delay
three seconds delay
```

From the above you can see we deffered  of the asynchronous function delay didn't block the thread execution because the section `another block of code` came before it. but the set of asynchronous code gets executed in the appropiate order.

Callbacks have some disadvantages as the above code seems difficult to read resulting to an anti pattern called callback hell. We'll expore better approaches in the next post