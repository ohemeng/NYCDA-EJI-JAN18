const fs = require('fs');
var fileData1;
var fileData2;

let promise1 = new Promise(function(resolve, reject){
fs.readFile("people1.json", "utf-8", function(err, data1){
	//fileData1 = data1;
	resolve(JSON.parse(data1));
	//console.log(JSON.parse(data1));
})
})
let promise2 = new Promise(function(resolve, reject){
fs.readFile("people2.json", "utf-8", function(err, data2){
	//fileData2 = data2;
	//console.log(fileData2);
	resolve(JSON.parse(data2));
})
})
Promise.all([promise1, promise2]).then(function(result){
//let data3 = data1.concat(data2);
console.log(result[0]);
console.log(result[1]);
let file3Arr = result[0].concat(result[1])
let file3ArrSorted = file3Arr.sort();
console.log(file3ArrSorted);
fs.writeFile("peopleComplete.txt", file3ArrSorted, function(err){
	console.log("Joint txt file created");
} )
let file3ArrJson = JSON.stringify(file3ArrSorted);
console.log(file3ArrJson);
fs.writeFile("peopleComplete.json", file3ArrJson, function(err){
	console.log("Json file created");
})
})
