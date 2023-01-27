let myEmptyObject = {}


let bread1 = {
	baked: false,
	bake: function(minutes) {
		if (minutes >= 5) {
			this.baked = true;
		}
	}
}


console.log(bread1);
// { baked: false, bake: [Function: bake] }
console.log(bread1.baked);
// false
bread1.bake(3);
console.log(bread1.baked);
// false
bread1.bake(5);
console.log(bread1.baked);
// true


let bread2 = {
	baked: false,
	bake: function(minutes) {
		if (minutes >= 5) {
			this.baked = true;
		}
	}
}


for (let bread of [bread1, bread2]) {
	if (!bread.baked) {
		bread.bake(5);
	}
}
console.log(bread2.baked);
// true


let breadBakeStatuses = [true, false];
function bakeAllBread(statuses) {
	let newBreadBakeStatuses = [];
	for (let oldStatus of statuses) {
		newBreadBakeStatuses.push(true);
	}
	return newBreadBakeStatuses;
}
let baked = bakeAllBread(breadBakeStatuses);
console.log(baked);
// [ true, true ]


class Bread {
	constructor() {
		this.baked = false;
	}
	bake(minutes) {
		if (minutes >= 5) {
			this.baked = true;
		}
	}
}


let bread3 = new Bread();
let bread4 = new Bread();
console.log(bread4.baked);
// false
bread4.bake(6);
console.log(bread4.baked);
// true
console.log(bread3.baked);
// false


class Flatbread extends Bread {
	constructor() {
		super();
		this.buttered = false;
	}
	butter() {
		this.buttered = true;
	}
}


let bread5 = new Flatbread();
bread5.bake(5);
bread5.butter();
console.log(bread5.baked, bread5.buttered);
// true, true


let breadDictionary = new Map();
breadDictionary.set('flatbread', 'a bread (such as focaccia or naan) that has a wide surface and little thickness');
breadDictionary.set('boule', 'a round, usually crusty loaf of bread');
breadDictionary.set('corn bread', 'bread made with cornmeal');
console.log(breadDictionary.has('baguette'));
// false
console.log(breadDictionary.get('corn bread'));
// bread made with cornmeal


console.log(breadDictionary.keys());
// [Map Iterator] { 'flatbread', 'boule', 'corn bread' }

for (let key of breadDictionary.keys()) {
	console.log(key, breadDictionary.get(key));
}
// a bread (such as focaccia or naan) that has a wide surface and little thickness
// a round, usually crusty loaf of bread
// bread made with cornmeal
