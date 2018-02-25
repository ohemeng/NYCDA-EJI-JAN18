var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API

 $.getJSON('https://newsapi.org/v1/articles?source=techcrunch&apiKey=' + apiKey, 
  function(data) {
    console.log(data);
    var author = data["articles"][0]["author"];
    var content = data["articles"][0]["description"];
    var date = data["articles"][0]["publishedAt"];
    var title = data["articles"][0]["title"];
    var pic = data["articles"][0]["urlToImage"];

    $(".news-article").html(
    	author + "<br>" +
        title + "<br>" +
    	content + "<br>" +
    	date + "<br>" +
    	"<img src="+ pic + ">" + "<br>"
    	)

  })
 
