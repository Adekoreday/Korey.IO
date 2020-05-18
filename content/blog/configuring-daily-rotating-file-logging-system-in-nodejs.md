---
path: ./content
date: 2020-05-18T06:19:48.029Z
title: CONFIGURING DAILY ROTATING FILE LOGGING SYSTEM IN NODEJS
description: This article describes how to log various application interaction,
  request and response using the winston logger
tags:
  - Nodejs
---
# LOGGING IN NODEJS.

## The problem

Keeping the  interaction history with the application is quite important in every application if we don't keep the logs the following occurs

1. We are unable to track errors on production and their causes
2. We are unable to monitor our system and be sure if some bugs or some functionality our users complain of is true.
3. We are unable to obtain the transaction history with the application.

## LOGGING CONFIGURATION

Add the following package
[winston](https://www.npmjs.com/package/winston) 
```
npm i winston
```

we create a logger.js file and add the following
```js
import  *  as  winston  from  'winston';
import  'winston-daily-rotate-file';
import  appRoot  from  'app-root-path';

const  logger = winston.createLogger({
	transports: [
		new  winston.transports.DailyRotateFile ({
		filename:  'application-%DATE%.log',
		dirname:  `${appRoot}/logs/`,
		level:  'info',
		handleExceptions:  true,
		colorize:  true,
		json:  false,
		zippedArchive:  true,
		maxSize:  '20m',
		maxFiles:  '14d'
	})
],exitOnError:  false});

export  default  logger;
```
For the above, we configured the logs to do the following 

- create a new instance of the Winston logger
```
const  logger = winston.createLogger({})
```
- We configured new transport which is the medium we want to use to log our file called winston.transports.DailyRotateFile, our transport can also be of type console.
 we set our transport  attributes to the following

```js
	transports: [
		new  winston.transports.DailyRotateFile ({
		filename:  'application-%DATE%.log',
		dirname:  `${appRoot}/logs/`,
		level:  'info',
		handleExceptions:  true,
		colorize:  true,
		json:  false,
		zippedArchive:  true,
		maxSize:  '20m',
		maxFiles:  '14d'
	})
```
- log file will be created with name application-date.log
-  logs will be saved into a log folder in our root directory
- Each log file will contain the logs of the application in a day
- After a day the log file will be zipped to keep our growing file system in check
- After 14days we'll configure our logs to be archived.

For the winston logger we have various log level which are
```js
const  levels  =  { 
 error:  0, 
 warn:  1, 
 info:  2, 
 verbose:  3, 
 debug:  4, 
 silly:  5 
};
```

If any level is chosen the logger will log errors less than or equal to this level.

In the Entry of the application, we add the logger to the error middleware to enable all request and response and error to be logged in the application

```js
import  logger  from  './logger.js';

app.use((err, req, res, next) => {
logger.error(`${err.status || 500} - ${err.message} - ${req.originalUrl} - ${req.method} - ${req.ip}`);
res.status(500).send('server error, this will be resolved shortly!')
})
```

we can optionally add our logger to our controller to log errors 
we create a separate file called serverResponse


```js
import  logger  from  './logger';
/**
* @name  serverResponse
* @param  {Object}  res express response object
* @param  {Number}  code status code to return
* @param  {Object}  data object with response details
* @returns  {JSON} JSON response with status and response information
*/
const  serverResponse = (req, res, code, data) => {
logger.info(`${req.originalUrl} - ${req.method} - ${req.ip}
- ${code} - ${JSON.stringify(data)}
`);
res.status(code).json({ ...data });
}

export default serverResponse;

```


This file will be used as a helper in our application to return our responses at the same time log the response to prevent repetitive code in the codebase.

Below is how it can be used in a typical controller


```js
import  serverResponse  from  './serverResponse';
class  Auth {
/**
* @static
* @param  {JSON}  req
* @param  {JSON}  res
* @memberof  Auth
*/
static  async  login (req, res) {
serverResponse(req, res, 200, {msg: 'login successful'});
	}
}
```

