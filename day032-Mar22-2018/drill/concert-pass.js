function concertPass(age, haveTicket, callback){
	if(age < 18){
		callback("Stop acting so grown");
	}else if(!haveTicket){
		callback("Please buy a ticket");
	}else{
		callback("Please enter and take a seat");
	}
}

// function gateCheck(message){
// 	console.log(message);
// }

//concertPass(21, false, gateCheck);

// concertPass(21, true, function(message){
// 	console.log(message)
// })

concertPass(21, true, message =>{console.log(message)});