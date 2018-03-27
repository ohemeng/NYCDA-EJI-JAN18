let somename = require('./byron.js');
console.log(somename);
console.log(somename.name);
console.log(somename.name2);
console.log(somename.arr);
console.log(somename.arr[1]);
console.log(somename.obj.job);
console.log(somename.fn);
console.log(somename.fn());

for(let i in somename.obj){
	console.log(i + " is " + somename.obj[i]);
}
console.log(somename.obj.age);