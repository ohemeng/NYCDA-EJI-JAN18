console.log("jquery is running now");


var guessedNumber;
var numberOfGuesses = 0;

var secret = Math.floor(Math.random()*10 + 1);
console.log("The secret is " + secret);

// while (secret !== guessedNumber){
	$("#confirm").on("click", function(){
		numberOfGuesses++
		$("#yourNumberOfGuesses").text(numberOfGuesses);

		var guessedNumber = parseInt($("#guess").val());
		console.log("This is the guess " + guessedNumber);
		if (secret === guessedNumber) {
			$("#notCorrect").css("display", "none");
			$("#correct").css("display", "block");
			$("#revealSecret").css("display", "block");
			$("#secretNumber").text(secret);
	}else{
			$("#correct").css("display", "none");
			$("#revealSecret").css("display", "none");
			$("#notCorrect").css("display", "block");
	}

});



// };