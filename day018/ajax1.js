// For 1st AJAX & JSON exercise
var url;
$.ajax({
  url: 'https://jsonplaceholder.typicode.com/photos/1',
  method: 'GET'
}).done(function(data) {
  console.log(data);
  console.log(data["title"]);
  url = data["thumbnailUrl"];
  $("img").attr("src", url);
});



// For 2nd AJAX & JSON exercise 
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York,us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
  console.log(data);
  var city = data["name"];
  var temp = data["main"]["temp"];
  $("#city").html(city);
  $("#temp").html(temp);
})




// // For 3rd AJAX & JSON exercise
$("#btn").click(function(){ 
var city2 = $("#city2").val();

 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
    console.log(data);
    var temp = data["main"]["temp"];
    $("#temp2").html(temp);
  })

})
