const htmlRoot = document.documentElement;
console.log(htmlRoot);
// <html lang="en">
console.log(typeof htmlRoot);
// object





let whatsHappening = document.documentElement.lastChild.children[2].firstElementChild.textContent
console.log(whatsHappening);
// "What's happening?"
console.log(typeof whatsHappening);
// string





let h2s = document.getElementsByTagName('h2');
console.log(h2s);
// HTMLCollection { 0: h2#q1.question.greeting, 1: h2#q2.question.greeting, 2: h2#q3.question.greeting, length: 3, … }
console.log(typeof h2s);
// object

let q2 = document.getElementById('q2');
console.log(q2);
// <h2 id="q2" class="question greeting">
console.log(typeof q2);
// object

let answers = document.getElementsByClassName('answer');
console.log(answers);
// HTMLCollection { 0: p#a1.answer, 1: p#a2.answer, 2: p#a3.answer, length: 3, … }




for (let h2 of h2s) {
	console.log(h2);
}
// <h2 id="q1" class="question greeting">
// <h2 id="q2" class="question greeting">
// <h2 id="q3" class="question greeting">

let firstH2 = h2s[0];
console.log(firstH2);
// <h2 id="q1" class="question greeting">





console.log(q2.id);
// q2
console.log(typeof q2.id);
// string
console.log(q2.className);
// question greeting
console.log(q2.textContent);
// What's happening?
console.log(typeof q2.textContent);
// string

console.log(firstH2.id);
// q1
console.log(firstH2.textContent);
// What's good?





let ps = document.querySelectorAll('p');
console.log(ps);
// NodeList(3) [ p#a1.answer, p#a2.answer, p#a3.answer ]
let a3 = document.querySelector('#a3');
console.log(a3);
// <p id="a3" class="answer">
let questionAnswerDivs = document.querySelectorAll('div.question-answer');
console.log(questionAnswerDivs);
// NodeList(3) [ div#qa1.question-answer, div#qa2.question-answer, div#qa3.question-answer ]




for (let p of ps) {
	console.log(p.textContent);
}
// Nothing
// Nothing
// Makin it
console.log(ps[0]);
// <p id="a1" class="answer">




console.log(ps[1].id);
// a2
console.log(ps[2].className);
// answer




let secondQuestionAnswer = document.getElementById('qa2');
let justPsUnderSecondQuestionAnswer = secondQuestionAnswer.getElementsByTagName('p');
console.log(justPsUnderSecondQuestionAnswer);
// HTMLCollection { 0: p#a2.answer, length: 1, … }
