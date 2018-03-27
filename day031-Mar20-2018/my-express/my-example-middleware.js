var express = require('express');
var fs = require('fs');
var app = express();
var data;

//middleware handlers look very similar to route handlers
app.use(function(request, response, next){
    //if we wanted to forbid query string usage,
    //that could be done in middleware.
    if(Object.keys(request.query).length > 0) {
    response.status(400).send("You can't use query strings!");
    } else {
    recordLog(request);
		next();
		} 
});


app.get('/hello/world', function(request, response) {
    response.send('hello there!');
});

app.get('/', function(request, response) {
    response.send('<h2>Hello home page');
});

app.get('/', function(request, response) {
		let myquery = request.query;
    response.send(`<h2>Hello home page ${request.query}</h2>`);
});

app.get('*', function(request, response) {
    response.status(404).send('uh oh! page not found!');
});

//Record log file log.txt below
function recordLog(request){
	  data = request.originalUrl;
    var time = new Date();
    data = data + " " + time + "\n";
    console.log(data + " from app.get");
    fs.appendFile('log.txt', data, function(err){
	//	console.log(data);
	//	console.log("data logged...")
})
}

app.listen(3000, function(){
	console.log("Server started on port 3000...");
})