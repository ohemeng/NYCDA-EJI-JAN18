const request = require("request");
const http = require("http");
var myNYCDA;
request("http://www.nycda.com", function(err, response, body){
	if(err){
		console.log(err)
		}else if(!err && response.statusCode == 200){
		console.log(body);
		myNYCDA = body;
	}
})

http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	//res.end('<h3> Hello Node!!! </h3>')
	// res.write("My Website");
	res.end(myNYCDA);
}).listen(8080, function(){
	console.log("Server has started...")
})