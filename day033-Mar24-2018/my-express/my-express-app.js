//include express
var express = require('express');
//create an express application
var app = express();
//define a route on `/hello/world`
app.get('/hello/world', function(request, response) {
    console.log('got request for "/hello/world"');
    response.send('<h1>hello there!</h1>');
});

app.get('/products', function(request, response) {
    console.log('got request for products');
    response.send('<h1>This is the products page!</h1>');
});

app.get('/hello/:name', function(request, response) {
    response.send(`<h1>hello, ${request.params.name}</h1>`);
});

app.get('*', function(request, response) {
    response.status(404).send('uh oh! page not found!');
});


//have the application listen on a specific port
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});