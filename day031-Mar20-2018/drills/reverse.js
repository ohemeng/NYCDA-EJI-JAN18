const word = process.argv[2];
console.log(word.split("").reverse().join(""));

// let fs = require('fs');

// fs.readFile("test.txt", 'utf-8', function(err, data){
// 	console.log(data);
// 	let data2 = JSON.parse(data);
// 	console.log(`${data2[1].name} is a ${data2[1].job}`);
// })