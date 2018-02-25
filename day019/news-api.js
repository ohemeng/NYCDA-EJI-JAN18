var apiKey = 'f6f82209f310452ab39a5dd0adb391c1'  // my api key for News API
$("#btn").click(function(){ 
$("span").text("");
var source = $("#source").val();
 $.getJSON('https://newsapi.org/v1/articles?source=' + source + '&apiKey=' + apiKey, 
  function(data) {
    console.log(data);
    var author = data["articles"][0]["author"];
    var content = data["articles"][0]["description"];
    var date = data["articles"][0]["publishedAt"];
    var title = data["articles"][0]["title"];
    var pic = data["articles"][0]["urlToImage"];
    
    $("#author").html(author);
    $("#title").html(title);
    $("#content").html(content);
    $("#date").html(date);
    $("#pic").attr("src", pic);
    $("#pic").css("width", "200px");
  })
 
})

