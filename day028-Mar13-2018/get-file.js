const fs = require('fs');

fs.readFile("movies.txt", "utf-8", function(err, data){
	if(err){
		console.log("err");
	}else{
		console.log(JSON.parse(data));
		let data2 = JSON.parse(data);
		console.log(data2[0]);
	}
})