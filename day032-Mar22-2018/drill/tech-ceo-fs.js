const fs = require('fs');

fs.readFile('tech-ceo.txt', 'utf-8', function(err, data){
	data = JSON.parse(data);
	console.log(data[0]["name"]);
	console.log(data[0]["job"]);
})