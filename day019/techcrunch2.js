var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API

$.getJSON('https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + apiKey, 
function(data) {
  console.log(data);

	for(var i = 0; i < data.articles.length; i++){
		console.log(data.articles.length);

		var author = data["articles"][i]["author"];
    var content = data["articles"][i]["description"];
    var date = data["articles"][i]["publishedAt"];
    var title = data["articles"][i]["title"];
    var pic = data["articles"][i]["urlToImage"];

    $(".all-news-articles").append(
  		author + "<br>" +
      title + "<br>" +
  		content + "<br>" +
  		date + "<br>" +
  		"<img src="+ pic + ">" + "<br>" +
      "<hr>"
		)
}
})

