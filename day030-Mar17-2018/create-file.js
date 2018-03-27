const fs = require('fs');

fs.writeFile("test.txt", "Where is Hudson?", function(err){
	if(err){
		console.log(err);
	}else{
		console.log("File was created")
	}
})