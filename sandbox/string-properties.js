let song = 'Mo Money Mo Problems';

console.log(song[0]);
// M
console.log(song[13]);
// r
console.log(song.length);
// 20

console.log(song.indexOf('Money'));
// 3
console.log(song.indexOf('Problems'));
// 12

console.log(song.length);
// 20

songWordArray = song.split(' ');
console.log(songWordArray);
// ['Mo', 'Money', 'Mo', 'Problems']
console.log(songWordArray[1].length);
// 5
songWithUnderscores = songWordArray.join('_');
console.log(songWithUnderscores);
// ['Mo_Money_Mo_Problems']

let lowerCaseSong = song.toLowerCase();
console.log(lowerCaseSong);
// mo money mo problems

let upperCaseSong = song.toUpperCase();
console.log(upperCaseSong);
// MO MONEY MO PROBLEMS

let song2 = '   Smells Like Teen Spirit     ';
let song2Trimmed = song2.trim();
console.log(song2Trimmed);
// Smells Like Teen Spirit

let computedString = `The first word is ${song[0]}`;
console.log(computedString);

