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

## What is an asynchronous function?
An asynchronous function is a long-running function that doesn't block the execution thread and gets executed later by javascript instead of immediately. e.g setTimeout()

## How  Callbacks works ?
```javascript
function delay(duration, done) {

setTimeout(done, duration*1000);

}

  console.log('starting delay');

 delay(2,() => { console.log('two seconds delay')
                 delay(3, () => { console.log('three seconds delay')})
               }
      )
 
console.log('another block of code')


```

if you copy the above code to any javascript environment and run you'll have the following output

```bash
starting delay
another block of code
two seconds delay
three seconds delay
```

## What is happened in the above Code?
1. At Line 1, I declared a function called **delay** which takes in a callback function **done** as an argument

2. Then I execute the **delay** function and passed the **done** function implementation as a Callback.

3. The **done** callback function gets executed after the delay by calling another delay function. _Note: instead of calling delay again it could call any other function_


## Result Interpretation
from the result interpretation, the asychronous functions get executed in the appropriate order hence bringing the need for callbacks.

if we didn't implement the function in a callback manner we wouldn't be able to execute the asynchronous function in the right order.

The asynchronous function `delay` didn't block the thread execution because the section `another block of code` came before it even though it was called first.

Callbacks have some disadvantages as the above code seems difficult to read resulting in an anti-pattern called callback hell. We'll explore better approaches in the next post