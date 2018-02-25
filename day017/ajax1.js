/*
All modern browsers have a built-in XMLHttpRequest object 
to request data from a server.

===The XMLHttpRequest Object===
The XMLHttpRequest object can be used to request data from
 a web server.

The XMLHttpRequest object is a developers dream, because 
you can:

Update a web page without reloading the page.
Request data from a server - after the page has loaded.
Receive data from a server  - after the page has loaded.
Send data to a server - in the background.


===Property  Description===
onreadystatechange - Defines a function to be called when 
the readyState property changes.

readyState - Holds the status of the XMLHttpRequest. 

0: request not initialized 
1: server connection established
2: request received 
3: processing request 
4: request finished and response is ready

status  
200: "OK"
403: "Forbidden"
404: "Page not found"
For a complete list go to the Http Messages Reference
statusText  Returns the status-text (e.g. "OK" or "Not Found")

Property  Description
responseText - get the response data as a string
responseXML - get the response data as XML data

  Javascript uses XMLHTTPRequest for AJAX requests.

  jQuery uses the following:
  $.ajax() - Performs an async AJAX request
  $.getJSON() Loads JSON-encoded data from a server using a HTTP GET request
*/

/*
//Using Javascript to get AJAX data
var xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200) {
      console.log(this.responseText);
      console.log(JSON.parse(this.responseText));
      var data = JSON.parse(this.responseText);
      document.getElementById("omdbActors").innerHTML = data.Actors;
      document.getElementById("omdbTitle").innerHTML = data.Title;
      document.getElementById("omdbYear").innerHTML = data.Year;

      var poster = document.getElementById("omdbPoster");
      poster.setAttribute("src", data.Poster);
    }
  };
xhttp.open("GET", 'http://www.omdbapi.com/?apikey=60f7bdd3&t=sharknado', true);
xhttp.send();
*/

/*
// Using jQuery $.ajax()
$.ajax({
  url: 'http://www.omdbapi.com/?apikey=60f7bdd3&t=sharknado',
  success: function(response) {
    console.log(response);
    console.log(response.Actors);
    $("#omdbPoster").attr("src", response.Poster);
    $("#omdbTitle").html(response.Title);
    $("#omdbActors").html(response.Actors);
     $("#omdbYear").html(response.Year);
  }
});
*/

/*
// For 1st AJAX & JSON exercise using jquery $.ajax()
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
*/

/*
// For 2nd AJAX & JSON exercise using jQuery $.getJSON
 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=New+York,us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
  console.log(data);
  var city = data["name"];
  var temp = data["main"]["temp"];
  var pressure = data["main"]["pressure"];
  $("#city").html(city);
  $("#temp").html(temp);
   $("#pressure").html(pressure);
})
*/



// For 3rd AJAX & JSON exercise
$("#btn").click(function(){ 
var city2 = $("#city2").val();

 $.getJSON('http://api.openweathermap.org/data/2.5/weather?q=' + city2 + ',us&units=imperial&APPID=710d968a9a3a8f2c6da4dc4dfa8ec87b', 
  function(data) {
    console.log(data);
    var temp = data["main"]["temp"];
    $("#temp2").html(temp);
  })

})
