const request = require("request");
const http = require('http');
var movieData;

request('http://www.omdbapi.com/?apikey=60f7bdd3&t=black+panther', function(err, response, body){
	if(!err && response.statusCode == 200){
		// console.log(body);
		// const actors = JSON.parse(body)["Actors"];
		// const released = JSON.parse(body)["Released"];
		// console.log(actors);
		// console.log(released);
		movieData = JSON.parse(body);
	}

})

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	var poster = movieData["Poster"];
	res.write('<img src='+ poster + '>');
	res.write('<br><h1>' + movieData["Title"] +'</h1>');
	res.end();
}).listen(8080, function(){
	console.log("server started...")
})

