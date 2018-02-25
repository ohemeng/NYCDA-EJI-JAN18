var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API

var source = "the-huffington-post";
$("h2").html("Current News Highlights");
getArticles(source);

$(".nav a").click(function(e){
  console.log(e.target.id);
  var newslink =  e.target.id;
  var newsPage = {
    home: "the-huffington-post",
    entertainment: "mtv-news",
    sports: "espn",
    economy: "bloomberg"
  }
  $(".all-news-articles").html("");
  $("h2").html(newslink.toUpperCase());
  var source = newsPage[newslink];
  getArticles(source);
})

function getArticles(source){
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
}

