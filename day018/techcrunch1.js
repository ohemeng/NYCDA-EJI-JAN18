var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API

 $.getJSON('https://newsapi.org/v1/articles?source=bloomberg&apiKey=' + apiKey, 
  function(data) {
    console.log(data);
    var author = data["articles"][1]["author"];
    var content = data["articles"][1]["description"];
    var date = data["articles"][1]["publishedAt"];
    var title = data["articles"][1]["title"];
    var pic = data["articles"][1]["urlToImage"];

    $(".news-article").html(
    	author + "<br>" +
        title + "<br>" +
    	content + "<br>" +
    	date + "<br>" +
    	"<img src="+ pic + ">" + "<br>"
    	)

  })
 
