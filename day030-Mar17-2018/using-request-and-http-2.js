const request = require("request");
const http = require("http");
var myomdb;
request("http://www.omdbapi.com?apikey=60f7bdd3&t=titanic", function(err, response, body){
	if(err){
		console.log(err)
		}else if(!err && response.statusCode == 200){
		console.log(body);
		myomdb = body;
	}
})

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	//res.end('<h3> Hello Node!!! </h3>')
	// res.write("My Website");
	const actor = JSON.parse(myomdb)["Actors"];
	const poster = JSON.parse(myomdb)["Poster"];
	res.end('<h1 style="color: red">'+actor+'</h1><img src='+poster+">");
}).listen(8080, function(){
	console.log("Server has started...")
})