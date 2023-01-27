let foodsILike = ['vegy sosajes', 'edamamay', 'sushi', 'seaweed',
'sweets', 'licafish', 'fish fingers', 'chips', 'ice cream', 'mufans',
'cookies', 'cupcake', 'cake', 'milk', 'tomatos', 'potatos',
'karott', 'spagety', 'lasany'];


let oddNumbers = [1, 3, 5, 7];

let myMiscArray = [305, 'chips', false, 105, true, 'potatos',  , 'the one before is empty'];

let myArrays = [foodsILike, oddNumbers, myMiscArray];


// Indexing           0               1           2
let shortFoodList = ['vegy sosajes', 'edamamay', 'sushi'];


console.log(['vegy sosajes', 'edamamay', 'sushi'][1]);
// edamamay

console.log(shortFoodList[2]);
// sushi

let firstItem = shortFoodList[0]
console.log(firstItem);
// vegy sosajes

let i = 5 - 4;
console.log(shortFoodList[i]);
// edamamay


let someFoods = foodsILike.slice(2, 6);
console.log(someFoods);
// [ 'sushi', 'seaweed', 'sweets', 'licafish' ]

let otherFoods = foodsILike.slice(13, 14);
console.log(otherFoods);
// [ 'milk' ]


let lastFewThings = foodsILike.slice(17);
console.log(lastFewThings);
// [ 'spagety', 'lasany' ]


let combinedFoods = someFoods.concat(otherFoods);
console.log(combinedFoods);
// [ 'sushi', 'seaweed', 'sweets', 'licafish', 'milk' ]


let movies = ['Jaws', 'Home Alone', 'Get Out'];
console.log(movies[1]);
console.log(movies.slice(0, 2));
console.log(movies.slice(3));
let moreMovies = movies.concat(['Everything Everywhere All At Once', 'The Lighthouse']);
console.log(moreMovies[3]);


let lastItem = shortFoodList.pop();
console.log(lastItem);
// sushi

console.log(shortFoodList);
// ['vegy sosajes', 'edamamay']


shortFoodList.push('pears');
console.log(shortFoodList);
// [ 'vegy sosajes', 'edamamay', 'pears' ]


console.log(shortFoodList.length);
// 3


let robsDinner = 'spagety';
let deesDinner = robsDinner;
robsDinner = 'dal';
console.log(deesDinner);
// spagety


let snacks = ['edamamay', 'cookies']
let lunch = snacks;
snacks.push('sweets');
console.log(lunch);
// ['edamamay', 'cookies', 'sweets']


let movies2 = ['Dune', 'Arrival'];
let movies3 = movies2;
movies2.push(91);
console.log(movies2.length);
console.log(movies2.pop());
console.log(movies2.pop());
console.log(movies3);
