const add = require('./addnumbers');
const sq = require('./squarenumbers');

let a = 2;
let b = 3;

console.log(add.addition(a,b));
let result = sq.square(add.addition(a,b));
console.log(`The square of the additon of a & b is ${result}`);
console.log(sq.square(b));

var data;
const fs = require('fs');
fs.readFile(__filename,'utf-8', function(err, data){
	console.log(data);

fs.writeFile("filedup.txt", data, function(err){
	console.log("file duplicated");
})

})

fs.readdir('.', function(err, files){
    console.log(files);
});