const http = require('http');

const server = http.createServer(function(req, res){
	if(req.url == '/'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<h1>Hudson from node server</h1>");
		res.end();
	}
	if(req.url == '/products'){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write("<html><body><h1>This is the product page</h1></body></html>")
		res.write("<img src='http://r.ddmcdn.com/s_f/o_1/cx_462/cy_245/cw_1349/ch_1349/w_720/APL/uploads/2015/06/caturday-shutterstock_149320799.jpg' >")
		res.end();
	}
})

server.listen(3000, function(){
	console.log("Server started on port 3000...");
})