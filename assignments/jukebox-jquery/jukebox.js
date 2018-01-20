console.log("jquery started");
var jukeSong;
const songs = ["Bye Baby", "Ladies Night"];

(function(){
	var song = $("#song").val();
	var song = song + ".mp3";
	jukeSong = new Audio(song);
	jukeSong.play();
})();

$("#play").click(function(){
	console.log("play clicked")
	song = $("#song").val();
	song = song + ".mp3";
	jukeSong = new Audio(song);
	jukeSong.play();
})

$("#pause").click(function(){
	jukeSong.pause();
})
$("#stop").click(function(){
	jukeSong.pause();
})

$("#shuffle").click(function(){
	for(var i=0; i < songs.length; i++){
		var song = songs[i] + ".mp3";
		jukeSong = new Audio(song);
		jukeSong.play();
	}
})