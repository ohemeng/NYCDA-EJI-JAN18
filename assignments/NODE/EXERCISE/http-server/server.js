const http = require('http');

/*
//create a server object:
http.createServer(function (req, res) {
	res.setHeader("content-type", "text/html");
  res.write('Hello World from Node Http Server'); //write a response to the client
  res.end(); //end the response
}).listen(8080); //the server object listens on port 8080
*/

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('<h1>Hello World from Node Server!</h1>');
}).listen(8080);