console.log("jQuery is now running");
$("#click-me").on("click", function(){
	var currentAge = parseInt($("#age").val());
	console.log("Current age: " + currentAge);

	var maxAge = parseInt($("#max-age").val());

	var numberPerDay = parseInt($("#num-per-day").val());

	var total = (maxAge - currentAge) * numberPerDay * 365;
	console.log(total);
	$("#solution").text(total);
	var item = $("#item").val();
	$("#drink").text(item);
});