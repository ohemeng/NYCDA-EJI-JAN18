var stuffINeed = require("./ess.js");

// console.log(stuffINeed.essentials.food);
// console.log(stuffINeed.niceToHave.fun);
console.log(stuffINeed.arr[0]);
//console.log(stuffINeed.h);
console.log(stuffINeed.h);
console.log(stuffINeed.hello());
console.log(stuffINeed.str);

for(let i in stuffINeed.myObject){
	console.log(`${i} is ${stuffINeed.myObject[i]}`);
}