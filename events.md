![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Joseph Muller

[Previous](dom.md) | [All](README.md) | [Next]()
# How and when JavaScript can change a webpage

![Small shoots of flowers and leaves emerge from the stump of a tree](images/grafted-apple-tree.jpg)

*"Newly grafted apple tree" by Washington State Department of Agriculture is licensed under [CC BY-NC-SA 2.0](https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse).*

Websites are often designed to take inputs from the user and make changes based on those inputs. Some inputs and changes can be handled by HTML and CSS alone, like changing a button border and color on click, changing a the background of a `div` on hover, or dropping down a submenu.

Many more advanced interactivity happens through JavaScript's ability to change the DOM. 

You now know how to access segments of the DOM by various means. DOM elements also give you a number of methods and properties that can change the DOM, which will update the webpage in real time.

JavaScript also has a way to listen for user inputs and run code in response that changes the DOM. This is the basis of most interactivity with a webpage.

## Changing the DOM

Let us first go over how to make changes to the DOM. By default, these changes will happen as soon as the page loads.

For comparison with the rendered result, here is the original HTML.


https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.html#L1-L31

### Removing elements

You can call the `remove` method to remove a `Node` or `Element` object from the DOM.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L1-L5

### Creating elements

You can create new `Element` objects and attach them to the DOM.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L11-L16

### Changing attributes

And you can change attributes by reassigning the corresponding properties of the `Element` object.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L22-L29

### The `innerHTML` property

If you'd rather write snippets of HTML than modify things step-by-step with `Element` object properties, you can use the `innerHTML` property to rewrite parts of the page.

Assigning `innerHTML` to an empty string will just remove all the children.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L35-L36

Passing in a string will result in text content and new elements if they are found in the string.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L42-L43

The `outerHTML` property provides a similar replacement operation, but the HTML string you give it will be used to replace the `Element` object itself, in addition to its contents.

## Events

User inputs that JavaScript knows about are called *events*. There is a special function that lets you define an event and what should happen if and when that event happens.

### Event listener basics

You can define these *event listeners* by calling the `addEventListener` method of an `Element` or `Node` object.

The event will only be registered if it happens to the object you put the listener on. Here is an example:

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L48-L64

Let's break this down. The method `addEventListener` takes two parameters:
    1. A string matching one of the [recognized event types](https://developer.mozilla.org/en-US/docs/Web/API/Element#events), like `click` (primary key click or touch), `keypress`, `focus`
    2. A function that should be called when the event occurs, also known as a *callback function*. This function can be formed in a number of different ways, but if it specifices parameters, it should reserve the first one for the `Event` object that will be returned when the event occurs.

### Using the event in the callback

The above example doesn't make use of the event in the callback function. But sometimes you want to access or modify something about the element that was acted upon. Maybe this is because you're adding an event listener for each of many things. The thing acted upon is known as the event's target, and it's accessed through `Event.target`.

To use it, make sure to specify some parameter in the callback function that binds the event to a name. It can be anything but `event` and `e` are conventional variable names.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L69-L77

### Writing the callback as an arrow function

Callback functions are sometimes written as arrow or anonymous functions inside the calling of the event listener, rather than being passed in by name. This can be trickier to read, but it is commonly used for simple functions.

https://github.com/Birkbeck2/vdwp2223/blob/dfaefe56a69c2b4247108f5468eb8ff28ef24c3e/events.js#L82-L88

## References
Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming* (EJS), third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

“getComputedStyle,” Mozilla Developer Network, [https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle](https://developer.mozilla.org/en-US/docs/Web/API/Window/getComputedStyle).

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.