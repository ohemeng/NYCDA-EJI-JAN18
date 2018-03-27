const request = require('request');
const http = require('http');
var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'
request('https://newsapi.org/v1/articles?source=cnn&apiKey='+ apiKey, function(err, response, body){
	if(err){
		console.log(err)
	}else{
	//console.log(JSON.parse(body));
		let author = JSON.parse(body)["articles"][0]["author"];
		console.log(author);
		let description = JSON.parse(body)["articles"][0]["description"];
		console.log(description);
	}
})