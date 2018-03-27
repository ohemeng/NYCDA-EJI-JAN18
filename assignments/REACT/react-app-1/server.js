const express = require('express');

const app = express();

app.use(express.static('static'));

//--- Added by me
	
app.get(['/apple','/ale'], function(req, res){
	res.send("<h1>Apple or Ale?</h1>")
})

app.get('/hello/:name', function(req, res){  //e.g. localhost:3000/hello/john
	var name = req.params.name;
	name = name.substr(0,1).toUpperCase() + name.substr(1);//convert 1st letter to uppercase
	res.send("<h1>This is hello, " + name + ".</h1>");
})


//---end here--- 

app.listen(3000, function(){
	console.log("my server started...");
})