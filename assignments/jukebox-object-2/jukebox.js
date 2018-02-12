
// var jukebox = document.querySelector('.jukebox');
// var play = document.querySelector('.play');
// var stop = document.querySelector('.stop');
// var pause = document.getElementById('pause');
// //var title = document.getElementById('song').value;
// var playlist = document.querySelector("#playlist");
// var currentSong = document.querySelector("#currentSong");
 var theCurrentTime = 0;
var jukeSong;
var i = 0;
var root = document.getElementById("root");
var playAudio;
var audio = document.createElement('audio');



function Song(title, theId){
	this.title = title;
	this.theId = theId;
	this.audio = function(){
								//var root = document.getElementById("root");
								audio = document.createElement('audio');
								var source = document.createElement('source');
								root.appendChild(audio);
								audio.setAttribute("controls", true)
								audio.setAttribute("id", theId);
								console.log(title)
								audio.src = title + ".mp3";
								titleSpan = document.createElement("span");
								titleSpan.innerHTML=title;
								root.appendChild(titleSpan);
								var controlsDiv = document.createElement("div");
								root.appendChild(controlsDiv);
								var playBtn = document.createElement("button");
								playBtn.innerHTML = "PLAY";
								playBtn.setAttribute("id", "play"+ theId);
								controlsDiv.appendChild(playBtn);
								var stopBtn = document.createElement("button");
								stopBtn.innerHTML = "STOP";
								stopBtn.setAttribute("id", "stop"+ theId);
								controlsDiv.appendChild(stopBtn);
								var pauseBtn = document.createElement("button");
								pauseBtn.innerHTML = "PAUSE";
								pauseBtn.setAttribute("id", "pause"+ theId);
								controlsDiv.appendChild(pauseBtn);								
								};
	this.player = $("#root").append(this.audio);

	this.play =	$("#play"+ theId).click(function(){
									document.getElementById(theId).play();
								})					
	this.stop = $("#stop"+ theId).click(function(){
								document.getElementById(theId).load();
								});
	this.pause = $("#pause" + theId).click(function(){

								theCurrentTime = theId.currentTime;
								document.getElementById(theId).pause();
								});
}

var byeBaby = new Song("Bye Baby", "one");
var getDown = new Song("Get Down", "two");
var iWillSurvive = new Song("I Will Survive", "three");
var ladiesNight = new Song("Ladies Night", "four");



//Adding auto play from current playlist

//const songs = ["getDown", byeBaby, iWillSurvive, ladiesNight];
const songs = ["one", "two", "three", "four"];

playSong();

function playSong(){
			document.getElementById(songs[i]).play()
			//jukebox.src = songs[i] + ".mp3";
			//jukebox.currentTime  = theCurrentTime;
			//jukebox.play();
			//titleSpan.innerHTML = songs[i];
			setInterval(checkEnd, 1000);
};

function checkEnd(){
			if(document.getElementById(songs[i]).ended == true){
				i++;
				if(i == songs.length){
					i=0;
					document.getElementById(songs[i]).load();
					
				}
				playSong();
			}
}

// Adding Shuffle 

var shuffleBtn = document.createElement("button");
shuffleBtn.innerHTML = "SHUFFLE";
shuffleBtn.setAttribute("id", "shuffle");
root.appendChild(shuffleBtn);

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
