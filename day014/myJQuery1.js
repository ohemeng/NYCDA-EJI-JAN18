//$(document).ready(function(){
$(document).click(function(){
	console.log("jquery is running");
$("h1").fadeOut(2000);
$("h1").fadeIn(3000);

$("img").slideUp(1000);
$("img").slideDown(2000);

$("p").hide(2000);
$("p").show(3000);

$("body").animate({
	opacity: 0.9,
	"background-color": "maroon",
	color: "white",
}, 2000);

$("img").attr("src", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg");

$("img").css("width", "400px");

$("h1").html("Hey! Where did you come from?");
})

$("img").click(function(){
	alert("you clicked me");
	$("img").fadeOut(2000);
	$("img").css("transform", "rotate(180deg)", 2000);$("img").attr("src", "https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg");
})
// })

