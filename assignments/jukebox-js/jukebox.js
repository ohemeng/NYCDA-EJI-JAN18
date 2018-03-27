
var jukeSong;
var song;
const songs = ["Bye Baby", "Ladies Night", "I Will Survive", "Get Down"];
var i = 0;

var jukebox = document.getElementById('jukebox');
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var pause = document.getElementById('pause');
var currentTime;

play.addEventListener("click", function(){
	var song = document.getElementById('song').value;
	console.log("play clicked");
	setInterval(checkEnd, 1000);
	//playSong();
	jukebox.src = song + ".mp3";
	currentTime;
	jukebox.play();
});

stop.addEventListener("click", function(){
	console.log("stop clicked");
	jukebox.load();
});

pause.addEventListener("click", function(){
	console.log("pause clicked");
	currentTime = jukebox.currentTime;
	jukebox.pause();
});

function playSong(){
			jukebox.src = songs[i] + ".mp3";
			jukebox.play();
			setInterval(checkEnd, 1000);
};

function checkEnd(){
			console.log(jukebox.ended);

			if(jukebox.ended == true){
				console.log("Song Ended");
				i++;
				if(i == songs.length){
					jukebox.load();
					i=0;
				}
				playSong();
			}
}

const shuffle = document.getElementById("shuffle");
shuffle.addEventListener("click", function(){
	  var currentIndex = songs.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = songs[currentIndex];
    songs[currentIndex] = songs[randomIndex];
    songs[randomIndex] = temporaryValue;
  }

  console.log(songs);
  playSong();
  //return array;

})