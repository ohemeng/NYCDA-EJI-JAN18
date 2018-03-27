const request = require('request');

request('https://www.nycda.com', function(err, response, body){
	if(!err && response.statusCode == 200){
		console.log(body);
	}
})

