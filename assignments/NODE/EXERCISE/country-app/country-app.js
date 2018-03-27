const fs = require('fs');

fs.readFile('countries.json', 'utf-8', function(err, data){
	let myData = JSON.parse(data);
	console.log(myData[34]['name']);
	console.log(myData[34]['region']);
})