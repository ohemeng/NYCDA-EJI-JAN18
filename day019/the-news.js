var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API

var source = "the-huffington-post";
$("h2").html("Current News Highlights");


$.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
function(data) {
  console.log(data);

  for(var i = 0; i < data["articles"].length; i++){
    console.log(data["articles"].length);

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var url = data["articles"][i]["url"];

    $(".all-news-articles").append(
      "<div class='article'>" +
      "<img src="+ pic + ">" + 
      "<div class='info'>" +
      author + "<br>" +
      "<label>" + title + "</label>" + "<br>" +
      content + "<br>" +
      "<a href="+  url  + " + class='more'> more...</a>" +
      "<p>"+ date + "</p>" + "<br>" +
      "</div>" +
      "</div><br>"
    )
}
})


$("#home").click(function(){
// $(document).click(function(e){
 // var item = $(e.target).click();
//  if(item == "home"){
  $(".all-news-articles").html("");
  $("h2").html("Current News Highlights");
  var source = "the-huffington-post";
  
$.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
function(data) {
  console.log(data);

	for(var i = 0; i < data["articles"].length; i++){
		console.log(data["articles"].length);

		var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var url = data["articles"][i]["url"];

    $(".all-news-articles").append(
    	"<div class='article'>" +
    	"<img src="+ pic + ">" + 
    	"<div class='info'>" +
  		author + "<br>" +
  		"<label>" + title + "</label>" + "<br>" +
  		content + "<br>" +
  		"<a href="+  url  + " + class='more'> more...</a>" +
  		"<p>"+ date + "</p>" + "<br>" +
  		"</div>" +
  		"</div><br>"
		)
}
})
})


$("#entertainment").click(function(){
$(".all-news-articles").html("");
$("h2").html("Entertainment News");

var source = "mtv-news";

$.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
function(data) {
  console.log(data);

  for(var i = 0; i < data["articles"].length; i++){
    console.log(data["articles"].length);

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var url = data["articles"][i]["url"];

    $(".all-news-articles").append(
      "<div class='article'>" +
      "<img src="+ pic + ">" + 
      "<div class='info'>" +
      author + "<br>" +
      "<label>" + title + "</label>" + "<br>" +
      content + "<br>" +
      "<a href="+  url  + " + class='more'> more...</a>" +
      "<p>"+ date + "</p>" + "<br>" +
      "</div>" +
      "</div><br>"
    )
}
})
})

$("#sports").click(function(){
$(".all-news-articles").html("");
$("h2").html("Sports News");
var source = "espn";

$.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
function(data) {
  console.log(data);

  for(var i = 0; i < data["articles"].length; i++){
    console.log(data["articles"].length);

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var url = data["articles"][i]["url"];

    $(".all-news-articles").append(
      "<div class='article'>" +
      "<img src="+ pic + ">" + 
      "<div class='info'>" +
      author + "<br>" +
      "<label>" + title + "</label>" + "<br>" +
      content + "<br>" +
      "<a href="+  url  + " + class='more'> more...</a>" +
      "<p>"+ date + "</p>" + "<br>" +
      "</div>" +
      "</div><br>"
    )
}
})
})

$("#economy").click(function(){
$(".all-news-articles").html("");
$("h2").html("Economic News");

var source = "the-wall-street-journal";

$.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
function(data) {
  console.log(data);

  for(var i = 0; i < data["articles"].length; i++){
    console.log(data["articles"].length);

    var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];
    var url = data["articles"][i]["url"];

    $(".all-news-articles").append(
      "<div class='article'>" +
      "<img src="+ pic + ">" + 
      "<div class='info'>" +
      author + "<br>" +
      "<label>" + title + "</label>" + "<br>" +
      content + "<br>" +
      "<a href="+  url  + " + class='more'> more...</a>" +
      "<p>"+ date + "</p>" + "<br>" +
      "</div>" +
      "</div><br>"
    )
}
})
})