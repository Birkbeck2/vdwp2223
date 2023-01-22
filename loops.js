let songs = [
	"Mo Money Mo Problems",
	"Smells Like Teen Spirit",
	"Beautiful Day",
	"Maps",
	"Paper Planes",
	"Hey Ya!",
]

// Log each song with its title character length
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

let songPlays = {
	"Mo Money Mo Problems": 388888757,
	"Smells Like Teen Spirit": 1511338257,
	"Beautiful Day": 432241198,
	"Maps": 143550053,
	"Paper Planes": 581352936,
	"Hey Ya!": 998838121,
}

// Log the song titles and song plays
for (let songTitle in songPlays) {
	let plays = songPlays[songTitle];
	let toLog = `${songTitle} has been played ${plays} times`;
	console.log(toLog);
}
// Mo Money Mo Problems has been played 388888757 times
// Smells Like Teen Spirit has been played 1511338257 times
// Beautiful Day has been played 432241198 times
// Maps has been played 143550053 times
// Paper Planes has been played 581352936 times
// Hey Ya! has been played 998838121 times

// Log only the first three songs by their order in the list
for (let i = 0; i < 3; i++) {
	let order = i + 1;
	let song = songs[i]
	toLog = `${order}. ${song}`;
	console.log(toLog);
}
// 1. Mo Money Mo Problems
// 2. Smells Like Teen Spirit
// 3. Beautiful Day

let i = 0;
console.log(i);
// 0
i = i + 1;
console.log(i);
// 1
i++;
console.log(i);
// 2

for (let song of songs) console.log(song);
// Mo Money Mo Problems
// Smells Like Teen Spirit
// Beautiful Day
// Maps
// Paper Planes
// Hey Ya!

console.log(Object.values(songPlays));
// [ 388888757, 1511338257, 432241198, 143550053, 581352936, 998838121 ]

for (let plays of Object.values(songPlays)) console.log(plays);
// 388888757
// 1511338257
// 432241198
// 143550053
// 581352936
// 998838121

console.log(Object.entries(songPlays));
// [
//   [ 'Mo Money Mo Problems', 388888757 ],
//   [ 'Smells Like Teen Spirit', 1511338257 ],
//   [ 'Beautiful Day', 432241198 ],
//   [ 'Maps', 143550053 ],
//   [ 'Paper Planes', 581352936 ],
//   [ 'Hey Ya!', 998838121 ]
// ]

for (let [key, value] of Object.entries(songPlays)) {
	console.log(key, value);
}
// Mo Money Mo Problems 388888757
// Smells Like Teen Spirit 1511338257
// Beautiful Day 432241198
// Maps 143550053
// Paper Planes 581352936
// Hey Ya! 998838121

for (let [title, plays] of Object.entries(songPlays)) {
	console.log(`${title} has been played ${plays} times`);
}
// Mo Money Mo Problems has been played 388888757 times
// Smells Like Teen Spirit has been played 1511338257 times
// Beautiful Day has been played 432241198 times
// Maps has been played 143550053 times
// Paper Planes has been played 581352936 times
// Hey Ya! has been played 998838121 times

let playlist = [
	{
		"title": "Mo Money Mo Problems",
		"plays": 388888757,
		"artist": "The Notorious B.I.G.",
		"year": 1997,
	},
	{
		"title": "Smells Like Teen Spirit",
		"plays": 1511338257,
		"artist": "Nirvana",
		"year": 1991,
	},
]

for (let {title, year} of playlist) {
	console.log(`${title} came out in ${year}`);
}
// Mo Money Mo Problems came out in 1997
// Smells Like Teen Spirit came out in 1991
