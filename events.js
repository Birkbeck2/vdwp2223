let q2 = document.querySelector('#q2');
q2.remove();

let a2 = document.getElementById('a2');
a2.remove();





let qa4 = document.createElement('div');
let q4 = document.createElement('h2');
let a4 = document.createElement('p');
qa4.append(q4, a4);
let greetingDiv = document.getElementById('greetings');
greetingDiv.append(qa4);





qa4.id = 'qa4';
qa4.className = 'question-answer';
q4.id = 'q4';
q4.className = 'question greeting';
q4.textContent = 'Hello again';
a4.id = 'a4';
a4.className = 'answer';
a4.textContent = 'hello';





let a1 = document.getElementById('a1');
a1.innerHTML= '';





let a3 = document.getElementById('a3');
a3.innerHTML = '<em>Extremely</em> well, <span style="color: purple; font-size: 36px; text-shadow: #BC0 5px 0 10px;">thanks</span>';




const switchButton = document.getElementById('switch');

function changePicture() {
	const picturePaths = [
		'images/veg1.jpg',
		'images/veg2.jpg'
	]
	img = document.getElementById('switching-picture');
	console.log('Old path was', img.src);
	if (img.src.includes(picturePaths[0])) {
		img.src = picturePaths[1];
	} else {
		img.src = picturePaths[0];
	}
	console.log('New path is', img.src);
}

switchButton.addEventListener('click', changePicture);




const greetings = document.getElementsByClassName('greeting');

function sayAgain(event) {
	event.target.innerHTML = event.target.innerHTML + ' ' + event.target.innerHTML;
}

for (let greeting of greetings) {
  greeting.addEventListener('click', sayAgain)
}




const answers = document.getElementsByClassName('answer');

for (let answer of answers) {
	answer.addEventListener('click', event => {
		event.target.innerHTML = event.target.innerHTML + ' ' + event.target.innerHTML;
	});
}




const questions = document.getElementsByClassName('question');

function logMe(event) {
	console.log(event.target);
}

questions[1].addEventListener('click') = logMe;





const question3 = document.getElementById('q3');

function replace(text) {
	event.innerHTML = text;
}

question3.addEventListener(
	'mouseover',
	replace('Put <em>this text</em> as inner HTML')
);
