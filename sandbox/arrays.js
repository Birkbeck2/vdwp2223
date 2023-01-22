const theSeasons = ['Spring', 'Summer', 'Autumn', 'Winter'];

console.log(theSeasons);
// ['Spring', 'Summer', 'Autumn', 'Winter']

console.log(theSeasons[0]);
// Spring
console.log(theSeasons[1]);
// Summer
console.log(theSeasons[2]);
// Autumn
console.log(theSeasons[3]);
// Winter

console.log(theSeasons[10-8]);
// Autumn
console.log(theSeasons[1+2]);
// Winter

console.log(theSeasons.indexOf('Summer'));
// 1
console.log(theSeasons.indexOf('Winter'));
// 3

console.log(theSeasons[theSeasons.indexOf('Spring') + 1]);
// Summer

let changingSeasons = [theSeasons[0], theSeasons[2]];
console.log(changingSeasons);
// ['Spring', 'Autumn']

let warmerSeasons = theSeasons.slice(0, 2);
console.log(warmerSeasons);
// ['Spring', 'Summer']

let colderSeasons = theSeasons.slice(2);
console.log(colderSeasons);
// ['Autumn', 'Winter']

let colderThenWarmerSeasons = colderSeasons.concat(warmerSeasons);
console.log(colderThenWarmerSeasons);
// ['Autumn', 'Winter', 'Spring', 'Summer']

console.log(theSeasons.length);
// 4
console.log(theSeasons[3].length);
// 6

theSeasons.push('Spring on Mars');
console.log(theSeasons);
// ['Spring', 'Summer', 'Autumn', 'Winter', 'Spring on Mars']
theSeasons.pop();
console.log(theSeasons);
// ['Spring', 'Summer', 'Autumn', 'Winter']

let messyArray = ['Elizabeth Line', 'a rat', 46, false, 'a shoe', {name: 'Frankenstein'}, ['peas', 'carrots']];
console.log(messyArray);
// [
//   'Elizabeth Line',
//   'a rat',
//   46,
//   false,
//   'a shoe',
//   { name: 'Frankenstein' },
//   [ 'peas', 'carrots' ]
// ]
