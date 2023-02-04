// Note: This file will run in a browser only, not with Node.js
// Lines of code that will cause errors that stop the program are commented out.
// Uncomment them to see the errors they cause.

let whatIsThisEven = (792 * 410).toString().split('4')[1].length;
console.log(whatIsThisEven);




let whatTypeIsThisEven = 84 + ['dog'];
console.log(typeof whatTypeIsThisEven);






function subtractFourOwls(startNum) {
  let numOwls = startNum;
  numOlws = numOwls - 4;
  return numOwls;
}
let owls = subtractFourOwls(52);
console.log(owls);
// 52





function subtractFourBears(startNum) {
  "use strict";
  let numBears = startNum;
  numBaers = numBears - 4;
  return numBears;
}
// let bears = subtractFourBears(52);
// console.log(bears);
// Uncaught ReferenceError: assignment to undeclared variable numBaers
//     subtractFourBears bugs-and-errors.js:17





let aDog = 'dog';
// aDog.brush();
// Uncaught TypeError: aDog.brush is not a function
//     <anonymous> bugs-and-errors.js:7






function answerYesOrNo(question) {
  answer = prompt(question);
  if (answer != 'yes' && answer != 'no') {
    throw new Error(`Incorrect answer: ${answer}`);
  }
  if (answer == 'yes') {
    alert("I knew it!");
  } else {
    alert('We can still be friends');
  }
}

answerYesOrNo('Do you like to sing?');
// yes
// Of course you do!

answerYesOrNo('Do you like to sing?');
// no
// We can still be friends

answerYesOrNo('Do you like to sing?');
// sort of
// Uncaught Error: Incorrect answer: sort of






try {
  answerYesOrNo('Do you like to sing?');
} catch (error) {
  console.log(error);
  answerYesOrNo('Please answer yes or no: Do you like to sing?');
}
// sort of
// Uncaught Error: Incorrect answer: sort of
// Please answer yes or no: Do you like to sing?
// no
// We can still be friends
