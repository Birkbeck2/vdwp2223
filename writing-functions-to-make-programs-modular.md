![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Helena Wee

[Previous](path/to/file.md) | [All](README.md) | [Next](path/to/file.md)

# Writing functions to make programs modular

## Functions

A function is a set of instructions that take an input and get an output, to perform a certain task.

Functions are the ACTION part of programming.

To define a function in JavaScript you use the function keyword.

A function declaration uses the `function` keyword, followed by:
- The name of the function.
- A list of parameters to the function, enclosed in brackets `()` and separated by commas.
- The JavaScript statements that define the function, enclosed in curly brackets `{}`.

Example:
```
function pets(cats, dogs){
  return cats + dogs;
}
```

The keyword `return` is used to specify the value returned by the function.

Declaring a function does not execute it. To execute a function you need to call it by typing its name and then any values you want to use as parameters in brackets beside this. If there are no parameters, simply call the function by typing its name in front of a set of empty brackets `()`.

Example:
```
pets(3, 5);
```

Functions can be used as values, and in expressions.

Examples:
```
let numPets = pets(3, 5);
```
```
let numFish = function(goldfish, carp) {
  return goldfish + carp;
}
console.log(fish(5,2));
```

Function scope: Variables declared within a function, cannot be accessed outside of it. Local variables have function scope and can only be accessed from within a function.

The difference between global and local variables:
- Global variables are declared OUTSIDE functions (typically at the beginning of the program). They are retained throughout the entire program lifetime.
- Local variables are declared INSIDE functions. They are thrown away when the function returns.




## References
[https://eloquentjavascript.net/02_program_structure.html](https://eloquentjavascript.net/02_program_structure.html)  



## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
