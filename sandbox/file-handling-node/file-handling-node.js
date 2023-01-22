import {readFile, writeFile} from 'node:fs';

function listSentencesStartingWith(string, startingLetters) {
	let allSentences = string.split('. ');
	let specialSentences = [];
	for (let sentence of allSentences) {
		if (sentence.startsWith(startingLetters)) {
			specialSentences.push(sentence);
		}
	}
	return specialSentences;
}

readFile('middlemarch-gutenberg.txt', 'utf8', (err, middlemarch) => {
  if (err) throw err;
  console.log('Loaded Middlemarch');
	// Loaded Middlemarch
	console.log(middlemarch.length);
	// 1832956
	let specialSentences = listSentencesStartingWith(middlemarch, 'Life');
	console.log(specialSentences);
  // [
  //   'Life in cottages might\r\n' +
  //     'be happier than ours, if they were real houses fit for human beings\r\n' +
  //     'from whom we expect duties and affections.”\r\n' +
  //     '\r\n' +
  //     '“Will you show me your plan?”\r\n' +
  //     '\r\n' +
  //     '“Yes, certainly',
  //   'Life wants padding,” said Mr.\r\nVincy, unable to omit his portable theory',
  //   'Life would be no better\r\n' +
  //     'than candle-light tinsel and daylight rubbish if our spirits were not\r\n' +
  //     'touched by what has been, to issues of longing and constancy'
  // ]
	writeFile('middlemarch-life.txt', specialSentences.join("\n"), (err) => {
		if (err) throw err;
		console.log('Recorded results');
	});
});

