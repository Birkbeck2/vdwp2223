![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Joseph Muller

[Previous](loops.md) | [All](README.md)

# Objects and object-oriented programming

![Making naan roti](images/naan.jpg)

*"Making naan roti on the street in Bangladesh" by CIMMYT is licensed under CC BY-NC-SA 2.0. To view a copy of this license, visit https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse.*

The *object* is the last and most flexible of the JavaScript data types. An object can represent anything, and it can be internally structured in a number of ways.

Objects allow you to move past just using a set of functions to organize your program. They let you gather data together with the functions that operate on that data, and they make it easier for programmers to understand and remember what the pieces of the program represent in the wider world.

## Object syntax

An object can be declared by using curly brackets:

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L1

At this point, the object is a receptacle that doesn't contain any data or relate to any functions.

However, we can associate data and functions with an object by listing them inside the object, connected to their names by colons, separated with commas:

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L4-L11

Values that are bound to variables inside objects are called *properties* of that object.

Functions that are bound to names inside objects are called *methods* of that object. A method can refer to the object it is bound to with the keyword `this`.

Accessing a property or method is done by writing the object name, a dot, the name of the property or method, parentheses if it is a method, and arguments in the parentheses if required by the method definition.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L14-L23

We have seen properties and methods before. All strings have a `length` property built in. All arrays have a `push()` method.

Think also of `console.log()`. The `console` is a built-in object that JavaScript makes available to JavaScript code when it is run, and `log()` is a method that evaluates the parameter passed and prints the result in the graphical representation of the `console` object.

## Why use objects?

When you use objects in programs, you are creating a conceptual link between the program and the wider world. You are using using a thing, person, or idea to inspire the structure of your program, keeping data and functions related to that thing all together.

For example, if you are baking two pieces of bread, you may want to keep track of whether each one has been baked independently, while still having access to the `bake` function for each one.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L26-L42

This approach is called *object-oriented programming*. Programmers with this paradigm find it useful to have a correspondence between the structures in the program and things or people or concepts in the wider world.

There are alternative paradigms, such as *procedural programming*. To write a program procedurally, you would instead organize your code as series of functions, with inputs and outputs for data. The data might not come into contact with the functions except as inputs or outputs.

In web design, you may find a need for both kinds of programming. It is worth knowing the difference to decide what is the best approach for each use case.

JavaScript is not strongly inclined toward either kind of programming. It can be used for either one.

Here is the bread baking task programmed procedurally, for comparison:

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L45-L55

## Check your understanding
1. What are colons (`:`) used for in object syntax?
2. True or false: The variable `this` refers to the same thing wherever it appears.
3. True or false: Methods are associated with procedural programming.
4. True or false: JavaScript is strictly an object-oriented programming language.

## Classes and constructors

If you are writing an object-oriented program, you may want to create dozens, hundreds, or thousands of similar objects. But you don't want to type out the data for each object, or define identical methods on every one.

This is where *classes* come in. In programming, a class is a specification for the properties and methods of all the objects of a given type.

It looks like this:

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L58-L67

By convention, you capitalize the first letter of class names, even though it's not a strict requirement of the language. So, `Bread` not `bread`.

The method `constructor` is a special method that runs when a new object is created with that class.

You can think of a class definition as a factory for objects of that type.

To power up the factory, or in this case fire up the bakery, call the class with the keyword `new` and put parentheses at the end of the class name, much like calling a function.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L70-L78

The resulting value passed to the variable binding will be an *instance* of that class. It will be unique from every other object created by that class, because objects are mutable.

## Inheritance

What if you have several slightly different types of bread? All of them need a `baked` property, and a `bake()` method, but your flatbread might need a `buttered` property and a `butter()` method. Your loaves might need a `sliced` property and a `slice()` method. But you don't need to slice your flatbread, or butter your loaves.

So, you need a way to separately define types of bread in different classes, while inheriting common properties from a common bread class.

Class definitions provide for inheritance with the `extends` keyword. This allows you to write class definitions that draw on other class definitions, pulling in their properties and methods.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L81-L89

In this case, `Bread` is the superclass, and Flatbread is the subclass. We don't have to repeat any of the properties or methods of the superclass, but we do need to call `super();` in the constructor method. This just tells the subclass to call the `constructor()` method on the superclass, at that point.

Once you've defined a subclass, you can access methods defined on it and its super.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L92-L96

If you define a method or bind a property on a subclass that is already present in the superclass, it will generally overwrite the definition or binding in the superclass. This is helpful for modifying the default behavior of the ancestor object.

## Maps

Maps are a special kind of built-in object that are optimized for holding data. You can make a map objects by calling for new instances of the class `Map`:

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L99-L106

They hold a series of key-value pairs. The left-hand side of the `set()` method is the key, and the right-hand is the value. You can check whether a key exists in the map with `has()` and the key, and you can retrive a value `get()` and the key.

You can get an iterator of all the keys in a map with the `keys()` method.

https://github.com/Birkbeck2/vdwp2223/blob/6b85fd3cbe4876058dae9ec57417273de5fe5ec0/objects.js#L109-L117

## Check your understanding

1. What's the purpose of classes in programming?
2. Why might you want to use class inheritance?
3. What data type would you use to work with some names of people and their ages?

## References

Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming* (EJS), third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

“Classes,” Mozilla Developer Network, updated January 3, 2023, [https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes).

## Rights

Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
