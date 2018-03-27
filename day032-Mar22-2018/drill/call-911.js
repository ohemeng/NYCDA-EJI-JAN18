function makeCall(contactInfo, isPhoneCharged, callback){
	if(!isPhoneCharged){
		callback("You need to charge your phone");
	}else if(contactInfo !== '911'){
		callback("You need the emergency number");
	}else{
		setTimeout(function(){
			callback("Calling 911...");
		}, 1000)
	}
}

function calling(message){
	console.log(message);
}

makeCall("9191", true, calling);

// makeCall("911", true, function(message){
// 	console.log(message);
// })