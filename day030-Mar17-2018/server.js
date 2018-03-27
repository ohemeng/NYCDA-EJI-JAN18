const http = require('http');

http.createServer(function(req, res){
	res.write("<button id='btn'>Click Me </button>")
	res.write('<h1>Hello Node, you are running a server</h1>')
	res.write('<a href="http://www.yahoo.com">Yahoo</a>')
	res.write(`<script src=${spot}></script>`)
	res.end();
}).listen(8080, function(){
	console.log("Server start...");

})

