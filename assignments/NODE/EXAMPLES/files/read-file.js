const fs = require('fs');
fs.readFile("my-file.txt", "utf-8", function(err,data){
	if(err){
		console.log(err);
	}else{
		let dataArr = data.split(',');
		console.log(dataArr);
		for(let i in dataArr){
			console.log(dataArr[i]);
		}
	}
})