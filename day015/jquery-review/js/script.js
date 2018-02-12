console.log("jquery is running well");

$("div.box1").css("background-color", "blue");
$("div.box1").text("Box 1");

$("div.box2").css("background-color", "yellow");
$("div.box2").text("Box 2");


$("button.btn1").on("click", function(){
	console.log("button1 clicked");
	var myinput1 = $("input.inputcolor1").val();
	console.log(myinput1);
	$("div.box1").css("background-color", myinput1);
	$("input.inputcolor1").val("");
});

$("button.btn2").on("click", function(){
	console.log("button2 clicked");
	var myinput2 = $("input.inputcolor2").val();
	console.log(myinput2);
	$("div.box2").css("background-color", myinput2);
	$("input.inputcolor2").val("");
});

$("div.box1").on("click", function (){
$("div.box1").toggleClass("bigger");
})

$("div.box2").on("click", function (){
	$("div.box2").toggleClass("bigger");
})