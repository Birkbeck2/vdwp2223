![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | [lecturer name]

[Previous](path/to/file.md) | [All](README.md) | [Next](path/to/file.md)

# Visualising data with Javascript

## JSON data and storage

### History of JSON

JSON or JavaScript Object Notation was introduced in the early 2000s as a way of describing and exchanging text-based data.

JSON was initially developed as a way for JavaScript clients and back-end servers to communicate.

Data is useful in many different ways: to more fully describe what is happening in different systems such as nature, weather, business, communication or politics.

It is native to JavaScript but can also be used with other programming languages. Being human readable, it is easy to use, but also incredibly versatile.

Today JSON is the universal standard of data exchange.

### What is JSON

JSON is a way of serialising objects, arrays, numbers, strings, booleans and null.

It is used to store and transport data. It is self-describing and easy to understand.

When downloading JSON from the internet it normally looks something like this:

{"name":"John", "age":30, "car":null}

In the example above there are three properties: name, age, and car.

JSON is made up of several name (or key)/value pairs. A name/value pair consists of a name (or key, in double quotes), followed by a colon, followed by a value:

"name":"John"

Each key/value pair is separated by a comma.

JSON strings contain JSON object literals:

```
// JSON string:
'{"name":"John", "age":30, "car":null}'

// JSON object literal:
{"name":"John", "age":30, "car":null}
```

JSON object literals are surrounded by curly braces {}. They contain key/value pairs. Keys and values are separated by a colon. Keys must be strings, and values must be a valid JSON data type:
-	string
-	number
-	object
-	array
-	boolean
-	null

```
// Objects as values in JSON must follow the JSON syntax:
{"employee":{"name":"John", "age":30, "city":"New York"}}

// Values in JSON can be arrays:
{"employees":["John", "Anna", "Peter"]}

//Values in JSON can be true/false:
{"sale":true}

//Values in JSON can be null:
{"middlename":null}
```

JSON makes it possible to store JavaScript objects as text, which is a widely used and thus very accessible and versatile format.

JSON syntax is derived from JavaScript object notation syntax:
-	Data is in name/value pairs
-	Data is separated by commas
-	Curly braces hold objects
-	Square brackets hold arrays
-	
Numbers in JSON must be an integer or a floating point.




## References


## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.






