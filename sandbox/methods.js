let songTitle = "Illusions";
let upperSongTitle = songTitle.toUpperCase();
console.log(songTitle);
// Illusions
console.log(upperSongTitle);
// ILLUSIONS

let songs = ["Rocky Said", "Illusions"];
songs.push("Mama Said Knock You Out");
console.log(songs);
// [ 'Rocky Said', 'Illusions', 'Mama Said Knock You Out' ]

let lastSong = songs.pop();
console.log(lastSong);
// Mama Said Knock You Out
console.log(songs);
// [ 'Rocky Said', 'Illusions' ]

console.log(typeof songs);
// object
let playlist = {
	songs: songs,
	created: "Oct 2022",
	isPublic: false,
}

console.log(typeof playlist);
// object

let album = {
	songs: songs,
	songPlays: {},
	playSong: function(title) {
		if (title in this.songPlays) {
			this.songPlays[title]++;
		} else {
			this.songPlays[title] = 1;
		}
	},
}

console.log(album);
// {
//   songs: [ 'Rocky Said', 'Illusions' ],
//   songPlays: {},
//   playSong: [Function: playSong]
// }

console.log(album.songPlays);
// {}

album.playSong(album.songs[0]);
console.log(album.songPlays);
// { 'Rocky Said': 1 }

album.playSong(album.songs[0]);
console.log(album.songPlays);
// { 'Rocky Said': 2 }
