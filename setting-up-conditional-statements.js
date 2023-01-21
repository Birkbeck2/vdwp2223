let haveSunshine = true;

if(haveSunshine == true){
  console.log("It is sunny");
}


haveSunshine = true;

if(haveSunshine == true){
	let isRaining = "It is raining";
	console.log("It is sunny " + isRaining);
}


haveSunshine = false;

if(haveSunshine == true){
  console.log("It is sunny");
} else {
  console.log("It is cloudy");
}


haveSunshine = false;
let isRaining = true;

if (haveSunshine == true && isRaining == false){
  console.log("It is sunny");
} else if(haveSunshine == true && isRaining == true){
  console.log("It is sunny and raining");
} else if(haveSunshine == false && isRaining == false){
  console.log("It is cloudy");
} else {
  console.log("It is cloudy and raining");
}



let num = 3

if (num < 10) {
  console.log("Small");
} else if (num < 100) {
  console.log("Medium");
} else {
  console.log("Large");
}


let number = 0;
while (number <= 10) {
  console.log(number);
  number = number + 2;
}
