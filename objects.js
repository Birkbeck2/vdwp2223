let myVeg = ['leeks', 'turnips', 'carrots', 'peppers'];

console.log(typeof myVeg);
// object
console.log(typeof myVeg[2]);
// string

let playlist = {
  'name' : 'Hits of the 90s',
	'songs' : ['Mo Money Mo Problems', 'Smells Like Teen Spirit'],
	'complete' : false,
}

console.log(playlist['name']);
// Hits of the 90s
console.log(playlist.name);
// Hits of the 90s

console.log(typeof playlist);
// object
console.log(Object.keys(playlist));
// ['name', 'songs', 'complete']

console.log(typeof myVeg);
// object
console.log(Object.keys(myVeg));
// [ '0', '1', '2', '3' ]

console.log(typeof myVeg[2]);
// string
console.log(Object.keys('turnips'));
// [ '0', '1', '2', '3', '4', '5', '6' ]

playlist.name = 'Two random songs from the 90s';
console.log(playlist.name);
// Two random songs from the 90s

let myVeg2 = ['leeks', 'turnips', 'carrots', 'peppers'];
console.log(myVeg == myVeg2);
// false

const playlist2000s = {
  'name' : 'Hits of 2000s',
	'songs' : ['Beautiful Day', 'Maps'],
	'complete' : false,
}

// playlist2000s = 'something else entirely';  // Uncomment this line to see error
// TypeError: Assignment to constant variable.

console.log(playlist2000s.songs);
// ['Beautiful Day', 'Maps']
playlist2000s.songs.push('Paper Planes');
playlist2000s.songs.push('Hey Ya!');
console.log(playlist2000s.songs);
// ['Beautiful Day', 'Maps', 'Paper Planes', 'Hey Ya!' ]

function logPlaylistName(playlist) {
  let {songs} = playlist;
	console.log(songs);
}

logPlaylistName(playlist);
// ['Mo Money Mo Problems', 'Smells Like Teen Spirit']
logPlaylistName(playlist2000s);
// ['Beautiful Day', 'Maps', 'Paper Planes', 'Hey Ya!' ]

let playlistAsJSON = JSON.stringify(playlist);
console.log(playlistAsJSON);
// {"name":"Two random songs from the 90s","songs":["Mo Money Mo Problems","Smells Like Teen Spirit"],"complete":false}
console.log(typeof playlistAsJSON);
let playlistFromJSON = JSON.parse(playlistAsJSON);
console.log(playlistFromJSON);
// {
//   name: 'Two random songs from the 90s',
//   songs: [ 'Mo Money Mo Problems', 'Smells Like Teen Spirit' ],
//   complete: false
// }
console.log(typeof playlistFromJSON);
// object
