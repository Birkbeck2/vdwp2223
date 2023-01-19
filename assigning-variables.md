![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Helena Wee

[Previous](path/to/file.md) | [All](README.md) | [Next](path/to/file.md)

# Assigning Variables

## What is programming?

*A Computer Glossary*  
[https://youtu.be/eIgX6sPOqCY?t=104](https://youtu.be/eIgX6sPOqCY?t=104)  
Shown at IBM pavilion at the 1968 World's Fair. An Eames film with animation by Glen Fleck and original score by Elmer Bernstein.  
(Whole video can be watched here: [https://www.youtube.com/watch?v=eIgX6sPOqCY&ab_channel=EamesOffice](https://www.youtube.com/watch?v=eIgX6sPOqCY&ab_channel=EamesOffice))

A program is a set of instructions for performing computer operations.  

MEMORY / ACTION / DECISION / REPETITION - The universal modules of any computer program:  
MEMORY >> Variables  
ACTION >> Functions  
DECISION >> Conditionals  
REPETITION >> Loops  

JavaScript is a programming language that can modify digital objects such as websites and datasets. (For more on this see Joe's lecture [here](https://github.com/Birkbeck2/web-dev-ux-lectures-22-23/blob/main/javascript-setup.md)).  

# Statements

A fragment of code that produces a value is called an expression.

```
22
cats
```

An expression can contain other expressions.

```
7 + 15
100/10
cats = 11
dogs = 12
cats + dogs
```

An expression is like a sentence fragment, but a statement is like a full sentence. Instead of a full stop at the end, a statement has a semicolon at the end.

A program made of statements:
```
1;
!false;
```

When to use or not use semicolons in JavaScript:  
[https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli](https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli)

# Variables

A variable is a name for a value of any particular type (numbers, strings, booleans etc.) which can be used in a programme to retrieve that value from the computer's memory. (For more about values and data types see Joe's lecture here).

Variables are the MEMORY part of programming.

JavaScript variables are not typed, unlike other languages.

JavaScript variables can hold numbers, strings (text), booleans (true or false), or objects (arrays, JSONs etc).

```
cats
dogs
```

# Let, const, var

There are 3 ways to declare a variable in JavaScript:  
- const: constant values, cannot be updated or redeclared within scope.
- var: can be updated and redeclared within its scope (function-scoped). Hoisted, i.e. declaration, but not definition, moved to top of scope before code is executed.
- let: can be updated but cannot be redeclared within its scope (block-scoped).

Scope determines the accessibility (or visibility) of variables.

Examples of declaring a variable, then defining the variable:
```
const eyes;
eyes = 2;

var vehicle1;
vehicle1 = "bus";

let goldfish;
goldfish = 3;
```

Examples of declaring and defining a variable in the same line:
```
const eyes = 2;

var vehicle1 = "bus";

let goldfish = 3;
```

In most cases, unless using a constant value, it is sufficient to use let.

In the case of declaring variables in global scope, both var and let will behave the same way.

The differences between let and var:  
[https://www.programiz.com/javascript/let-vs-var](https://www.programiz.com/javascript/let-vs-var)

JavaScript variable names:  
- cannot start with a number, but can contain numbers.
- may include dollar signs ($) or underscores (_) but no other punctuation or special characters.
- special keywords, such as let, and reserved words cannot be used as variable names.

Reserved words in JavaScript:  
[https://www.w3schools.com/js/js_reserved.asp](https://www.w3schools.com/js/js_reserved.asp)



## References
[https://eloquentjavascript.net/02_program_structure.html](https://eloquentjavascript.net/02_program_structure.html)  
[https://www.youtube.com/watch?v=eIgX6sPOqCY&ab_channel=EamesOffice](https://www.youtube.com/watch?v=eIgX6sPOqCY&ab_channel=EamesOffice)  
[https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli](https://dev.to/adriennemiller/semicolons-in-javascript-to-use-or-not-to-use-2nli)  
[https://www.programiz.com/javascript/let-vs-var](https://www.programiz.com/javascript/let-vs-var)  
[https://www.w3schools.com/js/js_reserved.asp](https://www.w3schools.com/js/js_reserved.asp)  

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
