var express = require('express');
var parser = require('body-parser');
var app = express();

app.use(express.static('static'));
//parses requests with the content type of `application/json`
app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post('/submit', function(request, response) {
    //if a json payload is posted to `/submit`,
    //body-parser's json parser will parse it and
    //attach it as `request.body`.
    console.log(Object.keys(request.body));
    console.log(Object.values(request.body));
    console.log(request.body);
    response.send(`<h2>Request received from ${request.body.firstname} ${request.body.lastname}</h2>`);
});

app.listen(3000, function(){
	console.log("Server started on port 3000...");
})