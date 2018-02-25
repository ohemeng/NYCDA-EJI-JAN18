// 1. Create .click() handlers for each of the thumbnails: #first, #second, #third, #fourth
// 2. Use .attr() to change the `src` attribute of #bigimage to correspond to image that was clicked

console.log("jquery is running");
// $("img").attr("src", "http://2.gravatar.com/avatar/82906f474d6b29c9acbee0c231774332?s=256&d=retro&r=g");

$("figure img").hide();

$("#first").on("click", function(){
	$("figure img").hide(1000);
$("figure img").attr("src", "img/1.jpg").slideDown(2000);
});

$("#second").on("click", function(){
	$("figure img").attr("src", "img/1.jpg");
	$("figure img").hide(1000);
	$("figure img").attr("src", "img/2.jpg").show(2000);
});

$("#third").on("click", function(){
	$("figure img").slideUp(1000);
$("figure img").attr("src", "img/3.jpg").fadeIn(2000);
});

$("#fourth").on("click", function(){
	$("figure img").hide();
$("figure img").attr("src", "img/4.jpg").fadeIn(2000);
});


