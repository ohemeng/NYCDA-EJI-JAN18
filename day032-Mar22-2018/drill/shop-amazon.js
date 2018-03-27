function shopAmazon(selectedItem, haveKindle, callback){
	if(selectedItem === "ebook" && !haveKindle){
		callback("You need to have a kindle");
	}else{
		callback(`Thanks for buying ${selectedItem} from Amazon`);
	}
}

shopAmazon("pet food", false, function(message){
	console.log(message);
})