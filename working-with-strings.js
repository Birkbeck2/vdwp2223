let panagram = 'The quick brown fox jumps over the lazy dog';
console.log(panagram[4]);
// q

console.log('cake'[3]);
// e


console.log(panagram.slice(15, 22));
//  fox ju
console.log(panagram.slice(26));
// over the lazy dog


console.log(panagram.length);
// 42


let dogsOnTwoLines = 'dog\ndog';
console.log(dogsOnTwoLines);
// dog
// dog


let dogWithSpace = '   \n   dog   ';
console.log(dogWithSpace);
//    
//    dog   
let dogTrimmed = dogWithSpace.trim();
console.log(dogTrimmed);
// dog


let name = 'Sheila';
console.log(`Her name is ${name}`);
// Her name is Sheila

let product = 'rice';
let price = '1.40';
console.log(`The price of ${product} is £${price}`);
// The price of rice is £1.40


let panagramArrayOnSpaces = panagram.split(' ');
console.log(panagramArrayOnSpaces);
// [
//   'The',   'quick',
//   'brown', 'fox',
//   'jumps', 'over',
//   'the',   'lazy',
//   'dog'
// ]


let panagramArrayOnE = panagram.split('e');
console.log(panagramArrayOnE);
// [ 'Th', ' quick brown fox jumps ov', 'r th', ' lazy dog' ]

let panagramArrayOnJump = panagram.split('jump');
console.log(panagramArrayOnJump);
// [ 'The quick brown fox ', 's over the lazy dog' ]


let panagramArrayOnLeaf = panagram.split('leaf');
console.log(panagramArrayOnLeaf);
// [ 'The quick brown fox jumps over the lazy dog' ]


let myMiscArray = [305, 'chips', false, 105, true, 'potatos',  , 'the one before is empty'];
let myMiscString = myMiscArray.join(' ');
console.log(myMiscString);
// 305 chips false 105 true potatos  the one before is empty

let myMiscStringUnderscore = myMiscArray.join('_');
console.log(myMiscStringUnderscore);
// 305_chips_false_105_true_potatos__the one before is empty


console.log('dog'[2]);
console.log('   cat   '.trim()[0]);
let animals = ['bird', 'dog', 'whale', 'alligator'];
console.log(animals.join(' '));
console.log(animals.join(' ').slice(10));
console.log(animals.join(' ').slice(10).split(' '));
console.log(animals.join(' ').slice(10).split(' ').length);
console.log(`I adopted a ${animals[2]}`);
