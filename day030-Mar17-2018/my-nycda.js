const request = require('request');
const http = require('http');

var myNYCDA;

//We are getting nycda home page data
request('http://www.nycda.com', function(err, response, body){
	if(err){
		console.log(err);
	}else if(!err && response.statusCode == 200){
		myNYCDA = body;
	}
})

//We pass the body or data as myNYCDA to http server
http.createServer(function(req, res){
	res.writeHead(200, {'Content-Type':'text/html'});
	res.write(myNYCDA);
	res.end();
}).listen(8080, function(){
	console.log("Server has started...");
})