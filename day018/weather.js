$("#btn").click(function(){ 
$("span").text("");
var city = $("#city").val();
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
    console.log(data);
    var temp = data["main"]["temp"];
    var humidity = data["main"]["humidity"];
    var wind = data["wind"]["speed"];
    var description = data["weather"][0]["description"];
    var myIcon = data["weather"][0]["icon"];
    var imageSrc = "http://openweathermap.org/img/w/" + myIcon + ".png";
    
    $("#temp").html(temp);
    $("#humidity").html(humidity);
    $("#wind").html(wind);
    $("#description").html(description);
    $("#icon").attr("src", imageSrc);
  })

 $.getJSON("http://www.omdbapi.com/?apikey=60f7bdd3&t=titanic", function(data){
        console.log(data);
    })
 
})