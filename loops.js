let songs = [
	"Mo Money Mo Problems",
	"Smells Like Teen Spirit",
	"Beautiful Day",
	"Maps",
	"Paper Planes",
	"Hey Ya!",
]

for (let song of songs) {
	let letters = song.length;
	let toLog = `${song} is ${letters} letters long`;
	console.log(toLog);
}
// Mo Money Mo Problems is 20 letters long
// Smells Like Teen Spirit is 23 letters long
// Beautiful Day is 13 letters long
// Maps is 4 letters long
// Paper Planes is 12 letters long
// Hey Ya! is 7 letters long


// console.log(song);
// ReferenceError: song is not defined


for (let character of 'Maps') {
	console.log(character);
}
// M
// a
// p
// s


for (let i = 0; i < 3; i++) {
	let order = i + 1;
	let song = songs[i]
	let toLog = `${order}. ${song}`;
	console.log(toLog);
}
// 1. Mo Money Mo Problems
// 2. Smells Like Teen Spirit
// 3. Beautiful Day


let words = [];
for (let song of songs) {
	let wordsInSong = song.split(' ');
	for (let word of wordsInSong) {
		words.push(word);
	}
}
console.log(words);
// [
//   'Mo',        'Money',
//   'Mo',        'Problems',
//   'Smells',    'Like',
//   'Teen',      'Spirit',
//   'Beautiful', 'Day',
//   'Maps',      'Paper',
//   'Planes',    'Hey',
//   'Ya!'
// ]


for (let character of 'The quick brown fox') {
	if (character == character.toUpperCase() && character != ' ') {
		console.log(character);
	}
}


let horses = [];
for (let x = 0; x < 10; x += 3) {
	horses.push('horse');
}
console.log(horses.length);
