class Album {
  constructor(songs) {
		this.songs = songs;
		this.songPlays = {};
	}
	playSong(title) {
		if (title in this.songPlays) {
			this.songPlays[title]++;
		} else {
			this.songPlays[title] = 1;
		}
	}
}

let mySongs = ['Dreams', 'No Rain'];
let myRecord = new Album(mySongs);
console.log(myRecord.songPlays);
// {}

myRecord.playSong('Dreams');
console.log(myRecord.songPlays);
// { Dreams: 1 }

myRecord.playSong('Dreams');
console.log(myRecord.songPlays);
// { Dreams: 2 }

class Single extends Album {
	constructor(song) {
		super([song]);
	}
}

let mySingleAlbum = new Single('Heartbreak Hotel');
mySingleAlbum.playSong('Heartbreak Hotel');
console.log(mySingleAlbum);
// Single {
//   songs: [ 'Heartbreak Hotel' ],
//   songPlays: { 'Heartbreak Hotel': 1 }
// }

console.log(Object.getPrototypeOf(mySingleAlbum));
// Album
