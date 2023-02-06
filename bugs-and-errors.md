![Birkbeck, University of London](images/birkbeck-logo.jpg)

Visual Design and Web Project | Coding Sessions | Joseph Muller

[Previous](events.md) | [All](README.md)
# Finding bugs and handling errors

![Two clocks on a tower telling different times](images/time-one-right-one-wrong.jpg)

*"Time - one right one wrong" by Ambernectar 13 is licensed under [CC BY-ND 2.0](https://creativecommons.org/licenses/by-nd/2.0/?ref=openverse).*

Programs don't always do what we intended. This might happen if we make a mistake in writing the program, or if we were not literal enough in our instructions.

We usually call these unintended consequences *bugs*, and there are several ways to *debug* programs.

The worst kind of bugs are silent ones. If a flaw exists in the program but nothing happens to tell you that, you might then depend on an erroneous output without knowing it is incorrect.

So, there are also strategies to check at key points that things are happening as we expect, and to loudly display things that are out of the ordinary, so that we know about them and can revise the program accordingly.

## Console logging and type checking

When you are writing a program, you often want to see the result of an expression in the console, to verify it's doing as you expect:

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L5-L6

You also might check the type, if you remember the `typeof` operator:

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L11-L12

These are very powerful when you want to see what different parts of your program are doing, though they can get messy if you have a lot of them.

## Strict mode

JavaScript was very loosely defined in the beginning, and as a result is very permissive of programmer mistakes that might cause bugs.

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L19-L26

Can you spot the bug? What unusual syntax led to the bug?

A stricter running mode was added to mitigate this problem. You can set strict mode on a given scope by adding the line `"use strict";`

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L32-L41

## Automatic error messaging

With some types of problems, JavaScript will catch the error and log a message to the console for you. Often, this also stops the program running. These are called *exceptions*, because they go against the programmer's expectation for how the program ideally should run.

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L47-L50

This is very helpful, because it tries to tell you the exact location of the code that prompted the exception. 

It also categorizes the error as a `TypeError`. In this case, it looked for a method (or function) on `dog` called `brush` but didn't find one.

## Custom error messaging for exceptions

Most of the time, automatic error messaging is enough. But sometimes you want your program to alert you if an exception occurs, and for that you can create custom error messages.

Why? If you have functional requirements for a program, but you expect many times they won't be met, becasue of what the user does or the state of data you are working with.

For example, say you have a narrowly defined function `answerYesOrNo` that *must* get a string `"yes"` or a string `"no"` or else it can't run. You write some code that throws an error in all other cases, so you always know when "bad" data is passed.

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L57-L79

This is helpful because it traces the location of the code that caused the exception, just like the automatic messages.

Of course, the user experience of this function is not great:

1. It requires a very strict input.
2. It doesn't tell the user what is wrong on the main webpage, only through the console.
3. It doesn't let the user try to answer the question again.
4. It ends the program, and the user would have to refresh to get going again.

## Catching exceptions

Really, you can't expect that users will always provide the right input for such a narrowly defined function.

When an "error" is expected, you can and should accomodate it in your program.

You could broaden the function, so that it handles more types of input. Or you could use HTML to provide the user with a dropdown or toggle, rather than a text input, so that they can only provide valid inputs.

But what if, for some reason, you couldn't do either of those things?

You can use `try` and `catch` blocks. If an error is raised during the code in the `try` block, the code in the `catch` block is run.

https://github.com/Birkbeck2/vdwp2223/blob/2168b317987d7f16eaae962cb9391e1d1a3dba50/bugs-and-errors.js#L86-L96

The program won't necessarily end unless another error is raised in the `catch` block.

This has a better user experience because the program won't necessarily end if the first input is not correct.

## Check your understanding
1. What will happen with the following program? What will be logged? Will the program stop running?
    ```js
    let shoppingList = ['apples', 'cheese'];
    let result = shoppingList.split('pp');
    ```
2. How about this program?
    ```js
    try {
      let sum = 50192 + 22;
      sum += aStory;
    } catch (error) {
      console.log(error);
    }
    console.log('The sun is shining');
    ```

## References
Marijn Haverbeke, *Eloquent JavaScript: A Modern Introduction to Programming* (EJS), third edition, 2018, [https://eloquentjavascript.net/](https://eloquentjavascript.net/)

## Rights
Copyright Birkbeck, University of London

<a rel="license" href="http://creativecommons.org/licenses/by/4.0/"><img alt="Creative Commons Licence" src="https://i.creativecommons.org/l/by/4.0/88x31.png" /></a><br />This work is licensed under a <a rel="license" href="http://creativecommons.org/licenses/by/4.0/">Creative Commons Attribution 4.0 International License</a>.
