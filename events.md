![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Joseph Muller

[Previous](dom.md) | [All](README.md) | [Next](bugs-and-errors.md)
# How and when JavaScript can change a webpage

![Small shoots of flowers and leaves emerge from the stump of a tree](images/grafted-apple-tree.jpg)

*"Newly grafted apple tree" by Washington State Department of Agriculture is licensed under [CC BY-NC-SA 2.0](https://creativecommons.org/licenses/by-nc-sa/2.0/?ref=openverse).*

Websites are often designed to take inputs from the user and make changes based on those inputs. Some inputs and changes can be handled by HTML and CSS alone, like changing a button border and color on click, changing a the background of a `div` on hover, or dropping down a submenu.

Beyond these design cases, most interactivity happens through JavaScript's ability to change the DOM.

The DOM gives you a number of methods and properties that can be used to change the DOM, which will update the webpage in real time.

JavaScript also has a way to listen for user inputs and run code to modify the DOM in response. This is the basis of most interactivity with a webpage.

## Changing the DOM

Let us first go over how to make changes to the DOM. If we write them in a sequential way in our `.js` file, they will happen as soon as the page loads.

So, to catch the changes, you need to compare the original HTML with the rendered page or the inspected DOM in the browser.

Here is the original HTML.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.html#L1-L31

### Removing elements

You can call the `remove` method to remove a `Node` or `Element` object from the DOM.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L1-L5

### Creating elements

You can create new `Element` objects and attach them to the DOM.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L11-L16

### Changing attributes

And you can change attributes by reassigning the corresponding properties of the `Element` object.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L22-L29

### The `innerHTML` property

If you'd rather write snippets of HTML than modify things step-by-step with `Element` object properties, you can use the `innerHTML` property to rewrite parts of the page.

Assigning `innerHTML` to an empty string will just remove all the children.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L35-L36

Passing in a string will result in text content and new elements if they are found in the string.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L42-L43

The `outerHTML` property provides a similar replacement operation, but the HTML string you give it will be used to replace the `Element` object itself, in addition to its contents.

### Live versus static events

Recall that we said the `getElementsBy` methods returns a live set of objects. This means it will also point to new objects that fit the criterion as they are created.

However, the `querySelector` and `querySelectorAll` methods return a static set of objects.

You can see the difference in this example.
```html
<script>
  const leafElements = document.getElementsByTagName('p');
  const leafNodes = document.querySelectorAll('p');
</script>
<p>🍁</p>
<p>🍁</p>
<p>🍁</p>
<script>
  console.log(leafElements.length);
  // 3
  console.log(leafNodes.length);
  // 0
</script>
```
### Check your understanding
1. What will the rendered document be?
    ```html
    <p>🍁</p>
    <p>🍁🍁</p>
    <p>🍁🍁🍁</p>
    <p>🍁🍁🍁🍁</p>
    <p>🍁🍁🍁🍁🍁</p>
    <script>
    document.getElementsByTagName('p')[3].remove()
    </script>
    ```

## Events

User inputs that JavaScript knows about are called *events*. There is a special function that lets you define an event and what should happen if and when that event happens.

### Event listener basics

You can define these *event listeners* by calling the `addEventListener` method of an `Element` or `Node` object.

The event will only be registered if it happens to the object you put the listener on. Here is an example:

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L48-L65

Let's break this down. The method `addEventListener` takes two parameters:
    1. A string matching one of the [recognized event types](https://developer.mozilla.org/en-US/docs/Web/API/Element#events), like `click` (primary key click or touch), `keypress`, `focus`
    2. A function that should be called when the event occurs, also known as a *callback function*. This function can be formed in a number of different ways, but if it specifices parameters, it should reserve the first one for the `Event` object that will be returned when the event occurs.

### Using the event in the callback

The above example doesn't make use of the event in the callback function. But sometimes you want to access or modify something about the element that was acted upon. Maybe this is because you're adding an event listener for each of many things. The thing acted upon is known as the event's target, and it's accessed through `Event.target`.

To use it, make sure to specify some parameter in the callback function that binds the event to a name. It can be anything but `event` and `e` are conventional variable names.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L69-L77

### Writing the callback as an arrow function

Callback functions are sometimes written as arrow or anonymous functions inside the calling of the event listener, rather than being passed in by name. This can be trickier to read, but it is commonly used for simple functions.

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L82-L88

## Check your understanding

1. Is there anything wrong with this code?

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L94-L100

2. How about this? (By the way, 'mouseover' is a valid event type that fires when the mouse moves over an element.)

https://github.com/Birkbeck2/vdwp2223/blob/0bb0e9d643119d413b25252f916cdb6b977acbd3/events.js#L106-L115

## References
Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming* (EJS), third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
