
var jukebox = document.getElementById('jukebox');
var play = document.getElementById('play');
var stop = document.getElementById('stop');
var pause = document.getElementById('pause');
var playlist = document.querySelector("#playlist");
var currentSong = document.querySelector("#currentSong");
var theCurrentTime = 0;

var jukeSong;
var i = 0;

function Song(title){
	this.title = title;
	this.play = play.onclick = function(){
							if(playlist.checked != true){
								title = document.getElementById('song').value;
								jukebox.src = title + ".mp3";
								setInterval(checkEnd, 1000);
 								jukebox.src = title + ".mp3";
								jukebox.currentTime  = theCurrentTime;
								jukebox.play();
								currentSong.innerHTML = title;
								}else{
									currentSong.innerHTML = title;
									playSong();
								}
							}
	this.stop = stop.onclick = function(){
								jukebox.load();
	}
	this.pause = pause.onclick = function(){
								theCurrentTime = jukebox.currentTime;
								jukebox.pause();
	}
}

var byeBaby = new Song("Bye Baby");
var getDown = new Song("Get Down");
var iWillSurvive = new Song("I Will Survive");
var ladiesNight = new Song("Ladies Night");

const songs = [getDown.title, byeBaby.title, iWillSurvive.title, ladiesNight.title];

function playSong(){
			jukebox.src = songs[i] + ".mp3";
			jukebox.play();
			currentSong.innerHTML = songs[i];
			setInterval(checkEnd, 1000);
};

function checkEnd(){
			if(jukebox.ended == true){
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
  playSong();
})