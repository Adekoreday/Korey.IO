---
path: ./content
date: 2020-08-08T08:23:21.548Z
title: PROMISE IN JAVASCRIPT
description: An introduction to promise in javascript, a continuation of
  aynchronous patterns in javascript
tags:
  - Nodejs
---
# Promise in Javascript

In the previous post, we talked about callbacks in javascript and why they are needed.

The promise-based syntax provides a more readable approach of handling asynchronous functions in javascript.
With Promise, we can execute our asynchronous functions in the appropriate order with robust error handling functionality.

## How  Promise works?

Applying promise to our previous post on callback we have the following
```javascript
const delay = (seconds) => new Promise((resolve, reject) => {
						   setTimeout(() => {
							   console.log(`executing delay ${seconds} seconds`)
							   resolve(seconds)}, seconds*1000)
			   })

console.log('before delay!!')
delay(2)
delay(3)
delay(6)
.then(
(res) => console.log(`this delay is done at ${res}`),
(rej) => console.log(`the error caught is ${rej}`))
.catch(err => console.log(err))
```

if you copy the above code to any javascript environment and run you'll have the following output

```bash
before the delay!!
Promise { <pending> }
executing delay 2 seconds
executing delay 3 seconds
executing delay 6 seconds
this delay is done at 6
```

## What happened in the code above :smiley:

The above code executes a 2seconds delay first, then by 3seconds and lastly, 6seconds then prints out the appropriate response.

## How Did we use Promise 
First we made the delay function to return a promise as follows
```javascript
const delay = (seconds) => new Promise((resolve, reject) => {
                               if(seconds > 5) return reject('seconds more than 5')
							   setTimeout(() => {
							   console.log(`executing delay ${seconds} seconds`)
							   resolve(seconds)}, seconds*1000)
			   })
```
_Note_: we added an if statement here to cause a promise rejection based on number of seconds as opposed from the initial code written

A  `Promise`  is in one of these states:

-   _pending_: initial state, neither fulfilled nor rejected.
-   _fulfilled_: meaning that the operation completed successfully.
-   _rejected_: meaning that the operation failed.

Note: A Promise takes two parameters which are
1. **resolve**: puts the promise in the fulfilled stage.
2.  **reject**:  puts the promise in the rejected stage.

From the above a delay function the promise is `rejected` if the value of seconds is greater than 5 and is `resolved` if the value of seconds is less than 6

## How Did we execute the promise

We executed the promise in the following section
```javascript
console.log('before delay!!')
delay(2)
delay(3)
delay(6)
.then(
(res) => console.log(`this delay is done at ${res}`),
(rej) => console.log(`the error caught is ${rej}`))
.catch(err => console.log(err))
```

After a promise execute and its state is known i.e. fulfilled or rejected. We use the following to take further actions on the promise.

1.  Promise.then
2. Promise.catch
3. Promise.finally

### Promise.then
In our case the  `then` function handle the last promise returned by `delay(6)` . 

The `then` function receives two parameters the

i) `promise response` i.e. the object/value returned by the promise
ii) `promise error`  i.e. the error returned by the promise if any
inside the `.then` we can write a logic to handle such promise accordingly in our own case we simply printed to the console

```javascript
.then(
(res) => console.log(`this delay is done at ${res}`),
(rej) => console.log(`the error caught is ${rej}`))
```
:sunglasses:

### Promise.catch

In `.catch` method is used to handle all errors which have not been handled by the `.then` function
In our case we do the following
```javascript
.catch(err => console.log(err))
```
### Promise.finally
The `.finally` method is used to perfom all house cleaning functions after the promise has been executed. it marks the end of the promise chain.
e.g. we can close an opened file which we opened during our promise execution here to release compute resources.

## Promise chaining

 Assume we have two delay functions which returns a promise
```javascript
const delay1 = (seconds) => new Promise((resolve, reject) => {
                               if(seconds > 5) return reject('seconds more than 5')
							   setTimeout(() => {
							   console.log(`executing delay ${seconds} seconds`)
							   resolve(seconds)}, seconds*1000)
			   })


const delay2 = (seconds) => new Promise((resolve, reject) => {
                               if(seconds > 5) return reject('seconds more than 5')
							   setTimeout(() => {
							   console.log(`executing delay ${seconds} seconds`)
							   resolve(seconds)}, seconds*1000)
			   })

```

We can chain the above promise exactly like this 
```javascript
delay1(5) //returns 5
.then(res => delay2(res)) //res=5
.then(delay2) //also receives 5 as argument
```
The output is

```bash
Promise { <pending> }
executing delay 5 seconds
executing delay 5 seconds
executing delay 5 seconds
```
