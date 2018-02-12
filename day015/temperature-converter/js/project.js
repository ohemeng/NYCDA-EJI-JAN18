console.log("jquery is running");


$("button#convertbtn").on("click", function(){
	console.log("button is clicked");
	console.log($("#dropdown").val());
	var selection = $("#dropdown").val();

	if (selection === "Celsius to Fahrenheit"){
	var celsius = $("input").val();
	var fahrenheit = parseInt(celsius * 9 / 5 + 32);
	console.log("fahrenheit = " + fahrenheit);
	$("span#convertunit").text("° C");
	$("span#converted").text(fahrenheit);
	$("span#units").text("F");
	}

	if (selection === "Fahrenheit to Celsius") {
	console.log(selection);
	var fahrenheit = $("input").val();
	var celsius = parseInt((fahrenheit - 32) * 5 / 9) ;
	$("span#convertunit").text("° F");
	$("span#converted").text(celsius);
	$("span#units").text("C");
	}
	

});

/*
var isClicked = false;

$("button#dropbtn").on("click", function(){
	if (isClicked === false){
	console.log("dropdown clicked");
	$("div#selection").css("display", "block");
	isClicked = true;
} else {
	$("div#selection").css("display", "none");
	isClicked = false;
}
});

$("#celsius").on("click", function(){
	var celcius = $("input").val();
	var fahrenheit = parseInt(celcius) * 9 / 5 + 32;

	$("span#converted").text(fahrenheit);
	$("span#units").text("fahrenheit");
	$("span#convertunit").text("celsius");
});


$("#fahrenheit").on("click", function(){
	var fahrenheit = $("input").val();
	var celsius = (parseInt(fahrenheit) - 32) * 5 / 9;

	$("span#converted").text(celsius);
	$("span#units").text("celsius");
	$("span#convertunit").text("fahrenheit");
	
});

*/
