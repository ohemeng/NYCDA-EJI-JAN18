// 1. Besure to write your code within the $(document).ready(...)
// 2. Add .click() event handlers for each of the boxes:
// - A) boxes #a10, #a20, and #a30 should each add 10, 20, and 30, respectively, to the value in the center box, #out
// - B) boxes #n10, #n20, and #n30 should each subtract 10, 20, and 30, respectively, from the value in the center box, #out
// - C) #red and #blue should change the background color of #out to red and blue, respectively
// - D) #out should change the background of #out to white, and set the value back to zero
// HINT: define a variable, var count = 0, at the top of your function; use this variable to keep track of what to display inside of #out
// Ex: when the user clicks #a10, add 10 to the var count, and then reflect this change in the HTML
//
// jQuery Methods Needed:
// - .click()
// - . text() or .html()
// - .css()

console.log("jQuery is working")

$("#a10").on("click", function(){
	console.log("a10 was clicked");
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = 10 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});

$("#a20").on("click", function(){
	console.log("a10 was clicked");
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = 20 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});

$("#a30").on("click", function(){
	console.log("a10 was clicked");
	// var mya10 = $("#a10").text();
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = 30 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});


$("#n10").on("click", function(){
	console.log("a10 was clicked");
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = -10 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});

$("#n20").on("click", function(){
	console.log("a10 was clicked");
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = -20 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});

$("#n30").on("click", function(){
	console.log("a10 was clicked");
	// var mya10 = $("#a10").text();
	var myout = $("#out").text();
	console.log(myout);
	var myout1 = -30 + parseInt(myout);
	console.log(myout1);
	$("#out").text(myout1);
});

$("#blue").on("click", function(){
	console.log("blue was clicked");
	$("#out").css("background-color", "blue");
});

$("#red").on("click", function(){
	console.log("blue was clicked");
	$("#out").css("background-color", "red");
});

$("#out").on("click", function() {
console.log("out was clicked");
$("#out").text(0);
$("#out").css("background-color", "white"); 

})
