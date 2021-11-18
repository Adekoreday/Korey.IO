---
path: ./content
date: 2021-11-18T09:17:50.905Z
title: First Class Functions In Javscript
description: This post highlight short and concise description of first class
  functions in Javascript
tags:
  - javascript
---
A programming language is said to have first-class functions when functions in that language are treated like any other variable.

This means, in such a language, a function can be passed as an argument to other functions, returned by another function, and assigned as a value to a variable.

As a result, they exist in Javascript.


### As a variable 

```javascript

const welcome = () => console.log('hello world');
welcome(); //prints 'hello world'
```


### As an Argument

```javascript

/*The function would accept a function as a parameter and call it. Kindly note in javascript it's better to double check if the argument is a function using typeof before calling it.*/

function CallPrintFunction (func) {

  if (typeof func === 'function') func(); 

}

```

To use the above CallPrintFunction simply do the following

```javascript
const welcome = () => console.log('hello world');
CallPrintFunction(welcome);

// prints 'hello world'

```


### Returned from another function

```javascript

function ReturnWelcome() {

return function welcome() { console.log('hello world');}

}

```

To use the ReturnWelcome function above i.e. call the function returned simply do the following

```
ReturnWelcome()();
```

This one is pretty interesting since you can leverage closures to even enhance your returned function. Making another short post on closures soon I promise it would be straight forward.


That's it Guys! . thanks for going through.