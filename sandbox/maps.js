let songs = new Map();
songs.set('Enjoy the Silence', {artist: 'Depeche Mode', plays: 427456626});
songs.set('Alright', {artist: 'Supergrass', plays: 259072910});

console.log(songs.get('Enjoy the Silence'));
// { artist: 'Depeche Mode', plays: 427456626 }

console.log(songs.has('Alright'));
// true

console.log(songs.has(toString));
// false

console.log(songs);
// Map(2) {
//   'Enjoy the Silence' => { artist: 'Depeche Mode', plays: 427456626 },
//   'Alright' => { artist: 'Supergrass', plays: 259072910 }
// }

let objFromMap = Object.fromEntries(songs);
let songsJSON = JSON.stringify(objFromMap);
console.log(songsJSON);
// {"Enjoy the Silence":{"artist":"Depeche Mode","plays":427456626},"Alright":{"artist":"Supergrass","plays":259072910}}

let songsFromJSON = new Map(Object.entries(objFromMap));
console.log(songsFromJSON);
// Map(2) {
//   'Enjoy the Silence' => { artist: 'Depeche Mode', plays: 427456626 },
//   'Alright' => { artist: 'Supergrass', plays: 259072910 }
// }
