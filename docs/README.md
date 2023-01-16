# User test for the IP5 project "Funktionale Standard Library für das Kolibri Web UI Toolkit".

## Overview
First things first: Thanks for doing this user test for our project! 
With your feedback we will be able to improve this library further.

Please read carefully through this document before starting with the test.

## Contents of the IP5 project
This project consists of three parts:
1. [Iterator & range](https://wildwyss.gitbook.io/ip5-funktionale-standard-library-fuer-kolibri/research-paper-ip5-functional-library-in-javascript/iterator)
2. [FocusRing](https://wildwyss.gitbook.io/ip5-funktionale-standard-library-fuer-kolibri/research-paper-ip5-functional-library-in-javascript/focusring)
3. [Logging framework](https://wildwyss.gitbook.io/ip5-funktionale-standard-library-fuer-kolibri/research-paper-ip5-functional-library-in-javascript/logging-framework)

_Note:_ Consider the examples under these links if you're having troubles solving the TODOs.

These parts are explained in the next section:
### Iterator & range
JavaScript has iteration protocols. These protocols work similar to other programming languages (e.g. Java).
In IP5 these protocols have been used to ...
* ... create a Range. The Range generates number sequences between two boundaries.
* ... create a custom Iterator: An Iterator contains or generates a sequence of elements. On these elements popular functions like `map`, `filter` or `reduce` can be executed. In this way the sequence can be transformed.

### FocusRing
A FocusRing is a data structure, which contains several elements and has the following properties:
* One element of the data structure is always in the focus. This element can easily be retrieved using `focus()`.
* To move the focus of the ring the two functions `left()` and `right()` can be used, which will move the focus to the left or the right.
* The data structure is a ring: Calling `right()` when the last element is in focus will move the focus to the first element.
* The data structure is immutable: `left()` and `right()` do not change the receiver, but return a completely new data structure.

### Logging framework
The logging framework has the following features:
* **Different log levels**: Each log message is logged on a log level (e.g. DEBUG, ERROR, ...) 
* **Global Logging Level**: One global logging level determines which log statements should be logged at the moment.
* **Context**: Each log message has a context. (e.g. `ch.fhnw.ip5`) This can be used to identify where the log message comes from.
* **Formatting of log messages**: The format of the logged message can be defined by the user.
* **Appender**: There are several predefined appenders that can be used to configure the logging framework. For example, you can log using the `ConsoleAppender` and the `ArrayAppender`.
In this way one can easily define where the log messages should go to.

To construct a new Logger you can use the `LogFactory` which returns an object which offer methods to log to a specific log level.

With this knowledge you should be able to solve the following user test.

## Procedure of the user test
In this user test you will build a small image gallery.

* You will have to write some code: Everywhere this is needed, a placeholder `TODO` is used.
* All you need is already imported in the according file. So you do not have to worry about this :).
* If you're having troubles solving the TODOs, consider the examples in our documentation.

### Setup
1. Clone this repo
2. Open the file `UserTest.html` in your favourite browser. 
3. Open the file `userTests.js` in an editor of your choice.

### Test
1. Follow and solve the TODO items in `userTests.js`.
2. Fill in the [anonymous survey](https://forms.gle/nt5bjjSaXbuGW5fJA) about your experience using this library.

_Note_: This framework uses es6 modules. Therefore you need to start a local dev server.