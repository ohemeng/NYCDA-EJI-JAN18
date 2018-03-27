fs = require('fs');

function outputTheDirectory(err, data){
		console.log('data: ', data);
}

fs.readdir('./', outputTheDirectory);
console.log("this come after");
