---
path: ./content
date: 2020-04-08T16:19:46.693Z
title: 'Delegates in c#'
description: 'Detailed explanation of delegates and it''s usage in c#'
tags: ["c#"]
---
Delegates in c# is  a concept which confuses some developers, if you fall into this category, worry not this article is meant to answer the following questions:

1. what are delegates?
2. why do I need to use delegates?
3. How to use delegates.

## What are delegates?

Delegate is a reference type to methods in c#. It's like a pointer to a function. it holds the reference of a method.

With delegates you can do the following;

* Call All Methods attached to the delegates at once whenever the delegate is called.
* Add more methods to delegates at runtime
* Remove existing methods Added to delegates at runtime

After I give the above answer I often get the following question  how are delegates different from nested function calls?  Delegate is different from nested function calls because it enables us to add or remove methods to the delegate to be executed at run time.

## Why do we need to use delegates

* Open Closed Principle: this means open for extension and closed for modification. delegates ensure once you implement your method, you can add more functionality to such a method without refactoring such a method. All you need to do is to add more methods to the delegate handler. 
* Pass Methods as parameters to other methods i.e. Callbacks in c#
* You want to call two or more methods, same in signature but reside in different classes at the same time whenever something happens.
* Cleaner Architecture

## How To Use Delegates

 I'll show a real-world example of where we might consider using delegates. You might want to report the health status of your application. and you want the following to happen whenever the report is provided.

1. Log the health status in a file.
2. Send an email containing the health status to your admin.
3. Send an SMS containing the health status to the admin.

All the above at the same time.

```java
  private delegate void OnReport(string Message);
  private OnReport _onReport;
```

from the above, we declare our delegate using the `delegate` keyword.

```java
  public void AddReportHandler(Action<string> action){
    _onReport += new OnReport(action);
  }
```

We added the Handler which is used to add more More methods to our delegates. 

Note the parameter type of the handler is of type `Action`. this parameter type could be of type `Func`. These are known as `generic delegate types`.

The primary difference between `Action` and `Func` is that Action is used for method signatures that return a void, while `Func` is used for method signatures that have a return value. 

```java
  public void Report(string healthStatus) {
    if(_onReport != null) {
      _onReport(healthStatus);
    }
  }
```

We declare a single method `Report`, which would execute all functions appended to the delegate.

Here is the full implementation

```java
using System;

class MainClass {
   static public void Main(String[] args) 
    { 
   var appHealth =  new HealthMonitor();

    appHealth.AddReportHandler(message => {
      Console.WriteLine($"Logging app health status on a file Logic - {message}");
    });
     appHealth.Report("healthy"); //prints to file and sends mail logic executes
     appHealth.RemoveAllReportHandler(); //we remove all added functions
     appHealth.Report("Not healthy"); // output will be empty here
    } 
}

public class HealthMonitor{
  public HealthMonitor() {
    Email(); //Add append email sending logic to the delegate
  }

  private delegate void OnReport(string Message); //declare the delegate
  private OnReport _onReport; 

  public void AddReportHandler(Action<string> action){
    _onReport += new OnReport(action);
  }

  // will remove all method appended to the delegate when called
  public void RemoveAllReportHandler(){
     _onReport = null;
  }

  public void Email() {
    this.AddReportHandler(message =>
     Console.WriteLine($"Logging app health status via email - {message}"));
  }

  public void Report(string healthStatus) {
    if(_onReport != null) {
      _onReport(healthStatus);
    }
  }
}
```

You can choose to Run the code on [Repl.it](https://repl.it/@Adekoreday/Delegates)
