const http = require('http');

http.createServer(function(req, res){
	res.end('<h1>Hello Node, you are running a server</h1>');
}).listen(8080, function(){
	console.log("Server start...");
})