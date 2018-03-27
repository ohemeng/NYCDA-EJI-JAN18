var express = require('express');
var parser = require('body-parser');
var fs = require('fs');
var app = express();

app.use(express.static('static'));
//parses requests with the content type of `application/json`
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

  let data3 = [];
app.post('/submit', function(request, response) {
    //if a json payload is posted to `/submit`,
    //body-parser's json parser will parse it and
    //attach it as `request.body`.
    //console.log(Object.keys(request.body));
    //console.log(Object.values(request.body));
    //console.log(request.body);
    response.send(`<h2>Request received from ${request.body.firstname} ${request.body.lastname}</h2>`);
   // let data = request.body.firstname + " " + request.body.lastname;
    let data = request.body;
    data3.push(data);
    console.log(data3);
    data4 = JSON.stringify(data3);
    fs.writeFile('./db.txt', data4, function(err){
    	console.log('data written');
    })
});

app.post('/find', function(request, response){
	// response.send(`<h2>Got ${request.body.firstname}`);
	console.log(request.body.firstname);
	var mysearchname = request.body.firstname;
	fs.readFile('./db.txt', 'utf-8', function(err, data){
		console.log(data);
		let data2 = JSON.parse(data);
		console.log(data2);
		console.log(data2[0].firstname);
		console.log(mysearchname);
		console.log(mysearchname == data2[0].firstname);
		for(let i in data2){
			//console.log(mysearchname);
			console.log(data2[i]);

			if(mysearchname === data2[i].firstname){
				response.send(`${data2[i].lastname}, ${data2[i].firstname} found`);
			};
		}
		// for(let i in data2){
		// if(mysearchname == data2[i].firstname){		response.send(`<h3>${data2.lastname}, ${data2.firstname}</h3>`);
		// 	response.send(data2[i].lastname);
		// 	}else{
		// 		response.send('Person not found');
		// 	}
		// }
	})
})

app.get('/findGet', function(request, response){
	console.log(request.query.firstname);
	var mysearchname = request.query.firstname;
	fs.readFile('./db.txt', 'utf-8', function(err, data){
		console.log(data);
		let data2 = JSON.parse(data);
		console.log(data2);
		console.log(data2[0].firstname);
		console.log(mysearchname);
		console.log(mysearchname == data2[0].firstname);
		for(let i in data2){
			//console.log(mysearchname);
			console.log(data2[i]);

			if(mysearchname === data2[i].firstname){
				response.send(`${data2[i].lastname}, ${data2[i].firstname} found`);
			};
		}
		// for(let i in data2){
		// if(mysearchname == data2[i].firstname){		response.send(`<h3>${data2.lastname}, ${data2.firstname}</h3>`);
		// 	response.send(data2[i].lastname);
		// 	}else{
		// 		response.send('Person not found');
		// 	}
		// }
	})
})

//Using findGet3 to get data into input value via jQuery
app.get('/findGet3', function(request, response){
	console.log(request.query.firstname);
	var mysearchname = request.query.firstname;
	fs.readFile('./db.txt', 'utf-8', function(err, data){
		response.send(data);
		// let data2 = JSON.parse(data);
		// console.log(data2);
		// console.log(data2[0].firstname);
		// console.log(mysearchname);
		// console.log(mysearchname == data2[0].firstname);
		// for(let i in data2){
		// 	//console.log(mysearchname);
		// 	console.log(data2[i]);

		// 	if(mysearchname === data2[i].firstname){
		// 		response.send(`${data2[i].lastname}, ${data2[i].firstname} found`);
		// 	};
		// }
		// for(let i in data2){
		// if(mysearchname == data2[i].firstname){		response.send(`<h3>${data2.lastname}, ${data2.firstname}</h3>`);
		// 	response.send(data2[i].lastname);
		// 	}else{
		// 		response.send('Person not found');
		// 	}
		// }
	})
})

app.listen(3000, function(){
	console.log("Server started on port 3000...");
})