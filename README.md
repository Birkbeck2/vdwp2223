![Birkbeck, University of London](images/birkbeck-logo.jpg)

# Visual Design and Web Project

## About this repository

This repository holds lecture notes for the Web Project side of Visual Design and Web Project, a module in the Department of Film, Media, and Cultural Studies at Birkbeck, University of London. The first three sessions are dedicated to programming with vanilla JavaScript, and the last three cover the basics of making web applications with the JavaScript framework Vue.js.

## General Resources

We have one main textbook for programming concepts and vanilla JavaScript: Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming* (EJS), third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/).

For the Vue.js JavaScript framework, we will rely mainly on the official documentation at **vuejs.org**.

## Review

The first JavaScript session on setup, values, and data types can be found in the [repository for last term](https://github.com/Birkbeck2/web-dev-ux-lectures-22-23#coding-session-9---introduction-to-programming-with-javascript).

## Session 1 - Simple programs in JavaScript

### Learning outcomes

Students will be able to do the following with JavaScript:

- Assign and re-assign values to variables with appropriate declarations
- Write conditional statements to control program logic
- Define and call functions to reuse code

### Reading

#### Priority
- [EJS](https://eloquentjavascript.net/index.html) chapters 2 & 3

### Assigning variables

> statements, `;`, variables, `=`, `let`, `const`, `var`

### Setting up conditional statements

> conditionals, `if`, `else`, `while`, `{}`, block scope

### Writing functions to make programs modular

> functions, `function`, `return`, `{}`, function scope

## Session 2 - Complex structures and objects in JavaScript

### Learning outcomes

Students will be able to do the following with JavaScript:

- Describe the characteristics of JavaScript arrays
- Form, mutate, and read data in arrays
- Rerun code on each item in an array or string using iteration
- Describe the characteristics of JavaScript objects and classes
- Write class definitions and object methods
- Access object properties and run object methods
- Export and import code between files

### Reading

#### Priority
- [EJS](https://eloquentjavascript.net/index.html) chapter 4

#### Also recommended
- [EJS](https://eloquentjavascript.net/index.html) chapters 6 & 10

### Forming data sets with arrays

> arrays, `[]`, `in`, indexing, `slice`, `concat`, `indexOf`, `split`, `join`

### Using loops to repeat code

> iteration, `for...of`

### Objects and object-oriented programming

> objects, properties, maps, destructuring, methods, classes, `class`, inheritance, polymorphism, `instanceof`, `constructor`, `new`

### Organizing, borrowing, and sharing code

> modules, `import`, `export`, `default`, CDNs

## Session 3 - JavaScript in the browser

### Learning outcomes

Students will be able to do the following with JavaScript:

- Define the DOM
- Write JavaScript that reads and mutates the DOM
- Run code when users perform actions on the DOM
- Describe the characteristics of JSON and CSV data formats
- Get data from hosted files and parse it for use in a program
- Make calls to a REST API
- Store and retrieve data in localStorage
- Draw shapes on a webpage

### Reading

#### Priority
- [EJS](https://eloquentjavascript.net/index.html) chapters 13 & 18
- “Introducing JSON,” json.org, [https://www.json.org/json-en.html](https://www.json.org/json-en.html)

#### Also recommended
- [EJS](https://eloquentjavascript.net/index.html) chapters 15 & 17

### How JavaScript interacts with a webpage

> Document Object Model (DOM), events

### Fetching and storing data

> back end and front end, JSON, CSV, APIs, making GET requests, `fetch`, `localStorage`

### Drawing shapes

> `canvas`, vector and raster (bitmap) images, SVG, transformations

## Session 4 - Simple web applications with Vue

### Learning outcomes

Students will be able to do the following with Vue.js:

- Describe the characteristics of Vue
- Install Vue on a computer or load it in a webpage
- Declare reactive objects
- Dynamically populate HTML templates with text
- Dynamically populate HTML attributes with data
- Run code when users perform actions on the DOM

### Reading

#### Priority
- “Introduction,” Vue.js, [https://vuejs.org/guide/introduction.html](https://vuejs.org/guide/introduction.html)
- “Creating an Application,” Vue.js, [https://vuejs.org/guide/essentials/application.html](https://vuejs.org/guide/essentials/application.html)
- “Template Syntax,” Vue.js, [https://vuejs.org/guide/essentials/template-syntax.html](https://vuejs.org/guide/essentials/template-syntax.html)
- “Reactivity Fundamentals,” Vue.js, [https://vuejs.org/guide/essentials/reactivity-fundamentals.html](https://vuejs.org/guide/essentials/reactivity-fundamentals.html)

#### Also recommended
- “Class and Style Bindings,” Vue.js, [https://vuejs.org/guide/essentials/class-and-style.html](https://vuejs.org/guide/essentials/class-and-style.html)
- “Event Handling,” Vue.js, [https://vuejs.org/guide/essentials/event-handling.html](https://vuejs.org/guide/essentials/event-handling.html)

### Introduction to Vue

> frameworks, Vue characteristics, installation, Vue from CDN, browser extensions, IDE extensions, Volar

### How Vue structures code and objects

> templates, `{{ }}`, single-file components, `.vue`, `setup`, reactivity, `reactive`, `ref`

### Making HTML attributes dynamic

> attribute bindings, `v-bind`, `:`

### Updating content based on events

> event listeners, `v-on`, `@`, `click`, methods

## Session 5 - Inputs and complex rendering in Vue

### Learning outcomes

Students will be able to do the following with Vue.js:

- Bind user input data to reactive objects as models
- Render HTML based on conditions
- Render lists
- Render values based on other values
- Run code at a specific time in the lifecycle of the webpage

### Reading

#### Priority
- “Form Input Bindings,” Vue.js, [https://vuejs.org/guide/essentials/forms.html](https://vuejs.org/guide/essentials/forms.html)
- “Conditional Rendering,” Vue.js, [https://vuejs.org/guide/essentials/conditional.html](https://vuejs.org/guide/essentials/conditional.html)
- “List Rendering,” Vue.js, [https://vuejs.org/guide/essentials/list.html](https://vuejs.org/guide/essentials/list.html)

#### Also recommended
- “Computed Properties,” Vue.js, [https://vuejs.org/guide/essentials/computed.html](https://vuejs.org/guide/essentials/computed.html)
- “Lifecycle Diagram,” Vue.js, [https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram](https://vuejs.org/guide/essentials/lifecycle.html#lifecycle-diagram)

### Tying form data to model data

> form bindings, `value`, `input`, `v-model`

### Rendering HTML based on conditions

> conditional rendering, `v-if`, `v-else`, `v-else-if`

### Rendering lists

> list rendering, `v-for`, `in`, `key`, mutating methods

### Rendering values based on other values

> computed properties, `computed`

### Controlling running order

> lifecycle hooks, `created`, `updated`, `mounted`

## Session 6 - Modular web applications with Vue components

### Learning outcomes

Students will be able to do the following with Vue.js:

- Describe the characteristics of Vue components
- Divide an app into an appropriate set of components
- Nest components
- Pass data to child components
- Receive data and events from child components
- Create more complex component nests with slots

### Reading

#### Priority
- “Components Basics,” Vue.js, [https://vuejs.org/guide/essentials/component-basics.html](https://vuejs.org/guide/essentials/component-basics.html)

#### Also recommended
- “Registration,” Vue.js, [https://vuejs.org/guide/components/registration.html](https://vuejs.org/guide/components/registration.html)
- “Props,” Vue.js, [https://vuejs.org/guide/components/props.html](https://vuejs.org/guide/components/props.html)
- “Events,” Vue.js, [https://vuejs.org/guide/components/events.html](https://vuejs.org/guide/components/events.html)
- “Fallthrough Attributes,” Vue.js, [https://vuejs.org/guide/components/attrs.html](https://vuejs.org/guide/components/attrs.html)
- “Slots,” Vue.js, [https://vuejs.org/guide/components/slots.html](https://vuejs.org/guide/components/slots.html)

### Structuring code with components

> components, `.vue`

### Passing data to child components

> props, `defineProps`, `props`

### Passing data to parent components

> emits, `emit`, `defineEmits`, `response`

### Nesting components with slots

> slots, `slot`

## Rights
Lectures are copyright Birkbeck, University of London. Pictures and workshop documents are copyright Birkbeck, University of London unless otherwise stated where they are referenced in the lectures.

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.

