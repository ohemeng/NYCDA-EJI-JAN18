const fs = require('fs');

fs.writeFile("my-file.txt", "Titanic, GodFather, Bridesmaid", function(err){
	if(err){
		console.log(err);
	}else{
		console.log("File was created");
	}
})