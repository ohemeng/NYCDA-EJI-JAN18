const request = require('request');
const movie = process.argv[2];

request('http://www.omdbapi.com/?apikey=60f7bdd3&t=' + movie, function(err, response, body){
	if(err){
		console.log(err);
	}else if(!err && response.statusCode == 200){
		//console.log(body);
		const actors = JSON.parse(body)["Actors"];
		console.log(`The actors in this movie are ${actors}.`)
	}
})