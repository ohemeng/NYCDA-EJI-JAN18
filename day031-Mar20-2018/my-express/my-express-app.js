const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.use(express.static('static'));

app.get('/', function(req, res){
	res.send('<h1>Hello World From Express</h1>');
})

app.get('/test', function(req, res){
	//res.render('test-2', {title: "My EJS from main test-2.ejs file"});
	let title = "hello, ejs title";
	let arr = ["home", "contact", "services"];
	res.render('test-ejs.ejs', {title, arr});
})

app.get('/test2/world', function(req, res){
	res.send(`<h1>Hello, from /test2/world</h1>`)
})

app.get('/test2/:name', function(req, res){
	res.send(`<h1>Hello, ${req.params.name} as a variable</h1>`)
})

app.get('/test2/woohoo', function(req, res){
	res.send(`<h1>Hello, from /test2/woohoo</h1>`)
})

app.get('/world', function(req, res){
	res.send(`<h1>World with no variable</h1>`)
})
app.get('/test3/:name', function(req, res){ //Using Francis Adu i.e. last & first names
	res.send(`<h1>Hello, ${req.params.name} as an object</h1>`)
})

app.get('/test4/:word', function(req, res){ //return the url parameter reversed.
	let reversedWord = (req.params.word).split("").reverse().join("");
	res.send(`<h1>${reversedWord}</h1>`)
})

app.get('/test5', function(req, res){  // with a query string /test5/?fname=Francis&lname=Adu
	console.log(req.query.fname + " " + req.query.lname);
	res.send(`<h1>Hello, ${req.query.fname} ${req.query.lname} as a query string</h1>`)
})

app.get('/who+a+', function(req, res){ //Using url to regex
	res.send(`<h1>Hello, from /who+a+. I know right?!</h1>`);
})

app.get('/test6/:fullname', function(req, res){ //Using fullname as a parameter
	res.send(`<h1>Thanks ${req.params.fullname}, for using your full name.</h1>`);
})

app.get('/test6', function(req, res){ //Getting the query string
	console.log(req.query);
	res.send(`<h1>Hello, ${req.query.name} from req.query.</h1>`);
})

app.listen(3000, function(){
	console.log("Server started on port 3000...")
})


// Below code for using http module for web server
// const http = require('http');

// http.createServer(function(req, res){
// 	res.write("<h1>Hello from http module</h1>");
// }).listen(8080, function(){
// 	console.log("http server started...")
// })