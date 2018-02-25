
/* http://www.omdbapi.com/?i=tt3896198&apikey=60f7bdd3  */

$("#movie").on("keyup", function(){ 
$("span").text("");
var movie = $("#movie").val();
 $.getJSON('http://www.omdbapi.com/?apikey=60f7bdd3&t=' + movie, 
  function(data) {
    console.log(data);
    var poster = data["Poster"];
    var year = data["Year"];
    var rated = data["Rated"];
    var runtime = data["Runtime"];
    var genre = data["Genre"];
    $("#poster").attr("src", poster);
    $("#year").html(year);
    $("#rated").html(rated);
    $("#runtime").html(runtime);
    $("#genre").html(genre);
  }
 )

})